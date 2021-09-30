

// export default Contact
import * as React from "react";

import Footer from "./Footer";
import Form from "./Form";

export default function SimplePaper() {
  return (
    <div className="container ">
      <div className="container">
        <h1 className="text-center text-capitalize"> contact</h1>
      </div>
     <Form/>
      <Footer style={" text-center"} />
    </div>
  );
}
