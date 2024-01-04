import ErrorMessage from '@/app/[locale]/(main)/sign-in/_components/ErrorMessage'
import { WarningCircle } from '@phosphor-icons/react'
import { renderWithNextIntl } from '../../utils/test-utils'

// Mock the useTranslations hook

describe('ErrorMessage component', () => {
  it('should render with icon, title, and content', () => {
    const { getByTestId } = renderWithNextIntl(
      <ErrorMessage
        IconName={WarningCircle}
        titleKey="invalidCredentialsError"
        contentKeys={['invalidCredentialsError', 'invalidCredentialsError2']}
      />,
    )

    expect(getByTestId('errorTitle')).toBeInTheDocument()
    expect(getByTestId('invalidCredentialsError')).toBeInTheDocument()
    expect(getByTestId('invalidCredentialsError2')).toBeInTheDocument()
  })
})
