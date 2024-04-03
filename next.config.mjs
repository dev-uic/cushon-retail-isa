import pkg from '@react-aria/optimize-locales-plugin';
const { webpack: optimizeLocales } = pkg;

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.plugins.push(
            optimizeLocales({
                locales: ['en-GB', 'fr-FR'],
            })
        );
        return config;
    },
};

export default nextConfig;
