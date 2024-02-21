import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Accordion from "./components/Accordion";
import ImageSlider, { ImageSliderLoader } from "./components/ImageSlider";
import LoadMore from "./components/LoadMore";
import Project from "./components/Project";
import ProjectError from "./components/ProjectError";
import QrCodeGenerator from "./components/QrCodeGenerator";
import RandomColor from "./components/RandomColor";
import StarRating from "./components/StarRating";
import ToggleSwitch from "./components/ToggleSwitch";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Project />} path="/" errorElement={<ProjectError />}>
        <Route element={<Accordion />} index />
        <Route element={<RandomColor />} path="randomColor" />
        <Route element={<StarRating />} path="starRating" />
        <Route
          element={<ImageSlider />}
          path="imageSlider"
          loader={ImageSliderLoader}
        />
        <Route element={<LoadMore />} path="loadMore" />
        <Route element={<ToggleSwitch />} path="toggleSwitch" />
        <Route element={<QrCodeGenerator />} path="qrCodeGenerator" />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
