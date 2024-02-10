import { useState } from "react";
import Awards from "./Awards";
import MinusIcon from "./assets/MinusIcon.svg?react";
import PlusIcon from "./assets/PlusIcon.svg?react";

function Film({ film }) {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="film-card">
            <div className="film-card-title-row">
                <img src={film.poster} className="film-card-poster"></img>
                <div className="film-card-title">
                    <h2>{film.title}</h2>
                </div>
                <div
                    className="expand-btn"
                    onClick={() => setOpen(!isOpen)}
                >
                    {isOpen ? <MinusIcon className="expand-icon" /> : <PlusIcon  className="expand-icon" /> }
                </div>
            </div>
            {isOpen && (
                <div className="film-card-detail-block">
                    <div className="filmdetails">
                        <p><span className="bold">Director: </span> {film.director}</p>
                        {film.starring && (<p><span className="bold">Starring: </span> {film.starring}</p>)}
                        <p><span className="bold">Synopsis: </span>{film.synopsis}</p>
                        <h4><span className="bold">Award Nominations:</span></h4>
                        {film.awards.map((award) => (
                            < Awards key={award.id} award={award} />
                        ))}
                    </div>
                </div>
            )}
            <hr id={"id" + film.id}></hr>
        </div>
    )
}

export default Film