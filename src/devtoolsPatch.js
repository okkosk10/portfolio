import { version as reactVersion } from "react";

const fallbackVersion = reactVersion || "19.1.0";

function isValidVersion(version) {
  return typeof version === "string" && /^\d+\.\d+\.\d+/.test(version);
}

function normalizeRenderer(renderer) {
  if (!renderer || isValidVersion(renderer.version)) {
    return renderer;
  }

  try {
    renderer.version = fallbackVersion;
    return renderer;
  } catch {
    return { ...renderer, version: fallbackVersion };
  }
}

function patchHook(hook) {
  if (!hook || hook.__portfolioSemverPatch) {
    return;
  }

  if (hook.renderers instanceof Map) {
    for (const [id, renderer] of hook.renderers) {
      hook.renderers.set(id, normalizeRenderer(renderer));
    }

    const originalSet = hook.renderers.set.bind(hook.renderers);
    hook.renderers.set = (id, renderer) => originalSet(id, normalizeRenderer(renderer));
  }

  if (typeof hook.inject === "function") {
    const originalInject = hook.inject.bind(hook);
    hook.inject = (renderer) => originalInject(normalizeRenderer(renderer));
  }

  hook.__portfolioSemverPatch = true;
}

if (import.meta.env.DEV && typeof window !== "undefined") {
  const currentHook = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;

  if (currentHook) {
    patchHook(currentHook);
  } else {
    let devtoolsHook;

    try {
      Object.defineProperty(window, "__REACT_DEVTOOLS_GLOBAL_HOOK__", {
        configurable: true,
        get() {
          return devtoolsHook;
        },
        set(value) {
          devtoolsHook = value;
          patchHook(devtoolsHook);
        },
      });
    } catch {
      // If the extension owns a non-configurable hook, leave it untouched.
    }
  }
}
