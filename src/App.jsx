import Home from './Home.jsx'
import NumberedOfffer from './NumberedOffer.jsx'
import BigImageComponent from './components/BigImageComponent.jsx'

function App() {
  return (
    <>
      <Home/>
      <NumberedOfffer/>
      <section className='visualOffer'>
        <BigImageComponent title="Špeciálna ponuka" subtitle="ušetrite 25%" img="2"/>
        <BigImageComponent title="Festival" subtitle="už za 3 dni" img="3"/>
        <BigImageComponent title="Rodinná dovolenka" subtitle="špeciálne ponuky" img="1"/>
      </section>
    </>
  )
}
export default App