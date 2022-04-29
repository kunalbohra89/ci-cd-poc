import App from './App'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

it('renders properly', () => {
  render(<App />)
  const linkElement = screen.getByText(/Learn React/i)
  expect(linkElement).toBeInTheDocument()
})

it('unit tests', () => {
  console.log('test')
})
