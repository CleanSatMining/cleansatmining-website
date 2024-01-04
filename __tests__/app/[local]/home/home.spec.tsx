import HomePage from '@/app/[locale]/(main)/home/page'
import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import { renderWithNextIntl } from '../../../utils/test-utils'

describe('Home', () => {
  it('renders a heading', () => {
    renderWithNextIntl(<HomePage />)

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toBeInTheDocument()
  })
})
