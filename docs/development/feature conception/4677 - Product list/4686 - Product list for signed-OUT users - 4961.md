# [#4686](https://dev.azure.com/coexya-dgl/RealT.CSM/_workitems/edit/4686/) Signed out product list

As a signed-out user, I cannot see the products list.
I can see a blured static image and a Call to Action that tells me to log in.

Tasks:
[#4961](https://dev.azure.com/coexya-dgl/RealT.CSM/_workitems/edit/4961) [INT] Intégration encart non connecté

## Prerequisites

- User is not signed in

## Conception

- Creation of the ResponsiveImage component.
- Display the CTA above the picture.

## Tests

- If I am signedOut, I can not see the products list
- If I am signedOut, there is a button to the sign-in page
