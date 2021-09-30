import React from "react";
import Footer from "./Footer";
import HomeCom from "./HomeCom";

function About() {
  return (
    <div>
      <div className="container">
        <h1 className="text-center text-capital">About Me</h1>
      </div>

      <HomeCom
        head={" i am the web app developer both frontend and backend"}
        desc={"we will you life time when you any problem and dode "}
        button={"Contact Now"}
        redirect={"/contact"}
        img={"https://source.unsplash.com/500x500/?about"}
      />
      <Footer style={" text-center"} />
    </div>
  );
}

export default About;
