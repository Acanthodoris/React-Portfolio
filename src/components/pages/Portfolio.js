import React from "react";
import "../../styles/Portfolio.css";
import { Carousel, Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

function Portfolio() {
  return (
    <div class="Portfolio">
        <div className="container-fluid d-flex justify-content-center mt-4 col-12 col-sm-4">
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <a href="https://acanthodoris.github.io/My-First-Portfolio/"  target="_blank">GitHub</a>
                        <a href="https://acanthodoris.github.io/My-First-Portfolio/"  target="_blank">GitHub Page</a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <a href="https://acanthodoris.github.io/My-First-Portfolio/"  target="_blank">GitHub</a>
                        <a href="https://acanthodoris.github.io/My-First-Portfolio/"  target="_blank">GitHub Page</a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <a href="https://acanthodoris.github.io/My-First-Portfolio/"  target="_blank">GitHub</a>
                        <a href="https://acanthodoris.github.io/My-First-Portfolio/"  target="_blank">GitHub Page</a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="h../../assets/Carousel/workDayScheduler.png"
                        alt="Work Day Scheduler"
                        />

                        <Carousel.Caption>
                        <h3>Work Day Scheduler</h3>
                        <a href="https://acanthodoris.github.io/My-First-Portfolio/"  target="_blank">GitHub</a>
                        <a href="https://acanthodoris.github.io/My-First-Portfolio/"  target="_blank">GitHub Page</a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="../../assets/Carousel/myFirstPortfolio.png"
                        alt="My First Portfolio"
                        />

                        <Carousel.Caption>
                        <h3>My First Portfolio</h3>
                        <a href="https://github.com/Acanthodoris/My-First-Portfolio"  target="_blank">GitHub</a>
                        <a href="https://acanthodoris.github.io/My-First-Portfolio/"  target="_blank">GitHub Page</a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="../../assets/Carousel/whatThatAnime.png"
                        alt="What's That Anime"
                        />

                        <Carousel.Caption>
                        <h3>What's That Anime</h3>
                        <a href="https://acanthodoris.github.io/My-First-Portfolio/"  target="_blank">GitHub</a>
                        <a href="https://acanthodoris.github.io/My-First-Portfolio/"  target="_blank">GitHub Page</a>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    </div>
  );
}

export default Portfolio;