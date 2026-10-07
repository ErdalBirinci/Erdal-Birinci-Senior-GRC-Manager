import React, { useState } from 'react';
import { 
  ShieldAlert, 
  CheckCircle2, 
  TrendingDown, 
  TrendingUp, 
  Cpu, 
  Server, 
  Lock, 
  Workflow, 
  Activity, 
  Layers,
  ArrowRight
} from 'lucide-react';

interface GraphicProps {
  projectId: string;
  accentColor: string;
}

export const ProjectVisualGraphics: React.FC<GraphicProps> = ({ projectId, accentColor }) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'metrics' | 'timeline'>('architecture');

  // 1. Microsoft Sentinel SIEM & Threat Automation Visual Graphic
  if (projectId === 'sentinel-siem-automation') {
    return (
      <div className="bg-[#FBFBFD] rounded-3xl p-6 sm:p-7 border border-black/[0.06] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-black/[0.06]">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-[#0071E3]" />
            <h4 className="text-sm font-bold text-[#1D1D1F]">
              Architectural Threat Defense & Triage Telemetry
            </h4>
          </div>
          <div className="flex items-center gap-1 bg-black/[0.04] p-1 rounded-xl text-xs font-medium">
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                activeTab === 'architecture' ? 'bg-white text-[#1D1D1F] shadow-xs font-semibold' : 'text-[#6E6E73]'
              }`}
            >
              Pipeline Flow
            </button>
            <button
              onClick={() => setActiveTab('metrics')}
              className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                activeTab === 'metrics' ? 'bg-white text-[#1D1D1F] shadow-xs font-semibold' : 'text-[#6E6E73]'
              }`}
            >
              MTTR Benchmark
            </button>
          </div>
        </div>

        {activeTab === 'architecture' ? (
          <div>
            {/* Visual Architecture Pipeline Diagram */}
            <div className="text-xs font-semibold text-[#86868B] uppercase tracking-wider mb-3">
              Automated Ingestion & SOAR Quarantine Pipeline
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-center">
              {/* Step 1 */}
              <div className="bg-white p-4 rounded-2xl border border-black/[0.06] shadow-2xs relative">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-2 text-xs font-bold font-mono">
                  01
                </div>
                <div className="text-xs font-bold text-[#1D1D1F]">Log Telemetry</div>
                <div className="text-[11px] text-[#6E6E73] mt-1">
                  Azure, AWS, GCP, Entra ID & Defender feeds
                </div>
                <div className="mt-2 text-[10px] font-mono font-medium text-blue-600 bg-blue-50/70 py-0.5 rounded">
                  85+ Connectors
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-4 rounded-2xl border border-black/[0.06] shadow-2xs relative">
                <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-2 text-xs font-bold font-mono">
                  02
                </div>
                <div className="text-xs font-bold text-[#1D1D1F]">KQL Analytics</div>
                <div className="text-[11px] text-[#6E6E73] mt-1">
                  MITRE ATT&CK correlation & anomaly engines
                </div>
                <div className="mt-2 text-[10px] font-mono font-medium text-indigo-600 bg-indigo-50/70 py-0.5 rounded">
                  Real-time Scan
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-4 rounded-2xl border border-black/[0.06] shadow-2xs relative">
                <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-2 text-xs font-bold font-mono">
                  03
                </div>
                <div className="text-xs font-bold text-[#1D1D1F]">Incident Triage</div>
                <div className="text-[11px] text-[#6E6E73] mt-1">
                  Entity fusion, alert grouping & severity scoring
                </div>
                <div className="mt-2 text-[10px] font-mono font-medium text-amber-600 bg-amber-50/70 py-0.5 rounded">
                  &lt;3 min Triage
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white p-4 rounded-2xl border border-black/[0.06] shadow-2xs relative">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-2 text-xs font-bold font-mono">
                  04
                </div>
                <div className="text-xs font-bold text-[#1D1D1F]">SOAR Playbook</div>
                <div className="text-[11px] text-[#6E6E73] mt-1">
                  Automated entity isolation & token revocation
                </div>
                <div className="mt-2 text-[10px] font-mono font-medium text-emerald-600 bg-emerald-50/70 py-0.5 rounded">
                  Instant Action
                </div>
              </div>
            </div>

            {/* Severity Distribution Visual Bar */}
            <div className="mt-6 p-4 rounded-2xl bg-white border border-black/[0.06]">
              <div className="flex items-center justify-between text-xs font-semibold text-[#1D1D1F] mb-2">
                <span>Alert Severity Classification</span>
                <span className="text-[#6E6E73] font-normal">Automated Prioritization</span>
              </div>
              <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden flex">
                <div className="h-full bg-rose-500 w-[5%]" title="Critical: 5%" />
                <div className="h-full bg-amber-500 w-[18%]" title="High: 18%" />
                <div className="h-full bg-blue-500 w-[42%]" title="Medium: 42%" />
                <div className="h-full bg-slate-300 w-[35%]" title="Low: 35%" />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 mt-2.5 text-[11px] text-[#6E6E73]">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-rose-500" /> Critical (5%)</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-500" /> High (18%)</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-500" /> Medium (42%)</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-slate-300" /> Low (35%)</span>
              </div>
            </div>
          </div>
        ) : (
          /* MTTR Performance Benchmark Graphic */
          <div className="space-y-5">
            <div className="text-xs font-semibold text-[#86868B] uppercase tracking-wider">
              Mean Time to Respond (MTTR) Before vs. After Sentinel SOAR
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
                  <span className="text-[#6E6E73]">Legacy Manual SOC Triage</span>
                  <span className="font-bold text-[#1D1D1F] tabular-nums">4 Hours 20 Mins</span>
                </div>
                <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-300 rounded-full w-full" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
                  <span className="text-[#0071E3] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Automated Sentinel Playbooks
                  </span>
                  <span className="font-bold text-emerald-600 tabular-nums">11 Mins (-72%)</span>
                </div>
                <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#0071E3] rounded-full w-[28%]" />
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-blue-900 flex items-center justify-between">
              <span>Annual SOC Analyst Hours Saved:</span>
              <strong className="font-mono font-bold text-blue-950">~1,840 Hours / Year</strong>
            </div>
          </div>
        )}
      </div>
    );
  }

  // 2. GRCHub.eu Gamified Simulation Visual Graphic
  if (projectId === 'grchub-eu') {
    return (
      <div className="bg-[#FBFBFD] rounded-3xl p-6 sm:p-7 border border-black/[0.06] space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-black/[0.06]">
          <div className="flex items-center gap-2">
            <Workflow className="w-5 h-5 text-[#34C759]" />
            <h4 className="text-sm font-bold text-[#1D1D1F]">
              Interactive Simulation Branching & Behavioral Analytics
            </h4>
          </div>
          <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
            Clause 7.3 Awareness
          </span>
        </div>

        {/* Visual Simulation Decision Tree */}
        <div className="space-y-4">
          <div className="text-xs font-semibold text-[#86868B] uppercase tracking-wider">
            Zero Trust Lab Simulation Decision Tree
          </div>

          <div className="p-4 rounded-2xl bg-white border border-black/[0.06] space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#1D1D1F]">
              <span className="w-2 h-2 rounded-full bg-[#34C759]" />
              Scenario Trigger: Unrecognized Device Geolocation Access Attempt
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-rose-50/80 border border-rose-100 text-xs">
                <div className="font-bold text-rose-900 mb-1">Path A: Permissive Fallback</div>
                <p className="text-[11px] text-rose-800 leading-relaxed">
                  Bypassing conditional MFA grants lateral token replay. Simulation triggers breach notification drill.
                </p>
                <div className="mt-2 text-[10px] font-mono text-rose-700 font-bold">
                  Breach Exposure: High
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-100 text-xs">
                <div className="font-bold text-emerald-900 mb-1">Path B: Zero Trust Verification</div>
                <p className="text-[11px] text-emerald-800 leading-relaxed">
                  FIDO2 step-up + Intune device health check. Session token restricted to compliant subnet.
                </p>
                <div className="mt-2 text-[10px] font-mono text-emerald-700 font-bold">
                  Competency Verified: 100%
                </div>
              </div>
            </div>
          </div>

          {/* Phishing Vulnerability Reduction Curve Graphic */}
          <div className="p-4 rounded-2xl bg-white border border-black/[0.06]">
            <div className="flex items-center justify-between text-xs font-semibold text-[#1D1D1F] mb-3">
              <span>Phishing Click-Rate Trajectory (6 Months)</span>
              <span className="text-emerald-600 font-bold flex items-center gap-1">
                <TrendingDown className="w-3.5 h-3.5" />
                -68% Reduction
              </span>
            </div>

            {/* SVG Visual Sparkline */}
            <div className="relative h-20 w-full pt-2">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 300 60" preserveAspectRatio="none">
                {/* Subtle Gridlines */}
                <line x1="0" y1="10" x2="300" y2="10" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="0" y1="35" x2="300" y2="35" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="0" y1="55" x2="300" y2="55" stroke="#f1f5f9" strokeWidth="1" />

                {/* Gradient area */}
                <defs>
                  <linearGradient id="emeraldGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#34C759" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#34C759" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 10 Q 75 18 150 32 T 300 52 L 300 60 L 0 60 Z"
                  fill="url(#emeraldGrad)"
                />

                {/* Trend line */}
                <path
                  d="M 0 10 Q 75 18 150 32 T 300 52"
                  fill="none"
                  stroke="#34C759"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Nodes */}
                <circle cx="0" cy="10" r="3.5" fill="#34C759" />
                <circle cx="150" cy="32" r="3.5" fill="#34C759" />
                <circle cx="300" cy="52" r="4.5" fill="#34C759" stroke="#ffffff" strokeWidth="2" />
              </svg>
            </div>

            <div className="flex items-center justify-between text-[11px] text-[#86868B] mt-2 font-mono">
              <span>Month 1 (28.4%)</span>
              <span>Month 3 (12.1%)</span>
              <span className="font-bold text-emerald-600">Month 6 (2.4%)</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. ISO 42001 & EU AI Act Governance Graphic
  if (projectId === 'iso42001-ai-governance') {
    return (
      <div className="bg-[#FBFBFD] rounded-3xl p-6 sm:p-7 border border-black/[0.06] space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-black/[0.06]">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-[#AF52DE]" />
            <h4 className="text-sm font-bold text-[#1D1D1F]">
              AI Risk Taxonomy & Lifecycle Governance Matrix
            </h4>
          </div>
          <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700">
            Regulation 2024/1689
          </span>
        </div>

        {/* EU AI Act Risk Tier Distribution Visual Bar */}
        <div>
          <div className="text-xs font-semibold text-[#86868B] uppercase tracking-wider mb-2.5">
            Enterprise Model Classification (28 Governed Models)
          </div>

          <div className="p-4 rounded-2xl bg-white border border-black/[0.06] space-y-3">
            <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden flex">
              <div className="h-full bg-purple-600 w-[28%]" title="High Risk (Annex III): 28%" />
              <div className="h-full bg-indigo-400 w-[46%]" title="Transparency (GenAI/LLM): 46%" />
              <div className="h-full bg-slate-300 w-[26%]" title="Minimal / Low Risk: 26%" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-xs">
              <div className="p-2.5 rounded-xl bg-purple-50/70 border border-purple-100">
                <div className="font-bold text-purple-950">High Risk (28%)</div>
                <div className="text-[11px] text-purple-800 mt-0.5">
                  Mandatory AIIA, data validation & continuous auditing
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-indigo-50/70 border border-indigo-100">
                <div className="font-bold text-indigo-950">Transparency (46%)</div>
                <div className="text-[11px] text-indigo-800 mt-0.5">
                  Watermarking, synthetic disclosures & model cards
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="font-bold text-slate-800">Minimal Risk (26%)</div>
                <div className="text-[11px] text-slate-600 mt-0.5">
                  General IT hygiene & standard baseline controls
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Model Card Verification Lifecycle */}
        <div className="p-4 rounded-2xl bg-white border border-black/[0.06]">
          <div className="text-xs font-semibold text-[#1D1D1F] mb-3">
            Algorithmic Accountability Lifecycle Stages
          </div>
          <div className="space-y-2">
            {[
              { stage: 'Data Provenance & PII Scrubbing', status: 'Compliant', score: '100%' },
              { stage: 'Adversarial Prompt Injection Testing', status: 'Passed', score: '98.5%' },
              { stage: 'Model Hallucination & Bias Guardrails', status: 'Monitored', score: '96.2%' },
              { stage: 'Human-in-the-Loop Approval Gateway', status: 'Enforced', score: '100%' },
            ].map((row, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs py-1.5 border-b border-black/[0.03] last:border-0">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#AF52DE]" />
                  <span className="text-[#333336]">{row.stage}</span>
                </div>
                <span className="font-mono font-bold text-[#1D1D1F]">{row.score}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 4. Zero Trust & Entra ID IAM Architecture Graphic
  if (projectId === 'zero-trust-entra-id') {
    return (
      <div className="bg-[#FBFBFD] rounded-3xl p-6 sm:p-7 border border-black/[0.06] space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-black/[0.06]">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#32ADE6]" />
            <h4 className="text-sm font-bold text-[#1D1D1F]">
              Continuous Access Evaluation (CAE) & Zero Trust Gates
            </h4>
          </div>
          <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-cyan-50 text-cyan-700">
            NIST SP 800-207
          </span>
        </div>

        {/* Visual Gate Flow */}
        <div className="p-5 rounded-2xl bg-white border border-black/[0.06] space-y-4">
          <div className="text-xs font-semibold text-[#86868B] uppercase tracking-wider">
            Signal Ingestion → Real-Time Decision Gate
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-cyan-50/60 border border-cyan-100">
              <div className="font-bold text-cyan-950 mb-1">1. Signals Ingested</div>
              <ul className="text-[11px] text-cyan-800 space-y-1">
                <li>• User / Group Risk Score</li>
                <li>• Intune Device Compliance</li>
                <li>• Impossible Travel Signals</li>
              </ul>
            </div>

            <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-100">
              <div className="font-bold text-blue-950 mb-1">2. Decision Engine</div>
              <ul className="text-[11px] text-blue-800 space-y-1">
                <li>• Conditional Access Rules</li>
                <li>• Continuous Session Eval</li>
                <li>• Risk-Based Policy Triggers</li>
              </ul>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100">
              <div className="font-bold text-emerald-950 mb-1">3. Enforced Outcome</div>
              <ul className="text-[11px] text-emerald-800 space-y-1">
                <li>• Passwordless Access</li>
                <li>• Step-Up FIDO2 MFA</li>
                <li>• Instant Revocation if Risk</li>
              </ul>
            </div>
          </div>

          {/* MFA Coverage Metric Graphic */}
          <div className="pt-2">
            <div className="flex items-center justify-between text-xs font-semibold text-[#1D1D1F] mb-1.5">
              <span>Passwordless & MFA Enforcement Rate</span>
              <span className="text-cyan-600 font-bold tabular-nums">100% (1,500+ Devices)</span>
            </div>
            <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#32ADE6] rounded-full w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 5. GxP Life Sciences Regulated IT Infrastructure Graphic
  if (projectId === 'gxp-life-sciences-cloud') {
    return (
      <div className="bg-[#FBFBFD] rounded-3xl p-6 sm:p-7 border border-black/[0.06] space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-black/[0.06]">
          <div className="flex items-center gap-2">
            <Server className="w-5 h-5 text-[#FF9500]" />
            <h4 className="text-sm font-bold text-[#1D1D1F]">
              GAMP 5 Computerized System Validation (CSV) Lifecycle
            </h4>
          </div>
          <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700">
            FDA 21 CFR Part 11
          </span>
        </div>

        {/* Validation Lifecycle Timeline */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs text-center">
          <div className="p-3 bg-white rounded-xl border border-black/[0.06]">
            <div className="font-bold text-[#1D1D1F]">URS & FRS</div>
            <div className="text-[10px] text-[#6E6E73] mt-1">User Requirements Specification</div>
            <div className="mt-2 text-[10px] font-mono font-semibold text-emerald-600">Verified ✓</div>
          </div>
          <div className="p-3 bg-white rounded-xl border border-black/[0.06]">
            <div className="font-bold text-[#1D1D1F]">IQ</div>
            <div className="text-[10px] text-[#6E6E73] mt-1">Installation Qualification</div>
            <div className="mt-2 text-[10px] font-mono font-semibold text-emerald-600">Verified ✓</div>
          </div>
          <div className="p-3 bg-white rounded-xl border border-black/[0.06]">
            <div className="font-bold text-[#1D1D1F]">OQ</div>
            <div className="text-[10px] text-[#6E6E73] mt-1">Operational Qualification</div>
            <div className="mt-2 text-[10px] font-mono font-semibold text-emerald-600">Verified ✓</div>
          </div>
          <div className="p-3 bg-white rounded-xl border border-black/[0.06]">
            <div className="font-bold text-[#1D1D1F]">PQ</div>
            <div className="text-[10px] text-[#6E6E73] mt-1">Performance Qualification</div>
            <div className="mt-2 text-[10px] font-mono font-semibold text-emerald-600">Verified ✓</div>
          </div>
        </div>

        {/* ALCOA+ Data Integrity Checklist */}
        <div className="p-4 bg-white rounded-2xl border border-black/[0.06] text-xs">
          <div className="font-bold text-[#1D1D1F] mb-2 flex items-center justify-between">
            <span>ALCOA+ Data Integrity Principles</span>
            <span className="text-[10px] text-amber-600 font-semibold uppercase">Zero Audit Discrepancies</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-[11px] text-[#424245]">
            <div className="bg-[#F5F5F7] p-2 rounded-lg text-center font-medium">Attributable</div>
            <div className="bg-[#F5F5F7] p-2 rounded-lg text-center font-medium">Legible</div>
            <div className="bg-[#F5F5F7] p-2 rounded-lg text-center font-medium">Contemporaneous</div>
            <div className="bg-[#F5F5F7] p-2 rounded-lg text-center font-medium">Original</div>
            <div className="bg-[#F5F5F7] p-2 rounded-lg text-center font-medium">Accurate</div>
          </div>
        </div>
      </div>
    );
  }

  // 6. Fortune 500 SAP BASIS Enterprise Hardening Graphic
  return (
    <div className="bg-[#FBFBFD] rounded-3xl p-6 sm:p-7 border border-black/[0.06] space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-black/[0.06]">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-[#FF2D55]" />
          <h4 className="text-sm font-bold text-[#1D1D1F]">
            High Availability Cluster Topology & Zero-Downtime Patching
          </h4>
        </div>
        <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700">
          99.99% Availability
        </span>
      </div>

      {/* SAP Multi-Tier Topology Diagram */}
      <div className="p-4 bg-white rounded-2xl border border-black/[0.06] space-y-3">
        <div className="text-xs font-semibold text-[#86868B] uppercase tracking-wider">
          Enterprise Multi-Tier Architecture & Hardening
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-center">
          <div className="p-3 rounded-xl bg-rose-50/50 border border-rose-100">
            <div className="font-bold text-rose-950">Web Dispatcher</div>
            <div className="text-[10px] text-rose-800 mt-1">SSL Offloading & Load Balancing</div>
            <div className="mt-2 text-[10px] font-mono text-rose-700">HA Pair</div>
          </div>
          <div className="p-3 rounded-xl bg-orange-50/50 border border-orange-100">
            <div className="font-bold text-orange-950">App Servers (PFCG)</div>
            <div className="text-[10px] text-orange-800 mt-1">SNC Encrypted RFC Links & SoD</div>
            <div className="mt-2 text-[10px] font-mono text-orange-700">80+ Instances</div>
          </div>
          <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-100">
            <div className="font-bold text-blue-950">Database Cluster</div>
            <div className="text-[10px] text-blue-800 mt-1">Oracle / DB Mirroring & RPO &lt; 15m</div>
            <div className="mt-2 text-[10px] font-mono text-blue-700">Zero Unplanned Loss</div>
          </div>
        </div>
      </div>

      {/* Historical Availability Bar */}
      <div className="p-4 bg-white rounded-2xl border border-black/[0.06] text-xs">
        <div className="flex items-center justify-between font-semibold text-[#1D1D1F] mb-1.5">
          <span>Enterprise Service Level Availability (SLA)</span>
          <span className="font-mono text-emerald-600 font-bold tabular-nums">99.99% Guaranteed</span>
        </div>
        <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-emerald-500 rounded-full w-[99.99%]" />
        </div>
      </div>
    </div>
  );
};
