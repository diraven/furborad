module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
    },
    'extends': [
        'plugin:react/recommended',
        'google',
    ],
    'settings': {
        'react': {
            'version': 'detect',
        },
    },
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true,
        },
        'ecmaVersion': 12,
        'sourceType': 'module',
    },
    'plugins': [
        'react',
    ],
    'rules': {
        'indent': ['error', 4],
        'require-jsdoc': 0,
        'comma-dangle': ['error', 'always-multiline'],
    },
};
