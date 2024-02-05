import { useState } from "react";
import Awards from "./Awards";

function Film({ film }) {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
        <div className={isOpen ? "open" : "closed"}>
            <div className="filmimagehead">
                <img src={film.poster} className="poster" ></img>
                <div className="filmhead">
                    <div className="spacer"></div>
                    <h2>{film.title}</h2>
                    <button onClick={() => setOpen(!isOpen)}>{isOpen ? "-" : "+"}</button>
                </div>
            </div>
            {isOpen && 
            <>
                <div className="filmdetails">
                    <p><span className="bold">Director: </span> {film.director}</p>
                    {film.starring && (<p><span className="bold">Starring: </span> {film.starring}</p>)}
                    <p><span className="bold">Synopsis: </span>{film.synopsis}</p>
                    <h4><span className="bold">Award Nominations:</span></h4>
                    {film.awards.map((award) => (
                        < Awards key={award.id} award={award} />
                    ))}
                </div>
            </>
            }
            <hr id={"id" + film.id}></hr>
        </div>
        
        </>
    )
}

export default Film