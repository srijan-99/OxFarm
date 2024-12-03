// src/functions/web3Functions.js
import { readContract,writeContract } from '@wagmi/core';
import { contractAbi, contractAddress } from './config';
import { config } from '../main';


// TOTALFARM

export const TotalFarm = async () => {
  const data = await readContract(config, {
    abi: contractAbi,
    address: contractAddress,
    functionName: 'TOTALFARM',
    args: [],
  });
  return data;
};

// LASTLEVEL
export const LastLevel = async () => {
  const data = await readContract(config, {
    abi: contractAbi,
    address: contractAddress,
    functionName: 'LASTLEVEL',
    args: [],
  });
  return data;
};

// REG_VALIDITY
export const RegistrationValidity = async () => {
  const data = await readContract(config, {
    abi: contractAbi,
    address: contractAddress,
    functionName: 'REG_VALIDITY',
    args: [],
  });
  return data;
};

// DIRECT_REWARD_PERIOD
export const DirectRewardPeriod = async () => {
  const data = await readContract(config, {
    abi: contractAbi,
    address: contractAddress,
    functionName: 'DIRECT_REWARD_PERIOD',
    args: [],
  });
  return data;
};

// DIRECT_REWARD_PERIOD_NEXT
export const DirectRewardPeriodNext = async () => {
  const data = await readContract(config, {
    abi: contractAbi,
    address: contractAddress,
    functionName: 'DIRECT_REWARD_PERIOD_NEXT',
    args: [],
  });
  return data;
};

// JOINING_AIRDROP
export const JoiningAirdrop = async () => {
  const data = await readContract(config, {
    abi: contractAbi,
    address: contractAddress,
    functionName: 'joiningAirdrop',
    args: [],
  });
  return data;
};

// LEVEL_JOINING_AIRDROP
export const LevelJoiningAirdrop = async () => {
  const data = await readContract(config, {
    abi: contractAbi,
    address: contractAddress,
    functionName: 'levelJoiningAirdrop',
    args: [],
  });
  return data;
};

// LEADERSHIP_LAST_DRAW
export const LeadershipLastDraw = async () => {
  const data = await readContract(config, {
    abi: contractAbi,
    address: contractAddress,
    functionName: 'leadership_last_draw',
    args: [],
  });
  return data;
};

// REWARD_LAST_DRAW
export const RewardLastDraw = async () => {
  const data = await readContract(config, {
    abi: contractAbi,
    address: contractAddress,
    functionName: 'reward_last_draw',
    args: [],
  });
  return data;
};

// LEADERSHIP_CYCLE
export const LeadershipCycle = async () => {
  const data = await readContract(config, {
    abi: contractAbi,
    address: contractAddress,
    functionName: 'leadershipCycle',
    args: [],
  });
  return data;
};

// REWARD_CYCLE
export const RewardCycle = async () => {
  const data = await readContract(config, {
    abi: contractAbi,
    address: contractAddress,
    functionName: 'reward_cycle',
    args: [],
  });
  return data;
};

// DAILY_REWARD
export const DailyReward = async () => {
  const data = await readContract(config, {
    abi: contractAbi,
    address: contractAddress,
    functionName: 'dailyReward',
    args: [],
  });
  return data;
};

// USER_INFO
export const UserInfo = async (address) => {
  const data = await readContract(config, {
    abi: contractAbi,
    address: contractAddress,
    functionName: 'userInfo',
    args: [address],
  });
  return data;
};

// GET_REWARD_DETAILS
export const GetRewardDetails = async (rewardType) => {
  const data = await readContract(config, {
    abi: contractAbi,
    address: contractAddress,
    functionName: 'getRewardDetails',
    args: [rewardType],
  });
  return data;
};

// GET_REWARD_AMOUNT
export const GetRewardAmount = async (address, rewardType) => {
  const data = await readContract(config, {
    abi: contractAbi,
    address: contractAddress,
    functionName: 'getRewardAmount',
    args: [address, rewardType],
  });
  return data;
};

