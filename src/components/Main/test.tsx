import { render, screen } from '@testing-library/react'

import Main from './Index'

describe('<Main />', () => {
  it('shold render the headong', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
  })
})
