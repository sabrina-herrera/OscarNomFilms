import { useState } from "react";
import Awards from "./Awards";
import MinusIcon from "./assets/MinusIcon.svg?react";
import PlusIcon from "./assets/PlusIcon.svg?react";

// SVG Tool
// https://jakearchibald.github.io/svgomg/

function Film({ film }) {
    const [isOpen, setOpen] = useState(false);

    // you can change the height/width on MinusIcon/PlusIcon by adding
    // attributes in-line. Ex., <MinusIcon height="40" width="40" />
    // I dont know how to manage mobile vs destop with this. There should be tutorials
    // or videos on vite + react + svgs

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

 
    // Previous code:
    // return (
    //     <>
    //         <div className={isOpen ? "open" : "closed"}>
    //             <div className="filmimagehead">
    //                 <img src={film.poster} className="poster" ></img>
    //                 <div className="filmhead">
    //                     <h2>{film.title}</h2>
    //                     <div
    //                         onClick={() => setOpen(!isOpen)}
    //                         className="expand-btn"
    //                     >
    //                         {isOpen ? <MinusIcon /> : <PlusIcon /> }
    //                         {/* {isOpen ? "-" : "+" } */}
    //                     </div>
    //                     {/* <button onClick={() => setOpen(!isOpen)}>{isOpen ? "-" : "+"}</button> */}
    //                 </div>
    //             </div>
    //             {isOpen && 
    //             <>
    //                 <div className="filmdetails">
    //                     <p><span className="bold">Director: </span> {film.director}</p>
    //                     {film.starring && (<p><span className="bold">Starring: </span> {film.starring}</p>)}
    //                     <p><span className="bold">Synopsis: </span>{film.synopsis}</p>
    //                     <h4><span className="bold">Award Nominations:</span></h4>
    //                     {film.awards.map((award) => (
    //                         < Awards key={award.id} award={award} />
    //                     ))}
    //                 </div>
    //             </>
    //             }
    //             <hr id={"id" + film.id}></hr>
    //         </div>
    //     </>
    // )
}

export default Film