# tldr-tab

Chrome extension that summarizes the current page with an LLM

## Usage

```bash
# open any article, click the icon, get a 5-bullet summary
```

## Features

- Popup shows a 5-bullet summary
- Manifest V3 service worker, no build step
- Options page for API base and key
- Reads the page, extracts main text, sends to your endpoint

## Installation

```bash
# chrome://extensions -> load unpacked -> select this folder
# set your API base + key on the options page
```

## Project structure

```text
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   └── bug_report.md
│   └── dependabot.yml
├── docs/
│   ├── development.md
│   ├── faq.md
│   ├── roadmap.md
│   └── usage.md
├── examples/
│   └── quickstart.md
├── scripts/
│   └── dev.sh
├── src/
│   └── config.js
├── .editorconfig
├── .gitattributes
├── .gitignore
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── SECURITY.md
├── background.js
├── manifest.json
├── options.html
├── popup.html
└── popup.js
```

## Development

```bash
npm install
npm test
```

## FAQ

**Is this production ready?**  
It works for my use case; review the code before relying on it.

**Why no framework?**  
The stdlib covers what this project needs.

## License

MIT. Do whatever you want.
