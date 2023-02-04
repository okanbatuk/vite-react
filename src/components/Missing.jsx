import { useRouteError, Link, Outlet } from "react-router-dom";

export default function Missing() {
  const error = useRouteError();

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

      <ul>
        <li>
          <Link to="/">Return main page</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
