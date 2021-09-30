import React from "react";
import Card from "./Card";
import Footer from "./Footer";
import sdata from "./Sdata";

function Service() {
  return (
    <div>
      <div className="container"></div>
      <h1 className="text-capitalize text-center"> our service</h1>
      <div class="container">
        <div class="row">
          {sdata.map((val, ind) => {
            return (
              <Card
                key={ind}
                id={ind}
                name={val.name}
                desc={val.desc}
                url={val.img}
                button={"Unroll Now"}
              />
            );
          })}
        </div>
      </div>
      <Footer
          style={" text-center"}
      />
    </div>
  );
}

export default Service;
