import React, { useState } from "react";

export default function Form() {
  const [open, setOpen] = useState(false);

  const fun = () => {
    setOpen(!open);
  };

  return (
    <div className=" d-flex  flex-column gap-5  align-items-center min-vh-100  justify-content-center ">
      <button onClick={fun} type="button" class="btn btn-primary">
        Click me
      </button>

      {open && (
        <div className=" w-50 border p-5">
          <div class="">
            <label for="fullName" class="form-label">
              Full Name
            </label>
            <input
              type="text"
              class="form-control"
              id="fullName"
              placeholder="Enter Your Full Name"
            />

            <label for="email" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter Your Email"
            />

            <label for="password" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Enter Your Password"
            />

            <label for="password" class="form-label">
              Number
            </label>
            <input
              type="number"
              class="form-control"
              id="number"
              placeholder="Enter Your Number"
            />
          </div>
        </div>
      )}
    </div>
  );
}
