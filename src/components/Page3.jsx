import React from "react";
import SubPage3 from "./SubPage3";
const Page3 = ({ title }) => {
  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "rgb(23, 92, 194)",
          height: "40px",
          textAlign: "center",
          color: "white",
          fontWeight: "bold",
        }}
      >
        {title}
      </div>
      <div className="main_login_page3">
        <div className="form_page2">
          <div className="page2_title">
            <h1>Select Languages of Typing Test</h1>
          </div>
          <section className="form_section">
            <div className="main_form_section">
              <div className="form_section1">
                
                <label className="radio-container">
                  Odia Font (Inscript Layout)
                  <input type="radio" name="radio" />
                  <span className="checkmark"></span>
                </label>
               
              </div>
              <p style={{fontSize:"18px"}}>10 minutes</p>
            </div>

            <div className="container">
              <div className="selection">
                <span>Odia Font (Inscript Layout)</span>
                <button className="button">Proceed</button>
              </div>
              <div className="instructions">
                <p className="desc">
                  Use ALT+SHIFT To Change Keyboard Layout To Odia (Inscript) For
                  Typing
                </p>
              </div>
            </div>
          </section>
          <div className="btn2"></div>
        </div>
      </div>
      <SubPage3 />
    </>
  );
};

export default Page3;

// <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1.0">
// <title>Typing Test Selection</title>
// <style>
//   body {
//     font-family: Arial, sans-serif;
//     background-color: #f4f4f4;
//     margin: 0;
//     padding: 20px;
//   }
//   .container {
//     background-color: #fff;
//     border-radius: 5px;
//     box-shadow: 0 2px 5px rgba(0,0,0,0.2);
//     padding: 20px;
//     max-width: 600px;
//     margin: auto;
//   }
//   .header {
//     text-align: center;
//     margin-bottom: 20px;
//   }
//   .selection {
//     display: flex;
//     justify-content: space-between;
//     margin-bottom: 20px;
//   }
//   .button {
//     background-color: #5cb85c;
//     color: white;
//     border: none;
//     padding: 10px 20px;
//     text-align: center;
//     text-decoration: none;
//     display: inline-block;
//     font-size: 16px;
//     cursor: pointer;
//     border-radius: 5px;
//   }
//   .instructions {
//     background-color: #e7e7e7;
//     padding: 10px;
//     border-radius: 5px;
//     font-size: 14px;
//   }
// </style>
// </head>
// <body>
// <div className="container">
//   <div className="header">
//     <h2>Select Language of Typing Test</h2>
//   </div>
//   <div className="selection">
//     <span>Odia Font (Inscript Layout)</span>
//     <span>10 Minutes</span>
//   </div>
//   <button className="button">Proceed</button>
//   <div className="instructions">
//     <p>Use ALT+SHIFT To Change Keyboard Layout To Odia (Inscript) For Typing</p>
//   </div>
// </div>
// </body>
// </html>
