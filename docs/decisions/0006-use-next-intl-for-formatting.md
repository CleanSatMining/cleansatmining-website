# Use next-intl for data formating

## Context

General display rules (except explicit exceptions):

- Dates are shown with FR culture formatting
- Numeric values:
  - Thousands separator (space for FR culture)
  - Certain amounts must be formatted in k$ or M$ (see ProductAttributeDefinition)

## Considered options

Two options were considered for implementing data formatting in our project:

- next-intl package: we already use next-intl dependency for internationalization, and it seems to extend a lot of functionnality from intl.
- check for a dedicated dependency that will do the job

## Decision

After checking the documentation of next-intl, we have decided to go with it for formatting on top of internationalization. This decision is based on the following factors:

- It is already in use inside the project
- It covers dates, numbers and lists formatting
- Formatting can be used in translated messages
- [Documentation](https://next-intl-docs.vercel.app/docs/usage) is exhaustive
- It is maintained by Vercel (same as NextJS)
- We can use a [global](https://next-intl-docs.vercel.app/docs/configuration#formats) format object directly inside the `<NextIntlClientProvider>` that's already present in our layout

## Consequences

With the use of next-intl for formatting, the following consequences are expected:

-Maintenance: all formats will be defined in a single place (for now `src/utils/format.ts`).
-Learning Curve: it will be easy for all team users to reuse the `useFormetter()` function provided by next-intl.
