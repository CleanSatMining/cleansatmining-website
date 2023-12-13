import '@testing-library/jest-dom'
import { renderWithApolloProviderAndNextIntl } from '../../../utils/test-utils'
import HomeSignedIn from '@/app/[locale]/home/@signedIn/page'

let signedInHome: HTMLElement
let productsList: HTMLElement

describe('Signed In Home', () => {
  beforeEach(() => {
    const { container, getByTestId } = renderWithApolloProviderAndNextIntl(
      <HomeSignedIn />,
    )
    signedInHome = container
    productsList = getByTestId('productsList')
  })

  it('should render the product list', () => {
    expect(productsList).toBeInTheDocument()
  })
})
