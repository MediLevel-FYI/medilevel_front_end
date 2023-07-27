import {
  render,
  screen
} from '@testing-library/react'
import Header from '@/components/Header'
import '@testing-library/jest-dom'

describe('Header', () => {
  it('renders a navigation bar', () => {
    render( < Header / > )

    const navigation = screen.getByRole('navigation', {
      name: "Global"
    })

    expect(navigation).toBeInTheDocument()
  })
})
