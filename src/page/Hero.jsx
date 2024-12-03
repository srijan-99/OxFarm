import React from 'react';

const Hero = () => {
  return (
    <div>
      <style>
        {`
          @media (min-width: 1400px) {
            .Hero_Section {
              padding: 5rem 10rem; /* Adjust padding for larger screens */
            }

            .hero_Heading {
              font-size: 3.5rem; /* Larger font size for headings */
            }

            .sub_heading {
              font-size: 1.5rem; /* Slightly larger font for subheading */
            }

            .card {
              margin: 2rem; /* Add some margin to cards on large screens */
            }

            .buttonlist {
              display: flex;
              justify-content: space-around; /* Even spacing for stats list */
              gap: 2rem; /* Adjust spacing between items */
            }
          }
        `}
      </style>

      <div className="container-fluid Hero_Section">
        <div className="container h-100">
          <div className="row h-100">
            {/* Left Column */}
            <div className="col-md-6 d-flex align-items-start justify-content-sm-center flex-column">
              <h1 className="hero_Heading">WYscale Powered</h1>
              <h1 className="hero_Heading">D-aaps (Decentralized Applications)</h1>
              <p className="sub_heading">Meet Co-dapps partners of WYscale.</p>
            </div>

            {/* Right Column */}
            <div className="col-md-6 d-flex align-items-start justify-content-sm-center flex-column">
              <div className="card border-0">
                <div className="card-body">
                  <div className="card-heading">Discover the Best DeFi Opportunities</div>
                  <div className="card-perograph">
                    WYscale is the best place to explore, compare, and participate in the DeFi economy. Pools, staking,
                    and other yield opportunities are aggregated from the top protocols and WYscale-powered Co-dapps protocol.
                  </div>

                  {/* Stats List */}
                  <ul className="buttonlist">
                    <li>
                      <div className="tophed">$3.02M</div>
                      <div className="bottomp">TVL</div>
                    </li>
                    <li>
                      <div className="tophed">129.35K</div>
                      <div className="bottomp">Transaction</div>
                    </li>
                    <li>
                      <div className="tophed">173</div>
                      <div className="bottomp">Farms</div>
                    </li>
                  </ul>

                  <p className="card-perograph">* Total WYscale Protocol stats</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
