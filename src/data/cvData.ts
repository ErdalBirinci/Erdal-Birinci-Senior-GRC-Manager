import { Project, ProjectComment, ExperienceItem, CertificationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Erdal Birinci',
  title: 'Senior GRC Manager & Enterprise Security Architect',
  shortBio: 'Accomplished Senior GRC Manager with over 20 years of extensive IT infrastructure, security management, and compliance experience (ISO 27001, ISO 42001, NIST CSF, SOC 2, NIS2, and the EU AI Act).',
  location: 'Espoo, Finland',
  phone: '+358 0413191446',
  email: 'erdalbirinci@gmail.com',
  linkedin: 'https://linkedin.com/in/codeforwhat/',
  linkedinHandle: 'linkedin.com/in/codeforwhat',
  stats: [
    { label: 'Years of Experience', value: '20+' },
    { label: 'Audit & Compliance Success', value: '100%' },
    { label: 'Managed Cloud & IT Platforms', value: '15+' },
    { label: 'Accredited Certifications', value: '13+' }
  ],
  summaryText: 'Result-oriented and highly accomplished Senior GRC Manager with over 20 years of extensive IT infrastructure, security management, and compliance experience. Proven track record in designing and implementing enterprise-wide, risk-based GRC frameworks aligned with ISO 27001, ISO 42001 (AIMS), NIST CSF, SOC 2, NIS2, and the EU AI Act. Expert in executing internal/external surveillance audits, establishing identity and access management (IAM) strategies, and managing multi-platform environments (Microsoft 365, Azure, AWS, Google Cloud, SAP BASIS, and Salesforce). Exceptional leadership skills in bridging the gap between technical security and business-aligned executive risk reporting, with a strong focus on gamified security awareness, cloud SIEM automation, and enterprise compliance architectures.'
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'sentinel-siem-automation',
    title: 'Microsoft Sentinel SIEM & Threat Automation',
    tagline: 'Cloud-Native SIEM/SOAR Incident Triage & Automated Playbook Remediation',
    category: 'cloud',
    categoryLabel: 'Cloud Security & SIEM',
    year: '2024 - 2026',
    status: 'Production Environment',
    accentColor: '#0071E3', // Apple Blue
    badgeBg: 'bg-blue-50',
    badgeText: 'text-blue-700',
    iconName: 'ShieldAlert',
    summary: 'Architected and operationalized an enterprise Microsoft Sentinel (SIEM/SOAR) and Azure Security Center ecosystem, integrating automated threat intelligence, custom KQL analytics, and automated playbook response across multi-cloud environments.',
    highlights: [
      'Centralized continuous log ingestion across Azure, AWS, Google Cloud, and M365 workloads',
      'Automated Logic Apps SOAR playbooks for instant entity containment and malicious IP quarantine',
      'Custom KQL analytic rules reducing alert noise and dropping Mean Time to Respond (MTTR) by 72%'
    ],
    metrics: [
      { label: 'MTTR Incident Drop', value: '-72%' },
      { label: 'Integrated Cloud Feeds', value: '85+' },
      { label: 'Automated Playbook Triage', value: '94%' }
    ],
    technicalDetails: {
      architectureOverview: 'Cloud-native SIEM/SOAR architecture built on Azure Log Analytics workspaces with Microsoft Sentinel data connectors, Logic Apps automation engines, and bidirectional ITSM integrations.',
      securityControls: [
        'Continuous threat intelligence feed ingestion via STIX/TAXII and Microsoft Defender XDR',
        'Automated IP/URL quarantine and user session revocation via Logic Apps playbooks',
        'Custom Kusto Query Language (KQL) rules mapped to MITRE ATT&CK framework tactics',
        'Role-Based Access Control (RBAC) with dedicated incident responder and SOC analyst scopes'
      ],
      techStack: ['Microsoft Sentinel', 'Azure Log Analytics', 'KQL (Kusto)', 'Azure Logic Apps (SOAR)', 'Microsoft Defender XDR', 'Azure Monitor', 'Power BI'],
      complianceFrameworks: ['ISO/IEC 27001:2022 Annex A.8.16 (Monitoring)', 'NIST CSF DE.CM & RS.RP', 'SOC 2 CC7.2 (Security Operations)', 'NIS2 Directive Incident Reporting'],
      auditOutcomes: [
        'Automated audit evidence collection demonstrating 24/7 continuous security monitoring capability',
        'Validated SOC 2 Type II audit logging and anomaly detection controls without discrepancies',
        'Drastic reduction of false-positive alerts, accelerating Tier-1 triage to under 3 minutes'
      ],
      governanceArtifacts: ['SOC Incident Response Plan (IRP)', 'SOAR Playbook Standard Operating Procedures', 'KQL Analytic Rule Repository'],
      roleResponsibility: 'GRC Manager & InfoSec Specialist — Detection engineering architecture, SOAR automation playbook design, and audit governance mapping.'
    }
  },
  {
    id: 'grchub-eu',
    title: 'GRCHub.eu',
    tagline: 'Gamified GRC & Zero Trust Interactive Training Ecosystem',
    category: 'grc',
    categoryLabel: 'GRC & Education',
    year: 'June 2026',
    status: 'Live Platform',
    accentColor: '#34C759', // Apple Mint/Green
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-700',
    iconName: 'Gamepad2',
    summary: 'Launched a gamified GRC training ecosystem in June 2026, developing interactive simulations ("Zero Trust Lab", "Be a CISA") to modernize and enhance corporate compliance and audit training.',
    highlights: [
      'Role-based interactive scenario trees (Zero Trust conditional access simulation)',
      'Auditor simulation ("Be a CISA"): Real-world finding analysis and audit evidence triage',
      'Measurable and quantifiable employee security behavioral change'
    ],
    metrics: [
      { label: 'Course Completion Rate', value: '94%' },
      { label: 'Interactive Scenarios', value: '45+' },
      { label: 'Phishing Vulnerability Drop', value: '68%' }
    ],
    technicalDetails: {
      architectureOverview: 'Event-driven simulation engine. Computes security ramifications and breach exposure dynamically in isolated browser sandboxes based on user decisions.',
      securityControls: [
        'Client-side isolated simulation sandbox',
        'SCORM and xAPI enterprise LMS interoperability',
        'ISO 27001 Clause 7.2 (Competence) and 7.3 (Awareness) metric telemetry',
        'Realistic social engineering vectors and simulated third-party audit drills'
      ],
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'WebSockets', 'Canvas API', 'Node.js', 'PostgreSQL'],
      complianceFrameworks: ['ISO/IEC 27001:2022 Clause 7.3', 'NIST SP 800-50', 'NIS2 Directive Art. 21', 'ENISA Awareness Guidelines'],
      auditOutcomes: [
        'Automated auditable compliance training attendance and competency verification reports',
        '42% increase in employee threat response and reporting speed',
        'Full compliance verification under European cybersecurity resilience mandates'
      ],
      governanceArtifacts: ['GRC Simulation Playbooks', 'Employee Awareness KPI Matrix', 'Audit Trail Export Protocol'],
      roleResponsibility: 'Founder & GRC Lead — Scenario design, regulatory alignment models, and Zero Trust Lab simulation logic.'
    },
    liveUrl: 'https://grchub.eu'
  },
  {
    id: 'iso42001-ai-governance',
    title: 'ISO 42001 & EU AI Act Governance Matrix',
    tagline: 'AI Risk Management System (AIMS) & Algorithmic Accountability Framework',
    category: 'ai',
    categoryLabel: 'AI Governance',
    year: '2025 - 2026',
    status: 'Implemented (Symanto AI GmbH)',
    accentColor: '#AF52DE', // Apple Purple
    badgeBg: 'bg-purple-50',
    badgeText: 'text-purple-700',
    iconName: 'Cpu',
    summary: 'Architected and implemented a comprehensive enterprise risk-based framework at Symanto AI GmbH aligned with ISO/IEC 42001 (AIMS) and the EU AI Act across internal and foundation models.',
    highlights: [
      'AI Impact Assessment (AIIA) methodology for high-risk generative AI pipelines',
      'Model cards, training data provenance auditing, and algorithmic transparency controls',
      'Third-party AI supplier model risk evaluation and intellectual property guardrails'
    ],
    metrics: [
      { label: 'Governed AI Models', value: '28' },
      { label: 'EU AI Act Risk Alignment', value: '100%' },
      { label: 'ISO 42001 Readiness Score', value: '96%' }
    ],
    technicalDetails: {
      architectureOverview: 'Integrated governance and audit logging layer embedded directly into MLOps pipelines. Covers model versioning, dataset hash validation, and output hallucination/bias monitoring.',
      securityControls: [
        'Model poisoning and prompt injection adversarial testing',
        'Data Loss Prevention (DLP) and automated PII scrubbing from training repositories',
        'Immutable audit logging of model inferences and algorithmic decisions',
        'Human-in-the-loop (HITL) approval workflows for high-impact outputs'
      ],
      techStack: ['Python', 'MLflow', 'Hugging Face Hub Security', 'Azure OpenAI Security', 'AWS Bedrock Guardrails'],
      complianceFrameworks: ['ISO/IEC 42001:2023 (AIMS)', 'EU AI Act (Regulation 2024/1689)', 'NIST AI RMF 1.0', 'ISO/IEC 23894'],
      auditOutcomes: [
        'Comprehensive categorization of all enterprise models prior to EU AI Act enforcement',
        'Executive board approval of ISO 42001 certification roadmap',
        'Zero high-risk findings during external surveillance audits'
      ],
      governanceArtifacts: ['AI Ethics & Safety Policy', 'AIMS Risk Treatment Plan', 'AI Model Transparency Dossier'],
      roleResponsibility: 'GRC Manager — AI Governance Framework Architecture, Risk Assessments, and Policy Design.'
    }
  },
  {
    id: 'zero-trust-entra-id',
    title: 'Enterprise Zero Trust & Entra ID IAM Architecture',
    tagline: 'Modern Passwordless Authentication & Conditional Access Transformation',
    category: 'cloud',
    categoryLabel: 'Cloud & Zero Trust',
    year: '2024 - 2026',
    status: 'Production (Global)',
    accentColor: '#32ADE6', // Apple Cyan
    badgeBg: 'bg-cyan-50',
    badgeText: 'text-cyan-700',
    iconName: 'KeyRound',
    summary: 'Engineered robust Identity and Access Management (IAM) architectures using Microsoft Entra ID and modern Conditional Access policies aligned with Zero Trust principles.',
    highlights: [
      'Risk-based continuous user and session evaluation (Continuous Access Evaluation - CAE)',
      'Strict device compliance gates enforced across all endpoints via Microsoft Intune',
      'Automated threat containment and session revocation via Microsoft Sentinel (SIEM/SOAR)'
    ],
    metrics: [
      { label: 'Identity Threat Reduction', value: '99.2%' },
      { label: 'Managed Endpoints', value: '1,500+' },
      { label: 'MFA Enforcement Coverage', value: '100%' }
    ],
    technicalDetails: {
      architectureOverview: 'Modern identity federation bridging hybrid cloud, SaaS, and on-premises infrastructure. SSO, SCIM provisioning, and Azure Arc resource management.',
      securityControls: [
        'FIDO2 and Microsoft Authenticator passwordless authentication rollout',
        'Privileged Identity Management (PIM) with just-in-time, approval-based elevation',
        'Geographic and impossible-travel anomaly telemetry detection',
        'Shadow IT visibility and discovery via Defender for Cloud Apps'
      ],
      techStack: ['Microsoft Entra ID', 'Microsoft Intune', 'Microsoft Defender XDR', 'Microsoft Sentinel', 'Azure AD Connect'],
      complianceFrameworks: ['NIST SP 800-207 (Zero Trust)', 'ISO/IEC 27001 Annex A.9 & A.8.5', 'SOC 2 Trust Services Criteria (CC6.1 - CC6.3)'],
      auditOutcomes: [
        'Zero IAM non-conformities during May 2026 ISO 27001:2022 surveillance audit',
        'Complete elimination of standing global administrator privileges',
        'Reduction of credential-harvesting account takeovers to absolute zero'
      ],
      governanceArtifacts: ['Enterprise IAM Standard', 'Privileged Access Workstations (PAW) Blueprint', 'Emergency Access (Break-Glass) SOP'],
      roleResponsibility: 'GRC Manager & InfoSec Specialist — Architectural design, Conditional Access governance, and audit leadership.'
    }
  },
  {
    id: 'gxp-life-sciences-cloud',
    title: 'GxP Life Sciences Regulated IT Infrastructure',
    tagline: 'EU Annex 11 & FDA 21 CFR Part 11 Validated Enterprise Architecture',
    category: 'enterprise',
    categoryLabel: 'Enterprise Infrastructure',
    year: '2023 - 2024',
    status: 'Audited (Rescop B.V.)',
    accentColor: '#FF9500', // Apple Amber/Orange
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-700',
    iconName: 'Server',
    summary: 'Architected and deployed enterprise IT infrastructure projects at Rescop B.V. (Netherlands) ensuring tight alignment with business growth and GxP/life sciences regulatory standards.',
    highlights: [
      'Computerized System Validation (CSV) aligned with GAMP 5 principles',
      'Immutable audit trails and data integrity (ALCOA+) frameworks',
      'Tier-3 advanced technical support resolving complex architectural blockers'
    ],
    metrics: [
      { label: 'System Validation Success', value: '100%' },
      { label: 'Infrastructure Availability', value: '99.98%' },
      { label: 'Regulatory Findings', value: '0' }
    ],
    technicalDetails: {
      architectureOverview: 'High-availability, redundant virtualized enterprise infrastructure with multi-region disaster recovery and continuous data consistency verification.',
      securityControls: [
        'Electronic records and signatures integrity conforming to FDA 21 CFR Part 11',
        'Fully encrypted backup vaults with automated recurring disaster recovery testing',
        'Strict logical and network micro-segmentation (VLAN / Firewall zoning)',
        'Rigorous Change Control Management (CCM) workflows'
      ],
      techStack: ['VMware vSphere', 'Windows Server Enterprise', 'Red Hat Enterprise Linux', 'Veeam Backup', 'NetApp Storage'],
      complianceFrameworks: ['GxP Regulations', 'EU Annex 11', 'FDA 21 CFR Part 11', 'ISO/IEC 20000-1 (ITSM)', 'GAMP 5'],
      auditOutcomes: [
        'Flawless validation dossiers accepted during European life sciences authority inspections',
        '35% reduction in incident resolution times via standardized operating handbooks and SOPs',
        'Elimination of unscheduled mission-critical downtime'
      ],
      governanceArtifacts: ['Computer System Validation (CSV) Master Plan', 'Data Integrity SOP', 'Disaster Recovery Blueprint'],
      roleResponsibility: 'Senior IT Specialist — Enterprise infrastructure architecture, Tier-3 technical support, and governance SOP authoring.'
    }
  },
  {
    id: 'sap-basis-enterprise-hardening',
    title: 'Fortune 500 SAP BASIS Security & Systems Hardening',
    tagline: 'Mission-Critical ERP Infrastructure Administration & Zero-Downtime Patching',
    category: 'enterprise',
    categoryLabel: 'Enterprise Infrastructure',
    year: '2002 - 2010',
    status: 'Completed (Unilever, P&G, Nestle)',
    accentColor: '#FF2D55', // Apple Rose/Red
    badgeBg: 'bg-rose-50',
    badgeText: 'text-rose-700',
    iconName: 'Database',
    summary: 'Accumulated 8 years of premier enterprise IT and SAP BASIS consultancy experience across Fortune 500 giants, executing systems administration, optimization, performance tuning, and critical security patches.',
    highlights: [
      'Enterprise high-availability clustering for massive ERP core landscapes',
      'Network and kernel security hardening against emerging operational vulnerabilities',
      'Zero unplanned downtime across major database and kernel patch lifecycles'
    ],
    metrics: [
      { label: 'ERP Service Availability', value: '99.99%' },
      { label: 'Managed SAP Instances', value: '80+' },
      { label: 'Deployed Security Patches', value: '1,200+' }
    ],
    technicalDetails: {
      architectureOverview: 'Multi-tiered enterprise SAP architecture (Web Dispatchers, Application Server clusters, Central Instances, and Oracle/MaxDB database engines).',
      securityControls: [
        'SAP authorization profile (PFCG) cleanup and strict Segregation of Duties (SoD)',
        'Secure Network Communications (SNC) encryption for all RFC interfaces',
        'Database parameter hardening and detailed audit logging',
        'OS-level service isolation and root privilege containment'
      ],
      techStack: ['SAP R/3', 'SAP NetWeaver', 'Oracle Database', 'HP-UX / AIX / Linux', 'SAP Solution Manager'],
      complianceFrameworks: ['Sarbanes-Oxley Act (SOX ITGC)', 'SAP Security Baseline', 'ITIL v3 / ISO 20000-1'],
      auditOutcomes: [
        '100% clean annual Sarbanes-Oxley (SOX ITGC) external audit reports',
        '40% performance throughput increase following system tuning and kernel optimization',
        'Guaranteed RPO < 15 min and RTO < 2 hrs across high-availability disaster scenarios'
      ],
      governanceArtifacts: ['SAP System Hardening Guide', 'RFC Security Standard', 'High Availability Operations Manual'],
      roleResponsibility: 'SAP BASIS Consultant & IT Specialist — Enterprise SAP administration, security patching, and architectural optimization.'
    }
  }
];

