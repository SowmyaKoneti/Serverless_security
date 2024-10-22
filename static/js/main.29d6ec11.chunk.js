(this["webpackJsonpserverless-security"]=this["webpackJsonpserverless-security"]||[]).push([[0],[,function(e,t,n){},,,function(e,t,n){e.exports=n(19)},,,,,,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/vivek.f18d7b1e.png"},function(e,t,n){e.exports=n.p+"static/media/Sowjanya.2475e907.png"},function(e,t,n){e.exports=n.p+"static/media/Pravarsha.3d775fa7.png"},function(e,t,n){e.exports=n.p+"static/media/Sowmya.747f79b3.png"},function(e,t,n){e.exports=n.p+"static/media/SaiKumar.9f602f6e.png"},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(3),s=n.n(i);n(13);var l=function(){const[e,t]=Object(a.useState)(!1);return r.a.createElement("nav",null,r.a.createElement("a",{href:"#home",className:"home-link"},"Home"),r.a.createElement("div",{className:"hamburger",onClick:()=>{t(!e)}},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)),r.a.createElement("ul",{className:e?"open":""},r.a.createElement("li",null,r.a.createElement("a",{href:"#content"},"Findings")),r.a.createElement("li",null,r.a.createElement("a",{href:"#taxonomy"},"Taxonomy")),r.a.createElement("li",null,r.a.createElement("a",{href:"#team"},"Team"))))};n(1);var c=function(){return r.a.createElement("section",{id:"home",className:"section"},r.a.createElement("div",{className:"hero"},r.a.createElement("h1",{className:"main-title"},"Security for Serverless Computing"),r.a.createElement("p",null,"Increased usage of serverless computing came up with several security constraints that must be put into consideration. These include function isolation, function data privacy, and secure chaining of functions. Function isolation is important as no one function has direct access to another and thereby pinpoints a compromised system."),r.a.createElement("p",null,"Another major issue is data privacy, especially for a facility that extends into a multi-tenant area where users\u2019 information might become vulnerable for sharing. Secure function chaining in which several functions are invoked consecutively have also been identified to pose serious problems such as code injection and privilege escalation. These threats mostly get access to vulnerabilities within the serverless frameworks, which in the end results in unauthorized access or even data breaches."),r.a.createElement("p",null,"To overcome these issues, strong cybersecurity should be provided by regular IAM practices, security audits, and the need for monitoring tools. By paying attention to these aspects, organizations will be in a position to improve the security of serverless applications while minimizing the risks posed by this more popular computing model.")),r.a.createElement("h2",{className:"h2"},"Key Challenges"),r.a.createElement("div",{className:"challenges-container"},[{title:"Data Privacy",description:"Sensitive data processed across third-party services in distributed serverless environments can lead to privacy risks"},{title:"Function Isolation",description:"Serverless platforms are multi-tenant environments, which increases the risk of resource contention and data leakage"},{title:"Privilege Escalation",description:" Functions granted more permissions than necessary pose risks of unauthorized access to sensitive data"},{title:"Cold Starts",description:"Serverless functions may experience delays during startup when invoked after a period of inactivity, leading to performance bottlenecks"},{title:"Code Injection Attacks",description:"Malicious code injection in serverless functions can lead to unauthorized actions and data breaches"},{title:"Denial of Service (DoS) and DDoS",description:"Serverless platforms auto-scaling feature can be exploited, causing resource exhaustion and increased operational costs"}].map((e,t)=>r.a.createElement("div",{key:t,className:"challenge-card"},r.a.createElement("div",{className:"card-inner"},r.a.createElement("div",{className:"card-front"},r.a.createElement("h2",null,e.title)),r.a.createElement("div",{className:"card-back"},r.a.createElement("p",null,e.description)))))))};var o=function(){return r.a.createElement("section",{id:"content",className:"content-section"},r.a.createElement("h2",{className:"taxh2"},"Findings"),r.a.createElement("ul",null,r.a.createElement("li",null,"Pre-warming functions and caching strategies can reduce the impact of cold start latency."),r.a.createElement("li",null,"Intelligent resource allocation and load balancing can minimize the startup time of serverless functions during idle periodsurity Frameworks for Privilege Managemen"),r.a.createElement("li",null,"Implementing multi-layered security frameworks with strong identity and access management (IAM) systems and fine-grained privilege control helps mitigate the risks of privilege escalation"),r.a.createElement("li",null,"Using runtime isolation techniques ensures that functions operate securely even in multi-tenant environments"),r.a.createElement("li",null,"Implement dynamic information flow control (DIFC) to monitor and control data flow, preventing unauthorized access to sensitive information"),r.a.createElement("li",null,"Adopt rate limiting and other protective measures to prevent Denial-of-Service (DoS) attacks on serverless APIs."),r.a.createElement("li",null,'Caching necessary resources or implementing "just-in-time" preparation for functions can prevent attackers from exploiting vulnerabilities during the startup phase.'),r.a.createElement("li",null,"For data flow security, strong encryption should be used for data both in transit and at rest, with dynamic information flow control (DIFC) employed to monitor and control data flow, ensuring that unauthorized access to sensitive data is prevented"),r.a.createElement("li",null,"API security can be enhanced by securing exposed APIs through strong authentication mechanisms, such as OAuth or API keys, and by implementing protective measures like rate limiting to prevent DoS attacks"),r.a.createElement("li",null," End-to-end encryption and data integrity checks throughout the workflow are also necessary to prevent cascading security failures"),r.a.createElement("li",null,"Strong identity and access management (IAM) policies should be implemented to ensure that data and function executions are isolated across different tenants")))};var m=function(){return r.a.createElement("section",{id:"taxonomy",className:"tax-section"},r.a.createElement("h2",{className:"taxh2"},"Taxonomy"),r.a.createElement("div",{className:"table-container"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Topic"),r.a.createElement("th",null,"Papers"),r.a.createElement("th",null,"Key Papers"),r.a.createElement("th",null,"Problem Domain"),r.a.createElement("th",null,"Solution Approach"),r.a.createElement("th",null,"Methodology"),r.a.createElement("th",null,"Impact"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("strong",null,"Serverless Computing Surveys & Overviews")),r.a.createElement("td",null,"1, 13, 19, 5"),r.a.createElement("td",null,"Survey on Serverless Computing, The Serverless Computing Survey: A Technical Primer for Design"),r.a.createElement("td",null,"General overview of serverless computing, architecture trends, and challenges"),r.a.createElement("td",null,"Provide a survey of existing architectures, challenges, and trends"),r.a.createElement("td",null,"Systematic review of literature, case study analysis"),r.a.createElement("td",null,"Comprehensive understanding of the current landscape of serverless computing; establishes baseline knowledge for further research")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("strong",null,"Security in Serverless Computing")),r.a.createElement("td",null,"2, 3, 14, 15, 22, 12"),r.a.createElement("td",null,"Serverless Computing: A Security Perspective, Securing Serverless Computing: Challenges, Solutions, and Opportunities, Secure Serverless Computing Using Dynamic Information Flow Control"),r.a.createElement("td",null,"Security challenges in serverless environments (e.g., network, privacy)"),r.a.createElement("td",null,"Propose frameworks and solutions to secure serverless architectures"),r.a.createElement("td",null,"Propose and analyze security frameworks, evaluate privacy mechanisms"),r.a.createElement("td",null,"Contributes to securing serverless platforms, improves privacy, and establishes security frameworks for practical implementation")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("strong",null,"Serverless Computing Use Cases")),r.a.createElement("td",null,"4, 11, 18"),r.a.createElement("td",null,"Serverless Computing: Advantages, Limitations, and Use Cases, A Review of Serverless Use Cases and their Characteristics"),r.a.createElement("td",null,"Practical use cases in serverless computing, including security"),r.a.createElement("td",null,"Highlight and analyze real-world implementations"),r.a.createElement("td",null,"Case study analysis of existing use cases"),r.a.createElement("td",null,"Helps enterprises and developers adopt serverless computing with a focus on practical, secure use cases")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("strong",null,"Serverless Computing for IoT and Specific Applications")),r.a.createElement("td",null,"9, 21, 10"),r.a.createElement("td",null,"Serverless Computing for Internet of Things: A Systematic Literature Review, A Transparent Auto-Scaling Cache for Serverless Applications"),r.a.createElement("td",null,"Serverless computing applications in IoT, auto-scaling"),r.a.createElement("td",null,"Propose architectures for auto-scaling and securing IoT applications"),r.a.createElement("td",null,"Use of simulation environments, benchmarking tools"),r.a.createElement("td",null,"Enhances scalability and security in IoT environments, making serverless more practical for specific applications")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("strong",null,"Serverless Architecture & Performance Optimization")),r.a.createElement("td",null,"16, 20, 17"),r.a.createElement("td",null,"Faster and Cheaper Serverless Computing on Harvested Resources"),r.a.createElement("td",null,"Optimizing serverless architectures for performance and cost"),r.a.createElement("td",null,"Propose performance enhancements (e.g., caching, resource management)"),r.a.createElement("td",null,"Experimental evaluations, performance benchmarking"),r.a.createElement("td",null,"Advances in performance and cost-efficiency in serverless computing, offering pathways for more sustainable, efficient architectures"))))))};const u=[{name:"Vivek",bio:"Masters degree in Computer Science from Saint Louis University",img:n(14),linkedin:"#"},{name:"Sowjanya",bio:"Masters degree in Computer Science from Saint Louis University",img:n(15),linkedin:"#"},{name:"Pravarsha",bio:"Masters degree in Computer Science from Saint Louis University",img:n(16),linkedin:"#"},{name:"Sowmya",bio:"Masters degree in Computer Science from Saint Louis University",img:n(17),linkedin:"#"},{name:"Sai Kumar",bio:"Masters degree in Computer Science from Saint Louis University",img:n(18),linkedin:"#"}];var d=function(){return r.a.createElement("section",{id:"team",className:"team-section"},r.a.createElement("h2",{className:"teamh2"},"Meet the Team"),r.a.createElement("div",{className:"team-grid"},u.map(e=>r.a.createElement("div",{key:e.name,className:"team-member"},r.a.createElement("img",{src:e.img,alt:e.name}),r.a.createElement("h3",null,e.name),r.a.createElement("p",{className:"team-description"},e.bio)))))};var p=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l,null),r.a.createElement("section",{id:"home"},r.a.createElement(c,null)),r.a.createElement("section",{id:"content"},r.a.createElement(o,null)),r.a.createElement("section",{id:"taxonomy"},r.a.createElement(m,null)),r.a.createElement("section",{id:"team"},r.a.createElement(d,null)))};var h=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then(t=>{let{getCLS:n,getFID:a,getFCP:r,getLCP:i,getTTFB:s}=t;n(e),a(e),r(e),i(e),s(e)})};s.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null))),h()}],[[4,1,2]]]);
//# sourceMappingURL=main.29d6ec11.chunk.js.map