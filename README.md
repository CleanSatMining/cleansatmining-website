# Installation documentation

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Prerequisites

- Node 18.17.1 (LTS) (using [Node Version Manager](https://github.com/nvm-sh/nvm) is recommended)
- [Commitizen](https://www.npmjs.com/package/commitizen) : conventional commit messages
- The use of VsCode is recommended. VsCode extensions to install :
  - Prettier - Code Formatter
  - EsLint
  - Pretty TypeScript Errors
  - Tailwind CSS Intellisense

## Installation

Clone the repository on your local machine.
Create a .env.local file at the root of the project and paste this in :

```text
VENDURE_SHOP_API_URL=https://demo.vendure.io/shop-api
```

Run the commande npm run install. Installation of nodes modules should run smoothly.
If any issue is encountered, please document it for the next persons.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## UI Libraries

Libraries used for components are :

- [Tailwind UI Components](https://tailwindui.com/components/)
- [Headless UI Components](https://headlessui.com/)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
