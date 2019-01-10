(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,a){},115:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(15),l=a.n(c),o=(a(68),a(51)),r=a(52),s=a(61),m=a(53),d=a(62),u=a(16),p=a(5),E=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(0),o=Object(u.a)(l,2),r=o[0],s=o[1],m=Object(n.useRef)(r),d=function(){var e=window.pageYOffset;s(e)};Object(n.useEffect)(function(){return window.addEventListener("scroll",d),function(){window.removeEventListener("scroll",d)}});return i.a.createElement("header",{ref:m,onScroll:d,className:"hero-head header"},i.a.createElement("nav",{className:"navbar"},i.a.createElement("div",{className:"container header-margin-sides "+(r>50?" filled":"")},i.a.createElement("div",{className:"navbar-brand"},i.a.createElement("div",{className:"navbar-item"},i.a.createElement("div",{onClick:function(){p.animateScroll.scrollToTop()},className:"logo "+(r>50?" filled-text":"")},"WY.")),i.a.createElement("div",{href:"#",onClick:function(){return c(!a)},className:"menu-btn "+(a?"active":"")+(r>50?" filled":"")},i.a.createElement("span",null))),i.a.createElement("div",{id:"navbarMenuHeroA",className:"new-navbar "+(a?"active white":"")},i.a.createElement("div",{className:"navbar-end"},i.a.createElement("div",{className:"navbar-item "+(r>50?" filled-text":"white-font")},i.a.createElement(p.Link,{activeClass:"active",to:"about-section",spy:!0,smooth:!0,offset:50,duration:500},"About")),i.a.createElement("div",{className:"navbar-item "+(r>50?" filled-text":"white-font")},i.a.createElement(p.Link,{activeClass:"active",to:"whatido-section",spy:!0,smooth:!0,offset:50,duration:500},"What I Do")),i.a.createElement("div",{className:"navbar-item "+(r>50?" filled-text":"white-font")},i.a.createElement(p.Link,{activeClass:"active",to:"project-section",spy:!0,smooth:!0,offset:50,duration:500},"Projects")),i.a.createElement("div",{className:"navbar-item "+(r>50?" filled-text":"white-font")},i.a.createElement(p.Link,{activeClass:"active",to:"blog-section",spy:!0,smooth:!0,offset:50,duration:500},"Blog")),i.a.createElement("div",{className:"navbar-item "+(r>50?" filled-text":"white-font")},i.a.createElement(p.Link,{activeClass:"active",to:"contact-me-section",spy:!0,smooth:!0,offset:60,duration:500},"Contact")))))))},g=a(2),v=a.n(g),h=function(){return i.a.createElement("div",{className:"hero-body full-height"},i.a.createElement("div",{className:"container has-text-centered"},i.a.createElement("div",{className:"title"},i.a.createElement("div",{className:"animated-typing-container"},i.a.createElement("span",{className:"title-padding"},"I")," ",i.a.createElement(v.a,{loop:!0,speed:25},"DESIGN.",i.a.createElement(g.Backspace,{count:7,delay:750}),"DEVELOP.",i.a.createElement(g.Backspace,{count:8,delay:750}),"TEST.",i.a.createElement(g.Backspace,{count:5,delay:750}),"DEBUG.",i.a.createElement(g.Backspace,{count:6,delay:750}),"IMPROVE.",i.a.createElement(g.Backspace,{count:8,delay:750}),i.a.createElement(g.Reset,{delay:750}))))))},b=function(){return i.a.createElement("div",{className:"section-padding-top",id:"about-section"},i.a.createElement("div",{className:"section-margin-sides"},i.a.createElement("h1",null,"Hi, I'm William, ",i.a.createElement("br",null),"Full Stack Developer ",i.a.createElement("br",null),"From Orange County, California."),i.a.createElement("p",null,"Technology has never been more prominent in our lives than it is now. ",i.a.createElement("br",null),"It's constantly transforming and it is my mission to evolve with it.")))},f=function(e){var t=e.title,a=e.skills;return i.a.createElement("div",{className:"column skill-box"},i.a.createElement("div",{className:"circle"},e.children),i.a.createElement("div",{className:"name"},t),i.a.createElement("p",null,a.join(", ")))},k=a(54),N=a.n(k),w=a(21),y=a.n(w),j=a(58),x=a.n(j),S=function(){return i.a.createElement("div",{className:"section-padding-top gray",id:"whatido-section"},i.a.createElement("div",{className:"section-margin-sides"},i.a.createElement("h2",null,"What I Do"),i.a.createElement("div",{className:"columns is-desktop row"},i.a.createElement(f,{title:"Web Development",skills:["HTML5","CSS3","JavaScript, ES6","React","Redux"]},i.a.createElement(N.a,{fontSize:"44px"})),i.a.createElement(f,{title:"Back End Development",skills:["Node.js","Express.js","C#",".NET Core","SQL","GraphQL"]},i.a.createElement(y.a,{fontSize:"44px"}))),i.a.createElement("div",{className:"columns is-desktop row"},i.a.createElement(f,{title:"Mobile Development",skills:["iOS","Swift","React Native"]},i.a.createElement(x.a,{fontSize:"44px"})))))},L=a(12),C=a.n(L),B=a(4),R=a.n(B),I=function(e){var t=e.active,a=e.projectBoxClicked,n=e.title,c=e.desc,l=e.gitHubLink,o=e.liveLink,r=e.imgs,s=e.tech,m=e.live;return i.a.createElement("div",{className:"modal "+(t?"is-active":"")},i.a.createElement("div",{onClick:a,className:"modal-background"}),i.a.createElement("div",{className:"modal-card"},i.a.createElement("button",{onClick:a,className:"delete upper-right","aria-label":"close"}),i.a.createElement("section",{className:"modal-card-body"},i.a.createElement("img",{src:r[0],alt:"Projects"}),i.a.createElement("h4",{className:"underline"},n),i.a.createElement("p",null,c),i.a.createElement("h5",{className:"underline"},"Tech Stack"),i.a.createElement("p",null,s)),i.a.createElement("footer",{className:"modal-card-foot"},i.a.createElement("button",{onClick:function(e){R()(e,l)},className:"button"},i.a.createElement(C.a,null),"View Github"),i.a.createElement("button",{onClick:function(e){R()(e,o)},className:"button "+(m?"":"not-live")},i.a.createElement(y.a,null)," View Live!"))))},M=function(e){var t=e.img,a=e.tag,c=e.title,l=e.desc,o=e.gitHubLink,r=e.liveLink,s=e.imgs,m=e.tech,d=e.live,p=Object(n.useState)(!1),E=Object(u.a)(p,2),g=E[0],v=E[1],h=function(e){v(!g)};return i.a.createElement("div",{className:"column is-half-desktop is-half-tablet project box-image "+(g?"":"not-active")},i.a.createElement("img",{onClick:h,src:t,alt:"Placeholder"}),i.a.createElement("div",{onClick:h,className:"tag-name"},a),i.a.createElement("div",{onClick:h,className:"name"},c),i.a.createElement(I,{projectBoxClicked:h,active:g,tag:a,title:c,desc:l,gitHubLink:o,liveLink:r,imgs:s,tech:m,live:d}))},P=a(32),G=a.n(P),O=a(33),z=a.n(O),T=a(34),D=a.n(T),H=a(35),J=a.n(H),W=a(36),A=a.n(W),Q=[G.a],U=[z.a],_=[D.a],V=[J.a],Y=[A.a],F=function(){return i.a.createElement("div",{className:"section-padding-top ",id:"project-section"},i.a.createElement("div",{className:"section-margin-sides"},i.a.createElement("h2",null,"Projects"),i.a.createElement("div",{className:"columns is-desktop row"},i.a.createElement(M,{img:G.a,tag:"Web",title:"Study Buddies",desc:"Study Buddies is a Web Application built in React.js that allows users to create their own flashcards and study them.",gitHubLink:"https://github.com/m1771vw/StudyBuddies",liveLink:"https://github.com/m1771vw/StudyBuddies",tech:"React.js",imgs:Q,live:!1}),i.a.createElement(M,{img:z.a,tag:"Mobile",title:"Study Buddies Mobile",desc:"Study Buddies Mobile is a mobile application built in React Native that allows users to create their own flashcards and study them on the go!",gitHubLink:"https://github.com/m1771vw/StudyBuddiesMobile",liveLink:"https://github.com/m1771vw/StudyBuddiesMobile",tech:"React Native, Redux, MongoDB, Node.js",imgs:U,live:!1})),i.a.createElement("div",{className:"columns is-desktop row"},i.a.createElement(M,{img:D.a,tag:"Mobile",title:"Bouncing Blocks",desc:"Bouncing Blocks is a React Native game where players build trampolines to bounce blocks across the screen.",gitHubLink:"https://github.com/m1771vw/bouncing-blocks-react-native",liveLink:"https://github.com/m1771vw/bouncing-blocks-react-native",tech:"React Native, React Native Game Engine, Physics.js",imgs:_,live:!1}),i.a.createElement(M,{img:J.a,tag:"Web",title:"Job Tracker",desc:"Job Tracker is a web application where users can store information on jobs they had applied and whom they contacted for that job to ease application history organization",gitHubLink:"https://github.com/m1771vw/JobTracker",liveLink:"https://github.com/m1771vw/JobTracker",tech:"React.js, Redux, PostgreSQL, C#, .NET Core",imgs:V,live:!1})),i.a.createElement("div",{className:"columns is-desktop row"},i.a.createElement(M,{img:A.a,tag:"Mobile",title:"P.U.G. (Pick Up Games)",desc:"P.U.G is a React Native mobile application where gamers can enter group chat rooms to find fellow gamers to play with.",gitHubLink:"https://github.com/pattruong/pug/",liveLink:"https://github.com/pattruong/pug/",tech:"React Native, Redux, Node.js, ChatKit API",imgs:Y,live:!1}))))},q=function(e){var t=e.img,a=e.title,n=e.description,c=e.link;return i.a.createElement("div",{className:"column is-one-third box-image not-active"},i.a.createElement("img",{onClick:function(e){R()(e,c)},src:t,alt:"Placeholder"}),i.a.createElement("div",{onClick:function(e){R()(e,c)},className:"name"},a),i.a.createElement("p",{onClick:function(e){R()(e,c)}},n))},K=a(37),X=a.n(K),Z=a(59),$=a.n(Z),ee=function(){return i.a.createElement("div",{className:"section-padding-top gray",id:"blog-section"},i.a.createElement("div",{className:"section-margin-sides"},i.a.createElement("h2",null,"Blogs"),i.a.createElement("div",{className:"columns is-desktop row"},i.a.createElement(q,{img:X.a,title:"My Journey with React Native Game Engine Part I: Starting the Project",description:"I created an addicting, intense platformer where players have to create trampolines to bounce boxes across the room. Click here to read Part 1 of how I learned to use React Native Game Engine!",link:"https://medium.com/@williamyang93/my-journey-with-react-native-game-engine-part-i-starting-the-project-bbebcd2ccf6"}),i.a.createElement(q,{img:X.a,title:"My Journey with React Native Game Engine Part II: Adding Touch and Bounce",description:"I continue my React Native Game Engine tutorial with step-by-step examples on how to add touch and bounce to the game. Click here to read Part 2 of how I learned to use React Native Game Engine!",link:"https://medium.com/@williamyang93/my-journey-with-react-native-game-engine-part-ii-adding-touch-and-bounce-b9ae3fac06b9"}),i.a.createElement(q,{img:$.a,title:"GraphQL + Apollo & MongoDB + Mongoose Part I",description:"I made a tutorial where we setup GraphQL with Node.js and MongoDB. Click here to read Part 1 of the tutorial!",link:"https://medium.com/@williamyang93/graphql-apollo-mongodb-mongoose-part-i-a727bb22f1f6"}))))},te=a(22),ae=a.n(te),ne=a(23),ie=a.n(ne),ce=function(){return i.a.createElement("div",{className:"section-padding-top ",id:"contact-me-section"},i.a.createElement("div",{className:"section-margin-sides"},i.a.createElement("h2",null,"Contact Me"),i.a.createElement("a",{className:"no-decor",href:"https://mail.google.com/mail/?view=cm&fs=1&to=williamyang93@gmail.com",rel:"noopener noreferrer",target:"_blank"},i.a.createElement("div",{className:"vertical-center"},i.a.createElement(ie.a,{fontSize:"2.0rem"}),"  ",i.a.createElement("span",{className:"text-space"},"williamyang93@gmail.com"))),i.a.createElement("a",{className:"no-decor",href:"https://github.com/m1771vw/"},i.a.createElement("div",{className:"vertical-center"},i.a.createElement(C.a,{fontSize:"2.0rem"}),"  ",i.a.createElement("span",{className:"text-space"},"github.com/m1771vw"))),i.a.createElement("a",{className:"no-decor",href:"https://linkedin.com/in/williamyang93/"},i.a.createElement("div",{className:"vertical-center"},i.a.createElement(ae.a,{fontSize:"2.0rem"})," ",i.a.createElement("span",{className:"text-space"},"linkedin.com/in/williamyang93")))))},le=function(){return i.a.createElement("footer",{id:"footer-text",className:"section-footer"},i.a.createElement("div",{className:"footer-text"},"\xa92018 WILLIAM YANG"),i.a.createElement("div",{id:"contact-me-section"},i.a.createElement("a",{href:"https://mail.google.com/mail/?view=cm&fs=1&to=williamyang93@gmail.com",rel:"noopener noreferrer",target:"_blank"},i.a.createElement("span",null,i.a.createElement(ie.a,{fontSize:"2.0rem"}))),i.a.createElement("a",{href:"https://github.com/m1771vw/"},i.a.createElement("span",null,i.a.createElement(C.a,{fontSize:"2.0rem"}))),i.a.createElement("a",{href:"https://linkedin.com/in/williamyang93/"},i.a.createElement("span",null,i.a.createElement(ae.a,{fontSize:"2.0rem"})))))},oe=(a(113),a(60)),re=a.n(oe),se=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("section",{style:{backgroundImage:"url(".concat(re.a,")")},className:"hero is-link is-fullheight-with-navbar hero-background"},i.a.createElement(E,null),i.a.createElement(h,null)),i.a.createElement(b,null),i.a.createElement(S,null),i.a.createElement(F,null),i.a.createElement(ee,null),i.a.createElement(ce,null),i.a.createElement(le,null))}}]),t}(n.Component);l.a.render(i.a.createElement(se,null),document.getElementById("root"))},32:function(e,t,a){e.exports=a.p+"static/media/StudyBuddiesResize.8d3d5f08.png"},33:function(e,t,a){e.exports=a.p+"static/media/StudyBuddiesResizeMobile.dd806ded.png"},34:function(e,t,a){e.exports=a.p+"static/media/BouncingBlockResized.104dbb22.png"},35:function(e,t,a){e.exports=a.p+"static/media/JobTrackerResized.86166645.png"},36:function(e,t,a){e.exports=a.p+"static/media/PUGResized.37476c45.png"},37:function(e,t,a){e.exports=a.p+"static/media/rnge.3c31a11a.png"},4:function(e,t){e.exports=function(e,t){e.preventDefault(),window.open(t,"_blank")}},59:function(e,t,a){e.exports=a.p+"static/media/GraphQLNodeMongoResized.a9f04de7.png"},60:function(e,t,a){e.exports=a.p+"static/media/garibaldi_lake_wallpaper.40d46b49.jpg"},63:function(e,t,a){e.exports=a(115)},68:function(e,t,a){}},[[63,2,1]]]);
//# sourceMappingURL=main.0592c52d.chunk.js.map