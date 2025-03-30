// sections/Contact.jsx

// Contact 컴포넌트: 연락처 정보를 제공하는 섹션을 렌더링합니다.
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    // 연락처 섹션의 컨테이너로, 모듈화된 CSS 클래스를 적용합니다.
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        {/* 섹션 타이틀 */}
        <h2 className={styles.sectionTitle}>연락처</h2>
        {/* 이메일 및 GitHub 링크 */}
        <p>
      📧 <a href="mailto:okkosk10@naver.com" className="hover:underline text-blue-600">
            okkosk10@naver.com
          </a>
        </p>
      </div>
    </section>
  );
}