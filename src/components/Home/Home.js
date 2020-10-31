import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { FaProjectDiagram, FaServer, FaUpload } from "react-icons/fa";

function Home() {
  return (
    <>
      {/* <!-- Showcase --> */}
      <section className="showcase">
        <div className="container grid">
          <div className="showcase-text">
            <h1>Easier Deployment</h1>
            <p>
              Deploy web apps of all kinds, from large scale enterprise APIs to
              static websites for individuals. Fill out the form to try a demo
              of our platform.
            </p>
            <Link to="/features" className="btn btn-outline">
              Read More
            </Link>
          </div>
          <div className="showcase-form card">
            <h2>Request a Demo</h2>
            <form
              name="contact"
              method="POST"
              netlify-honeypot="bot-field"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label htmlFor="bot-field">
                  Don't fill this out if you're human:
                </label>
                <input type="text" name="bot-field" id="bot-field" />
              </p>
              <div className="form-control">
                <input type="text" name="name" placeholder="Name" required />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  required
                />
              </div>
              <div className="form-control">
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <input type="submit" value="Send" className="btn" />
            </form>
          </div>
        </div>
      </section>
      {/* Stats */}
      <section className="stats">
        <div className="container">
          <h3 className="stats-heading text-center my-1">
            Welcome to the best platform for building applications of all types
            with modern architecture and scaling
          </h3>
          <div className="grid grid-3 text-center my-4">
            <div>
              <FaServer size={48} />
              <h3>10,349,405</h3>
              <p className="text-secondary">Deployments</p>
            </div>
            <div>
              <FaUpload size={48} />
              <h3>987 TB</h3>
              <p className="text-secondary">Published</p>
            </div>
            <div>
              <FaProjectDiagram size={48} />
              <h3>2,343,265</h3>
              <p className="text-secondary">Projects</p>
            </div>
          </div>
        </div>
      </section>
      {/* Cli */}
      <sectiin className="cli">
        <div className="container grid">
          <img src="images/cli.png" alt="cli" />
          <div className="card">
            <h3>Easy to use, cross platform CLI</h3>
          </div>
          <div className="card">
            <h3>Deoloy in seconds</h3>
          </div>
        </div>
      </sectiin>
      {/* Cloud */}
      <section className="cloud bg-primary my-2 py-2">
        <div className="container grid">
          <div className="text-center">
            <h2 className="lg">Extreme Cloud Hosting</h2>
            <p className="lead my-1">
              Cloud hosting like you've never seen. Fast, efficient and scalable
            </p>
            <Link to="/features" className="btn btn-dark">
              Read More
            </Link>
          </div>
          <img src="images/cloud.png" alt="cloud" />
        </div>
      </section>
      {/* Languages */}
      <section className="languages">
        <h2 className="md text-center my-2">Supported Languages</h2>
        <div className="container flex">
          <div className="card">
            <h4>Node.js</h4>
            <img src="images/logos/node.png" alt="node" />
          </div>
          <div className="card">
            <h4>Python</h4>
            <img src="images/logos/python.png" alt="noPythonde" />
          </div>
          <div className="card">
            <h4>C#</h4>
            <img src="images/logos/csharp.png" alt="C#" />
          </div>
          <div className="card">
            <h4>Ruby</h4>
            <img src="images/logos/ruby.png" alt="Ruby" />
          </div>
          <div className="card">
            <h4>PHP</h4>
            <img src="images/logos/php.png" alt="PHP" />
          </div>
          <div className="card">
            <h4>Scala</h4>
            <img src="images/logos/scala.png" alt="Scala" />
          </div>
          <div className="card">
            <h4>Clojure</h4>
            <img src="images/logos/clojure.png" alt="Clojure" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
