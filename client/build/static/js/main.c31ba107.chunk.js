(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){e.exports=a(170)},134:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){},164:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){},170:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"fetchUser",function(){return f});var i=a(0),r=a.n(i),o=a(20),s=a.n(o),c=a(2),l=a(3),m=a(5),u=a(4),d=a(6),p=a(98),h=a(14),v=a(22),g=a(68),b=a.n(g),f=function(){return function(e){return b.a.get("/api/current_user").then(function(t){e({type:"fetch_user",payload:t.data})})}},E=a(15),k=(a(134),function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.refs.canvas,t=e.getContext("2d"),a=e.width=window.innerWidth,n=e.height=70,i={x:0,y:0};function r(e,r,o,c,l){this.x=e,this.y=r,this.dx=o,this.dy=c,this.rad=l,this.orad=l,this.fillStyle=s[Math.floor(Math.random()*s.length)],this.draw=function(){t.beginPath(),t.arc(this.x,this.y,this.rad,0,2*Math.PI,!1),t.fillStyle=this.fillStyle,t.fill()},this.update=function(){(this.x+this.rad>=a||this.x-this.rad<=0)&&(this.dx=-this.dx),(this.y+this.rad>=n||this.y-this.rad<=0)&&(this.dy=-this.dy),this.x+=this.dx,this.y+=this.dy,i.x-this.x<50&&i.x-this.x>-50&&i.y-this.y<50&&i.y-this.y>-50&&this.rad<30?this.rad+=1:this.rad>this.orad&&this.rad--,this.draw()}}window.addEventListener("mousemove",function(e){i.x=e.x,i.y=e.y});for(var o=[],s=["#98B7B1","#3F592C","#B7BF1D","#DADADA","#595959"],c=0;c<80;c++){var l=1+10*Math.random(),m=Math.random()*(a-2*l)+l,u=Math.random()*(n-2*l)+l,d=2*(Math.random()-.5),p=2*(Math.random()-.5);o.push(new r(m,u,d,p,l))}!function e(){requestAnimationFrame(e),t.clearRect(0,0,a,n);for(var i=0;i<o.length;i++)o[i].update();t.fillStyle="#595959",t.font="50px Arial",t.textAlign="center",t.fillText("Amitava Mozumder",a/2,60)}()}},{key:"render",value:function(){return r.a.createElement("canvas",{ref:"canvas"}," ")}}]),t}(i.Component)),w=(a(135),function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this;return e=this.props.auth?r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{className:"login",href:"/api/logout"}," Hi ",this.props.auth.name,",  Logout ")," "):r.a.createElement("a",{className:"login",href:"/auth/google"}," ",r.a.createElement("img",{src:"/images/google.png"})," Sign in "),r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"navbar"},r.a.createElement("a",{onClick:function(){return t.props.scrollTo("home")}}," Home "),r.a.createElement("a",{onClick:function(){return t.props.scrollTo("about")}}," About "),r.a.createElement("a",{onClick:function(){return t.props.scrollTo("experience")}}," Experience "),r.a.createElement("a",{onClick:function(){return t.props.scrollTo("skills")}}," Skills "),r.a.createElement("a",{onClick:function(){return t.props.scrollTo("contact")},href:"/#"}," Contact "),r.a.createElement("a",{href:"/api/download"}," Download Resume"),e))}}]),t}(i.Component)),y=Object(v.b)(function(e){return{auth:e.auth}})(w),j=(a(136),a(42)),O=a.n(j),x=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"bgpic"},r.a.createElement(O.a,null,r.a.createElement("span",{className:"greeting"}," Hi, This is Amitava! "),r.a.createElement("span",{className:"scroll"}," Scroll down to exploer ",r.a.createElement(O.a.Backspace,{count:3,delay:400}),"re more... ")))}}]),t}(i.Component),N=(a(137),function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"about",className:"about"},r.a.createElement("div",{className:"text"},r.a.createElement("div",{className:"heading"},"ABOUT"),r.a.createElement("div",{className:"desc"},"As a natural born go-getter, my passion has continuously driven me to expand my knowledge, experience, and relationships. With a strong background and diverse skill set, I\u2019m confident in the creative ideas and successful solutions I bring to the table. Keep exploring my site to learn more information about me, and reach out directly with any questions.")),r.a.createElement("div",{className:"pic"}))}}]),t}(i.Component)),C=(a(138),a(69)),A=a.n(C),S=["2016","2018","2020"],I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={value:0,previous:0},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"jobs"},r.a.createElement("div",{id:"experience",className:"section-heading"}," MY EXPERIENCES"),r.a.createElement("div",{className:"exp-timeline"},r.a.createElement("div",{style:{width:"60%",height:"100px",margin:"0 auto"}},r.a.createElement(A.a,{index:this.state.value,indexClick:function(t){e.setState({value:t,previous:e.state.value})},linePadding:200,minEventPadding:100,values:S,isOpenBeginning:!0})),r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"exp"},r.a.createElement("div",{className:"title"},this.props.jobs[this.state.value].name),r.a.createElement("div",{className:"desg"},this.props.jobs[this.state.value].position),r.a.createElement("ul",null,this.props.jobs[this.state.value].resposibilities.map(function(e){return r.a.createElement("li",null,e)}))))))}}]),t}(i.Component),M=(a(164),function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.education;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"section-heading"}),r.a.createElement("div",{id:"education",className:"Education"},r.a.createElement("div",{className:"text"},r.a.createElement("div",{className:"heading"},"MY EDUCATION"),r.a.createElement("div",{className:"desc"},e.name),r.a.createElement("div",{className:"desc"},e.Course),r.a.createElement("div",{className:"desc"},r.a.createElement("ul",null,e.projects.map(function(e,t){return r.a.createElement("li",{key:t},e)})))),r.a.createElement("img",{alt:"background pic",src:"/images/education.jpg",style:{width:"50%"}})))}}]),t}(i.Component)),T=(a(165),function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"contact",className:"contact"},r.a.createElement("div",{className:"section-heading"}," LET'S CONNECT"),r.a.createElement("div",{className:"mail"},r.a.createElement("div",{className:"mail-address"},r.a.createElement("a",{href:"mailto:amitavamozumder@gmail.com"},"amitavamozumder@gmail.com"))))}}]),t}(i.Component)),z=(a(166),function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){for(var e=this.props.skills,t=["/images/skill1.jpg","/images/skill2.jpg","/images/skill3.jpg"],a=[],n=0;n<3;n++)a.push(r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"skills",className:"skill ",style:{backgroundImage:"url(".concat(t[n],")")}}),r.a.createElement("div",{className:"skill skill-text"},r.a.createElement("div",{className:"skill-heading"},e[n].name),r.a.createElement("div",{className:"skill-desc"},e[n].desc))));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"section-heading"}," MY SKILLS"),r.a.createElement("div",{className:"section-desc"}," What I do"),r.a.createElement("div",{className:"skill-grid"},a))}}]),t}(i.Component)),D=[{name:"Time Inc (Meredith Corporation)",position:"Software Development Engineer - 1",timePeriod:"Jun/2016 - Jun/2018",resposibilities:["Worked as a React developer to create a Quiz/poll creation tools that assists editors in creating and embedding dynamic interactive content on their web pages.","Migrated all the APIs for above project from Java to NodeJs.","Developed a polling-based Live Blogging app to provide coverage of an live event on a website. With user account control and support for all external media and social networking links.","Created a Ratings and Review tool to enable viewers of a particular article, to leave their rating and reviews on that article page. With support for content moderation.","Captured and tracked user information and developed a tool for the editors to represent the analytics graphically and interact with them."]},{name:"Citrix R&D India",position:"Software Engineer 2",timePeriod:"Jun/2018 - Present",resposibilities:["Worked as a full-stack developer in Rightsignature: a web and mobile e-signature service. Go-to choice for thousands of SMB and Large Enterprise accounts.","Worked between two versions of the product. Facilitating the migrations of users between them.","Worked with product security team to find and fix security vulnerabilities in the product.","Implemented RBAC(Roll Based Access Control) for easy integration with Enterprise Customers.","Integrated the product with other in house SAAS products for seamless workspace experience.","Worked in custom workflow allows users to create customized workflows that include multiple triggers and actions."]},{name:"PayPal",position:"Software Engineer 2",timePeriod:"Jun/2016 - Jun/2018",resposibilities:["Worked as a full-stack developer in internal web tools, supporting customer service agents.","Worked in tandem with the Data Science team to integrate NLP models with microservices.","Created a generalized data orchestration service for in-house products.","Implemented instrumentation to provide business metrics to management."]}],P={name:"Jadavpur university",Course:"Computer Science & Engineering, B.E.",projects:["UI based chat application with Java using MulticastSocket.","Android App for sharing APK files among Bluetooth groups.","Speaker Identifying application in C implementing Gaussian mixture model on MLCC files."]},B=[{name:"FRONT-END",desc:"I'm proficient in ReactJs, Including React16. I've worked in both valinna Javascript as well as TypeScript.   while developing Front-end I also have expertise with Ember.js and jQuery. "},{name:"BACK-END",desc:"I'm well-versed in NodeJS when it comes to develping back-end APIs or Connecting to Databases. Along side with that I've also worked with Ruby On Rails and Java"},{name:"DATABASE",desc:"I'm congnizant of ElasticSearch, PostgreSQL, and MongoDb. Have experience working with using all of them."}],J=(a(167),function(){return r.a.createElement("div",{className:"quote-section"},r.a.createElement("blockquote",{class:"sidekick"},"Choose a job you love and you will never have to work a day in your life. ",r.a.createElement("cite",null,"  Confucius")))}),R=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).mobileCheck=function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"scrollTo",value:function(e){E.scroller.scrollTo(e,{duration:800,delay:0,smooth:"easeInOutQuart"})}},{key:"render",value:function(){var e=this.mobileCheck();return r.a.createElement(r.a.Fragment,null,e?r.a.createElement("div",{className:"altr"}," Please use a computer to experience the site. "):r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null),r.a.createElement(y,{scrollTo:this.scrollTo}),r.a.createElement(E.Element,{name:"home"},r.a.createElement(x,null)),r.a.createElement(E.Element,{name:"about"},r.a.createElement(N,{about:""})),r.a.createElement(E.Element,{name:"jobs"},r.a.createElement(I,{jobs:D})),r.a.createElement(E.Element,{name:"education"},r.a.createElement(M,{education:P})),r.a.createElement(E.Element,{name:"skills"},r.a.createElement(z,{skills:B})),r.a.createElement(J,null),r.a.createElement(E.Element,{name:"contact"},r.a.createElement(T,null))))}}]),t}(i.Component),F=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchUser()}},{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(h.a,{exact:!0,path:"/",component:R})))}}]),t}(i.Component),W=Object(v.b)(null,n)(F),q=a(16),L=Object(q.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_user":return t.payload||!1;default:return e}}}),U=a(100),_=Object(q.d)(L,{},Object(q.a)(U.a));s.a.render(r.a.createElement(v.a,{store:_}," ",r.a.createElement(W,null)," "),document.querySelector("#root"))}},[[101,1,2]]]);