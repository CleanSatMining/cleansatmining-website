# [#4676](https://dev.azure.com/coexya-dgl/RealT.CSM/_workitems/edit/4676/) Home page Layout

The home page will show partially different content if the user is signed in or not:

- A Teaser and a call to action if he IS NOT signed in
- The list of available products if he IS signed in

Tasks:
[#4848](https://dev.azure.com/coexya-dgl/RealT.CSM/_workitems/edit/4848) [INT] Intégration liste produits
[#4961](https://dev.azure.com/coexya-dgl/RealT.CSM/_workitems/edit/4961) [INT] Intégration encart non connecté

This conception is a preliminary work for the tasks [4848](./4503 - Product list for signed-IN users - 4848 (01).md) and [4961](./4686 - Product list for signed-OUT users - 4961.md)

## Prerequisites

- We can check if a user is signed in or not

## Conception

- Setting up a folder for the home page contents with @signedIn and a @signedOut slots folder, a default page.tsx and a layout.tsx to use next js [parallel-routes](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes)
- The layout will check if the user is signed in and show the right content accordingly
- The default page will contain common content between the two states
- Each slots will contain their own default page.tsx with their own contents
- The @signedOut slot will show an image and a call to action to go to the sign in page
- The @SignedIn slot will show the product list and a filter/order component

The slots will have their own conception feature sheets

## Tests

- If I am signedOut I can see the call to action to the sign in page
- If I am signedIn I can see the product list
