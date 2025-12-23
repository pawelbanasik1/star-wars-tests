# About
The project uses a monorepo structure with separate workspaces for the application and tests. Each workspace has its own package.json to manage dependencies independently, while shared configurations like TypeScript are kept at the root.

These tests are developed to verify the functionality of the Star Wars Search application. 

## Run the tests
- Run `npm i` to install all the project dependencies.
- Run `npm run test:e2e` to run tests.

### Tests structure
- `pages/` contains all the page objects for the tests, based on POM.

- `spec/` holds all automated tests.

The main e2e folder contains shared configuration files like package.json or playwright.config.ts.

#### CI/CD
E2E tests are executed automatically via GitHub Actions on every pull request.
The pipeline installs dependencies, starts the application, runs Playwright tests, and publishes an HTML report as an artifact.
