// src/App.js
import React, { useState } from "react";

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

          {/* Logo */}
          <a href="#home" className="font-bold text-lg text-blue-600">
            Kareem<span className="text-indigo-600">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#home" className="hover:text-blue-500 transition">Home</a>
            <a href="#about" className="hover:text-blue-500 transition">About</a>
            <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
            <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
            <a href="#experience" className="hover:text-blue-500 transition">Experience</a>
            <a href="#education" className="hover:text-blue-500 transition">Education</a>
            <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <a
              href="/Kareem-Lukman-CV.pdf"
              className="hidden sm:inline-block text-sm bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              Download CV
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-2xl focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Projects", "#projects"],
              ["Skills", "#skills"],
              ["Experience", "#experience"],
              ["Education", "#education"],
              ["Contact", "#contact"],
            ].map(([label, link]) => (
              <a
                key={label}
                href={link}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-4 text-sm font-medium hover:bg-gray-100 transition"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ===== Hero Section ===== */}
      <header
        id="home"
        className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white"
      >
        <div className="max-w-6xl mx-auto px-4 py-24 md:py-32 grid md:grid-cols-2 gap-10 items-center">
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

          <div className="flex justify-center md:justify-end animate-fadeIn delay-800">
            <img
              src="/profile.jpeg"
              alt="Kareem Lukman Aduagba"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white/30 shadow-2xl hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </header>

      {/* ===== About Me ===== */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">About Me</h2>
          <p className="text-gray-600 text-center mt-3 max-w-2xl mx-auto">
            A little background about my journey, skills, and interests.
          </p>

          <div className="mt-14 grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 space-y-6 text-gray-700">
              <p>
                I am a Computer Science graduate and a Frontend Developer with
                hands-on experience building user-friendly, scalable web
                applications.
              </p>
              <p>
                I focus on clean UI, performance, accessibility, and great user
                experience, with strong backend awareness.
              </p>
              <p>
                I am passionate about teaching, mentoring, and facilitating
                practical tech learning.
              </p>
            </div>

            <div className="grid gap-6">
              {[
                ["🎨 Frontend Focus", "Clean UI, performance, and accessibility."],
                ["🧩 Full-Stack Awareness", "APIs, databases, CI/CD, security."],
                ["👨‍🏫 Teaching & Mentorship", "Guiding learners through projects."],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition"
                >
                  <h3 className="font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
          {submitted && (
            <p className="text-center text-green-600 mb-6">
              Thanks! Your message has been sent.
            </p>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input required name="name" placeholder="Your Name" className="w-full border rounded-xl px-4 py-3" />
            <input required name="email" type="email" placeholder="Your Email" className="w-full border rounded-xl px-4 py-3" />
            <textarea required name="message" rows="5" placeholder="Your Message" className="w-full border rounded-xl px-4 py-3" />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-6 text-center">
        © 2025 Kareem Lukman Aduagba. All rights reserved.
      </footer>
    </div>
  );
}
