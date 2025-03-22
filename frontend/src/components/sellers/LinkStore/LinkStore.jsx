import React from "react";
import "./LinkStore.css"
import { Link } from "react-router-dom";

const LinkStore = () => {
  return (
    <section>
      <section className="linkyorstore-main pt">
        <div className="container">
          <div className="linkyorstore-boxmain">
            <div className="store-picture">
              <img
                alt=""
                className="img-fluid"
                src="/images/sellers/link-store/store1.svg"
              />
            </div>

            <div className="clippath">
              <h2 className="title2">Sellers</h2>
              <div className="linkyorstore-box">
                <h1 className="title1">
                  <span>Link your store</span> in 5 minutes!
                </h1>
                <p>
                  Zilch, Nada, Nothing to pay! Nothing to setup. Signup & meet
                  us live 1:1. We'll show you how easy your listings get
                  onto&nbsp;
                  <label className="demafont bodfont">dema.</label> Plus, you
                  can tell us what else you want!
                </p>
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  to="/sellers#seller_signup"
                  className="btn black"
                >
                  Sign up. It’s free!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="linkyorstore-main shoppers-main pt">
        <div className="container">
          <div className="linkyorstore-boxmain">
            <div className="store-picture">
              <img
                alt=""
                className="img-fluid"
                src="/images/sellers/link-store/store2.svg"
              />
            </div>
            <div className="clippath">
              <h2 className="title2">Shoppers</h2>
              <div className="linkyorstore-box">
                <h1 className="title1">
                  <span>Sign up to</span>{" "}
                  <span>
                    buy on&nbsp;
                    <label className="title-dema">
                      d<span className="title-blue">e</span>ma<label>!</label>
                    </label>
                  </span>
                </h1>
                <p>
                  Find out what we’ve got in store (a pun?!? 🙀). We’ll send you
                  updates. Brief and just enough to keep you wanting more; pinky
                  promise! 🤙🏼
                </p>
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  to="/shoppers#shopper_signup"
                  className="btn"
                >
                  Buy on <span>dema</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default LinkStore;
