import React, { useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { MdSwapVert } from "react-icons/md";

const SwapComponent = () => {
  // State to manage "From" and "To" sections
  const [fromToken, setFromToken] = useState({ token: "ETHEREUM", symbol: "ETH", amount: "" });
  const [toToken, setToToken] = useState({ token: "WYZTH", symbol: "Wrapped ETH", amount: "" });

  // Swap handler
  const handleSwap = () => {
    setFromToken(toToken);
    setToToken(fromToken);
  };

  return (
    <div style={styles.container}>
      {/* From Section */}
      <div style={styles.box}>
        <div style={styles.row}>
          <label style={styles.label}>From</label>
          <div style={styles.tokenSelect}>
            <FaEthereum size={20} style={styles.icon} />
            <select
              style={styles.select}
              value={fromToken.token}
              onChange={(e) =>
                setFromToken({ ...fromToken, token: e.target.value })
              }
            >
              <option value="ETHEREUM">ETHEREUM</option>
              <option value="BINANCE">BINANCE</option>
              <option value="WYZTH">WYZTH</option>
              <option value="ARBITRUM">ARBITRUM</option>
              <option value="POLYGON">POLYGON</option>
            </select>
            <select
              style={styles.select}
              value={fromToken.symbol}
              onChange={(e) =>
                setFromToken({ ...fromToken, symbol: e.target.value })
              }
            >
              <option value="ETH">ETH</option>
            </select>
          </div>
        </div>
        <div style={styles.amountRow}>
          <input
            type="text"
            placeholder="Amount"
            value={fromToken.amount}
            onChange={(e) =>
              setFromToken({ ...fromToken, amount: e.target.value })
            }
            style={styles.input}
          />
          <button style={styles.maxButton}>Max</button>
          <p style={styles.balanceText}>Balance 0 ETH</p>
        </div>
      </div>

      {/* Swap Button */}
      <button style={styles.swapButton} onClick={handleSwap}>
        <MdSwapVert size={24} />
      </button>

      {/* To Section */}
      <div style={styles.box}>
        <div style={styles.row}>
          <label style={styles.label}>To</label>
          <div style={styles.tokenSelect}>
            <FaEthereum size={20} style={styles.icon} />
            <select
              style={styles.select}
              value={toToken.token}
              onChange={(e) =>
                setToToken({ ...toToken, token: e.target.value })
              }
            >
              <option value="WYZTH">WYZTH</option>
              <option value="ETHEREUM">ETHEREUM</option>
              <option value="BINANCE">BINANCE</option>
              <option value="ARBITRUM">ARBITRUM</option>
              <option value="POLYGON">POLYGON</option>
            </select>
            <select
              style={styles.select}
              value={toToken.symbol}
              onChange={(e) =>
                setToToken({ ...toToken, symbol: e.target.value })
              }
            >
              <option value="Wrapped ETH">Wrapped ETH</option>
            </select>
          </div>
        </div>
        <input
          type="text"
          placeholder="0"
          value={toToken.amount}
          readOnly
          style={styles.input}
        />
      </div>

      {/* Fee and Connect Wallet Section */}
      <div style={styles.footer}>
        <p style={styles.feeText}>0 Gwei</p>
        <div style={styles.estimatedFee}>
          <span style={styles.boost}>Boost ~ 20s</span>
        </div>
        <button style={styles.connectButton}>Connect Wallet</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width:'fit-content',
    marginLeft:'40px',
    margin: "auto",
    backgroundColor: "rgb(25 25 28 / var(--tw-bg-opacity, 1))",
    padding: "20px",
    borderRadius: "12px",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)",
  
  },
  box: {
    backgroundColor: "#1e1e1e",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  label: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  tokenSelect: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  select: {
    backgroundColor: "#2a2a2a",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "8px",
    outline: "none",
    fontSize: "14px",
  },
  icon: {
    color: "#fff",
  },
  amountRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    width: "65%",
    padding: "10px",
    backgroundColor: "#2a2a2a",
    color: "#fff",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    fontSize: "14px",
  },
  maxButton: {
    backgroundColor: "#f5b81c",
    color: "#121212",
    border: "none",
    padding: "5px 10px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "12px",
    marginLeft: "10px",
  },
  balanceText: {
    fontSize: "12px",
    color: "#888",
    marginLeft: "10px",
  },
  swapButton: {
    backgroundColor: "#f5b81c",
    color: "#121212",
    border: "none",
    borderRadius: "50%",
    padding: "10px",
    cursor: "pointer",
    margin: "10px auto",
    display: "block",
  },
  footer: {
    textAlign: "center",
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
  },
  feeText: {
    fontSize: "14px",
    color: "#888",
    marginBottom: "10px",
  },
  estimatedFee: {
    backgroundColor: "#2a2a2a",
    padding: "5px 10px",
    borderRadius: "8px",
    display: "inline-block",
    marginBottom: "10px",
  },
  boost: {
    color: "#f5b81c",
    fontSize: "12px",
    fontWeight: "bold",
  },
  connectButton: {
    backgroundColor: "#f5b81c",
    color: "#121212",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default SwapComponent;





















// import React from "react";
// import { FaEthereum } from "react-icons/fa";
// import { MdSwapVert } from "react-icons/md";

// const SwapComponent = () => {
//   return (
//     <div style={styles.container}>
//       {/* From Section */}
//       <div style={styles.box}>
//         <div style={styles.row}>
//           <label style={styles.label}>From</label>
//           <div style={styles.tokenSelect}>
//             <FaEthereum size={20} style={styles.icon} />
//             <select style={styles.select}>
//               <option value="ETH">ETHEREUM</option>
//             </select>
//             <select style={styles.select}>
//               <option value="ETH">ETH</option>
//             </select>
//           </div>
//         </div>
//         <div style={styles.amountRow}>
//           <input type="text" placeholder="Amount" style={styles.input} />
//           <button style={styles.maxButton}>Max</button>
//           <p style={styles.balanceText}>Balance 0 ETH</p>
//         </div>
//       </div>

//       {/* Swap Button */}
//       <button style={styles.swapButton}>
//         <MdSwapVert size={24} />
//       </button>

//       {/* To Section */}
//       <div style={styles.box}>
//         <div style={styles.row}>
//           <label style={styles.label}>To</label>
//           <div style={styles.tokenSelect}>
//             <FaEthereum size={20} style={styles.icon} />
//             <select style={styles.select}>
//               <option value="WYZTH">WYZTH</option>
//             </select>
//             <select style={styles.select}>
//               <option value="Wrapped ETH">Wrapped ETH</option>
//             </select>
//           </div>
//         </div>
//         <input type="text" placeholder="0" style={styles.input} readOnly />
//       </div>

//       {/* Fee and Connect Wallet Section */}
//       <div style={styles.footer}>
//         <p style={styles.feeText}>0 Gwei</p>
//         <div style={styles.estimatedFee}>
//           <span style={styles.boost}>Boost ~ 20s</span>
//         </div>
//         <button style={styles.connectButton}>Connect Wallet</button>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     width: "400px",
//     margin: "auto",
//     // backgroundColor: "#121212",
//     backgroundColor: "rgb(25 25 28 / var(--tw-bg-opacity, 1))",
//     padding: "20px",
//     borderRadius: "12px",
//     color: "#fff",
//     fontFamily: "Arial, sans-serif",
//     boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)",
//   },
//   box: {
//     backgroundColor: "#1e1e1e",
//     padding: "15px",
//     borderRadius: "8px",
//     marginBottom: "10px",
//   },
//   row: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: "10px",
//   },
//   label: {
//     fontSize: "16px",
//     fontWeight: "bold",
//   },
//   tokenSelect: {
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//   },
//   select: {
//     backgroundColor: "#2a2a2a",
//     color: "#fff",
//     border: "none",
//     padding: "5px 10px",
//     borderRadius: "8px",
//     outline: "none",
//     fontSize: "14px",
//   },
//   icon: {
//     color: "#fff",
//   },
//   amountRow: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   input: {
//     width: "65%",
//     padding: "10px",
//     backgroundColor: "#2a2a2a",
//     color: "#fff",
//     borderRadius: "8px",
//     border: "none",
//     outline: "none",
//     fontSize: "14px",
//   },
//   maxButton: {
//     backgroundColor: "#f5b81c",
//     color: "#121212",
//     border: "none",
//     padding: "5px 10px",
//     borderRadius: "8px",
//     cursor: "pointer",
//     fontSize: "12px",
//     marginLeft: "10px",
//   },
//   balanceText: {
//     fontSize: "12px",
//     color: "#888",
//     marginLeft: "10px",
//   },
//   swapButton: {
//     backgroundColor: "#f5b81c",
//     color: "#121212",
//     border: "none",
//     borderRadius: "50%",
//     padding: "10px",
//     cursor: "pointer",
//     margin: "10px auto",
//     display: "block",
//   },
//   footer: {
//     textAlign: "center",
//     marginTop: "20px",
//     display: "flex",
//     flexDirection: "column"
//   },
//   feeText: {
//     fontSize: "14px",
//     color: "#888",
//     marginBottom: "10px",
//   },
//   estimatedFee: {
//     backgroundColor: "#2a2a2a",
//     padding: "5px 10px",
//     borderRadius: "8px",
//     display: "inline-block",
//     marginBottom: "10px",
//   },
//   boost: {
//     color: "#f5b81c",
//     fontSize: "12px",
//     fontWeight: "bold",
//   },
//   connectButton: {
//     backgroundColor: "#f5b81c",
//     color: "#121212",
//     border: "none",
//     padding: "10px 20px",
//     borderRadius: "8px",
//     cursor: "pointer",
//     fontWeight: "bold",
//   },
// };

// export default SwapComponent;
