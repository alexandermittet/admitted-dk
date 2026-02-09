"use client";

import React, { useEffect } from "react";

const legalContent = {
  terms: {
    title: "Terms of Service",
    lastUpdated: "February 9, 2026",
    sections: [
      {
        heading: "1. Acceptance of Terms",
        body: "By accessing and using this website (admitted.dk), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the website.",
      },
      {
        heading: "2. Use of the Website",
        body: "This website is provided for informational and portfolio purposes. You may browse the content freely, but you may not reproduce, distribute, or commercially exploit any material without prior written consent.",
      },
      {
        heading: "3. Intellectual Property",
        body: "All content on this website, including text, images, graphics, and code, is the property of the website owner unless otherwise stated. Unauthorized use of any materials may violate copyright and other applicable laws.",
      },
      {
        heading: "4. Disclaimer",
        body: "The information on this website is provided \"as is\" without warranties of any kind, either express or implied. The website owner does not guarantee the accuracy, completeness, or usefulness of any information provided.",
      },
      {
        heading: "5. Limitation of Liability",
        body: "In no event shall the website owner be liable for any damages arising from the use or inability to use the materials on this website.",
      },
      {
        heading: "6. Changes to Terms",
        body: "These terms may be updated from time to time. Continued use of the website after changes constitutes acceptance of the new terms.",
      },
      {
        heading: "7. Contact",
        body: "If you have any questions about these Terms of Service, please reach out via the contact information provided on the website.",
      },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "February 9, 2026",
    sections: [
      {
        heading: "1. Information We Collect",
        body: "This website does not actively collect personal information. If you contact us via email, we may store your name and email address solely for the purpose of responding to your inquiry.",
      },
      {
        heading: "2. Analytics",
        body: "We may use privacy-friendly analytics tools to understand general usage patterns (e.g., page views, approximate geographic region). No personally identifiable information is collected through analytics.",
      },
      {
        heading: "3. Third-Party Services",
        body: "This website may contain links to external websites and services (e.g., GitHub, LinkedIn). We are not responsible for the privacy practices of these third-party sites.",
      },
      {
        heading: "4. Data Storage and Security",
        body: "Any personal data you voluntarily share (e.g., via email) is stored securely and will not be sold, rented, or shared with third parties.",
      },
      {
        heading: "5. Your Rights",
        body: "Under the General Data Protection Regulation (GDPR), you have the right to access, correct, or delete any personal data we hold. To exercise these rights, please contact us using the information provided on the website.",
      },
      {
        heading: "6. Changes to This Policy",
        body: "This Privacy Policy may be updated periodically. Changes will be posted on this page with an updated revision date.",
      },
    ],
  },
  cookies: {
    title: "Cookies Settings",
    lastUpdated: "February 9, 2026",
    sections: [
      {
        heading: "1. What Are Cookies",
        body: "Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and improve your browsing experience.",
      },
      {
        heading: "2. How We Use Cookies",
        body: "This website uses minimal or no cookies. If cookies are used, they are strictly necessary for the website to function properly (e.g., remembering theme preferences).",
      },
      {
        heading: "3. Third-Party Cookies",
        body: "If third-party services are embedded on this site (e.g., embedded videos or analytics), they may set their own cookies. We do not control these cookies and recommend reviewing the respective third-party privacy policies.",
      },
      {
        heading: "4. Managing Cookies",
        body: "You can manage or delete cookies through your browser settings at any time. Disabling cookies may affect certain features of the website.",
      },
      {
        heading: "5. Changes to This Policy",
        body: "This Cookies policy may be updated from time to time. Any changes will be reflected on this page.",
      },
    ],
  },
};

export function LegalModal({ type, onClose }) {
  const content = legalContent[type];

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!content) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-8 text-gray-900 shadow-2xl md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <h2 className="mb-1 text-2xl font-bold md:text-3xl">{content.title}</h2>
        <p className="mb-6 text-sm text-gray-500">Last updated: {content.lastUpdated}</p>

        <div className="space-y-5">
          {content.sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="mb-1 text-base font-semibold">{section.heading}</h3>
              <p className="text-sm leading-relaxed text-gray-700">{section.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-lg bg-gray-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
