import React from "react";
const Table = ({data}) => {
  return (
    <>
      <div className="fit">
        <table className="tab">
          <tbody>
            <tr>
              <th>Parameter</th>

              {data[0].data.map((data, index) => (
                <th key={index}>{data.time}</th>
              ))}
            </tr>

            {data.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                {data.data.map((time, index) => (
                  <td key={index}>{time.value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
