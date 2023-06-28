module.exports = {
  rootDir: 'src',
  testEnvironment: 'jsdom',
  testTimeout: 10000,
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { rootMode: 'upward' }],
  },
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
    '^.+\\.svg$': '<rootDir>/tests/svgTransform.ts',
    '^.+\\.png$': '<rootDir>/tests/fileTransform.ts',
  },
  moduleDirectories: ['src', 'node_modules'],
  setupFilesAfterEnv: ['@testing-library/jest-dom', '<rootDir>/setupTests.ts'],
  collectCoverage: true,
  coverageDirectory: '<rootDir>../.coverage',
  collectCoverageFrom: [
    '<rootDir>/**/*.{ts,tsx}',
    '!<rootDir>/**/*.model.*',
    '!<rootDir>/**/*.styles.*',
    '!<rootDir>/**/*.d.ts',
    '!<rootDir>/index.tsx',
    '!<rootDir>/reportWebVitals.ts',
    '!<rootDir>/svgTransform.ts',
    '!<rootDir>/api/**/*',
    '!<rootDir>/components/App/**/*',
    '!<rootDir>/tests/**/*',
  ],
};
