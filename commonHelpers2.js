import"./assets/styles-3c4e11fa.js";import{i as r}from"./assets/vendor-77e16229.js";document.querySelector(".form").addEventListener("submit",function(t){t.preventDefault();const s=t.target.elements.delay.value,i=t.target.elements.state.value;new Promise((e,a)=>{setTimeout(()=>{i==="fulfilled"?e(`✅ Fulfilled promise in ${s}ms`):a(`❌ Rejected promise in ${s}ms`)},s)}).then(e=>{r.success({title:"Success",message:e})}).catch(e=>{r.error({title:"Error",message:e})})});
//# sourceMappingURL=commonHelpers2.js.map
