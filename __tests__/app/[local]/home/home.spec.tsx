import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { renderWithNextIntl } from '../../../utils/test-utils'
import HomePage from '@/app/[locale]/home/page'

describe('Home', () => {
  it('renders a heading', () => {
    renderWithNextIntl(<HomePage />)

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toBeInTheDocument()
  })
})
