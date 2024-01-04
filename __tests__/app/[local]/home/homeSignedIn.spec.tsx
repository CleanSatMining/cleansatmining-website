// Test is deactivated because Jest does not support async server components rendering for now
// See this topic : https://github.com/testing-library/react-testing-library/issues/1209
describe('Signed In Home', () => {
  it('should render the product list', async () => {
    //   renderWithApolloProviderAndNextIntl(<HomeSignedIn />, [
    //     {
    //       request: {
    //         query: GET_PRODUCTS,
    //         variables: {
    //           options: {
    //             take: 6,
    //           },
    //         },
    //       },
    //       result: {
    //         data: {
    //           items: [
    //             {
    //               id: '_',
    //               slug: '_',
    //               name: '_',
    //               variants: {
    //                 id: '_',
    //                 name: '_',
    //               },
    //             },
    //           ],
    //           totalItems: 1,
    //         },
    //       },
    //     },
    //   ])
    //   expect(await screen.findByTestId('emptyList')).toBeInTheDocument()
    //   expect(await screen.findByTestId('signedInHome')).toBeInTheDocument()
  })
})
