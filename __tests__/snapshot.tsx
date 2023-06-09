import { render } from '@testing-library/react'
import Home from '@/pages/index'
import Characters from '@/pages/characters'
import Movies from '@/pages/movies'

it('renders homepage unchanged', () => {
  const { container } = render(<Home />)
  expect(container).toMatchSnapshot()
})

it('renders characters unchanged', () => {
  const { container } = render(<Characters />)
  expect(container).toMatchSnapshot()
})

it('renders movies unchanged', () => {
  const { container } = render(<Movies />)
  expect(container).toMatchSnapshot()
})
