import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faAngleRight, faLaptop, faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
// import eth from '../../images/homePage2/ethereum .png'
import eth from '../../images/homePage2/ethereum.png'

// Add icons to the library
library.add(faArrowLeft, faAngleRight, faLaptop, faChartSimple, faTwitter, faDiscord, faGithub);

function MeetPendle() {
  return (
    // <div className="row pb-md-5 pb-3">
  
    <div className="row pb-md-5 pb-3" style={{ marginLeft: "70px" }}>


      <div className="col-12" style={{marginLeft:'-30px'}}>
        <a className="backtolistbtn" href="/index.html">
          <span><FontAwesomeIcon icon={faArrowLeft} /></span> Back to List <span></span>
        </a>
      </div>

      <div className="col-md-6" style={{marginLeft:'-40px'}}>
        <div className="buttonGroup mb-3">
          <a href="#" className="btn Page2btn active px-3 fw-bold">Round Table Project</a>
          <a href="/0x.farm" target="_blank" rel="noopener noreferrer" className="btn  Page2btn fw-bold">
            Visit 0x.farm <span><FontAwesomeIcon icon={faAngleRight} className="text-white ms-2" style={{fontWeight:'400'}} /></span>
          </a>
        </div>

        <div className="Heading">Meet <span>0x.farm</span></div>
        <p className="perograph">
        Grow Your DeFi Assets with 0x.Farm
Maximize your earnings with our secure and efficient yield farming platform. Invest, farm, and harvest rewards seamlessly.

Enjoy competitive yields, a user-friendly interface, and the confidence of robust security protocols with decentralization. Watch your $WYS grow while you sit back and let 0x.Farm do the work for you.

Start Farming Now!
        </p>
        <div className="linkheading mb-3">Find us</div>
      <ul className="sociallink">
        <li><a href=""><i className="fa-brands fa-twitter"></i></a></li>
        <li><a href=""><i className="fa-brands fa-discord"></i></a></li>
        <li><a href=""><i className="fa-solid fa-laptop"></i></a></li>
        <li><a href=""><i className="fa-solid fa-chart-simple"></i></a></li>
        <li><a href=""><i className="fa-brands fa-github"></i></a></li>
      </ul>

   
      </div>
      

      {/* <div className="col-md-6">
        <div className="image" style={{marginLeft:'80px'}}>
          <img className="w-90 h-80 p-4" src={eth} alt="Project Icon" />
        </div>
      </div>
    </div> */}
    <div className="col-12 col-md-6 d-flex justify-content-center">
  <div className="image">
    <img className="img-fluid logo-img p-3" src={eth} alt="Project Icon"/>
  </div>
</div>

</div>


  );
}

export default MeetPendle;
