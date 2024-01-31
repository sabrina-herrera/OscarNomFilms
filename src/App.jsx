import oscar from '/src/assets/OSCARSTATUE.png'
import './App.css'
import films from './data'
import Film from './Film'

function App() {
  return (
    <>
          <div className="background">
            <img src={oscar} id='oscar' ></img>
            <h1>2024 OSCAR NOMINATED FILMS</h1>
            <div id='films'>
              {films.map((film) => (
                < Film key={film.id} film={film} />
              ))}
            </div>
          </div>
    </>
  )
}

export default App
