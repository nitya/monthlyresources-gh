"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4333],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),h=o,m=d["".concat(i,".").concat(h)]||d[h]||c[h]||s;return r?a.createElement(m,n(n({ref:t},u),{},{components:r})):a.createElement(m,n({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,n=new Array(s);n[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,n[1]=l;for(var p=2;p<s;p++)n[p]=r[p];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5342:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>n,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=r(7462),o=(r(7294),r(3905));const s={slug:"2022-oct-serverless-apps",title:"Oct 2022 - Serverless on Azure",authors:["monish"],tags:["serverless","azure","apps","oct"],draft:!1},n=void 0,l={permalink:"/monthlyresources-gh/2022-oct-serverless-apps",source:"@site/blog/2022-10-01-serverless-apps/README.md",title:"Oct 2022 - Serverless on Azure",description:"Serverless Applications",date:"2022-10-01T00:00:00.000Z",formattedDate:"October 1, 2022",tags:[{label:"serverless",permalink:"/monthlyresources-gh/tags/serverless"},{label:"azure",permalink:"/monthlyresources-gh/tags/azure"},{label:"apps",permalink:"/monthlyresources-gh/tags/apps"},{label:"oct",permalink:"/monthlyresources-gh/tags/oct"}],readingTime:3.42,hasTruncateMarker:!1,authors:[{name:"Monish Gangwani",title:"Sr. Developer Product Marketing Manager @Microsoft Azure",url:"https://twitter.com/monishgangwani",imageURL:"https://pbs.twimg.com/profile_images/2414686673/xmpuhvywox3tjo26r259_400x400.jpeg",key:"monish"}],frontMatter:{slug:"2022-oct-serverless-apps",title:"Oct 2022 - Serverless on Azure",authors:["monish"],tags:["serverless","azure","apps","oct"],draft:!1},nextItem:{title:"Sep 2022 - Java at MSFT & Azure",permalink:"/monthlyresources-gh/2022-java-azure-microsoft"}},i={authorsImageUrls:[void 0]},p=[{value:"Serverless Applications",id:"serverless-applications",level:2},{value:"\ud83c\udf1f Featured Content",id:"-featured-content",level:2},{value:"1. Azure Container Apps",id:"1-azure-container-apps",level:3},{value:"2. Passwordless Connect, Java",id:"2-passwordless-connect-java",level:3},{value:"3. Serverless September",id:"3-serverless-september",level:3},{value:"4. Azure Static Web Apps, API",id:"4-azure-static-web-apps-api",level:3},{value:"5. VScode, Azure Container Apps",id:"5-vscode-azure-container-apps",level:3},{value:"6. LP: Serverless, Functions Apps",id:"6-lp-serverless-functions-apps",level:3},{value:"7. LP: Serverless Full-Stack Apps",id:"7-lp-serverless-full-stack-apps",level:3},{value:"8. Serverless, Low-Code Apps",id:"8-serverless-low-code-apps",level:3},{value:"9. Serverless Hacks: Tollbooth",id:"9-serverless-hacks-tollbooth",level:3},{value:"10. ZeroToHero: Durable Entities",id:"10-zerotohero-durable-entities",level:3},{value:"11. Guide: Cloud-Scale Data, Java",id:"11-guide-cloud-scale-data-java",level:3},{value:"12. AskTheExpert: Container Apps",id:"12-asktheexpert-container-apps",level:3}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"serverless-applications"},"Serverless Applications"),(0,o.kt)("admonition",{title:"OUR FOCUS THIS MONTH",type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Serverless Applications"),": Check out the latest serverless applications learning content from Microsoft Subject Matter Experts (SMEs). Learn how to go serverless and build apps faster without the need to manage infrastructure. ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://azure.github.io/Cloud-Native/assets/images/post-kickoff-4a04995b44f0cc4a784fb4ab5e29cf7c.png",alt:"Banner Image for Serverless September"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"-featured-content"},"\ud83c\udf1f Featured Content"),(0,o.kt)("h3",{id:"1-azure-container-apps"},"1. Azure Container Apps"),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"Go Cloud Native with Azure Container Apps")," "),(0,o.kt)("p",null,"Azure Container Apps help developers get more productive by reducing the operational overhead and the learning curve of adopting a cloud native strategy. Kendall Roden shares best practices for building modern, portable applications. ",(0,o.kt)("br",null),"  \ud83d\udc53 | ",(0,o.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/go-cloud-native-with-azure-container-apps/ba-p/3616407?ocid=AID3045628"},"Read now")," "),(0,o.kt)("h3",{id:"2-passwordless-connect-java"},"2. Passwordless Connect, Java"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Delete Passwords: Passwordless Connections for Java Apps to Azure Services")," "),(0,o.kt)("p",null,"Announcing the preview of passwordless connections for Java applications to Azure database and eventing services, allowing you to finally shift away from using passwords! Learn more in the blog by Asir Vedamuthu Selvasingh, Principal PM Architect for Java on Microsoft Azure. ",(0,o.kt)("br",null),"   \ud83d\udc53 | ",(0,o.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/delete-passwords-passwordless-connections-for-java-apps-to-azure/ba-p/3638714?ocid=AID3045628"},"Read now")," "),(0,o.kt)("h3",{id:"3-serverless-september"},"3. Serverless September"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Serverless September - the collection")," "),(0,o.kt)("p",null,"Catch up on all things from Serverless September \u2014 a celebration of serverless computing from core concepts to usage scenarios and best practices. Explore community-driven and self-guided learning for jumpstarting your Cloud Native journey. ",(0,o.kt)("br",null),"   \ud83d\udd0e | ",(0,o.kt)("a",{parentName:"p",href:"https://azure.github.io/Cloud-Native/serverless-september/?ocid=AID3045628"},"Explore Website")," "),(0,o.kt)("h3",{id:"4-azure-static-web-apps-api"},"4. Azure Static Web Apps, API"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"New API back-end options in Azure Static Web Apps | Azure Friday")," "),(0,o.kt)("p",null,"Annina Keller joins Scott Hanselman to demo how Azure Static Web Apps provide built-in serverless API endpoints via integration with Azure services. ",(0,o.kt)("br",null),"   \ud83d\udcfa | ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/shows/azure-friday/new-api-back-end-options-in-azure-static-web-apps?ocid=AID3045628"},"Watch now")," "),(0,o.kt)("h3",{id:"5-vscode-azure-container-apps"},"5. VScode, Azure Container Apps"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Enhanced Visual Studio Code Java Tooling and Container Apps")," "),(0,o.kt)("p",null,"Catch Burke Holland and Rory Preddy share how to leverage a natural developer flow with Container Apps and the recently enhanced Visual Studio Code Java Tooling. ",(0,o.kt)("br",null),"   \ud83d\udcfa | ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/shows/vs-code-livestreams/enhanced-visual-studio-code-java-tooling-and-container-apps?ocid=AID3045628"},"Watch now")," "),(0,o.kt)("h3",{id:"6-lp-serverless-functions-apps"},"6. LP: Serverless, Functions Apps"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Create serverless applications")," "),(0,o.kt)("p",null,"Learn how to leverage functions to execute server-side logic and build serverless architectures. This learning path can help you prepare for the Microsoft Azure Developer Associate certification. ",(0,o.kt)("br",null),"  \ud83c\udfc1 | ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/training/paths/create-serverless-applications/?ocid=AID3045628"},"Start Today")," "),(0,o.kt)("h3",{id:"7-lp-serverless-full-stack-apps"},"7. LP: Serverless Full-Stack Apps"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Build serverless, full stack applications in Azure")," "),(0,o.kt)("p",null,"Learn how to build serverless full stack apps using the language of your choice and a Vue.js frontend. In a scenario of trying to catch the bus, build a solution using Azure SQL Database, Azure Functions, Azure Static Web Apps, and more. ",(0,o.kt)("br",null)," \ud83c\udfc1 | ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/training/paths/build-serverless-full-stack-apps-azure/?ocid=AID3045628"},"Start Today")," "),(0,o.kt)("h3",{id:"8-serverless-low-code-apps"},"8. Serverless, Low-Code Apps"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Where am I? Location with Serverless Power Platform Custom Connector")," "),(0,o.kt)("p",null,"Follow along as Justin Yoo builds a custom serverless Power Platform connector that provides a static map image generated by Google Maps API and Naver Map API, using your GPS location. ",(0,o.kt)("br",null),"  \ud83d\ude80 | ",(0,o.kt)("a",{parentName:"p",href:"https://azure.github.io/Cloud-Native/blog/28-where-am-i/?ocid=AID3045628"},"Let's Build!")," "),(0,o.kt)("h3",{id:"9-serverless-hacks-tollbooth"},"9. Serverless Hacks: Tollbooth"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Build a toll booth app with Azure Serverless architecture")," "),(0,o.kt)("p",null,"Gwyn Pe\xf1a-Siguenza introduces the What the Hack challenges that take you through architecting a serverless solution on Azure for the use case of a tollbooth application. Let\u2019s go out of the comfort zone and try something new! ",(0,o.kt)("br",null),"  \ud83d\udcfa | ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=ABwDOd7K5is&list=PLmsFUfdnGr3wg9NCWGYGw0IJORaqXhzLP&index=1?ocid=AID3045628"},"Watch Now")," "),(0,o.kt)("h3",{id:"10-zerotohero-durable-entities"},"10. ZeroToHero: Durable Entities"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A walkthrough of Durable Entities")," "),(0,o.kt)("p",null,"Durable Entities are a special type of Azure Function that allow you to implement stateful objects in a serverless environment. Learn more in this walk-through blog. ",(0,o.kt)("br",null),"  \ud83d\ude80 | ",(0,o.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/a-walkthrough-of-durable-entities/ba-p/3616832?ocid=AID3045628"},"Let's Learn!")," "),(0,o.kt)("h3",{id:"11-guide-cloud-scale-data-java"},"11. Guide: Cloud-Scale Data, Java"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Cloud-Scale Data for Spring Developers")," "),(0,o.kt)("p",null,"This guide will help you build cloud-native #Java applications in #Azure with real-world examples. You\u2019ll gain insights about using NoSQL and why you\u2019ll love Azure Cosmos DB, our fully managed, distributed #NoSQL database service on Azure.  ",(0,o.kt)("br",null)," \ud83d\udcd6 | ",(0,o.kt)("a",{parentName:"p",href:"https://azure.github.io/cloud-scale-data-for-devs-guide/?ocid=AID3045628"},"Get the Guide")," "),(0,o.kt)("h3",{id:"12-asktheexpert-container-apps"},"12. AskTheExpert: Container Apps"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Ask the Expert | Serverless September: Azure Container Apps")," "),(0,o.kt)("p",null,"The Azure Container Apps Product Group covers serverless containers purpose-built for microservices in this Q&A. Experts will be sharing how to build and deploy modern apps and microservices with Azure Container Apps. ",(0,o.kt)("br",null),"  \ud83d\udcfa | ",(0,o.kt)("a",{parentName:"p",href:"https://reactor.microsoft.com/reactor/events/17004/?ocid=AID3045628"},"Watch On Demand")," "),(0,o.kt)("hr",null),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},": ",(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Sign up for Microsoft Tech News")," "),(0,o.kt)("p",{parentName:"admonition"},"A monthly newsletter for developers and tech professionals, tailored to your preferences. \u2728 ",(0,o.kt)("a",{parentName:"p",href:"https://developer.microsoft.com/Newsletter/?ocid=AID3045262"},(0,o.kt)("strong",{parentName:"a"},"\ud83d\udd16 Click here to sign up")),"\u2728 ")))}c.isMDXComponent=!0}}]);