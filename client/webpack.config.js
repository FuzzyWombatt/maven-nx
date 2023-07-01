const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPLugin');

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
    });
});
