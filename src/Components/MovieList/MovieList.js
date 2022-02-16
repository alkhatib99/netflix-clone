
import {CardGroup } from 'react-bootstrap';
import { useState } from 'react';
import ModalMovie from '../ModalMovie/ModalMovie.js';
import Movie from '../Movie/Movie'
function MovieList(props){
    const [showModal, setShowModal] = useState(false);
    const [movie, setMovie] = useState();
   
console.log(props)
    return (
        <>
            <CardGroup style={{ display: "flex", justifyContent: "space-around" }}>
                {
                    props.movies.map(movie => {
                        return <div key={movie.id}>
                            
                            <Movie setMovie={setMovie} movie={movie} setShowModal={setShowModal}/>
                            </div>
                    })
                }
            </CardGroup>
            {showModal && <ModalMovie show={showModal} movie={movie} handleColse={() => { setShowModal(false) }} updateCaption={props.updateCaption} />}
        </>
        
      
    )
}


export default MovieList;

