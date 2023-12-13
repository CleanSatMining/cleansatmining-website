# How to test your app

## Tools for testing

- [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/)
- [jest](https://jestjs.io/docs/getting-started)
- [next documentation on testing](https://nextjs.org/docs/pages/building-your-application/optimizing/testing#creating-your-tests)

## Where to write tests

Tests are to be written in the root folder called __tests__. You can create a new folder by page and a file by component or page for which you want to write tests.
If you need to mock data, use the folder __mocks__ and create the same arborescence as in the __tests__ folder.

## Utils

The utils/test-utils.tsx provides helpers to tests specific kind of components :

- For components rendering translation keys, use the ``renderWithNextIntl`` helpers that provides english keys to your component.

## When to test your app

We don't expect a unit test for each component to check if it renders correctly. We trust you to manually test correctly your code.
You should write unit tests for :

- complex components to be sure they work correctly in isolation.
- error handling

You should write integration tests to test features, and when you fetch or send data. They should serve as regression tests and break if a change is mady to an existing functionnality.
Write them once your feature is stable

## How to run your tests

use the command

```bash
npm run test
```

You can pass the name of your file too if you want to run tests only for a file. If you write :

 ```bash
npm run test cart
```

Jest will run all the files that have ``cart`` in their file name.
