(function(a,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("react/jsx-runtime"),require("@chakra-ui/system"),require("@chakra-ui/react"),require("@chakra-ui/transition"),require("@chakra-ui/utils"),require("framer-motion"),require("react"),require("@chakra-ui/theme-tools"),require("@chakra-ui/icon")):typeof define=="function"&&define.amd?define(["exports","react/jsx-runtime","@chakra-ui/system","@chakra-ui/react","@chakra-ui/transition","@chakra-ui/utils","framer-motion","react","@chakra-ui/theme-tools","@chakra-ui/icon"],i):(a=typeof globalThis<"u"?globalThis:a||self,i(a["chakra-ui-steps"]={},a["react/jsx-runtime"],a["@chakra-ui/system"],a["@chakra-ui/react"],a["@chakra-ui/transition"],a["@chakra-ui/utils"],a["framer-motion"],a.react,a["@chakra-ui/theme-tools"],a["@chakra-ui/icon"]))})(this,function(a,i,C,u,G,L,I,p,S,N){"use strict";const V=(e=>e&&typeof e=="object"&&"default"in e?e:{default:e})(p),O=V.default.createContext({activeStep:0}),$=()=>V.default.useContext(O),J=({value:e,children:s})=>{const[n,o]=V.default.useState([]),l=e.state==="error",d=e.state==="loading",r=e.orientation==="vertical",t=e.orientation!=="vertical"&&e.labelOrientation==="vertical";return i.jsx(O.Provider,{value:{...e,widths:n,setWidths:o,isError:l,isLoading:d,isVertical:r,isLabelVertical:t},children:s})},U=p.memo(({index:e,isCompletedStep:s,children:n,isLastStep:o,hasLabel:l})=>{const{connector:d,stepIconContainer:r}=u.useMultiStyleConfig("Steps"),{isVertical:t,isLabelVertical:h,widths:c}=$(),g=()=>t?`calc(${r==null?void 0:r.width} / 2)`:l?0:2,m=p.useMemo(()=>{const f={ms:g(),my:t?2:0,ps:t?4:0,me:t||h?0:2,height:t?"auto":"2px",alignSelf:t?"stretch":"auto",borderTopWidth:o||t?0:"2px",borderInlineStartWidth:o||!t?0:"2px",minHeight:o||!t?"auto":"1.5rem"};return h?{...f,position:"absolute",top:`calc(${r==null?void 0:r.height} / 2  - ${f.height} / 2)`,left:`calc(((${c==null?void 0:c[e]}px + ${r==null?void 0:r.width}) / 2) + 8px)`,right:`calc((${c==null?void 0:c[e+1]}px - ${r==null?void 0:r.width}) / -2 + 8px)`}:f},[c,h,t,r==null?void 0:r.height,r==null?void 0:r.width]);return i.jsx(C.chakra.div,{__css:{...m,...d},"data-highlighted":L.dataAttr(s),children:t&&n})}),X=N.createIcon({viewBox:"0 0 14 14",path:i.jsx("g",{fill:"currentColor",children:i.jsx("polygon",{points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})})}),Y=N.createIcon({displayName:"CloseIcon",d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"}),H=I.motion(u.Flex),K=I.motion(Y),T=I.motion(u.chakra.span),W={transition:{duration:.25},exit:{scale:.5,opacity:0},initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1}},R=u.forwardRef((e,s)=>{const{icon:n,iconLabel:o,label:l}=u.useMultiStyleConfig("Steps",e),{isCompletedStep:d,isCurrentStep:r,isError:t,isLoading:h,isKeepError:c,icon:g,index:m,checkIcon:f}=e,w={fontWeight:"medium",color:S.mode("gray.900","gray.100")(e),textAlign:"center",fontSize:"md",...l},x=p.useMemo(()=>g||null,[g]),b=p.useMemo(()=>f||X,[f]);return p.useMemo(()=>{if(d)return t&&c?i.jsx(K,{color:"white",...W,style:n},"icon"):i.jsx(H,{...W,children:i.jsx(b,{color:"white",style:n})},"check-icon");if(r){if(t)return i.jsx(K,{color:"white",...W,style:n},"icon");if(h)return i.jsx(u.Spinner,{width:n.width,height:n.height})}return x?i.jsx(H,{...W,children:i.jsx(x,{style:n})},"step-icon"):i.jsx(T,{ref:s,style:o,__css:w,...W,children:(m||0)+1},"label")},[d,r,t,h,x,n])}),ee=({isCurrentStep:e,opacity:s,label:n,description:o})=>{const{labelContainer:l,label:d,description:r}=u.useMultiStyleConfig("Steps"),{isLabelVertical:t}=$();return!!n||!!o?i.jsxs(u.chakra.div,{"aria-current":e?"step":void 0,__css:{textAlign:t?"center":"left",alignItems:t?"center":"flex-start",...l},children:[!!n&&i.jsx(u.chakra.span,{__css:{mx:t?0:2,mt:t?1:0,opacity:s,...d},children:n}),!!o&&i.jsx(u.chakra.span,{__css:{mx:t?0:2,mt:t?2:0,opacity:s,...r},children:o})]}):null},te=C.forwardRef((e,s)=>{const{children:n,description:o,icon:l,state:d,checkIcon:r,index:t,isCompletedStep:h,isCurrentStep:c,isLastStep:g,isKeepError:m,label:f,...w}=e,{isVertical:x,isError:b,isLoading:z,isLabelVertical:j,checkIcon:q,onClickStep:E,clickable:_,setWidths:y,stepCount:k}=$(),{step:D,stepContainer:F,stepIconContainer:v}=u.useMultiStyleConfig("Steps"),A=c||h,M=A?1:.8,pe=P=>{_&&E&&E(P)},ue=p.useCallback(P=>{P&&y&&y(Z=>Z.length===k?[P.offsetWidth||0]:[...Z,P.offsetWidth||0])},[v==null?void 0:v.width,v==null?void 0:v.height]);return i.jsx(i.Fragment,{children:i.jsxs(C.chakra.li,{ref:s,onClick:()=>pe(t),"aria-disabled":!A,__css:{opacity:M,flexDirection:x?"column":"row",alignItems:x||j?"flex-start":"center",flex:g&&!x?"0 0 auto":"1 0 auto",justifyContent:g&&!x?"flex-end":"flex-start",_hover:{cursor:_?"pointer":"default"},...D},...w,children:[i.jsxs(C.chakra.div,{ref:ue,__css:{flexDirection:j?"column":"row",...F},children:[i.jsx(C.chakra.div,{__css:v,"aria-current":A&&m||c?"step":void 0,"data-invalid":L.dataAttr((A&&m||c)&&(b||d==="error")),"data-highlighted":L.dataAttr(h),"data-clickable":L.dataAttr(_),children:i.jsx(I.AnimatePresence,{mode:"wait",children:i.jsx(R,{index:t,isError:b||d==="error",isLoading:z||d==="loading",isCurrentStep:c,isCompletedStep:h,isKeepError:m,icon:l,checkIcon:r!=null?r:q})})}),i.jsx(ee,{label:f,description:o,isCurrentStep:c,opacity:M})]}),i.jsx(U,{index:t,isLastStep:g,hasLabel:!!f||!!o,isCompletedStep:h||!1,children:i.jsx(G.Collapse,{style:{width:"100%"},in:c,children:(c||h)&&n})})]})})}),B=C.forwardRef((e,s)=>{const[n]=u.createStylesContext("Steps"),{className:o,activeStep:l,children:d,orientation:r,state:t,responsive:h,checkIcon:c,onClickStep:g,labelOrientation:m,...f}=C.omitThemingProps(e),w=u.useMultiStyleConfig("Steps",f),x={...w.steps},b=p.Children.toArray(d),z=b.length,j=()=>l<=b.length?p.Children.map(b[l],y=>{if(!!p.isValidElement(y))return p.Children.map(y.props.children,k=>k)}):null,q=!!g,[E]=u.useMediaQuery("(max-width: 43em)",{fallback:!1}),_=E&&h?"vertical":r;return i.jsx(n,{value:w,children:i.jsxs(J,{value:{activeStep:l,orientation:_,state:t,responsive:h,checkIcon:c,onClickStep:g,labelOrientation:m,clickable:q,colorScheme:e.colorScheme,stepCount:z},children:[i.jsx(C.chakra.ol,{ref:s,__css:{justifyContent:z===1?"flex-end":"space-between",flexDirection:_==="vertical"?"column":"row",...x},className:L.cx("chakra-steps",o),...f,children:p.Children.map(d,(y,k)=>{var M;const D=(M=p.isValidElement(y)&&y.props.isCompletedStep)!=null?M:k<l,F=k===z-1,A={index:k,isCompletedStep:D,isCurrentStep:k===l,isLastStep:F};return p.isValidElement(y)?p.cloneElement(y,A):null})}),_==="horizontal"&&j()]})})});B.defaultProps={activeStep:0,colorScheme:"green",orientation:"horizontal",responsive:!0};function ie({initialStep:e}){const[s,n]=V.default.useState(e);return{nextStep:()=>{n(t=>t+1)},prevStep:()=>{n(t=>t-1)},reset:()=>{n(e)},setStep:t=>{n(t)},activeStep:s}}const re=S.anatomy("steps").parts("connector","description","icon","iconLabel","label","labelContainer","step","stepContainer","stepIconContainer","steps"),ne={strokeWidth:"2px"},Q=e=>({color:S.mode("gray.900","gray.100")(e),fontWeight:"medium",textAlign:"center",fontSize:"md"}),oe=e=>({color:S.mode("gray.800","gray.200")(e),marginTop:"-2px",textAlign:"center",fontSize:"sm"}),se=e=>{const{colorScheme:s}=e,n=S.mode("gray.200","gray.700")(e),o=S.mode(`${s}.500`,`${s}.200`)(e);return{flex:1,display:"flex",borderColor:n,transitionProperty:"border-color",transitionDuration:"normal",_highlighted:{borderColor:o}}},ce=e=>{const{colorScheme:s}=e,n=S.mode("gray.200","gray.700")(e),o=`${s}.500`;return{display:"flex",borderRadius:"50%",alignItems:"center",justifyContent:"center",bg:n,borderColor:n,transitionProperty:"background, border-color",transitionDuration:"normal",_activeStep:{bg:S.mode(S.darken(n,.5),S.lighten(n,.5))(e),borderColor:o,_invalid:{bg:"red.500",borderColor:"red.500"}},_highlighted:{bg:o,borderColor:o},"&[data-clickable]:hover":{borderColor:o}}},ae=e=>({connector:se(e),description:oe(e),icon:ne,iconLabel:Q(e),label:Q(e),labelContainer:{display:"flex",flexDir:"column",justifyContent:"center"},step:{display:"flex",position:"relative"},stepContainer:{display:"flex",alignItems:"center"},stepIconContainer:ce(e),steps:{fontFamily:"heading",textAlign:"center",width:"100%",display:"flex",flex:1}}),le={sm:{stepIconContainer:{width:"32px",height:"32px",borderWidth:"2px"},icon:{width:"14px",height:"14px"},label:{fontWeight:"medium",textAlign:"center",fontSize:"sm"},description:{fontWeight:"300",textAlign:"center",fontSize:"xs"}},md:{stepIconContainer:{width:"40px",height:"40px",borderWidth:"2px"},icon:{width:"18px",height:"18px"},label:{fontWeight:"medium",textAlign:"center",fontSize:"md"},description:{fontWeight:"300",textAlign:"center",fontSize:"sm"}},lg:{stepIconContainer:{width:"48px",height:"48px",borderWidth:"2px"},icon:{width:"22px",height:"22px"},label:{fontWeight:"bold",textAlign:"center",fontSize:"lg"},description:{fontWeight:"300",textAlign:"center",fontSize:"md"}}},de={size:"md",colorScheme:"green"},he={parts:re.keys,baseStyle:ae,sizes:le,defaultProps:de};a.Step=te,a.Steps=B,a.StepsStyleConfig=he,a.useSteps=ie,Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
