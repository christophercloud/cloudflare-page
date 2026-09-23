export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  description: string;
  category: string;
}

export const certifications: Certification[] = [
  {
    title: "Microsoft Certified: Azure Solutions Architect Expert",
    issuer: "Microsoft",
    date: "2026",
    credentialUrl: "https://learn.microsoft.com/verify",
    description:
      "Advanced architectural design across identity, governance, compute, and networking on Azure.",
    category: "Azure",
  },
  {
    title: "Google Cloud Professional Cloud Architect",
    issuer: "Google Cloud",
    date: "2026",
    credentialUrl: "https://google.accredible.com/verify",
    description:
      "Designing and managing solutions across compute, networking, security, and data on GCP.",
    category: "GCP",
  },
  {
    title: "HashiCorp Certified: Terraform Authoring and Operations Professional",
    issuer: "HashiCorp",
    date: "2026",
    credentialUrl: "https://www.credly.com/verify",
    description:
      "Advanced Terraform module design, state management, and operations at scale.",
    category: "Terraform",
  },
  {
    title: "Microsoft Certified: Azure Network Engineer Associate",
    issuer: "Microsoft",
    date: "2026",
    credentialUrl: "https://learn.microsoft.com/verify",
    description:
      "Design and implementation of Azure networking, hybrid connectivity, and security.",
    category: "Azure",
  },
  {
    title: "HashiCorp Terraform Associate",
    issuer: "HashiCorp",
    date: "2023",
    credentialUrl: "https://www.credly.com/verify",
    description:
      "Infrastructure as Code concepts, Terraform workflow, state management, and module development.",
    category: "Terraform",
  },
  {
    title: "Microsoft Certified: Azure Administrator Associate",
    issuer: "Microsoft",
    date: "2026",
    credentialUrl: "https://learn.microsoft.com/verify",
    description:
      "Managing Azure identities, governance, storage, compute, and virtual networks.",
    category: "Azure",
  },
  {
    title: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    date: "2025",
    credentialUrl: "https://learn.microsoft.com/verify",
    description:
      "Designing, building, and maintaining cloud applications and services on Azure.",
    category: "Azure",
  },
  {
    title: "HashiCorp Certified: Consul Associate",
    issuer: "HashiCorp",
    date: "2025",
    credentialUrl: "https://www.credly.com/verify",
    description:
      "Service networking, service mesh, and secure service-to-service communication with Consul.",
    category: "HashiCorp",
  },
];
