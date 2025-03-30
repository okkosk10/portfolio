export default function Contact() {
    return (
      <section id="contact" className="py-24 px-4 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">연락처</h2>
          <div className="space-y-2 text-lg text-gray-800">
            <p>📧 <span className="font-medium">okkosk10@naver.com</span></p>
            <p>
              💻{" "}
              <a
                href="https://github.com/okkosk10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                github.com/okkosk10
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  }