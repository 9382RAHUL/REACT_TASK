import React from "react";
import "../../src/App.css";
const Login = ({title}) => {
  return (
    <>
      <div className="main_login">
        <div className="login_logo">
          your <span style={{ color: "red" }}>logo</span>
        </div>
        <div className="form_page">
          <div className="login">
            <h1>{title}</h1>
          </div>
          <section className="form_section">
            <div className="form_mid_section">
              <label htmlFor="number">Roll Number</label>
              <input type="number" name="number" id="number" />
            </div>
            <div className="form_mid_section">
              <label htmlFor="number">Password <span style={{color:'red'}}> (dob:19/09/1998)</span></label>
              <input type="number" name="number" id="number" />
            </div>
            <div className="form_mid_section">
              <label htmlFor="number">Pin Number </label>
              <input type="number" name="number" id="number" />
            </div>
          </section>
          <div className="btn">
            <button>Submit</button>
          </div>
        </div>
        <p style={{color:"red",fontWeight:"bold", fontSize:"16px"}}>Before Login, Check Your Keyboard Here</p>
        <textarea name="" id="" rows={7} cols={90} style={{backgroundColor:"greenyellow"}}></textarea>
      </div>
    </>
  );
};

export default Login;
