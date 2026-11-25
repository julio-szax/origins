import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import App from '../app/App'

afterEach(cleanup)

describe('App', () => {
  it('renderiza sem erros e exibe um título principal', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toBeTruthy()
  })
})
