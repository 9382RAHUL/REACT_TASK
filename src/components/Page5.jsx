import React from "react";
import "../../src/App.css";
const Page5 = ({ title }) => {
  return (
    <>
      <div className="main_container_page5">
     
        <div className="main_container_page5_first">
          <div className="main_container_page5_title">{title}</div>

          <div className="table">
            <table>
              <tr>
                <td>Roll Number</td>
                <td>1048</td>
               
               
              </tr>
              <tr>
                <td>candidate Name</td>
                <td>dummy_48 </td>
                
              </tr>
              <tr>
                <td>Typing Language</td>
                <td> Odia Typing Odia</td>
                
              </tr>
              <tr>
                <td>Duration (in minutes)</td>
                <td>10</td>
                
              </tr>
            </table>
            <div className="last_container_page5">
            <div className="last_container_page5_first">
                <input type="checkbox" name="" id="" />
                <p style={{color:"red",fontWeight:"bold"}}>I confirm that, I have read and understood the instructions</p>
            </div>
            
                <button className="last_container_page5_second">I am ready to begin</button>
            
          </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Page5;
