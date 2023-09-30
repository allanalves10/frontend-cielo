module.exports = {
    preset: 'ts-jest',
    testIgnorePatterns: ["/node_modules/"],
    setupFilesAfterEnv: [
        "<rootDir>/src/tests/setupTests.ts"
    ],
    transform: {
        "ˆ.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
    },
    testEnvironment: 'jest-environment-jsdom'
}