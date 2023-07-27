import {
  render,
  screen
} from '@testing-library/react'
import NavLinks from '@/components/NavLinks'
import '@testing-library/jest-dom'

describe('NavLinks', () => {
  it('renders a Home link', () => {
    render( < NavLinks / > )

    const home = screen.getByRole('link', {
      name: "Home"
    })

    expect(home).toBeInTheDocument()
  })
})

describe('NavLinks', () => {
  it('renders an About link', () => {
    render( < NavLinks / > )

    const about = screen.getByRole('link', {
      name: "About"
    })

    expect(about).toBeInTheDocument()
  })
})

describe('NavLinks', () => {
  it('renders an FAQ link', () => {
    render( < NavLinks / > )

    const faq = screen.getByRole('link', {
      name: "FAQ"
    })

    expect(faq).toBeInTheDocument()
  })
})

describe('NavLinks', () => {
  it('renders a \"Contribute a Salary\" button', () => {
    render( < NavLinks / > )

    const button = screen.getByText("Contribute a Salary")

    expect(button).toBeInTheDocument()
  })
})
