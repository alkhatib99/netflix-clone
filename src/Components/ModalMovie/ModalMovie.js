import React from "react";
import { Button, Modal, Form } from "react-bootstrap/";
import { useRef } from "react";

function ModalMovie(props) {

  
  const commentRef = useRef();
  function handleCaption(e) {
      e.preventDefault()
      const userCaption = commentRef.current.value;
      ;
      const newData = { ...props.movie, userCaption };
      props.updateCaption(newData, props.movie.id);
      console.log(1111111111,props.movie)
  }

  async function addToFavorite(movie){
      try{
          const res = await fetch(`https://movie-prep.herokuapp.com/addMovie`, {
              method: "POST",
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  title : movie.title,
                  poster_path : movie.poster_path,
                  overview : movie.overview,

              })
              

          })
          const data = await res.json();




      } catch (error) {
          console.log("error", error);
      }
  }





  return (
    <>
      <Modal
        show={props.show}
        onHide={() => {
          props.handleColse();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.movie.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img width="100%" src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} alt={props.movie.title} />
          <p>
            {props.movie.overview ? props.movie.overview : "No Text Provided"}
          </p>
          <p>{props.movie.overview}</p>
        </Modal.Body>
        <Modal.Footer>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Captions:</Form.Label>
            <Form.Control
              ref={commentRef}
              type="textarea"
              placeholder={
                props.movie.overview
                  ? props.movie.overview
                  : "Add Your Caption Here..."
              }
            />
          </Form.Group>
          <Button
            className="addBtn"
            variant="primary"
            type="submit"
            onClick={handleCaption}
          >
            Add a Caption
          </Button>
          <Button variant="primary" onClick={()=> addToFavorite(props.movie)}>
                        add to fav
                    </Button>
          <Button variant="secondary" onClick={props.handleColse}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalMovie;
