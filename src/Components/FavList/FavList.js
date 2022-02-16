import { Card, CardGroup, Button } from "react-bootstrap";
function FavList(props) {
  console.log(props);
  return (
    <>
      <h1>This is my favorite list of movies</h1>
      <CardGroup style={{ display: "flex" }}>
        {(props.favoriteList ?? []).map((movie) => {
          return (
            <Card key={movie.id}>
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
              />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.overview}</Card.Text>
              </Card.Body>
              <Button className="addBtn" variant="primary" type="submit"   >
                        Add 
                    </Button>          
                    <Button className="deleteBtn" variant="primary" type="reset"   >
                        delete
                    </Button> 
                      </Card>
          );
        })}
      </CardGroup>
    </>
  );
}

export default FavList;
