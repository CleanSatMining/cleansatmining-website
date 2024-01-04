# [#4749](https://dev.azure.com/coexya-dgl/RealT.CSM/_workitems/edit/4749/) Add to cart banner

Banner to define an investment amount on a product opened for sale so as to add the product to an cart.

Tasks:
[#4862](https://dev.azure.com/coexya-dgl/RealT.CSM/_workitems/edit/4862) [INT] Intégration bloc
[#4863](https://dev.azure.com/coexya-dgl/RealT.CSM/_workitems/edit/4863) Validation de la valeur saisie

## Prerequisites

- User is registered and logged in
- Install formik and yup to make forms

## Conception

- Create the AddToCartBanner component and load it in the product page
- Create a box component
- Create an custom Input component
- Reuse of the button component for the "investir" button
- get minInvestmentAmount and maxInvestmentAmount from props
- Handle the errors of the form if the value is not beetween minInvestmentAmount and maxInvestmentAmount
- Write the submit method that will add the product to his card and redirect to the Cart Page
- Find the product properties used in the AddToCartBanner in the backend
- Add the product properties in the customFields on gql request

## Tests

- If I enter an investmentAmount that is too high, an error message appears, telling me that the amount must be less than maxInvestmentAmount
- If I enter an investmentAmount that is too low, an error message appears, telling me that the amount must be greater than minInvestmentAmount
- If I type right investmentAmount, the product is added to the cart and I'm redirected to the cart page

## Reminders for RealT Project
