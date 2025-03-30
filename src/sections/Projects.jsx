// sections/Projects.jsx

// 해당 섹션의 스타일을 임포트합니다.
import styles from "../styles/Projects.module.css";

// 프로젝트 섹션 컴포넌트를 정의합니다.
export default function Projects() {
  return (
    // 프로젝트 섹션의 ID와 스타일을 적용합니다.
    <section id="projects" className={styles.projectsSection}>
      {/* 컨테이너 스타일을 적용합니다. */}
      <div className={styles.projectsContainer}>
        {/* 섹션 제목을 표시합니다. */}
        <h2 className={styles.sectionTitle}>프로젝트</h2>
        {/* 프로젝트 카드들을 그리드 형태로 표시합니다. */}
        <div className={styles.cardGrid}>
          {/* 각 프로젝트에 대한 카드 컴포넌트를 생성합니다. */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>하이닉스 3D Viewer</h3>
            <p className={styles.cardText}>React와 WebGL을 기반으로 한 3D 플랫폼 구축. 4D 시뮬레이션 및 Viewer 고도화 개발.</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>KT Digital Twin</h3>
            <p className={styles.cardText}>대구 상하수도 시설을 위한 디지털 트윈 플랫폼 개발. Web 3D 엔진을 통한 시각화 구현.</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>현대제철 유해화학물질 관리</h3>
            <p className={styles.cardText}>파노라마 기반 UI로 유해 화학물질 시각화. 법규 기반의 위험물 관리 시스템 구축.</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>사내 자동화 도면 프로젝트</h3>
            <p className={styles.cardText}>내부 전산화 프로젝트로 자동화 도면 시스템 개발 지원.</p>
          </div>
        </div>
      </div>
    </section>
  );
}