import React from 'react'
import "../components/subpage.css"
const SubPage3 = () => {
    const tabledata=[
        {
            id:1,
            desc:"A lone traveler found an ancient key in the forest, unlocking a portal to a forgotten world of wonder and peril."
        },
        {
            id:2,
            desc:"A lone traveler found an ancient key in the forest, unlocking a portal to a forgotten world of wonder and peril."
        },
        {
            id:3,
            desc:"A lone traveler found an ancient key in the forest, unlocking a portal to a forgotten world of wonder and peril."
        },
        {
            id:4,
            desc:"A lone traveler found an ancient key in the forest, unlocking a portal to a forgotten world of wonder and peril."
        },
        {
            id:5,
            desc:"A lone traveler found an ancient key in the forest, unlocking a portal to a forgotten world of wonder and peril."
        },
        {
            id:6,
            desc:"A lone traveler found an ancient key in the forest, unlocking a portal to a forgotten world of wonder and peril."
        },
        {
            id:7,
            desc:"A lone traveler found an ancient key in the forest, unlocking a portal to a forgotten world of wonder and peril."
        },
        {
            id:8,
            desc:"A lone traveler found an ancient key in the forest, unlocking a portal to a forgotten world of wonder and peril."
        }
    ]
  return (
  <>
  <div className="main">

    <div className="last_container">
        <div className="last_page3">
          Instruction for Odia Typing [Roll No: 1048]
        </div>
        <div className="styled-table">
          <table>
            <thead>
              <tr>
                <th>SN</th>
                <th>Language</th>
                <th>Duration (in minutes)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Odia typing</td>
                <td>10 minutes</td>
              </tr>
            </tbody>
          </table>
        </div>
        {
            tabledata.map((item,id)=>{
                return (
                    <>
                        <div className='table_data'>
                            <div>{item.id}. {item.desc}</div>
                        </div>
                    </>
                )
            })
        }
      </div>
  </div>
  </>
  )
}

export default SubPage3