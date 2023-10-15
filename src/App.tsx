import './App.css'
import { Pessoas } from './components/Pessoas'

export function App() {
  return (
    <div>
      Pessoas:
      <Pessoas name="Sergio Mo" media={10} />
      <Pessoas name="Jennifer Lobo" media={5} />
    </div>
  )
}

