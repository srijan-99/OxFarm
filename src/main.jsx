import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'

import App from './App.jsx'


//Rainbow kit import 
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";


//create a custom blockchain
const wyz = {
  id: 309,// mainnet
  // id:303, testnet
  name: "WYZth Scan",
  network: "WYZth Scan",
  // iconUrl: 'https://example.com/icon.svg',
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "WYZ",
    symbol: "WYZ",
  },
  rpcUrls: {
    public: { http: ["https://rpc-testnet.wyzthchain.org"] },
    default: { http: ["https://rpc-testnet.wyzthchain.org"] },
  },
  blockExplorers: {
    default: { name: "WYZth Scan", url: "https://testnet.wyzthscan.org/" },
    etherscan: { name: "WYZth Scan", url: "https://testnet.wyzthscan.org/" },
  },
  testnet: false,
};

// to connect rainbow with custom
export const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [wyz],
  ssr: true, // If your dApp uses server side rendering (SSR)
});


// React-query client
const queryClient = new QueryClient();

const RootApp = () => {
  return (
    <WagmiProvider config={config} modalSize="compact">
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <BrowserRouter>
          <App />
          </BrowserRouter>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

createRoot(document.getElementById("root")).render(<RootApp />);
