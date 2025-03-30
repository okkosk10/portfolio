// sections/Projects.jsx
import styles from "../styles/Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.projectsContainer}>
        <h2 className={styles.sectionTitle}>기술 기반 구현 예시</h2>

        <div className={styles.cardGrid}>
          {/* 1. WebGL Viewer */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>WebGL 기반 3D Viewer</h3>
            <p className={styles.cardText}>
              WebGL API를 활용하여 3D 객체 렌더링 및 카메라 조작 기능을 구현한 예시입니다.<br />
              <strong>사용 기술:</strong> HTML5, JavaScript, WebGL<br />
              <strong>구현 기능:</strong> 씬 구성, 객체 선택, 회전/확대 축소 등 사용자 상호작용 처리
            </p>
            <a href="https://your-demo1.vercel.app" target="_blank" className={styles.demoButton}>
              데모 보기
            </a>
          </div>

          {/* 2. Digital Twin UI */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Digital Twin 시각화 UI</h3>
            <p className={styles.cardText}>
              설비 상태 변화를 가상의 센서 데이터로 시각화한 실시간 대시보드 예시입니다.<br />
              <strong>사용 기술:</strong> React, Chart.js, CSS Module<br />
              <strong>구현 기능:</strong> 실시간 데이터 반영, 상태별 색상 변화, 반응형 레이아웃
            </p>
            <a href="https://your-demo2.vercel.app" target="_blank" className={styles.demoButton}>
              데모 보기
            </a>
          </div>

          {/* 3. 4D 시뮬레이션 */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>4D 시뮬레이션 UI</h3>
            <p className={styles.cardText}>
              시간 흐름에 따라 객체 상태를 변화시키는 시뮬레이션 기능을 구현한 예시입니다.<br />
              <strong>사용 기술:</strong> React, WebGL, JavaScript<br />
              <strong>구현 기능:</strong> 슬라이더 기반 시점 제어, 객체 상태(색상/투명도) 변화
            </p>
            <a href="https://your-demo3.vercel.app" target="_blank" className={styles.demoButton}>
              데모 보기
            </a>
          </div>

          {/* 4. 서버 연동 예시 */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>간단한 서버 연동 예시</h3>
            <p className={styles.cardText}>
              Node.js로 구성된 서버와 React 프론트엔드 간의 API 연동을 구현한 예시입니다.<br />
              <strong>사용 기술:</strong> React, Node.js, Express<br />
              <strong>구현 기능:</strong> 목록 조회, 등록/삭제, 프론트-서버 간 데이터 연동 흐름 구현
            </p>
            <a href="https://your-demo4.vercel.app" target="_blank" className={styles.demoButton}>
              데모 보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
