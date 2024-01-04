# [#4796](https://dev.azure.com/coexya-dgl/RealT.CSM/_workitems/edit/4796/) Main information card

Information card displayed on product details page. It details a lot of the products infos such as estimated API, investment range, energy source...

Tasks:
[#4854](https://dev.azure.com/coexya-dgl/RealT.CSM/_workitems/edit/4854) [FO] Récupérer les valeurs des 13 attributs produits stockés

## Prerequisites

- User is registered and logged in
- Find the product properties used in the mainInformationCard in the backend
- Create a backend product with these fields filled in

## Conception

- Correct all variables names in accordance with the back
- Fix progressBar: Use currentProjectInvestmentProgress and not totalInvestment which is for finances tab
- Make the product page a server-side component
- Modify number and date formatting in server component: on the server side, the component is unable to retrieve the formats passed to the NextIntlClientProvider, so we call each format directly.
- Add customFields on gql request
- Remove mockedProduct and use generated type to type product

## Tests

- All displays on the mainInformationCard must be dynamic and in line with backend data
- Empty datas should not be displayed

## Reminders for RealT Project
