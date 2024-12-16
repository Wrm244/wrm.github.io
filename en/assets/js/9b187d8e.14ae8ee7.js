"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2445],{84959:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var i=t(74848),s=t(28453);const l={id:"DesignPattern3",slug:"/DP_3",title:"\u521b\u5efa\u8005\u6a21\u5f0f",author:"RiverMountain",date:"2023/06/01",tags:["Design_Pattern"],keywords:["Design_Pattern"],description:"Java\u7684\u8f6f\u4ef6\u8bbe\u8ba1\u521b\u5efa\u8005\u6a21\u5f0f",last_update:{date:"2023/06/01"}},c="\u521b\u5efa\u8005\u6a21\u5f0f",r={id:"stack/java/\u8bbe\u8ba1\u6a21\u5f0f/DesignPattern3",title:"\u521b\u5efa\u8005\u6a21\u5f0f",description:"Java\u7684\u8f6f\u4ef6\u8bbe\u8ba1\u521b\u5efa\u8005\u6a21\u5f0f",source:"@site/docs/stack/java/\u8bbe\u8ba1\u6a21\u5f0f/DP03.md",sourceDirName:"stack/java/\u8bbe\u8ba1\u6a21\u5f0f",slug:"/DP_3",permalink:"/en/docs/DP_3",draft:!1,unlisted:!1,tags:[{inline:!0,label:"Design_Pattern",permalink:"/en/docs/tags/design-pattern"}],version:"current",frontMatter:{id:"DesignPattern3",slug:"/DP_3",title:"\u521b\u5efa\u8005\u6a21\u5f0f",author:"RiverMountain",date:"2023/06/01",tags:["Design_Pattern"],keywords:["Design_Pattern"],description:"Java\u7684\u8f6f\u4ef6\u8bbe\u8ba1\u521b\u5efa\u8005\u6a21\u5f0f",last_update:{date:"2023/06/01"}},sidebar:"stack",previous:{title:"\u8f6f\u4ef6\u8bbe\u8ba1\u539f\u5219",permalink:"/en/docs/DP_2"},next:{title:"\u521b\u5efa\u578b\u6a21\u5f0f",permalink:"/en/docs/DP_4"}},a={},o=[{value:"\u5355\u4f8b\u8bbe\u8ba1\u6a21\u5f0f",id:"\u5355\u4f8b\u8bbe\u8ba1\u6a21\u5f0f",level:2},{value:"\u5355\u4f8b\u6a21\u5f0f\u7684\u7ed3\u6784",id:"\u5355\u4f8b\u6a21\u5f0f\u7684\u7ed3\u6784",level:3},{value:"\u5355\u4f8b\u6a21\u5f0f\u7684\u5b9e\u73b0",id:"\u5355\u4f8b\u6a21\u5f0f\u7684\u5b9e\u73b0",level:3},{value:"\u5b58\u5728\u7684\u95ee\u9898",id:"\u5b58\u5728\u7684\u95ee\u9898",level:3},{value:"\u95ee\u9898\u6f14\u793a",id:"\u95ee\u9898\u6f14\u793a",level:4},{value:"\u95ee\u9898\u7684\u89e3\u51b3",id:"\u95ee\u9898\u7684\u89e3\u51b3",level:4},{value:"JDK\u6e90\u7801\u89e3\u6790-Runtime\u7c7b",id:"jdk\u6e90\u7801\u89e3\u6790-runtime\u7c7b",level:3}];function d(n){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u521b\u5efa\u8005\u6a21\u5f0f",children:"\u521b\u5efa\u8005\u6a21\u5f0f"}),"\n",(0,i.jsx)(e.p,{children:"\u521b\u5efa\u578b\u6a21\u5f0f\u7684\u4e3b\u8981\u5173\u6ce8\u70b9\u662f\u201c\u600e\u6837\u521b\u5efa\u5bf9\u8c61\uff1f\u201d\uff0c\u5b83\u7684\u4e3b\u8981\u7279\u70b9\u662f\u201c\u5c06\u5bf9\u8c61\u7684\u521b\u5efa\u4e0e\u4f7f\u7528\u5206\u79bb\u201d\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u8fd9\u6837\u53ef\u4ee5\u964d\u4f4e\u7cfb\u7edf\u7684\u8026\u5408\u5ea6\uff0c\u4f7f\u7528\u8005\u4e0d\u9700\u8981\u5173\u6ce8\u5bf9\u8c61\u7684\u521b\u5efa\u7ec6\u8282\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u521b\u5efa\u578b\u6a21\u5f0f\u5206\u4e3a\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5355\u4f8b\u6a21\u5f0f"}),"\n",(0,i.jsx)(e.li,{children:"\u5de5\u5382\u65b9\u6cd5\u6a21\u5f0f"}),"\n",(0,i.jsx)(e.li,{children:"\u62bd\u8c61\u5de5\u7a0b\u6a21\u5f0f"}),"\n",(0,i.jsx)(e.li,{children:"\u539f\u578b\u6a21\u5f0f"}),"\n",(0,i.jsx)(e.li,{children:"\u5efa\u9020\u8005\u6a21\u5f0f"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u5355\u4f8b\u8bbe\u8ba1\u6a21\u5f0f",children:"\u5355\u4f8b\u8bbe\u8ba1\u6a21\u5f0f"}),"\n",(0,i.jsx)(e.p,{children:"\u5355\u4f8b\u6a21\u5f0f\uff08Singleton Pattern\uff09\u662f Java \u4e2d\u6700\u7b80\u5355\u7684\u8bbe\u8ba1\u6a21\u5f0f\u4e4b\u4e00\u3002\u8fd9\u79cd\u7c7b\u578b\u7684\u8bbe\u8ba1\u6a21\u5f0f\u5c5e\u4e8e\u521b\u5efa\u578b\u6a21\u5f0f\uff0c\u5b83\u63d0\u4f9b\u4e86\u4e00\u79cd\u521b\u5efa\u5bf9\u8c61\u7684\u6700\u4f73\u65b9\u5f0f\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u8fd9\u79cd\u6a21\u5f0f\u6d89\u53ca\u5230\u4e00\u4e2a\u5355\u4e00\u7684\u7c7b\uff0c\u8be5\u7c7b\u8d1f\u8d23\u521b\u5efa\u81ea\u5df1\u7684\u5bf9\u8c61\uff0c\u540c\u65f6\u786e\u4fdd\u53ea\u6709\u5355\u4e2a\u5bf9\u8c61\u88ab\u521b\u5efa\u3002\u8fd9\u4e2a\u7c7b\u63d0\u4f9b\u4e86\u4e00\u79cd\u8bbf\u95ee\u5176\u552f\u4e00\u7684\u5bf9\u8c61\u7684\u65b9\u5f0f\uff0c\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\uff0c\u4e0d\u9700\u8981\u5b9e\u4f8b\u5316\u8be5\u7c7b\u7684\u5bf9\u8c61\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u5355\u4f8b\u6a21\u5f0f\u7684\u7ed3\u6784",children:"\u5355\u4f8b\u6a21\u5f0f\u7684\u7ed3\u6784"}),"\n",(0,i.jsx)(e.p,{children:"\u5355\u4f8b\u6a21\u5f0f\u7684\u4e3b\u8981\u6709\u4ee5\u4e0b\u89d2\u8272\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5355\u4f8b\u7c7b\u3002\u53ea\u80fd\u521b\u5efa\u4e00\u4e2a\u5b9e\u4f8b\u7684\u7c7b"}),"\n",(0,i.jsx)(e.li,{children:"\u8bbf\u95ee\u7c7b\u3002\u4f7f\u7528\u5355\u4f8b\u7c7b"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u5355\u4f8b\u6a21\u5f0f\u7684\u5b9e\u73b0",children:"\u5355\u4f8b\u6a21\u5f0f\u7684\u5b9e\u73b0"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u5355\u4f8b\u8bbe\u8ba1\u6a21\u5f0f\u5206\u7c7b\u4e24\u79cd\uff1a"}),"\n",(0,i.jsx)(e.p,{children:"\u200b\t\u997f\u6c49\u5f0f\uff1a\u7c7b\u52a0\u8f7d\u5c31\u4f1a\u5bfc\u81f4\u8be5\u5355\u5b9e\u4f8b\u5bf9\u8c61\u88ab\u521b\u5efa"}),"\n",(0,i.jsx)(e.p,{children:"\u200b\t\u61d2\u6c49\u5f0f\uff1a\u7c7b\u52a0\u8f7d\u4e0d\u4f1a\u5bfc\u81f4\u8be5\u5355\u5b9e\u4f8b\u5bf9\u8c61\u88ab\u521b\u5efa\uff0c\u800c\u662f\u9996\u6b21\u4f7f\u7528\u8be5\u5bf9\u8c61\u65f6\u624d\u4f1a\u521b\u5efa"}),"\n"]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u997f\u6c49\u5f0f-\u65b9\u5f0f1\uff08\u9759\u6001\u53d8\u91cf\u65b9\u5f0f\uff09"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"/**\n * \u997f\u6c49\u5f0f\n *      \u9759\u6001\u53d8\u91cf\u521b\u5efa\u7c7b\u7684\u5bf9\u8c61\n */\npublic class Singleton {\n    //\u79c1\u6709\u6784\u9020\u65b9\u6cd5\n    private Singleton() {}\n\n    //\u5728\u6210\u5458\u4f4d\u7f6e\u521b\u5efa\u8be5\u7c7b\u7684\u5bf9\u8c61\n    private static Singleton instance = new Singleton();\n\n    //\u5bf9\u5916\u63d0\u4f9b\u9759\u6001\u65b9\u6cd5\u83b7\u53d6\u8be5\u5bf9\u8c61\n    public static Singleton getInstance() {\n        return instance;\n    }\n}\n"})}),"\n",(0,i.jsx)("font",{color:"red",children:"\u8bf4\u660e\uff1a"}),"\n",(0,i.jsx)(e.p,{children:"\u200b\t\u8be5\u65b9\u5f0f\u5728\u6210\u5458\u4f4d\u7f6e\u58f0\u660eSingleton\u7c7b\u578b\u7684\u9759\u6001\u53d8\u91cf\uff0c\u5e76\u521b\u5efaSingleton\u7c7b\u7684\u5bf9\u8c61instance\u3002instance\u5bf9\u8c61\u662f\u968f\u7740\u7c7b\u7684\u52a0\u8f7d\u800c\u521b\u5efa\u7684\u3002\u5982\u679c\u8be5\u5bf9\u8c61\u8db3\u591f\u5927\u7684\u8bdd\uff0c\u800c\u4e00\u76f4\u6ca1\u6709\u4f7f\u7528\u5c31\u4f1a\u9020\u6210\u5185\u5b58\u7684\u6d6a\u8d39\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u997f\u6c49\u5f0f-\u65b9\u5f0f2\uff08\u9759\u6001\u4ee3\u7801\u5757\u65b9\u5f0f\uff09"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"/**\n * \u6076\u6c49\u5f0f\n *      \u5728\u9759\u6001\u4ee3\u7801\u5757\u4e2d\u521b\u5efa\u8be5\u7c7b\u5bf9\u8c61\n */\npublic class Singleton {\n\n    //\u79c1\u6709\u6784\u9020\u65b9\u6cd5\n    private Singleton() {}\n\n    //\u5728\u6210\u5458\u4f4d\u7f6e\u521b\u5efa\u8be5\u7c7b\u7684\u5bf9\u8c61\n    private static Singleton instance;\n\n    static {\n        instance = new Singleton();\n    }\n\n    //\u5bf9\u5916\u63d0\u4f9b\u9759\u6001\u65b9\u6cd5\u83b7\u53d6\u8be5\u5bf9\u8c61\n    public static Singleton getInstance() {\n        return instance;\n    }\n}\n"})}),"\n",(0,i.jsx)("font",{color:"red",children:"\u8bf4\u660e\uff1a"}),"\n",(0,i.jsx)(e.p,{children:"\u200b\t\u8be5\u65b9\u5f0f\u5728\u6210\u5458\u4f4d\u7f6e\u58f0\u660eSingleton\u7c7b\u578b\u7684\u9759\u6001\u53d8\u91cf\uff0c\u800c\u5bf9\u8c61\u7684\u521b\u5efa\u662f\u5728\u9759\u6001\u4ee3\u7801\u5757\u4e2d\uff0c\u4e5f\u662f\u5bf9\u7740\u7c7b\u7684\u52a0\u8f7d\u800c\u521b\u5efa\u3002\u6240\u4ee5\u548c\u997f\u6c49\u5f0f\u7684\u65b9\u5f0f1\u57fa\u672c\u4e0a\u4e00\u6837\uff0c\u5f53\u7136\u8be5\u65b9\u5f0f\u4e5f\u5b58\u5728\u5185\u5b58\u6d6a\u8d39\u95ee\u9898\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u61d2\u6c49\u5f0f-\u65b9\u5f0f1\uff08\u7ebf\u7a0b\u4e0d\u5b89\u5168\uff09"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"/**\n * \u61d2\u6c49\u5f0f\n *  \u7ebf\u7a0b\u4e0d\u5b89\u5168\n */\npublic class Singleton {\n    //\u79c1\u6709\u6784\u9020\u65b9\u6cd5\n    private Singleton() {}\n\n    //\u5728\u6210\u5458\u4f4d\u7f6e\u521b\u5efa\u8be5\u7c7b\u7684\u5bf9\u8c61\n    private static Singleton instance;\n\n    //\u5bf9\u5916\u63d0\u4f9b\u9759\u6001\u65b9\u6cd5\u83b7\u53d6\u8be5\u5bf9\u8c61\n    public static Singleton getInstance() {\n\n        if(instance == null) {\n            instance = new Singleton();\n        }\n        return instance;\n    }\n}\n"})}),"\n",(0,i.jsx)("font",{color:"red",children:"\u8bf4\u660e\uff1a"}),"\n",(0,i.jsx)(e.p,{children:"\u200b\t\u4ece\u4e0a\u9762\u4ee3\u7801\u6211\u4eec\u53ef\u4ee5\u770b\u51fa\u8be5\u65b9\u5f0f\u5728\u6210\u5458\u4f4d\u7f6e\u58f0\u660eSingleton\u7c7b\u578b\u7684\u9759\u6001\u53d8\u91cf\uff0c\u5e76\u6ca1\u6709\u8fdb\u884c\u5bf9\u8c61\u7684\u8d4b\u503c\u64cd\u4f5c\uff0c\u90a3\u4e48\u4ec0\u4e48\u65f6\u5019\u8d4b\u503c\u7684\u5462\uff1f\u5f53\u8c03\u7528getInstance()\u65b9\u6cd5\u83b7\u53d6Singleton\u7c7b\u7684\u5bf9\u8c61\u7684\u65f6\u5019\u624d\u521b\u5efaSingleton\u7c7b\u7684\u5bf9\u8c61\uff0c\u8fd9\u6837\u5c31\u5b9e\u73b0\u4e86\u61d2\u52a0\u8f7d\u7684\u6548\u679c\u3002\u4f46\u662f\uff0c\u5982\u679c\u662f\u591a\u7ebf\u7a0b\u73af\u5883\uff0c\u4f1a\u51fa\u73b0\u7ebf\u7a0b\u5b89\u5168\u95ee\u9898\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u61d2\u6c49\u5f0f-\u65b9\u5f0f2\uff08\u7ebf\u7a0b\u5b89\u5168\uff09"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"/**\n * \u61d2\u6c49\u5f0f\n *  \u7ebf\u7a0b\u5b89\u5168\n */\npublic class Singleton {\n    //\u79c1\u6709\u6784\u9020\u65b9\u6cd5\n    private Singleton() {}\n\n    //\u5728\u6210\u5458\u4f4d\u7f6e\u521b\u5efa\u8be5\u7c7b\u7684\u5bf9\u8c61\n    private static Singleton instance;\n\n    //\u5bf9\u5916\u63d0\u4f9b\u9759\u6001\u65b9\u6cd5\u83b7\u53d6\u8be5\u5bf9\u8c61\n    public static synchronized Singleton getInstance() {\n\n        if(instance == null) {\n            instance = new Singleton();\n        }\n        return instance;\n    }\n}\n"})}),"\n",(0,i.jsx)("font",{color:"red",children:"\u8bf4\u660e\uff1a"}),"\n",(0,i.jsx)(e.p,{children:"\u200b\t\u8be5\u65b9\u5f0f\u4e5f\u5b9e\u73b0\u4e86\u61d2\u52a0\u8f7d\u6548\u679c\uff0c\u540c\u65f6\u53c8\u89e3\u51b3\u4e86\u7ebf\u7a0b\u5b89\u5168\u95ee\u9898\u3002\u4f46\u662f\u5728getInstance()\u65b9\u6cd5\u4e0a\u6dfb\u52a0\u4e86synchronized\u5173\u952e\u5b57\uff0c\u5bfc\u81f4\u8be5\u65b9\u6cd5\u7684\u6267\u884c\u6548\u679c\u7279\u522b\u4f4e\u3002\u4ece\u4e0a\u9762\u4ee3\u7801\u6211\u4eec\u53ef\u4ee5\u770b\u51fa\uff0c\u5176\u5b9e\u5c31\u662f\u5728\u521d\u59cb\u5316instance\u7684\u65f6\u5019\u624d\u4f1a\u51fa\u73b0\u7ebf\u7a0b\u5b89\u5168\u95ee\u9898\uff0c\u4e00\u65e6\u521d\u59cb\u5316\u5b8c\u6210\u5c31\u4e0d\u5b58\u5728\u4e86\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u61d2\u6c49\u5f0f-\u65b9\u5f0f3\uff08\u53cc\u91cd\u68c0\u67e5\u9501\uff09"}),"\n",(0,i.jsxs)(e.p,{children:["\u518d\u6765\u8ba8\u8bba\u4e00\u4e0b\u61d2\u6c49\u6a21\u5f0f\u4e2d\u52a0\u9501\u7684\u95ee\u9898\uff0c\u5bf9\u4e8e ",(0,i.jsx)(e.code,{children:"getInstance()"})," \u65b9\u6cd5\u6765\u8bf4\uff0c\u7edd\u5927\u90e8\u5206\u7684\u64cd\u4f5c\u90fd\u662f\u8bfb\u64cd\u4f5c\uff0c\u8bfb\u64cd\u4f5c\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\uff0c\u6240\u4ee5\u6211\u4eec\u6ca1\u5fc5\u8ba9\u6bcf\u4e2a\u7ebf\u7a0b\u5fc5\u987b\u6301\u6709\u9501\u624d\u80fd\u8c03\u7528\u8be5\u65b9\u6cd5\uff0c\u6211\u4eec\u9700\u8981\u8c03\u6574\u52a0\u9501\u7684\u65f6\u673a\u3002\u7531\u6b64\u4e5f\u4ea7\u751f\u4e86\u4e00\u79cd\u65b0\u7684\u5b9e\u73b0\u6a21\u5f0f\uff1a\u53cc\u91cd\u68c0\u67e5\u9501\u6a21\u5f0f"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"/**\n * \u53cc\u91cd\u68c0\u67e5\u65b9\u5f0f\n */\npublic class Singleton { \n\n    //\u79c1\u6709\u6784\u9020\u65b9\u6cd5\n    private Singleton() {}\n\n    private static Singleton instance;\n\n   //\u5bf9\u5916\u63d0\u4f9b\u9759\u6001\u65b9\u6cd5\u83b7\u53d6\u8be5\u5bf9\u8c61\n    public static Singleton getInstance() {\n\t\t//\u7b2c\u4e00\u6b21\u5224\u65ad\uff0c\u5982\u679cinstance\u4e0d\u4e3anull\uff0c\u4e0d\u8fdb\u5165\u62a2\u9501\u9636\u6bb5\uff0c\u76f4\u63a5\u8fd4\u56de\u5b9e\u4f8b\n        if(instance == null) {\n            synchronized (Singleton.class) {\n                //\u62a2\u5230\u9501\u4e4b\u540e\u518d\u6b21\u5224\u65ad\u662f\u5426\u4e3anull\n                if(instance == null) {\n                    instance = new Singleton();\n                }\n            }\n        }\n        return instance;\n    }\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u53cc\u91cd\u68c0\u67e5\u9501\u6a21\u5f0f\u662f\u4e00\u79cd\u975e\u5e38\u597d\u7684\u5355\u4f8b\u5b9e\u73b0\u6a21\u5f0f\uff0c\u89e3\u51b3\u4e86\u5355\u4f8b\u3001\u6027\u80fd\u3001\u7ebf\u7a0b\u5b89\u5168\u95ee\u9898\uff0c\u4e0a\u9762\u7684\u53cc\u91cd\u68c0\u6d4b\u9501\u6a21\u5f0f\u770b\u4e0a\u53bb\u5b8c\u7f8e\u65e0\u7f3a\uff0c\u5176\u5b9e\u662f\u5b58\u5728\u95ee\u9898\uff0c\u5728\u591a\u7ebf\u7a0b\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u7a7a\u6307\u9488\u95ee\u9898\uff0c\u51fa\u73b0\u95ee\u9898\u7684\u539f\u56e0\u662fJVM\u5728\u5b9e\u4f8b\u5316\u5bf9\u8c61\u7684\u65f6\u5019\u4f1a\u8fdb\u884c\u4f18\u5316\u548c\u6307\u4ee4\u91cd\u6392\u5e8f\u64cd\u4f5c\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u8981\u89e3\u51b3\u53cc\u91cd\u68c0\u67e5\u9501\u6a21\u5f0f\u5e26\u6765\u7a7a\u6307\u9488\u5f02\u5e38\u7684\u95ee\u9898\uff0c\u53ea\u9700\u8981\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"volatile"})," \u5173\u952e\u5b57, ",(0,i.jsx)(e.code,{children:"volatile"})," \u5173\u952e\u5b57\u53ef\u4ee5\u4fdd\u8bc1\u53ef\u89c1\u6027\u548c\u6709\u5e8f\u6027\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"/**\n * \u53cc\u91cd\u68c0\u67e5\u65b9\u5f0f\n */\npublic class Singleton {\n\n    //\u79c1\u6709\u6784\u9020\u65b9\u6cd5\n    private Singleton() {}\n\n    private static volatile Singleton instance;\n\n   //\u5bf9\u5916\u63d0\u4f9b\u9759\u6001\u65b9\u6cd5\u83b7\u53d6\u8be5\u5bf9\u8c61\n    public static Singleton getInstance() {\n\t\t//\u7b2c\u4e00\u6b21\u5224\u65ad\uff0c\u5982\u679cinstance\u4e0d\u4e3anull\uff0c\u4e0d\u8fdb\u5165\u62a2\u9501\u9636\u6bb5\uff0c\u76f4\u63a5\u8fd4\u56de\u5b9e\u9645\n        if(instance == null) {\n            synchronized (Singleton.class) {\n                //\u62a2\u5230\u9501\u4e4b\u540e\u518d\u6b21\u5224\u65ad\u662f\u5426\u4e3a\u7a7a\n                if(instance == null) {\n                    instance = new Singleton();\n                }\n            }\n        }\n        return instance;\n    }\n}\n"})}),"\n",(0,i.jsx)("font",{color:"red",children:"\u5c0f\u7ed3\uff1a"}),"\n",(0,i.jsxs)(e.p,{children:["\u6dfb\u52a0 ",(0,i.jsx)(e.code,{children:"volatile"})," \u5173\u952e\u5b57\u4e4b\u540e\u7684\u53cc\u91cd\u68c0\u67e5\u9501\u6a21\u5f0f\u662f\u4e00\u79cd\u6bd4\u8f83\u597d\u7684\u5355\u4f8b\u5b9e\u73b0\u6a21\u5f0f\uff0c\u80fd\u591f\u4fdd\u8bc1\u5728\u591a\u7ebf\u7a0b\u7684\u60c5\u51b5\u4e0b\u7ebf\u7a0b\u5b89\u5168\u4e5f\u4e0d\u4f1a\u6709\u6027\u80fd\u95ee\u9898\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u61d2\u6c49\u5f0f-\u65b9\u5f0f4\uff08\u9759\u6001\u5185\u90e8\u7c7b\u65b9\u5f0f\uff09"}),"\n",(0,i.jsxs)(e.p,{children:["\u9759\u6001\u5185\u90e8\u7c7b\u5355\u4f8b\u6a21\u5f0f\u4e2d\u5b9e\u4f8b\u7531\u5185\u90e8\u7c7b\u521b\u5efa\uff0c\u7531\u4e8e JVM \u5728\u52a0\u8f7d\u5916\u90e8\u7c7b\u7684\u8fc7\u7a0b\u4e2d, \u662f\u4e0d\u4f1a\u52a0\u8f7d\u9759\u6001\u5185\u90e8\u7c7b\u7684, \u53ea\u6709\u5185\u90e8\u7c7b\u7684\u5c5e\u6027/\u65b9\u6cd5\u88ab\u8c03\u7528\u65f6\u624d\u4f1a\u88ab\u52a0\u8f7d, \u5e76\u521d\u59cb\u5316\u5176\u9759\u6001\u5c5e\u6027\u3002\u9759\u6001\u5c5e\u6027\u7531\u4e8e\u88ab ",(0,i.jsx)(e.code,{children:"static"})," \u4fee\u9970\uff0c\u4fdd\u8bc1\u53ea\u88ab\u5b9e\u4f8b\u5316\u4e00\u6b21\uff0c\u5e76\u4e14\u4e25\u683c\u4fdd\u8bc1\u5b9e\u4f8b\u5316\u987a\u5e8f\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"/**\n * \u9759\u6001\u5185\u90e8\u7c7b\u65b9\u5f0f\n */\npublic class Singleton {\n\n    //\u79c1\u6709\u6784\u9020\u65b9\u6cd5\n    private Singleton() {}\n\n    private static class SingletonHolder {\n        private static final Singleton INSTANCE = new Singleton();\n    }\n\n    //\u5bf9\u5916\u63d0\u4f9b\u9759\u6001\u65b9\u6cd5\u83b7\u53d6\u8be5\u5bf9\u8c61\n    public static Singleton getInstance() {\n        return SingletonHolder.INSTANCE;\n    }\n}\n"})}),"\n",(0,i.jsx)("font",{color:"red",children:"\u8bf4\u660e\uff1a"}),"\n",(0,i.jsx)(e.p,{children:"\u200b\t\u7b2c\u4e00\u6b21\u52a0\u8f7dSingleton\u7c7b\u65f6\u4e0d\u4f1a\u53bb\u521d\u59cb\u5316INSTANCE\uff0c\u53ea\u6709\u7b2c\u4e00\u6b21\u8c03\u7528getInstance\uff0c\u865a\u62df\u673a\u52a0\u8f7dSingletonHolder"}),"\n",(0,i.jsx)(e.p,{children:"\u5e76\u521d\u59cb\u5316INSTANCE\uff0c\u8fd9\u6837\u4e0d\u4ec5\u80fd\u786e\u4fdd\u7ebf\u7a0b\u5b89\u5168\uff0c\u4e5f\u80fd\u4fdd\u8bc1 Singleton \u7c7b\u7684\u552f\u4e00\u6027\u3002"}),"\n",(0,i.jsx)("font",{color:"red",children:"\u5c0f\u7ed3\uff1a"}),"\n",(0,i.jsx)(e.p,{children:"\u200b\t\u9759\u6001\u5185\u90e8\u7c7b\u5355\u4f8b\u6a21\u5f0f\u662f\u4e00\u79cd\u4f18\u79c0\u7684\u5355\u4f8b\u6a21\u5f0f\uff0c\u662f\u5f00\u6e90\u9879\u76ee\u4e2d\u6bd4\u8f83\u5e38\u7528\u7684\u4e00\u79cd\u5355\u4f8b\u6a21\u5f0f\u3002\u5728\u6ca1\u6709\u52a0\u4efb\u4f55\u9501\u7684\u60c5\u51b5\u4e0b\uff0c\u4fdd\u8bc1\u4e86\u591a\u7ebf\u7a0b\u4e0b\u7684\u5b89\u5168\uff0c\u5e76\u4e14\u6ca1\u6709\u4efb\u4f55\u6027\u80fd\u5f71\u54cd\u548c\u7a7a\u95f4\u7684\u6d6a\u8d39\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u679a\u4e3e\u65b9\u5f0f"}),"\n",(0,i.jsx)(e.p,{children:"\u679a\u4e3e\u7c7b\u5b9e\u73b0\u5355\u4f8b\u6a21\u5f0f\u662f\u6781\u529b\u63a8\u8350\u7684\u5355\u4f8b\u5b9e\u73b0\u6a21\u5f0f\uff0c\u56e0\u4e3a\u679a\u4e3e\u7c7b\u578b\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\uff0c\u5e76\u4e14\u53ea\u4f1a\u88c5\u8f7d\u4e00\u6b21\uff0c\u8bbe\u8ba1\u8005\u5145\u5206\u7684\u5229\u7528\u4e86\u679a\u4e3e\u7684\u8fd9\u4e2a\u7279\u6027\u6765\u5b9e\u73b0\u5355\u4f8b\u6a21\u5f0f\uff0c\u679a\u4e3e\u7684\u5199\u6cd5\u975e\u5e38\u7b80\u5355\uff0c\u800c\u4e14\u679a\u4e3e\u7c7b\u578b\u662f\u6240\u7528\u5355\u4f8b\u5b9e\u73b0\u4e2d\u552f\u4e00\u4e00\u79cd\u4e0d\u4f1a\u88ab\u7834\u574f\u7684\u5355\u4f8b\u5b9e\u73b0\u6a21\u5f0f\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"/**\n * \u679a\u4e3e\u65b9\u5f0f\n */\npublic enum Singleton {\n    INSTANCE;\n}\n"})}),"\n",(0,i.jsx)("font",{color:"red",children:"\u8bf4\u660e\uff1a"}),"\n",(0,i.jsx)(e.p,{children:"\u200b\t\u679a\u4e3e\u65b9\u5f0f\u5c5e\u4e8e\u6076\u6c49\u5f0f\u65b9\u5f0f\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u5b58\u5728\u7684\u95ee\u9898",children:"\u5b58\u5728\u7684\u95ee\u9898"}),"\n",(0,i.jsx)(e.h4,{id:"\u95ee\u9898\u6f14\u793a",children:"\u95ee\u9898\u6f14\u793a"}),"\n",(0,i.jsx)(e.p,{children:"\u7834\u574f\u5355\u4f8b\u6a21\u5f0f\uff1a"}),"\n",(0,i.jsx)(e.p,{children:"\u4f7f\u4e0a\u9762\u5b9a\u4e49\u7684\u5355\u4f8b\u7c7b\uff08Singleton\uff09\u53ef\u4ee5\u521b\u5efa\u591a\u4e2a\u5bf9\u8c61\uff0c\u679a\u4e3e\u65b9\u5f0f\u9664\u5916\u3002\u6709\u4e24\u79cd\u65b9\u5f0f\uff0c\u5206\u522b\u662f\u5e8f\u5217\u5316\u548c\u53cd\u5c04\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5e8f\u5217\u5316\u53cd\u5e8f\u5217\u5316"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Singleton\u7c7b\uff1a"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"public class Singleton implements Serializable {\n\n    //\u79c1\u6709\u6784\u9020\u65b9\u6cd5\n    private Singleton() {}\n\n    private static class SingletonHolder {\n        private static final Singleton INSTANCE = new Singleton();\n    }\n\n    //\u5bf9\u5916\u63d0\u4f9b\u9759\u6001\u65b9\u6cd5\u83b7\u53d6\u8be5\u5bf9\u8c61\n    public static Singleton getInstance() {\n        return SingletonHolder.INSTANCE;\n    }\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Test\u7c7b\uff1a"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'public class Test {\n    public static void main(String[] args) throws Exception {\n        //\u5f80\u6587\u4ef6\u4e2d\u5199\u5bf9\u8c61\n        //writeObject2File();\n        //\u4ece\u6587\u4ef6\u4e2d\u8bfb\u53d6\u5bf9\u8c61\n        Singleton s1 = readObjectFromFile();\n        Singleton s2 = readObjectFromFile();\n\n        //\u5224\u65ad\u4e24\u4e2a\u53cd\u5e8f\u5217\u5316\u540e\u7684\u5bf9\u8c61\u662f\u5426\u662f\u540c\u4e00\u4e2a\u5bf9\u8c61\n        System.out.println(s1 == s2);\n    }\n\n    private static Singleton readObjectFromFile() throws Exception {\n        //\u521b\u5efa\u5bf9\u8c61\u8f93\u5165\u6d41\u5bf9\u8c61\n        ObjectInputStream ois = new ObjectInputStream(new FileInputStream("C:\\\\Users\\\\Think\\\\Desktop\\\\a.txt"));\n        //\u7b2c\u4e00\u4e2a\u8bfb\u53d6Singleton\u5bf9\u8c61\n        Singleton instance = (Singleton) ois.readObject();\n\n        return instance;\n    }\n\n    public static void writeObject2File() throws Exception {\n        //\u83b7\u53d6Singleton\u7c7b\u7684\u5bf9\u8c61\n        Singleton instance = Singleton.getInstance();\n        //\u521b\u5efa\u5bf9\u8c61\u8f93\u51fa\u6d41\n        ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("C:\\\\Users\\\\Think\\\\Desktop\\\\a.txt"));\n        //\u5c06instance\u5bf9\u8c61\u5199\u51fa\u5230\u6587\u4ef6\u4e2d\n        oos.writeObject(instance);\n    }\n}\n'})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u4e0a\u9762\u4ee3\u7801\u8fd0\u884c\u7ed3\u679c\u662f",(0,i.jsx)(e.code,{children:"false"}),"\uff0c\u8868\u660e\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316\u5df2\u7ecf\u7834\u574f\u4e86\u5355\u4f8b\u8bbe\u8ba1\u6a21\u5f0f\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u53cd\u5c04"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Singleton\u7c7b\uff1a"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"public class Singleton {\n\n    //\u79c1\u6709\u6784\u9020\u65b9\u6cd5\n    private Singleton() {}\n    \n    private static volatile Singleton instance;\n\n    //\u5bf9\u5916\u63d0\u4f9b\u9759\u6001\u65b9\u6cd5\u83b7\u53d6\u8be5\u5bf9\u8c61\n    public static Singleton getInstance() {\n\n        if(instance != null) {\n            return instance;\n        }\n\n        synchronized (Singleton.class) {\n            if(instance != null) {\n                return instance;\n            }\n            instance = new Singleton();\n            return instance;\n        }\n    }\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Test\u7c7b\uff1a"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"public class Test {\n    public static void main(String[] args) throws Exception {\n        //\u83b7\u53d6Singleton\u7c7b\u7684\u5b57\u8282\u7801\u5bf9\u8c61\n        Class clazz = Singleton.class;\n        //\u83b7\u53d6Singleton\u7c7b\u7684\u79c1\u6709\u65e0\u53c2\u6784\u9020\u65b9\u6cd5\u5bf9\u8c61\n        Constructor constructor = clazz.getDeclaredConstructor();\n        //\u53d6\u6d88\u8bbf\u95ee\u68c0\u67e5\n        constructor.setAccessible(true);\n\n        //\u521b\u5efaSingleton\u7c7b\u7684\u5bf9\u8c61s1\n        Singleton s1 = (Singleton) constructor.newInstance();\n        //\u521b\u5efaSingleton\u7c7b\u7684\u5bf9\u8c61s2\n        Singleton s2 = (Singleton) constructor.newInstance();\n\n        //\u5224\u65ad\u901a\u8fc7\u53cd\u5c04\u521b\u5efa\u7684\u4e24\u4e2aSingleton\u5bf9\u8c61\u662f\u5426\u662f\u540c\u4e00\u4e2a\u5bf9\u8c61\n        System.out.println(s1 == s2);\n    }\n}\n"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u4e0a\u9762\u4ee3\u7801\u8fd0\u884c\u7ed3\u679c\u662f",(0,i.jsx)(e.code,{children:"false"}),"\uff0c\u8868\u660e\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316\u5df2\u7ecf\u7834\u574f\u4e86\u5355\u4f8b\u8bbe\u8ba1\u6a21\u5f0f"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)("font",{color:"red",children:"\u6ce8\u610f\uff1a"}),"\u679a\u4e3e\u65b9\u5f0f\u4e0d\u4f1a\u51fa\u73b0\u8fd9\u4e24\u4e2a\u95ee\u9898\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"\u95ee\u9898\u7684\u89e3\u51b3",children:"\u95ee\u9898\u7684\u89e3\u51b3"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5e8f\u5217\u5316\u3001\u53cd\u5e8f\u5217\u65b9\u5f0f\u7834\u574f\u5355\u4f8b\u6a21\u5f0f\u7684\u89e3\u51b3\u65b9\u6cd5"}),"\n",(0,i.jsxs)(e.p,{children:["\u5728Singleton\u7c7b\u4e2d\u6dfb\u52a0",(0,i.jsx)(e.code,{children:"readResolve()"}),"\u65b9\u6cd5\uff0c\u5728\u53cd\u5e8f\u5217\u5316\u65f6\u88ab\u53cd\u5c04\u8c03\u7528\uff0c\u5982\u679c\u5b9a\u4e49\u4e86\u8fd9\u4e2a\u65b9\u6cd5\uff0c\u5c31\u8fd4\u56de\u8fd9\u4e2a\u65b9\u6cd5\u7684\u503c\uff0c\u5982\u679c\u6ca1\u6709\u5b9a\u4e49\uff0c\u5219\u8fd4\u56de\u65b0new\u51fa\u6765\u7684\u5bf9\u8c61\u3002"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Singleton\u7c7b\uff1a"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"public class Singleton implements Serializable {\n\n    //\u79c1\u6709\u6784\u9020\u65b9\u6cd5\n    private Singleton() {}\n\n    private static class SingletonHolder {\n        private static final Singleton INSTANCE = new Singleton();\n    }\n\n    //\u5bf9\u5916\u63d0\u4f9b\u9759\u6001\u65b9\u6cd5\u83b7\u53d6\u8be5\u5bf9\u8c61\n    public static Singleton getInstance() {\n        return SingletonHolder.INSTANCE;\n    }\n    \n    /**\n     * \u4e0b\u9762\u662f\u4e3a\u4e86\u89e3\u51b3\u5e8f\u5217\u5316\u53cd\u5e8f\u5217\u5316\u7834\u89e3\u5355\u4f8b\u6a21\u5f0f\n     */\n    private Object readResolve() {\n        return SingletonHolder.INSTANCE;\n    }\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u6e90\u7801\u89e3\u6790\uff1a"})}),"\n",(0,i.jsx)(e.p,{children:"ObjectInputStream\u7c7b"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"public final Object readObject() throws IOException, ClassNotFoundException{\n    ...\n    // if nested read, passHandle contains handle of enclosing object\n    int outerHandle = passHandle;\n    try {\n        Object obj = readObject0(false);//\u91cd\u70b9\u67e5\u770breadObject0\u65b9\u6cd5\n    .....\n}\n    \nprivate Object readObject0(boolean unshared) throws IOException {\n\t...\n    try {\n\t\tswitch (tc) {\n\t\t\t...\n\t\t\tcase TC_OBJECT:\n\t\t\t\treturn checkResolve(readOrdinaryObject(unshared));//\u91cd\u70b9\u67e5\u770breadOrdinaryObject\u65b9\u6cd5\n\t\t\t...\n        }\n    } finally {\n        depth--;\n        bin.setBlockDataMode(oldMode);\n    }    \n}\n    \nprivate Object readOrdinaryObject(boolean unshared) throws IOException {\n\t...\n\t//isInstantiable \u8fd4\u56detrue\uff0c\u6267\u884c desc.newInstance()\uff0c\u901a\u8fc7\u53cd\u5c04\u521b\u5efa\u65b0\u7684\u5355\u4f8b\u7c7b\uff0c\n    obj = desc.isInstantiable() ? desc.newInstance() : null; \n    ...\n    // \u5728Singleton\u7c7b\u4e2d\u6dfb\u52a0 readResolve \u65b9\u6cd5\u540e desc.hasReadResolveMethod() \u65b9\u6cd5\u6267\u884c\u7ed3\u679c\u4e3atrue\n    if (obj != null && handles.lookupException(passHandle) == null && desc.hasReadResolveMethod()) {\n    \t// \u901a\u8fc7\u53cd\u5c04\u8c03\u7528 Singleton \u7c7b\u4e2d\u7684 readResolve \u65b9\u6cd5\uff0c\u5c06\u8fd4\u56de\u503c\u8d4b\u503c\u7ed9rep\u53d8\u91cf\n    \t// \u8fd9\u6837\u591a\u6b21\u8c03\u7528ObjectInputStream\u7c7b\u4e2d\u7684readObject\u65b9\u6cd5\uff0c\u7ee7\u800c\u5c31\u4f1a\u8c03\u7528\u6211\u4eec\u5b9a\u4e49\u7684readResolve\u65b9\u6cd5\uff0c\u6240\u4ee5\u8fd4\u56de\u7684\u662f\u540c\u4e00\u4e2a\u5bf9\u8c61\u3002\n    \tObject rep = desc.invokeReadResolve(obj);\n     \t...\n    }\n    return obj;\n}\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u53cd\u5c04\u65b9\u5f0f\u7834\u89e3\u5355\u4f8b\u7684\u89e3\u51b3\u65b9\u6cd5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"public class Singleton {\n\n    //\u79c1\u6709\u6784\u9020\u65b9\u6cd5\n    private Singleton() {\n        /*\n           \u53cd\u5c04\u7834\u89e3\u5355\u4f8b\u6a21\u5f0f\u9700\u8981\u6dfb\u52a0\u7684\u4ee3\u7801\n        */\n        if(instance != null) {\n            throw new RuntimeException();\n        }\n    }\n    \n    private static volatile Singleton instance;\n\n    //\u5bf9\u5916\u63d0\u4f9b\u9759\u6001\u65b9\u6cd5\u83b7\u53d6\u8be5\u5bf9\u8c61\n    public static Singleton getInstance() {\n\n        if(instance != null) {\n            return instance;\n        }\n\n        synchronized (Singleton.class) {\n            if(instance != null) {\n                return instance;\n            }\n            instance = new Singleton();\n            return instance;\n        }\n    }\n}\n"})}),"\n",(0,i.jsx)("font",{color:"red",children:"\u8bf4\u660e:"}),"\n",(0,i.jsx)(e.p,{children:"\u200b\t\u8fd9\u79cd\u65b9\u5f0f\u6bd4\u8f83\u597d\u7406\u89e3\u3002\u5f53\u901a\u8fc7\u53cd\u5c04\u65b9\u5f0f\u8c03\u7528\u6784\u9020\u65b9\u6cd5\u8fdb\u884c\u521b\u5efa\u521b\u5efa\u65f6\uff0c\u76f4\u63a5\u629b\u5f02\u5e38\u3002\u4e0d\u8fd0\u884c\u6b64\u4e2d\u64cd\u4f5c\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"jdk\u6e90\u7801\u89e3\u6790-runtime\u7c7b",children:"JDK\u6e90\u7801\u89e3\u6790-Runtime\u7c7b"}),"\n",(0,i.jsx)(e.p,{children:"Runtime\u7c7b\u5c31\u662f\u4f7f\u7528\u7684\u5355\u4f8b\u8bbe\u8ba1\u6a21\u5f0f\u3002"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u901a\u8fc7\u6e90\u4ee3\u7801\u67e5\u770b\u4f7f\u7528\u7684\u662f\u54ea\u513f\u79cd\u5355\u4f8b\u6a21\u5f0f"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"public class Runtime {\n    private static Runtime currentRuntime = new Runtime();\n\n    /**\n     * Returns the runtime object associated with the current Java application.\n     * Most of the methods of class <code>Runtime</code> are instance\n     * methods and must be invoked with respect to the current runtime object.\n     *\n     * @return  the <code>Runtime</code> object associated with the current\n     *          Java application.\n     */\n    public static Runtime getRuntime() {\n        return currentRuntime;\n    }\n\n    /** Don't let anyone else instantiate this class */\n    private Runtime() {}\n    ...\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u4ece\u4e0a\u9762\u6e90\u4ee3\u7801\u4e2d\u53ef\u4ee5\u770b\u51faRuntime\u7c7b\u4f7f\u7528\u7684\u662f\u6076\u6c49\u5f0f\uff08\u9759\u6001\u5c5e\u6027\uff09\u65b9\u5f0f\u6765\u5b9e\u73b0\u5355\u4f8b\u6a21\u5f0f\u7684\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u4f7f\u7528Runtime\u7c7b\u4e2d\u7684\u65b9\u6cd5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'public class RuntimeDemo {\n    public static void main(String[] args) throws IOException {\n        //\u83b7\u53d6Runtime\u7c7b\u5bf9\u8c61\n        Runtime runtime = Runtime.getRuntime();\n\n        //\u8fd4\u56de Java \u865a\u62df\u673a\u4e2d\u7684\u5185\u5b58\u603b\u91cf\u3002\n        System.out.println(runtime.totalMemory());\n        //\u8fd4\u56de Java \u865a\u62df\u673a\u8bd5\u56fe\u4f7f\u7528\u7684\u6700\u5927\u5185\u5b58\u91cf\u3002\n        System.out.println(runtime.maxMemory());\n\n        //\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u8fdb\u7a0b\u6267\u884c\u6307\u5b9a\u7684\u5b57\u7b26\u4e32\u547d\u4ee4\uff0c\u8fd4\u56de\u8fdb\u7a0b\u5bf9\u8c61\n        Process process = runtime.exec("ipconfig");\n        //\u83b7\u53d6\u547d\u4ee4\u6267\u884c\u540e\u7684\u7ed3\u679c\uff0c\u901a\u8fc7\u8f93\u5165\u6d41\u83b7\u53d6\n        InputStream inputStream = process.getInputStream();\n        byte[] arr = new byte[1024 * 1024* 100];\n        int b = inputStream.read(arr);\n        System.out.println(new String(arr,0,b,"gbk"));\n    }\n}\n'})}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>r});var i=t(96540);const s={},l=i.createContext(s);function c(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);