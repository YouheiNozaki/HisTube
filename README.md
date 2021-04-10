# YouTube 動画を集めたサイト

「Histube」https://histube.me/

"husky": {
"hooks": {
"pre-commit": "lint-staged"
}
},
"lint-staged": {
"src/\*_/_.{js,jsx,ts,tsx}": [
"yarn run format",
"yarn run lint"
]
}
