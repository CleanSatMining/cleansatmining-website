# [#4692](https://dev.azure.com/coexya-dgl/RealT.CSM/_workitems/edit/4692/) Finances tab

Tab to display tokenisation information

Tasks:
[#4994](https://dev.azure.com/coexya-dgl/RealT.CSM/_workitems/edit/4994) Intégration front onglet finances
[#4995](https://dev.azure.com/coexya-dgl/RealT.CSM/_workitems/edit/4995) Dev front onglet finances

## Prerequisites

- Define variable names to be retrieved in props that are useful for product finances information

## Conception

- Create DisplayFinanceData component with label, value and unit
- Create a recursive extendableFinancesSection component, with name and content as props. Add calculation of sum of sub-content values.
- Create finances Tab

## Tests

- I can see the different categories with a minus icon when they are expandable.
- These expandable categories are like an accordion, so when I click on them I can see the sub-categories they contain.
- The value of each category must be the sum of the sub-categories it contains.

## Reminders for RealT Project
