export interface Service {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  icon: string;
  outcomes: string[];
  deliverables: string[];
  engagementModel: string;
  ideal: string[];
  technologies: string[];
}

export const services: Service[] = [
  {
    slug: "cloud-migration",
    title: "Cloud Migration",
    tagline: "Get to the cloud without the horror stories.",
    summary:
      "Assess, plan, and execute migrations from on-prem or legacy cloud environments to AWS, GCP, or Azure. We de-risk the cutover, protect uptime, and hand over infrastructure your team can actually own.",
    icon: "migration",
    outcomes: [
      "A migration plan with clear cost, risk, and timeline estimates before any code moves",
      "Zero-downtime cutover strategy validated against real production traffic",
      "Landing zones and account structure that meet compliance from day one",
    ],
    deliverables: [
      "Discovery report: workload inventory, dependency map, cost model",
      "Target architecture design and IaC scaffolding (Terraform)",
      "Phased migration runbook with rollback procedures",
      "Post-migration observability, alerting, and cost baseline",
    ],
    engagementModel:
      "Fixed-scope discovery (2–4 weeks) followed by time-and-materials execution. Milestone-based invoicing.",
    ideal: [
      "Companies leaving on-prem or colocation",
      "Teams consolidating multiple AWS/GCP accounts after M&A",
      "Startups outgrowing a PaaS (Heroku, Render, Vercel)",
    ],
    technologies: ["AWS", "GCP", "Azure", "Terraform", "AWS MGN", "Database Migration Service"],
  },
  {
    slug: "platform-engineering",
    title: "Platform Engineering",
    tagline: "Give your developers the golden path they deserve.",
    summary:
      "Build the internal developer platform your engineers actually want to use. Kubernetes, GitOps, self-service tooling — designed around your teams' real workflows, not a vendor's sales deck.",
    icon: "platform",
    outcomes: [
      "Deploy time cut from hours to minutes with GitOps and pre-baked pipelines",
      "Developer self-service for environments, databases, and secrets — with guardrails",
      "Platform your team can extend after we're gone (no lock-in on us)",
    ],
    deliverables: [
      "Reference architecture and platform contract (what the platform promises devs)",
      "Kubernetes cluster(s) with GitOps (Argo CD / Flux) and policy enforcement",
      "CI/CD templates, service scaffolding, and internal developer portal",
      "Runbooks, docs, and enablement sessions for the platform team",
    ],
    engagementModel:
      "12–24 week build engagements, or embedded platform advisor on a monthly retainer.",
    ideal: [
      "Series B+ startups where engineering velocity is stalling",
      "Enterprises consolidating fragmented tooling across teams",
      "Companies that tried to build their own platform and got stuck",
    ],
    technologies: ["Kubernetes", "Argo CD", "Terraform", "Backstage", "Crossplane", "GitHub Actions"],
  },
  {
    slug: "site-reliability",
    title: "Site Reliability & Observability",
    tagline: "Stop firefighting. Start engineering reliability.",
    summary:
      "SLOs, incident response, observability stacks, and reliability reviews. Turn your on-call rotation from a source of attrition into a source of insight.",
    icon: "reliability",
    outcomes: [
      "SLOs and error budgets aligned to what your customers actually feel",
      "Observability that answers 'what broke and why' in minutes, not hours",
      "On-call rotation your engineers don't dread",
    ],
    deliverables: [
      "SLO definitions and error budget policy",
      "Observability stack (metrics, logs, traces) integrated across services",
      "Runbook library and incident response process",
      "Post-incident review facilitation and reliability roadmap",
    ],
    engagementModel:
      "6–12 week initial engagement, then optional monthly retainer for ongoing reviews and on-call coaching.",
    ideal: [
      "Teams paged too often for the wrong things",
      "Companies scaling past the 'one dashboard fits all' phase",
      "Engineering leaders needing an outside SRE perspective",
    ],
    technologies: ["Prometheus", "Grafana", "OpenTelemetry", "Datadog", "PagerDuty", "Sentry"],
  },
  {
    slug: "security-compliance",
    title: "Security & Compliance",
    tagline: "SOC 2, HIPAA, or PCI without derailing the roadmap.",
    summary:
      "Cloud security posture, compliance readiness (SOC 2, HIPAA, PCI-DSS), and controls that fit how your team actually ships. We handle the infrastructure side so your auditors have less to argue about.",
    icon: "security",
    outcomes: [
      "Audit-ready infrastructure controls documented and enforced in code",
      "Least-privilege IAM without breaking developer workflows",
      "Continuous compliance monitoring instead of pre-audit scrambles",
    ],
    deliverables: [
      "Cloud security posture assessment with prioritized remediation plan",
      "IAM and network baseline (guardrails, SCPs, org policies)",
      "Compliance control matrix mapped to your framework(s)",
      "Automated evidence collection and drift detection",
    ],
    engagementModel:
      "Fixed-scope assessment (3–6 weeks), then implementation on time-and-materials.",
    ideal: [
      "Startups preparing for their first SOC 2 audit",
      "Healthcare and fintech teams facing HIPAA / PCI requirements",
      "Enterprises consolidating security controls across cloud accounts",
    ],
    technologies: ["AWS Security Hub", "GCP Security Command Center", "OPA / Gatekeeper", "Vault", "Vanta", "Drata"],
  },
  {
    slug: "finops",
    title: "FinOps & Cost Optimization",
    tagline: "Cut cloud spend without cutting corners.",
    summary:
      "Find the waste, right-size what stays, and put guardrails in place so costs don't creep back. Typical engagements pay for themselves within a quarter.",
    icon: "finops",
    outcomes: [
      "20–40% reduction in cloud spend on typical workloads (measured, not promised)",
      "Cost allocation and showback so teams own their bills",
      "Guardrails that prevent surprise invoices before they happen",
    ],
    deliverables: [
      "Spend audit and quick-win recommendations (usually delivered in week one)",
      "Right-sizing plan for compute, storage, and data transfer",
      "Reserved capacity / savings plan strategy",
      "Cost anomaly detection and budgeting dashboards",
    ],
    engagementModel:
      "Fixed-fee cost audit, plus optional retainer for ongoing optimization and negotiation support.",
    ideal: [
      "Companies where cloud spend is outpacing revenue growth",
      "Teams facing pressure from finance for cloud accountability",
      "Post-migration environments that were never right-sized",
    ],
    technologies: ["AWS Cost Explorer", "CUR", "GCP BigQuery Billing", "CloudHealth", "Kubecost"],
  },
];
