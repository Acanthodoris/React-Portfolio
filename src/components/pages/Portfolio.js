import React from "react";
import "../../styles/Portfolio.css";
import { Carousel, Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
import FTCHr from "../../assets/Carousel/FTCHr.png";
import EmeraldThumb from "../../assets/Carousel/emeraldthumb.png";
import Password from "../../assets/Carousel/pasgen.png";
import WorkDay from "../../assets/Carousel/workDayScheduler.png";
import MFP from "../../assets/Carousel/myFirstPortfolio.png";
import Anime from "../../assets/Carousel/whatThatAnime.png";

function Portfolio() {
  return (
    <div class="Portfolio">
        <div className="container-fluid d-flex justify-content-center mt-4 col-12 col-sm-4">
            <div class="CarouselHug">
                <div>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={FTCHr}
                        alt="FTCHr"
                        />
                        <Carousel.Caption>
                        <div class="cantSee">
                        <h3>FTCHr</h3>
                        <a href="https://github.com/amiramonte/FTCHr-Project-3"  target="_blank">GitHub</a>
                        <a href="https://ftchrapp.herokuapp.com/"  target="_blank">Heroku</a>
                        </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={EmeraldThumb}
                        alt="Emerald Thumb"
                        />

                        <Carousel.Caption>
                        <div class="cantSee">
                        <h3>Emerald Thumb</h3>
                        <a href="https://github.com/carterfm/How-Does-Your-Garden-Grow-"  target="_blank">GitHub</a>
                        <a href="https://serene-dusk-36944.herokuapp.com/"  target="_blank">Heroku</a>
                        </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Password}
                        alt="Password Generator"
                        />

                        <Carousel.Caption>
                        <div class="cantSee">
                        <h3>Password Generator</h3>
                        <a href="https://github.com/Acanthodoris/Password-Generator"  target="_blank">GitHub</a>
                        <a href="https://acanthodoris.github.io/Password-Generator/"  target="_blank">GitHub Page</a>
                        </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={WorkDay}
                        alt="Work Day Scheduler"
                        />

                        <Carousel.Caption>
                        <div class="cantSee">
                        <h3>Work Day Scheduler</h3>
                        <a href="https://github.com/Acanthodoris/symmetrical-palm-tree"  target="_blank">GitHub</a>
                        <a href="https://acanthodoris.github.io/symmetrical-palm-tree/"  target="_blank">GitHub Page</a>
                        </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={MFP}
                        alt="My First Portfolio"
                        />

                        <Carousel.Caption>
                        <div class="cantSee">
                        <h3>My First Portfolio</h3>
                        <a href="https://github.com/Acanthodoris/My-First-Portfolio"  target="_blank">GitHub</a>
                        <a href="https://acanthodoris.github.io/My-First-Portfolio/"  target="_blank">GitHub Page</a>
                        </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Anime}
                        alt="What's That Anime"
                        />

                        <Carousel.Caption>
                        <div class="cantSee">
                        <h3>What's That Anime</h3>
                        <a href="https://github.com/AndrewTranMSW/whatsThatAnime"  target="_blank">GitHub</a>
                        <a href="https://andrewtranmsw.github.io/whatsThatAnime/"  target="_blank">GitHub Page</a>
                        </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Portfolio;