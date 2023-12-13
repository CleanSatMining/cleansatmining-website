import '@testing-library/jest-dom'
import { renderWithApolloProviderAndNextIntl } from '../../../../utils/test-utils'
import ProductCard from '@/app/[locale]/home/@signedIn/components/ProductCard'
import { Product } from '@/models/Product'

const incomingProduct: Product = jest.genMockFromModule(
  '../../../../../__mocks__/products/incomingProductMock',
)
const closedProduct: Product = jest.genMockFromModule(
  '../../../../../__mocks__/products/closedProductMock',
)
const runningProduct: Product = jest.genMockFromModule(
  '../../../../../__mocks__/products/runningProductMock',
)
const lastOpportunityProduct: Product = jest.genMockFromModule(
  '../../../../../__mocks__/products/lastOpportunityProductMock',
)

let status: HTMLElement
let countdown: HTMLElement | null
let button: HTMLLinkElement

describe('Incoming product card', () => {
  beforeEach(() => {
    const { getByTestId, queryByTestId } = renderWithApolloProviderAndNextIntl(
      <ProductCard product={incomingProduct} />,
    )
    status = getByTestId('productStatus')
    countdown = queryByTestId('productCountdown')
    button = getByTestId('productButton') as HTMLLinkElement
  })

  it('should render the countdown', () => {
    expect(countdown).toBeInTheDocument()
  })

  it('should render a blue chip for the status', () => {
    expect(status).toHaveClass('bg-blue')
  })

  it('should render a green button', () => {
    expect(button).toHaveClass('bg-green')
    expect(button).not.toHaveAttribute('target', '_blank')
  })
})

describe('Closed product card', () => {
  beforeEach(() => {
    const { getByTestId, queryByTestId } = renderWithApolloProviderAndNextIntl(
      <ProductCard product={closedProduct} />,
    )
    status = getByTestId('productStatus')
    countdown = queryByTestId('productCountdown')
    button = getByTestId('productButton') as HTMLLinkElement
  })

  it('should not render the countdown', () => {
    expect(countdown).not.toBeInTheDocument()
  })

  it('should render a grey chip for the status', () => {
    expect(status).toHaveClass('bg-grey-300')
  })

  it('should render a white button with an external link', () => {
    expect(button).toHaveClass('bg-white')
    expect(button).toHaveAttribute('target', '_blank')
  })
})

describe('Running product card', () => {
  beforeEach(() => {
    const { getByTestId, queryByTestId } = renderWithApolloProviderAndNextIntl(
      <ProductCard product={runningProduct} />,
    )
    status = getByTestId('productStatus')
    countdown = queryByTestId('productCountdown')
    button = getByTestId('productButton') as HTMLLinkElement
  })

  it('should not render the countdown', () => {
    expect(countdown).not.toBeInTheDocument()
  })

  it('should render a green chip for the status', () => {
    expect(status).toHaveClass('bg-green')
  })

  it('should render a green button', () => {
    expect(button).toHaveClass('bg-green')
    expect(button).not.toHaveAttribute('target', '_blank')
  })
})

describe('Last opportunity product card', () => {
  beforeEach(() => {
    const { getByTestId, queryByTestId } = renderWithApolloProviderAndNextIntl(
      <ProductCard product={lastOpportunityProduct} />,
    )
    status = getByTestId('productStatus')
    countdown = queryByTestId('productCountdown')
    button = getByTestId('productButton') as HTMLLinkElement
  })

  it('should render the countdown', () => {
    expect(countdown).toBeInTheDocument()
  })

  it('should render a yellow chip for the status', () => {
    expect(status).toHaveClass('bg-yellow')
  })

  it('should render a green button', () => {
    expect(button).toHaveClass('bg-green')
    expect(button).not.toHaveAttribute('target', '_blank')
  })
})
