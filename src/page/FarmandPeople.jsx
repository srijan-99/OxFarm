import React from 'react';
import {Link} from 'react-router-dom'
import { MdOutlineGridView } from "react-icons/md";
import SearchBar from './SearchBar'

const FarmAndPeople = () => {
  const data = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig'];
  return (

  
  
  
   
 



    <div className="container-fluid Farm_People_Section py-lg-4"  >
        {/* container-main */}
      <div className="container"  style={{  backgroundColor: ' #1a1a1a',borderRadius:'15px'}}>
      <div >
        <div className="row">
    
          <div className="col-md-4" style={{marginTop:'20px'}}>
            <div className="heading">Farms and Pools</div>
          </div>
          <div className="col-md-8">
            <form className="d-flex align-items-center justify-content-end gap-2 form" action="">
              <div className="inputpart" >
                <div className="icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.33333 14.1667C11.555 14.1667 14.1667 11.555 14.1667 8.33333C14.1667 5.11167 11.555 2.5 8.33333 2.5C5.11167 2.5 2.5 5.11167 2.5 8.33333C2.5 11.555 5.11167 14.1667 8.33333 14.1667Z"
                      stroke="#868990" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"
                    />
                    <path d="M17.5 17.5L12.5 12.5" stroke="#868990" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

               <SearchBar data = {data} style={{marginBottom:'10px'}}/>

               

              </div>
              <div className="tabssec" >
                <ul className="nav nav-pills mb-0" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="pills-AllForms-tab" data-bs-toggle="pill" data-bs-target="#pills-AllForms" type="button" role="tab" aria-controls="pills-AllForms" aria-selected="true">All Forms</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-TokensFarm-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-TokensFarm"
                      type="button"
                      role="tab"
                      aria-controls="pills-TokensFarm"
                      aria-selected="false"
                    >
                      TokensFarm
                    </button>
                  </li>
                </ul>
              </div>
             
             <Link to='/farm'>
              <MdOutlineGridView  style={{color:'white',size:'{80}'}}/>
              </Link>
            </form>
          </div>
        </div>
       

        {/* //section -3 */}
        {/* Updated section */}
   
        <div className="iconimage">
         <img  src="../images/homepage/iconlogo.svg" alt=""/>
        </div>
     
                                           

       
        <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
 
    padding:'10px',
    borderRadius:'15px',
   
  backgroundColor:'#1f1f1f ',

  marginLeft:'10px'

}}>
    {/* Header Section */}
    <h2 style={{
        fontSize: '1.5rem',
        margin: '0',
        display: 'flex',
        alignItems: 'center',
        backgorundColor:'#4d4d4d',
        borderRadius:'15px',
        color:'#FFFFFF',
      
      
     
    }}>
        0x.farm <span style={{ marginLeft: '5px' }}>🔥</span>
    </h2>

    {/* Button Row and View Section in a Single Flex Row */}
  
    <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginTop: '10px',
    justifyContent: 'space-between',
  
}}>

  
        <div style={{ display: 'flex', gap: '10px' }}>
  {['yield', 'yield-trading', 'fixed-rate'].map((text, i) => (
    <div
      key={i + "btn"}
      style={{
        backgroundColor: '#2A2F44',
        color: '#FFC700',
        padding: '8px 12px',
        borderRadius: '10px',
        fontWeight: 'bold',
        fontSize: '0.9rem',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        cursor:'Pointer'
      }}
    >
      {text}
    </div>
  ))}
</div>



        <div>
    

        {/* View Button */}
        <Link to='/co-dapp/0x-farm' style={{
            textDecoration: 'none',
            color: '#BFC3CD',
            fontSize: '0.9rem',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            backgroundColor: '#2A2F44',
            padding: '8px 12px',
            borderRadius: '10px',
            // marginLeft: 'auto',
            marginRight:'10px'  // Pushes the view button to the right
        }}>
            View →
        </Link>

        {/* Profile Icons */}
        {/* <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            marginTop:'20px'
          
        }}>
            {[...Array(3)].map((_, index) => (
                <div key={index} style={{
                    width: '30px',
                    height: '30px',
                    backgroundColor: '#BFC3CD',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                }}>
                    <div style={{
                        width: '10px',
                        height: '30px',
                        backgroundColor: '#131A29',
                        borderRadius: '5px',
                        position: 'absolute',
                        top: '5px',
                    }}></div>
                    <div style={{
                        width: '15px',
                        height: '15px',
                        backgroundColor: '#253363',
                        borderRadius: '50%',
                        position: 'absolute',
                        bottom: '-2px',
                    }}></div>
                </div>
            ))}
        </div> */}
    </div>
    </div>

    {/* Stats Section */}
    <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        marginTop: '15px',
    }}>
        {[
            { icon: '💲', value: '$426.1k', label: 'TVL' },
            { icon: '🔄', value: '$160.3k', label: '24h volume' }
        ].map((stat) => (
            <div key={stat.label} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
            }}>
                <div style={{
                    backgroundColor: '#FFC700',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    color: '#131A29',
                }}>
                    {stat.icon}
                </div>
                <div>
                    <div style={{ fontWeight: 'bold', color: '#FFC700', fontSize: '1rem' }}>{stat.value}</div>
                    <div style={{ color: '#BFC3CD', fontSize: '0.75rem' }}>{stat.label}</div>
                </div>
            </div>
        ))}
    </div>
</div>







       



      </div>
    </div>
    </div>
 
  );
};

export default FarmAndPeople;
