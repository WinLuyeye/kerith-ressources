/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.primature.gouv.cd", "ccikc.org","encrypted-tbn0.gstatic.com", "environews-rdc.net"], // autorise les images de ces domaines
  },
};

module.exports = nextConfig;