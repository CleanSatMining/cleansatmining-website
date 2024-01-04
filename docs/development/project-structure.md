# Project structure

Top-level folders are :
| Name | Description |
|:-----------:|:------------------------------------------------------:|
| `__tests__` | Dossier regroupant les tests unitaires |
| `__mocks__` | Dossier regroupant les mocks nécessaires aux tests |
| docs | Documentation du projet |
| src | contient le code source du front, dans le folder `app` |
| public | contient les assets du projet |

The `app` folder contains :

- the [locale] folder containing the pages of the front store.
- a `utils` folder containing the helper methods that will be used through the app.
- a `components` folder containing all the components.

## Routing

We use the new [App Router](https://nextjs.org/docs/app/building-your-application/routing) of Next.JS 13.
The App Router enables us to have Server Components as default.
To create a new page on the store front : create a new folder with the name corresponding to the url you want in `src/app`, then create a `page.tsx` in the folder.
For dynamic routing, [see here](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes).

### Layouts

Because we have pages that are visually different, we use multiple root layouts inside the [locale] folder. For more details, [see here](https://nextjs.org/docs/app/building-your-application/routing/route-groups#creating-multiple-root-layouts).

Root layouts are contained inside folders named with parenthesis, directly under the [locale] folder, such as (main) or (checkout).
The use of multiple root layouts implies that there is no default layout nor page anymore.
Each folder named with parenthesis will contain a default layout that will be applied to its children (and only its children).

For example, the (checkout) folder will contain:

- The default layout for checkout pages.
- The pages folders (one folder per page).

### Components

The `components` folder will contain :

- Shared components.
- Route groups folders with their dedicated components and/or subfolders to match tree structure.

## .env files

// TODO
