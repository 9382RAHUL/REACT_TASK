import React from "react";
import "../../src/App.css"
const Page4 = ({title}) => {
  return (
    <>
      <div className="main_container_page4">
        <div className="main_container_page4_first">
          <div className="main_container_page4_title">
           {title}
          </div>
          <div className="main_container_page4_btn">
            <button>A+</button>
            <button>A</button>
            <button>A-</button>
          </div>
          <p style={{position:"relative",marginTop:"30px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, incidunt nesciunt. Nulla optio iste totam itaque tenetur et dolorem inventore voluptatibus quaerat sunt reprehenderit pariatur at, quam suscipit libero qui quia aspernatur quae cumque aliquam temporibus dolores animi quod? Vel totam repudiandae cupiditate, omnis nostrum nam dolorem reprehenderit placeat maxime?</p>
          <hr />
          <div className="page4_con_btn">

          </div>
          <div className="page4_bottom">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, perspiciatis.</p>
          </div>
          <div className="last_container_page4">
            <div className="last_container_page4_first">
                <input type="checkbox" name="" id="" />
                <p>I have checked all the keys and they are working properly, also the passage is clearly visible and readble</p>
            </div>
            
                <button className="last_container_page4_second">Submit</button>
            
          </div>
        </div>

      </div>
    </>
  );
};

export default Page4;
