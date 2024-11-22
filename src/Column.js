import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomColumns() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <input type="text" placeholder="Add a task" />
            </div>
             <div className="col">
                 <input type ="Date" placeholder="27/10/2024"/>
                 </div>
                  <div className="col">
                    <button  type="button" className="btn btn-outline-success">Add</button>
        </div>
      </div>
    </div>
  );
}

export default CustomColumns;