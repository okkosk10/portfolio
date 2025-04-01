// glbGenerator.js
const fs = require("fs");
const path = require("path");

const inputDir = path.join(__dirname, "src", "demo", "FourDSimulation", "assets");
const outputFile = path.join(__dirname, "src", "demo", "FourDSimulation", "glbFiles.js");

fs.readdir(inputDir, (err, files) => {
  if (err) return console.error("❌ 폴더 읽기 오류:", err);

  const glbFiles = files.filter(file => file.endsWith(".glb"));

  const imports = [];
  const groups = [];
  let group = [];

  glbFiles.forEach((file, idx) => {
    const varName = file
      .replace(".glb", "")
      .replace(/[^a-zA-Z0-9]/g, "_"); // 변수명 안전하게 변환

    imports.push(`import ${varName} from './assets/${file}';`);
    group.push(`    { name: "${file}", url: ${varName} }`);

    if ((idx + 1) % 10 === 0 || idx === glbFiles.length - 1) {
      groups.push(`  [\n${group.join(",\n")}\n  ]`);
      group = [];
    }
  });

  const content = `// 🔧 이 파일은 glbGenerator.js에 의해 자동 생성되었습니다.
${imports.join("\n")}

export const glbGroups = [
${groups.join(",\n")}
];
`;

  fs.writeFileSync(outputFile, content);
  console.log("✅ glbFiles.js 생성 완료!");
});