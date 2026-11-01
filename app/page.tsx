"use client";

import Image from "next/image";
import Cursor from "./components/Cursor";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Cursor />

      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-2xl font-black text-transparent">
            Divyam
          </h1>
          <div className="flex gap-3 text-xs md:gap-6 md:text-sm">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#qa-lab">QA Lab</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-16 pt-28 text-center">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center">
          <div className="relative mb-8 h-40 w-40 sm:h-48 sm:w-48">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 opacity-70 blur-md" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyan-300 via-blue-400 to-purple-400" />
            <div className="absolute inset-0 overflow-hidden rounded-full border-4 border-black bg-zinc-900">
              <Image
                src="/profile.png"
                alt="Divyam Chaudhari, Software Quality Engineer"
                fill
                priority
                sizes="(max-width: 640px) 160px, 192px"
                className="object-cover object-top"
              />
            </div>
          </div>

          <p className="mb-4 text-sm font-medium tracking-wide text-gray-400 sm:text-base">
            ISTQB Certified SDET <span className="text-cyan-400">• </span>
            AI-Assisted QA
          </p>
          <h1 className="mb-5 bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 bg-clip-text text-4xl font-black leading-tight tracking-tight text-transparent sm:text-5xl md:text-6xl">
            DIVYAM CHAUDHARI
          </h1>
          <h2 className="mb-6 max-w-3xl text-xl font-light text-gray-200 sm:text-2xl md:text-3xl">
            Software Quality Engineer <span className="text-cyan-400">•</span>{" "}
            QA Automation
          </h2>
          <p className="mb-8 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Building reliable UI automation, API testing workflows, and
            maintainable test frameworks with Playwright, Selenium, and
            AI-assisted QA.
          </p>

          <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/[0.07] px-5 py-2.5 text-sm text-cyan-300 sm:text-base">
              Playwright · Selenium · API Testing
            </span>
            <span className="rounded-full border border-purple-400/30 bg-purple-400/[0.07] px-5 py-2.5 text-sm text-purple-300 sm:text-base">
              ISTQB Certified
            </span>
          </div>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-cyan-200"
            >
              View Projects
            </a>
            <a
              href="/Divyam-C-SDET-P.pdf"
              download
              className="rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition duration-300 hover:border-cyan-300 hover:bg-white/5"
            >
              Download Resume
            </a>
          </div>

          <a
            href="#contact"
            className="mt-8 text-sm font-medium text-cyan-400 transition hover:text-cyan-300 sm:text-base"
          >
            Let&apos;s Connect →
          </a>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="flex min-h-screen items-center bg-zinc-950 px-6 text-white"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-5xl font-bold">About Me</h2>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-semibold">Who I Am</h3>
              <p className="leading-8 text-gray-400">
                I’m an ISTQB CTFL v4.0-certified SDET passionate about building
                reliable software through automation and effective testing
                strategies. My technical skills include Playwright with
                JavaScript, Selenium with Java, API testing with Postman, SQL,
                and JIRA. I’ve also contributed to AI-assisted test-generation
                workflows that reduced test-design effort by approximately
                40%.
              </p>
              <p className="mt-4 leading-8 text-gray-400">
                Currently, I’m strengthening my expertise in Playwright
                framework development, API automation, and CI/CD to build
                maintainable, scalable test automation solutions.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-semibold">What I Do</h3>
              <ul className="space-y-4 text-gray-400">
                <li>✅ Manual &amp; Functional Testing</li>
                <li>✅ API Testing with Postman</li>
                <li>✅ Playwright with JavaScript</li>
                <li>✅ Selenium Automation</li>
                <li>✅ AI-Powered Test Generation</li>
                <li>✅ Agile &amp; Jira Workflows</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md">
              <h3 className="text-4xl font-bold text-cyan-400">2.5+</h3>
              <p className="mt-2 text-gray-400">Years Experience</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md">
              <h3 className="text-4xl font-bold text-purple-400">225+</h3>
              <p className="mt-2 text-gray-400">Test Cases Designed</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md">
              <h3 className="text-4xl font-bold text-green-400">40%</h3>
              <p className="mt-2 text-gray-400">Effort Reduction</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md">
              <h3 className="text-4xl font-bold text-orange-400">ISTQB</h3>
              <p className="mt-2 text-gray-400">Certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-black px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-center text-5xl font-black text-transparent md:text-6xl">
            Experience
          </h2>

          <div className="space-y-8">
            {/* Cytel */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
              <h3 className="text-2xl font-bold">
                Software Quality Engineer
              </h3>
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
                  Cytel
                </span>
                <span className="text-zinc-400">Feb 2025 - Present</span>
              </div>
              <ul className="space-y-2 text-gray-400">
                <li>✅ Built AI-powered Test Case Generator</li>
                <li>
                  ✅ Built a Playwright framework with E2E coverage for 50+
                  complex features
                </li>
                <li>✅ Reduced test design effort by ~40%</li>
                <li>✅ API Testing using Postman</li>
              </ul>
            </div>

            {/* Telosa */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition duration-300 hover:border-emerald-400/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]">
              <h3 className="text-2xl font-bold">QA Analyst Intern</h3>
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400">
                  Telosa
                </span>
                <span className="text-zinc-400">Aug 2024 - Jan 2025</span>
              </div>
              <ul className="space-y-2 text-gray-400">
                <li>✅ Created 80+ Test Scenarios</li>
                <li>✅ Selenium Automation POC</li>
                <li>✅ Defect Tracking using JIRA</li>
              </ul>
            </div>

            {/* Innovatus experience intentionally hidden from the UI.
                Remove the comment markers below to display it again.
            {/*
            <div className="rounded-3xl p-8 backdrop-blur-md bg-white/5 border border-white/10 hover:border-purple-400/40 transition duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
              <h3 className="text-2xl font-bold">
                QA Consultant (Freelance / Contract)
              </h3>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm">
                  Innovatus
                </span>
                <span className="text-zinc-400">Aug 2023 - Aug 2024</span>
              </div>
              <ul className="space-y-2 text-gray-400">
                <li>✅ Functional Testing</li>
                <li>✅ Regression Testing</li>
                <li>✅ RTM Creation</li>
                <li>✅ API Validation</li>
              </ul>
            </div>
            */}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-zinc-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-center font-medium text-cyan-300">
            SELECTED WORK
          </p>
          <h2 className="mb-5 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-center text-4xl font-black text-transparent md:text-5xl">
            Projects
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-zinc-400">
            Practical QA projects that demonstrate test design, browser
            automation, and quality engineering.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="group rounded-3xl border border-zinc-800 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60">
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="text-xs uppercase tracking-wider text-cyan-300">
                  UI automation
                </span>
                <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
                  Playwright
                </span>
              </div>
              <h3 className="mb-3 text-2xl font-bold">
                E-commerce UI Automation
              </h3>
              <p className="mb-5 leading-7 text-zinc-400">
                End-to-end browser tests for common shopping journeys, including
                sign in, product search, cart updates, and checkout validation.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Playwright", "JavaScript", "Page Object Model", "CI"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </article>

            <article className="group rounded-3xl border border-zinc-800 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-400/60">
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="text-xs uppercase tracking-wider text-purple-300">
                  API testing
                </span>
                <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
                  Postman
                </span>
              </div>
              <h3 className="mb-3 text-2xl font-bold">
                REST API Validation
              </h3>
              <p className="mb-5 leading-7 text-zinc-400">
                A Postman collection covering positive, negative, and boundary
                checks for response codes, payloads, authentication, and data
                validation.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Postman", "REST API", "JSON", "Assertions"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>

            <article className="group rounded-3xl border border-zinc-800 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/60">
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="text-xs uppercase tracking-wider text-emerald-300">
                  Test design
                </span>
                <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
                  QA
                </span>
              </div>
              <h3 className="mb-3 text-2xl font-bold">
                Test Scenario Design
              </h3>
              <p className="mb-5 leading-7 text-zinc-400">
                Structured test scenarios using functional, regression,
                boundary, and negative testing techniques.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Test Design", "Regression", "RTM", "JIRA"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>

            <article className="group rounded-3xl border border-zinc-800 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-green-400/60">
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="text-xs uppercase tracking-wider text-green-300">
                  Web automation
                </span>
                <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
                  Automation
                </span>
              </div>
              <h3 className="mb-3 text-2xl font-bold">
                Tricentis Insurance Automation
              </h3>
              <p className="mb-5 leading-7 text-zinc-400">
                Selenium-based automation practice for insurance application
                workflows using reusable page objects and structured test
                execution.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Selenium", "Java", "TestNG", "POM"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* QA Lab / Engineering Notes */}
      <section id="qa-lab" className="bg-black px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-center font-medium text-purple-300">
            SHARING HOW I TEST
          </p>
          <h2 className="mb-5 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-center text-4xl font-black text-transparent md:text-5xl">
            QA Lab
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-zinc-400">
            Short, practical engineering notes on automation design, API
            quality, and debugging. These are topics to document with examples
            as the projects evolve.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-zinc-800 bg-white/[0.03] p-6 transition hover:border-cyan-400/50">
              <p className="mb-3 text-xs uppercase tracking-wider text-cyan-300">
                UI Automation
              </p>
              <h3 className="mb-3 text-xl font-bold">
                Designing Reliable Playwright Locators
              </h3>
              <p className="mb-5 leading-7 text-zinc-400">
                Prefer accessible roles and labels, keep selectors intentional,
                and explain how locator choices reduce brittle tests.
              </p>
              <div className="mb-4 rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                <p className="mb-2 text-xs text-zinc-500">
                  Example · Playwright
                </p>
                <pre className="overflow-x-auto text-sm text-cyan-200">
                  <code>{`await page.getByRole("button", { name: "Add to cart" }).click();`}</code>
                </pre>
              </div>
              <p className="text-sm leading-6 text-zinc-400">
                Prefer user-facing locators such as{" "}
                <code className="text-cyan-200">getByRole</code> and
                <code className="text-cyan-200"> getByLabel</code>. They
                describe how a user finds an element and are usually easier to
                maintain than long CSS or XPath chains. Use test IDs when no
                stable accessible locator fits, and keep assertions focused on
                observable behavior.
              </p>
            </article>

            <article className="rounded-2xl border border-zinc-800 bg-white/[0.03] p-6 transition hover:border-purple-400/50">
              <p className="mb-3 text-xs uppercase tracking-wider text-purple-300">
                API Testing
              </p>
              <h3 className="mb-3 text-xl font-bold">
                Negative and Boundary API Testing
              </h3>
              <p className="mb-5 leading-7 text-zinc-400">
                Show how to validate status codes, response bodies, invalid
                inputs, authentication failures, and business rules.
              </p>
              <span className="text-sm text-zinc-500">
                Planned write-up · Use a safe demo API
              </span>
            </article>

            <article className="rounded-2xl border border-zinc-800 bg-white/[0.03] p-6 transition hover:border-emerald-400/50">
              <p className="mb-3 text-xs uppercase tracking-wider text-emerald-300">
                Debugging
              </p>
              <h3 className="mb-3 text-xl font-bold">
                Investigating a Failed E2E Test
              </h3>
              <p className="mb-5 leading-7 text-zinc-400">
                Walk through a reproducible failure, inspect the trace, identify
                the root cause, and record the fix and regression check.
              </p>
              <span className="text-sm text-zinc-500">
                Planned write-up · Add a real trace screenshot
              </span>
            </article>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-black px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-center text-5xl font-black text-transparent md:text-6xl">
            Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 text-cyan-400 transition hover:scale-105">
              Playwright
            </span>
            <span className="rounded-2xl border border-green-500/20 bg-green-500/10 px-5 py-3 text-green-400 transition hover:scale-105">
              Selenium
            </span>
            <span className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 px-5 py-3 text-yellow-400 transition hover:scale-105">
              JavaScript
            </span>
            <span className="rounded-2xl border border-orange-500/20 bg-orange-500/10 px-5 py-3 text-orange-400 transition hover:scale-105">
              Java
            </span>
            <span className="rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-3 text-red-400 transition hover:scale-105">
              Postman
            </span>
            <span className="rounded-2xl border border-blue-500/20 bg-blue-500/10 px-5 py-3 text-blue-400 transition hover:scale-105">
              SQL
            </span>
            <span className="rounded-2xl border border-purple-500/20 bg-purple-500/10 px-5 py-3 text-purple-400 transition hover:scale-105">
              TestNG
            </span>
            <span className="rounded-2xl border border-pink-500/20 bg-pink-500/10 px-5 py-3 text-pink-400 transition hover:scale-105">
              Cucumber
            </span>
            <span className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 text-cyan-400 transition hover:scale-105">
              API Testing
            </span>
            <span className="rounded-2xl border border-green-500/20 bg-green-500/10 px-5 py-3 text-green-400 transition hover:scale-105">
              Manual Testing
            </span>
            <span className="rounded-2xl border border-orange-500/20 bg-orange-500/10 px-5 py-3 text-orange-400 transition hover:scale-105">
              JIRA
            </span>
            <span className="rounded-2xl border border-purple-500/20 bg-purple-500/10 px-5 py-3 text-purple-400 transition hover:scale-105">
              GitHub
            </span>
            <span className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 px-5 py-3 text-yellow-400 transition hover:scale-105">
              Agentic AI
            </span>
            <span className="rounded-2xl border border-blue-500/20 bg-blue-500/10 px-5 py-3 text-blue-400 transition hover:scale-105">
              Agile
            </span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-zinc-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Let&apos;s Build Quality Together
          </h2>
          <p className="mb-10 text-zinc-400">
            Always open to discussions around testing strategies, automation
            frameworks and emerging QA technologies.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-300 hover:border-purple-500/50">
              <h3 className="mb-2 font-semibold">Email</h3>
              <a
                href="mailto:divyamschaudhari@gmail.com"
                className="text-zinc-400 transition hover:text-cyan-400"
              >
                divyamschaudhari@gmail.com
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-300 hover:border-purple-500/50">
              <h3 className="mb-2 font-semibold">LinkedIn</h3>
              <a
                href="https://linkedin.com/in/divyamchaudhari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition hover:text-cyan-400"
              >
                divyamchaudhari
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-300 hover:border-purple-500/50">
              <h3 className="mb-2 font-semibold">GitHub</h3>
              <a
                href="https://github.com/divyam-c"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition hover:text-cyan-400"
              >
                divyam-c
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-zinc-500">
        <p>
          © 2026 Divyam Chaudhari • Software Quality Engineer • ISTQB Certified
          SDET
        </p>
      </footer>
    </main>
  );
}