module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "airbnb",
    "rules": {
        "arrow-parens": 0,
        "consistent-return": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-autofocus": 0,
        "jsx-a11y/no-noninteractive-element-interactions": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "max-len": 0,
        "no-console": 0,
        "no-mixed-operators": 0,
        "no-param-reassign": [2, { "props": false }],
        "no-shadow": 0,
        "object-curly-newline": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/sort-comp": [1, { "order": ["constructor", "lifecycle", "everything-else", "render"] }],
    }
};