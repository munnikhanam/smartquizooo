import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.jsx";
import Main from "./Layout/Main";
import Marks from "./components/Marks";
import Quiz from "./components/Quiz";
import ErrorPage from "./components/ErrorPage";
import QuizDetails from "./components/QuizDetails";
import Questions from "./components/Questions";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },

      {
        path: "/quiz",
        element: <Quiz></Quiz>,
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
      },
      {
        path: "/quizdetails",
        element: <QuizDetails></QuizDetails>,
      },
      {
        path: "/quiz/:id",
        loader: ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),

        element: <Questions></Questions>,
      },
      {
        path: "/marks",
        element: <Marks></Marks>,
      },
    ],
  },
]);
function App() {
  return (
    <div className="App">
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
