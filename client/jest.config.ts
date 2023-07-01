/* eslint-disable */
export default {
    displayName: 'client',
    preset: './jest.preset.js',
    transform: {
        '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
        '^.+\\.[tj]sx?$': '@swc/jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    coverageDirectory: './coverage/client',
    testMatch: [
        '<rootDir>/src/**/__tests__/**/*.[jt]s?(x)',
        '<rootDir>/src/**/*(*.)@(spec|test).[jt]s?(x)',
    ],
    coveragePathIgnorePatterns: ['./mocks'],
    reporters: [
        'default',
        [
            'jest-sonar',
            {
                outputDirectory: './coverage/client',
                outputName: 'jest-sonar-report.xml',
            },
        ],
    ],
};
