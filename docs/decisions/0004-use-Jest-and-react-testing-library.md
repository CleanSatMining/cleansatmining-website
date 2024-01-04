# Use Classnames Library

## Context

Tools are need to create a testing environment and write unit tests for the components

## Decision

Chosen options :

- [Jest](https://jestjs.io) : This is one of the most used library for unit and integration tests. Next.JS has a built-in configuration. Setup is documented on Next.Js website.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) is added to make it easier to test DOM elements.

## Consequences

Important components and methods will be tested thrgouh unit tests such has helper functions, formaters, validators...
