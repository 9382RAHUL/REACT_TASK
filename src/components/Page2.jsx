import React from "react";
import "../../src/App.css";

const Page2 = ({ title }) => {
  const sdata = [
    {
      title: "1.English Typing",
      duration: "10 minutes",
      btn: "Proceed",
    },
    {
      title: "2.Odia Typing",
      duration: "10 minutes",
      btn: "Proceed",
    },
  ];
  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "rgb(23, 92, 194)",
          height: "40px",
          textAlign: "center",
        }}
      >
        Exam Papers
      </div>
      <div className="main_login">
        <div className="form_page2">
          <div className="page2_title">
            <h1>
              {title}
              <span style={{ color: "yellow" }}>1098]</span>
            </h1>
          </div>
          <section className="form_section">
            {sdata.map((item, i) => {
              return (
                <>
                  <div className="page2_mid">
                    <p style={{ color: "rgb(11, 115, 152)" }}>{item.title} </p>
                    <div className="page2_mid_part">
                      <p
                        style={{
                          marginRight: "80px",
                          color: "rgb(11, 115, 152)",
                        }}
                      >
                        {item.duration}
                      </p>
                      <button className="btn_page2">{item.btn}</button>
                    </div>
                  </div>
                </>
              );
            })}
          </section>
          <div className="btn2"></div>
        </div>
      </div>
    </>
  );
};

export default Page2;
