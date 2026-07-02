import Cursor from "./components/Cursor";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
<Cursor />
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

          <h1 className="font-black text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
  Divyam
</h1>

          <div className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-green-400 transition">
              About
            </a>

            <a href="#experience" className="hover:text-green-400 transition">
              Experience
            </a>

            <a href="#projects" className="hover:text-green-400 transition">
              Projects
            </a>

            <a href="#skills" className="hover:text-green-400 transition">
              Skills
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition">
  Contact
</a>
          </div>

        </div>
      </nav>

      {/* Hero Section */}
<section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 pt-24">        <p className="text-lg text-gray-400 mb-4">
          ISTQB Certified SDET • AI-Powered QA
        </p>
<div className="absolute w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full" />
<h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-tight leading-none">
  DIVYAM
  <br />
  CHAUDHARI
</h1>

       <h2 className="text-xl md:text-3xl text-gray-300 mb-8 font-light">
  Software Quality Engineer • ISTQB Certified SDET
</h2>

        <p className="max-w-2xl text-gray-400 mb-8">
          Built AI-powered test case generation solutions, automated testing
          frameworks, and quality processes that help teams ship reliable
          software faster.
        </p>

        <div className="mb-8">
         <span className="px-6 py-3 rounded-full backdrop-blur-md bg-white/5 border border-cyan-400/30 text-cyan-300">
  🚀 Built AI-Powered Test Case Generator using ROVO AI
</span>
<div className="mt-6">
  <span className="inline-block px-6 py-3 rounded-full backdrop-blur-md bg-white/5 border border-purple-400/30 text-purple-300">
    ⚡ Reduced Test Design Effort by ~40%
  </span>
</div>
        </div>

        <div className="flex flex-col items-center gap-4">

  <div className="flex gap-4">

    <a
      href="#projects"
      className="px-6 py-3 rounded-xl bg-white text-black font-semibold transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
    >
      View Projects
    </a>

    <a
      href="/Divyam-C-SDET-P.pdf"
      download
      className="px-6 py-3 rounded-xl border border-white font-semibold hover:bg-white hover:text-black transition duration-300"
    >
      Download Resume
    </a>

  </div>

  <a
    href="#contact"
    className="text-cyan-400 hover:text-cyan-300 transition"
  >
    Let's Connect →
  </a>

</div>

      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen bg-zinc-950 text-white px-6 flex items-center"
      >
        <div className="max-w-5xl mx-auto">

          <h2 className="text-5xl font-bold mb-10 text-center">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Who I Am
              </h3>

              <p className="text-gray-400 leading-8">
                I am an ISTQB Certified Software Quality Engineer with
                2+ years of experience in Manual Testing, Automation
                Testing, API Testing, and AI-assisted Quality Assurance.
              </p>

              <p className="text-gray-400 leading-8 mt-4">
                Currently working at Cytel, where I built an
                AI-powered Test Case Generation Agent using ROVO
                (JIRA AI) that reduced test design effort by nearly 40%.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                What I Do
              </h3>

              <ul className="space-y-4 text-gray-400">
                <li>✅ Manual & Functional Testing</li>
                <li>✅ API Testing with Postman</li>
                <li>✅ Selenium Automation</li>
                <li>✅ Playwright with JavaScript</li>
                <li>✅ AI-Powered Test Generation</li>
                <li>✅ Agile & Jira Workflows</li>
              </ul>
            </div>

                    </div>

          <div className="grid md:grid-cols-4 gap-6 mt-16">

            <div className="rounded-2xl p-6 backdrop-blur-md bg-white/5 border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-cyan-400">2+</h3>
              <p className="text-gray-400 mt-2">Years Experience</p>
            </div>

            <div className="rounded-2xl p-6 backdrop-blur-md bg-white/5 border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-purple-400">225+</h3>
              <p className="text-gray-400 mt-2">Test Cases Designed</p>
            </div>

            <div className="rounded-2xl p-6 backdrop-blur-md bg-white/5 border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-green-400">40%</h3>
              <p className="text-gray-400 mt-2">Effort Reduction</p>
            </div>

            <div className="rounded-2xl p-6 backdrop-blur-md bg-white/5 border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-orange-400">ISTQB</h3>
              <p className="text-gray-400 mt-2">Certified</p>
            </div>

          </div>

        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="min-h-screen bg-black text-white px-6 py-20"
      >
        <div className="max-w-5xl mx-auto">

          <h2 className="text-5xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
  Experience
