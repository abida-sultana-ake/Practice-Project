import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url('/bg.jpg')",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Every great developer once struggled with "Hello, World." The bugs,
            the errors, the confusion they’re not signs of failure, they’re
            proof that you’re learning. Coding is like building a muscle: every
            frustrating hour, every small victory, every late night trying to
            fix one stubborn issue it all adds up. You’re not just writing code,
            you’re crafting solutions, building logic, and creating something
            from nothing. So keep going. Even when it feels hard. Especially
            when it feels hard. Because that’s exactly how you grow not by
            knowing all the answers, but by refusing to quit when you don’t.
          </p>
          <button className="btn btn-primary">
            <Link className="text-white" to="/register">
              Get Started
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
