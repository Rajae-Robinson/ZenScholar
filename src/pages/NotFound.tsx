import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center text-xl h-[50vh]">
      <div>
        <h1 style={{ color: "rgb(25, 25, 112)", fontSize: 40 }}>
          <b>404 ERROR:</b> PAGE NOT FOUND
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
      </div>
    </div>
  );
}
