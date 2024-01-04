# Access to offers depends on customer country and citizenship

A user whose country or citizenship is not allowed can not view the offers nor invest on the website.

Tasks:
[#5008](https://dev.azure.com/coexya-dgl/RealT.CSM/_workitems/edit/5008) Dev front adaptation requête customer
[#5004](https://dev.azure.com/coexya-dgl/RealT.CSM/_workitems/edit/5004) Dev front personnalisation Accueil bloquée

## Prerequisites

- User is registered with an address and logged in
- User is verified

## Conception

- Create component for Offer picture blurred with custom message
- Add not found page component
- Display these component if user country is not allowed

## Tests

- Check if an non authorized customer can't see products on home page
- Check if an unauthorized customer has a "not found" page when trying to access a product detail page

## Reminders for RealT Project
