

//  For Real api


// import React, { useState, useEffect } from 'react';

// const TransactionHistory = () => {
//   const [transactions, setTransactions] = useState([]);
//   const [visibleItems, setVisibleItems] = useState(3);
//   const [loading, setLoading] = useState(true);

//   // Fetch data from the API
//   useEffect(() => {
//     const fetchTransactions = async () => {
//       try {
//         const response = await fetch('https://your-api-endpoint.com/transactions');
//         const data = await response.json();
//         setTransactions(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching transactions:', error);
//         setLoading(false);
//       }
//     };

//     fetchTransactions();
//   }, []);

//   const loadMore = () => {
//     setVisibleItems((prev) => prev + 3);
//   };

//   if (loading) {
//     return <div style={{ textAlign: 'center', color: '#ccc', fontSize: '16px', marginTop: '20px' }}>Loading...</div>;
//   }

//   return (
//     <div
//       style={{
//         maxWidth: '100%',
//         margin: '20px auto',
//         padding: '10px',
//         color: '#fff',
//         backgroundColor: '#1a1a1a',
//         borderRadius: '10px',
//         boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
//       }}
//     >
//       <h2 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '18px' }}>Transaction History</h2>
//       <div style={{ display: 'grid', gap: '10px' }}>
//         <div
//           style={{
//             display: 'grid',
//             gridTemplateColumns: '1.5fr 1fr 1fr 1.5fr 1fr',
//             alignItems: 'center',
//             padding: '10px',
//             backgroundColor: '#333',
//             borderRadius: '8px',
//             fontWeight: 'bold',
//             color: '#ccc',
//           }}
//         >
//           <div>Deposits / Withdrawals</div>
//           <div>Tokens Staked</div>
//           <div>Earnings</div>
//           <div>Transaction</div>
//           <div>Time</div>
//         </div>
//         {transactions.slice(0, visibleItems).map((tx, index) => (
//           <div
//             key={index}
//             style={{
//               display: 'grid',
//               gridTemplateColumns: '1.5fr 1fr 1fr 1.5fr 1fr',
//               alignItems: 'center',
//               padding: '10px',
//               backgroundColor: '#2a2a2a',
//               borderRadius: '8px',
//               fontSize: '14px',
//               color: '#eee',
//             }}
//           >
//             <div>{tx.type}</div>
//             <div>{tx.tokens}</div>
//             <div>{tx.earnings}</div>
//             <div>{tx.transactionHash}</div>
//             <div>{tx.time}</div>
//           </div>
//         ))}
//         {visibleItems < transactions.length && (
//           <button
//             onClick={loadMore}
//             style={{
//               margin: '20px auto',
//               padding: '10px 20px',
//               color: '#fff',
//               backgroundColor: '#444',
//               border: 'none',
//               borderRadius: '5px',
//               cursor: 'pointer',
//               display: 'block',
//             }}
//           >
//             Show More +
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TransactionHistory;
// import React, { useState, useEffect } from 'react';

// const TransactionHistory = () => {
//   const transactions = [
//     { type: 'Farming', tokens: '90.47K WYS', earnings: '0 WYS', tx: '0x70bc...31da', time: '7h 20m ago' },
//     { type: 'Harvesting', tokens: '100K WYS', earnings: '6,671.02 WYS', tx: '0x6ab9...13c4', time: '8h 30m ago' },
//     { type: 'Harvesting', tokens: '102.07K WYS', earnings: '6,830.17 WYS', tx: '0xb2f4...152c', time: '8h 54m ago' },
//     { type: 'hARVESTING', tokens: '10 WYS', earnings: '0.66 WYS', tx: '0x29bf...574e', time: '8h 54m ago' },
//   ];

