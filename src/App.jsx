import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Accordion from "./components/Accordion";
import GithubProfileFinder from "./components/GithubProfileFinder";
import ImageSlider, { ImageSliderLoader } from "./components/ImageSlider";
import LoadMore from "./components/LoadMore";
import ModalPopup from "./components/ModalPopup";
import Project from "./components/Project";
import ProjectError from "./components/ProjectError";
import QrCodeGenerator from "./components/QrCodeGenerator";
import RandomColor from "./components/RandomColor";
import ScrollIndicator from "./components/ScrollIndicator";
import ScrollToTop from "./components/ScrollToTop";
import StarRating from "./components/StarRating";
import Tabs from "./components/Tabs";
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
        <Route element={<ScrollIndicator />} path="scrollIndicator" />
        <Route element={<Tabs />} path="tabs" />
        <Route element={<ModalPopup />} path="modalPopup" />
        <Route element={<GithubProfileFinder />} path="githubProfile" />
        <Route element={<ScrollToTop />} path="scrollToTop" />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
