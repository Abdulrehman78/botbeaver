/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/crm", destination: "/services", permanent: true },
      { source: "/case-studies", destination: "/", permanent: true },
      { source: "/pricing", destination: "/contact", permanent: true },
      { source: "/enterprise", destination: "/services", permanent: true },
      { source: "/resources", destination: "/services", permanent: true },
      { source: "/about", destination: "/", permanent: true },
      { source: "/why", destination: "/", permanent: true },
      { source: "/values", destination: "/", permanent: true },
      { source: "/process", destination: "/", permanent: true },
      { source: "/proof", destination: "/", permanent: true },
      { source: "/see-it-work", destination: "/", permanent: true },
      { source: "/demo", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
