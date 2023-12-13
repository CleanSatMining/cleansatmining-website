import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import { renderWithNextIntl } from './utils/test-utils'
import Header from '@/app/[locale]/layout/Header'
import Footer from '@/app/[locale]/layout/Footer'

describe('Header', () => {
  it('renders a navigation', () => {
    renderWithNextIntl(<Header />)

    const nav = screen.getByRole('navigation')

    expect(nav).toBeInTheDocument()
  })
})
describe('Footer', () => {
  it('renders a navigation', () => {
    renderWithNextIntl(<Footer />)

    const nav = screen.getByRole('navigation')

    expect(nav).toBeInTheDocument()
  })
  it('renders a copyright', () => {
    renderWithNextIntl(<Footer />)

    const copyright = screen.getByText(/Copyright/)

    expect(copyright).toBeInTheDocument()
  })
})