//   const [visibleItems, setVisibleItems] = useState(3);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   // Check screen size on window resize
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const loadMore = () => {
//     setVisibleItems((prev) => prev + 3);
//   };

//   return (
//     <>
//       <h2
//         style={{
//           textAlign: 'center',
//           marginBottom: '20px',
//           fontSize: '36px',
//           color: '#ffffff',
//           lineHeight: '44px',
//           fontWeight: '600',
//           marginTop: '40px',
//         }}
//       >
//         Transaction History
//       </h2>
//       <div
//         style={{
//           maxWidth: '100%',
//           margin: '30px auto',
//           padding: '10px',
//           color: '#fff',
//           // marginLeft: '90px',
//           textAlign:'center'
//         }}
//       >
//         <div
//           style={{
//             display: 'grid',
//             gap: '10px',
//           }}
//         >
//           {/* Table Header */}
//           <div
//             style={{
//               display: 'grid',
//               gridTemplateColumns: isMobile ? '1fr 1fr' : '1.5fr 1fr 1fr 1fr 1fr',
//               alignItems: 'center',
//               padding: '10px',
//               fontWeight: 'bold',
//               color: '#ccc',
//             }}
//           >
//             <div>Farming / harvest</div>
//             <div>Tokens Farms</div>
//             {!isMobile && <div>Earnings</div>}
//             {!isMobile && <div>Transaction</div>}
//             {!isMobile && <div>Time</div>}
//           </div>

//           {/* Table Rows */}
//           {transactions.slice(0, visibleItems).map((tx, index) => (
//             <div
//               key={index}
//               style={{
//                 display: 'grid',
//                 gridTemplateColumns: isMobile ? '1fr 1fr' : '1.5fr 1fr 1fr 1fr 1fr',
//                 alignItems: 'center',
//                 padding: '10px',
//                 fontSize: '14px',
//                 color: '#eee',
//               }}
//             >
//               <div>{tx.type}</div>
//               <div>{tx.tokens}</div>
//               {!isMobile && <div>{tx.earnings}</div>}
//               {!isMobile && <div>{tx.tx}</div>}
//               {!isMobile && <div>{tx.time}</div>}
//             </div>
//           ))}

//           {/* Load More Button */}
//           {visibleItems < transactions.length && (
//             <div style={{ display: 'flex', justifyContent: 'center' }}>
//               <button
//                 onClick={loadMore}
//                 style={{
//                   padding: '10px 20px',
              
//                   background: 'linear-gradient(45deg, #8fd41f 0%, #ffe569 40%)',




               

//                   border: 'none',
//                   borderRadius: '5px',
//                   cursor: 'pointer',
//                   // marginLeft:'-80px',
//                   textAlign:'center',
//                   marginTop:'20px',
//                   borderRadius:'15px'
//                 }}
//               >
//                 Show More +
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default TransactionHistory;

import React, { useState, useEffect } from 'react';

const TransactionHistory = () => {
  const transactions = [
    { type: 'Farming', tokens: '90.47K WYS', earnings: '0 WYS', tx: '0x70bc...31da', time: '7h 20m ago' },
    { type: 'Harvesting', tokens: '100K WYS', earnings: '6,671.02 WYS', tx: '0x6ab9...13c4', time: '8h 30m ago' },
    { type: 'Harvesting', tokens: '102.07K WYS', earnings: '6,830.17 WYS', tx: '0xb2f4...152c', time: '8h 54m ago' },
    { type: 'Harvesting', tokens: '10 WYS', earnings: '0.66 WYS', tx: '0x29bf...574e', time: '8h 54m ago' },
  ];

  const [visibleItems, setVisibleItems] = useState(3);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const loadMore = () => {
    setVisibleItems((prev) => prev + 3);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left',
  };

  const thStyle = {
    padding: '10px',
    backgroundColor: '#333',
    color: '#ccc',
    borderBottom: '2px solid #444',
  };

  const tdStyle = {
    padding: '10px',
    backgroundColor: '#2a2a2a',
    borderBottom: '1px solid #444',
    color: '#eee',
  };

  const containerStyle = {
    maxWidth: '90%',
    margin: '30px auto',
    padding: '20px',
    color: '#fff',
    backgroundColor: '#1a1a1a',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    color: '#fff',
    background: 'linear-gradient(45deg, #8fd41f 0%, #ffe569 40%)',
    border: 'none',
    borderRadius: '15px',
    cursor: 'pointer',
    color: 'black',
    fontWeight: 'bold',
  };

  return (
    <>
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '20px',
          fontSize: '36px',
          color: '#ffffff',
          lineHeight: '44px',
          fontWeight: '600',
          marginTop: '40px',
        }}
      >
        Transaction History
      </h2>
      <div style={containerStyle}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Farming / Harvest</th>
              <th style={thStyle}>Tokens Farmed</th>
              {!isMobile && <th style={thStyle}>Earnings</th>}
              {!isMobile && <th style={thStyle}>Transaction</th>}
              {!isMobile && <th style={thStyle}>Time</th>}
            </tr>
          </thead>
          <tbody>
            {transactions.slice(0, visibleItems).map((tx, index) => (
              <tr key={index}>
                <td style={tdStyle}>{tx.type}</td>
                <td style={tdStyle}>{tx.tokens}</td>
                {!isMobile && <td style={tdStyle}>{tx.earnings}</td>}
                {!isMobile && <td style={tdStyle}>{tx.tx}</td>}
                {!isMobile && <td style={tdStyle}>{tx.time}</td>}
              </tr>
            ))}
          </tbody>
        </table>
        {visibleItems < transactions.length && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button style={buttonStyle} onClick={loadMore}>
              Show More +
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default TransactionHistory;

