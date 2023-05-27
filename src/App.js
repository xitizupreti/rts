import React from "react";
import Table from "./Table";
import data from "./dummy_data.json";
import Table2 from "./Table2";

function App() {
  console.log({ data }); // dummy_data.json

  function convertData(jsonData) {
    var newData = {};

    jsonData.forEach(function (entry) {
      var name = entry.name;

      entry.data.forEach(function (dataPoint) {
        var time = dataPoint.time;
        var value = dataPoint.value;

        if (!newData[time]) {
          newData[time] = {};
        }

        newData[time][name] = value;
      });
    });

    return newData;
  }
  const newData = convertData(data);
  console.log({ newData });  // converted to dummy_data_2.json
  return (
    <div className="App">
      <header
      >
        <Table data={data} />
        <Table2 data={newData} />
      </header>
    </div>
  );
}

export default App;
