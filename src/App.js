import ToDoListScreens from "./screens/ToDoListScreens";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddTask from "./components/AddTask";
import { TaskProvider } from "./context/TaskContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ToDoListScreens />,
  },
  {
    path: "/add-task",
    element: <AddTask />,
  },
]);

const App = () => {
  return (
    <TaskProvider>
      <RouterProvider router={router} />
    </TaskProvider>
  );
};

export default App;
