import Footer from '@/app/_shared/_components/_mainLayout/Footer'
import Header from '@/app/_shared/_components/_mainLayout/Header'
import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import { useSession } from 'next-auth/react'
import { renderWithNextIntl } from './utils/test-utils'

jest.mock('next-auth/react')

describe('Header', () => {
  it('renders a navigation', () => {
    // @ts-ignore
    useSession.mockReturnValue({
      data: { user: { name: 'John' } },
      status: 'authenticated',
    })

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
