// NOTE: May get compromised in the future.

const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      "skillicons.dev",
      "raw.githubusercontent.com",
      "avatars.githubusercontent.com",
      "res.cloudinary.com",
    ],
  },
};

export default nextConfig;
