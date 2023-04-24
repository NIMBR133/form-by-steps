import{r as o,_ as X,e as K,j as A,a as u,S as M,s as j,m as T,u as se,b as ie,d as le,p as ce,f as de,g as ue}from"./index-5943656d.js";import{_ as he,e as pe,f as be,g as z,h as me,i as fe,K as ge,m as Ce,r as G,j as ve,C as Y,o as xe,k as J,l as ye,D as Se,L as $e,E as _e,n as we,S as ke,u as Oe,F as Ve,a as Ee,b as B,c as N,d as Pe}from"./config-fields-6457e674.js";import{c as Q,S as R,D as Ie,a as H}from"./api-ed0d9e10.js";var Ne=["prefixCls","className","style","checked","disabled","defaultChecked","type","onChange"],Fe=o.forwardRef(function(e,t){var a,s=e.prefixCls,i=s===void 0?"rc-checkbox":s,y=e.className,v=e.style,$=e.checked,_=e.disabled,x=e.defaultChecked,h=x===void 0?!1:x,l=e.type,C=l===void 0?"checkbox":l,d=e.onChange,E=he(e,Ne),w=o.useRef(null),c=pe(h,{value:$}),O=be(c,2),P=O[0],I=O[1];o.useImperativeHandle(t,function(){return{focus:function(){var p;(p=w.current)===null||p===void 0||p.focus()},blur:function(){var p;(p=w.current)===null||p===void 0||p.blur()},input:w.current}});var V=z(i,y,(a={},X(a,"".concat(i,"-checked"),P),X(a,"".concat(i,"-disabled"),_),a)),g=function(p){_||("checked"in e||I(p.target.checked),d==null||d({target:K(K({},e),{},{checked:p.target.checked}),stopPropagation:function(){p.stopPropagation()},preventDefault:function(){p.preventDefault()},nativeEvent:p.nativeEvent}))};return o.createElement("span",{className:V,style:v},o.createElement("input",me({},E,{className:"".concat(i,"-input"),ref:w,onChange:g,disabled:_,checked:!!P,type:C})),o.createElement("span",{className:"".concat(i,"-inner")}))});const De=new ge("antCheckboxEffect",{"0%":{transform:"scale(1)",opacity:.5},"100%":{transform:"scale(1.6)",opacity:0}}),je=e=>{const{checkboxCls:t}=e,a=`${t}-wrapper`;return[{[`${t}-group`]:Object.assign(Object.assign({},G(e)),{display:"inline-flex"}),[a]:Object.assign(Object.assign({},G(e)),{display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"},[`& + ${a}`]:{marginInlineStart:e.marginXS},[`&${a}-in-form-item`]:{'input[type="checkbox"]':{width:14,height:14}}}),[t]:Object.assign(Object.assign({},G(e)),{position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",alignSelf:"start",transform:`translate(0, ${e.lineHeight*e.fontSize/2-e.checkboxSize/2}px)`,[`${t}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0,[`&:focus-visible + ${t}-inner`]:Object.assign({},ve(e))},[`${t}-inner`]:{boxSizing:"border-box",position:"relative",top:0,insetInlineStart:0,display:"block",width:e.checkboxSize,height:e.checkboxSize,direction:"ltr",backgroundColor:e.colorBgContainer,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,borderCollapse:"separate",transition:`all ${e.motionDurationSlow}`,"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"21.5%",display:"table",width:e.checkboxSize/14*5,height:e.checkboxSize/14*8,border:`${e.lineWidthBold}px solid ${e.colorWhite}`,borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:`all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`}},"& + span":{paddingInlineStart:e.paddingXS,paddingInlineEnd:e.paddingXS}})},{[t]:{"&-indeterminate":{[`${t}-inner`]:{"&:after":{top:"50%",insetInlineStart:"50%",width:e.fontSizeLG/2,height:e.fontSizeLG/2,backgroundColor:e.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}}}}},{[`${a}:hover ${t}:after`]:{visibility:"visible"},[`
        ${a}:not(${a}-disabled),
        ${t}:not(${t}-disabled)
      `]:{[`&:hover ${t}-inner`]:{borderColor:e.colorPrimary}},[`${a}:not(${a}-disabled)`]:{[`&:hover ${t}-checked:not(${t}-disabled) ${t}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${t}-checked:not(${t}-disabled):after`]:{borderColor:e.colorPrimaryHover}}},{[`${t}-checked`]:{[`${t}-inner`]:{backgroundColor:e.colorPrimary,borderColor:e.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:`all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`}},"&:after":{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderRadius:e.borderRadiusSM,visibility:"hidden",border:`${e.lineWidthBold}px solid ${e.colorPrimary}`,animationName:De,animationDuration:e.motionDurationSlow,animationTimingFunction:"ease-in-out",animationFillMode:"backwards",content:'""',transition:`all ${e.motionDurationSlow}`}},[`
        ${a}-checked:not(${a}-disabled),
        ${t}-checked:not(${t}-disabled)
      `]:{[`&:hover ${t}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${t}:after`]:{borderColor:e.colorPrimaryHover}}},{[`${a}-disabled`]:{cursor:"not-allowed"},[`${t}-disabled`]:{[`&, ${t}-input`]:{cursor:"not-allowed",pointerEvents:"none"},[`${t}-inner`]:{background:e.colorBgContainerDisabled,borderColor:e.colorBorder,"&:after":{borderColor:e.colorTextDisabled}},"&:after":{display:"none"},"& + span":{color:e.colorTextDisabled},[`&${t}-indeterminate ${t}-inner::after`]:{background:e.colorTextDisabled}}}]};function Be(e,t){const a=Ce(t,{checkboxCls:`.${e}`,checkboxSize:t.controlInteractiveSize});return[je(a)]}const ee=fe("Checkbox",(e,t)=>{let{prefixCls:a}=t;return[Be(a,e)]});var Re=globalThis&&globalThis.__rest||function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(e);i<s.length;i++)t.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(e,s[i])&&(a[s[i]]=e[s[i]]);return a};const te=o.createContext(null),He=(e,t)=>{var{defaultValue:a,children:s,options:i=[],prefixCls:y,className:v,rootClassName:$,style:_,onChange:x}=e,h=Re(e,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]);const{getPrefixCls:l,direction:C}=o.useContext(Y),[d,E]=o.useState(h.value||a||[]),[w,c]=o.useState([]);o.useEffect(()=>{"value"in h&&E(h.value||[])},[h.value]);const O=()=>i.map(n=>typeof n=="string"||typeof n=="number"?{label:n,value:n}:n),P=n=>{c(f=>f.filter(F=>F!==n))},I=n=>{c(f=>[].concat(J(f),[n]))},V=n=>{const f=d.indexOf(n.value),F=J(d);f===-1?F.push(n.value):F.splice(f,1),"value"in h||E(F);const Z=O();x==null||x(F.filter(L=>w.includes(L)).sort((L,re)=>{const ne=Z.findIndex(q=>q.value===L),oe=Z.findIndex(q=>q.value===re);return ne-oe}))},g=l("checkbox",y),k=`${g}-group`,[p,S]=ee(g),r=xe(h,["value","disabled"]);i&&i.length>0&&(s=O().map(n=>o.createElement(ae,{prefixCls:g,key:n.value.toString(),disabled:"disabled"in n?n.disabled:h.disabled,value:n.value,checked:d.includes(n.value),onChange:n.onChange,className:`${k}-item`,style:n.style},n.label)));const b={toggleOption:V,value:d,disabled:h.disabled,name:h.name,registerValue:I,cancelValue:P},m=z(k,{[`${k}-rtl`]:C==="rtl"},v,$,S);return p(o.createElement("div",Object.assign({className:m,style:_},r,{ref:t}),o.createElement(te.Provider,{value:b},s)))},Me=o.forwardRef(He),Te=o.memo(Me);var ze=globalThis&&globalThis.__rest||function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(e);i<s.length;i++)t.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(e,s[i])&&(a[s[i]]=e[s[i]]);return a};const Le=(e,t)=>{var a,{prefixCls:s,className:i,rootClassName:y,children:v,indeterminate:$=!1,style:_,onMouseEnter:x,onMouseLeave:h,skipGroup:l=!1,disabled:C}=e,d=ze(e,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]);const{getPrefixCls:E,direction:w}=o.useContext(Y),c=o.useContext(te),{isFormItemInput:O}=o.useContext(ye),P=o.useContext(Se),I=(a=(c==null?void 0:c.disabled)||C)!==null&&a!==void 0?a:P,V=o.useRef(d.value);o.useEffect(()=>{c==null||c.registerValue(d.value)},[]),o.useEffect(()=>{if(!l)return d.value!==V.current&&(c==null||c.cancelValue(V.current),c==null||c.registerValue(d.value),V.current=d.value),()=>c==null?void 0:c.cancelValue(d.value)},[d.value]);const g=E("checkbox",s),[k,p]=ee(g),S=Object.assign({},d);c&&!l&&(S.onChange=function(){d.onChange&&d.onChange.apply(d,arguments),c.toggleOption&&c.toggleOption({label:v,value:d.value})},S.name=c.name,S.checked=c.value.includes(d.value));const r=z({[`${g}-wrapper`]:!0,[`${g}-rtl`]:w==="rtl",[`${g}-wrapper-checked`]:S.checked,[`${g}-wrapper-disabled`]:I,[`${g}-wrapper-in-form-item`]:O},i,y,p),b=z({[`${g}-indeterminate`]:$},p),m=$?"mixed":void 0;return k(o.createElement("label",{className:r,style:_,onMouseEnter:x,onMouseLeave:h},o.createElement(Fe,Object.assign({"aria-checked":m},S,{prefixCls:g,className:b,disabled:I,ref:t})),v!==void 0&&o.createElement("span",null,v)))},qe=o.forwardRef(Le),ae=qe,W=ae;W.Group=Te;W.__ANT_CHECKBOX=!0;const Ge=W,{InputWrapper:Ae,InputStyledNumber:We}=we,Ze=({label:e,value:t,width:a,error:s,length:i,onChange:y,...v})=>{const $=o.useId();return A(Ae,{$width:a,children:[u($e,{label:e}),u(We,{...v,id:$,value:t||"",onChange:x=>{const h=x.target.value.substring(0,i);/^[\\-]?\d*[\\.,]?\d*$/.test(h)&&y(h)},className:s?"error":""}),u(_e,{error:s})]})},Xe=e=>o.createElement("svg",{width:60,height:60,viewBox:"0 0 60 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("rect",{width:60,height:60,rx:30,fill:"#ECF2FF"}),o.createElement("path",{d:"M8.00003 60C12.3391 60 16 56.3717 16 51.9972C16 47.6072 12.39 44 8.00003 44C3.61995 44 0 47.62 0 51.9972C0 56.3971 3.61995 60 8.00003 60Z",fill:"#0063FD"}),o.createElement("path",{d:"M8.00003 57C7.36854 57 6.95871 56.5902 6.95871 55.9614V53.0385H4.04136C3.42522 53.0385 3.00282 52.6259 3.00005 51.9972C2.99453 51.3657 3.41971 50.9559 4.04136 50.9559H6.95871V48.0414C6.95871 47.4252 7.36854 47.0028 8.00003 47.0001C8.62875 46.9944 9.04134 47.4197 9.04134 48.0414V50.9559H11.9614C12.5748 50.9559 13 51.3657 13 51.9972C13 52.6259 12.5748 53.0385 11.9614 53.0385H9.04134V55.9614C9.04134 56.5902 8.62875 57 8.00003 57Z",fill:"white"}),o.createElement("path",{d:"M32.8875 37.499H27.6195V30.9788C27.6195 30.5095 27.9345 30.2045 28.4038 30.2045H32.1133C32.5826 30.2045 32.8875 30.5095 32.8875 30.9788V37.499ZM21.2478 37.1512C21.2478 38.5944 22.1549 39.4669 23.6417 39.4669H36.8883C38.3751 39.4669 39.2721 38.5944 39.2721 37.1512V29.4978L30.8817 22.4595C30.4909 22.1308 30.0262 22.1391 29.6438 22.4595L21.2478 29.4978V37.1512ZM18 28.1263C18 28.6448 18.3901 29.0871 19.0266 29.0871C19.3385 29.0871 19.6166 28.9257 19.8619 28.7241L29.8388 20.3535C30.1086 20.1147 30.425 20.1147 30.6966 20.3535L40.6682 28.7241C40.907 28.9257 41.185 29.0871 41.497 29.0871C42.074 29.0871 42.5153 28.7289 42.5153 28.151C42.5153 27.8117 42.3842 27.5493 42.1299 27.3324L31.6752 18.5451C30.8162 17.8183 29.7275 17.8183 28.8603 18.5451L18.3937 27.3342C18.1312 27.5529 18 27.8464 18 28.1263ZM36.4689 23.2617L39.3065 25.6497V20.8012C39.3065 20.3483 39.018 20.0599 38.5652 20.0599H37.212C36.7674 20.0599 36.4689 20.3483 36.4689 20.8012V23.2617Z",fill:"#0063FD"})),U={[M.step_3]:{title:"Адрес регистрации",label:"Введите свой действующий адрес прописки"},[M.step_4]:{title:"Адрес проживания",label:"Введите свой действующий адрес проживания"}},Ke=j(Ge)`
  font-size: ${e=>e.theme.fonts.size.small};
  color: ${e=>e.theme.colors.gray_200};
  opacity: 0.87;

  & .ant-checkbox {
    &:hover {
      & .ant-checkbox-inner {
        border: 1px solid ${e=>e.theme.colors.gray_200};
        &:after {
          inset-inline-start: 25%;
        }
      }
    }

    &:focus-within {
      & .ant-checkbox-inner {
        border: 1px solid ${e=>e.theme.colors.blue_400};
      }
    }

    &.ant-checkbox-checked:not(.ant-checkbox-disabled) {
      &:after {
        border: 1px solid ${e=>e.theme.colors.blue_400};;
      }

      & .ant-checkbox-inner {
        background-color: ${e=>e.theme.colors.blue_400}; !important;
        border: 1px solid ${e=>e.theme.colors.blue_400}; !important;
      }
    }

    & .ant-checkbox-inner {
      width: 18px;
      height: 18px;
    }
  }
`,Je={CheckboxStyled:Ke},{CheckboxStyled:Qe}=Je,Ue=({label:e,checked:t,className:a,onChange:s})=>u(Qe,{onChange:y=>{const v=y.target.checked;s(v)},checked:t,className:a,children:e}),{Option:Ye}=ke,et=j.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 40px;

  @media ${T.xl} {
    column-gap: 20px;
  }

  @media ${T.md} {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`,tt=j.div`
  display: flex;
  gap: 16px;

  @media ${T.xl} {
    gap: 10px;
  }

  @media ${T.md} {
    gap: 20px;
  }
`,at=j(Ye)``,rt=j(Ue)`
  margin-top: 40px;
`,nt={Fields:et,Group:tt,Checkbox:rt,OptionStyled:at},{Fields:ot,OptionStyled:D,Group:st,Checkbox:it}=nt,ut=({step:e})=>{const{[e]:t}=se(ie),[a,s]=o.useState([]),[i,y]=o.useState([]),[v,$]=o.useState([]),[_,x]=o.useState([]),h=le(),l=Oe({defaultValues:t||void 0}),C=l.getValues(),d=()=>{h(ce())},E=r=>{e===M.step_3?h(de(r)):e===M.step_4&&h(ue(r))},w=()=>{l.setValue("region",""),l.setValue("city",""),l.setValue("street",""),l.setValue("house",""),setTimeout(()=>l.setFocus("region"))},c=()=>{l.setValue("city",""),l.setValue("house",""),setTimeout(()=>l.setFocus("city"))},O=()=>{l.setValue("street",""),l.setValue("house",""),setTimeout(()=>l.setFocus("street"))},P=()=>{l.setValue("house",""),setTimeout(()=>l.setFocus("house"))},I=async r=>{var n;const b=(n=Q.find(f=>f.value===C.country))==null?void 0:n.code,m=await H.searchRegionsByCountry(r,b);s(m.data.suggestions.map(f=>({...f,value:f.value.replaceAll("/","")})))},V=async r=>{var n;const b=(n=a.find(f=>f.value===C.region))==null?void 0:n.data.fias_id,m=await H.searchCitiesByRegion(r,b);y(m.data.suggestions)},g=async r=>{var n;const b=(n=i.find(f=>f.data.city_with_type===C.city))==null?void 0:n.data.city_fias_id,m=await H.searchStreetsByCity(r,b);$(m.data.suggestions)},k=async r=>{var n;const b=(n=v.find(f=>f.data.street_with_type===C.street))==null?void 0:n.data.street_fias_id,m=await H.searchHousesByStreet(r,b);x(m.data.suggestions)},p=r=>{r&&(l.clearErrors("apartment"),l.setValue("apartment",""))},S=()=>{l.setValue("isNoApartment",!1)};return u(Ve,{icon:u(Xe,{}),title:U[e].title,text:U[e].label,btnPrev:{label:"Назад",onClick:d},btnNext:{label:"Далее",onClick:l.handleSubmit(E),disabled:Object.keys(l.formState.errors).length>0},children:u(ot,{children:A(Ee,{...l,children:[u(B,{name:"country",required:N.required,onChangeField:w,render:({value:r,onChange:b,error:m})=>u(Pe,{value:r,placeholder:"Россия",label:"Страна*",error:m,onChange:b,children:Q.map(n=>u(D,{value:n.value,children:n.label},n.value))})}),u(R,{name:"region",placeholder:"Выберите регион",label:"Регион*",required:N.required,disabled:!C.country,onChange:c,onSearch:I,children:a.map(r=>u(D,{value:r.value,children:r.value},r.data.fias_id))}),u(R,{name:"city",placeholder:"Введите населённый пункт",label:"Город / населённый пункт*",required:N.required,disabled:!C.region,onChange:O,onSearch:V,children:i.map(r=>u(D,{value:r.data.city_with_type,children:r.data.city_with_type},r.data.city_fias_id))}),u(R,{name:"street",placeholder:"Введите улицу",label:"Улица*",required:N.required,disabled:!C.city,onChange:P,onSearch:g,children:v.map(r=>u(D,{value:r.data.street_with_type,children:r.data.street_with_type},r.data.street_fias_id))}),A(st,{children:[u(R,{name:"house",placeholder:"0",label:"Дом*",required:N.required,disabled:!C.street,width:90,onSearch:k,children:_.map(r=>u(D,{value:r.data.house,children:r.data.house},r.data.house_fias_id))}),u(B,{name:"apartment",required:C.isNoApartment?!1:N.required,onChangeField:S,render:({value:r,onChange:b,error:m})=>u(Ze,{value:r,label:"Квартира*",placeholder:"0",width:90,error:m,onChange:b})}),u(B,{name:"isNoApartment",onChangeField:p,render:({value:r,onChange:b})=>u(it,{label:"Нет квартиры",checked:r,onChange:b})})]}),u(B,{name:"registrationDate",required:N.required,render:({value:r,onChange:b,error:m})=>u(Ie,{value:r,label:"Дата прописки*",placeholder:"дд.мм.гггг",onChange:b,error:m})})]})})})};export{ut as default};