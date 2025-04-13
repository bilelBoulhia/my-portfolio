import type { NextConfig } from "next";

const nextConfig: NextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ibb.co'

            },
            {
                protocol: 'https',
                hostname: 'www.houseofideas.club'

            },

        ],
    }
};

export default nextConfig;
