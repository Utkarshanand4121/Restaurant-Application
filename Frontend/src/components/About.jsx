import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we're serious about is food.</p>
          </div>
          <p className="mid">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
            possimus optio adipisci dolores impedit illum iusto perferendis,
            laudantium quod accusamus consequuntur consectetur, tempore nulla
            error iure reiciendis dolorem assumenda. Necessitatibus fugit
            asperiores totam rem esse exercitationem iusto ipsum qui dolore ex,
            accusantium repellat mollitia repellendus.
          </p>
          <Link to={"/"}>
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="https://static.vecteezy.com/system/resources/previews/036/512/678/non_2x/ai-generated-top-view-of-a-black-plate-with-indian-food-isolated-on-a-transparent-background-png.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
