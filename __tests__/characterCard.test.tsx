import { render, screen } from '@testing-library/react'
import CharacterCard from '@/components/characterCard'

describe('CharacterCard', () => {
  it('should render CharacterCard', () => {
    render(<CharacterCard name='Test Card' wikiUrl='https://google.com'/>)

    expect(screen.getByText('Test Card')).toBeInTheDocument();
  })

  it('renders with links', () => {
    render(<CharacterCard name='Test Card' wikiUrl='https://google.com'/>)
    expect(screen.getByText('Quotes')).toBeInTheDocument();
    expect(screen.getByText('Wiki Link')).toBeInTheDocument();
  });
})
