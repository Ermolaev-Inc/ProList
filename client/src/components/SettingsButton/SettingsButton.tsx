import React from "react";
import { SettingsButtonProps } from "./interfaces";

export const SettingsButton: React.FC<SettingsButtonProps> = ({
  color = "#000000",
  onClick,
  ...props
}) => {
  return(
    <svg {...props} style={{cursor: "pointer"}} onClick={onClick} width="26" height="26" viewBox="0 0 26 26" fill={color} xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0)">
    <path d="M13.8159 26H12.1841C10.8643 26 9.79057 24.9263 9.79057 23.6065V23.0545C9.22949 22.8752 8.68436 22.6489 8.16065 22.3779L7.76943 22.7691C6.8219 23.7178 5.3041 23.69 4.3841 22.7688L3.2308 21.6155C2.30918 20.6949 2.28267 19.1776 3.23111 18.2302L3.62202 17.8393C3.351 17.3156 3.12477 16.7706 2.94546 16.2094H2.39347C1.07377 16.2094 0 15.1357 0 13.8159V12.1841C0 10.8643 1.07377 9.79063 2.39352 9.79063H2.94552C3.12482 9.22949 3.35105 8.68441 3.62207 8.1607L3.23086 7.76953C2.28297 6.82266 2.30912 5.30522 3.23116 4.3842L4.38455 3.23086C5.30669 2.30745 6.82414 2.28439 7.76984 3.23116L8.1607 3.62202C8.68441 3.35105 9.22954 3.12477 9.79063 2.94546V2.39347C9.79063 1.07372 10.8643 0 12.1841 0H13.8159C15.1357 0 16.2094 1.07372 16.2094 2.39347V2.94552C16.7705 3.12477 17.3156 3.35105 17.8393 3.62207L18.2305 3.23086C19.178 2.28216 20.6958 2.30999 21.6159 3.23121L22.7691 4.38445C23.6908 5.30507 23.7173 6.82236 22.7688 7.76979L22.3779 8.1607C22.6489 8.68441 22.8752 9.22944 23.0545 9.79063H23.6065C24.9262 9.79063 26 10.8643 26 12.1841V13.8159C26 15.1357 24.9262 16.2094 23.6065 16.2094H23.0545C22.8752 16.7705 22.6489 17.3156 22.3779 17.8393L22.7691 18.2305C23.717 19.1774 23.6909 20.6948 22.7688 21.6159L21.6154 22.7692C20.6933 23.6926 19.1759 23.7157 18.2302 22.7689L17.8393 22.378C17.3156 22.649 16.7705 22.8753 16.2094 23.0546V23.6066C16.2094 24.9263 15.1357 26 13.8159 26ZM11.5 18C12.2275 18.4303 13.6832 17.7892 14.5 18C14.8364 18.0868 14.7696 17.2372 14.7696 17.5846L13.8159 18.511C13.8159 18.9908 13.5203 18.511 14 18.511L13.8159 17.5847C14.2956 17.5847 17.5 16.4797 17.5 16L14.686 22.4818C14.686 22.1344 17.2484 15.5868 17.5847 15.5C18.4015 15.2892 18.2725 19.9303 19 19.5C19.2994 19.323 18.2652 20.6493 18.5111 20.8952L19.3078 21.6919C19.6513 22.0358 20.2029 22.0278 20.5379 21.6923L21.692 20.5382C22.0263 20.2044 19.9527 22.8832 19.6076 22.5386L15.5 18.2305C15.2541 17.9846 17.323 15.7993 17.5 15.5C17.9303 14.7725 17.8737 15.1228 18.0845 14.306C18.1713 13.9696 22.1345 14.686 22.4819 14.686H23.6065C24.0863 14.686 17.5 14.9797 17.5 14.5L24.4766 12.1841C24.4766 11.7044 25.5 11.5 25.5 11.5L25 12.5C24.6526 12.5 18.5868 15.3363 18.5 15C18.2892 14.1832 15.4302 8.22749 15 7.5C14.823 7.2007 20.6494 7.73495 20.8953 7.48907L21.692 6.69236C22.0364 6.34837 21.951 8.3347 21.6159 8L15.8687 8.1607C15.5342 7.82575 17.844 5.65555 17.5 6L18.5112 5.10489C18.2653 5.35082 22.2993 7.67702 22 7.5C21.2725 7.06973 14.3168 8.21079 13.5 8C13.1636 7.91321 12.1841 4.45584 12.1841 4.10845L12.5 2.5C12.5 2.02027 14 1.5 14 1.5L14.5 6.5C14.0203 6.5 15 5.52027 15 6L15.1243 6.69195C15.1243 7.03935 10.8364 8.41321 10.5 8.5C9.68323 8.71079 7.72754 6.06973 7 6.5C6.70059 6.67697 7.73485 5.35067 7.48897 5.10479L10.5 8.5C10.1565 8.15611 10.1256 8.66444 9.79063 9L8.72831 9.79063C8.39407 10.1245 3.96266 6.34725 4.30777 6.69195L6 7C6.24588 7.24588 8.90529 9.7007 8.72831 10C8.29804 10.7275 8.71079 13.1832 8.5 14C8.41316 14.3364 4.34734 15 4 15H3C2.52027 15.0001 1.5 12 1.5 12L3.5 13.5C3.5 13.9797 2.16433 13.8159 2.64406 13.8159L3.51818 14.6859C3.86557 14.6859 7.91316 13.6637 8 14C8.21079 14.8168 9.56978 16.2725 10 17C10.177 17.2993 11.5599 17.3388 11.3141 17.5846L4.30803 19.3077C3.96363 19.6517 5.16489 17.1653 5.5 17.5L9 17C9.3345 17.335 11.656 18.3444 12 18L7.48886 20.8952C7.67005 20.714 11.1317 17.7821 11.5 18Z" fill={color}/>
    <path d="M13 18.657C9.88071 18.657 7.34302 16.1193 7.34302 13C7.34302 9.8807 9.88071 7.34296 13 7.34296C16.1194 7.34296 18.6571 9.8807 18.6571 13C18.6571 16.1193 16.1194 18.657 13 18.657ZM13 8.86639C10.7207 8.86639 8.86646 10.7207 8.86646 13C8.86646 15.2793 10.7208 17.1336 13 17.1336C15.2793 17.1336 17.1336 15.2793 17.1336 13C17.1336 10.7207 15.2794 8.86639 13 8.86639Z" fill="black"/>
    </g>
    <defs>
    <clipPath id="clip0">
    <rect width="26" height="26"/>
    </clipPath>
    </defs>
    </svg>
  )
}