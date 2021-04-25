module.exports = {
	setupFilesAfterEnv: ['given2/setup', 'jest-plugin-context/setup'],

	moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'json'],
	transform: {
		'^.+\\.(js|jsx)?$': 'babel-jest',
		'^.+\\.(ts|tsx)?$': 'ts-jest',
	},
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
		'^@components/(.*)$': '<rootDir>/src/components/$1',
		'^@layouts/(.*)$': '<rootDir>/src/layouts/$1',
		'^@pages/(.*)$': '<rootDir>/src/pages/$1',
		'^@utils/(.*)$': '<rootDir>/src/utils/$1',
		'^@typings/(.*)$': '<rootDir>/src/typings/$1',
	},
	testMatch: ['<rootDir>/**/*.test.(js|jsx|ts|tsx)'],
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100,
		},
	},
};
