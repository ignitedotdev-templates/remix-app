import type { MetaFunction } from "@remix-run/node";
import logo from "../logo.svg"
import "./index.css"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const currentPath = window.location.href;
  return (
    <main>
      <div className="">
        <img src={logo} alt="logo" className='logo' />
      </div>
      <div className="container">
        <div className="inner-container">
          <h2 className="header">
            You’ve just ignited a new <span className="library">Remix</span> static site!
          </h2>
          <span className="pathname">
            {currentPath}
          </span>
        </div>
        <p className="footer">
          Made in Nigeria with 💖
        </p>
      </div>
    </main>
  );
}
