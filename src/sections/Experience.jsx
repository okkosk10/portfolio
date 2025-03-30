// sections/Experience.jsx

import styles from "../styles/Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={styles.experienceSection}>
      <div className={styles.experienceContainer}>
        <h2 className={styles.sectionTitle}>경력</h2>

        {/* 경력 리스트 */}
        <div className={styles.job}>
          <h3 className={styles.company}>이노액티브 (2019.12 ~ 2024.11)</h3>
          <ul className={styles.jobDetails}>
            <li>
              <strong>당진 제철소 유해 화학물질 관리 시스템 개발 (현대제철)</strong><br />
              · 파노라마 이미지를 활용한 현장 관리 시스템 구축<br />
              · 유해 화학물질의 시각적 모니터링 및 효율적인 관리 시스템 개발
            </li>
            <li>
              <strong>대구 상하수도 Digital Twin 시스템 개발 (KT)</strong><br />
              · Web 3D 엔진을 활용하여 상하수도 관리 시스템 구축
            </li>
            <li>
              <strong>건설 현장 관리 시스템 개발 (사내 프로젝트)</strong><br />
              · 현장 내 이슈 관리 시스템 구축 및 도식화 작업
            </li>
            <li>
              <strong>3D Portal 시스템 개발 (하이닉스)</strong><br />
              · React 기반의 3D Viewer 기능 구축<br />
              · 대용량 데이터 렌더링 최적화 및 웹 환경에서의 3D 시각화 지원
            </li>
            <li>
              <strong>3D Portal SM 업무 (하이닉스)</strong><br />
              · 시스템 유지보수 및 기능 개선을 통한 안정성 확보<br />
              · 운영 및 장애 대응을 위한 지속적인 모니터링 및 최적화
            </li>
            <li>
              <strong>4D 시뮬레이션 개발 (LG CNS)</strong><br />
              · React 기반 3D Viewer에 4D 시뮬레이션 기능 추가<br />
              · 공정 시뮬레이션 및 일정 관리 기능 구현
            </li>
            <li>
              <strong>3D Portal 시스템 고도화 개발 (하이닉스)</strong><br />
              · 기존 시스템 고도화 및 신규 기능 개발<br />
              · POC 지원을 통한 프로젝트 확장 가능성 검토
            </li>
            <li>
              <strong>3D Viewer 플랫폼 개발 (사내 프로젝트)</strong><br />
              · Node.js 기반 서버 구축 및 메인 페이지 개발<br />
              · 웹 기반 3D Viewer 환경 최적화 및 성능 개선
            </li>
            <li>
              <strong>자동화 도면 프로젝트 (하이닉스)</strong><br />
              · 시스템 개발 지원 및 최적화 작업 진행<br />
              · 도면 자동화 프로세스를 통한 업무 효율성 증대
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}