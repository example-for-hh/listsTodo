"use strict";exports.id=807,exports.ids=[807],exports.modules={6146:(e,t,i)=>{i.a(e,async(e,o)=>{try{i.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var l=i(997),n=i(2296),d=i(9114),a=i(5609),r=i(6824),s=i(8696),c=i(9276),h=i(2029),m=i(1408),_=i(1870),p=i(856),u=i(9280),x=i(1527),g=i(8149),y=i(6272),f=i(1781),T=i(9884),E=i(4516),j=i(6229),b=e([p,u,g]);[p,u,g]=b.then?(await b)():b;let __WEBPACK_DEFAULT_EXPORT__=()=>{let e=(0,p.T)(),t=(0,p.C)((0,u.FD)(x.N)),[i]=(0,d.useMutation)(j.BQ,{onError:e=>console.error("Error creating list:",e)}),handleClose=()=>{e((0,g.Lc)({modalType:x.N}))},handleSubmut=async e=>{try{let t={title:e.title,todos:e.todos};await i({variables:{input:t}}),setTimeout(()=>handleClose(),200)}catch(e){console.log(e)}},o=a.object().shape({title:a.string().typeError("Это поле должно быть строкой").required("Это поле обязательно для заполнения"),todos:a.array().of(a.object().shape({title:a.string().required("Это поле обязательно для заполнения")})).min(1,"Минимум одна задача должна быть").required("Это поле обязательно для заполнения")});return l.jsx(l.Fragment,{children:l.jsx(n.Formik,{initialValues:{title:"",todos:[{title:""}]},validationSchema:o,onSubmit:e=>handleSubmut(e),children:e=>{let{values:i,touched:o,errors:d,handleChange:a,handleSubmit:p,handleBlur:u}=e;return l.jsx(r.Z,{onCloseModal:handleClose,children:(0,l.jsxs)(n.Form,{onSubmit:p,children:[l.jsx(m.Z,{children:l.jsx(h.Z,{title:t.modalTitle})}),(0,l.jsxs)(s.Z,{children:[(0,l.jsxs)(y.Z,{children:[l.jsx(f.Z,{name:"title",type:"text",placeholder:"Заголовок списка",onChange:a,value:i.title,error:!!o.title&&!!d.title}),o.title&&d.title&&l.jsx(T.Z,{name:"title"})]}),l.jsx(n.FieldArray,{name:"todos",children:({push:e,remove:t})=>(0,l.jsxs)(l.Fragment,{children:[i.todos.map((e,i)=>(0,l.jsxs)(y.Z,{children:[l.jsx(f.Z,{name:`todos.${i}.title`,type:"text",placeholder:`Задача ${i+1}`,onChange:a,onBlur:u,value:e.title,error:!!o.todos&&!!o.todos[i]&&!!d.todos&&!!d.todos[i]}),o.todos&&o.todos[i]&&d.todos&&d.todos[i]&&l.jsx(T.Z,{name:`todos.${i}.title`}),l.jsx(c.Z,{onClick:()=>t(i),typeText:!0,children:"Удалить"})]},i)),l.jsx(E.hU,{children:l.jsx(c.Z,{onClick:()=>e({title:""}),children:"Добавить задачу"})})]})})]}),(0,l.jsxs)(_.Z,{children:[l.jsx(c.Z,{type:"submit",text:"Сохранить",onSubmit:()=>p}),l.jsx(c.Z,{text:"Закрыть",onClick:handleClose})]})]})})}})})};o()}catch(e){o(e)}})},1553:(e,t,i)=>{i.a(e,async(e,o)=>{try{i.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var l=i(997),n=i(2296),d=i(5609),a=i(6824),r=i(8696),s=i(9276),c=i(2029),h=i(1408),m=i(1870),_=i(856),p=i(9280),u=i(1527),x=i(8149),g=i(6272),y=i(1781),f=i(9884),T=i(9114),E=i(6229),j=e([_,p,x]);[_,p,x]=j.then?(await j)():j;let __WEBPACK_DEFAULT_EXPORT__=()=>{let e=(0,_.T)(),t=(0,_.C)((0,p.FD)(u.H)),[i]=(0,T.useMutation)(E.Tl,{onError:e=>console.error("Error creating todo:",e)}),handleClose=()=>{e((0,x.Lc)({modalType:u.H}))},handleSubmut=async e=>{try{let{title:o}=e;await i({variables:{input:{title:o},listId:t.modalProps.listId}}),setTimeout(()=>handleClose(),200)}catch(e){console.log(e)}},o=d.object().shape({title:d.string().typeError("Это поле должно быть строкой").required("Это поле обязательно для заполнения")});return l.jsx(l.Fragment,{children:l.jsx(n.Formik,{initialValues:{title:""},validationSchema:o,onSubmit:e=>handleSubmut(e),children:e=>{let{values:i,touched:o,errors:d,handleChange:_,handleSubmit:p}=e;return l.jsx(a.Z,{onCloseModal:handleClose,children:(0,l.jsxs)(n.Form,{onSubmit:p,children:[l.jsx(h.Z,{children:l.jsx(c.Z,{title:t.modalTitle})}),l.jsx(r.Z,{children:(0,l.jsxs)(g.Z,{children:[l.jsx(y.Z,{name:"title",type:"text",placeholder:"Заголовок списка",onChange:_,value:i.title,error:!!o.title&&!!d.title}),o.title&&d.title&&l.jsx(f.Z,{name:"title"})]})}),(0,l.jsxs)(m.Z,{children:[l.jsx(s.Z,{type:"submit",text:"Сохранить",onSubmit:()=>p}),l.jsx(s.Z,{text:"Закрыть",onClick:handleClose})]})]})})}})})};o()}catch(e){o(e)}})},8696:(e,t,i)=>{i.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var o=i(997),l=i(4516);let __WEBPACK_DEFAULT_EXPORT__=({children:e})=>o.jsx(o.Fragment,{children:o.jsx(l.rG,{children:e})})},1870:(e,t,i)=>{i.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var o=i(997),l=i(4516);let __WEBPACK_DEFAULT_EXPORT__=({children:e})=>o.jsx(o.Fragment,{children:o.jsx(l.Qu,{children:e})})},1408:(e,t,i)=>{i.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var o=i(997),l=i(4516);let __WEBPACK_DEFAULT_EXPORT__=({children:e})=>o.jsx(o.Fragment,{children:o.jsx(l.lb,{children:e})})},2029:(e,t,i)=>{i.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var o=i(997),l=i(4429);let __WEBPACK_DEFAULT_EXPORT__=({title:e})=>o.jsx(o.Fragment,{children:o.jsx(l.Z,{title:e,type:"h3"})})},1174:(e,t,i)=>{i.a(e,async(e,o)=>{try{i.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var l=i(997);i(6689);var n=i(3291),d=i(9280),a=i(4510),r=i(4516),s=e([n,d,a]);[n,d,a]=s.then?(await s)():s;let __WEBPACK_DEFAULT_EXPORT__=()=>{let e=(0,n.useSelector)((0,d.gD)(!0));return l.jsx(l.Fragment,{children:e.map((e,t)=>{let i=a.n[e.modalType];return l.jsx(r.kQ,{children:i&&l.jsx(i,{props:e.props??null},t)},e.id||t)})})};o()}catch(e){o(e)}})},6824:(e,t,i)=>{i.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var o=i(997),l=i(6689),n=i(9276),d=i(2104),a=i(4516);let __WEBPACK_DEFAULT_EXPORT__=({children:e,onCloseModal:t})=>{let i=(0,l.useRef)(null);return o.jsx(o.Fragment,{children:o.jsx(a.b4,{children:(0,o.jsxs)(a.hz,{ref:i,children:[o.jsx(n.Z,{modal:!0,onClick:t,children:o.jsx(d.ys,{})}),e]})})})}},4510:(e,t,i)=>{i.a(e,async(e,o)=>{try{i.d(t,{n:()=>r,q:()=>s});var l=i(1527),n=i(6146),d=i(1553),a=e([n,d]);[n,d]=a.then?(await a)():a;let r={[l.N]:n.Z,[l.H]:d.Z},s=[{modalTitle:"Добавить новый лист",modalType:l.N,isOpenModal:!1},{modalTitle:"Добавить новую задачу",modalType:l.H,isOpenModal:!1}];o()}catch(e){o(e)}})},4516:(e,t,i)=>{i.d(t,{Qu:()=>s,b4:()=>n,hU:()=>h,hz:()=>d,kQ:()=>a,lb:()=>r,rG:()=>c});var o=i(7518),l=i.n(o);let n=l().div.withConfig({displayName:"styled__ModalStyled",componentId:"sc-e5e87d58-0"})`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 10;
  padding: 40px 0;
  background: hsla(0deg, 0%, 0%, 0.7);
`,d=l().div.withConfig({displayName:"styled__ModalContent",componentId:"sc-e5e87d58-1"})`
  position: relative;
  align-self: flex-start;
  width: 560px;
  padding: 16px;
  background: #fff;
  color: #000;
`,a=l().div.withConfig({displayName:"styled__ModalViewStyled",componentId:"sc-e5e87d58-2"})`
  position: relative;
`,r=l().div.withConfig({displayName:"styled__ModalHeaderStyled",componentId:"sc-e5e87d58-3"})`
  padding-bottom: 16px;
  border-bottom: 1px solid #000;
`,s=l().div.withConfig({displayName:"styled__ModalFooterStyled",componentId:"sc-e5e87d58-4"})`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 100%;
  padding-top: 45px;
  border-top: 1px solid #fff;
  button {
    &:only-child {
      margin: 0;
    }

    &:not(:first-child) {
      margin-left: 5px;
    }

    &:not(:last-child) {
      margin-right: 5px;
    }

    &:not(:first-child):not(:last-child) {
      margin: 0 5px;
    }
  }
`,c=l().div.withConfig({displayName:"styled__ModalBodyStyled",componentId:"sc-e5e87d58-5"})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 24px;
  padding-bottom: 24px;
`,h=l().div.withConfig({displayName:"styled__ModalBtnAdd",componentId:"sc-e5e87d58-6"})`
  position: absolute;
  bottom: 0;
`},9276:(e,t,i)=>{i.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var o=i(997);i(6689);var l=i(7518),n=i.n(l);let d=n().button.withConfig({displayName:"Button__StyledButton",componentId:"sc-905642f6-0"})`
  padding: 10px;
  background: #000;
  color: #fff;
  border: none;
  cursor: pointer;
  transition:
    transform 1s ease,
    background-color 0.2s ease;

  ${e=>e.$typeText&&l.css`
      padding: 0;
      background: none;
      color: #000;
      text-decoration: underline;
    `}

  ${e=>e.$modal&&l.css`
      position: absolute;
      top: 0;
      right: -50px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      background: #fff;

      &:hover {
        transform: rotate(360deg);
        background: #000;
        svg {
          fill: #fff;
        }
      }
      svg {
        width: 20px;
        height: 20px;
        fill: #000;
      }
    `}
`,a=n().span.withConfig({displayName:"Button__ButtonSpan",componentId:"sc-905642f6-1"})`
  padding: 0;
  background: none;
`,__WEBPACK_DEFAULT_EXPORT__=({typeText:e=!1,modal:t=!1,text:i,children:l,...n})=>{let{type:r="button",...s}=n;return(0,o.jsxs)(d,{...s,type:r,$typeText:e,$modal:t,children:[i&&o.jsx(a,{children:i}),l]})}},6272:(e,t,i)=>{i.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var o=i(997),l=i(7518);let n=l.styled.div`
  position: relative;
  width: 100%;
  &:only-child {
    margin: 0;
  }
  &:first-child {
    margin-bottom: 15px;
  }

  &:last-child {
    margin-top: 15px;
  }

  &:not(:first-child):not(:last-child) {
    margin: 15px 0;
  }
`,__WEBPACK_DEFAULT_EXPORT__=({children:e})=>o.jsx(n,{children:e})},9884:(e,t,i)=>{i.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var o=i(997),l=i(7518),n=i(2296);let d=l.styled.div`
  position: absolute;
  right: 0;
  bottom: -15px;
  color: #ff0000;
  font-size: 12px;
`,__WEBPACK_DEFAULT_EXPORT__=({name:e})=>o.jsx(o.Fragment,{children:o.jsx(d,{children:o.jsx(n.ErrorMessage,{name:e})})})},2104:(e,t,i)=>{i.d(t,{bM:()=>Icons_IconCheckbox,ys:()=>Icons_IconClose,HF:()=>Icons_IconRemove});var o=i(997),l=i(7518),n=i.n(l);let d=n().svg.withConfig({displayName:"IconCheckbox__Checkmark",componentId:"sc-7d8ebb8f-0"})`
  display: block;
  width: 36px;
  height: 36px;
  transform-origin: 50% 50%;
  border-radius: 50%;
  stroke-width: 5;
  stroke: #2aff00;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  cursor: pointer;
`,a=n().circle.withConfig({displayName:"IconCheckbox__CheckmarkCircle",componentId:"sc-7d8ebb8f-1"})`
  stroke: rgb(0 0 0 / 20%);
  stroke-width: 1px;
  stroke-dasharray: 0;
  fill: none;
`,Icons_IconCheckbox=({...e})=>o.jsx(o.Fragment,{children:(0,o.jsxs)(d,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52",...e,children:[o.jsx(a,{cx:"26",cy:"26",r:"25",fill:"none"}),o.jsx("path",{fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"})]})}),Icons_IconClose=({...e})=>o.jsx(o.Fragment,{children:o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",...e,children:(0,o.jsxs)("g",{xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"M25 512a25 25 0 0 1-17.68-42.68l462-462a25 25 0 0 1 35.36 35.36l-462 462A24.93 24.93 0 0 1 25 512z"}),o.jsx("path",{d:"M487 512a24.93 24.93 0 0 1-17.68-7.32l-462-462A25 25 0 0 1 42.68 7.32l462 462A25 25 0 0 1 487 512z"})]})})}),r=n().svg.withConfig({displayName:"IconRemove__IconRemoveStyled",componentId:"sc-b0c359f2-0"})`
  ${e=>"add"===e.type&&l.css`
      transform: rotate(45deg);
      fill: green;
    `}

  ${e=>"remove"===e.type&&l.css`
      fill: red;
    `}
`,Icons_IconRemove=({...e})=>o.jsx(o.Fragment,{children:o.jsx(r,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",...e,children:o.jsx("path",{d:"M498.109 430.993a47.458 47.458 0 0 1-67.116 67.116L263.671 330.784a10.848 10.848 0 0 0-15.341 0L81.007 498.109a47.459 47.459 0 0 1-67.117-67.116l167.325-167.319a10.847 10.847 0 0 0 0-15.341L13.891 81.007a47.458 47.458 0 0 1 67.116-67.116L248.33 181.22a10.851 10.851 0 0 0 15.341 0L430.993 13.891a47.458 47.458 0 0 1 67.116 67.116L330.784 248.333a10.847 10.847 0 0 0 0 15.341z"})})})},1781:(e,t,i)=>{i.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var o=i(997),l=i(7518);let n=l.styled.input`
  width: 100%;
  padding: 21px 0;
  border-bottom: 1px solid #000;
  background: #fff;
`,__WEBPACK_DEFAULT_EXPORT__=({error:e=!1,...t})=>{let{children:i,...l}=t;return(0,o.jsxs)(o.Fragment,{children:[o.jsx(n,{...l}),i]})}},4429:(e,t,i)=>{i.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var o=i(997),l=i(7518),n=i.n(l);let d={h1:l.css`
    font-size: 2em;
    color: #bf4f74;
  `,h2:l.css`
    font-size: 1.75em;
    color: #4f74bf;
  `,h3:l.css`
    font-size: 1.5em;
    color: #74bf4f;
  `,h4:l.css`
    font-size: 1.25em;
    color: #4f4fbf;
  `,h5:l.css`
    font-size: 1em;
    color: #bf4fbf;
  `,h6:l.css`
    font-size: 0.875em;
    color: #4fbf74;
  `},a=n().h1.withConfig({displayName:"Title__StyledTitle",componentId:"sc-46c06d5d-0"})`
  ${e=>d[e.as]}
`,__WEBPACK_DEFAULT_EXPORT__=({title:e,type:t})=>o.jsx(a,{as:t,children:e})},6229:(e,t,i)=>{i.d(t,{BQ:()=>l,Tl:()=>d,DU:()=>s,Iy:()=>a,PC:()=>c,qB:()=>n,Iu:()=>r});var o=i(9114);let l=o.gql`
  mutation ($input: ListInput!) {
    createList(input: $input) {
      id
      title
      todos {
        id
        title
        checked
      }
    }
  }
`,n=o.gql`
  mutation ($id: ID!) {
    deleteList(id: $id)
  }
`,d=o.gql`
  mutation ($input: TodoInput!, $listId: ID!) {
    createTodo(input: $input, listId: $listId) {
      id
      title
      checked
      listId
    }
  }
`,a=o.gql`
  mutation ($id: ID!, $listId: ID!) {
    deleteTodo(id: $id, listId: $listId) {
      id
      listId
    }
  }
`,r=o.gql`
  mutation ($id: ID!, $listId: ID!) {
    updateTodo(id: $id, listId: $listId) {
      id
      checked
      listId
    }
  }
`,s=o.gql`
  mutation ($id: ID!) {
    clearCompleted(id: $id) {
      id
      title
      todos {
        id
        title
        checked
      }
    }
  }
`,c=o.gql`
  query {
    lists {
      id
      title
      todos {
        id
        title
        checked
      }
      isOpened @client
      selectedFilter @client
      activeTodoCount @client
    }
  }
`},856:(e,t,i)=>{i.a(e,async(e,o)=>{try{i.d(t,{C:()=>d,T:()=>useAppDispatch});var l=i(3291),n=e([l]);l=(n.then?(await n)():n)[0];let useAppDispatch=()=>(0,l.useDispatch)(),d=l.useSelector;o()}catch(e){o(e)}})},4896:(e,t,i)=>{i.a(e,async(e,o)=>{try{i.d(t,{Z:()=>g});var l=i(9114);i(3761);var n=i(2024);i(7596);var d=i(2546),a=i(4558),r=i.n(a),s=i(9031),c=i.n(s);i(8028);var h=e([n]);n=(h.then?(await h)():h)[0];let{serverRuntimeConfig:m,publicRuntimeConfig:_}=r()(),p=m.apiUrl||_.apiUrl;m.apiUrlWs||_.apiUrlWs;let u=new l.HttpLink({uri:p,fetch:c()}),x=new l.ApolloClient({link:u,cache:new l.InMemoryCache({typePolicies:{List:{keyFields:["id"],fields:{isOpened:{read:(e=!1)=>e},selectedFilter:{read:(e=d.hV)=>e},todos:{read(e=[],{readField:t}){let i=t("selectedFilter");switch(i){case d.bt:return e.filter(e=>!t("checked",e));case d.Kc:return e.filter(e=>t("checked",e));case d.hV:default:return e}},merge:(e,t)=>0===t.length?[]:t},activeTodoCount:{read(e,{readField:t}){let i=t("todos")||[];return i?.filter(e=>!t("checked",e)).length}}}}}})}),g=x;o()}catch(e){o(e)}})},4807:(e,t,i)=>{i.a(e,async(e,o)=>{try{i.r(t),i.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var l=i(997),n=i(6689),d=i(3291);i(8229);var a=i(3372),r=i(1174),s=i(4276),c=i(9114),h=i(4896),m=e([d,a,r,h]);[d,a,r,h]=m.then?(await m)():m;let __WEBPACK_DEFAULT_EXPORT__=({Component:e,router:t,...i})=>{let o=(0,n.useRef)(null);return o.current||(o.current=(0,a.n)()),l.jsx(l.Fragment,{children:l.jsx(c.ApolloProvider,{client:h.Z,children:(0,l.jsxs)(d.Provider,{store:o.current,children:[l.jsx(s.Z,{}),l.jsx(e,{...i},t.asPath),l.jsx(r.Z,{})]})})})};o()}catch(e){o(e)}})},9280:(e,t,i)=>{i.a(e,async(e,o)=>{try{i.d(t,{FD:()=>selectModalByType,gD:()=>selectIsOpenModals});var l=i(3258),n=e([l]);l=(n.then?(await n)():n)[0];let selectModals=e=>e.modal,selectModalByType=e=>(0,l.createSelector)([selectModals],t=>t.find(t=>t.modalType===e)),selectIsOpenModals=e=>(0,l.createSelector)([selectModals],t=>t.filter(t=>t.isOpenModal===e));o()}catch(e){o(e)}})},8149:(e,t,i)=>{i.a(e,async(e,o)=>{try{i.d(t,{Lc:()=>r,RE:()=>a});var l=i(4510),n=i(3258),d=e([l,n]);[l,n]=d.then?(await d)():d;let a=(0,n.createSlice)({name:"modal",initialState:[],reducers:{modalToggle:(e,t)=>{let i=e.find(e=>e.modalType===t.payload.modalType);if(i)return e.filter(e=>e.modalType!==t.payload.modalType);{let i=l.q.find(e=>e.modalType===t.payload.modalType);i&&e.push({...i,modalProps:t.payload.modalProps??null,isOpenModal:!0})}}}}),{modalToggle:r}=a.actions;a.reducer,o()}catch(e){o(e)}})},3372:(e,t,i)=>{i.a(e,async(e,o)=>{try{i.d(t,{n:()=>makeStore});var l=i(3258);i(8229);var n=i(8149),d=e([l,n]);[l,n]=d.then?(await d)():d;let a={[n.RE.name]:n.RE.reducer},r=(0,l.combineReducers)(a),makeStore=()=>(0,l.configureStore)({reducer:r,devTools:!0});o()}catch(e){o(e)}})},4276:(e,t,i)=>{i.d(t,{Z:()=>d});var o=i(7518);let customMinMediaQuery=e=>`@media (min-width: ${e}px)`,customMaxMediaQuery=e=>`@media (max-width: ${e}px)`,l={min:{xs:customMinMediaQuery(330),sm:customMinMediaQuery(592),md:customMinMediaQuery(768),lg:customMinMediaQuery(992),xl:customMinMediaQuery(1024),xxl:customMinMediaQuery(1200),custom:customMinMediaQuery},max:{xs:customMaxMediaQuery(330),sm:customMaxMediaQuery(592),md:customMaxMediaQuery(768),lg:customMaxMediaQuery(992),xl:customMaxMediaQuery(1024),xxl:customMaxMediaQuery(1200),custom:customMaxMediaQuery}},n=o.createGlobalStyle`
    body {
      margin: 0;
      padding: 0;
      font-family: Montserrat, sans-serif;
      font-size: 16px;
    }
    .container {
      inline-size: 100%;
      margin-inline-start: auto;
      margin-inline-end: auto;
      padding-inline-start: 15px;
      padding-inline-end: 15px;
  }
  @font-face {
    font-family: 'MontserratRegular';
    src: url(${"/_next/static/fonts/Montserrat-Regular.ttf"}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  ${l.min.xxl} {
    .container {
        max-inline-size: 720px;
    }
  }

  button {
    margin: 0;
    padding: 0;
    vertical-align: middle;
    border: 0;
    outline: 0;
    background: none;
    color: var(--colorMain);
    text-decoration: none;
    text-transform: none;
    text-align: center;
    line-height: normal;
    white-space: normal;

    cursor: pointer;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
      margin: 0;
      margin-block-end: 0;
      margin-block-start: 0;
  }

  form {
      position: relative;
      inline-size: 100%;
      block-size: 100%;
  }
  svg {
    cursor: pointer;
  }
  input,
  textarea {
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      background: none;
  }


`,d=n},1527:(e,t,i)=>{i.d(t,{H:()=>l,N:()=>o});let o="modalAddList",l="modalAddTodos"},2546:(e,t,i)=>{i.d(t,{Kc:()=>n,bt:()=>l,hV:()=>o});let o="All",l="Active",n="Archive"}};