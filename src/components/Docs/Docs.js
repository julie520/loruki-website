import React from "react";
import { FaInfo } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Docs.css";

function Docs() {
  return (
    <>
      {/* Head */}
      <section className="docs-head bg-primary py-3">
        <div className="container grid">
          <div>
            <h1 className="xl">Docs</h1>
            <p className="lead">Learn how to work with thw Loruki platform</p>
          </div>
          <img src="images/docs.png" alt="Document" />
        </div>
      </section>
      {/* Docs main */}
      <section className="docs-main my-4">
        <div className="container grid">
          <div className="card bg-light p-3">
            <h3 className="my-2">Essentials</h3>
            <nav>
              <ul>
                <li>
                  <Link className="text-primary" to="/">
                    Introduction
                  </Link>
                </li>
                <li>
                  <Link to="/">About Loruki</Link>
                </li>
                <li>
                  <Link to="/">Installation</Link>
                </li>
              </ul>
            </nav>
            <h3 className="my-2">Deployment</h3>
            <nav>
              <ul>
                <li>
                  <Link to="/">Setting up a container</Link>
                </li>
                <li>
                  <Link to="/">Using the CLI</Link>
                </li>
                <li>
                  <Link to="/">Managing resources</Link>
                </li>
                <li>
                  <Link to="/">Upgrade & downgrade</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="card">
            <h2>Introduction</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              obcaecati sed itaque ea, fuga laborum alias consequuntur, error
              possimus nisi assumenda dicta exercitationem iusto magni sunt
              aliquam. Sapiente, doloribus autem?
            </p>
            <div className="alert alert-success">
              <FaInfo />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, amet!
            </div>
            <h3>Lorem, ipsum dolor.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              voluptas enim autem inventore, laudantium magni deserunt dolor
              placeat velit ex.
            </p>
            <Link to="/" className="btn btn-primary">
              Install CLI
            </Link>

            <h3>Requirements</h3>
            <ul>
              <li>Windows 10, Mac OSX, Linux</li>
              <li>Node.js V12 or higher</li>
            </ul>

            <h3>Install</h3>
            <p>Mac (Homebrew)</p>
            <pre>
              <code>$ brew install loruki-cli</code>
            </pre>
            <p>NPM</p>
            <pre>
              <code>$ npm install loruki-cli</code>
            </pre>
            <p>Yarn</p>
            <pre>
              <code>$ yarn add loruki-cli</code>
            </pre>
          </div>
        </div>
      </section>
    </>
  );
}

export default Docs;
