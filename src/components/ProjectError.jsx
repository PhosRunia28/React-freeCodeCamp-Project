import { Link, useRouteError } from "react-router-dom";

export default function ProjectError() {
  const error = useRouteError();
  return (
    <div>
      <h2 className="">{error.message}</h2>
      <h2 className="">{error.status}</h2>
      <p className="">{error.statusText}</p>
      <Link to="/">Back to HomePage</Link>
    </div>
  );
}
