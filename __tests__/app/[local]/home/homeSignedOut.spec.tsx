import HomeSignedOut from '@/app/[locale]/(main)/home/@signedOut/page'
import '@testing-library/jest-dom'
import { renderWithApolloProviderAndNextIntl } from '../../../utils/test-utils'

let signedOutHome: HTMLElement
let productsList: HTMLElement | null
let cta: HTMLElement

describe('Signed In Home', () => {
  beforeEach(() => {
    const { container, getByTestId, queryByTestId } =
      renderWithApolloProviderAndNextIntl(<HomeSignedOut />)
    signedOutHome = container
    productsList = queryByTestId('productsList')
    cta = getByTestId('signInCta')
  })

  it('should not render the product list', () => {
    expect(productsList).not.toBeInTheDocument()
  })

  it('should render a link to the sign in page', () => {
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveAttribute('href', '/sign-in')
  })
})
