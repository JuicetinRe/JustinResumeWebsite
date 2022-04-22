import React from "react";
import { Card, Button, Row, Col, Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Ghostie from "./images/Ghostie.jpg";
import Ghostie2 from "./images/Ghostie_pig.jpg";
import Ghostie3 from "./images/Ghostie_pink.png";


const Home = () => {
    return ( 
    <div className="homeContent">
        <Container>
            <Card className="mb-3" style={{color: "#000"}}>
                <Card.Img src = "https://picsum.photos/200/100" />
                <Card.Body>
                    <Card.Title>
                        Card Example
                    </Card.Title>
                    <Card.Text>
                        This is example text
                    </Card.Text>
                    <Button variant ="primary">Read More</Button>
                </Card.Body>
            </Card>
        </Container>
        <Container>
            <Card className="mb-3" style={{color: "#000"}}>
                <Card.Img src = "https://picsum.photos/200/100" />
                <Card.Body>
                    <Card.Title>
                        Card Example
                    </Card.Title>
                    <Card.Text>
                        This is example text
                    </Card.Text>
                    <Button variant ="primary">Read More</Button>
                </Card.Body>
            </Card>
        </Container>
        <Container>
            <Card className="mb-3" style={{color: "#000"}}>
                <Card.Img src = "https://picsum.photos/200/100" />
                <Card.Body>
                    <Card.Title>
                        Card Example
                    </Card.Title>
                    <Card.Text>
                        This is example text
                    </Card.Text>
                    <Button variant ="primary">Read More</Button>
                </Card.Body>
            </Card>
        </Container>
    </div>
     );
}
 
export default Home;