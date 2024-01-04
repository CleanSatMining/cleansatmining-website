# [4952](https://dev.azure.com/coexya-dgl/RealT.CSM/_workitems/edit/4952) Investment summary screen

Tasks:
[5037](https://dev.azure.com/coexya-dgl/RealT.CSM/_workitems/edit/5037) Intégration front de la page
[5038](https://dev.azure.com/coexya-dgl/RealT.CSM/_workitems/edit/5038) Dynamisation des champs du composant

## Prerequisites

- User is registered and logged in
- User is verified
- The cart is not empty

## Conception

- Get the activeOrder with a graphql query in the page which is a server component
- Use the CheckoutLayout component wich include the CartCoundown and the ProductMiniCard
  and pass the active order as prop
- Create a InvestmentSummaryContent component with a ProductMiniCard with the investment informations
- Add this component as child of the CheckoutLayout

## Tests

- If I am signedIn and there is a product in my cart, I can see the product
- If I am signedIn and my cart is empty, I can see the message "Le panier est vide"

## Reminders for RealT Project
