import { SITE } from "./siteContent";

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] };

export type LegalDoc = {
  slug: string;
  title: string;
  description: string;
  updated?: string;
  blocks: LegalBlock[];
};

const { legalName, privacyEmail, email, url, formationState, addressLine } = SITE;

export const LEGAL_LINKS: { href: string; label: string }[] = [
  { href: "/legal/privacy", label: "Privacy Policy" },
  { href: "/legal/terms", label: "Terms of Service" },
  { href: "/legal/cookies", label: "Cookie Policy" },
  { href: "/legal/refund", label: "Refund Policy" },
  { href: "/legal/acceptable-use", label: "Acceptable Use" },
  { href: "/legal/dpa", label: "Data Processing Agreement" },
  { href: "/legal/data-deletion", label: "Data Deletion" },
  { href: "/legal/security", label: "Security Overview" },
];

export const LEGAL_DOCS: LegalDoc[] = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    description:
      "How BotBeaver LLC collects, uses, shares, and protects personal information for business customers and end-users who interact with our agents.",
    updated: "2026-09-28",
    blocks: [
      {
        type: "p",
        text: `This Privacy Policy explains how ${legalName} ("BotBeaver", "we", "us") collects, uses, shares, and protects personal information of (a) business customers who engage us and (b) end-users who interact with AI chat or phone agents we operate on a customer's behalf.`,
      },
      {
        type: "p",
        text: `It applies to ${url}, related subdomains we operate, demo and contact forms on this marketing site, customer dashboards and APIs once provisioned, and messaging or telephony services we provide for a customer business.`,
      },
      { type: "h2", text: "1. Who we are" },
      {
        type: "ul",
        items: [
          `Legal entity: ${legalName} (${SITE.location})`,
          `State of formation: ${formationState}`,
          `Registered mailing address: ${addressLine}`,
          `Website: ${url}`,
          `Privacy contact: ${privacyEmail}`,
          `General contact: ${email}`,
        ],
      },
      { type: "h2", text: "2. Data we collect" },
      { type: "h3", text: "2.1 From business customers (account holders)" },
      {
        type: "ul",
        items: [
          "Account and contact data: name, work email, company, job title, phone, vertical, product interest.",
          "Authentication data: handled by our identity provider where used. We store the resulting user ID and email; passwords are not stored on our servers.",
          "Billing data: processed by our PCI-DSS-compliant Merchant of Record (MoR), named on your invoice. We store only the last four digits of the payment card, billing country, and subscription or invoice status.",
          "Contract and order data: statements of work, channel scope, approved scripts, and escalation rules.",
          "Knowledge and configuration: FAQs, pricing ranges you approve, call flows, CRM field mappings, and integration credentials you provide. Integration secrets and API keys are encrypted at rest and decrypted only when needed to perform an authorized API call.",
          "Usage and support data: login timestamps, dashboard activity, conversation volume, feature configuration, and support tickets.",
        ],
      },
      { type: "h3", text: "2.2 From end-users (your customers and callers)" },
      {
        type: "ul",
        items: [
          "Website chat: message content, pages visited before chat, and contact details the end-user chooses to share.",
          "Phone: call audio, transcripts, caller ID, duration, and metadata when phone agents and recording are enabled.",
          "Scheduling data: appointment preferences and calendar confirmations written on your instructions.",
          "CRM write-back: fields your business asks us to store in connected systems.",
        ],
      },
      { type: "h3", text: "2.3 Collected automatically" },
      {
        type: "ul",
        items: [
          "Marketing site: device type, browser, IP address, approximate location derived from IP, referring URL, and pages viewed.",
          "Service operations: technical logs, webhook delivery metadata, error reports, and security signals.",
          "Cookies and similar technologies as described in our Cookie Policy.",
        ],
      },
      { type: "h2", text: "3. Purposes and legal bases" },
      {
        type: "p",
        text: "For each category below we identify why we process data and the GDPR Article 6 legal basis we rely on where GDPR applies. Other laws may provide parallel grounds.",
      },
      {
        type: "table",
        headers: ["Data", "Purpose", "Legal basis"],
        rows: [
          ["Account data", "Provision and administration of your engagement", "Contract"],
          [
            "Billing data",
            "Collect fees, issue invoices, manage renewals via MoR",
            "Contract",
          ],
          [
            "Knowledge and configuration",
            "Build, train, and operate agents per your instructions",
            "Contract",
          ],
          [
            "Conversation and call data",
            "Route messages and calls, generate AI replies, enable human handoff, CRM logging",
            "Contract (with you) / consent collected by you from end-users where required",
          ],
          [
            "Usage and technical logs",
            "Security monitoring, abuse prevention, reliability, product improvement",
            "Legitimate interest",
          ],
          [
            "Marketing site analytics",
            "Understand traffic and improve the site when enabled and consented",
            "Consent (where required) / legitimate interest",
          ],
          [
            "Demo and sales inquiries",
            "Respond to your request and scope services",
            "Contract / legitimate interest",
          ],
        ],
      },
      { type: "h2", text: "4. Roles: controller vs processor" },
      {
        type: "p",
        text: `For marketing-site visitors and demo form submitters, BotBeaver is generally the controller. For end-user conversations and call data processed for a business customer, that customer is typically the controller and BotBeaver acts as a service provider / processor under our Data Processing Agreement.`,
      },
      { type: "h2", text: "5. Messaging, telephony, and platform data" },
      {
        type: "p",
        text: "When you connect website chat, SMS, email, social messaging (including Meta Business messaging where configured), or carrier telephony, we process data from those channels solely to provide the services in your order and dashboard configuration.",
      },
      {
        type: "p",
        text: "We do not use conversation or call data to train general-purpose consumer AI models, serve third-party advertisements, or build advertising profiles. We do not sell or share personal information for cross-context behavioral advertising.",
      },
      {
        type: "ul",
        items: [
          "You must obtain and document consent required for outbound SMS, marketing email, and recorded calls in your jurisdictions.",
          "End-users must be able to opt out of marketing messages (for example STOP for SMS) and you must honor opt-outs promptly.",
          "Where Meta or other platform policies apply to a connected channel, you are responsible for complying with those policies; we configure agents only within the scopes you authorize.",
        ],
      },
      { type: "h2", text: "6. AI disclosure" },
      {
        type: "p",
        text: "BotBeaver agents use large-language-model inference and retrieval over your approved materials to produce replies on chat and phone. End-users may interact with an AI rather than a human. Agents are configured to identify as AI when directly asked and to escalate to your team when rules require. You remain responsible for disclosures required by law, industry rules, and carrier or platform policies.",
      },
      { type: "h2", text: "7. Data retention" },
      {
        type: "p",
        text: "We retain personal data only as long as needed for the purposes below, then delete or anonymize it unless law requires longer retention.",
      },
      {
        type: "ul",
        items: [
          "Customer account data: for the duration of your active engagement. Deleted within 30 days after account closure, cancellation, or a verified deletion request — whichever comes first, except data we must keep for tax, legal, or dispute resolution.",
          "End-user conversation and call data: for the duration of your active subscription so agents retain necessary context. Deleted within 30 days after subscription ends or when you instruct deletion, subject to the Data Deletion policy.",
          "Platform and security logs: up to 90 days, then deleted.",
          "Encrypted backups: rolling retention up to 30 days, then overwritten.",
        ],
      },
      { type: "h2", text: "8. Security" },
      {
        type: "ul",
        items: [
          "TLS 1.2+ for data in transit between clients, our systems, and subprocessors.",
          "Encryption at rest for integration credentials, API keys, and other secrets.",
          "Role-based access control and least-privilege access for personnel; authentication hardening for administrative access.",
          "Logical separation between customer environments where architecture supports it.",
          `Monitoring, logging, and incident response procedures. Report suspected vulnerabilities to ${privacyEmail}.`,
        ],
      },
      {
        type: "p",
        text: "See our Security Overview for a summary of controls. No method of transmission or storage is completely secure.",
      },
      { type: "h2", text: "9. Sub-processors" },
      {
        type: "p",
        text: `We share the minimum personal information necessary with service providers that help us operate BotBeaver. Categories include cloud hosting and storage, email delivery, telephony and SMS carriers, AI model inference, CRM and calendar integrations, authentication, billing (Merchant of Record named on your invoice), and optional website analytics. A current named list is available on request at ${privacyEmail}. We notify customers before adding or replacing a sub-processor that materially changes how their data is handled, where contractually required.`,
      },
      { type: "h2", text: "10. International transfers" },
      {
        type: "p",
        text: "We primarily serve US customers. Personal data may be processed in the United States and other countries where our subprocessors operate. Where GDPR or UK GDPR applies, we rely on Standard Contractual Clauses or equivalent safeguards offered by subprocessors, supplemented by our DPA where executed.",
      },
      { type: "h2", text: "11. Your rights" },
      {
        type: "p",
        text: `Depending on your location, you may have rights to access, correct, delete, or obtain a copy of personal information, restrict or object to certain processing, and appeal a denial. Email ${privacyEmail}. We respond within the timeframe required by applicable law (typically 30 days for GDPR requests). We may verify your identity. End-users of a customer business should contact that business first; we assist the customer as processor.`,
      },
      { type: "h2", text: "12. California residents (CCPA / CPRA)" },
      {
        type: "p",
        text: `California residents may request to know, delete, and correct personal information and to opt out of the "sale" or "sharing" of personal information. BotBeaver does not sell personal information and does not share personal information for cross-context behavioral advertising. To exercise rights, contact ${privacyEmail}.`,
      },
      { type: "h2", text: "13. Children" },
      {
        type: "p",
        text: "Our services are directed to businesses and are not directed to children under 16. We do not knowingly collect personal information from children. If you believe a child has provided us data, contact us and we will delete it.",
      },
      { type: "h2", text: "14. Changes" },
      {
        type: "p",
        text: "We may update this policy. Material changes will be posted on this page with an updated date. Where required, we will provide additional notice to account holders.",
      },
      { type: "h2", text: "15. Contact" },
      {
        type: "p",
        text: `Privacy and data subject requests: ${privacyEmail}. General inquiries: ${email}.`,
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of Service",
    description:
      "Binding terms between BotBeaver LLC and customers who request a demo, create an account, or use our services.",
    updated: "2026-09-28",
    blocks: [
      {
        type: "p",
        text: `These Terms of Service ("Terms") form a binding contract between ${legalName} ("BotBeaver", "we", "us") and the individual or entity that requests a demo, creates an account, or uses our services ("Customer", "you"). By submitting a demo form or using the service, you agree to these Terms.`,
      },
      { type: "h2", text: "1. The service" },
      {
        type: "p",
        text: "BotBeaver designs, builds, and maintains AI chat and phone agents for businesses, including an AI Sales Development Representative for websites, an AI Phone Receptionist for inbound calls, and optional outbound outreach layers. Features, channels, and service levels are defined in your order form or statement of work.",
      },
      { type: "h2", text: "2. Eligibility and accounts" },
      {
        type: "ul",
        items: [
          "You must be at least 18 and able to form a binding contract.",
          "You must provide accurate business contact information and keep it current.",
          "You are responsible for activity under your credentials and must notify us promptly of unauthorized access at " + email + ".",
        ],
      },
      { type: "h2", text: "3. Customer responsibilities" },
      {
        type: "ul",
        items: [
          "You own and are responsible for content you approve for agent use and for compliance with laws that apply to your industry.",
          "You must obtain required consents for call recording, AI disclosure, SMS, email, and marketing outreach.",
          "You must not route protected health information through BotBeaver unless a signed BAA and approved architecture are in place.",
          "You remain responsible for professional licensing and advertising rules in regulated industries.",
        ],
      },
      { type: "h2", text: "4. Fees and payment" },
      {
        type: "p",
        text: "Fees are set in your order form. Setup and subscription fees are billed as stated there. Payments are processed by our PCI-DSS-compliant Merchant of Record, identified on your invoice. Taxes are your responsibility unless we are required to collect them. Late amounts may suspend non-essential service after notice.",
      },
      { type: "h2", text: "5. Refunds" },
      {
        type: "p",
        text: "Setup-fee refunds tied to go-live timing and subscription refunds, if any, are governed by the Refund Policy, incorporated by reference.",
      },
      { type: "h2", text: "6. Acceptable use" },
      {
        type: "p",
        text: "Your use is governed by the Acceptable Use Policy, incorporated by reference. Violations may result in suspension or termination.",
      },
      { type: "h2", text: "7. AI and human oversight" },
      {
        type: "p",
        text: "Agents may use third-party large language models and telephony services. Outputs can be incorrect or incomplete. You must configure human handoff for high-risk topics and maintain required AI disclosures.",
      },
      { type: "h2", text: "8. Intellectual property" },
      {
        type: "p",
        text: "BotBeaver retains ownership of its platform, templates, and tooling. You retain ownership of your content and customer data. You grant us a license to host and process that content solely to provide the service.",
      },
      { type: "h2", text: "9. Confidentiality" },
      {
        type: "p",
        text: "Each party will protect the other's non-public information with reasonable care and use it only to perform under these Terms.",
      },
      { type: "h2", text: "10. Disclaimers" },
      {
        type: "p",
        text: 'THE SERVICE IS PROVIDED "AS IS" TO THE MAXIMUM EXTENT PERMITTED BY LAW. WE DISCLAIM WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT UNINTERRUPTED OR ERROR-FREE OPERATION.',
      },
      { type: "h2", text: "11. Limitation of liability" },
      {
        type: "p",
        text: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, BOTBEAVER'S TOTAL LIABILITY ARISING OUT OF THESE TERMS WILL NOT EXCEED THE AMOUNTS YOU PAID US IN THE TWELVE MONTHS BEFORE THE CLAIM. WE ARE NOT LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR LOST PROFITS DAMAGES.",
      },
      { type: "h2", text: "12. Termination" },
      {
        type: "p",
        text: "Either party may terminate for material breach not cured within 30 days of notice, or as stated in an order form. Provisions that by nature should survive (fees owed, IP, confidentiality, liability limits) survive termination.",
      },
      { type: "h2", text: "13. Governing law and venue" },
      {
        type: "p",
        text: `These Terms are governed by the laws of the State of ${formationState} and applicable United States federal law, without regard to conflict-of-law rules, except where mandatory consumer protections apply. Disputes will be brought in state or federal courts located in ${formationState}, unless the parties agree to arbitration in a separate signed agreement.`,
      },
      { type: "h2", text: "14. Contact" },
      {
        type: "p",
        text: `Questions about these Terms: ${email}.`,
      },
    ],
  },
  {
    slug: "cookies",
    title: "Cookie Policy",
    description:
      "How BotBeaver LLC uses cookies and similar technologies on the marketing site and related properties.",
    updated: "2026-09-28",
    blocks: [
      {
        type: "p",
        text: `This Cookie Policy explains how ${legalName} uses cookies and similar technologies on ${url} and related marketing pages.`,
      },
      { type: "h2", text: "1. What cookies are" },
      {
        type: "p",
        text: "Cookies are small text files stored on your device. Similar technologies include local storage and pixels.",
      },
      { type: "h2", text: "2. Categories we use" },
      {
        type: "table",
        headers: ["Category", "Purpose", "Consent"],
        rows: [
          [
            "Strictly necessary (essential)",
            "Security, load balancing, remembering cookie-banner dismissal, and core site function",
            "Always on — required for the site to work",
          ],
          [
            "Functional",
            "Remember UI choices that improve usability",
            "Essential or preference-based depending on implementation",
          ],
          [
            "Analytics",
            "Aggregated traffic measurement and site improvement",
            "Only if analytics are enabled in production and you consent where required",
          ],
        ],
      },
      { type: "h2", text: "3. Essential cookies" },
      {
        type: "p",
        text: "Essential cookies are always active because the marketing site cannot operate securely without them. They include session security, consent storage (for example remembering that you dismissed the cookie notice), and similar core functions.",
      },
      { type: "h2", text: "4. Analytics" },
      {
        type: "p",
        text: "We load analytics scripts only when enabled for the environment and, in regions that require it, after you consent. If analytics are off, no non-essential measurement cookies are set.",
      },
      { type: "h2", text: "5. Your choices" },
      {
        type: "p",
        text: "You can control cookies through your browser settings. Blocking essential cookies may break site features. For more about how we use personal data, see our Privacy Policy.",
      },
      { type: "h2", text: "6. Contact" },
      {
        type: "p",
        text: privacyEmail,
      },
    ],
  },
  {
    slug: "refund",
    title: "Refund Policy",
    description:
      "Setup-fee and subscription refund rules for BotBeaver LLC engagements, including the 14-day go-live commitment.",
    updated: "2026-09-28",
    blocks: [
      {
        type: "p",
        text: `This Refund Policy explains when ${legalName} refunds fees. It supplements your order form and Terms of Service.`,
      },
      { type: "h2", text: "1. Setup fee and 14-day go-live" },
      {
        type: "p",
        text: "For inbound engagements that include a documented 14-day go-live target, if we fail to deliver the scoped go-live within 14 days after we receive all required customer materials and access (scripts, knowledge, phone or domain access, CRM credentials), you may request a refund of the setup fee for that scoped engagement.",
      },
      {
        type: "ul",
        items: [
          "Delays caused by missing customer content, delayed approvals, third-party account holds, or scope changes do not trigger the setup-fee refund.",
          "The go-live clock starts when both parties agree in writing (email is sufficient) that prerequisites are complete.",
          `Refund requests must be emailed to ${email} within 14 days after the missed go-live date.`,
        ],
      },
      { type: "h2", text: "2. Subscription fees" },
      {
        type: "p",
        text: "Unless an order form states otherwise, monthly subscription fees are non-refundable once a billing period starts. Unused conversation capacity does not roll over unless stated in writing.",
      },
      { type: "h2", text: "3. Merchant of Record" },
      {
        type: "p",
        text: "Card payments are processed by our PCI-DSS-compliant Merchant of Record, named on your invoice. Approved refunds are issued through that MoR to the original payment method within 5–10 business days after approval. Your bank or card issuer may add processing time.",
      },
      { type: "h2", text: "4. Chargebacks" },
      {
        type: "p",
        text: `Please contact us at ${email} before filing a chargeback so we can resolve the issue. Unfounded chargebacks may result in account suspension.`,
      },
      { type: "h2", text: "5. Contact" },
      {
        type: "p",
        text: email,
      },
    ],
  },
  {
    slug: "acceptable-use",
    title: "Acceptable Use Policy",
    description:
      "Rules for using BotBeaver agents and services, including messaging, calling, and regulated categories.",
    updated: "2026-09-28",
    blocks: [
      {
        type: "p",
        text: "This Acceptable Use Policy (AUP) applies to every BotBeaver customer and authorized user. Violations may lead to suspension or termination without refund.",
      },
      { type: "h2", text: "1. Prohibited uses" },
      {
        type: "ul",
        items: [
          "Illegal activity, fraud, phishing, or social engineering",
          "Unsolicited bulk SMS, calls, or email in violation of TCPA, CAN-SPAM, or state telemarketing law",
          "Adult sexual content, weapons trafficking, illegal drugs, or categories banned by major telephony or messaging platforms",
          "Harassment, hate speech, or threats",
          "Impersonating a human when a user asks whether they are speaking with AI, or disabling required AI disclosures",
          "Uploading malware or attempting to probe, disrupt, or overload BotBeaver systems",
          "Processing PHI without a signed BAA and approved configuration",
          "Using the service to make medical, legal, or financial decisions for consumers without qualified human oversight",
        ],
      },
      { type: "h2", text: "2. Messaging and calling" },
      {
        type: "ul",
        items: [
          "Maintain lawful opt-in records for outbound SMS and marketing email.",
          "Honor STOP, unsubscribe, and do-not-call requests promptly and keep suppression lists current.",
          "Configure call-recording, two-party consent, and AI disclosures where required.",
          "Comply with carrier, CPaaS, and platform policies (including Meta messaging policies when those channels are connected).",
        ],
      },
      { type: "h2", text: "3. Regulated industries" },
      {
        type: "p",
        text: "Law firms, healthcare providers, and other regulated businesses must ensure agent copy complies with advertising and professional rules. BotBeaver does not provide legal, medical, or financial advice.",
      },
      { type: "h2", text: "4. Content and data" },
      {
        type: "p",
        text: "You may not upload content you do not have rights to use or that infringes intellectual property. You are responsible for the accuracy of knowledge you supply to agents.",
      },
      { type: "h2", text: "5. Reporting" },
      {
        type: "p",
        text: `Report abuse to ${privacyEmail} or ${email}.`,
      },
    ],
  },
  {
    slug: "dpa",
    title: "Data Processing Agreement",
    description:
      "How BotBeaver LLC processes personal data as a service provider for business customers.",
    updated: "2026-09-28",
    blocks: [
      {
        type: "p",
        text: `This Data Processing Agreement ("DPA") applies when ${legalName} processes personal data on behalf of a business customer in connection with BotBeaver services. It supplements the Terms and Privacy Policy. Customers who need a countersigned PDF may request one at ${privacyEmail}.`,
      },
      { type: "h2", text: "1. Roles" },
      {
        type: "p",
        text: "Customer is the controller (or business). BotBeaver is the processor (or service provider). Each party will comply with applicable privacy law in its role.",
      },
      { type: "h2", text: "2. Scope of processing" },
      {
        type: "ul",
        items: [
          "Subject matter: operation of AI chat and phone agents and related support.",
          "Duration: term of the customer agreement plus deletion timelines in the Data Deletion policy.",
          "Nature: hosting, transmission, transcription, LLM inference under customer configuration, CRM write-back.",
          "Types of data: contact details, message and call content, metadata, transcripts, scheduling data.",
          "Data subjects: customer's staff and customer's end-users.",
        ],
      },
      { type: "h2", text: "3. Instructions" },
      {
        type: "p",
        text: "BotBeaver will process personal data only on documented instructions from Customer, including the Terms, order forms, and dashboard configuration, unless law requires otherwise. Customer instructs BotBeaver to process data as necessary to provide the service.",
      },
      { type: "h2", text: "4. Subprocessors" },
      {
        type: "p",
        text: `Customer authorizes BotBeaver to use subprocessors for hosting, email, telephony, storage, AI inference, billing, and integrations needed to deliver the service. Categories are listed in the Privacy Policy. BotBeaver imposes data-protection terms no less protective than this DPA and remains responsible for subprocessors' performance. A named list is available at ${privacyEmail}.`,
      },
      { type: "h2", text: "5. Security" },
      {
        type: "p",
        text: "BotBeaver will implement appropriate technical and organizational measures described in the Security Overview and Privacy Policy, including encryption in transit, encryption at rest for secrets, and access controls.",
      },
      { type: "h2", text: "6. Assistance and breach notification" },
      {
        type: "p",
        text: "BotBeaver will assist Customer with data subject requests directed to Customer, reasonably assist with security assessments, and notify Customer without undue delay after becoming aware of a personal data breach affecting Customer personal data.",
      },
      { type: "h2", text: "7. International transfers" },
      {
        type: "p",
        text: "Where personal data is transferred outside the EEA or UK, the parties will execute Standard Contractual Clauses or rely on equivalent mechanisms offered by subprocessors where required.",
      },
      { type: "h2", text: "8. Return and deletion" },
      {
        type: "p",
        text: "On termination, BotBeaver will return or delete Customer personal data per the Data Deletion policy, except where retention is required by law.",
      },
      { type: "h2", text: "9. Contact" },
      {
        type: "p",
        text: privacyEmail,
      },
    ],
  },
  {
    slug: "data-deletion",
    title: "Data Deletion",
    description:
      "How to request deletion of BotBeaver account data and end-user conversation data.",
    updated: "2026-09-28",
    blocks: [
      {
        type: "p",
        text: `This page explains how ${legalName} handles deletion requests and retention limits.`,
      },
      { type: "h2", text: "1. Business customers" },
      {
        type: "p",
        text: `Account owners may request deletion of their BotBeaver account and associated customer content by emailing ${privacyEmail} from the registered work email. We confirm identity and complete deletion within 30 days, except data we must retain for legal, tax, or dispute purposes.`,
      },
      { type: "h2", text: "2. End-users" },
      {
        type: "p",
        text: "If you interacted with a BotBeaver-powered agent on a business's website or phone line, that business is usually the controller. Contact that business first. We assist them as processor to delete or anonymize your data when they instruct us.",
      },
      { type: "h2", text: "3. Marketing site inquiries" },
      {
        type: "p",
        text: `To delete a demo or contact inquiry you submitted on botbeaver.com, email ${privacyEmail} with the email address you used.`,
      },
      { type: "h2", text: "4. Backups and logs" },
      {
        type: "ul",
        items: [
          "Deleted production data may persist in encrypted backups for up to 30 days until those backups expire.",
          "Security and platform logs may be retained up to 90 days for integrity and abuse investigation, then deleted.",
        ],
      },
      { type: "h2", text: "5. Contact" },
      {
        type: "p",
        text: privacyEmail,
      },
    ],
  },
  {
    slug: "security",
    title: "Security Overview",
    description:
      "Summary of technical and organizational measures BotBeaver LLC uses to protect customer and end-user data.",
    updated: "2026-09-28",
    blocks: [
      {
        type: "p",
        text: `This Security Overview summarizes how ${legalName} protects data processed through BotBeaver services. It is for customer due diligence and does not modify your contract. For contractual commitments, see the Terms, DPA, and order form.`,
      },
      { type: "h2", text: "1. Infrastructure" },
      {
        type: "ul",
        items: [
          "Production workloads run on managed cloud infrastructure with industry-standard physical and network controls.",
          "Separate environments for production and non-production where practicable.",
          "Regular patching and dependency monitoring for internet-facing services.",
        ],
      },
      { type: "h2", text: "2. Encryption and secrets" },
      {
        type: "ul",
        items: [
          "TLS 1.2+ for data in transit between users, BotBeaver, and subprocessors.",
          "Encryption at rest for integration credentials, API keys, and similar secrets.",
          "Secrets are not logged in plain text in application logs.",
        ],
      },
      { type: "h2", text: "3. Access control" },
      {
        type: "ul",
        items: [
          "Role-based access for personnel with least-privilege defaults.",
          "Multi-factor authentication for administrative and production access.",
          "Access reviews and revocation on role change or offboarding.",
        ],
      },
      { type: "h2", text: "4. Application security" },
      {
        type: "ul",
        items: [
          "Input validation and rate limiting on customer-facing endpoints where deployed.",
          "Webhook and API authentication using customer-specific credentials.",
          "Logical tenant separation in application and data layers where architecture supports it.",
        ],
      },
      { type: "h2", text: "5. Monitoring and incident response" },
      {
        type: "ul",
        items: [
          "Centralized logging for security-relevant events with retention up to 90 days.",
          "Incident response procedures including customer notification for confirmed breaches affecting customer data, per the DPA.",
          `Responsible disclosure: report suspected vulnerabilities to ${privacyEmail}.`,
        ],
      },
      { type: "h2", text: "6. Vendor management" },
      {
        type: "p",
        text: `Subprocessors are vetted for security posture appropriate to their role. Categories and a named list are available on request at ${privacyEmail}.`,
      },
      { type: "h2", text: "7. Customer responsibilities" },
      {
        type: "p",
        text: "You are responsible for strong passwords on your accounts, limiting dashboard access to authorized staff, and configuring agents and integrations in line with your compliance obligations.",
      },
      { type: "h2", text: "8. Contact" },
      {
        type: "p",
        text: `Security questions: ${privacyEmail}. General inquiries: ${email}.`,
      },
    ],
  },
];

export function getLegalDoc(slug: string): LegalDoc | undefined {
  return LEGAL_DOCS.find((d) => d.slug === slug);
}

export function getAllLegalSlugs(): string[] {
  return LEGAL_DOCS.map((d) => d.slug);
}
