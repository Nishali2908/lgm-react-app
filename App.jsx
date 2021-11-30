import "./App.css";
import React, { useState } from "react";
function App() {
  const [users, setUsers] = useState();
  const getdata = async () => {
    const response = await fetch("https://reqres.in/api/users?");
    const data = await response.json();
    setUsers(data.data);
  };
 return(
   <div>
   <div className="header">
        <nav>
          <h1>LGM</h1>
          <div>
            <button className="btn" onClick={getdata}>
              GET USERS
            </button>
          </div>
        </nav>
        </div>
        <div className="cline1" >
        {users?.map((current, index) => {
          return (
            <div class="cbox">
            <div className="cline2" key={index}>
              <img src={current.avatar} className="c-avatar" alt="pto" />
              <div className="cbody">
                <h3 className="ctext">ID: {current.id}</h3>
                <h3 className="ctext">
                  {" "}
                  Name: {current.first_name} {current.last_name}
                </h3>
                <h3 className="ctext">Email: {current.email}</h3>
              </div>
            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default App;