export const INITIAL_COMMENTS: ProjectComment[] = [
  {
    id: 'c1',
    projectId: 'sentinel-siem-automation',
    authorName: 'Markus Weber',
    authorTitle: 'CISO, Fintech Enterprise',
    commentText: 'The automated Sentinel SOAR playbooks engineered by Erdal eliminated alert fatigue across our SOC. Incident response times dropped dramatically from hours to minutes.',
    date: 'August 14, 2026',
    rating: 5,
    likes: 14
  },
  {
    id: 'c2',
    projectId: 'sentinel-siem-automation',
    authorName: 'Sanna Virtanen',
    authorTitle: 'Lead Cloud Security Architect, Helsinki',
    commentText: 'The Sentinel correlation rules and multi-cloud log integration across AWS and Azure showcase Erdal\'s deep architectural grasp of enterprise hybrid security.',
    date: 'August 28, 2026',
    rating: 5,
    likes: 9
  },
  {
    id: 'c3',
    projectId: 'grchub-eu',
    authorName: 'Dr. Elena Becker',
    authorTitle: 'Head of Compliance, DACH Region',
    commentText: 'The "Zero Trust Lab" simulations fundamentally transformed how our workforce views information security. Replacing static slides with interactive decision trees elevated our completion rate to 94%!',
    date: 'July 19, 2026',
    rating: 5,
    likes: 21
  },
  {
    id: 'c4',
    projectId: 'grchub-eu',
    authorName: 'Cemil Karahan',
    authorTitle: 'Senior Information Security Auditor',
    commentText: 'The evidence analysis scenarios in "Be a CISA" provide invaluable real-world training for rising security analysts. A truly innovative vision for modern compliance education.',
    date: 'September 02, 2026',
    rating: 5,
    likes: 12
  },
  {
    id: 'c5',
    projectId: 'iso42001-ai-governance',
    authorName: 'Hans-Peter Schmidt',
    authorTitle: 'Chief Legal & Compliance Officer, Bavaria',
    commentText: 'The ISO 42001 risk matrix established by Erdal when the EU AI Act was first introduced allowed us to conclude our May 2026 surveillance audit with zero findings. Outstanding foresight.',
    date: 'June 10, 2026',
    rating: 5,
    likes: 18
  },
  {
    id: 'c6',
    projectId: 'zero-trust-entra-id',
    authorName: 'Thomas Lindström',
    authorTitle: 'Director of IT Operations, Nordic Tech',
    commentText: 'Enforcing passwordless authentication and Intune device compliance across 1,500+ endpoints was exceptionally smooth. Perfect fusion of security engineering and user experience.',
    date: 'January 22, 2026',
    rating: 5,
    likes: 11
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'symanto-grc',
    company: 'Symanto AI GmbH',
    role: 'GRC Manager',
    period: 'Dec 2025 – June 2026',
    location: 'Nuremberg, Germany (Hybrid)',
    type: 'Full-time',
    keyAchievement: 'Managed the successful execution of the May 2026 ISO 27001:2022 surveillance audit and architected a risk-based GRC framework aligned with ISO 42001, NIST CSF, and SOC 2.',
    responsibilities: [
      'Led the architecture, design, and execution of an enterprise risk-based GRC framework comprehensively aligned with ISO 27001, ISO 42001, NIST CSF, SOC 2, and European directives.',
      'Managed the successful execution of the May 2026 ISO 27001:2022 surveillance audit, ensuring continuous compliance for certification with a specialized focus on supplier relationship security.',
      'Conducted rigorous enterprise-wide risk assessments, including inherent and residual risk analyses; defined actionable risk treatment plans across global business and IT stakeholders.',
      'Authored and updated information security policies, standards, and procedures, effectively translating complex regulatory requirements into business-enabling control objectives.',
      'Delivered executive-level dashboards and reporting on corporate risk posture, compliance status, and Key Risk Indicators (KRIs) for C-level leadership and the board.'
    ],
    skills: ['ISO/IEC 27001', 'ISO/IEC 42001', 'NIST CSF', 'SOC 2', 'Supplier Risk Management', 'KRI Executive Dashboards']
  },
  {
    id: 'symanto-infosec',
    company: 'Symanto AI GmbH',
    role: 'InfoSec Specialist',
    period: 'Nov 2024 – Dec 2025',
    location: 'Nuremberg, Germany',
    type: 'Full-time',
    keyAchievement: 'Secured company-wide IT infrastructure and ensured 100% compliance with security baseline standards across all Microsoft cloud and hybrid services.',
    responsibilities: [
      'Secured company-wide IT infrastructure and ensured 100% compliance with security baseline standards across all Microsoft cloud and hybrid services (M365, Azure, Windows Server).',
      'Engineered and fine-tuned endpoint security and mobile device compliance policies utilizing Microsoft Defender for Endpoint, Defender for Office 365, and Microsoft Intune.',
      'Monitored, triaged, and remediated security incidents and advanced threats utilizing Microsoft Sentinel (SIEM) and Azure Security Center.',
      'Enforced robust Identity and Access Management (IAM) architectures using Microsoft Entra ID and modern Conditional Access policies aligned with Zero Trust principles.'
    ],
    skills: ['Microsoft Entra ID', 'Microsoft Sentinel', 'Defender for Endpoint', 'Microsoft Intune', 'Zero Trust IAM']
  },
  {
    id: 'rescop',
    company: 'Rescop B.V.',
    role: 'Senior IT Specialist',
    period: 'Jan 2023 – Nov 2024',
    location: 'Baarle Nassau, Netherlands',
    type: 'Full-time',
    keyAchievement: 'Architected and deployed enterprise IT infrastructure projects ensuring tight alignment with business growth and GxP/life sciences regulatory standards.',
    responsibilities: [
      'Architected and deployed enterprise IT infrastructure projects ensuring tight alignment with business growth and GxP/industry-specific regulatory standards.',
      'Provided Tier-3 advanced technical support, using root-cause analysis to solve complex architectural and systems performance blockers.',
      'Authored comprehensive IT governance blueprints, standard operating procedures (SOPs), and operational handbooks while mentoring and upskilling junior engineers.'
    ],
    skills: ['GxP Compliance', 'IT Governance', 'Tier-3 Support', 'SOP Authoring', 'Infrastructure Architecture']
  },
  {
    id: 'pwf-aero',
    company: 'PWF Aero',
    role: 'Information Technology Associate',
    period: 'Aug 2021 – Dec 2022',
    location: 'Izmir, Turkey',
    type: 'Full-time',
    keyAchievement: 'Maintained optimal performance and uptime of critical local hardware and software components, managing SLA-driven technical support.',
    responsibilities: [
      'Maintained optimal performance and uptime of critical local hardware and software components, managing SLA-driven technical support.',
      'Identified operational bottlenecks and automated standard workflows to minimize repetitive IT administration tasks.'
    ],
    skills: ['SLA Management', 'Hardware & Software Tuning', 'Workflow Automation', 'Network Support']
  },
  {
    id: 'solard-medical',
    company: 'Solard Medical',
    role: 'IT Manager (Salesforce Administrator)',
    period: 'Oct 2018 – Jul 2021',
    location: 'Kyiv, Ukraine',
    type: 'Full-time',
    keyAchievement: 'Fully managed enterprise Salesforce platform and configured strict role hierarchy and sharing rules to guarantee patient data protection.',
    responsibilities: [
      'Fully managed and customized the enterprise Salesforce CRM platform (Objects, Layouts, Apex Triggers, Workflows, and advanced Flows).',
      'Configured Salesforce role hierarchy, sharing rules, profiles, and permission sets to guarantee data protection and strict access governance.'
    ],
    skills: ['Salesforce Administration', 'Apex & Flow Automation', 'Data Protection', 'Access Governance']
  },
  {
    id: 'adjans',
    company: 'Adjans',
    role: 'Project Manager',
    period: 'Feb 2010 – Sept 2018',
    location: 'Istanbul, Turkey',
    type: 'Full-time',
    keyAchievement: 'Directed cross-functional project teams through successful software and infrastructure lifecycles, consistently meeting scope, schedule, and budgetary baselines.',
    responsibilities: [
      'Directed cross-functional project teams through successful software and infrastructure lifecycles.',
      'Consistently met scope, schedule, and budgetary baselines across enterprise software deployments.'
    ],
    skills: ['Project Management', 'Software Lifecycles', 'Budget & Schedule Baseline', 'Cross-Functional Leadership']
  },
  {
    id: 'sap-basis-consultancy',
    company: 'Unilever / P&G / Nestle / Turkcell',
    role: 'SAP BASIS Consultant & IT Specialist',
    period: 'May 2002 – Jan 2010',
    location: 'Istanbul, Turkey',
    type: 'Consultancy',
    keyAchievement: 'Accumulated 8 years of premier enterprise IT and SAP BASIS consultancy experience across Fortune 500 giants.',
    responsibilities: [
      'Accumulated 8 years of premier enterprise IT and SAP BASIS consultancy experience across Fortune 500 giants, executing systems administration, optimization, performance tuning, and critical security patches.',
      'Managed critical server infrastructure, performed system security audits, and mapped network safeguards against emerging operational vulnerabilities.'
    ],
    skills: ['SAP BASIS', 'High Availability (HA)', 'Security Audits', 'Performance Optimization', 'Network Safeguards']
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'ISO/IEC 27001 Lead Auditor (LA)',
    category: 'Audit & Governance',
    badge: 'Lead Auditor',
    validity: 'Internationally Accredited'
  },
  {
    id: 'cert-2',
    title: 'ISO/IEC 42001 Certification (AIMS)',
    category: 'Audit & Governance',
    badge: 'AI Management',
    validity: 'AIMS Certified'
  },
  {
    id: 'cert-3',
    title: 'GDPR Data Protection Officer (DPO)',
    category: 'Audit & Governance',
    badge: 'Data Protection',
    validity: 'EU Privacy Compliance'
  },
  {
    id: 'cert-4',
    title: 'ISO/IEC 27701:2021 (PIMS)',
    category: 'Audit & Governance',
    badge: 'Privacy Information',
    validity: 'Accredited'
  },
  {
    id: 'cert-5',
    title: 'ISO/IEC 27002 (ISMS Controls)',
    category: 'Audit & Governance',
    badge: 'Security Controls',
    validity: 'Accredited'
  },
  {
    id: 'cert-6',
    title: 'ISO/IEC 20000-1:2019 (ITSM)',
    category: 'Audit & Governance',
    badge: 'IT Service Management',
    validity: 'Accredited'
  },
  {
    id: 'cert-7',
    title: 'Oracle Cloud Infrastructure Architect Professional',
    category: 'Cloud Architecture',
    badge: 'OCI Professional',
    validity: 'Oracle Certified'
  },
  {
    id: 'cert-8',
    title: 'Microsoft Certified: Azure Cloud Services / Entra ID Architecture',
    category: 'Cloud Architecture',
    badge: 'Azure & Entra ID',
    validity: 'Microsoft Certified'
  },
  {
    id: 'cert-9',
    title: 'Google Cloud Security Professional',
    category: 'Cloud Architecture',
    badge: 'Google Cloud',
    validity: 'GCP Certified'
  },
  {
    id: 'cert-10',
    title: 'AWS Security & AWS Fundamentals',
    category: 'Cloud Architecture',
    badge: 'AWS Security',
    validity: 'Amazon Certified'
  },
  {
    id: 'cert-11',
    title: 'Google Cyber Security Specialization',
    category: 'Cybersecurity Specializations',
    badge: 'Cybersecurity',
    validity: 'Google'
  },
  {
    id: 'cert-12',
    title: 'Cisco Cyber Security Specialization',
    category: 'Cybersecurity Specializations',
    badge: 'Network Defense',
    validity: 'Cisco'
  },
  {
    id: 'cert-13',
    title: 'IBM Cyber Security & IBM Network Security',
    category: 'Cybersecurity Specializations',
    badge: 'Threat Intelligence',
    validity: 'IBM'
  }
];

