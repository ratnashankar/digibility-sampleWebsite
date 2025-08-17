import{r as e,R as u}from"./index-DWBh7FWO.js";const d=({message:t,show:s,type:n="error"})=>{const[r,i]=e.useState(!1),[l,a]=e.useState(!1);if(e.useEffect(()=>{if(s){i(!0),a(!1);const f=setTimeout(()=>{a(!0),setTimeout(()=>i(!1),400)},3e3);return()=>clearTimeout(f)}else i(!1)},[s,t]),!r)return null;const o=n==="error"?"bg-[#FDECEA] text-[#611A15] border-[#F5C6CB]":"bg-[#E6F4EA] text-[#1E4620] border-[#A3D9A5]";return u.createElement("div",{className:`fixed z-[9999] w-[90vw] lg:w-fit mx-auto 
      top-[12vh] left-1/2 -translate-x-1/2 
      border p-3 rounded-lg shadow-lg 
      ${o} ${l?"animate-slideDownCenterOut":"animate-slideDownCenterIn"}`},t)},m=({message:t,show:s})=>{const[n,r]=e.useState(!1),[i,l]=e.useState(!1);return e.useEffect(()=>{if(s){r(!0),l(!1);const o=setTimeout(()=>{l(!0),setTimeout(()=>r(!1),400)},3e3);return()=>clearTimeout(o)}else r(!1)},[s,t]),n?u.createElement("div",{className:`fixed z-[9999] w-[90vw] lg:w-fit mx-auto 
      top-[12vh] left-1/2 -translate-x-1/2 
      border p-3 rounded-lg  
      bg-[#E6F4EA] text-[#1E4620] border-[#A3D9A5] ${i?"animate-slideDownCenterOut":"animate-slideDownCenterIn"}`},t):null};export{d as E,m as S};
