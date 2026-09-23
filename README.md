# Learning Playwright

This repository is a Playwright learning workspace built with TypeScript. It contains beginner-level automation exercises, locator practice, and annotation examples to help understand browser testing with Playwright.

## Prerequisites

- Node.js 20 or newer
- npm

Verify installation:

```bash
node --version
npm --version
```

## Setup

Install dependencies:

```bash
npm install
```

Install the browser binaries used by Playwright:

```bash
npx playwright install
```

If needed, install only Chromium:

```bash
npx playwright install chromium
```

## Run tests

Run the full test suite:

```bash
npx playwright test
```

Run tests in a visible browser window:

```bash
npx playwright test --headed
```

Run a specific project/browser:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

Run a single file from the learning exercises:

```bash
npx playwright test tests/01_Basics/01_example.spec.ts
npx playwright test tests/03_chapter_LocatorCommands/01_LC.spec.ts --headed
```

Open the HTML report after execution:

```bash
npx playwright show-report
```

## Project structure

```text
.
├── tests/
│   ├── 01_Basics/
│   │   ├── 01_example.spec.ts
│   │   ├── 02_multiple_context.ts
│   │   ├── 03_normal_pw.ts
│   │   ├── 04_tta-check.spec.ts
│   │   ├── 05_ttcart.spec.ts
│   │   ├── 06_BCP.spec.ts
│   │   ├── 07_test_options.spec.ts
│   │   └── 08_TA.spec.ts
│   ├── 02_chapter_testAnnotatn/
│   │   ├── 01_annotation.spec.ts
│   │   └── 02_testDescribe.spec.ts
│   └── 03_chapter_LocatorCommands/
│       └── 01_LC.spec.ts
├── playwright.config.ts
├── package.json
├── package-lock.json
├── playwright-report/
├── test-results/
├── README.md
└── .vscode/
```

## Learning focus

This project is organized into practice chapters covering:

- Playwright basics and test execution
- Test annotations and descriptions
- Locator commands and element interaction patterns
- Browser project configuration and test configuration options

## Useful commands

```bash
# Show CLI options
npx playwright --help

# Run tests with the Playwright inspector
npx playwright test --debug

# Update Playwright to the latest version
npm install -D @playwright/test@latest
npx playwright install
```

## Notes

The config file sets up Chromium, Firefox, and WebKit projects and uses the HTML reporter for test output.
