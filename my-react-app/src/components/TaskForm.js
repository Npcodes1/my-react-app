import React from "react";

function TaskForm(props) {
  // const handleFormSubmit = props.handleFormSubmit
  const { handleFormSubmit } = props;
  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="taskName">Task Name</label>
      <input type="text" id="taskName" name="taskName" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TaskForm;
