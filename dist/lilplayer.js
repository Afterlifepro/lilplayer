(async()=>{for(;!Spicetify.React||!Spicetify.ReactDOM;)await new Promise(e=>setTimeout(e,10));var e,t,r,i,l,c,n,o,a,d,u,s,p,y,m,f,g,h,w;function b(){return p.default.createElement("div",{id:"grabBar"},p.default.createElement("div",null),p.default.createElement("div",null,"•••"),p.default.createElement("button",{onClick:()=>{window.documentPictureInPicture.window.close()},style:{"-webkit-app-region":"no-drag"}},"✕"))}function E({song:e,setAccent:t}){var a,r;return e&&e.item.album.images&&e.item.artists?(t((t=m(e.item.album.images.at(-1).url),null==(r=document.createElement("canvas").getContext("2d"))?"err":("string"==typeof t&&(a=t,(t=new Image).setAttribute("crossOrigin",""),t.src=a),r.imageSmoothingEnabled=!0,r.drawImage(t,0,0,1,1),r.getImageData(0,0,1,1).data.slice(0,3)))),y.default.createElement("div",{id:"viewer"},y.default.createElement("img",{src:m(e.item.album.images[0].url),alt:""}))):y.default.createElement(y.default.Fragment,null,"404")}function P({progress:e}){return f.default.createElement("div",{id:"lilplayer-playback"},f.default.createElement("div",{id:"playback-progress-wrapper"},f.default.createElement("div",{id:"playback-progress",style:{width:100*e+"%"}})))}function v({icon:e,circle:t,click:a}){return h.default.createElement("button",{className:(t?"circle ":"")+"icon-wrapper",onClick:a},h.default.createElement("svg",{className:"icon",width:16,height:16,viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:Spicetify.SVGIcons[e]+"</g>"}}))}function S({isPlaying:e}){return g.default.createElement("div",{id:"lilplayer-controls"},g.default.createElement(v,{icon:"skip-back",click:Spicetify.Player.back}),e?g.default.createElement(v,{icon:"pause",circle:!0,click:Spicetify.Player.pause}):g.default.createElement(v,{icon:"play",circle:!0,click:Spicetify.Player.play}),g.default.createElement(v,{icon:"skip-forward",click:Spicetify.Player.next}))}function k(){let[e,t]=s.default.useState(Spicetify.Player.data),[a,r]=s.default.useState(Spicetify.Player.isPlaying()),[n,i]=s.default.useState(Spicetify.Player.getProgressPercent());var[l,c]=s.default.useState("err");return Spicetify.Player.addEventListener("songchange",()=>t(Spicetify.Player.data)),Spicetify.Player.addEventListener("onplaypause",()=>r(Spicetify.Player.isPlaying())),Spicetify.Player.addEventListener("onprogress",()=>i(Spicetify.Player.getProgressPercent())),s.default.createElement("div",{id:"pipWindow",style:{"--accent":"err"!==l?`rgb(${l[0]}, ${l[1]}, ${l[2]})`:"#000000"}},s.default.createElement(b,null),s.default.createElement(P,{progress:n}),s.default.createElement(E,{song:e,setAccent:c}),s.default.createElement(S,{isPlaying:a}))}function x(t={}){let a=!1,n=null,i=null;return{open:async()=>{var e,r;a?(i?.unmount(),n?.close(),a=!1):(a=!0,n=await window.documentPictureInPicture.requestWindow(t),e=window,r=n,[...e.document.styleSheets].forEach(t=>{try{var a=[...t.cssRules].map(e=>e.cssText).join(""),e=document.createElement("style");e.textContent=a,r.document.head.appendChild(e)}catch(e){a=document.createElement("link");a.rel="stylesheet",a.type=t.type,a.media=t.media,a.href=t.href,r.document.head.appendChild(a)}}),n.document.body.style.minWidth="0",n.document.body.style.minHeight="0",(i=Spicetify.ReactDOM.createRoot(n.document.body))?.render(u.default.createElement(k,null)))}}}r=Object.create,i=Object.defineProperty,l=Object.getOwnPropertyDescriptor,c=Object.getOwnPropertyNames,n=Object.getPrototypeOf,o=Object.prototype.hasOwnProperty,e={"external-global-plugin:react"(e,t){t.exports=Spicetify.React}},u=(a=(e,t,a)=>(a=null!=e?r(n(e)):{},((t,a,r,n)=>{if(a&&"object"==typeof a||"function"==typeof a)for(let e of c(a))o.call(t,e)||e===r||i(t,e,{get:()=>a[e],enumerable:!(n=l(a,e))||n.enumerable});return t})(!t&&e&&e.__esModule?a:i(a,"default",{value:e,enumerable:!0}),e)))((d=function(){return t||(0,e[c(e)[0]])((t={exports:{}}).exports,t),t.exports})()),s=a(d()),p=a(d()),y=a(d()),m=e=>"https://i.scdn.co/image/"+e.split(":")[2],f=a(d()),g=a(d()),h=a(d()),w=async function(){var e=x({width:0,height:0});new Spicetify.Topbar.Button("Lilplayer","tablet",e.open)},(async()=>{await w()})(),(async()=>{var e;document.getElementById("lilplayer")||((e=document.createElement("style")).id="lilplayer",e.textContent=String.raw`
  body:has(#pipWindow){height:100vh;width:100vw;overflow:hidden}#pipWindow{height:100%;width:100%;background-color:var(--accent,var(--spice-main));display:grid;grid-template-rows:25px 5px calc(100vh - 75px) 45px;width:32px;display:flex;justify-content:center;align-items:center;border:none;background-color:transparent;height:16px;fill:white}&.circle{border-radius:50%;background-color:#fff}
      `.trim(),document.head.appendChild(e))})()})();