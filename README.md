# Learning Playwright

A basic [Playwright](https://playwright.dev/) project for learning browser automation with TypeScript.

## Prerequisites

- Node.js 20 or newer
- npm

Check your installed versions:

```bash
node --version
npm --version
```

## Installation

Install the project dependencies:

```bash
npm install
```

Install the Playwright browsers:

```bash
npx playwright install
```

To install only Chromium:

```bash
npx playwright install chromium
```

## Run Tests

Run all tests in headless mode:

```bash
npx playwright test
```

Run tests in a visible browser:

```bash
npx playwright test --headed
```

Run tests in one browser project:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

Run one test file:

```bash
npx playwright test tests/example.spec.ts
```

Run the cart test:

```bash
npx playwright test tests/ttcart.spec.ts --headed
```

Open the HTML test report after a test run:

```bash
npx playwright show-report
```

## Generate Tests With Codegen

Playwright Codegen records browser interactions and generates Playwright test code.

Start Codegen with a URL:

```bash
npx playwright codegen https://playwright.dev/
```

Save generated code directly to a test file:

```bash
npx playwright codegen --target=playwright-test --output=tests/generated.spec.ts https://playwright.dev/
```

Useful Codegen options:

```bash
npx playwright codegen --device="Desktop Chrome" https://playwright.dev/
npx playwright codegen --browser=firefox https://playwright.dev/
```

After recording a test, review the generated locators and assertions, then run it with:

```bash
npx playwright test tests/generated.spec.ts --headed
```

## Project Structure

```text
.
├── tests/
│   ├── example.spec.ts
│   ├── tta-check.spec.ts
│   └── ttcart.spec.ts
├── playwright.config.ts
├── package.json
└── package-lock.json
```

The Playwright configuration runs tests from `tests/` against Chromium, Firefox, and WebKit. The test files cover the Playwright documentation site, the Testing Academy login flow, and the Testing Academy cart login flow. The HTML report is generated in `playwright-report/`.

## Useful Commands

```bash
# List available Playwright CLI commands
npx playwright --help

# Open the Playwright inspector while running a test
npx playwright test --debug

# Update Playwright to the latest version
npm install -D @playwright/test@latest
npx playwright install
```