# Order funnel steps navigation

Stepper component visible throughout the checkout process

Tasks:
[#5052](https://dev.azure.com/coexya-dgl/RealT.CSM/_workitems/edit/5052) Intégration de la maquette

## Prerequisites

- User is registered and logged in
- User is verified
- The cart is not empty

## Conception

- Create a Step type with an icon, title and subtitle
- Create a Stepper component that takes an array of Step and the current step as props
- Create an array of Step dedicated to checkout
- Create a stepper component dedicated to the checkout pages that will take the previously created array as prop
- Use the checkout stepper in pages and set the correct currentStep

## Tests

## Reminders for RealT Project
