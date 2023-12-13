# Home page

As a signed-in user, I can see the products in ma cart and validate it.

## Prerequisites

- User is registered and logged in

## Conception

- Creation of the subfolder cart in [locale] folder and its page.tsx to create the route.
- Retrieve graphql api call to get the active order in the client component page.tsx
- Integration of the component PageCartContentProps in page.tsx passing him the list of order lines as props
- If the active order contains order lines, display the list of product in the PageCartContentProps and the button to validate the cart, else the message "Le panier est vide"

## Tests

- If I am signedIn and there is products in my cart, I can see the product list
- If I am signedIn and there is no products available, I can see the message "Le panier est vide"
