/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const dotenv = require('dotenv');
const fs = require('fs');

// Read ENV
const envFile = path.resolve(__dirname, '.env');
const envConfig = fs.existsSync(envFile) ? require('dotenv').parse(fs.readFileSync(envFile)) : {};

// Load environment variables from .env file
dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: false,
  webpack: config => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision'),
      },
    },
  }),
  env: {
    ...envConfig,
  },
};

module.exports = nextConfig;
