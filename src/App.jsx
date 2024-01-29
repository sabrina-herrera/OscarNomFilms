import oscar from '/src/assets/OSCARSTATUE.png'
import './App.css'
import films from './data'

function App() {
  return (
    <>
          <div className="background">
            <img src={oscar} id='oscar' ></img>
            <h1>2024 OSCAR NOMINATED FILMS</h1>
            <div id='panel'>
              <p>hey</p>
            </div>
          </div>
    </>
  )
}

export default App
