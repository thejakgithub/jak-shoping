(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{103:function(e,t,c){},104:function(e,t,c){},105:function(e,t,c){},111:function(e,t,c){},161:function(e,t,c){},162:function(e,t,c){},163:function(e,t,c){},164:function(e,t,c){},165:function(e,t,c){},166:function(e,t,c){},167:function(e,t,c){},168:function(e,t,c){},267:function(e,t,c){},268:function(e,t,c){},269:function(e,t,c){},270:function(e,t,c){},271:function(e,t,c){"use strict";c.r(t);var r=c(1),a=c.n(r),s=c(46),n=c.n(s),i=(c(103),c(11)),o=(c(104),c(10)),l=c(13),j=(c(105),c(16)),d=c(47),b=(c(111),c(24)),u=c.n(b),p=c(0),m=function(e){var t=e.imageUrl,c=e.name,r=e.price,a=e.description,s=e.productId;return Object(p.jsxs)("div",{className:"product",children:[Object(p.jsxs)("div",{className:"product__info",children:[Object(p.jsx)("img",{src:t,alt:c}),Object(p.jsx)("p",{className:"info__name",children:c}),Object(p.jsx)("p",{className:"info__description",children:a}),Object(p.jsx)("p",{className:"info__price",children:u()(r).format("$0,0")})]}),Object(p.jsx)(o.b,{to:"/product/".concat(s),className:"info__button",children:"View"})]})},O=c(4),h=c.n(O),x=c(15),f="GET_PRODUCTS_SUCCESS",g="GET_PRODUCTS_FAIL",_="GET_PRODUCTS_DETAILS_REQUEST",v="GET_PRODUCTS_DETAILS_SUCCESS",N="GET_PRODUCTS_DETAILS_FAIL",y="GET_PRODUCTS_DETAILS_RESET",S=c(25),C=c.n(S);var k=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.getProducts})),c=t.products,a=t.loading,s=t.error;return Object(r.useEffect)((function(){e(function(){var e=Object(x.a)(h.a.mark((function e(t){var c,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"GET_PRODUCTS_REQUEST"}),e.next=4,C.a.get("/api/products");case 4:c=e.sent,r=c.data,t({type:f,payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:g,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(p.jsxs)("div",{className:"homepage",children:[Object(p.jsx)("h2",{className:"homepage__title",children:"Latest Products"}),Object(p.jsx)("div",{className:"homepage__products",children:a?Object(p.jsx)(d.BarLoader,{color:"#171717",loading:a,size:15,height:4,width:"100%"}):s?Object(p.jsx)("h2",{children:s}):c.map((function(e){return Object(p.jsx)(m,{productId:e._id,name:e.name,price:e.price,description:e.description,imageUrl:e.imageUrl},e._id)}))})]})},I=c(3),w=(c(161),"ADD_TO_CART"),T="REMOVE_FROM_CART",q=function(e,t){return function(){var c=Object(x.a)(h.a.mark((function c(r,a){var s,n;return h.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,C.a.get("/api/products/".concat(e));case 2:s=c.sent,n=s.data,r({type:w,payload:{product:n._id,name:n.name,imageUrl:n.imageUrl,price:n.price,countInStock:n.countInStock,qty:t}}),localStorage.setItem("cart",JSON.stringify(a().cart.cartItems));case 6:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}()},E=function(e){var t=e.match,c=e.history,a=Object(r.useState)(1),s=Object(i.a)(a,2),n=s[0],o=s[1],l=Object(j.b)(),b=Object(j.c)((function(e){return e.getProductDetails})),m=b.loading,O=b.error,f=b.product;Object(r.useEffect)((function(){var e;f&&t.params.id!==f._id&&l((e=t.params.id,function(){var t=Object(x.a)(h.a.mark((function t(c){var r,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c({type:_}),t.next=4,C.a.get("/api/products/".concat(e));case 4:r=t.sent,a=r.data,c({type:v,payload:a}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),c({type:N,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()))}),[l,f,t]);return Object(p.jsx)("div",{className:"productpage",children:m?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(d.BarLoader,{color:"#171717",loading:m,size:15,height:4,width:"95%",css:"margin: 0 1rem"})}):O?Object(p.jsx)("h2",{children:O}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"productpage__left",children:[Object(p.jsx)("div",{className:"left__image",children:Object(p.jsx)("img",{src:f.imageUrl,alt:f.name})}),Object(p.jsxs)("div",{className:"left__info",children:[Object(p.jsx)("p",{className:"left__name",children:f.name}),Object(p.jsxs)("p",{children:["Price: ",u()(f.price).format("$0,0")]}),Object(p.jsxs)("p",{children:["Description: ",f.description]})]})]}),Object(p.jsx)("div",{className:"productpage__right",children:Object(p.jsxs)("div",{className:"right__info",children:[Object(p.jsxs)("p",{children:["Price: ",Object(p.jsx)("span",{children:u()(f.price).format("$0,0")})]}),Object(p.jsxs)("p",{children:["Status:",Object(p.jsx)("span",{children:f.countInStock>0?"In Stock":"Out of Stock"})]}),Object(p.jsxs)("p",{children:["Qty",Object(p.jsx)("select",{value:n,onChange:function(e){return o(e.target.value)},children:Object(I.a)(Array(f.countInStock).keys()).map((function(e){return Object(p.jsx)("option",{children:e+1},e+1)}))})]}),Object(p.jsx)("p",{children:Object(p.jsx)("button",{type:"button",onClick:function(){l(q(f._id,n)),c.push("/cart")},children:"Add To Cart"})})]})})]})})},A=(c(162),c(163),function(e){var t=e.item,c=e.qtyChangeHandler,r=e.removeHandler;return Object(p.jsxs)("div",{className:"cartitem",children:[Object(p.jsx)("div",{className:"cartitem__image",children:Object(p.jsx)("img",{src:t.imageUrl,alt:t.name})}),Object(p.jsx)(o.b,{to:"/product/".concat(t.product),className:"cartitem__name",children:Object(p.jsx)("p",{children:t.name})}),Object(p.jsx)("p",{className:"cartitem__price",children:u()(t.price).format("$0,0")}),Object(p.jsx)("select",{className:"cartitem__select",value:t.qty,onChange:function(e){return c(t.product,e.target.value)},children:Object(I.a)(Array(t.countInStock).keys()).map((function(e){return Object(p.jsx)("option",{children:e+1},e+1)}))}),Object(p.jsx)("button",{className:"cartitem__deleteBtn",onClick:function(){return r(t.product)},children:Object(p.jsx)("i",{className:"fas fa-trash"})})]})});var P=function(){var e=Object(l.f)(),t=Object(j.b)(),c=Object(j.c)((function(e){return e.cart})).cartItems,r=function(e,c){t(q(e,c))},a=function(e){t(function(e){return function(t,c){t({type:T,payload:e}),localStorage.setItem("cart",JSON.stringify(c().cart.cartItems))}}(e))},s=function(){return c.reduce((function(e,t){return Number(t.qty)+e}),0)};return Object(p.jsxs)("div",{className:"cartpage",children:[Object(p.jsxs)("div",{className:"cartpage__left",children:[Object(p.jsx)("h2",{children:"Shopping Cart"}),0===c.length?Object(p.jsxs)("div",{children:["Your Cart is empty ",Object(p.jsx)(o.b,{to:"/",children:"Go Back"})]}):c.map((function(e){return Object(p.jsx)(A,{item:e,qtyChangeHandler:r,removeHandler:a},e.product)}))]}),Object(p.jsxs)("div",{className:"cartpage__right",children:[Object(p.jsxs)("div",{className:"cartpage__info",children:[Object(p.jsxs)("p",{children:["Subtotal (",s(),") items"]}),Object(p.jsx)("p",{children:function(){var e=c.reduce((function(e,t){return t.price*t.qty+e}),0);return u()(e).format("$0,0.00")}()})]}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{type:"submit",onClick:function(){s()>0&&e.push("/checkout")},children:"Proceed To Checkout"})})]})]})};c(164);var D=function(e){var t=e.click,c=Object(l.f)(),a=Object(j.c)((function(e){return e.cart})).cartItems,s=Object(r.useState)(localStorage.getItem("memberName")?localStorage.getItem("memberName"):""),n=Object(i.a)(s,2),d=n[0];return n[1],Object(p.jsxs)("nav",{className:"navbar",children:[Object(p.jsx)("div",{className:"navbar__logo",children:Object(p.jsx)(o.b,{to:"/",children:Object(p.jsx)("h2",{children:"JAK Shopping Cart"})})}),Object(p.jsxs)("ul",{className:"navbar__links",children:[Object(p.jsx)("li",{children:Object(p.jsxs)(o.b,{to:"/cart",className:"cart__link",children:[Object(p.jsx)("i",{className:"fas fa-shopping-cart"}),Object(p.jsxs)("span",{children:["Cart",Object(p.jsx)("span",{className:"cartlogo__badge",children:a.reduce((function(e,t){return e+Number(t.qty)}),0)})]})]})}),Object(p.jsx)("li",{children:""!==d?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(o.b,{to:"/member",className:"link__member",children:d}),Object(p.jsx)("div",{onClick:function(){localStorage.removeItem("memberName"),c.push("/"),c.go(0)},className:"link__logout",children:"Logout"})]}):Object(p.jsx)(o.b,{to:"/login",className:"link__login",children:"Login"})})]}),Object(p.jsxs)("div",{className:"hamburger__menu",onClick:t,children:[Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{})]})]})};c(165);var U=function(e){var t=e.show,c=e.click;return t&&Object(p.jsx)("div",{className:"backdrop",onClick:c})};c(166);var R=function(e){var t=e.show,c=e.click,r=["sidedrawer"];t&&r.push("show");var a=Object(j.c)((function(e){return e.cart})).cartItems;return Object(p.jsx)("div",{className:r.join(" "),children:Object(p.jsxs)("ul",{className:"sidedrawer__links",onClick:c,children:[Object(p.jsx)("li",{children:Object(p.jsxs)(o.b,{to:"/cart",children:[Object(p.jsx)("i",{className:"fas fa-shopping-cart"}),Object(p.jsxs)("span",{children:["Cart",Object(p.jsx)("span",{className:"sidedrawer__cartbadege",children:a.reduce((function(e,t){return e+Number(t.qty)}),0)})]})]})}),Object(p.jsx)("li",{children:Object(p.jsx)(o.b,{to:"/login",children:"Login"})})]})})},L=(c(167),c(2)),F=(c(168),c(21)),B=c(34),G=c(12),J=function(e){var t=e.setActiveStep,c=e.setPaymentAddress,r=G.a().shape({firstName:G.b().required(),lastName:G.b().required(),address:G.b().required(),email:G.b().required().email(),city:G.b().required(),postalCode:G.b().required(),tel:G.b().required()}),a=Object(F.d)({resolver:Object(B.a)(r)}),s=a.register,n=a.handleSubmit,i=a.formState.errors;return Object(p.jsxs)("div",{className:"addressform",children:[Object(p.jsx)("h3",{className:"addressform__title",children:"\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e2a\u0e48\u0e07"}),Object(p.jsxs)("form",{onSubmit:n((function(e){c(e),t(2)})),children:[Object(p.jsxs)("div",{className:"addressform__input login-box",children:[Object(p.jsxs)("div",{className:i.firstName?"user-box user-box-error":"user-box",children:[Object(p.jsx)("input",Object(L.a)(Object(L.a)({},s("firstName")),{},{type:"text",placeholder:"\u0e0a\u0e37\u0e48\u0e2d"})),Object(p.jsxs)("label",{children:["\u0e0a\u0e37\u0e48\u0e2d",i.firstName&&"*"]})]}),Object(p.jsxs)("div",{className:i.lastName?"user-box user-box-error ":"user-box",children:[Object(p.jsx)("input",Object(L.a)(Object(L.a)({},s("lastName")),{},{type:"text",placeholder:"\u0e19\u0e32\u0e21\u0e2a\u0e01\u0e38\u0e25"})),Object(p.jsxs)("label",{children:["\u0e19\u0e32\u0e21\u0e2a\u0e01\u0e38\u0e25",i.lastName&&"*"]})]}),Object(p.jsxs)("div",{className:i.address?"user-box user-box-error ":"user-box",children:[Object(p.jsx)("input",Object(L.a)(Object(L.a)({},s("address")),{},{type:"text",placeholder:"\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48"})),Object(p.jsxs)("label",{children:["\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48",i.address&&"*"]})]}),Object(p.jsxs)("div",{className:i.email?"user-box user-box-error ":"user-box",children:[Object(p.jsx)("input",Object(L.a)(Object(L.a)({},s("email")),{},{type:"text",placeholder:"\u0e2d\u0e35\u0e40\u0e21\u0e25"})),Object(p.jsxs)("label",{children:["\u0e2d\u0e35\u0e40\u0e21\u0e25",i.email&&"*"]})]}),Object(p.jsxs)("div",{className:i.city?"user-box user-box-error ":"user-box",children:[Object(p.jsx)("input",Object(L.a)(Object(L.a)({},s("city")),{},{type:"text",placeholder:"\u0e08\u0e31\u0e07\u0e2b\u0e27\u0e31\u0e14"})),Object(p.jsxs)("label",{children:["\u0e08\u0e31\u0e07\u0e2b\u0e27\u0e31\u0e14",i.city&&"*"]})]}),Object(p.jsxs)("div",{className:i.postalCode?"user-box user-box-error ":"user-box",children:[Object(p.jsx)("input",Object(L.a)(Object(L.a)({},s("postalCode")),{},{type:"number",placeholder:"\u0e23\u0e2b\u0e31\u0e2a\u0e44\u0e1b\u0e23\u0e29\u0e13\u0e35\u0e22\u0e4c"})),Object(p.jsxs)("label",{children:["\u0e23\u0e2b\u0e31\u0e2a\u0e44\u0e1b\u0e23\u0e29\u0e13\u0e35\u0e22\u0e4c",i.postalCode&&"*"]})]}),Object(p.jsxs)("div",{className:i.postalCode?"user-box user-box-error ":"user-box",children:[Object(p.jsx)("input",Object(L.a)(Object(L.a)({},s("tel")),{},{type:"number",placeholder:"\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23"})),Object(p.jsxs)("label",{children:["\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23",i.tel&&"*"]})]})]}),Object(p.jsxs)("div",{className:"addressform__btn",children:[Object(p.jsx)(o.b,{to:"/cart",children:Object(p.jsx)("button",{type:"button",className:"addressform__back",children:"BACK TO CART"})}),Object(p.jsx)("button",{type:"submit",className:"addressform__next",children:"NEXT"})]})]})]})},$=(c(267),c(268),function(){var e=Object(r.useState)(localStorage.getItem("memberName")?2:1),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(r.useState)({firstName:"",lastName:"",address:"",email:"",city:"",postalCode:""}),n=Object(i.a)(s,2),o=(n[0],n[1]),l=function(){return 1===c&&Object(p.jsx)(J,{setActiveStep:a,setPaymentAddress:o})};return Object(p.jsxs)("div",{className:"checkoutpage",children:[Object(p.jsxs)("ul",{className:"progressBar",children:[Object(p.jsx)("li",{className:c>=1&&"active",children:"\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e2a\u0e48\u0e07"}),Object(p.jsx)("li",{className:c>=2&&"active",children:"\u0e01\u0e32\u0e23\u0e0a\u0e33\u0e23\u0e30\u0e40\u0e07\u0e34\u0e19"}),Object(p.jsx)("li",{className:c>=3&&"active",children:"\u0e0a\u0e33\u0e23\u0e30\u0e40\u0e07\u0e34\u0e19\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08"})]}),Object(p.jsx)(l,{})]})}),H=(c(269),"http://localhost:5000"),M=function(){Object(l.f)();var e=G.a().shape({email:G.b().required().email(),password:G.b().required()}),t=Object(F.d)({resolver:Object(B.a)(e)}),c=t.register,a=t.handleSubmit,s=t.formState.errors,n=Object(r.useState)(!1),j=Object(i.a)(n,2),d=j[0],b=j[1];return Object(p.jsxs)("div",{className:"loginpage",children:[Object(p.jsx)("img",{className:"loginpage__img",src:"https://www.brandbuffet.in.th/wp-content/uploads/2021/06/Online-Shopping_3.png",alt:"login shop"}),Object(p.jsxs)("form",{onSubmit:a((function(e){C.a.post("".concat(H,"/login"),e).then((function(e){e&&(localStorage.setItem("token",e.data.token),localStorage.setItem("memberName",e.data.firstName),window.location.href="/")})).catch((function(e){console.log(e),b(!0)}))})),className:"loginpage__form",children:[Object(p.jsx)("h3",{children:"\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a\u0e2a\u0e21\u0e32\u0e0a\u0e34\u0e01"}),d&&Object(p.jsx)("div",{className:"alert",children:"\u0e2d\u0e35\u0e40\u0e21\u0e25\u0e2b\u0e23\u0e37\u0e2d\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07"}),Object(p.jsx)("input",Object(L.a)(Object(L.a)({},c("email")),{},{type:"text",placeholder:"\u0e2d\u0e35\u0e40\u0e21\u0e25",className:s.email&&"loginpage__error"})),Object(p.jsx)("input",Object(L.a)(Object(L.a)({},c("password")),{},{type:"password",autoComplete:"off",placeholder:"\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19",className:s.password&&"loginpage__error"})),Object(p.jsx)("button",{type:"submit",children:"\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a"}),Object(p.jsx)(o.b,{to:"/forgotpassword",children:"\u0e25\u0e37\u0e21\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e43\u0e0a\u0e48\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48"}),Object(p.jsx)("hr",{}),Object(p.jsx)(o.b,{to:"/register",children:Object(p.jsx)("button",{type:"button",children:"\u0e2a\u0e21\u0e31\u0e04\u0e23\u0e2a\u0e21\u0e32\u0e0a\u0e34\u0e01"})})]})]})},Q=(c(270),function(){Object(l.f)();var e=G.a().shape({firstName:G.b().required(),lastName:G.b().required(),address:G.b().required(),email:G.b().required().email(),password:G.b().required(),tel:G.b().required(),city:G.b().required(),postalCode:G.b().required()}),t=Object(F.d)({resolver:Object(B.a)(e)}),c=t.register,r=t.handleSubmit,a=t.formState.errors;return Object(p.jsxs)("div",{className:"registerpage",children:[Object(p.jsx)("h3",{className:"registerpage__title",children:"\u0e2a\u0e21\u0e31\u0e04\u0e23\u0e2a\u0e21\u0e32\u0e0a\u0e34\u0e01"}),Object(p.jsxs)("form",{onSubmit:r((function(e){C.a.post("".concat(H,"/register"),e).then((function(e){e&&(alert("\u0e2a\u0e21\u0e31\u0e04\u0e23\u0e2a\u0e21\u0e32\u0e0a\u0e34\u0e01\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08"),console.log(e.data))})).catch((function(e){console.log(e)}))})),className:"registerpage__form",children:[Object(p.jsxs)("div",{className:"registerpage__input",children:[Object(p.jsx)("input",Object(L.a)(Object(L.a)({},c("firstName")),{},{className:a.firstName&&"registerpage__inputerror",type:"text",placeholder:"\u0e0a\u0e37\u0e48\u0e2d"})),Object(p.jsx)("input",Object(L.a)(Object(L.a)({},c("lastName")),{},{className:a.lastName&&"registerpage__inputerror",type:"text",placeholder:"\u0e19\u0e32\u0e21\u0e2a\u0e01\u0e38\u0e25"})),Object(p.jsx)("input",Object(L.a)(Object(L.a)({},c("email")),{},{className:a.email&&"registerpage__inputerror",type:"text",placeholder:"\u0e2d\u0e35\u0e40\u0e21\u0e25"})),Object(p.jsx)("input",Object(L.a)(Object(L.a)({},c("password")),{},{className:a.password&&"registerpage__inputerror",type:"password",placeholder:"\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19",autoComplete:"off"})),Object(p.jsx)("input",Object(L.a)(Object(L.a)({},c("tel")),{},{className:a.tel&&"registerpage__inputerror",type:"text",placeholder:"\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23"})),Object(p.jsx)("input",Object(L.a)(Object(L.a)({},c("address")),{},{className:a.address&&"registerpage__inputerror",type:"text",placeholder:"\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48"})),Object(p.jsx)("input",Object(L.a)(Object(L.a)({},c("city")),{},{className:a.city&&"registerpage__inputerror",type:"text",placeholder:"\u0e08\u0e31\u0e07\u0e2b\u0e27\u0e31\u0e14"})),Object(p.jsx)("input",Object(L.a)(Object(L.a)({},c("postalCode")),{},{className:a.postalCode&&"registerpage__inputerror",type:"number",placeholder:"\u0e23\u0e2b\u0e31\u0e2a\u0e44\u0e1b\u0e23\u0e29\u0e13\u0e35\u0e22\u0e4c"}))]}),Object(p.jsx)("button",{type:"submit",children:"\u0e2a\u0e21\u0e31\u0e04\u0e23\u0e2a\u0e21\u0e32\u0e0a\u0e34\u0e01"})]})]})});var z=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(p.jsxs)(o.a,{children:[Object(p.jsx)(D,{click:function(){return a(!0)}}),Object(p.jsx)(R,{show:c,click:function(){return a(!1)}}),Object(p.jsx)(U,{show:c,click:function(){return a(!1)}}),Object(p.jsx)("main",{children:Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{exact:!0,path:"/",component:k}),Object(p.jsx)(l.a,{exact:!0,path:"/product/:id",component:E}),Object(p.jsx)(l.a,{exact:!0,path:"/cart",component:P}),Object(p.jsx)(l.a,{exact:!0,path:"/checkout",component:$}),Object(p.jsx)(l.a,{exact:!0,path:"/login",component:M}),Object(p.jsx)(l.a,{exact:!0,path:"/register",component:Q})]})})]})},K=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,272)).then((function(t){var c=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,n=t.getTTFB;c(e),r(e),a(e),s(e),n(e)}))},V=c(39),W=c(97),X=c(98),Y=Object(V.combineReducers)({cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:var c=t.payload,r=e.cartItems.find((function(e){return e.product===c.product}));return r?Object(L.a)(Object(L.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.product===r.product?c:e}))}):Object(L.a)(Object(L.a)({},e),{},{cartItems:[].concat(Object(I.a)(e.cartItems),[c])});case T:return Object(L.a)(Object(L.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.product!==t.payload}))});default:return e}},getProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return{loading:!0,products:[]};case f:return{loading:!1,products:t.payload};case g:return{loading:!1,error:t.payload};default:return e}},getProductDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return{loading:!0};case v:return{loading:!1,product:t.payload};case N:return{loading:!1,error:t.payload};case y:return{product:{}};default:return e}}}),Z=[W.a],ee={cart:{cartItems:localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]}},te=Object(V.createStore)(Y,ee,Object(X.composeWithDevTools)(V.applyMiddleware.apply(void 0,Z)));n.a.render(Object(p.jsx)(j.a,{store:te,children:Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(z,{})})}),document.getElementById("root")),K()}},[[271,1,2]]]);
//# sourceMappingURL=main.812b73e3.chunk.js.map