</h2>

          <div className="space-y-8">

            <div className="rounded-3xl p-8 backdrop-blur-md bg-white/5 border border-white/10 hover:border-cyan-400/40 transition duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
              <h3 className="text-2xl font-bold">
                Software Quality Engineer
              </h3>

             <div className="flex items-center gap-3 mb-4">
  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm">
    Cytel
  </span>

  <span className="text-zinc-400">
    Feb 2025 - Present
  </span>
</div>

              <ul className="space-y-2 text-gray-400">
                <li>🚀 Built AI-powered Test Case Generator using ROVO (JIRA AI)</li>
                <li>🚀 Reduced test design effort by ~40%</li>
                <li>🚀 Building Playwright Automation Framework</li>
                <li>🚀 API Testing using Postman</li>
              </ul>
            </div>

<div className="rounded-3xl p-8 backdrop-blur-md bg-white/5 border border-white/10 hover:border-emerald-400/40 transition duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]">             <h3 className="text-2xl font-bold">
                QA Analyst Intern
              </h3>

              <div className="flex items-center gap-3 mb-4">
  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm">
    Telosa
  </span>

  <span className="text-zinc-400">
    Aug 2024 - Jan 2025
  </span>
</div>

              <ul className="space-y-2 text-gray-400">
                <li>✅ Created 80+ Test Scenarios</li>
                <li>✅ Selenium Automation POC</li>
                <li>✅ Defect Tracking using JIRA</li>
              </ul>
            </div>

<div className="rounded-3xl p-8 backdrop-blur-md bg-white/5 border border-white/10 hover:border-purple-400/40 transition duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">              <h3 className="text-2xl font-bold">
                QA Associate Consultant
              </h3>

              <div className="flex items-center gap-3 mb-4">
  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm">
    Innovatus
  </span>

  <span className="text-zinc-400">
    Jul 2023 - Aug 2024
  </span>
</div>

              <ul className="space-y-2 text-gray-400">
                <li>✅ Functional Testing</li>
                <li>✅ Regression Testing</li>
                <li>✅ RTM Creation</li>
                <li>✅ API Validation</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Projects Section */}
    {/* Projects Section */}
<section
  id="projects"
  className="min-h-screen bg-zinc-950 text-white px-6 py-20"
>
  <div className="max-w-6xl mx-auto">

    <h2 className="text-5xl font-bold text-center mb-16">
      Projects
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      {/* Project 1 */}
      <div className="border border-zinc-800 rounded-2xl p-8 hover:border-green-500 transition">
        <h3 className="text-2xl font-bold mb-4">
          TestGenie AI
        </h3>

        <p className="text-gray-400 mb-6">
          AI-powered test case generation platform that converts
          requirements into structured QA test cases using LLMs.
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="bg-zinc-800 px-3 py-1 rounded-lg">
            Next.js
          </span>

          <span className="bg-zinc-800 px-3 py-1 rounded-lg">
            React
          </span>

          <span className="bg-zinc-800 px-3 py-1 rounded-lg">
            OpenRouter API
          </span>

          <span className="bg-zinc-800 px-3 py-1 rounded-lg">
            Tailwind
          </span>
        </div>
      </div>

      {/* Project 2 */}
      <div className="border border-zinc-800 rounded-2xl p-8 hover:border-green-500 transition">
        <h3 className="text-2xl font-bold mb-4">
          AI Test Case Generator
        </h3>

        <p className="text-gray-400 mb-6">
          Built a ROVO AI Agent that automatically generates
          requirement-linked test scenarios and reduces test
          design effort significantly.
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="bg-zinc-800 px-3 py-1 rounded-lg">
            ROVO
          </span>

          <span className="bg-zinc-800 px-3 py-1 rounded-lg">
            Jira AI
          </span>

          <span className="bg-zinc-800 px-3 py-1 rounded-lg">
            QA Automation
          </span>
        </div>
      </div>

      {/* Project 3 */}
      <div className="border border-zinc-800 rounded-2xl p-8 hover:border-green-500 transition">
        <h3 className="text-2xl font-bold mb-4">
          Playwright Framework
        </h3>

        <p className="text-gray-400 mb-6">
          Modern automation framework built using Playwright
          and JavaScript with reusable utilities and scalable
          architecture.
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="bg-zinc-800 px-3 py-1 rounded-lg">
            Playwright
          </span>

          <span className="bg-zinc-800 px-3 py-1 rounded-lg">
            JavaScript
          </span>

          <span className="bg-zinc-800 px-3 py-1 rounded-lg">
            Automation
          </span>
        </div>
      </div>

      {/* Project 4 */}
      <div className="border border-zinc-800 rounded-2xl p-8 hover:border-green-500 transition">
        <h3 className="text-2xl font-bold mb-4">
          Tricentis Insurance Automation
        </h3>

        <p className="text-gray-400 mb-6">
          Automated 50+ end-to-end test cases using Selenium,
          Java, TestNG and Page Object Model.
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="bg-zinc-800 px-3 py-1 rounded-lg">
            Selenium
          </span>

          <span className="bg-zinc-800 px-3 py-1 rounded-lg">
            Java
          </span>

          <span className="bg-zinc-800 px-3 py-1 rounded-lg">
            TestNG
          </span>
        </div>
      </div>

    </div>

  </div>
