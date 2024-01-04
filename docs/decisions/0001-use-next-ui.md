# Use Next UI as components library

## Context

To develop the front, a component library is required to go faster and to avoid writing all components from scratch

## Considered options

- [NextUI](https://nextui.org/)
- [HeadlessUI](https://headlessui.com/)
- [TailwindUI](https://tailwindui.com)
- [Mantine](https://mantine.dev/)

## Decision

Chosen option : NextUI. Components are all free, style agnostic and this is the library supported by Next.JS. Components are also installable independantly.

HeadlessUI has less components than NextUI
Mantine are styled with bootstrap and we use tailwind css on our project. We don't want two styling libs.
Not all components of TailwindUI are free.

## Consequences

For any front component, we can check if there is already something existing in the Next UI Library to develop faster. Accessibility will already by mainly handled.
