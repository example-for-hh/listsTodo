/** @type {import('next').NextConfig} */

module.exports = {
    compiler: {
        styledComponents: {
            displayName: false,
            ssr: false,
        },
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
