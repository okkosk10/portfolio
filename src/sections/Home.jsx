// sections/Home.jsx

// 해당 섹션의 스타일을 임포트합니다.
import styles from "../styles/Home.module.css";

// 홈 섹션 컴포넌트를 정의합니다.
export default function Home() {
  return (
    // 홈 섹션의 ID와 스타일을 적용합니다.
    <section id="home" className={`${styles.homeSection} relative overflow-hidden`}>
      {/* 배경 데코 요소 - 좌상단 블루 원 */}
      <div className="absolute w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 top-[-80px] left-[-80px] animate-pulse z-0" />

      {/* 배경 데코 요소 - 우하단 퍼플 원 */}
      <div className="absolute w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 bottom-[-100px] right-[-100px] animate-pulse z-0" />

      {/* 컨테이너 스타일을 적용합니다. */}
      <div className={`${styles.homeContainer} relative z-10`}>
        {/* 포트폴리오 제목을 표시합니다. */}
        <h1 className={styles.title}>전양근 포트폴리오</h1>
        {/* 부제목을 표시합니다. */}
        <p className={styles.subtitle}>React & 3D Viewer 기반 프론트엔드 개발자</p>
      </div>
    </section>
  );
}
