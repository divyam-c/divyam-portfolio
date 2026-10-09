"use client";

import Image from "next/image";

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

    {/* Desktop Menu */}

<div className="flex gap-3 text-xs md:gap-6 md:text-sm">      <a href="#about">About</a>

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
            ISTQB Certified SDET <span className="text-cyan-400">• </span> AI-Assisted QA
          </p>

          <h1 className="mb-5 bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 bg-clip-text text-4xl font-black leading-tight tracking-tight text-transparent sm:text-5xl md:text-6xl">
            DIVYAM CHAUDHARI
          </h1>

          <h2 className="mb-6 max-w-3xl text-xl font-light text-gray-200 sm:text-2xl md:text-3xl">
            Software Quality Engineer <span className="text-cyan-400">•</span> QA Automation
          </h2>

          <p className="mb-8 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Building reliable UI automation, API testing workflows, and maintainable test frameworks with Playwright, Selenium, and AI-assisted QA.
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

                I’m an ISTQB CTFL v4.0-certified SDET passionate about building reliable software through automation and effective testing strategies.

My technical skills include Playwright with JavaScript, Selenium with Java, API testing with Postman, SQL, and JIRA. I’ve also contributed to AI-assisted test-generation workflows that reduced test-design effort by approximately 40%.              </p>

              <p className="text-gray-400 leading-8 mt-4">

               Currently, I’m strengthening my expertise in Playwright framework development, API automation, and CI/CD to build maintainable, scalable test automation solutions.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-semibold mb-4">

                What I Do

              </h3>

              <ul className="space-y-4 text-gray-400">

                <li>✅ Manual & Functional Testing</li>

                <li>✅ API Testing with Postman</li>

                <li>✅ Playwright with JavaScript</li>

                <li>✅ Selenium Automation</li>

                <li>✅ AI-Powered Test Generation</li>

                <li>✅ Agile & Jira Workflows</li>

              </ul>

            </div>

                    </div>

          <div className="grid md:grid-cols-4 gap-6 mt-16">

            <div className="rounded-2xl p-6 backdrop-blur-md bg-white/5 border border-white/10 text-center">

              <h3 className="text-4xl font-bold text-cyan-400">2.5+</h3>

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

                <li>✅ Built AI-powered Test Case Generator</li>

                <li>✅ Built a Playwright framework with E2E coverage for 50+ complex features</li>

                <li>✅ Reduced test design effort by ~40%</li>

                <li>✅ API Testing using Postman</li>

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

                QA Consultant (Freelance / Contract)

              </h3>

              <div className="flex items-center gap-3 mb-4">

  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm">

    Innovatus

  </span>

  <span className="text-zinc-400">

    Aug 2023 - Aug 2024

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

      <section

        id="projects"

        className="min-h-screen bg-zinc-950 text-white px-6 py-20"

      >

        <div className="max-w-6xl mx-auto">

          <p className="text-center text-cyan-400 font-medium mb-3">SELECTED WORK</p>

          <h2 className="text-5xl md:text-6xl font-black text-center mb-5 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">

            Projects

          </h2>

          <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-14">

            Practical work across web UI automation, API quality, test design, and CI/CD.

            Project status is stated clearly where work is still in progress.

          </p>

          <article className="mb-8 rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/[0.08] via-white/[0.02] to-purple-400/[0.08] p-7 md:p-9">

            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">

              <span className="text-xs uppercase tracking-widest text-cyan-300 font-semibold">Featured project · Primary focus</span>

              <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs text-amber-200">In progress</span>

            </div>

            <div className="grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">

              <div>

                <h3 className="text-3xl md:text-4xl font-black mb-4">E-Commerce E2E Automation Project</h3>

                <p className="text-zinc-300 leading-7 mb-5">

                  A hands-on framework project focused on maintainable end-to-end testing for BookCart.

                  The goal is to demonstrate clear test structure, reusable page objects, reliable assertions,

                  and a workflow that another engineer can understand and run.

                </p>

                <div className="flex flex-wrap gap-2 mb-6">

                  {["Playwright", "JavaScript / TypeScript", "POM", "E-Commerce Flows", "Test Reporting"].map((tag) => (

                    <span key={tag} className="rounded-lg border border-zinc-700 bg-zinc-900/80 px-3 py-1 text-sm text-zinc-300">{tag}</span>

                  ))}

                </div>

                <span className="inline-flex items-center rounded-xl border border-amber-400/30 bg-amber-400/10 px-5 py-3 text-sm font-semibold text-amber-200">
                  Project in progress · Repository link coming soon
                </span>

              </div>

              <div className="rounded-2xl border border-zinc-700/80 bg-zinc-950/80 p-5">

                <p className="text-sm font-semibold text-zinc-200 mb-4">Engineering focus</p>

                <ul className="space-y-3 text-sm text-zinc-400">

                  <li>→ Login, search, cart, and checkout scenarios</li>

                  <li>→ Reusable page objects and stable locators</li>

                  <li>→ Negative cases and test-data coverage</li>

                  <li>→ CI execution and reports as next milestones</li>

                </ul>


              </div>

            </div>

          </article>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {/* TestGenie QA Toolkit */}

            <article className="group rounded-3xl border border-zinc-800 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]">

              <div className="flex items-center justify-between gap-3 mb-5">

                <span className="text-xs uppercase tracking-wider text-cyan-300">QA Utility</span>

                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">Live demo</span>

              </div>

              <h3 className="text-2xl font-bold mb-3">TestGenie QA Toolkit</h3>

              <p className="text-zinc-400 leading-7 mb-5">

                A free, non-AI QA utility that generates structured test cases from predefined module templates,

                with table review, copy support, Excel export, dark mode, and locally stored history.

              </p>

              <div className="flex flex-wrap gap-2 mb-6">

                {["Next.js", "React", "Tailwind CSS", "XLSX", "Local Storage"].map((tag) => (

                  <span key={tag} className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300">{tag}</span>

                ))}

              </div>

              <a href="https://testgenie-ai.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-cyan-300 hover:text-white transition">

                Open live app <span aria-hidden="true">↗</span>

              </a>

            </article>

            {/* ROVO Test Generation Agent */}

            <article className="group rounded-3xl border border-zinc-800 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-400/60">

              <div className="flex items-center justify-between gap-3 mb-5">

                <span className="text-xs uppercase tracking-wider text-purple-300">Workplace initiative</span>

                <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs text-purple-200">AI-assisted QA</span>

              </div>

              <h3 className="text-2xl font-bold mb-3">ROVO Test Generation Agent</h3>

              <p className="text-zinc-400 leading-7 mb-5">

                A Jira ROVO workflow that produces structured, requirement-linked test scenarios

                and helped reduce test-design effort by approximately 40%.

              </p>

              <div className="flex flex-wrap gap-2">

                {["Jira", "ROVO AI", "Test Design", "Requirements Traceability"].map((tag) => (

                  <span key={tag} className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300">{tag}</span>

                ))}

              </div>

            </article>

            {/* Playwright BookCart Framework - regular project */}
            <article className="group rounded-3xl border border-zinc-800 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/60">
              <div className="flex items-center justify-between gap-3 mb-5">
                <span className="text-xs uppercase tracking-wider text-emerald-300">UI automation framework</span>
                <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">Practice project</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Playwright BookCart Automation Framework</h3>
              <p className="text-zinc-400 leading-7 mb-5">
                A Playwright-based framework for practicing maintainable end-to-end tests with reusable page objects,
                stable locators, clear assertions, and structured test organization.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Playwright", "JavaScript", "POM", "Git", "Test Reporting"].map((tag) => (
                  <span key={tag} className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300">{tag}</span>
                ))}
              </div>
              <a href="https://github.com/divyam-c/playwright-ai-framework-bookcart" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-cyan-300 transition hover:text-white">
                View GitHub repository <span aria-hidden="true">↗</span>
              </a>
            </article>

            {/* REST API Testing Suite */}

            <article className="group rounded-3xl border border-zinc-800 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-400/60">

              <div className="flex items-center justify-between gap-3 mb-5">

                <span className="text-xs uppercase tracking-wider text-orange-300">API quality</span>

                <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">QA project</span>

              </div>

              <h3 className="text-2xl font-bold mb-3">REST API Testing Suite</h3>

              <p className="text-zinc-400 leading-7 mb-5">

                API test coverage for CRUD operations, authentication, negative and boundary cases,

                response validation, error handling, and database checks where applicable.

              </p>

              <div className="flex flex-wrap gap-2">

                {["Postman", "REST Assured", "JSON", "HTTP", "SQL"].map((tag) => (

                  <span key={tag} className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300">{tag}</span>

                ))}

              </div>

            </article>

            {/* CI/CD Regression Pipeline */}

            <article className="group rounded-3xl border border-zinc-800 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/60">

              <div className="flex items-center justify-between gap-3 mb-5">

                <span className="text-xs uppercase tracking-wider text-blue-300">Continuous testing</span>

                <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs text-amber-200">Build / extend</span>

              </div>

              <h3 className="text-2xl font-bold mb-3">CI/CD Regression Pipeline</h3>

              <p className="text-zinc-400 leading-7 mb-5">

                A pipeline project for installing dependencies, running automated regression tests,

                and publishing test results through a CI workflow. Extend with parallel runs as needed.

              </p>

              <div className="flex flex-wrap gap-2">

                {["GitHub Actions", "Jenkins", "Playwright / Selenium", "Test Reports"].map((tag) => (

                  <span key={tag} className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300">{tag}</span>

                ))}

              </div>

            </article>

            {/* Tricentis Insurance Automation */}

            <article className="group rounded-3xl border border-zinc-800 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-green-400/60">

              <div className="flex items-center justify-between gap-3 mb-5">

                <span className="text-xs uppercase tracking-wider text-green-300">Web automation</span>

                <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">Automation</span>

              </div>

              <h3 className="text-2xl font-bold mb-3">Tricentis Insurance Automation</h3>

              <p className="text-zinc-400 leading-7 mb-5">

                Selenium-based automation practice for insurance application workflows using

                reusable page objects and structured test execution.

              </p>

              <div className="flex flex-wrap gap-2">

                {["Selenium", "Java", "TestNG", "POM"].map((tag) => (

                  <span key={tag} className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300">{tag}</span>

                ))}

              </div>

            </article>

          </div>

        </div>

      </section>

      {/* QA Lab / Engineering Notes */}

      <section id="qa-lab" className="bg-black text-white px-6 py-20">

        <div className="max-w-6xl mx-auto">

          <p className="text-center text-purple-300 font-medium mb-3">SHARING HOW I TEST</p>

          <h2 className="text-4xl md:text-5xl font-black text-center mb-5 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">

            QA Lab

          </h2>

          <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">

            Short, practical engineering notes on automation design, API quality, and debugging.

            These are topics to document with examples as the projects evolve.

          </p>

          <div className="grid md:grid-cols-3 gap-6">

            <article className="rounded-2xl border border-zinc-800 bg-white/[0.03] p-6 hover:border-cyan-400/50 transition">

              <p className="text-xs uppercase tracking-wider text-cyan-300 mb-3">UI Automation</p>

              <h3 className="text-xl font-bold mb-3">Designing Reliable Playwright Locators</h3>

              <p className="text-zinc-400 leading-7 mb-5">

                Prefer accessible roles and labels, keep selectors intentional, and explain how locator choices reduce brittle tests.

              </p>

              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 mb-4">

                <p className="text-xs text-zinc-500 mb-2">Example · Playwright</p>

                <pre className="overflow-x-auto text-sm text-cyan-200"><code>{`await page.getByRole("button", { name: "Add to cart" }).click();`}</code></pre>

              </div>

              <p className="text-sm text-zinc-400 leading-6">

                Prefer user-facing locators such as <code className="text-cyan-200">getByRole</code> and

                <code className="text-cyan-200"> getByLabel</code>. They describe how a user finds an element

                and are usually easier to maintain than long CSS or XPath chains. Use test IDs when no stable

                accessible locator fits, and keep assertions focused on observable behavior.

              </p>

            </article>

            <article className="rounded-2xl border border-zinc-800 bg-white/[0.03] p-6 hover:border-purple-400/50 transition">

              <p className="text-xs uppercase tracking-wider text-purple-300 mb-3">API Testing</p>

              <h3 className="text-xl font-bold mb-3">Negative and Boundary API Testing</h3>

              <p className="text-zinc-400 leading-7 mb-5">

                Show how to validate status codes, response bodies, invalid inputs, authentication failures, and business rules.

              </p>

              <span className="text-sm text-zinc-500">Planned write-up · Use a safe demo API</span>

            </article>

            <article className="rounded-2xl border border-zinc-800 bg-white/[0.03] p-6 hover:border-emerald-400/50 transition">

              <p className="text-xs uppercase tracking-wider text-emerald-300 mb-3">Debugging</p>

              <h3 className="text-xl font-bold mb-3">Investigating a Failed E2E Test</h3>

              <p className="text-zinc-400 leading-7 mb-5">

                Walk through a reproducible failure, inspect the trace, identify the root cause, and record the fix and regression check.

              </p>

              <span className="text-sm text-zinc-500">Planned write-up · Add a real trace screenshot</span>

            </article>

          </div>

        </div>

      </section>

      {/* Skills Section */}

<section

  id="skills"

  className="bg-black text-white px-6 py-20"

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

        Agentic AI

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

Always open to discussions around testing strategies, automation frameworks and  emerging QA technologies.    </p>

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

  divyamchaudhari

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

  divyam-c

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