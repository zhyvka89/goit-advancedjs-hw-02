import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i as r}from"./assets/vendor-BbbuE1sJ.js";const s=document.querySelector(".form");s.addEventListener("submit",e=>n(e));function n(e){e.preventDefault();const o=e.target.elements.delay.value,i=e.target.elements.state.value;m(o,i).then(t=>r.show({title:"Success",message:`✅ Fulfilled promise in ${t}ms`,position:"topRight",color:"green"})).catch(t=>r.show({title:"Error",message:`❌ Rejected promise in ${t}ms`,position:"topRight",color:"red"}))}function m(e,o){return new Promise((i,t)=>{setTimeout(()=>{o==="fulfilled"&&i(e),o==="rejected"&&t(e)},e)})}
//# sourceMappingURL=2-snackbar.js.map