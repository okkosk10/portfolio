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
            React 기반 웹 시스템과 인터랙티브 UI 구현 경험을 바탕으로<br />
            AI를 활용한 코드 작성, 문제 분석, 리팩토링을 개발 과정에 적극적으로 적용합니다.
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
            <span>AI-assisted Development</span>
            <span>AI Integration</span>
            <span>LLM API</span>
            <span>Dashboard</span>
            <span>Oracle</span>
            <span>MySQL</span>
            <span>Git</span>
          </div>
        </div>

        {/* 업무 성향 */}
        <div className={styles.traitsBlock}>
          <h3 className={styles.blockTitle}>💼 주요 업무 성향</h3>
          <ul className={styles.traitsList}>
            <li>AI 도구를 활용한 기능 설계, 코드 작성, 디버깅, 리팩토링 경험</li>
            <li>복잡한 업무 요구사항을 사용자 중심 UI로 구조화</li>
            <li>3D 기반 데이터 시각화와 웹 렌더링 최적화 경험</li>
            <li>AI 기능의 비용, 사용량, fallback을 고려한 운영형 설계 지향</li>
            <li>백엔드 API와 연동되는 대시보드 및 모니터링 화면 구현</li>
            <li>팀 중심 협업과 명확한 커뮤니케이션에 강함</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
