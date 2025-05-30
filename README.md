# Unit Test Based App

This project demonstrates a simple and accessible modal component built with **React**, **TypeScript**, and **styled-components**, alongside unit tests using **React Testing Library** and **Vitest**.

## Features

- Modal with:
  - ESC key close support
  - Scrim (click outside) close
  - Accessible structure (`role="dialog"`, keyboard navigation)
  - Responsive design for mobile
- Close button using a Font Awesome icon (`faXmark`)
- Unit-tested behavior

## Tooling and Developing Experience

- This project includes a setup for linting, formatting, type checking, and testing to ensure code quality and maintainability.
  - Run linting manually: `npm run lint`
  - Format code manually: `npx prettier --write .`
  - Run type checks: `npm run type-check`
  - Run tests: `npm run test`
  - This project uses Husky to enforce code quality before commits.
