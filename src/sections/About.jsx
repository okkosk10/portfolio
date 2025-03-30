// sections/About.jsx

import styles from "../styles/About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>

        {/* 소개 헤더 */}
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>소개</h2>
          <p className={styles.subtitle}>
            프론트엔드 개발자 전양근입니다.<br />
            React 기반 웹 시스템, 3D Viewer, Digital Twin 등<br />
            실무 중심의 개발 경험을 바탕으로 다양한 기술을 구현할 수 있습니다.
          </p>
        </div>

        {/* 기술 스택 */}
        <div className={styles.skillBlock}>
          <h3 className={styles.blockTitle}>💡 Key Skills</h3>
          <div className={styles.tags}>
            <span>React</span>
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>Three.js</span>
            <span>WebGL</span>
            <span>Oracle</span>
            <span>MySQL</span>
            <span>Git</span>
            <span>Figma</span>
          </div>
        </div>

        {/* 업무 성향 */}
        <div className={styles.traitsBlock}>
          <h3 className={styles.blockTitle}>💼 주요 업무 성향</h3>
          <ul className={styles.traitsList}>
            <li>복잡한 UI/UX 요구사항 분석 및 실제 구현 경험</li>
            <li>3D 기반 데이터 시각화 및 최적화 작업 다수</li>
            <li>백엔드와 연동되는 기능 개발 및 서버 구조 이해</li>
            <li>팀 중심 협업과 커뮤니케이션에 강함</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
