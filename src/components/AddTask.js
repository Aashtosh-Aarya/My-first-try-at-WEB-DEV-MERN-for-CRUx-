import { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const { addNewTask } = useContext(TaskContext);
  const navigate = useNavigate();
  const [task, setTask] = useState({ title: "", description: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setTask({
      ...task,
      [name]: value,
    });
  };

  let onFormSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    addNewTask(task);
    setTask({});
    navigate("/");
  };

  return (
    <>
      <section className="screen">
        <h3 className="ui heading center">Add New Task</h3>
        <div className="ui form">
          <form onSubmit={onFormSubmit}>
            <div className="field">
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={task.title}
                placeholder="Task Title"
                onChange={handleInputChange}
                spellCheck={false}
              />
            </div>
            <div className="field">
              <label>Description</label>
              <textarea
                rows="2"
                name="description"
                value={task.description}
                placeholder="Task Description"
                onChange={handleInputChange}
                spellCheck={false}
              ></textarea>
            </div>

            <button className="ui primary button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddTask;
