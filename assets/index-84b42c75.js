import{r as i,s as c,j as u,a as t,c as v,m as C,u as b,b as f,d as w,n as y}from"./index-98628372.js";import{L as $,E as S,c as n,S as I,u as F,F as q,a as _,b as p,d as E}from"./config-fields-39fe3011.js";import{S as H,a as B,D as V}from"./api-d8ae2634.js";import{I as h}from"./Input-6dcf42fe.js";import{c as M}from"./countries-65cfc65d.js";const D=e=>i.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"#B8B8B8",xmlns:"http://www.w3.org/2000/svg",...e},i.createElement("path",{d:"M10 2.8125C10.663 2.8125 11.2989 3.07589 11.7678 3.54473C12.2366 4.01357 12.5 4.64946 12.5 5.3125C12.5 5.97554 12.2366 6.61143 11.7678 7.08027C11.2989 7.54911 10.663 7.8125 10 7.8125C9.33696 7.8125 8.70107 7.54911 8.23223 7.08027C7.76339 6.61143 7.5 5.97554 7.5 5.3125C7.5 4.64946 7.76339 4.01357 8.23223 3.54473C8.70107 3.07589 9.33696 2.8125 10 2.8125ZM8.125 9.0625H11.875C12.538 9.0625 13.1739 9.32589 13.6428 9.79473C14.1116 10.2636 14.375 10.8995 14.375 11.5625V17.1875H12.5H7.5H5.625V11.5625C5.625 10.8995 5.88839 10.2636 6.35723 9.79473C6.82607 9.32589 7.46196 9.0625 8.125 9.0625Z"})),L=e=>i.createElement("svg",{width:60,height:60,viewBox:"0 0 60 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},i.createElement("rect",{width:60,height:60,rx:30,fill:"#ECF2FF"}),i.createElement("path",{d:"M30 30C32.8406 30 35.1429 27.7617 35.1429 25C35.1429 22.2383 32.8406 20 30 20C27.1594 20 24.8571 22.2383 24.8571 25C24.8571 27.7617 27.1594 30 30 30ZM33.6 31.25H32.929C32.0371 31.6484 31.0446 31.875 30 31.875C28.9554 31.875 27.967 31.6484 27.071 31.25H26.4C23.4187 31.25 21 33.6016 21 36.5V38.125C21 39.1602 21.8638 40 22.9286 40H37.0714C38.1362 40 39 39.1602 39 38.125V36.5C39 33.6016 36.5813 31.25 33.6 31.25Z",fill:"#0063FD"}),i.createElement("path",{d:"M8.00003 60C12.3391 60 16 56.3717 16 51.9972C16 47.6072 12.39 44 8.00003 44C3.61995 44 0 47.62 0 51.9972C0 56.3971 3.61995 60 8.00003 60Z",fill:"#0063FD"}),i.createElement("path",{d:"M8.00003 57C7.36854 57 6.95871 56.5902 6.95871 55.9614V53.0385H4.04136C3.42522 53.0385 3.00282 52.6259 3.00005 51.9972C2.99453 51.3657 3.41971 50.9559 4.04136 50.9559H6.95871V48.0414C6.95871 47.4252 7.36854 47.0028 8.00003 47.0001C8.62875 46.9944 9.04134 47.4197 9.04134 48.0414V50.9559H11.9614C12.5748 50.9559 13 51.3657 13 51.9972C13 52.6259 12.5748 53.0385 11.9614 53.0385H9.04134V55.9614C9.04134 56.5902 8.62875 57 8.00003 57Z",fill:"white"})),Z=e=>i.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"#B8B8B8",xmlns:"http://www.w3.org/2000/svg",...e},i.createElement("path",{d:"M11.7678 3.54473C11.2989 3.07589 10.663 2.8125 10 2.8125C9.33696 2.8125 8.70107 3.07589 8.23223 3.54473C7.76339 4.01357 7.5 4.64946 7.5 5.3125C7.5 5.97554 7.76339 6.61143 8.23223 7.08027C8.70107 7.54911 9.33696 7.8125 10 7.8125C10.663 7.8125 11.2989 7.54911 11.7678 7.08027C12.2366 6.61143 12.5 5.97554 12.5 5.3125C12.5 4.64946 12.2366 4.01357 11.7678 3.54473Z"}),i.createElement("path",{d:"M5.625 17.1875H8.125H11.875H14.375L12.3875 10.825C12.075 9.8 11.125 9.0625 10 9.0625C8.875 9.0625 7.925 9.8 7.6125 10.825L5.625 17.1875Z"})),W=c.div``,k=c.ul`
  margin-top: 12px;
  display: flex;
  gap: 9px;
  height: 54px;
`,A=c.li`
  width: ${e=>e.$width?typeof e.$width=="number"?`${e.$width}px`:e.$width:"auto"};

  border: 1px solid ${e=>e.theme.colors.gray_100};
  background-color: ${e=>e.theme.colors.white};

  display: flex;
  align-items: center;
  border-radius: 7px;
  padding: 0 18px 0 12px;
  font-size: 15px;
  line-height: 18px;
  color: ${e=>e.theme.colors.gray_200};

  cursor: pointer;
  transition: all 0.2s;

  &.error {
    border: 1px solid ${e=>e.theme.colors.red};
  }

  &:hover {
    border: 1px solid ${e=>e.theme.colors.gray_200};
  }

  &:focus {
    border: 1px solid ${e=>e.theme.colors.gray_200};
  }

  &.active {
    border: 1px solid ${e=>e.theme.colors.blue_400};
    color: ${e=>e.theme.colors.blue_400};
    font-weight: ${e=>e.theme.fonts.weight.medium};

    & > div {
      opacity: 1;
      svg {
        fill: ${e=>e.theme.colors.blue_400};
      }
    }
  }
`,N=c.div``,j=c.div`
  margin-left: 10px;
  opacity: 0.7;
`,P={Wrapper:W,Items:k,Item:A,ItemIcon:N,ItemText:j},{Wrapper:T,Items:G,Item:z,ItemIcon:O,ItemText:R}=P,J=({width:e,label:m,items:s,defaultValue:o,error:r,onChange:a})=>{const[l,x]=i.useState(o||""),g=d=>{x(d),a&&a(d)};return u(T,{children:[t($,{label:m}),t(G,{children:s.map(d=>u(z,{$width:e,onClick:()=>g(d.value),className:v({active:l===d.value,error:r}),tabIndex:0,children:[t(O,{children:d.icon}),t(R,{children:d.value})]},d.value))}),t(S,{error:r})]})},K=c.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 40px;

  @media ${C.xl} {
    column-gap: 20px;
  }

  @media ${C.md} {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`,Q=c.div`
  display: flex;
  gap: 30px;

  @media ${C.xl} {
    gap: 10px;
  }
`,U=c.div`
  grid-column: span 2;
`,X={Fields:K,DateAndGender:Q,InputFullWidth:U},{Option:Y}=I,ee=()=>{const[e,m]=i.useState([]),s=async o=>{const r=await B.searchCitiesByRegion(o);m(r.data.suggestions)};return t(H,{name:"city",placeholder:"Санкт-Петербург",label:"Основной город*",required:n.required,onSearch:s,children:e.map(o=>t(Y,{value:o.data.city_with_type,children:o.data.city_with_type},o.data.city_fias_id))})},{Fields:te,DateAndGender:re,InputFullWidth:ae}=X,de=()=>{const{step_1:e}=b(f),m=w(),s=F({defaultValues:e||void 0}),o=r=>{m(y(r))};return t(q,{icon:t(L,{}),title:"Общие",text:"Введите свои персональные данные",btnPrev:{label:"Отмена",onClick:()=>{alert("Пока нельзя :)")}},btnNext:{label:"Далее",onClick:s.handleSubmit(o),disabled:Object.keys(s.formState.errors).length>0},...s,children:t(_,{...s,children:u(te,{children:[t(p,{name:"firstName",required:n.required,pattern:n.onlyLetters.pattern,render:({value:r,onChange:a,error:l})=>t(h,{value:r,label:"Фамилия*",placeholder:"Васильев",error:l,onChange:a})}),t(p,{name:"lastName",required:n.required,pattern:n.onlyLetters.pattern,render:({value:r,onChange:a,error:l})=>t(h,{value:r,label:"Имя*",placeholder:"Иван",error:l,onChange:a})}),t(p,{name:"middleName",required:n.required,pattern:n.onlyLetters.pattern,render:({value:r,onChange:a,error:l})=>t(h,{value:r,label:"Отчество*",placeholder:"Сергеевич",error:l,onChange:a})}),t(ee,{}),t(p,{name:"citizenship",required:n.required,render:({value:r,onChange:a,error:l})=>t(E,{value:r,placeholder:"Россия",label:"Гражданство*",items:M,showSearch:!0,onChange:a,error:l})}),u(re,{children:[t(p,{name:"gender",required:n.required,render:({onChange:r,error:a})=>t(J,{defaultValue:e==null?void 0:e.gender,label:"Пол*",items:[{icon:t(D,{}),value:"М"},{icon:t(Z,{}),value:"Ж"}],error:a,onChange:r})}),t(p,{name:"birthday",required:n.required,render:({value:r,onChange:a,error:l})=>t(V,{value:r,label:"Дата рождения*",placeholder:"01.01.2000",error:l,onChange:a})})]}),t(p,{name:"birthPlace",required:n.required,render:({value:r,onChange:a,error:l})=>t(ae,{children:t(h,{value:r,placeholder:"Введите наименование региона и населенного пункта",label:"Место рождения (как указано в паспорте)*",error:l,onChange:a})})})]})})})};export{de as default};
