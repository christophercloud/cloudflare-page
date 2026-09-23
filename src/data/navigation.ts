export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export interface SocialLink {
  platform: string;
  href: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  { platform: "linkedin", href: "https://linkedin.com/in/christopher-j-trejo", label: "LinkedIn" },
  { platform: "github", href: "https://github.com/cjt0060", label: "GitHub" },
];

export interface FooterLink {
  label: string;
  href: string;
}

export const footerPages: FooterLink[] = navLinks;
