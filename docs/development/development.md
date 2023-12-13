# Development

## Linting and formating

EsLint is used to lint the source code. The configuration is set a the project installation and is the [strict option proposed by Next.Js](https://nextjs.org/docs/app/building-your-application/configuring/eslint);

Code formatting is done when we save a file (see VsCode settings for project) and is configured through the Prettier plugin.
To avoid conflicts between EsLint and Prettier, the package eslint-config-prettier is installed [as advised by Next](https://nextjs.org/docs/app/building-your-application/configuring/eslint#prettier)

## Project Structure

Top-level folders are :
|   Name   |                       Description                       |
| :------: | :-----------------------------------------------------: |
| docs     |                                 Documentation du projet |
| src      |  contient le code source du front, dans le folder `app` |
| public   |                           contient les assets du projet |

The folder `app` contains :

- one folder for each frontstore page
- a `components` folder containing the components of each page, each sorted by page, or in the `common` folder

## Commit convention

We use the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) structure for the commit messages.
To make it easier, we use the [Commitizen](https://github.com/commitizen/cz-cli) tool with the default configuration (for now).

You need to install it with the following command :

```shell
npm install -g commitizen
```

Next, when you want to commit you can run the command `cz` in your cli, and follow the prompts

## Routing

We use the new [App Router](https://nextjs.org/docs/app/building-your-application/routing) of Next.JS 13.
The App Router enables us to have Server Components as default.
To create a new page on the store front : create a new folder with the name corresponding to the url you want in `src/app`, then create a `page.tsx` in the folder.
For dynamic routing, [see here](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes).

## .env files

// TODO
