"use strict";function n(r){let i={};for(let[e,t]of Object.entries(r??{}))if(e!=="__CSS_VALUES__")if(typeof t=="object"&&t!==null)for(let[s,l]of Object.entries(n(t)))i[`${e}${s==="DEFAULT"?"":`-${s}`}`]=l;else i[e]=t;if("__CSS_VALUES__"in r)for(let[e,t]of Object.entries(r.__CSS_VALUES__))Number(t)&4||(i[e]=r[e]);return i}module.exports=n;