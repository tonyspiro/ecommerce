/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/en/blog",
        permanent: true,
      },
      {
        source: "/blog/:path",
        destination: "/en/blog/:path",
        permanent: true,
      },
    ];
  },
};
