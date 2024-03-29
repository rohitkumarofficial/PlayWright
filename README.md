# PlayWright Documentation

## Install PlayWright
[https://playwright.dev/docs/intro#installing-playwright]

## Documentation
**When creating new test file**  
Add `import { test, expect } from "@playwright/test";` at top of the file
  
Create describe or test block to write test cases and assertions
```
Syntax -
test.describe('title', () => {
    test('title', () => {})
})
```
  
```
Example -
test.describe("google", () => {
  test("open google", async ({page}) => {
    await page.goto("https://google.com");
    await expect(page).toHaveTitle("Google");
  });
});
```

## Commands
**Run end to end test** -  `npx playwright test`  
**Show Report** -  `npx playwright show-report`  
**Run single test file** - `npx playwright test .test/fileName.spec.ts`  
**Run multiple test files** - `npx playwright test .test/fileName1.spec.ts .test/fileName2.spec.ts`  **Run all the files with similar name** - `npx playwright test fileName`  
**Run test file with test title** - `npx playwright test -g "has title"`  
**Run on specific browser** - `npx playwright test --project=chromium`  
**Run tests in headed mode** - `npx playwright test --project=chromium --headed`  
**Debug test** - `npx playwright test --project=chromium --headed --debug`  
**Debug test from specific line** - `npx playwright test file_location/example.spec.ts:21 --project=chromium --headed --debug`  