import React from 'react';
// import WyzLogo from '../images/logo/WyzLogo.png'

const Footer = () => {
  return (
    <footer className="container-fluid py-5" >
      <div className="container">
        <div className="row">
          <div className="col-md-8" >
            <div className="logo">
              {/* <img  src={WyzLogo} alt="logo"
              style={{
             
                width:'150px',
                // marginTop:'-50px',
                marginLeft:'-10px',
                marginBottom:'30px'

              }} /> */}
              
            </div>
          </div>
          <div className="col-md-2">
            <div className="footerHeading" >Explore</div>
            <ul className="footerlist">
              <li><a href="">Newbies</a></li>
              <li><a href="">Knowledge Base</a></li>
              <li><a href="">Strategies</a></li>
              <li><a href="">Terms & Services</a></li>
              <li><a href="">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <div className="footerHeading">Follow Us</div>
            <ul className="footerlist">
              <li><a href="">Twitter</a></li>
              <li><a href="">Instagram</a></li>
              <li><a href="">Telegram</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footerbottomheading">Disclaimer</div>
            <p>
              <span className="pe-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="6"
                  width="6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
                </svg>
              </span>
              There are substantial risks in investing in a Crypto Portfolio. Persons interested in investing
              in a Crypto Portfolio should carefully note the following:
            </p>
            <p>
              <span className="pe-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="6"
                  width="6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
                </svg>
              </span>
              WYscale is not a broker-dealer, exchange, custodian, or wallet provider, and is not intended for
              frequent trading activity. Investing in digital assets is highly speculative and volatile and
              WYscale is only suitable for investors who are willing to bear the risk of loss and experience
              sharp drawdowns.
            </p>
            <p>
              <span className="pe-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="6"
                  width="6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
                </svg>
              </span>
              WYscale do not offer tax, financial, accounting or legal advice. Carefully consider the risk
              factors, investment objectives, fees, expenses, and other information associated with before
              making an investment decision. All investments are speculative, may be illiquid and involve a
              high degree of risk, uncertainty, and there is risk of the complete loss of the investment.
              There is no guarantee that any specific outcome will be achieved. Since each individual's
              situation is unique, a qualified professional should always be consulted before making any
              financial decisions.
            </p>
            <p>
              <span className="pe-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="6"
                  width="6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
                </svg>
              </span>
              The information provided within this website within it is not intended as an offer to sell, or
              the solicitation of an offer to buy/invest in any digital assets & funds. Such offerings may
              only be made by prospectus and offering documents.
            </p>
            <p>
              <span className="pe-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="6"
                  width="6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
                </svg>
              </span>
              WYscale would like to remind you that the data contained in this website is not necessarily
              real-time nor accurate. All cryptocurrencies, baskets, ETF, and fund prices are not provided by
              us but rather by market makers, and so prices may not be accurate and may differ from the actual
              market price, meaning prices are indicative and not appropriate for trading purposes. Images,
              charts & stats on this page include illustrations of user experiences intended to demonstrate
              the format of WYscale's interface. These images do not reflect actual or performance of our
              recommendations. Past performance is not a guarantee of future results.
            </p>
            <p>
              <span className="pe-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="6"
                  width="6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
                </svg>
              </span>
              For more complete disclosures and information about how WYscale works, please visit our Terms of
              Service and Help Center.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
