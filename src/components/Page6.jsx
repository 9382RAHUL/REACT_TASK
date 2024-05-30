import React, { useEffect, useState } from "react";
import "../../src/App.css";
const Page6 = ({ title }) => {
    const [currenttime,setcurrenttime]=useState(new Date());
    useEffect(()=>{
        const time=setInterval(()=>{
            setcurrenttime(new Date());
        },1000)
        return ()=>clearInterval(time);
    },[])

    
  return (
    <>
      <div className="main_container_page6">
        <div className="main_container_page6_first">
          <div className="main_container_page6_first_box">
            <div className="main_container_page6_left">
              <div className="main_container_page6_title">{title}</div>
              <div className="main_container_page6_btn">
                <button>A+</button>
                <button>A</button>
                <button>A-</button>
              </div>
            </div>
            <div className="main_container_page6_mid">
              <img
                src="https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgAAAA?rs=1&pid=ImgDetMain"
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
                alt=""
              />
              <div className="main_container_page6_mid_partition">
                <p>Rahul</p>
                <p>Sona</p>
                <p>Roll No : 1048</p>
              </div>
            </div>
            <div className="main_container_page6_right">
              <p style={{ marginRight: "40px", fontWeight: "bold" }}>
            
                Time Left: {currenttime.toLocaleTimeString()}
              </p>
            </div>
          </div>

          <p style={{ position: "relative", marginTop: "30px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
            incidunt nesciunt. Nulla optio iste totam itaque tenetur et dolorem
            inventore voluptatibus quaerat sunt reprehenderit pariatur at, quam
            suscipit libero qui quia aspernatur quae cumque aliquam temporibus
            dolores animi quod? Vel totam repudiandae cupiditate, omnis nostrum
            nam dolorem reprehenderit placeat maxime?
          </p>
          <hr />
          <div className="page6_con_btn">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, necessitatibus!
            </p>
          </div>

          <div className="last_container_page6">
            <button className="last_container_page6_second">End Typing Test</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page6;
