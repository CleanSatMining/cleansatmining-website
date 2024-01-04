import SignUpForm from '@/app/[locale]/(main)/sign-up/_components/SignUpForm'
import { SIGN_UP } from '@/app/[locale]/(main)/sign-up/sign-up.graphql'
import { fireEvent, waitFor } from '@testing-library/react'
import { renderWithApolloProviderAndNextIntl } from '../utils/test-utils'

let signUpForm: HTMLElement
let emailInput: HTMLInputElement
let passwordInput: HTMLInputElement
let passwordConfirmationInput: HTMLInputElement
let countryInput: HTMLSelectElement
let citizenshipInput: HTMLSelectElement
let termsAndConditionsInput: HTMLInputElement
let submitButton: HTMLButtonElement

const mocks = [
  {
    request: {
      query: SIGN_UP,
      variables: {
        input: {
          emailAddress: 'test@example.com',
          password: 'password123',
          customFields: {
            residenceCountry: 'FRA',
            citizenship: 'FRA',
            termsAndConditions: true,
          },
        },
      },
    },
    loading: true,
  },
]

describe('SignUpForm', () => {
  beforeEach(() => {
    const { container, getByTestId } = renderWithApolloProviderAndNextIntl(
      <SignUpForm />,
      mocks,
    )
    signUpForm = container
    emailInput = getByTestId('email') as HTMLInputElement
    passwordInput = getByTestId('password') as HTMLInputElement
    passwordConfirmationInput = getByTestId(
      'passwordConfirmation',
    ) as HTMLInputElement
    countryInput = getByTestId('country') as HTMLSelectElement
    citizenshipInput = getByTestId('citizenship') as HTMLSelectElement
    termsAndConditionsInput = signUpForm.querySelector(
      '#termsAndConditions input[type="checkbox"]',
    ) as HTMLInputElement
    submitButton = getByTestId('submitSignUpForm') as HTMLButtonElement
  })

  it('should render correctly', () => {
    expect(signUpForm.querySelector('form')).toBeInTheDocument()
    expect(signUpForm.querySelector('input[type="email"]')).toBeInTheDocument()
    expect(
      signUpForm.querySelector('input[type="password"]'),
    ).toBeInTheDocument()
    expect(
      signUpForm.querySelector('input[id="passwordConfirmation"]'),
    ).toBeInTheDocument()
    expect(signUpForm.querySelector('button[id="country"]')).toBeInTheDocument()
    expect(
      signUpForm.querySelector('button[id="citizenship"]'),
    ).toBeInTheDocument()
    expect(
      signUpForm.querySelector('label[id="termsAndConditions"]'),
    ).toBeInTheDocument()
    expect(termsAndConditionsInput).not.toBeChecked()
    expect(
      signUpForm.querySelector('button[type="submit"]'),
    ).toBeInTheDocument()
  })

  it('should allow entering values in form fields', async () => {
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })
    fireEvent.change(passwordConfirmationInput, {
      target: { value: 'password123' },
    })
    fireEvent.change(countryInput, {
      target: { value: 'FRA' },
    })
    fireEvent.change(citizenshipInput, {
      target: { value: 'FRA' },
    })
    fireEvent.click(termsAndConditionsInput)

    await waitFor(() => {
      expect(emailInput.value).toBe('test@example.com')
      expect(passwordInput.value).toBe('password123')
      expect(passwordConfirmationInput.value).toBe('password123')
      expect(countryInput.value).toBe('FRA')
      expect(citizenshipInput.value).toBe('FRA')
      expect(termsAndConditionsInput).toBeChecked()
    })
  })

  it('should display error message for password confirmation', () => {
    const { getByText } = renderWithApolloProviderAndNextIntl(<SignUpForm />)

    fireEvent.change(passwordInput, { target: { value: 'password123' } })
    fireEvent.change(passwordConfirmationInput, {
      target: { value: 'wrongpassword' },
    })

    waitFor(() => {
      expect(
        getByText('Les mots de passe ne correspondent pas.'),
      ).toBeInTheDocument()
    })
  })

  it('should disable the submit button after clicking it', () => {
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })
    fireEvent.change(passwordConfirmationInput, {
      target: { value: 'password123' },
    })
    fireEvent.change(countryInput, {
      target: { value: 'FRA' },
    })
    fireEvent.change(citizenshipInput, {
      target: { value: 'FRA' },
    })
    fireEvent.click(termsAndConditionsInput)

    fireEvent.click(submitButton)

    waitFor(() => {
      expect(submitButton).toBeDisabled()
    })
  })
})
