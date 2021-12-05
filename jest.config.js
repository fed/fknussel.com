module.exports = {
    transform: {
        '^.+\\.[jt]sx?$': '<rootDir>/jest-preprocess.js',
    },
    moduleNameMapper: {
        '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/file-mock.js',
    },
    testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/public'],
    transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
    globals: {
        __PATH_PREFIX__: '',
    },
    testURL: 'http://localhost',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    setupFiles: ['<rootDir>/loadershim.js'],
    testEnvironment: 'jsdom',
};
