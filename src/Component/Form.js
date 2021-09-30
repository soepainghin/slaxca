import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

function Form() {
  const [state, setstate] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  });

  const change = (e) => {
    const { value, name } = e.target;
    setstate((p) => {
      return {
        ...p,
        [name]: value,
      };
    });
  };
  const click=()=>{
      alert(`
      my name is ${state.firstName } ${state.lastName} my phone ${state.phone}
      `)
  }
  return (
    <div>
      <div className="d-flex justify-content-center">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: "auto",
              height: "auto",
            },
          }}
        >
          <Paper elevation={24}>
            <div className="page">
              <form>
                <div class="mb-3">
                  <label for="email" class="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="fname"
                    aria-describedby="emailHelp"
                    name="firstName"
                    value={state.firstName}
                    onChange={change}
                  />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="lname"
                    aria-describedby="emailHelp"
                    name="lastName"
                    value={state.lastName}
                    onChange={change}
                  />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">
                    Phone
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="phone"
                    aria-describedby="emailHelp"
                    name="phone"
                    value={state.phone}
                    onChange={change}
                  />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    name="email"
                    value={state.email}
                    onChange={change}
                  />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    name="password"
                    value={state.password}
                    onChange={change}
                  />
                </div>

                <Button onClick={click} className="form-btn" variant="outlined">
                  Submit
                </Button>
              </form>
            </div>
          </Paper>
        </Box>
      </div>
    </div>
  );
}

export default Form;
