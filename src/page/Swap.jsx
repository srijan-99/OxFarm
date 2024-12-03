import { ArrowDownUpIcon, Zap, LucideFuel } from "lucide-react";
import { useEffect, useState } from "react";
import PopupModals from "../Common/PopupModals";
import { useAccount, useBalance, useNetwork, useSwitchNetwork } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { toast } from "react-toastify";
import useContractService from "../../Hooks/useContractService";
import TransactionConfirmation from "../Popups/TransactionConfirmation";
import Select from "react-select";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import { ethers } from "ethers";
import { get } from "../../services/apiService";

const wyzthChainId = parseInt(import.meta.env.VITE_REACT_APP_WYZHT_CHAIN_ID);
const tokenAddressForPolygon = JSON.parse(
  import.meta.env.VITE_TOKEN_ADDRESS_WYZTH_FOR_POLYGON_USDT
);
const firstOptionData = [
  {
    value: wyzthChainId,
    text: "WYZTH",
    icon: <img src="/wyzth.svg" height={"10px"} width={"10px"} />,
  },
];
const secondOptionData = [
  {
    value: wyzthChainId,
    text: "WYZ",
    icon: <img src="/wyzth.svg" height={"10px"} width={"10px"} />,
  },
  {
    value: wyzthChainId,
    text: "WYS",
    icon: <img src="/wyscale.png" height={"10px"} width={"10px"} />,
  },
  {
    value: wyzthChainId,
    text: "fUSDT",
    icon: <img src="/usdt.svg" height={"10px"} width={"10px"} />,
  },
  {
    value: wyzthChainId,
    text: "stUSDT",
    icon: <img src="/usdt.svg" height={"10px"} width={"10px"} />,
  },
];
const thirdOptionData = [
  {
    value: wyzthChainId,
    text: "WYZTH",
    icon: <img src="/wyzth.svg" height={"10px"} width={"10px"} />,
  },
];

const forthOptionData = [
  {
    value: 5,
    text: "fUSDT",
    icon: <img src="/usdt.svg" height={"10px"} width={"10px"} />,
    chainId: wyzthChainId,
  },
  {
    value: 6,
    text: "stUSDT",
    icon: <img src="/usdt.svg" height={"10px"} width={"10px"} />,
    chainId: wyzthChainId,
  },
  {
    value: 7,
    text: "sUSDT",
    icon: <img src="/usdt.svg" height={"10px"} width={"10px"} />,
    chainId: wyzthChainId,
  },
];

