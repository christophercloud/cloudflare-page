export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  service: string;
  summary: string;
  metrics: CaseStudyMetric[];
  challenge: string;
  approach: string[];
  outcome: string;
  technologies: string[];
  featured: boolean;
  timeline: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "fintech-multi-region-migration",
    title: "Multi-region AWS platform for a Series B fintech",
    client: "Series B Fintech (US, LATAM)",
    industry: "Financial Services",
    service: "Cloud Migration",
    summary:
      "Re-architected a monolithic single-region deployment into an active-active multi-region platform on AWS, unlocking LATAM expansion and meeting regulator uptime requirements.",
    metrics: [
      { value: "99.99%", label: "measured uptime, first 6 months" },
      { value: "68%", label: "reduction in p99 API latency for LATAM users" },
      { value: "0", label: "customer-visible incidents during cutover" },
    ],
    challenge:
      "The client's platform ran in a single US region on EC2 with brittle deploys and no meaningful DR. Regulators in a new market required active-active regional deployment with documented failover. Engineering was worried the migration would consume a year of roadmap.",
    approach: [
      "Ran a 3-week discovery to map dependencies, data flows, and regulatory constraints",
      "Designed an active-active architecture using EKS, RDS Global Databases, and DynamoDB Global Tables",
      "Built the target infrastructure entirely in Terraform, mirrored existing config to prevent surprises",
      "Executed a phased cutover: shadow traffic → canary → progressive rollout by service",
      "Ran a full DR game day before declaring the migration complete",
    ],
    outcome:
      "The platform went live in the second region on schedule, cleared the regulatory review, and cut LATAM user latency by 68%. The engineering team fully owned the new infrastructure by handoff, with no ongoing dependency on the consultancy.",
    technologies: ["AWS", "EKS", "Terraform", "RDS Global", "Route 53", "CloudFront"],
    featured: true,
    timeline: "18 weeks",
  },
  {
    slug: "healthtech-platform-engineering",
    title: "Internal developer platform for a HIPAA-regulated healthtech",
    client: "Growth-stage Healthtech",
    industry: "Healthcare",
    service: "Platform Engineering",
    summary:
      "Built a Kubernetes-based internal developer platform with GitOps, service scaffolding, and HIPAA-aligned guardrails — reducing service onboarding from weeks to under a day.",
    metrics: [
      { value: "45min → 4min", label: "median deploy time" },
      { value: "1 day", label: "to spin up a new production service (from 3 weeks)" },
      { value: "12", label: "HIPAA controls enforced automatically in CI" },
    ],
    challenge:
      "Every new service required manual work from a two-person platform team, and HIPAA controls were enforced by tribal knowledge rather than code. New engineers hit friction the moment they tried to ship anything.",
    approach: [
      "Interviewed every engineering team to map the actual (not idealized) path to production",
      "Designed a platform contract: what devs get, what they own, what the platform enforces",
      "Built an Argo CD-based GitOps pipeline with policy-as-code (OPA) for HIPAA controls",
      "Shipped a service template that scaffolds a compliant service in one command",
      "Ran three enablement sessions and paired with the platform team through the first month",
    ],
    outcome:
      "Service onboarding dropped from 3 weeks to under a day. The platform team took over the roadmap with no consulting dependency after handoff. HIPAA controls now block non-compliant deploys automatically instead of catching them in audit.",
    technologies: ["Kubernetes", "Argo CD", "Terraform", "OPA", "Backstage", "GitHub Actions"],
    featured: true,
    timeline: "22 weeks",
  },
  {
    slug: "saas-cost-optimization",
    title: "38% AWS spend reduction for a mid-market SaaS",
    client: "Mid-market SaaS (500+ employees)",
    industry: "B2B SaaS",
    service: "FinOps",
    summary:
      "Identified structural waste in a $2.4M/year AWS environment through a 4-week audit and implementation engagement. Savings realized within one billing cycle.",
    metrics: [
      { value: "38%", label: "reduction in monthly AWS spend" },
      { value: "$910K", label: "annualized savings" },
      { value: "3 weeks", label: "to first realized savings" },
    ],
    challenge:
      "Cloud spend was growing 40% year-over-year against 15% revenue growth. Finance had lost patience with 'the cloud is complex' explanations. The engineering team suspected waste but lacked the bandwidth to hunt it down.",
    approach: [
      "Pulled and analyzed 12 months of CUR data to find the top waste categories",
      "Delivered quick-win recommendations (idle resources, orphaned volumes) in week one",
      "Right-sized compute across production and non-production based on real utilization",
      "Restructured Savings Plans and Reserved Instances against actual usage patterns",
      "Set up per-team cost allocation and anomaly alerts to prevent regression",
    ],
    outcome:
      "$910K in annualized savings, verified on the next month's invoice. The client's finance team now sees monthly cost reports that map to product areas. Guardrails prevented any drift over the following two quarters.",
    technologies: ["AWS CUR", "Cost Explorer", "Compute Optimizer", "Athena", "QuickSight"],
    featured: true,
    timeline: "4 weeks",
  },
  {
    slug: "reliability-slo-program",
    title: "SLO program for a high-growth marketplace",
    client: "Consumer Marketplace",
    industry: "Consumer Tech",
    service: "Site Reliability",
    summary:
      "Established SLOs, error budgets, and an observability stack that cut alert noise by 82% and gave leadership confidence in reliability investments.",
    metrics: [
      { value: "82%", label: "reduction in alert volume" },
      { value: "18min → 4min", label: "median incident detection time" },
      { value: "6", label: "customer-facing SLOs adopted across engineering" },
    ],
    challenge:
      "On-call was miserable, alerts fired constantly for non-issues, and leadership couldn't tell if reliability was improving or getting worse. Engineers were leaving citing on-call burnout.",
    approach: [
      "Interviewed on-call engineers and product owners to identify what customers actually cared about",
      "Defined SLOs against customer-facing user journeys, not infrastructure metrics",
      "Migrated observability to OpenTelemetry-based tracing for real root cause analysis",
      "Rewrote alerting on error budget burn rate instead of raw thresholds",
      "Facilitated the first three blameless post-incident reviews to model the process",
    ],
    outcome:
      "Alert volume dropped 82% while true incident coverage improved. On-call attrition stopped. Engineering leadership now has a defensible reliability roadmap tied to customer impact.",
    technologies: ["OpenTelemetry", "Prometheus", "Grafana", "PagerDuty", "Sentry"],
    featured: false,
    timeline: "10 weeks",
  },
  {
    slug: "soc2-readiness",
    title: "SOC 2 Type II readiness for a Series A startup",
    client: "Series A B2B Startup",
    industry: "B2B SaaS",
    service: "Security & Compliance",
    summary:
      "Took a 40-person startup from ad-hoc security controls to SOC 2 Type II observation period in 11 weeks, without slowing feature delivery.",
    metrics: [
      { value: "11 weeks", label: "to observation period start" },
      { value: "94", label: "controls automated with evidence collection" },
      { value: "0", label: "auditor findings on the infrastructure scope" },
    ],
    challenge:
      "A large enterprise deal required SOC 2 Type II. The startup had never gone through an audit and worried the process would consume engineering for a year.",
    approach: [
      "Mapped the SOC 2 control matrix to their existing infrastructure and process",
      "Built the AWS baseline: SCPs, IAM guardrails, encryption defaults, logging",
      "Implemented policy-as-code so non-compliant infrastructure changes fail CI",
      "Wired up Vanta for automated evidence collection across the control surface",
      "Prepped the team for auditor interviews and produced the required policy documents",
    ],
    outcome:
      "The observation period started on the original target date. Zero infrastructure-scope findings during the audit. The enterprise deal closed the following quarter.",
    technologies: ["AWS", "AWS Config", "OPA", "Vanta", "Terraform", "GitHub Actions"],
    featured: false,
    timeline: "11 weeks",
  },
];
