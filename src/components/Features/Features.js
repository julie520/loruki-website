import React from "react";
import {
  FaDatabase,
  FaLaptopCode,
  FaNetworkWired,
  FaPowerOff,
  FaServer,
  FaUpload,
} from "react-icons/fa";
import "./Features.css";

function Features() {
  return (
    <>
      {/* Head */}
      <section className="features-head bg-primary py-3">
        <div className="container grid">
          <div>
            <h1 className="xl">Features</h1>
            <p className="lead">
              Check out the features of Loruki that separate us from the
              competition
            </p>
          </div>
          <img src="images/server.png" alt="Server" />
        </div>
      </section>
      {/* Sub head */}
      <section className="features-sub-head bg-light py-3">
        <div className="container grid">
          <div>
            <h1 className="md">The Loruki Platform</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus iusto culpa voluptate, quos nulla inventore nostrum
              ipsam temporibus porro vel laborum sint, consequatur, deleniti
              consectetur natus adipisci voluptas dolore praesentium?
            </p>
          </div>
          <img src="images/server2.png" alt="Server2" />
        </div>
      </section>
      <section className="features-main my-2">
        <div className="container grid grid-3">
          <div className="card flex">
            <div>
              <FaServer size={32} />
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam quidem, nulla saepe dicta, quisquam dolorum quaerat iste
              deserunt sit odit natus voluptates aut non, magnam laudantium
              nesciunt beatae corporis dignissimos!
            </p>
          </div>
          <div className="card flex">
            <div>
              <FaNetworkWired size={32} />
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam quidem, nulla saepe dicta, quisquam dolorum quaerat iste
              deserunt sit odit natus voluptates aut non, magnam laudantium
              nesciunt beatae corporis dignissimos!
            </p>
          </div>
          <div className="card flex">
            <div>
              <FaLaptopCode size={32} />
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam quidem, nulla saepe dicta, quisquam dolorum quaerat iste
              deserunt sit odit natus voluptates aut non, magnam laudantium
              nesciunt beatae corporis dignissimos!
            </p>
          </div>
          <div className="card flex">
            <div>
              <FaDatabase size={32} />
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam quidem, nulla saepe dicta, quisquam dolorum quaerat iste
              deserunt sit odit natus voluptates aut non, magnam laudantium
              nesciunt beatae corporis dignissimos!
            </p>
          </div>
          <div className="card flex">
            <div>
              <FaPowerOff size={32} />
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam quidem, nulla saepe dicta, quisquam dolorum quaerat iste
              deserunt sit odit natus voluptates aut non, magnam laudantium
              nesciunt beatae corporis dignissimos!
            </p>
          </div>
          <div className="card flex">
            <div>
              <FaUpload size={32} />
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam quidem, nulla saepe dicta, quisquam dolorum quaerat iste
              deserunt sit odit natus voluptates aut non, magnam laudantium
              nesciunt beatae corporis dignissimos!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
