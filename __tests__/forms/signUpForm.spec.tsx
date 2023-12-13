import SignUpForm from '@/app/[locale]/sign-up/components/SignUpForm'
import { fireEvent, waitFor } from '@testing-library/react'
import { renderWithApolloProviderAndNextIntl } from '../utils/test-utils'
import { SIGN_UP } from '@/app/[locale]/sign-up/sign-up.graphql'

let signUpForm: HTMLElement
let emailInput: HTMLInputElement
let passwordInput: HTMLInputElement
let passwordConfirmationInput: HTMLInputElement
let submitButton: HTMLButtonElement

const mocks = [
  {
    request: {
      query: SIGN_UP,
      variables: {
        input: {
          emailAddress: 'test@example.com',
          password: 'password123',
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

    await waitFor(() => {
      expect(emailInput.value).toBe('test@example.com')
      expect(passwordInput.value).toBe('password123')
      expect(passwordConfirmationInput.value).toBe('password123')
    })
  })

  it('should display error message for password confirmation', async () => {
    const { getByText } = renderWithApolloProviderAndNextIntl(<SignUpForm />)

    fireEvent.change(passwordInput, { target: { value: 'password123' } })
    fireEvent.change(passwordConfirmationInput, {
      target: { value: 'wrongpassword' },
    })

    await waitFor(() => {
      expect(
        getByText('Les mots de passe ne correspondent pas.'),
      ).toBeInTheDocument()
    })
  })

  it('should disable the submit button after clicking it', async () => {
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })
    fireEvent.change(passwordConfirmationInput, {
      target: { value: 'password123' },
    })

    await waitFor(() => {
      fireEvent.click(submitButton)
    })

    await waitFor(() => {
      expect(submitButton).toBeDisabled()
    })
  })
})
