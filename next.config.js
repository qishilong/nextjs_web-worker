/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.worker\.ts$/,
      loader: "worker-loader",
      options: {
        name: "static/[hash].worker.js",
        publicPath: "/_next/",
      },
    });

    config.output.globalObject = `(typeof self !== 'undefined' ? self : this)`;

    config.plugins.forEach((plugin) => {
      if (plugin.definitions && plugin.definitions["typeof window"]) {
        delete plugin.definitions["typeof window"];
      }
    });

    return config;
  },
};

module.exports = nextConfig;