function SwapPage() {
  const {
    calculateGasFee,
    getBalanceOfFUSDT,
    getBalanceOfSTUSDT,
    getBalanceOfWYS,
    getApprovalSwap,
    depositByWyzTHSwap,
    depositByWyzTHSwapWYZ,
  } = useContractService();
  const { chain } = useNetwork();
  const { switchNetworkAsync } = useSwitchNetwork();
  const { address, isConnected } = useAccount();
  const { data } = useBalance({ address });
  const [isEnableBooster, setIsEnableBooster] = useState(false);
  const [isPriceLoading, setIsPriceLoading] = useState(true);
  const [isTransaction, setIsTransaction] = useState(false);
  const [transactionMessage, setTransactionMessage] = useState(
    "Please wait..."
  );
  const [amount, setAmount] = useState(0); // '1' represents ETHERIUM
  const [fromAmount, setFromAmount] = useState(""); // '1' represents ETHERIUM
  const [amountToContract, setToContractAmount] = useState(0); // '1' represents ETHERIUM
  const [rapEthBalance, setRapEthBalance] = useState(0); // '1' represents ETHERIUM
  const [usdAmount, setUsdAmount] = useState(0);
  const [boostedGasFee, setBoostedGasFee] = useState("0");
  const [handleToggle, setToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedOption, setSelectedOption] = useState(firstOptionData[0]);
 
  const [
    selectedOptionInSecondSelect,
    setSelectedOptionInSecondSelect,
  ] = useState(secondOptionData[0]);

  const [
    selectedOptionInThirdSelect,
    setSelectedOptionInThirdSelect,
  ] = useState(thirdOptionData[0]);

  const [
    selectedOptionInForthSelect,
    setSelectedOptionInForthSelect,
  ] = useState(forthOptionData[2]);

  async function handleSubmit() {
    if (parseFloat(amountToContract) > 0) {
      await handleBridge_WYZ_WYS_fUSDT_stUSDT();
    } else {
      toast.error("The amount you entered is not valid");
    }
  }

  const handleBridge_WYZ_WYS_fUSDT_stUSDT = async () => {
    try {
      if (chain["id"] !== selectedOption.value) {
        return await switchNetworkAsync(parseInt(selectedOption.value));
      }
      setIsTransaction(true);
      const seed = createSeed();
      let options = null;
      if (isEnableBooster) {
        // Convert gasFee from Ether to Wei
        const vl = parseFloat(boostedGasFee);
        const gasFee = ethers.utils.parseUnits(vl.toFixed(9) + "", "gwei");
        // Create the options object with value and gasPrice
        options = {
          gasPrice: gasFee,
        };
      }
      if (selectedOptionInSecondSelect.text !== "WYZ") {
        setTransactionMessage("Waiting For Approval...");
        const approval = await getApprovalSwap(
          address,
          import.meta.env.VITE_WYZTH_SWAP,
          amountToContract,
          tokenAddressForPolygon[
            selectedOptionInSecondSelect.text == "WYS"
              ? 8
              : selectedOptionInSecondSelect.text == "fUSDT"
              ? 5
              : 6
          ].address,
          tokenAddressForPolygon[
              selectedOptionInSecondSelect.text == "stUSDT"
              ? 6
              :5
          ].address
        );
        if (approval) {
          await approval.wait();
        }
        setTransactionMessage("Waiting for transaction...");
        const result = await depositByWyzTHSwap(
          seed,
          amountToContract,
          tokenAddressForPolygon[
            selectedOptionInSecondSelect.text == "WYS"
            ? 8 :
            selectedOptionInSecondSelect.text == "fUSDT" ? 5 : 
             6 
          ].address,
          tokenAddressForPolygon[
            selectedOptionInForthSelect.text == "fUSDT" ? 5:6
          ].address,
          options
        );
        setTransactionMessage("Waiting for confirmation...");
        await result.wait();
        // storeTnx(result.hash);
      } else {
        if (isEnableBooster) {
          // Convert gasFee from Ether to Wei
          const vl = parseFloat(boostedGasFee);
          const gasFee = ethers.utils.parseUnits(vl.toFixed(9) + "", "gwei");
          // Create the options object with value and gasPrice
          options = {
            value: ethers.utils.parseEther(amountToContract),
            gasPrice: gasFee,
          };
        } else {
          options = {
            value: ethers.utils.parseEther(amountToContract),
          };
        }
        setTransactionMessage("Waiting for transaction...");
        const result = await depositByWyzTHSwapWYZ(
          seed,
          options,
          tokenAddressForPolygon[7].address
        );
        setTransactionMessage("Waiting for confirmation...");
        await result.wait();
        // storeTnx(result.hash);
      }
      toast.success("The transaction has been successfully done.");
      setIsTransaction(false);
      setAmount("");
      setFromAmount("");
      setToContractAmount("");
    } catch (error) {
      setIsTransaction(false);
      console.log(error);
      toast.error(error?.reason);
    }
  };

  //HANLE TRANSACTION CLOSE
  function handleTransactionDialogClose() {
    setIsTransaction(false);
  }

  //HANDLE TRANSACTION
  async function handleGasCalulation() {
    if (!amountToContract)
      return toast.error("please enter amount to calculate gas fee.");
    setIsLoading(!handleToggle);
    setIsEnableBooster(!handleToggle);
    if (!handleToggle) {
      const seed = createSeed();
      try {
        const gasFee = await calculateGasFee(
          seed,
          amountToContract,
          selectedOption,
          selectedOptionInSecondSelect
        );
        setToggle(!handleToggle);
        const increasedFee = (parseFloat(gasFee) * 2).toString();
        setBoostedGasFee(increasedFee);
        setIsLoading(handleToggle);
      } catch (error) {
        setIsLoading(handleToggle);
        toast.error(error?.reason);
        setIsEnableBooster(!handleToggle);
        console.log(error);
      }
    } else {
      setToggle(!handleToggle);
      setBoostedGasFee(0);
    }
  }
  const fetchWyzthPrice = async () => {
    try {
      const result = await get("getWyzthPrice");
      return Number(result.data.result[0].p);
    } catch (error) {
      toast.error("Unable to fetch wyzth price please refresh and try again.");
    }
  };

  async function handleAmountChange(event) {
    setFromAmount(event);
    if (event == 0) {
      setAmount(0);
      setToContractAmount(0);
      setFromAmount("");
    } else if (
      selectedOption.value == wyzthChainId &&
      selectedOptionInSecondSelect.text == "WYS" &&
      selectedOptionInThirdSelect.value == wyzthChainId
    ) {
      const setAmountxc = parseFloat(event) * usdAmount;
      setAmount(setAmountxc);
      setToContractAmount(event.toString());
    } else if (
      selectedOption.value == wyzthChainId &&
      selectedOptionInSecondSelect.text == "WYZ" &&
      selectedOptionInThirdSelect.value == wyzthChainId
    ) {
    const wyzthPrice = await fetchWyzthPrice()
      const setAmountxc = parseFloat(event) * wyzthPrice;
      setAmount(setAmountxc);
      setToContractAmount(event.toString());
    } else {
      setAmount(event);
      setToContractAmount(event.toString());
    }
  }

  //HANLE TRANSACTION CLOSE
  function handleTransactionDialogClose() {
    setIsTransaction(false);
  }

  //CREATE SEED
  function createSeed() {
    // Generate a random 16-byte array
    const randomArray = new Uint8Array(16);
    window.crypto.getRandomValues(randomArray);

    // Convert the current timestamp to a 4-byte (32-bit) hexadecimal value
    const timestamp = Math.floor(Date.now() / 1000)
      .toString(16)
      .padStart(8, "0");

    // Combine the timestamp and random number
    const combinedHex =
      timestamp +
      Array.from(randomArray)
        .map((byte) => byte.toString(16).padStart(2, "0"))
        .join("");

    // Add '0x' prefix to the combined hex string
    const seedHex = "0x" + combinedHex;

    return seedHex;
  }

  // handle onChange event of the dropdown
  const handleFirstSelectChange = async (option) => {
    setSelectedOption(option);
    setAmount("");
    setToContractAmount("");
    setFromAmount("");
  };

  const secondHandleChange = (option) => {
    setSelectedOptionInSecondSelect(option);
    if (option.text == "fUSDT") {
      setSelectedOptionInForthSelect(forthOptionData[1]);
    } else if (option.text == "WYZ") {
      setSelectedOptionInForthSelect(forthOptionData[2]);
    } else {
      setSelectedOptionInForthSelect(forthOptionData[0]);
    }
    setAmount("");
    setFromAmount("");
    setToContractAmount("");
  };

  //   const handleThirdChange = (option) => {
  //     setSelectedOptionInThirdSelect(option);
  //     if (option && option.value == wyzthChainId && option.text == "WYZTH") {
  //       setSelectedOptionInForthSelect(forthOptionData[4]);
  //     }
  //     if (option && option.value == arbChainId) {
  //       setSelectedOptionInForthSelect(forthOptionData[3]);
  //       setSelectedOptionInSecondSelect(secondOptionData[3]);
  //     }
  //     setAmount("");
  //     setFromAmount("");

  //     setToContractAmount("");
  //   };

  const forthHandleChange = (option) => {
    setSelectedOptionInForthSelect(option);
    setAmount("");
    setFromAmount("");
    setToContractAmount("");
  };

  //   //HANDLE SWITCH
  //   async function handleNetworkSwitch() {
  //     try {
  //       if (chain && chain["id"] === selectedOption.value) {
  //         return;
  //       } else if (switchNetworkAsync) {
  //         await switchNetworkAsync(parseInt(selectedOption.value));
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       throw error;
  //     }
  //   }

  useEffect(() => {
    async function fn() {
      try {
        setIsPriceLoading(true);
        if (
          chain &&
          chain["id"] == wyzthChainId &&
          selectedOptionInSecondSelect.text == "WYZ"
        ) {
          setRapEthBalance(parseFloat(data?.formatted).toFixed(4));
          setIsPriceLoading(false);
        } else if (
          chain &&
          chain["id"] == wyzthChainId &&
          selectedOptionInSecondSelect.text == "fUSDT"
        ) {
          const result = await getBalanceOfFUSDT(address);
          setRapEthBalance((parseInt(result._hex, 16) / 1e18).toFixed(4));
          setIsPriceLoading(false);
        } else if (
          chain &&
          chain["id"] == wyzthChainId &&
          selectedOptionInSecondSelect.text == "stUSDT"
        ) {
          const result = await getBalanceOfSTUSDT(address);
          setRapEthBalance((parseInt(result._hex, 16) / 1e6).toFixed(4));
          setIsPriceLoading(false);
        } else if (
          chain &&
          chain["id"] == wyzthChainId &&
          selectedOptionInSecondSelect.text == "WYS"
        ) {
          const result = await getBalanceOfWYS(address);
          setRapEthBalance((parseInt(result._hex, 16) / 1e18).toFixed(4));
          setIsPriceLoading(false);
        } else {
          setRapEthBalance(0);
          setIsPriceLoading(false);
        }
      } catch (error) {
        setRapEthBalance(0);
      }
    }
    fn();
  }, [data, selectedOption, selectedOptionInSecondSelect, amount]);

  async function getUsdAmount(ids) {
    try {
      if (ids == "wyscale") {
        const result = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`
        );
        setUsdAmount(result.data[ids].usd);
      }
    } catch (error) {
      console.log(error);
      getCurrenciesPrice(ids);
    }
  }

  //if currencies getting api fails then call
  const getCurrenciesPrice = async (ids) => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_APP_BASEURL_FOR_PRICE_API}get-price?ids=${ids}`
      );
      setUsdAmount(result.data[ids].usd);
    } catch (error) {
      toast.error(error);
      setUsdAmount(0);
    }
  };

  useEffect(() => {
    getUsdAmount("wyscale");
  }, []);
  return (
    <>
      {isTransaction ? (
        <PopupModals open={true} onDialogClose={handleTransactionDialogClose}>
          <TransactionConfirmation
            message={transactionMessage}
            isLoading={true}
          />
        </PopupModals>
      ) : (
        <></>
      )}

      <div>
        <div className="pb-0">
          <div className="w-72 md:w-96 card-bg-border !border !border-primaryGray-700 !rounded-xl flex flex-col justify-start items-start gap-3 m-auto">
            <div className="flex justify-between w-full">
              {/* <button className="p-md flex flex-row gap-2 items-center" onClick={() => setDialogOpen(true)}>
                            <Settings />
                        </button> */}
            </div>
            <div
              className="p-3 rounded-lg border border-primaryGray-700   md:w-full"
              style={{ background: "#262626" }}
            >
              <p className="">From</p>
              <div className="w-full grid  grid-cols-2 gap-2">
                <div className="col-span-1">
                  <Select
                    id="xw"
                    className="w-full"
                    placeholder="Select Option"
                    value={selectedOption}
                    options={firstOptionData}
                    onChange={handleFirstSelectChange}
                    getOptionLabel={(e) => (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        {e.icon}
                        <span style={{ marginLeft: 5 }}>{e.text}</span>
                      </div>
                    )}
                  />
                </div>
                <div className="col-span-1">
                  <Select
                    id="wx"
                    className="w-full"
                    placeholder="Select Option"
                    value={selectedOptionInSecondSelect}
                    options={secondOptionData}
                    onChange={secondHandleChange}
                    getOptionLabel={(e) => (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        {e.icon}
                        <span style={{ marginLeft: 5 }}>{e.text}</span>
                      </div>
                    )}
                  />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <input
                  type="text"
                  onChange={(e) => handleAmountChange(e.target.value)}
                  className="inline-flex w-[48%] text-white mt-3 justify-between gap-x-1.5 !border !border-primaryGray-700 rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm"
                  id="Amount"
                  value={fromAmount}
                  placeholder="Amount"
                  style={{ height: "47px" }}
                />

                <div className="w-[50%] flex justify-between mt-4">
                  {/* <button
                    className={`stakebutton  text-xs ${selectedOptionInSecondSelect.text=='WYZ'? 'disbledBtn':'btn-gradient'}`}
                    style={{ width: "min-content ", padding: "0px 10px" }}
                    onClick={() => handleAmountChange(rapEthBalance)}
                    disabled={isPriceLoading}
                  >
                    Max
                  </button> */}
                  <button
                    className={`stakebutton  text-xs btn-gradient`}
                    style={{ width: "min-content ", padding: "0px 10px" }}
                    onClick={() => handleAmountChange(rapEthBalance)}
                    disabled={isPriceLoading}
                  >
                    Max
                  </button>
                  <div  >
                    <div>
                      <p className="text-gray-500 text-end  text-sm ">
                        Balance
                      </p>
                    </div>
                    <div
                      className="text-end w-full "
                      style={{ fontSize: "12px" }}
                    >
                      <p className="">
                        {`${isNaN(rapEthBalance) ? 0 : rapEthBalance} ${
                          selectedOption.value == wyzthChainId &&
                          selectedOptionInSecondSelect.text == "WYZ"
                            ? "WYZ"
                            : selectedOption.value == wyzthChainId &&
                              selectedOptionInSecondSelect.text == "fUSDT"
                            ? "fUSDT"
                            : selectedOption.value == wyzthChainId &&
                              selectedOptionInSecondSelect.text == "stUSDT"
                            ? "stUSDT"
                            : selectedOption.value == wyzthChainId &&
                              selectedOptionInSecondSelect.text == "WYS"
                            ? "WYS"
                            : ""
                        }`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-auto">
              <ArrowDownUpIcon className="swapicon" />
            </div>
            <div
              className="p-3 rounded-lg border border-primaryGray-700   md:w-full"
              style={{ background: "#262626" }}
            >
              <p className="">TO</p>
              <div className="w-full grid grid-cols-2  gap-2">
                <div className="col-span-1">
                  <Select
                    id="xw"
                    value={selectedOptionInThirdSelect}
                    options={thirdOptionData}
                    isDisabled={true}
                    getOptionLabel={(e) => (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        {e.icon}
                        <span style={{ marginLeft: 5 }}>{e.text}</span>
                      </div>
                    )}
                  />
                </div>
                <div className="col-span-1">
                  <Select
                    id="wx"
                    value={selectedOptionInForthSelect}
                    options={forthOptionData.filter((r) => {
                      if (selectedOptionInSecondSelect.text === "fUSDT") {
                        return r.text === forthOptionData[1].text;
                      } else if (
                        selectedOptionInSecondSelect.text === "stUSDT"
                      ) {
                        return r.text === forthOptionData[0].text;
                      } else if (selectedOptionInSecondSelect.text === "WYZ") {
                        return r.text === forthOptionData[2].text;
                      } else if (selectedOptionInSecondSelect.text === "WYS") {
                        return r.text === forthOptionData[0].text;
                      } else {
                        return r.chainId == wyzthChainId;
                      }
                    })}
                    onChange={forthHandleChange}
                    getOptionLabel={(e) => (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        {e.icon}
                        <span style={{ marginLeft: 5 }}>{e.text}</span>
                      </div>
                    )}
                  />
                </div>
              </div>
              <input
                disabled
                value={amount}
                className="inline-flex w-full text-white justify-between gap-x-1.5 !border !border-primaryGray-700 rounded-md mt-3 bg-transparent px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm"
                id="Amount"
                type="text"
                placeholder="Amount"
                style={{ height: "47px" }}
              />
            </div>
            <div className="flex justify-between w-full">
              <p className="">{boostedGasFee + " " + "Gwei"}</p>
              <label htmlFor="gsa" className="flex gap-2 gastext gassection">
                <LucideFuel className="gasfeeicon" />{" "}
                {handleToggle ? "On" : "Off"}
              </label>
            </div>
              <div className="flex justify-between w-full">
                <p className="">Estimated Fee</p>
                <button
                  className="text-gray-500 flex boostprice"
                  onClick={handleGasCalulation}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <ClipLoader size={20} color={"#ffffff"} loading={isLoading} />
                  ) : (
                    <>
                      <Zap size={20} /> Boost ~ 20s
                    </>
                  )}
                </button>
                {/* <button className='text-gray-500 flex boostprice' onClick={handleGasCalulation}>
                              <Zap /> Boost ~ 20s
                          </button> */}
              </div>
              {isConnected ? (
                <button
                  className="stakebutton btn-gradient w-full"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              ) : (
                <div className="w-full">
                  <div className="walletconnectbutton w-40 m-auto">
                    <ConnectButton className="" />
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SwapPage;
