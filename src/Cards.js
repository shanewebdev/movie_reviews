import React from "react";
import { useState } from "react";
import ModalCard from "./ModalCard";

const Cards = ({ movieTitle }) => {
    const [searchMore, setSearchMore] = useState([]);

    const searchMoreInfo = async (ID) => {
        const responseMoreInfo = await fetch(`http://www.omdbapi.com/?i=${ID}&apikey=99002d47`)
        const dataMoreInfo = await responseMoreInfo.json()

        console.log(dataMoreInfo);
        setSearchMore(dataMoreInfo);
    }

    return (
        <div className='cards'>
            <img className='cardPoster'
                src={movieTitle.Poster !== 'N/A' ? movieTitle.Poster : 'https://via.placeholder.com/400'}
                alt={movieTitle.Title}
            >
            </img>
            <div onClick={() => searchMoreInfo(`${movieTitle.imdbID}`)}>
                <ModalCard more={searchMore} />
            </div>
        </div >
    )
}

export default Cards;


