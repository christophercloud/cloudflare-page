export const siteConfig = {
  title: "Surefire Cloud Consultancy",
  shortTitle: "Surefire Cloud",
  description:
    "Surefire Cloud Consultancy — cloud architecture, platform engineering, and reliability consulting for startups and mid-market enterprises.",
  author: "Surefire Cloud Consultancy",
  founder: "Christopher Trejo",
  contactEmail: "hello@surefirecloud.com",
  siteUrl: import.meta.env.PUBLIC_SITE_URL || "https://surefirecloud.pages.dev",
  turnstileSiteKey: import.meta.env.PUBLIC_TURNSTILE_SITE_KEY || "your-turnstile-site-key",
  contactFormEndpoint:
    import.meta.env.PUBLIC_CONTACT_FORM_ENDPOINT || "https://formspree.io/f/your-form-id",
};

export const socialUrls = {
  github: "https://github.com/christophercloud",
  linkedin: "https://linkedin.com/in/christopher-j-trejo",
};
