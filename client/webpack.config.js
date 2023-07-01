const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config) => {
    return merge(config, {
        optimization: {
            runtimeChunk: false,
        },
        output: {
            uniqueName: 'client',
            publicPath: 'auto',
            scriptType: 'text/javascript',
        },
        plugins: [
            new ModuleFederationPlugin({
                name: 'client',
                filename: 'remoteEntry.js',
                library: { type: 'var', name: 'client' },
                exposes: {
                    './clientApp': './src/app/App',
                },
                shared: {
                    react: {
                        import: 'react',
                        shareKey: 'clientReact',
                        shareScope: 'client',
                        singleton: true,
                    },
                    'react-dom': {
                        import: 'react-dom',
                        shareKey: 'clientReact-dom',
                        shareScope: 'client',
                        singleton: true,
                    },
                },
            }),
        ],
    });
});
