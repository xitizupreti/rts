import React from "react";

const Table2 = ({ data }) => {
  return (
    <div className="fit">
    <table className="tab">
      <thead>
        <tr>
          <th>Time</th>
          {Object.keys(data[Object.keys(data)[0]]).map((name, index) => (
            <th key={index}>{name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.keys(data).map((time, index) => (
          <tr key={index}>
            <td key={index}>{time}</td>
            {Object.keys(data[time]).map((name, index) => (
              <td key={index}>{data[time][name]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Table2;
