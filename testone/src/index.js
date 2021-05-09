import React from 'react';
import ReactDOM from 'react-dom';
import  Table from  "../src/components/tables/table"
import fetchSomeData from "../src/app"

ReactDOM.render(
  <React.StrictMode>
    <>
    <Table someData={fetchSomeData}/>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);
