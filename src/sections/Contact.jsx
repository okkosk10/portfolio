// sections/Contact.jsx

import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <h2 className={styles.sectionTitle}>연락처</h2>
        <p className="text-gray-700 mb-4">프로젝트나 협업 문의는 아래 이메일 또는 GitHub를 통해 연락 주세요.</p>
        <div className="text-lg space-y-2 text-gray-800">
          <p>📧 youremail@example.com</p>
          <p>
            💻 <a href="https://github.com/okkosk10" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/okkosk10</a>
          </p>
        </div>
      </div>
    </section>
  );
}