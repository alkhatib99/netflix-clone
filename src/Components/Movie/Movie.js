import {Card,Button} from 'react-bootstrap'

function Movie(props){
    
    return (<>
    
                                     <Card key={props.movie.id} style={{ width: '25rem' }} className="text-center" >
                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} />
                                <Card.Body>
                                    <Card.Title>{props.movie.title}</Card.Title>
                                    <Card.Text>
                                        {props.movie.overview ? props.movie.overview : "No text"}
                                    </Card.Text>
                                   
                                    <Button variant="primary" onClick={() => { props.setMovie(props.movie); props.setShowModal(true) }} >Show Modal</Button>
                                </Card.Body>
                            </Card>
    
    </>)
}

export default Movie;