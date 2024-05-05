import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center text-base h-[50vh]">
      <text>
        <h1 className="text-primary text-2xl">
          <strong>404 ERROR:</strong> PAGE NOT FOUND
        </h1>
        <h2>Oops! You seem to be lost.</h2>
        <p>Here are some helpful ZenScholar links:</p>
        <Link to="/screening">&#10148;Take Depression Test</Link>
        <br></br>
        <Link to="/">&#10148;Home</Link>
        <br></br>
        <Link to="/resources">&#10148;Resources</Link>
        <br></br>
        <Link to="/about">&#10148;About</Link>
      </text>
      <div className="fixed bottom-0 right-0 rounded-full shadow-md">
        <img src="/resources/404-ERROR.jpg" />
      </div>
    </div>
  );
}
