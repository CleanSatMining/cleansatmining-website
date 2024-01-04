import AddToCartBanner from '@/app/[locale]/(main)/product/_components/AddToCartBanner'
import {
  Matcher,
  SelectorMatcherOptions,
  fireEvent,
  waitFor,
} from '@testing-library/react'
import { renderWithApolloProviderAndNextIntl } from '../../../../utils/test-utils'

let AddToCartBannerForm: HTMLElement
let investmentAmountInput: HTMLInputElement
let submitButton: HTMLButtonElement

let getByTextGlobal: (
  id: Matcher,
  options?: SelectorMatcherOptions | undefined,
) => HTMLElement

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    }
  },
}))

describe('AddToCartBanner', () => {
  beforeEach(() => {
    const { container, getByTestId, getByText } =
      renderWithApolloProviderAndNextIntl(
        <AddToCartBanner
          productId={'0'}
          salesStatus={'open'}
          minInvestmentAmount={1}
          maxInvestmentAmount={10}
        />,
      )
    getByTextGlobal = getByText
    AddToCartBannerForm = container
    submitButton = getByTestId('submitAddToCartForm') as HTMLButtonElement
    investmentAmountInput = getByTestId('investmentAmount') as HTMLInputElement
  })

  it('should render correctly', () => {
    expect(AddToCartBannerForm.querySelector('form')).toBeInTheDocument()
    expect(
      AddToCartBannerForm.querySelector('input[type="number"]'),
    ).toBeInTheDocument()
    expect(
      AddToCartBannerForm.querySelector('button[type="submit"]'),
    ).toBeInTheDocument()
  })

  it('should render nothing', () => {
    const { container } = renderWithApolloProviderAndNextIntl(
      <AddToCartBanner
        productId={'0'}
        salesStatus={'commingSoon'}
        minInvestmentAmount={1}
        maxInvestmentAmount={10}
      />,
    )
    AddToCartBannerForm = container
    expect(AddToCartBannerForm.querySelector('form')).not.toBeInTheDocument()
  })

  it('should allow entering values in form fields', async () => {
    fireEvent.change(investmentAmountInput, { target: { value: 5 } })

    await waitFor(() => {
      expect(investmentAmountInput.value).toBe('5')
    })
  })

  it('should show max Investment Amount Error', async () => {
    fireEvent.change(investmentAmountInput, { target: { value: 11 } })
    await waitFor(() => {
      fireEvent.click(submitButton)
    })
    await waitFor(() => {
      expect(getByTextGlobal('Le montant doit être inférieur à 10'))
    })
  })

  it('should show min Investment Amount Error', async () => {
    fireEvent.change(investmentAmountInput, { target: { value: 0 } })
    await waitFor(() => {
      fireEvent.click(submitButton)
    })
    await waitFor(() => {
      expect(
        getByTextGlobal('Le montant doit être supérieur à 1'),
      ).not.toBeNull()
    })
  })

  it('should show max decimal Error', async () => {
    fireEvent.change(investmentAmountInput, { target: { value: 5.555 } })
    await waitFor(() => {
      fireEvent.click(submitButton)
    })
    await waitFor(() => {
      expect(
        getByTextGlobal(
          'Le montant ne peut pas avoir plus de deux chiffres après la virgule',
        ),
      ).not.toBeNull()
    })
  })

  it('should show required Error', async () => {
    fireEvent.change(investmentAmountInput, { target: { value: '' } })

    await waitFor(() => {
      fireEvent.click(submitButton)
    })
    await waitFor(() => {
      expect(getByTextGlobal('Un montant est requis')).not.toBeNull()
    })
  })

  it('should disable the submit button after clicking it', async () => {
    fireEvent.change(investmentAmountInput, { target: { value: 0 } })

    await waitFor(() => {
      fireEvent.click(submitButton)
    })

    await waitFor(() => {
      expect(submitButton).toBeDisabled()
    })
  })
})
