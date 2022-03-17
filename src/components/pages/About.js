import React from "react";
import Selfie from "../../assets/2021.jpg";
import "../../styles/About.css";

function About() {

  return (
    <section class="Me">
      <div className="container">
        <div class="needSpace">
          <div className="row bg-dark d-flex justify-content-center">
            <img
              src={Selfie}
              alt="it me, with green hair infront of a waterfall"
              className="profilePhoto col-lg-4 col-md-6 col-sm-10 mt-4"
            ></img>
            <div className="row d-flex justify-content-center">
              <div className="text-white bg-dark">
                <h2 className="d-flex bg-dark justify-content-center">About Me</h2>
                <p>
                    Hello, my name is Rebeccah Mullan I have been around the sun 31 times and during that time I spent it growing up in the Pacific Northwest. I graduated High School in 2009, and in March of 2022 I attended the University of Washington Web Development Bootcamp. In the between times as I call it, I spent my days road tripping and exploring the peninsula and learning about animal nutrition. I never found my roots and needed something to ground me.
                </p>
                <p>
                    Like many people, I had felt the calling for something more than just retail. I had been playing with the idea of learning something new. I wanted to do something creative, flexible but with rules, and something challenging; which is when I rediscovered coding. Although it was not something entirely new, since back in my teenage years I was very fond of HTML and CSS styling on online forums. Which is where I am today, excited and ready to start my new career as a full stack web developer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;