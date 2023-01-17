import React from "react";
import { useRef } from "react";

const Signup = () => {
  const NameRef = useRef();
  const Emailref = useRef();
  const Passwordref = useRef();
  const Addressref = useRef();
  const mobileref = useRef();
  const saveUser = (userInfo) => {
    const userData = JSON.parse(localStorage.getItem("userdata"));
    if (!userData) {
      let userList = [];
      userList.push(userInfo);
      localStorage.setItem("userdata", JSON.stringify(userList));
    } else {
      userData.push(userInfo);
      localStorage.setItem("userdata", JSON.stringify(userData));
    }
  };
  const submitForm = (e) => {
    e.preventDefault();
    let userInfo = {};
    userInfo[NameRef.current.name] = NameRef.current.value;
    userInfo[Emailref.current.name] = Emailref.current.value;
    userInfo[Passwordref.current.name] = Passwordref.current.value;
    userInfo[Addressref.current.name] = Addressref.current.value;
    userInfo[mobileref.current.name] = mobileref.current.value;
    saveUser(userInfo);
  };

  return (
    <div className="signup">
      <h1>Sign up form</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" ref={NameRef} />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" ref={Emailref} />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input type="text" name="password" ref={Passwordref} />
        <br />
        <br />
        <label htmlFor="addresss">Address</label>
        <input type="text" name="address" ref={Addressref} />
        <br />
        <br />
        <label htmlFor="Mobile">Mobile</label>
        <input type="text" name="mobile" ref={mobileref} />
        <br />
        <br />
        {/* <input type="button" value="Submit" /> */}
        <button>Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
