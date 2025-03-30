// sections/About.jsx

import styles from "../styles/About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <h2 className={styles.sectionTitle}>소개</h2>
        <p>5년 차 프론트엔드 개발자로, React, Node.js 기반 시스템 구축 경험이 풍부하며 3D Viewer, Digital Twin 중심의 프로젝트를 다수 수행했습니다.</p>
        <ul className="list-disc list-inside">
          <li>React, TypeScript, Node.js</li>
          <li>WebGL, Three.js, TailwindCSS, Vite</li>
        </ul>
      </div>
    </section>
  );
}