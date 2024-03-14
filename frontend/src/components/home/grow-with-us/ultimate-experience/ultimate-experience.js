"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./ultimate-experience.css";

const UltimateExperience = () => {
  const [dimensions, setDimensions] = useState({ width: '1140px', height: '550px' });
  useEffect(() => {

    class SplitBox {
      constructor(box) {
        this.box = box;

        this.box.style.background = "transparent";
        this.box.style.position = "relative";
        this.update();
        this.under = this.#createContainer(box.children[0], "left");
        this.top = this.#createContainer(box.children[1], "right");

        this.box.addEventListener("mousemove", (e) => {
          let value = e.clientX - this.box.getBoundingClientRect().left;

          this.top.style.width = `${Math.max(
            Math.min((value / this.box.clientWidth) * 100, 99),
            1
          )}%`;
        });
      }

      #createContainer(boxChild) {
        let element = document.createElement("div");
        element.style.position = "absolute";
        element.classList.add("box-content");

        // Clone the original content
        let clonedChild = boxChild.cloneNode(true);

        // Set the width of the clone
        clonedChild.style.width = "var(--box-width)";

        clonedChild.style.position = "absolute";
        clonedChild.style.inset = "0";

        // Append the clone to the new container
        element.appendChild(clonedChild);

        // Replace the original content with the new container
        boxChild.replaceWith(element);

        return element;
      }

      update() {
        this.box.style.setProperty(
          "--box-width",
          Math.ceil(this.box.getBoundingClientRect().width) + "px"
        );
      }
    }

    let splitboxes = [];

    document.querySelectorAll(".splitBox").forEach((element) => {
      splitboxes.push(new SplitBox(element));
    });

    window.addEventListener("resize", () => {
      splitboxes.forEach((splitbox) => {
        splitbox.update();
      });
    });

    const initializeInfiniteScroll = (container) => {
        const cards = container.querySelectorAll(".card");
        let cardWidth = 0;
        cards.forEach((card) => {
          cardWidth += card.offsetWidth;
        });
        const clonedCards = Array.from(cards).map((card) => card.cloneNode(true));
        clonedCards.forEach((clonedCard) => {
          container.appendChild(clonedCard);
        });
        let scrollPosition = 0;
        const scrollContainer = () => {
          scrollPosition += 1;
          container.style.transform = `translateX(-${scrollPosition}px)`;
          if (scrollPosition >= cardWidth) {
            scrollPosition = 0;
            container.style.transition = "none";
          }
          requestAnimationFrame(scrollContainer);
        };
        requestAnimationFrame(scrollContainer);
      };
  
      const leftContainer = document.querySelector(".cards-container-amazon");
      const rightContainer = document.querySelector(".cards-container-dema");
      function handleResize() {
        if (visualViewport.width < 768) {
          setDimensions({
            width: `${visualViewport.width}px`, // Set width to 100% for full width on smaller screens
            height: `300px`, // Set height to window inner height
          });
        } else {
          setDimensions({
            width: '1140px', // Default width for larger screens
            height: '550px', // Default height for larger screens
          });
        }
      }
  
      // Initial call to set dimensions
      handleResize();
  
      // Event listener for window resize
      window.addEventListener('resize', handleResize);
      initializeInfiniteScroll(leftContainer);
      initializeInfiniteScroll(rightContainer);
      // Cleanup on component unmount
      return () => window.removeEventListener('resize', handleResize);
  

  }, []);
  return (
    <section style={dimensions}>
    <div className="splitContainer splitBox" style={{background: 'transparent', position: 'relative'}}>
      <div className="box-content"  style={{position: 'absolute'}}>
        <div className="ultimate-experience content contrast" style={{width: 'var(--box-width)', position: 'absolute', inset: '0px'}}>
          <div className="section-title">
            <h2>
              Your Ultimate Shopping <br />
              Experience Begins on{" "}
              <span className="title-dema">
                Dema
              </span>
            </h2>
          </div>
          <div className="cards-container-dema">
          <div className="card">
              <Image
                src="/images/home/grow-with-us/ultimate-experience/annual-fee-dema.svg"
                width={64}
                height={64}
                alt="savings"
                className="card-image"
              />
              <h3 className="card-title">Annual Fee</h3>
              <div className="bullet-points">
                <div className="point">
                  <Image
                    src="/images/home/grow-with-us/ultimate-experience/bullet.svg"
                    width={10}
                    height={10}
                    alt="savings"
                    className="card-image"
                  />
                  <p className="point-text">Zero Anual fees</p>
                </div>
                <div className="point">
                  <Image
                    src="/images/home/grow-with-us/ultimate-experience/bullet.svg"
                    width={10}
                    height={10}
                    alt="savings"
                    className="card-image"
                  />
                  <p className="point-text">Free to Use</p>
                </div>
                <div className="point">
                  <Image
                    src="/images/home/grow-with-us/ultimate-experience/bullet.svg"
                    width={10}
                    height={10}
                    alt="savings"
                    className="card-image"
                  />
                  <p className="point-text">Earn points</p>
                </div>
              </div>
            </div>
            <div className="card">
              <Image
                src="/images/home/grow-with-us/ultimate-experience/savings-dema.svg"
                width={64}
                height={64}
                alt="savings"
                className="card-image"
              />
              <h3 className="card-title">Savings</h3>
              <div className="bullet-points">
                <div className="point">
                  <Image
                    src="/images/home/grow-with-us/ultimate-experience/bullet.svg"
                    width={10}
                    height={10}
                    alt="savings"
                    className="card-image"
                  />
                  <p className="point-text">Up to $75 Cashback</p>
                </div>
                <div className="point">
                  <Image
                    src="/images/home/grow-with-us/ultimate-experience/bullet.svg"
                    width={10}
                    height={10}
                    alt="savings"
                    className="card-image"
                  />
                  <p className="point-text">$100 Sales tax savings</p>
                </div>
                <div className="point">
                  <Image
                    src="/images/home/grow-with-us/ultimate-experience/bullet.svg"
                    width={10}
                    height={10}
                    alt="savings"
                    className="card-image"
                  />
                  <p className="point-text">Extra saving points</p>
                </div>
              </div>
            </div>
            <div className="card">
              <Image
                src="/images/home/grow-with-us/ultimate-experience/control-dema.svg"
                width={64}
                height={64}
                alt="savings"
                className="card-image"
              />
              <h3 className="card-title">Control</h3>
              <div className="bullet-points">
                <div className="point">
                  <Image
                    src="/images/home/grow-with-us/ultimate-experience/bullet.svg"
                    width={10}
                    height={10}
                    alt="savings"
                    className="card-image"
                  />
                  <p className="point-text">On your hands</p>
                </div>
                <div className="point">
                  <Image
                    src="/images/home/grow-with-us/ultimate-experience/bullet.svg"
                    width={10}
                    height={10}
                    alt="savings"
                    className="card-image"
                  />
                  <p className="point-text">Sovereign data</p>
                </div>
                <div className="point">
                  <Image
                    src="/images/home/grow-with-us/ultimate-experience/bullet.svg"
                    width={10}
                    height={10}
                    alt="savings"
                    className="card-image"
                  />
                  <p className="point-text">Complete Privacy</p>
                </div>
              </div>
            </div>
            <div className="card">
              <Image
                src="/images/home/grow-with-us/ultimate-experience/discounts-dema.svg"
                width={64}
                height={64}
                alt="savings"
                className="card-image"
              />
              <h3 className="card-title">Discounts</h3>
              <div className="bullet-points">
                <div className="point">
                  <Image
                    src="/images/home/grow-with-us/ultimate-experience/bullet.svg"
                    width={10}
                    height={10}
                    alt="savings"
                    className="card-image"
                  />
                  <p className="point-text">$30 Coupons</p>
                </div>
                <div className="point">
                  <Image
                    src="/images/home/grow-with-us/ultimate-experience/bullet.svg"
                    width={10}
                    height={10}
                    alt="savings"
                    className="card-image"
                  />
                  <p className="point-text">$25 Lowest seller</p>
                </div>
                <div className="point">
                  <Image
                    src="/images/home/grow-with-us/ultimate-experience/bullet.svg"
                    width={10}
                    height={10}
                    alt="savings"
                    className="card-image"
                  />
                  <p className="point-text">$20 Good shopper</p>
                </div>
              </div>
            </div>
            <div className="card">
              <Image
                src="/images/home/grow-with-us/ultimate-experience/ownership-dema.svg"
                width={64}
                height={64}
                alt="savings"
                className="card-image"
              />
              <h3 className="card-title">Ownership</h3>
              <div className="bullet-points">
                <div className="point">
                  <Image
                    src="/images/home/grow-with-us/ultimate-experience/bullet.svg"
                    width={10}
                    height={10}
                    alt="savings"
                    className="card-image"
                  />
                  <p className="point-text">Get Free ownership</p>
                </div>
                <div className="point">
                  <Image
                    src="/images/home/grow-with-us/ultimate-experience/bullet.svg"
                    width={10}
                    height={10}
                    alt="savings"
                    className="card-image"
                  />
                  <p className="point-text">1500 free points</p>
                </div>
                <div className="point">
                  <Image
                    src="/images/home/grow-with-us/ultimate-experience/bullet.svg"
                    width={10}
                    height={10}
                    alt="savings"
                    className="card-image"
                  />
                  <p className="point-text">100% govern</p>
                </div>
              </div>
            </div>
            <div className="card">
              <Image
                src="/images/home/grow-with-us/ultimate-experience/delivery-dema.svg"
                width={64}
                height={64}
                alt="savings"
                className="card-image"
              />
              <h3 className="card-title">Delivery</h3>
              <div className="bullet-points">
                <div className="point">
                  <Image
                    src="/images/home/grow-with-us/ultimate-experience/bullet.svg"
                    width={10}
                    height={10}
                    alt="savings"
                    className="card-image"
                  />
                  <p className="point-text">5 days delivery</p>
                </div>
                <div className="point">
                  <Image
                    src="/images/home/grow-with-us/ultimate-experience/bullet.svg"
                    width={10}
                    height={10}
                    alt="savings"
                    className="card-image"
                  />
                  <p className="point-text">30 days returns</p>
                </div>
                <div className="point">
                  <Image
                    src="/images/home/grow-with-us/ultimate-experience/bullet.svg"
                    width={10}
                    height={10}
                    alt="savings"
                    className="card-image"
                  />
                  <p className="point-text">3+ Return options</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Up */}
      <div className="box-content" style={{position: 'absolute'}}>
      <div className="ultimate-experience content">
          <div className="section-title">
            <h2>
              Your Ultimate Shopping <br />
              Experience Begins on Amazon
            </h2>
          </div>
          <div className="cards-container-amazon">
          <div className="card">
              <Image
                src="/images/home/grow-with-us/ultimate-experience/annual-fee-amazon.svg"
                width={64}
                height={64}
                alt="savings"
                className="card-image"
              />
              <h3 className="card-title">Annual Fee</h3>
              <div className="bullet-points">
                <div className="point">
                  <Image
                    src="/images/home/grow-with-us/ultimate-experience/bullet.svg"
                    width={10}
                    height={10}
                    alt="savings"
                    className="card-image"
                  />
                  <p className="point-text">$150</p>
                </div>
                <div className="point">
                  <Image
                    src="/images/home/grow-with-us/ultimate-experience/bullet.svg"
                    width={10}
                    height={10}
                    alt="savings"
                    className="card-image"
                  />
                  <p className="point-text">No points</p>
                </div>
              </div>
            </div>
            <div className="card">
              <Image
                src="/images/home/grow-with-us/ultimate-experience/savings-amazon.svg"
                width={64}
                height={64}
                alt="savings"
                className="card-image"
              />
              <h3 className="card-title">Savings</h3>
              <div className="bullet-points">
                <div className="point">
                  <Image
                    src="/images/home/grow-with-us/ultimate-experience/bullet.svg"
                    width={10}
                    height={10}
                    alt="savings"
                    className="card-image"
                  />
                  <p className="point-text">No Cashback</p>
                </div>
                <div className="point">
                  <Image
                    src="/images/home/grow-with-us/ultimate-experience/bullet.svg"
                    width={10}
                    height={10}
                    alt="savings"
                    className="card-image"
                  />
                  <p className="point-text">No Tax Savings</p>
                </div>
                <div className="point">
                  <Image
                    src="/images/home/grow-with-us/ultimate-experience/bullet.svg"
                    width={10}
                    height={10}
                    alt="savings"
                    className="card-image"
                  />
                  <p className="point-text">No Saving Points</p>
                </div>
              </div>
            </div>
            <div className="card">
              <Image
                src="/images/home/grow-with-us/ultimate-experience/control-amazon.svg"
                width={64}
                height={64}
                alt="savings"
                className="card-image"
              />
              <h3 className="card-title">Control</h3>
              <div className="bullet-points">
                <div className="point">
                  <Image
                    src="/images/home/grow-with-us/ultimate-experience/bullet.svg"
                    width={10}
                    height={10}
                    alt="savings"
                    className="card-image"
                  />
                  <p className="point-text">Platform Control</p>
                </div>
                <div className="point">
                  <Image
                    src="/images/home/grow-with-us/ultimate-experience/bullet.svg"
                    width={10}
                    height={10}
                    alt="savings"
                    className="card-image"
                  />
                  <p className="point-text">Full Data Access</p>
                </div>
                <div className="point">
                  <Image
                    src="/images/home/grow-with-us/ultimate-experience/bullet.svg"
                    width={10}
                    height={10}
                    alt="savings"
                    className="card-image"
                  />
                  <p className="point-text">No Privacy</p>
                </div>
              </div>
            </div>
            <div className="card">
              <Image
                src="/images/home/grow-with-us/ultimate-experience/discounts-amazon.svg"
                width={64}
                height={64}
                alt="savings"
                className="card-image"
              />
              <h3 className="card-title">Discounts</h3>
              <div className="bullet-points">
                <div className="point">
                  <Image
                    src="/images/home/grow-with-us/ultimate-experience/bullet.svg"
                    width={10}
                    height={10}
                    alt="savings"
                    className="card-image"
                  />
                  <p className="point-text">No Auto Coupons</p>
                </div>
                <div className="point">
                  <Image
                    src="/images/home/grow-with-us/ultimate-experience/bullet.svg"
                    width={10}
                    height={10}
                    alt="savings"
                    className="card-image"
                  />
                  <p className="point-text">No Lowest seller</p>
                </div>
                <div className="point">
                  <Image
                    src="/images/home/grow-with-us/ultimate-experience/bullet.svg"
                    width={10}
                    height={10}
                    alt="savings"
                    className="card-image"
                  />
                  <p className="point-text">No Good shopper</p>
                </div>
              </div>
            </div>
            <div className="card">
              <Image
                src="/images/home/grow-with-us/ultimate-experience/ownership-amazon.svg"
                width={64}
                height={64}
                alt="savings"
                className="card-image"
              />
              <h3 className="card-title">Ownership</h3>
              <div className="bullet-points">
                <div className="point">
                  <Image
                    src="/images/home/grow-with-us/ultimate-experience/bullet.svg"
                    width={10}
                    height={10}
                    alt="savings"
                    className="card-image"
                  />
                  <p className="point-text">No Free ownership</p>
                </div>
                <div className="point">
                  <Image
                    src="/images/home/grow-with-us/ultimate-experience/bullet.svg"
                    width={10}
                    height={10}
                    alt="savings"
                    className="card-image"
                  />
                  <p className="point-text">No points</p>
                </div>
                <div className="point">
                  <Image
                    src="/images/home/grow-with-us/ultimate-experience/bullet.svg"
                    width={10}
                    height={10}
                    alt="savings"
                    className="card-image"
                  />
                  <p className="point-text">No governance rights</p>
                </div>
              </div>
            </div>
            <div className="card">
              <Image
                src="/images/home/grow-with-us/ultimate-experience/delivery-amazon.svg"
                width={64}
                height={64}
                alt="savings"
                className="card-image"
              />
              <h3 className="card-title">Delivery</h3>
              <div className="bullet-points">
                <div className="point">
                  <Image
                    src="/images/home/grow-with-us/ultimate-experience/bullet.svg"
                    width={10}
                    height={10}
                    alt="savings"
                    className="card-image"
                  />
                  <p className="point-text">2 days delivery</p>
                </div>
                <div className="point">
                  <Image
                    src="/images/home/grow-with-us/ultimate-experience/bullet.svg"
                    width={10}
                    height={10}
                    alt="savings"
                    className="card-image"
                  />
                  <p className="point-text">30 days returns</p>
                </div>
                <div className="point">
                  <Image
                    src="/images/home/grow-with-us/ultimate-experience/bullet.svg"
                    width={10}
                    height={10}
                    alt="savings"
                    className="card-image"
                  />
                  <p className="point-text">6+ Return options</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default UltimateExperience;
