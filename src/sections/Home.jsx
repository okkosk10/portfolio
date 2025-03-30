// sections/Home.jsx

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <section id="home" className={styles.homeSection}>
      <div className={styles.homeContainer}>
        <h1 className={styles.title}>전양근 포트폴리오</h1>
        <p className={styles.subtitle}>React & 3D Viewer 기반 프론트엔드 개발자</p>
      </div>
    </section>
  );
}
