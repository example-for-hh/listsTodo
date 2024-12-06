/** @type {import('next').NextConfig} */
const path = require('path');

const envFilePath = path.resolve(__dirname, `./env/${process.env.NODE_ENV}/.env`);

require('dotenv').config({ path: envFilePath });

module.exports = {
    basePath: process.env.NODE_ENV != 'development' ? process.env.NEXT_PUBLIC_BASE_PATH : '',
    compiler: {
        styledComponents: {
            displayName: true,
            ssr: true,
        },
    },
    serverRuntimeConfig: {
        apiUrl: process.env.NEXT_PUBLIC_API_URL,
        apiUrlWs: process.env.NEXT_PUBLIC_API_URL_WS,
    },
    publicRuntimeConfig: {
        apiUrl: process.env.NEXT_PUBLIC_API_URL,
        apiUrlWs: process.env.NEXT_PUBLIC_API_URL_WS,
    },
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.(ttf|eot|woff|woff2)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'static/fonts/',
                    publicPath: '/_next/static/fonts/',
                },
            },
        });

        return config;
    },
}
