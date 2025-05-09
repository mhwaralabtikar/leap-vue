import{b as c,x as v,r as o,h as l}from"./entry-server-DIdk1VNC.js";/**
 * @license lucide-vue-next v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=c("circle-help",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=c("heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-vue-next v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=c("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),C=v("contact",()=>{const s=o([]),n=o(!1),r=o(null),f=l(()=>s.value.filter(e=>e.status==="new").length),p=l(()=>{const e={general:[],services:[],partnership:[],support:[]};return s.value.forEach(t=>{e[t.inquiryType]?e[t.inquiryType].push(t):e.general.push(t)}),e});function y(e){const t={...e,id:S(),createdAt:new Date().toISOString(),status:"new"};return s.value.unshift(t),a(),t}function m(e,t){const u=s.value.find(h=>h.id===e);u&&(u.status=t,a())}function d(e){s.value=s.value.filter(t=>t.id!==e),a()}async function i(){try{n.value=!0,r.value=null,await new Promise(t=>setTimeout(t,500));const e=localStorage.getItem("contactSubmissions");e&&(s.value=JSON.parse(e))}catch(e){r.value=e instanceof Error?e.message:"Unknown error occurred",console.error("Error fetching contact submissions:",e)}finally{n.value=!1}}function a(){localStorage.setItem("contactSubmissions",JSON.stringify(s.value))}function S(){return`submission_${Date.now()}_${Math.random().toString(36).substr(2,9)}`}return i(),{submissions:s,isLoading:n,error:r,newSubmissionsCount:f,submissionsByType:p,saveContactSubmission:y,updateSubmissionStatus:m,deleteSubmission:d,fetchSubmissions:i}});export{b as C,k as H,w as U,C as u};
