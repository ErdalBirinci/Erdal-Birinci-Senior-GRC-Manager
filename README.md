# Erdal Birinci — Executive Portfolio & GRC Technical Architecture Platform

An Apple-styled, high-performance personal website, interactive project gallery, and technical governance platform designed for **Erdal Birinci**, Senior Governance, Risk, and Compliance (GRC) Manager and Enterprise Security Architect with over 20 years of experience.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.0-61dafb.svg)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.x-38bdf8.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646cff.svg)](https://vitejs.dev/)
[![Compliance](https://img.shields.io/badge/ISO%2F规-27001%20%7C%2042001%20%7C%20NIS2-success.svg)](#governance-standards)

---

## Table of Contents

1. [Executive Profile Overview](#executive-profile-overview)
2. [Design Philosophy & Apple Aesthetic](#design-philosophy--apple-aesthetic)
3. [Key Application Features](#key-application-features)
4. [Visual Graphics & Architectural Diagrams](#visual-graphics--architectural-diagrams)
5. [Featured Project Inventory](#featured-project-inventory)
6. [Interactive Comments & Peer Review Engine](#interactive-comments--peer-review-engine)
7. [Governance Standards & Accreditations](#governance-standards--accreditations)
8. [Technology Stack & Architecture](#technology-stack--architecture)
9. [Project Directory Structure](#project-directory-structure)
10. [Local Development & Deployment](#local-development--deployment)
11. [Author & Contact](#author--contact)

---

## Executive Profile Overview

**Erdal Birinci** is a result-oriented, senior cybersecurity and governance executive with over two decades of experience designing, implementing, and defending multi-platform enterprise IT environments and risk-based GRC frameworks.

* **Primary Roles**: Senior GRC Manager, Enterprise Security Architect, Information Security Specialist, ISO 27001 Lead Auditor.
* **Core Domains**: Enterprise Risk Management (ERM), ISO/IEC 27001 & ISO/IEC 42001 (AI Management), NIST CSF, SOC 2 Type II, EU AI Act, NIS2 Directive, Zero Trust Identity, Microsoft Sentinel SIEM/SOAR, Fortune 500 SAP BASIS Hardening, and Life Sciences GxP Compliance.
* **Geographic Presence**: Espoo, Finland (Nordics & European Union / DACH Region).

---

## Design Philosophy & Apple Aesthetic

The platform embodies Apple's design language, characterized by clarity, lightness, typographic precision, and fluid physics:

* **Canvas & Surfaces**: Clean, bright off-white background (`#FBFBFD` and pure `#FFFFFF`) with subtle frosted glass surfaces (`backdrop-blur-xl bg-white/80`) and hairline border contrast (`border-black/[0.06]`).
* **Vibrant Accent Palette**:
  * **Electric Cobalt Blue** (`#0071E3`) — Primary focal points, active states, and core CTAs.
  * **Emerald Mint** (`#34C759`) — Verification states, audit success, and awareness metrics.
  * **Digital Purple** (`#AF52DE`) — Artificial intelligence and algorithmic governance.
  * **Warm Amber** (`#FF9500`) — GxP life sciences and regulatory qualification.
  * **Apple Cyan** (`#32ADE6`) — Identity, Zero Trust, and cloud authentication.
  * **Rose Coral** (`#FF2D55`) — Mission-critical enterprise infrastructure and high availability.
* **Typography**:
  * Primary display and body face: **Plus Jakarta Sans** (Google Fonts) with tight optical tracking (`tracking-tight`) and balanced line lengths.
  * Tabular numbers (`tabular-nums font-mono`) applied to all telemetry values, scores, and performance metrics.
* **Anti-Slop & Zero-Pill Discipline**: Metadata is styled as unboxed, clean typography separated by elegant typographic bullets (`·`), completely avoiding static candy badges and clutter.

---

## Key Application Features

### 1. Executive Top Bar (3-Zone Contract)
* **Zone 1**: Single text brand wordmark (*Erdal Birinci*) with shield icon.
* **Zone 2**: Clean text navigation links (*Overview*, *Projects & Architecture*, *Competencies*, *Career*, *Certifications*, *Contact*).
* **Zone 3**: Action buttons (*Executive Resume* modal trigger and *Get in Touch* smooth scroll CTA).
* Fully responsive with a mobile drawer menu and smooth transitions.

### 2. Executive Hero Section
* Verified Lead Auditor status kicker with live availability indicators.
* High-impact headline: *"Cybersecurity & GRC Architecture & Governance"*.
* Value proposition summarizing 20+ years of expertise.
* Interactive 4-card Bento metric bar highlighting experience, 100% audit record, ISO 42001 AI readiness, and 13+ accredited certifications.

### 3. Executive GRC Posture & Audit Telemetry Dashboard (`GrcPostureDashboard.tsx`)
* Real-time benchmark indicators across **ISO/IEC 27001:2022** (100%), **ISO/IEC 42001 AIMS** (96%), **NIST CSF 2.0** (95%), **SOC 2 Type II** (98%), and **EU NIS2 Directive** (94%).
* Interactive spotlight card enabling deep-dive inspection of evaluated controls, external audit dates, and Lead Auditor sign-offs.

### 4. Interactive Project Bento Gallery (`ProjectGrid.tsx`)
* Bento box arrangement with fluid hover physics, accent colors, category headers, summary narratives, and real-time comment counters.
* Direct one-click card modal preview and deep-dive page routing.

### 5. Dedicated Projects & Technical Column Page (`ProjectsPage.tsx`)
* **Live Search Bar**: Instantly filters projects by title, framework (ISO, NIST), technology stack, or keywords.
* **Category Segmented Filter**: Switch between *All Projects*, *GRC & Education*, *Cloud & Zero Trust*, *SaaS & Security*, *Enterprise Infrastructure*, and *AI Governance*.
* **Dedicated Technical Column**: A 7-section technical specification column:
  1. *System Architecture & Data Flow*
  2. *Security Controls & Defense Principles*
  3. *Technology & Protocol Stack*
  4. *International Compliance Frameworks*
  5. *Audit Verifications & Outcomes*
  6. *Governance Artifacts & SOPs*
  7. *Leadership Role & Accountability*

### 6. Interactive Comments & Peer Review System
* Read authentic peer reviews from CISOs and Lead Architects.
* Submit custom feedback with Full Name, Title/Organization, 1–5 Star Rating, and Review text.
* Interactive like/upvote counter with state toggle.
* Data persisted across sessions via browser `localStorage`.

### 7. Core Competencies Matrix (`Competencies.tsx`)
* 4 structured categories: *GRC Frameworks & Auditing*, *Cloud Security & Identity*, *Security Practices & Governance*, and *Enterprise IT Systems & Platforms*.

### 8. Professional Career Timeline (`ExperienceTimeline.tsx`)
* Expandable, accordion-style career trajectory detailing 20+ years across:
  * **Symanto AI GmbH** (GRC Manager & InfoSec Specialist, Germany)
  * **Rescop B.V.** (Senior IT Specialist, Netherlands)
  * **PWF Aero** (IT Associate, Turkey)
  * **Solard Medical** (IT Manager / Salesforce Admin, Ukraine)
  * **Adjans** (Project Manager, Turkey)
  * **Unilever / P&G / Nestlé / Turkcell** (SAP BASIS Consultant & IT Specialist)

### 9. Accredited Certifications Showcase (`Certifications.tsx`)
* Filterable directory of 13+ international credentials (ISO 27001 Lead Auditor, ISO 42001, GDPR DPO, Oracle OCI Pro, Microsoft Azure/Entra ID, Google Cloud Security, AWS Security, Cisco, IBM).

### 10. Direct Contact & Communication Hub (`ContactSection.tsx`)
* Copy-to-clipboard cards for email (`erdalbirinci@gmail.com`) and phone (`+358 0413191446`).
* Direct LinkedIn networking card (`linkedin.com/in/codeforwhat`).
* Working message inquiry form with topic categorization, validation, GDPR compliance notice, and instant feedback alert.

### 11. Executive Resume Modal (`CvModal.tsx`)
* Clean modal displaying the complete executive CV with one-click **Print / Save as PDF** support.

---

## Visual Graphics & Architectural Diagrams

The platform includes custom SVG diagrams, visual data pipelines, and benchmark charts implemented in `src/components/ProjectVisualGraphics.tsx`:

| Project | Visual Diagram / Graphic Component | Description |
| :--- | :--- | :--- |
| **Microsoft Sentinel SIEM** | 4-Stage SOAR Pipeline | Ingestion (85+ feeds) $\rightarrow$ KQL Analytics $\rightarrow$ Triage (&lt;3 min) $\rightarrow$ Automated Playbook Isolation. |
| **Microsoft Sentinel SIEM** | MTTR Benchmark Bar Chart | Compares legacy manual SOC triage (4h 20m) against automated playbooks (11m, **-72% drop**). |
| **Microsoft Sentinel SIEM** | Alert Severity Distribution | Visual breakdown of Critical (5%), High (18%), Medium (42%), and Low (35%) incident volumes. |
| **GRCHub.eu** | Zero Trust Decision Tree | Branching simulation diagram showing permissive vs. verified Zero Trust security outcomes. |
| **GRCHub.eu** | Phishing Vulnerability Trajectory | 6-month visual SVG area chart illustrating employee click-rate drop from 28.4% to 2.4%. |
| **ISO 42001 & AI Act** | AI Risk Classification Bar | Visual classification of 28 enterprise models: High Risk (28%), Transparency (46%), Minimal Risk (26%). |
| **ISO 42001 & AI Act** | Algorithmic Lifecycle Matrix | 4-stage verification checklist with 100% compliance markers for data provenance and guardrails. |
| **Zero Trust & Entra ID** | Continuous Access Evaluation Flow | 3-stage visual gate: Signals (Risk/Intune) $\rightarrow$ Decision Engine $\rightarrow$ Enforced Outcome (Passwordless/FIDO2). |
| **GxP Life Sciences** | GAMP 5 CSV Validation Lifecycle | 4-phase verification sequence (URS/FRS $\rightarrow$ IQ $\rightarrow$ OQ $\rightarrow$ PQ) with ALCOA+ data integrity grid. |
| **Fortune 500 SAP BASIS** | Multi-Tier HA Cluster Topology | Architecture schematic linking Web Dispatchers, App Servers (PFCG/SNC), and DB Mirroring with 99.99% SLA bar. |

---

## Featured Project Inventory

```
┌───────────────────────────────────────────────────────────────────────────┐
│                           FEATURED PROJECTS                               │
├───────────────────────────────┬───────────────────────────────┬───────────┤
│ Title                         │ Focus Area                    │ Status    │
├───────────────────────────────┼───────────────────────────────┼───────────┤
│ Microsoft Sentinel SIEM &     │ Cloud-native SIEM/SOAR        │ Production│
│ Threat Automation             │ automated playbook triage     │ (2024-26) │
├───────────────────────────────┼───────────────────────────────┼───────────┤
│ GRCHub.eu                     │ Gamified GRC training         │ Live      │
│                               │ & Zero Trust simulations      │ (June '26)│
├───────────────────────────────┼───────────────────────────────┼───────────┤
│ ISO 42001 & EU AI Act         │ AI Risk Management System     │ Audited   │
│ Governance Matrix             │ & Algorithmic Accountability  │ (Symanto) │
├───────────────────────────────┼───────────────────────────────┼───────────┤
│ Enterprise Zero Trust &       │ Passwordless IAM &            │ Global    │
│ Entra ID IAM Architecture     │ Conditional Access Gates      │ Production│
├───────────────────────────────┼───────────────────────────────┼───────────┤
│ GxP Life Sciences             │ EU Annex 11 & FDA 21 CFR      │ Audited   │
│ Regulated IT Infrastructure   │ Computerized Validation (CSV) │ (Rescop)  │
├───────────────────────────────┼───────────────────────────────┼───────────┤
│ Fortune 500 SAP BASIS         │ Mission-critical ERP          │ Completed │
│ Security & Hardening          │ administration & zero-downtime│ (Fortune) │
└───────────────────────────────┴───────────────────────────────┴───────────┘
```

---

## Interactive Comments & Peer Review Engine

The platform incorporates an interactive client-side feedback engine:
* **Preloaded Peer Reviews**: Quotes and evaluations from CISOs, Cloud Architects, and Compliance Directors.
* **Dynamic Comment Submission**: Form with client-side validation for Name, Title, Rating (1–5 Stars), and Comment body.
* **Engagement**: Upvote/Like counter with toggleable user state.
* **Data Persistence**: Managed through `localStorage` with versioned cache keys (`erdal_birinci_project_comments_v2`), ensuring seamless state retention between visits.

---

## Governance Standards & Accreditations

* **ISO/IEC 27001:2022** — Lead Auditor (LA) certified; comprehensive ISMS architecture and surveillance audit leadership.
* **ISO/IEC 42001:2023 (AIMS)** — Artificial Intelligence Management System certification for generative and predictive AI.
* **EU AI Act (Regulation 2024/1689)** — High-risk classification, model card provenance, and transparency dossiers.
* **NIS2 Directive** — Critical infrastructure supply chain risk governance (Article 21) and rapid incident disclosure.
* **NIST SP 800-207 & SP 800-53** — Zero Trust architecture and federal security control catalog.
* **SOC 2 Type II** — Trust Services Criteria evaluation (Security, Confidentiality, Availability).
* **GxP & FDA 21 CFR Part 11 / EU Annex 11** — Computerized System Validation (CSV) and ALCOA+ data integrity.
* **GDPR (Regulation 2016/679)** — Data Protection Officer (DPO) certified access governance.

---

## Technology Stack & Architecture

* **Frontend Framework**: [React 19](https://react.dev/)
* **Build System**: [Vite 8](https://vitejs.dev/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom `@layer base` typography and Apple glassmorphism utilities (`.apple-glass`, `.apple-glass-card`)
* **Typography**: Plus Jakarta Sans & JetBrains Mono (Google Fonts)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Animation & Transitions**: CSS hardware-accelerated transitions & [Motion](https://motion.dev/)
* **Language & Types**: [TypeScript 5](https://www.typescriptlang.org/) with strict type checking

---

## Project Directory Structure

```
├── .env.example                     # Environment variable blueprint
├── .gitignore                       # Git ignore specifications
├── index.html                       # HTML5 entry point with Plus Jakarta Sans & metadata
├── metadata.json                    # AI Studio applet metadata & capabilities
├── package.json                     # NPM dependencies and build scripts
├── README.md                        # Comprehensive system documentation
├── tsconfig.json                    # TypeScript compiler configuration
├── vite.config.ts                   # Vite build tool and Tailwind integration
└── src/
    ├── main.tsx                     # React application entry point
    ├── index.css                    # Global CSS, Tailwind v4 imports, Apple utilities
    ├── types.ts                     # TypeScript definitions (Projects, Comments, etc.)
    ├── App.tsx                      # Root component, routing, and global state
    ├── data/
    │   └── cvData.ts                # Erdal Birinci profile, projects, career & certs data
    └── components/
        ├── Navbar.tsx               # Apple frosted glass navigation bar
        ├── Hero.tsx                 # Executive hero section with Bento metric bar
        ├── GrcPostureDashboard.tsx  # Executive compliance radar & benchmark meters
        ├── ProjectGrid.tsx          # Interactive Bento project gallery
        ├── ProjectsPage.tsx         # Deep-dive project explorer with Technical Column
        ├── ProjectVisualGraphics.tsx# Architecture diagrams, pipelines & MTTR charts
        ├── ProjectDetailModal.tsx   # Quick project preview modal with embedded diagrams
        ├── Competencies.tsx         # Core competencies matrix
        ├── ExperienceTimeline.tsx   # 20+ year career trajectory accordion
        ├── Certifications.tsx       # 13+ accredited certifications directory
        ├── ContactSection.tsx       # Interactive message form & social links
        ├── CvModal.tsx              # Executive resume modal with print/save support
        └── Footer.tsx               # Minimalist Apple footer with top jump navigation
```

---

## Local Development & Deployment

### Prerequisites
* **Node.js**: v18.0.0 or higher
* **Package Manager**: `npm` or `bun`

### Installation
```bash
# Clone the repository
git clone https://github.com/codeforwhat/erdal-birinci-portfolio.git

# Navigate to project directory
cd erdal-birinci-portfolio

# Install dependencies
npm install
```

### Running Locally
```bash
# Start local development server on port 3000
npm run dev
```
Open your browser at `http://localhost:3000` to interact with the application.

### Type-Checking & Linting
```bash
# Verify TypeScript compilation with zero errors
npm run lint
```

### Production Build
```bash
# Generate optimized production bundle in /dist
npm run build
```

---

## Author & Contact

**Erdal Birinci**  
*Senior Governance, Risk, and Compliance (GRC) Manager & Enterprise Security Architect*  
*ISO/IEC 27001 Lead Auditor · ISO/IEC 42001 Certification · GDPR DPO*

* **Location**: Espoo, Finland
* **Email**: [erdalbirinci@gmail.com](mailto:erdalbirinci@gmail.com)
* **Phone / WhatsApp**: [+358 0413191446](tel:+3580413191446)
* **LinkedIn**: [linkedin.com/in/codeforwhat](https://linkedin.com/in/codeforwhat/)

---

*© 2026 Erdal Birinci. All rights reserved. Designed with Apple minimalist aesthetics and enterprise engineering standards.*