</section>

   {/* Skills Section */}
<section
  id="skills"
  className="min-h-screen bg-black text-white px-6 py-20"
>
  <div className="max-w-6xl mx-auto">

    <h2 className="text-5xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
      Skills
    </h2>

    <div className="flex flex-wrap justify-center gap-4">

      <span className="px-5 py-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:scale-105 transition">
        Playwright
      </span>

      <span className="px-5 py-3 rounded-2xl bg-green-500/10 text-green-400 border border-green-500/20 hover:scale-105 transition">
        Selenium
      </span>

      <span className="px-5 py-3 rounded-2xl bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 hover:scale-105 transition">
        JavaScript
      </span>

      <span className="px-5 py-3 rounded-2xl bg-orange-500/10 text-orange-400 border border-orange-500/20 hover:scale-105 transition">
        Java
      </span>

      <span className="px-5 py-3 rounded-2xl bg-red-500/10 text-red-400 border border-red-500/20 hover:scale-105 transition">
        Postman
      </span>

      <span className="px-5 py-3 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:scale-105 transition">
        SQL
      </span>

      <span className="px-5 py-3 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20 hover:scale-105 transition">
        TestNG
      </span>

      <span className="px-5 py-3 rounded-2xl bg-pink-500/10 text-pink-400 border border-pink-500/20 hover:scale-105 transition">
        Cucumber
      </span>

      <span className="px-5 py-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:scale-105 transition">
        API Testing
      </span>

      <span className="px-5 py-3 rounded-2xl bg-green-500/10 text-green-400 border border-green-500/20 hover:scale-105 transition">
        Manual Testing
      </span>

      <span className="px-5 py-3 rounded-2xl bg-orange-500/10 text-orange-400 border border-orange-500/20 hover:scale-105 transition">
        JIRA
      </span>

      <span className="px-5 py-3 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20 hover:scale-105 transition">
        GitHub
      </span>

      <span className="px-5 py-3 rounded-2xl bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 hover:scale-105 transition">
        ROVO AI
      </span>

      <span className="px-5 py-3 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:scale-105 transition">
        Agile
      </span>

    </div>

  </div>
</section>
<section
  id="contact"
  className="bg-zinc-950 text-white px-6 py-20"
>
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">
      Let's Build Quality Together
    </h2>

    <p className="text-zinc-400 mb-10">
      Open to Software Testing, QA Automation, SDET and Playwright opportunities.
    </p>

    <div className="grid md:grid-cols-3 gap-6">
      <div className="rounded-2xl p-6 backdrop-blur-md bg-white/5 border border-white/10 hover:border-purple-500/50 transition duration-300">
        <h3 className="font-semibold mb-2">Email</h3>
        <a
  href="mailto:divyamschaudhari@gmail.com"
  className="text-zinc-400 hover:text-cyan-400 transition"
>
  divyamschaudhari@gmail.com
</a>
      </div>

      <div className="rounded-2xl p-6 backdrop-blur-md bg-white/5 border border-white/10 hover:border-purple-500/50 transition duration-300">
        <h3 className="font-semibold mb-2">LinkedIn</h3>
        <a
  href="https://linkedin.com/in/divyamchaudhari"
  target="_blank"
  rel="noopener noreferrer"
  className="text-zinc-400 hover:text-cyan-400 transition"
>
  linkedin.com/in/divyamchaudhari
</a>
      </div>

      <div className="rounded-2xl p-6 backdrop-blur-md bg-white/5 border border-white/10 hover:border-purple-500/50 transition duration-300">
        <h3 className="font-semibold mb-2">GitHub</h3>
        <p className="text-zinc-400">
          <a
  href="https://github.com/divyam-c"
  target="_blank"
  rel="noopener noreferrer"
  className="text-zinc-400 hover:text-cyan-400 transition"
>
  github.com/divyam-c
</a>
        </p>
      </div>
    </div>
  </div>
</section>
   <footer className="border-t border-white/10 py-8 text-center text-zinc-500">
  <p>
    © 2026 Divyam Chaudhari • Software Quality Engineer • ISTQB Certified SDET
  </p>
</footer>
    </main>
  );
}
