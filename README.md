# Learning Playwright

This repository is a Playwright learning workspace built with TypeScript. It contains hands-on exercises for browser automation, test annotations, locators, browser storage, reporting, and common UI interactions.

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

Run all exercises in a chapter:

```bash
npx playwright test tests/15_chapter_FileDownload
```

View the generated Allure report:

```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

The custom TTA report is written to `tta-report/`. Playwright's HTML report is written to `playwright-report/`.

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
│   ├── 07_chapter_WebTables/
│   ├── 08_chapter_WebSelectFrameDropdown/
│   ├── 09_chapter_Iframe_Frame/
│   ├── 10_chapter_Keyboard_Drag_Hover_Calendar/
│   ├── 11_chapter_JS _Alerts/
│   ├── 12_chapter_svg_handle/
│   ├── 13_chapter_Shadow_DOM/
│   ├── 14_chapter_File_upload/
│   ├── 15_chapter_FileDownload/
│   ├── 19_chapter_DataDriven_Testing/
│   │   ├── TestData/
│   │   └── util/
│   └── images/
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
- Locator commands, multiple-element filtering, and session storage
- Web table interaction, including filtering, pagination, pseudo-classes, and checkbox assertions
- Dropdowns, frames and iframes, keyboard input, drag-and-drop, hover, and calendars
- JavaScript alerts, SVG elements, Shadow DOM, and file upload/download workflows
- Allure, Playwright HTML, and custom TTA reporting
- Chromium project configuration and browser test options

## Data-driven testing

Chapter 19 demonstrates tests driven by JSON, CSV, Excel, and YAML files, MySQL
records, and generated Faker data. The sample datasets and readers are in
`tests/19_chapter_DataDriven_Testing/`.

Run the chapter or a specific example with:

```bash
npx playwright test tests/19_chapter_DataDriven_Testing
npx playwright test tests/19_chapter_DataDriven_Testing/11_DDT_MYSQL.spec.ts
npx playwright test tests/19_chapter_DataDriven_Testing/12_DDT_FAKER.spec.ts
```

### MySQL example

The MySQL exercise is skipped unless `MYSQL_HOST` is set. To configure it:

1. Copy `.env.example` to `.env` and set the connection values for your MySQL
   server. Playwright loads `.env` when it starts; `.env` is ignored by Git.
2. Seed the sample database and table from the repository root:

   ```bash
   mysql -u root -p < tests/19_chapter_DataDriven_Testing/TestData/seed.sql
   ```

3. Run `npx playwright test tests/19_chapter_DataDriven_Testing/11_DDT_MYSQL.spec.ts`.

The seed script creates the `playwright_ddt` database and `login_data` table.
Set `MYSQL_DATABASE` to a different database name only if you also adjust the
seed script accordingly.

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

## Configuration and generated files

The Playwright configuration runs the Chromium project in a visible browser by default and enables the line, Allure, and custom TTA reporters. Set `headless: true` in `playwright.config.ts` to run without a visible browser.

Playwright output directories (`test-results/`, `playwright-report/`), Allure results (`allure-results/`), and the TTA report (`tta-report/`) are generated while testing and are excluded from Git.

Some exercises use local authentication state or environment variables. Keep `user-session.json` and `.env` local; both are ignored by Git. Create or refresh the required files locally before running exercises that depend on them, and never commit credentials or session data.
