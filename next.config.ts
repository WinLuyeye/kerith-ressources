/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.primature.gouv.cd", "ccikc.org"], // autorise les images de ces domaines
  },
};

module.exports = nextConfig;