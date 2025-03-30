// sections/About.jsx

// 해당 섹션의 스타일을 임포트합니다.
import styles from "../styles/About.module.css";

// 소개 섹션 컴포넌트를 정의합니다.
export default function About() {
  return (
    // 소개 섹션의 ID와 스타일을 적용합니다.
    <section id="about" className={styles.aboutSection}>
      {/* 컨테이너 스타일을 적용합니다. */}
      <div className={styles.aboutContainer}>
        {/* 섹션 제목을 표시합니다. */}
        <h2 className={styles.sectionTitle}>소개</h2>
        {/* 자기소개 내용을 표시합니다. */}
        <p>5년 차 프론트엔드 개발자로, React, Node.js 기반 시스템 구축 경험이 풍부하며 3D Viewer, Digital Twin 중심의 프로젝트를 다수 수행했습니다.</p>
        {/* 기술 스택 목록을 표시합니다. */}
        <ul className="list-disc list-inside">
          <li>React, TypeScript, Node.js</li>
          <li>WebGL, Three.js, TailwindCSS, Vite</li>
        </ul>
      </div>
    </section>
  );
}