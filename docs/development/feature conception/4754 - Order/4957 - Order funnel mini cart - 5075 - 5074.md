# Order funnel steps navigation

MiniCart component visible throughout the checkout process

Tasks:
[#5075](https://dev.azure.com/coexya-dgl/RealT.CSM/_workitems/edit/5075) Dynamisation du composant minicart
[#5074](https://dev.azure.com/coexya-dgl/RealT.CSM/_workitems/edit/5074) Intégration du composant "mini cart"

## Prerequisites

- User is registered and logged in
- User is verified
- The cart is not empty

## Conception

- Create a ProductMiniCard component
- Reuse ProductImage component by adding two sizes 'miniCard' and 'extendedMiniCard'.
- Reuse productSection twice for the Offer Issuer and Investment Amount sections and make two reusable component
- Reuse divider component between sections
  
## Tests

- All displays on the productMiniCard must be dynamic and in line with backend data
- Empty datas should not be displayed
- Passing true to the extend props should display both the "issuer" and "investmet" sections

## Reminders for RealT Project
