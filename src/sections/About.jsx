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

        {/* 자기소개 내용 */}
        <p className="mb-4">
          5년 차 프론트엔드 개발자입니다.  
          React, TypeScript, Node.js 기반 웹 시스템 구축 경험이 있으며,  
          3D Viewer, Digital Twin 등 시각화 기반 프로젝트를 다수 수행했습니다.
        </p>

        <p className="mb-4">
          경력 기간에 비해 다양한 환경에서 실무 경험을 쌓아왔으며,  
          프론트엔드뿐만 아니라 데이터베이스 설계, 서버 구축 및 유지보수 등  
          전체적인 서비스 구조를 고려한 개발을 주도적으로 수행해 왔습니다.
        </p>

        <p className="mb-4">
          주요 기술 스택은 React, TypeScript, Node.js, WebGL이며,  
          Three.js, Chart.js, HOOPS Communicator 등 외부 라이브러리 활용 경험도 보유하고 있습니다.
        </p>

        <p className="mb-4">
          Oracle 및 MySQL 기반의 데이터베이스 설계, 쿼리 작성 및 연동 경험이 있으며,  
          Node.js 기반의 백엔드 서버 구축 및 유지보수 경험도 가지고 있습니다.
        </p>

        <p className="mb-4">
          협업 시 명확한 역할 분담과 커뮤니케이션을 중시하며,  
          문서화, 기능 단위 분리, 테스트 코드 작성 등을 통해  
          코드 유지보수성과 재사용성을 고려한 개발을 지향합니다.
        </p>

        <p className="mb-4">
          사용 툴은 Git 기반 버전 관리, Figma를 활용한 UI 설계 협업,  
          Postman을 통한 API 테스트 및 연동 경험이 있습니다.
        </p>
      </div>
    </section>
  );
}