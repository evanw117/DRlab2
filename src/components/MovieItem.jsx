// Import the Card component from react-bootstrap
import Card from 'react-bootstrap/Card';

// Define the MovieItem functional component and accept props as a parameter
const MovieItem = (props) => {
    return (
        <div>
            {/* Create a Bootstrap Card to display movie info */}
            <Card className="text-center">
                <Card.Body>
                    {/* Display the movie title */}
                    <Card.Title>{props.mymovie.Title}</Card.Title>

                    {/* Display the movie poster image */}
                    <img src={props.mymovie.Poster} />

                </Card.Body>

                {/* Display the movie release year in the card footer */}
                <Card.Footer className="text-muted">{props.mymovie.Year}</Card.Footer>
            </Card>
        </div>
    );
}

// Export the component so it can be used in other files
export default MovieItem;
