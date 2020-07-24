import React, { useState } from "react";
import dateformat from "dateformat";

function NewGoal({ add, cancel }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState(dateformat(new Date(), "yyyy-mm-dd"));

  const addItem = () => {
    const dueDate = new Date(date);
    add({ name, timestampDue: dueDate.getTime(), complete: false, id: 0 });
  };

  return (
    <div className="newItem">
      <div className="add-item-form">
        <div className="form-group">
          <label htmlFor="addItemInput">Item description</label>
          <input
            type="text"
            placeholder="Enter description..."
            className="form-control"
            id="addItemInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="addItemDueInput">Due date</label>
          <input
            type="date"
            className="form-control"
            id="addItemDueInput"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </div>
        <button
          className="btn btn-success"
          disabled={name === ""}
          onClick={addItem}
        >
          Add item
        </button>
        <button
          className="btn btn-secondary"
          style={{ marginLeft: "20px" }}
          onClick={cancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default NewGoal;
