import { SiApplearcade } from "react-icons/si";
import { IoLogoGameControllerA } from "react-icons/io";
import { IoGameController } from "react-icons/io5";

export const PLAN = {
  arcade: {
    logoSrc:  <div
    style={{
      backgroundColor: "#FFAF7E", 
      borderRadius: "50%", 
      padding: "10px", 
      width: "45px", 
      height: "45px", 
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <SiApplearcade style={{ fontSize: "1.5em", color: "white" }} />
  </div>,
    title: "Arcade",
    cost: {
      monthly: 9,
      yearly: 90,
    },
    value: "arcade",
  },
  advanced: {
    logoSrc:  <div
    style={{
      backgroundColor: "#F9818E",
      borderRadius: "50%", 
      padding: "10px", 
      width: "45px", 
      height: "45px", 
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <IoLogoGameControllerA style={{ fontSize: "1.5em", color: "white" }} />
  </div>,
    title: "Advanced",
    cost: {
      monthly: 12,
      yearly: 120,
    },
    value: "advanced",
  },
  pro: {
    logoSrc:  <div
    style={{
      backgroundColor: "#483EFF", 
      borderRadius: "50%",
      padding: "10px", 
      width: "45px", 
      height: "45px", 
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <IoGameController style={{ fontSize: "1.5em", color: "white" }} />
  </div>,
    title: "Pro",
    cost: {
      monthly: 15,
      yearly: 150,
    },
    value: "pro",
  },
};

export const ADD_ONS = {
  add_on_multiplayer: {
    title: "Online service",
    description: "Access to multiplayer game",
    value: "multiplayer",
    cost: {
      yearly: 10,
      monthly: 1,
    },
  },
  add_on_storage: {
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    value: "storage",
    cost: {
      yearly: 20,
      monthly: 2,
    },
  },
  add_on_profile: {
    title: "Customizable profile",
    description: "Custom theme on your profile",
    value: "profile",
    cost: {
      yearly: 20,
      monthly: 2,
    },
  },
};