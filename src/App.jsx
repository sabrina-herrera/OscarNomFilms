import oscar from '/src/assets/OSCARSTATUE.png';
import './App.css';
import films from './data';
import Film from './Film';

function App() {
  function handleChange(e) {
    let winner = document.getElementsByClassName("winner");
    let checkbox = document.querySelector("#showwinner");
    for(let i=0; i<winner.length; i++) {
      winner[i].style.fontWeight = checkbox.checked ? "300" : "600";
    }
  };

  return (
          <div className="background">
            <div className='hero'>
              <img src={oscar} className='oscar' alt='oscar statue' ></img>
              <h1>OSCAR NOMINATED FILMS</h1>
              <img src={oscar} className='oscar' alt='oscar statue' ></img>
            </div>
            <div className='notes'>
              <p id="award-note">Awards won are shown in bold</p>
              <div id='spacer'></div>
              <label>
                <input name="showwinner" id="showwinner" type ="checkbox" onChange = {handleChange}/>
                 Hide Results
              </label>
            </div>
            <div id='films'>
              {films.map((film) => (
                < Film key={film.id} film={film} />
              ))}
            </div>
          </div>
  )
}

export default App
