import React from "react";
import data from "./dummy_data.json";
const Table = () => {
  return (
    <>
      <div className="fit">
        <table className="tab">
          <tbody>
            <tr>
              <th>Parameter</th>
              {data.map((data, index) => (
                <th key={index}>{data.data[index].time}</th>
            ))}
            </tr>

            {data.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.data[index].value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
