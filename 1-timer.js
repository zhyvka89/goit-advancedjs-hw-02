import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f as h,i as y}from"./assets/vendor-BbbuE1sJ.js";const c=document.querySelector("#datetime-picker"),s=document.querySelector("button[data-start]");s.addEventListener("click",S);const n={days:document.querySelector("span[data-days]"),hours:document.querySelector("span[data-hours]"),minutes:document.querySelector("span[data-minutes]"),seconds:document.querySelector("span[data-seconds]")};let u;const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){new Date(t[0]).getTime()-Date.now()<=0?(y.show({title:"Warning",message:"Please choose a date in the future",position:"topRight",color:"red"}),s.disabled=!0):(u=t[0],s.disabled=!1)}};h("#datetime-picker",p);function S(){const t=setInterval(()=>{s.disabled=!0,c.disabled=!0;const e=new Date(u).getTime()-Date.now();let{days:r,hours:d,minutes:i,seconds:a}=b(e);n.days.textContent=o(r),n.hours.textContent=o(d),n.minutes.textContent=o(i),n.seconds.textContent=o(a),e<=0&&(clearInterval(t),c.disabled=!1)},1e3)}function b(t){const a=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:a,hours:l,minutes:m,seconds:f}}function o(t){return String(t).padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map
