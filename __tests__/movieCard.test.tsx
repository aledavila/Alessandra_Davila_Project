import { render, screen } from '@testing-library/react'
import MovieCard from '@/components/movieCard'

describe('MovieCard', () => {
  it('should render MovieCard and has a name', () => {
    render(<MovieCard name='Test Card' _id='1'/>)

    expect(screen.getByText('Test Card')).toBeInTheDocument();
  })
})
