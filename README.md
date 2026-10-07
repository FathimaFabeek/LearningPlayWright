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

Run the configured browser project:

```bash
npx playwright test --project=chromium
```

Run a single file from the learning exercises:

```bash
npx playwright test tests/01_Basics/01_example.spec.ts
npx playwright test tests/03_chapter_LocatorCommands/01_LC.spec.ts --headed
npx playwright test tests/07_chapter_WebTables/03_homework.spec.ts
```

View the generated Allure report:

```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

## Project structure

```text
.
├── tests/
│   ├── 01_Basics/
│   ├── 02_chapter_testAnnotatn/
│   ├── 03_chapter_LocatorCommands/
│   ├── 04_chapter_SessionStorage/
│   ├── 05_Allure_Reporting/
│   ├── 06_chapter_multiple_ElementFiler/
│   └── 07_chapter_WebTables/
├── template/
│   └── template.spec.ts
├── utils/
│   └── CustomReporter.ts
├── playwright.config.ts
├── package.json
├── package-lock.json
├── README.md
└── .vscode/
```

## Learning focus

This project is organized into practice chapters covering:

- Playwright basics and test execution
- Test annotations and descriptions
- Locator commands, element filtering, and session storage
- Web table interaction, including filtering, pagination, pseudo-classes, and checkbox assertions
- Allure and custom HTML reporting
- Chromium project configuration and test options

## Checkbox assertions

Use Playwright's web-first assertions to verify a checkbox's state. After locating
and checking a checkbox, assert that it is checked:

```ts
const checkbox = page.locator('input[type="checkbox"]');
await checkbox.check();
await expect(checkbox).toBeChecked();
```

To verify that a checkbox is unchecked, use the negated assertion:

```ts
await expect(checkbox).not.toBeChecked();
```

These assertions wait for the expected state. The web table exercise demonstrates
finding a checkbox in a matching row and asserting that it is checked.

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

The config file currently runs the Chromium project in a visible browser and enables the line, Allure, and custom TTA reporters. The custom HTML report is written to `tta-report/`; Allure results are written to `allure-results/`.
