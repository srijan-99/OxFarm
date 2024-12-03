import React, { useEffect, useState } from "react";
import { UserInfo } from "../web3";  // Import the UserInfo function
import { useAccount } from "wagmi";

const UserInfoCard = () => {
  const { address } = useAccount();  
  const [data, setData] = useState({});  

  useEffect(() => {
    
    const fetchData = async () => {
      if (address) {
        const res = await UserInfo(address);  
        console.log(res, ":::in UserInfoCard");  
        setData(res); 
      }
    };

    fetchData();  
  }, [address]);  
 
  const {
    currentLevel,
    rewardType,
    referralBoosterCount,
    timeStamp,
    directRewardClaim,
    weeklyRewardClaim,
    depositAmount,
    reward,
    withdraw,
    referralDepositAmount,
    referrer,
    referrals,
    doubleXReferrals,
  } = data || {};

  // Return the JSX with the user data
  return (
    <div className="card">
      <h4>User Info</h4>
      <p><strong>Current Level:</strong> {currentLevel}</p>
      <p><strong>Reward Type:</strong> {rewardType}</p>
      <p><strong>Referral Booster Count:</strong> {referralBoosterCount}</p>
      
     
      
      
    </div>
  );
};

// This export should be placed **outside** the function body, at the top level.
export default UserInfoCard;
