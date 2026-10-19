import { SITE } from "@/lib/siteContent";

/** Organization + WebSite + Service schema for search / AI crawlers. */
export default function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        legalName: SITE.legalName,
        url: SITE.url,
        email: SITE.email,
        logo: {
          "@type": "ImageObject",
          url: `${SITE.url}/logo.png`,
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "US",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            email: SITE.email,
            availableLanguage: ["English"],
          },
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: SITE.supportEmail,
            availableLanguage: ["English"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        description: SITE.tagline,
        publisher: { "@id": `${SITE.url}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "Service",
        "@id": `${SITE.url}/#service`,
        name: "BotBeaver AI Sales Development Representative",
        serviceType: "AI lead capture and growth services",
        provider: { "@id": `${SITE.url}/#organization` },
        areaServed: "US",
        url: `${SITE.url}/services`,
        description:
          "Website AI chat agent plus marketing, SEO, and AEO growth services for US service businesses.",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
