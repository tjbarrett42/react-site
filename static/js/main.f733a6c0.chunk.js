(this["webpackJsonpreact-site"]=this["webpackJsonpreact-site"]||[]).push([[0],{50:function(e,t,i){},51:function(e,t,i){},68:function(e,t,i){"use strict";i.r(t);var s=i(1),c=i(0),n=i.n(c),a=i(24),r=i.n(a),l=(i(50),i(11)),j=i(16),o=i(14),d=i(13),h=(i.p,i(51),i(22)),b=i(6),m=i(10),u=i(26),x=i(44),O=i(8),p=i(7),g={display:"block",padding:"20px",height:"80px",width:"100%"};var f=function(){return Object(s.jsxs)(c.Fragment,{children:[Object(s.jsx)("div",{style:g}),Object(s.jsx)("footer",{className:"mt-5",children:Object(s.jsx)(m.a,{fluid:!0,children:Object(s.jsx)(O.a,{className:"justify-content-between p-3",children:Object(s.jsx)(p.a,{className:"p-0 d-flex justify-content-center",children:"Copyright \xa9 2020 Timothy Barrett"})})})})]})},v=i(27);var N=function(e){return Object(s.jsx)(v.a,{className:"bg-transparent jumbotron-fluid p-0",children:Object(s.jsx)(m.a,{fluid:!0,children:Object(s.jsx)(O.a,{className:"justify-content-center py-5",children:Object(s.jsxs)(p.a,{md:8,sm:12,children:[e.title&&Object(s.jsxs)("h1",{className:"display-1 font-weight-bold",children:[e.title," ",e.emoji]}),e.subTitle&&Object(s.jsx)("h3",{className:"display-4 font-weight-light",children:e.subTitle}),e.text&&Object(s.jsx)("h3",{className:"lead font-weight-light",children:e.text})]})})})})};var y=function(e){return Object(s.jsx)("div",{children:Object(s.jsx)(N,{title:e.title,emoji:e.emoji,subTitle:e.subTitle,text:e.text})})};var k=function(e){return Object(s.jsx)(v.a,{className:"bg-transparent jumbotron-fluid p-0",children:Object(s.jsx)(m.a,{fluid:!0,children:Object(s.jsx)(O.a,{className:"justify-content-center py-5 ",children:Object(s.jsxs)(p.a,{md:8,sm:12,children:[e.title&&Object(s.jsx)("h1",{className:"display-4 font-weight-light text-center",children:e.title}),e.title&&Object(s.jsx)("h3",{className:"display-6 font-weight-light text-center",children:e.subTitle})]})})})})},T=i(21),w=i.p+"static/media/epidemicsim.39b29825.png",S=i.p+"static/media/spotifystats.53c76ed6.png",C=i.p+"static/media/personalsite.67c4b4b5.png",I=i(40);var L=function(e){var t=Object(I.b)({opacity:1,from:{opacity:0}});return Object(s.jsxs)(I.a.div,{className:"tb-card-info",style:t,children:[Object(s.jsx)("p",{className:"tb-card-title",children:e.title}),Object(s.jsx)("p",{className:"tb-card-sub-title",children:e.subTitle}),Object(s.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:"View"})]})};var E=function(e){return Object(s.jsxs)("div",{className:"d-inline-block tb-card",onClick:function(t){return e.click(e.item)},children:[Object(s.jsx)("img",{className:"tb-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&Object(s.jsx)(L,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link})]})},H=function(e){Object(o.a)(i,e);var t=Object(d.a)(i);function i(e){var c;return Object(l.a)(this,i),(c=t.call(this,e)).handleCardClick=function(e,t){var i=Object(T.a)(c.state.items);i[e].selected=!i[e].selected,i.forEach((function(t){t.id!==e&&(t.selected=!1)})),c.setState({items:i})},c.makeItems=function(e){return e.map((function(e){return Object(s.jsx)(E,{item:e,click:function(t){return c.handleCardClick(e.id,t)}},e.id)}))},c.state={items:[{id:0,title:"Epidemic Simulator",subTitle:"People died, the end",imgSrc:w,link:"https://github.com/ebweinberger/epidemic-sim",selected:!1},{id:1,title:"Spotify Stats",subTitle:"Listen to music",imgSrc:S,link:"https://github.com/tjbarrett42/spotify-stats",selected:!1},{id:2,title:"Classic Personal Website",subTitle:"Original HTML/CSS/jQuery version of this site",imgSrc:C,link:"https://github.com/tjbarrett42/tjbarrett42.github.io.original",selected:!1}]},c}return Object(j.a)(i,[{key:"render",value:function(){return Object(s.jsx)(m.a,{children:Object(s.jsx)(O.a,{className:"justify-content-around",lg:"12",children:this.makeItems(this.state.items)})})}}]),i}(n.a.Component);var A=function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)(k,{title:e.title,subTitle:e.subTitle}),Object(s.jsx)(H,{})]})};var J=function(e){return Object(s.jsxs)(m.a,{className:"pb",fluid:"sm",children:[Object(s.jsxs)(O.a,{className:"justify-content-center",children:[Object(s.jsxs)(p.a,{sm:12,md:7,lg:5,children:[Object(s.jsx)("h1",{children:"Allvue Systems, NY"}),Object(s.jsx)("h2",{className:"font-weight-light",children:"Application Engineer"})]}),Object(s.jsx)(p.a,{sm:12,md:5,lg:5,children:Object(s.jsx)("h3",{className:"font-weight-light font-italic text-md-right text-lg-right",children:"Jul 2020 - Current"})})]}),Object(s.jsx)(O.a,{className:"justify-content-center",children:Object(s.jsx)(p.a,{sm:12,lg:8,children:Object(s.jsxs)("ul",{className:"font-weight-light",children:[Object(s.jsx)("li",{children:"Application engineer for front-to-back office credit solution with international clientbase."}),Object(s.jsx)("li",{children:"Created SQL scripts to repair and prevent future portfolio discrepancies with defensive programming."}),Object(s.jsx)("li",{children:"Utilized XPath and Transact-SQL debugging queries to identify client and server errors in product code and XML response/request data and XSLTs."}),Object(s.jsx)("li",{children:"Mapped and documented root cause assessments to decrease product defects."}),Object(s.jsx)("li",{children:"Led daily standups to prioritize towards high severity implementation requests and fixes."}),Object(s.jsx)("li",{children:"Advised and consulted clients on programming and architecture best practices."})]})})}),Object(s.jsxs)(O.a,{className:"justify-content-center",children:[Object(s.jsxs)(p.a,{sm:12,md:7,lg:5,children:[Object(s.jsx)("h1",{children:"New Jersey Innovation Institute, NJ"}),Object(s.jsx)("h2",{className:"font-weight-light",children:"Project Assistant"})]}),Object(s.jsx)(p.a,{sm:12,md:5,lg:5,children:Object(s.jsx)("h3",{className:"font-weight-light font-italic text-md-right text-lg-right",children:"Jun 2019 - Aug 2019"})})]}),Object(s.jsx)(O.a,{className:"justify-content-center",children:Object(s.jsx)(p.a,{sm:12,lg:8,children:Object(s.jsxs)("ul",{className:"font-weight-light",children:[Object(s.jsx)("li",{children:"Designed and developed project proposals to identify and utilize sources of internal innovation within Hackensack Meridian Health\u2019s hospital network, with potential to save millions on physician operations."}),Object(s.jsx)("li",{children:"Conveyed and translated executive goals to in-house products to realize optimal pricing and marketing strategies."}),Object(s.jsx)("li",{children:"Qualified and evaluated 30+ idea management programs for optimal internal and external usage."})]})})})]})};var P=function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)(k,{title:e.title}),Object(s.jsx)(J,{})]})};var B=function(){return Object(s.jsx)(m.a,{fluid:"sm",children:Object(s.jsx)(O.a,{children:Object(s.jsx)(p.a,{sm:"12",md:{size:6},children:Object(s.jsx)("h1",{children:"Todo"})})})})};var z=function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)(k,{title:e.title,subTitle:e.subTitle}),Object(s.jsx)(B,{})]})},M=i(32);var Q=function(){return Object(s.jsx)(m.a,{fluid:"sm",children:Object(s.jsxs)(O.a,{className:"text-center",children:[Object(s.jsx)(p.a,{sm:"12",md:4,children:Object(s.jsx)(M.a,{href:"https://www.linkedin.com/in/timjbarrett",target:"_blank",variant:"light",children:Object(s.jsx)("h3",{className:"text-center font-weight-light",children:"Add me on LinkedIn"})})}),Object(s.jsx)(p.a,{sm:"12",md:4,children:Object(s.jsx)(M.a,{href:"#",target:"_blank",variant:"light",children:Object(s.jsx)("h3",{className:"text-center font-weight-light",children:"Shoot me an Email \\n"})})}),Object(s.jsx)(p.a,{sm:"12",md:4,children:Object(s.jsx)(M.a,{href:"https://github.com/tjbarrett42",target:"_blank",variant:"light",children:Object(s.jsx)("h3",{className:"text-center font-weight-light",children:"See me on GitHub"})})})]})})};var _=function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)(N,{title:e.title,emoji:e.emoji,subTitle:e.subTitle}),Object(s.jsx)(Q,{})]})},q=i(52),R=function(e){Object(o.a)(i,e);var t=Object(d.a)(i);function i(e){var s;return Object(l.a)(this,i),(s=t.call(this,e)).state={title:"Timothy Barrett",headerLinks:[{title:"Home",path:"/"},{title:"Projects",path:"/projects"},{title:"Experience",path:"/experience"},{title:"Resume",path:"/resume"},{title:"Contact",path:"/contact"}],home:{title:"Hi, I'm Tim",emoji:"",subTitle:"Ski fast - type faster",text:"I'm a 2020 graduate with a B.S. in CompSci from Stevens Institute of Technology in Hoboken, NJ, with an interest in mental and physical health solutions in tech."},projects:{title:"Projects",subTitle:"Some things Ive worked on:"},experience:{title:"Work Experience"},resume:{title:"Resume",subTitle:"Grab the latest version below:"},contact:{title:"Say hello",emoji:q.getUnicode("wave").toString(),subTitle:"Want to get in touch?"}},s}return Object(j.a)(i,[{key:"render",value:function(){var e=this;return Object(s.jsx)(h.a,{children:Object(s.jsxs)(m.a,{className:"p-0 bg-color d-flex flex-column position-relative min-vh-100",fluid:!0,children:[Object(s.jsxs)(u.a,{expand:"lg",children:[Object(s.jsx)(u.a.Brand,{children:"Timothy Barrett"}),Object(s.jsx)(u.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),Object(s.jsx)(u.a.Collapse,{id:"navbar-toggle",children:Object(s.jsxs)(x.a,{className:"ml-auto nav-color",children:[Object(s.jsx)(h.b,{className:"nav-link",to:"/",children:"Home"}),Object(s.jsx)(h.b,{className:"nav-link",to:"/projects",children:"Projects"}),Object(s.jsx)(h.b,{className:"nav-link",to:"/experience",children:"Experience"}),Object(s.jsx)(h.b,{className:"nav-link",to:"/resume",children:"Resume"}),Object(s.jsx)(h.b,{className:"nav-link",to:"/contact",children:"Contact"})]})})]}),Object(s.jsx)(b.a,{path:"/",exact:!0,render:function(){return Object(s.jsx)(y,{title:e.state.home.title,subTitle:e.state.home.subTitle,emoji:e.state.home.emoji,text:e.state.home.text})}}),Object(s.jsx)(b.a,{path:"/projects",render:function(){return Object(s.jsx)(A,{title:e.state.projects.title,subTitle:e.state.projects.subTitle})}}),Object(s.jsx)(b.a,{path:"/experience",render:function(){return Object(s.jsx)(P,{title:e.state.experience.title})}}),Object(s.jsx)(b.a,{path:"/resume",render:function(){return Object(s.jsx)(z,{title:e.state.resume.title,subTitle:e.state.resume.subTitle})}}),Object(s.jsx)(b.a,{path:"/contact",render:function(){return Object(s.jsx)(_,{title:e.state.contact.title,subTitle:e.state.contact.subTitle,emoji:e.state.contact.emoji})}}),Object(s.jsx)(f,{})]})})}}]),i}(n.a.Component);i(67);r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(R,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.f733a6c0.chunk.js.map