# Home page

As a signed-in user, I can see the list of all available products, available soon and closed.

## Prerequisites

- User is registered and logged in

## Conception

- Creation of the ProductCard component and sub components (might require some NextUI component like Chips).
- Fetching products according to the specifications (qty and sort by).
- Handling fetching errors.
- Creation of the products list.
- Handle empty list case.

Feature Conception sheet for product card is [here](./0007-home-product-card.md).

## Tests

- If I am signedIn and there is products available, I can see the product list
- If I am signedIn and there is no products available, I can see the message "Aucun produit à afficher"
