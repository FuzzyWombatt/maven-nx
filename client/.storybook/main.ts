import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    stories: ['../src/app/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
    addons: [
        '@storybook/addon-essentials',
        '@nx/react/plugins/storybook',
        {
            name: 'storybook-addon-swc',
            options: {
                enable: true,
                enableSwcLoader: true,
                enableSwcMinify: true,
                swcLoaderOptions: {},
                swcMinifyOptions: {},
            },
        },
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
