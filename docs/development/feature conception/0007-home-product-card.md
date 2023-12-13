# Home page

As a signed-in user, I can see some details of a product and I can click on the link to see the detailed page.

## Prerequisites

- User is registered and logged in

## Conception

The ProductCard and [MainInformationCard](./0004-main-information-card.md) components have micro components in common:

- ProductSection => Styling component
- Divider => Styling component
- IconLabeled => Styling component
- ProductApy => Display the expected APY of the product
- ProductEnergy => Display the types of energy used, power, price and duration of contract (last two are optionals)
- ProductFunding => Display a progress bar
- ProductInvestment => Display the min and max values of investment
- ProductOperator => Display the name and logo of Operator (clickable)

The ProductCard component also has theses micro components:

- ProductImage component => show product image, status tag, and location. Can show a countdown depending on status. Will be reusable for product detail page
- ProductStatus component => shows status with color depending on value

Datas displayed in the card must be formated depending on current culture (fr/en/us...).
General display rules (except explicit exceptions):

- Empty values display: the information is fully hidden (no label remaining), just show an empty line
- Dates are showned with FR culture formatting

Numeric values:

- Thousands separator (space for FR culture)
- Certain amounts must be formatted in k$ or M$ (see ProductAttributeDefinition)

## Tests

- If a product has a saleStatus as "closed", I can see the grey tag status and the white button with a `target="_blank"` link
- If a product has a saleStatus as "running", I can see the green tag status and the green button
- If a product has a saleStatus as "lastOpportunity", I can see the yellow tag status, the green button and a countdown
- If a product has a saleStatus as "incoming", I can see the blue tag status, the green button and a countdown

## Reminders for RealT Project

The interaction on (i) pictogram inside the ProductCard component will come later.
Financement section inside the ProductCard will be described in an other feature conception sheet.
Reservation and stock mangement will be described in an other feature conception sheet.
