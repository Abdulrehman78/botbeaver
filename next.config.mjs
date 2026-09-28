/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/crm", destination: "/services", permanent: true },
      { source: "/case-studies", destination: "/", permanent: true },
      { source: "/enterprise", destination: "/services", permanent: true },
      { source: "/resources", destination: "/faq", permanent: true },
      { source: "/about", destination: "/process", permanent: true },
      { source: "/why", destination: "/process", permanent: true },
      { source: "/values", destination: "/process", permanent: true },
      { source: "/proof", destination: "/faq", permanent: true },
      { source: "/see-it-work", destination: "/process", permanent: true },
      { source: "/demo", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
