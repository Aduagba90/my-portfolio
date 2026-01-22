// src/App.js
import React, { useState } from "react";

export default function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      await fetch("https://formspree.io/f/mjkepdwz", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
      form.reset();
    } catch (err) {
      alert("Oops! Something went wrong.");
    }
  };

  return (
    <div className="scroll-smooth text-gray-900 font-sans">

      {/* ===== Navbar ===== */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-bold text-lg text-blue-600">
            Kareem<span className="text-indigo-600">.</span>
          </a>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
            <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
            <a href="#experience" className="hover:text-blue-500 transition">Experience</a>
            <a href="#education" className="hover:text-blue-500 transition">Education</a>
            <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
          </div>
          <a
            href="/Kareem-Lukman-CV.pdf"
            className="text-sm bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-xl shadow-lg hover:scale-105 transition-transform"
          >
            Download CV
          </a>
        </div>
      </nav>

      {/* ===== Hero Section ===== */}
      <header
        id="home"
        className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white"
      >
        <div className="max-w-6xl mx-auto px-4 py-24 md:py-32 grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-wider text-white/80 animate-fadeIn">
              Software Engineer
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-fadeIn delay-200">
              Kareem Lukman Aduagba
            </h1>
            <p className="text-white/90 text-lg leading-relaxed animate-fadeIn delay-400">
              I build scalable, efficient, and user-friendly applications.
              Strong in backend & frontend development, databases, CI/CD, and
              secure coding best practices.
            </p>
            <div className="flex flex-wrap gap-3 mt-6 animate-fadeIn delay-600">
              <a
                href="#contact"
                className="bg-white text-blue-700 px-5 py-3 rounded-xl font-medium shadow-lg hover:-translate-y-1 transition-transform"
              >
                📧 Contact Me
              </a>
              <a
                href="https://github.com/Aduagba90"
                target="_blank"
                rel="noreferrer"
                className="bg-white/15 border border-white/30 text-white px-5 py-3 rounded-xl font-medium hover:bg-white/25 transition"
              >
                🌍 GitHub
              </a>
              <a
                href="https://linkedin.com/in/Aduagba90"
                target="_blank"
                rel="noreferrer"
                className="bg-white/15 border border-white/30 text-white px-5 py-3 rounded-xl font-medium hover:bg-white/25 transition"
              >
                🔗 LinkedIn
              </a>
            </div>
          </div>

          {/* Circular Profile Image */}
          <div className="flex justify-center md:justify-end animate-fadeIn delay-800">
            <img
              src="/profile.jpeg"
              alt="Kareem Lukman Aduagba"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white/30 shadow-2xl hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </header>

      {/* ===== Projects Section ===== */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">Projects</h2>
          <p className="text-gray-600 mt-2 text-center">
            A few things I’ve built recently.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {[{
              title: "To-Do App System (Backend)",
              desc: "CRUD task management backend with validation and PostgreSQL.",
              tech: "Java, Spring Boot, PostgreSQL",
              link: "https://github.com/To-Do-App/Aduagba90"
            },{
              title: "Note Management App",
              desc: "Lightweight note app with LocalStorage and responsive UI.",
              tech: "HTML, CSS, JavaScript (Vanilla)",
              link: "https://github.com/Note-Management-App/Aduagba90"
            },{
              title: "To-Do App (Frontend)",
              desc: "Task manager with filtering, status updates & offline support.",
              tech: "HTML, CSS, JavaScript",
              link: "https://github.com/To-Do-App-Frontend/Aduagba90"
            }].map((p) => (
              <article
                key={p.title}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition transform border border-gray-200"
              >
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
                <p className="mt-3 text-xs text-gray-500">Tech: {p.tech}</p>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 text-blue-600 font-medium hover:underline"
                >
                  🔗 View on GitHub
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

           {/* ===== About Me Section ===== */}
<section id="about" className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center">About Me</h2>
    <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto">
      A brief introduction to who I am and what I do.
    </p>

    <div className="mt-12 grid md:grid-cols-2 gap-10 items-start">
      
      {/* Left: Text Card */}
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 space-y-5 text-gray-700 leading-relaxed">
        <p>
          I am a Computer Science graduate and a Frontend Developer with
          hands-on experience building user-friendly, scalable web
          applications. I completed a 1-year Software Engineering training
          that covered both frontend and backend development, giving me a
          solid understanding of modern web systems.
        </p>

        <p>
          I specialize more in frontend development, focusing on clean UI,
          performance, accessibility, and good user experience. I also have
          working knowledge of backend concepts, databases, APIs, CI/CD
          workflows, and secure coding best practices, which helps me
          collaborate effectively on full-stack projects.
        </p>
      </div>

      {/* Right: Highlights */}
      <div className="grid gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
          <h3 className="font-semibold text-lg mb-2">🎨 Frontend Focus</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            I focus on building clean, responsive, and accessible user
            interfaces with great performance and user experience.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
          <h3 className="font-semibold text-lg mb-2">🧩 Full-Stack Awareness</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Strong understanding of backend concepts, APIs, databases, CI/CD
            workflows, and secure coding practices.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
          <h3 className="font-semibold text-lg mb-2">👨‍🏫 Teaching & Mentorship</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Passionate about mentoring, teaching, and facilitating practical
            tech learning through hands-on projects and clear explanations.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>



      {/* ===== Skills Section ===== */}
      <section id="skills" className="py-20 bg-gradient-to-tr from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">Technical Skills</h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Java","Python","JavaScript","TypeScript",
              "React","Tailwind CSS","Spring Boot","Django","Flask",
              "MySQL","PostgreSQL","MongoDB",
              "Git & GitHub","Docker","GitHub Actions","AWS","Heroku",
              "JUnit","Pytest","Jest",
            ].map((s) => (
              <span
                key={s}
                className="text-sm bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm text-gray-700 hover:bg-blue-50 hover:scale-105 transition transform cursor-default"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Experience Section ===== */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">Experience</h2>
          <div className="mt-8 bg-white p-6 rounded-2xl shadow-lg border border-gray-200 space-y-4">
            <h3 className="font-semibold text-lg">
              Semicolon Africa — Software Engineer Trainee
              <span className="text-gray-500 font-normal"> (2024 – Present)</span>
            </h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Full-Stack development (Spring Boot, React, HTML, CSS, Tailwind).</li>
              <li>Built RESTful APIs with validation and error handling.</li>
              <li>CI/CD with GitHub Actions; deployed to Render/Heroku.</li>
              <li>Worked with PostgreSQL, MySQL, MongoDB.</li>
              <li>Wrote unit/integration tests (JUnit), followed TDD best practices.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Education Section ===== */}
      <section id="education" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">Education</h2>
          <ul className="mt-6 space-y-2 text-gray-700 text-center">
            <li>Kwara State University — BSc, Computer Science (2016 – 2020)</li>
            <li>Bayero University Kano — Diploma, Computer Science (2012 – 2014)</li>
            <li>TAQWATECH — Diploma, Computer Engineering & Networking (2009 – 2010)</li>
            <li>Semicolon Africa — Software Engineering (2024 – 2025)</li>
            <li>NYSC — Exemption Certificate (2020 – 2021)</li>
          </ul>
        </div>
      </section>

      {/* ===== Contact Section ===== */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
          {submitted && (
            <p className="text-center text-green-600 mb-6">Thanks! Your message has been sent.</p>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={5}
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>© 2025 Kareem Lukman Aduagba. All rights reserved.</p>
      </footer>

    </div>
  );
}
