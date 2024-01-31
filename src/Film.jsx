import { useState } from "react";
import Awards from "./Awards";

function Film({ film }) {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
        <div className={isOpen ? "open" : "closed"}>
            <h2>{film.title}</h2>
            <img src={film.poster} className="poster" ></img>
            <button onClick={() => setOpen(!isOpen)}>{isOpen ? "-" : "+"}</button>
            {isOpen && 
            <>
            <p><span className="bold">Director:</span> {film.director}</p>
            {film.starring && (<p><span className="bold">Starring:</span> {film.starring}</p>)}
            <p><span className="bold">Synopsis:</span>{film.synopsis}</p>
            <p><span className="bold">Award Nominations:</span>{film.awards.map((award) => (
                < Awards key={award.id} award={award} />
            ))}</p>
            
            </>
            }
        </div>
        
        </>
    )
}

export default Film