export const CORE_COMPETENCIES = [
  {
    title: 'GRC Frameworks & Auditing',
    items: [
      'ISO/IEC 27001 (Lead Auditor)',
      'ISO/IEC 42001 (AIMS - Artificial Intelligence)',
      'ISO 27701 (PIMS) & ISO 27002',
      'ISO 20000-1 (ITSM)',
      'NIST CSF & SP 800-53',
      'SOC 2 (Type I & II Readiness)',
      'NIS2 Directive Compliance',
      'EU AI Act (Regulation 2024/1689)',
      'Enterprise Risk Assessment & Treatment Plans'
    ],
    accent: '#0071E3'
  },
  {
    title: 'Cloud Security & Identity',
    items: [
      'Microsoft Entra ID (Modern IAM)',
      'Microsoft Intune & MDM/MAM',
      'Microsoft Purview (DLP & Information Protection)',
      'Microsoft Defender for Endpoint / O365',
      'Microsoft Sentinel (SIEM / SOAR / XDR)',
      'Azure Cloud Security Architecture',
      'AWS Security & Google Cloud Platform (GCP)'
    ],
    accent: '#34C759'
  },
  {
    title: 'Security Practices & Governance',
    items: [
      'Zero Trust Principles & Architecture',
      'SIEM / SOAR / XDR Incident Triage',
      'DevSecOps & CI/CD Pipeline Guardrails',
      'Vulnerability Management & Threat Modeling',
      'Enterprise Data Governance & Privacy',
      'Internal & External Surveillance Audits'
    ],
    accent: '#AF52DE'
  },
  {
    title: 'Enterprise IT Systems & Platforms',
    items: [
      'Windows Server, macOS, Linux Administration',
      'SAP BASIS Consulting & Systems Hardening',
      'Salesforce Administration (Automation & Flows)',
      'GxP / Life Sciences Computerized System Validation',
      'Business Continuity & Disaster Recovery (BCP/DRP)'
    ],
    accent: '#FF9500'
  }
];
