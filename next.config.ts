// This is NOT safe.

const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      "skillicons.dev",
      "raw.githubusercontent.com",
      "avatars.githubusercontent.com",
    ],
  },
};

export default nextConfig;
