import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Accordion from "./components/Accordion";
import Project from "./components/Project";
import RandomColor from "./components/RandomColor";
import StarRating from "./components/StarRating";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Project />} path="/">
        <Route element={<Accordion />} index />
        <Route element={<RandomColor />} path="randomColor" />
        <Route element={<StarRating />} path="starRating" />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
