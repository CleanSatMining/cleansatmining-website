# [#4848](https://dev.azure.com/coexya-dgl/RealT.CSM/_workitems/edit/4848/) Home product card

As a signed-in user, I can see some details of a product and I can click on the link to see the detailed page.

Tasks:
[#4849](https://dev.azure.com/coexya-dgl/RealT.CSM/_workitems/edit/4849) [FO] Récupérer les valeurs des 12 attributs produits en BO

## Prerequisites

- User is registered and logged in
- Find the product properties used in the productCard in the backend
- Create a backend product with these fields filled in

## Conception

- Correct all variables names in accordance with the back
- Make the signIn page a server-side component
- Modify number and date formatting in server component: on the server side, the component is unable to retrieve the formats passed to the NextIntlClientProvider, so we call each format directly.
- Add customFields on gql request
- Remove mockedProduct and use generated type to type product

## Tests

- All displays on the mainInformationCard must be dynamic and in line with backend data
- Empty datas should not be displayed

## Reminders for RealT Project