// GET_DIRECT_REWARD_LENGTH
export const GetDirectRewardLength = async () => {
  const data = await readContract(config, {
    abi: contractAbi,
    address: contractAddress,
    functionName: 'getDirectRewardLength',
    args: [],
  });
  return data;
};

// GET_DIRECT_REWARD_AT
export const GetDirectRewardAt = async (index) => {
  const data = await readContract(config, {
    abi: contractAbi,
    address: contractAddress,
    functionName: 'getDirectRewardAt',
    args: [index],
  });
  return data;
};

// GET_DIRECT_REWARD_ALL
export const GetDirectRewardAll = async () => {
  const data = await readContract(config, {
    abi: contractAbi,
    address: contractAddress,
    functionName: 'getDirectRewardAll',
    args: [],
  });
  return data;
};

// GET_DIRECT_REWARD_CONTAINS
export const GetDirectRewardContains = async (address) => {
  const data = await readContract(config, {
    abi: contractAbi,
    address: contractAddress,
    functionName: 'getDirectRewardContains',
    args: [address],
  });
  return data;
};

// GET_WEEKLY_REWARD_LENGTH
export const GetWeeklyRewardLength = async () => {
  const data = await readContract(config, {
    abi: contractAbi,
    address: contractAddress,
    functionName: 'getWeeklyRewardLength',
    args: [],
  });
  return data;
};

// GET_WEEKLY_REWARD_AT
export const GetWeeklyRewardAt = async (index) => {
  const data = await readContract(config, {
    abi: contractAbi,
    address: contractAddress,
    functionName: 'getWeeklyRewardAt',
    args: [index],
  });
  return data;
};

// GET_WEEKLY_REWARD_ALL
export const GetWeeklyRewardAll = async () => {
  const data = await readContract(config, {
    abi: contractAbi,
    address:'0x6998FE0Ac4564684f90C2C770acC1e4F20b3bA13',
    functionName: 'getWeeklyRewardAll',
    args: [],
  });
  return data;
};

// GET_WEEKLY_REWARD_CONTAINS
export const GetWeeklyRewardContains = async (address) => {
  const data = await readContract(config, {
    abi: contractAbi,
    address: contractAddress,
    functionName: 'getWeeklyRewardContains',
    args: [address],
  });
  return data;
};





//functions for all the writecontract

//airdrop function

export const Airdrop = async(address)=>{
  
  const data=await writeContract(config,{
    abi:contractAbi,
    address:contractAddress,
    functionName:'airdrop',
    args:[address],



  });
  return data;

};

//deposit function
export const Deposit =async(plan,amount)=>{
  const data=await writeContract(config,{
    abi:contractAbi,
    address:contractAddress,
    functionName:'deposit',
    args:[plan,amount],
  });
  return data;
}

//directClaim
export const DirectClaim=async()=>{
  const data=await writeContract(config,{
    abi:contractAbi,
    address:contractAddress,
    function:'directClaim',
    args:[]

  });
  return data;
}
//weekly claim
export const WeeklyClaim=async()=>{
  const data=await writeContract(config,{
    abi:contractAbi,
    address:contractAddress,
    function:'weeklyClaim',
    args:[]
  });
  return data;
}

//withdraw
export const Withdraw =async()=>{
  const data=await writeContract(config,{
    abi:contractAbi,
    address:contractAddress,
    function:'withdraw',
    args:[]
  });
  return data;
}

//drawLeadership
export const DrawLeadership =async()=>{
  const data=await writeContract(config,{
    abi:contractAbi,
    address:contractAddress,
    function:'drawLeadership',
    args:[]

  });
  return data
}

//multicall function

export const Multicall=async (inputData)=>{
  const data=await writeContract(config,{
    abi:contractAbi,
    address:contractAddress,
    function:'multicall',
    args:[inputData]


  });
  return data
}






