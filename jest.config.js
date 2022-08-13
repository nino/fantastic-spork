module.exports = {
    testEnvironment: "jest-environment-jsdom",
    testPathIgnorePatterns: ["\\.next", "node_modules"],
    setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    },
    moduleNameMapper: {
        "^components/(.*)$": "<rootDir>/components/$1",
        "^pages/(.*)$": "<rootDir>/pages/$1",
        "\\.css$": "<rootDir>/mocks/styleMock.js",
    },
};
