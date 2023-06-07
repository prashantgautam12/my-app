import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const List = () => {
  let navigate = useNavigate();
  const [data, setData] = useState("");
  const fetchData = () => {
    return fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const showUserDetails = (val) => {
    navigate("/details", { state: val });
  };
  return (
    <div className="App">
      <table >
        <tr>
        <th>Name</th>
          <th>Language</th>
          <th>Time</th>
           <th>action</th>
        </tr>
      </table>
      {data &&
        data.map((val) => {
          return (
            <tr >
                <td>{val.show.name}</td>
              <td>{val.show.language}</td>
              <td>{val.show.schedule.time}</td>
              
              <td>
                <button onClick={() => showUserDetails(val)}>
                  Show De
Show Detail
                </button>
              </td>
            </tr>
          );
        })}
    </div>
  );
};
export default List;
