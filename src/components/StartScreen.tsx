import { Sprout } from 'lucide-react'

export function StartScreen() {
  return (
    <main className="start">
      <Sprout className="start__mark" size={28} strokeWidth={1.5} aria-hidden="true" />
      <h1 className="start__title">ORIGINS</h1>
      <p className="start__lead">Viva uma vida inteira, desde o nascimento.</p>
      <p className="start__status">
        Base técnica em construção. O jogo ainda não está disponível.
      </p>
    </main>
  )
}
