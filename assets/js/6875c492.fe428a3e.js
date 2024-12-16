"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4813],{62283:(e,n,t)=>{t.d(n,{A:()=>u});var a=t(96540),o=t(34164),s=t(23230),r=t(18630),i=t(24245),l=t(54067);const c={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var d=t(74848);function u(){var e=function(e){var n=e.threshold,t=(0,a.useState)(!1),o=t[0],s=t[1],r=(0,a.useRef)(!1),c=(0,i.gk)(),d=c.startScroll,u=c.cancelScroll;return(0,i.Mq)((function(e,t){var a=e.scrollY,o=null==t?void 0:t.scrollY;o&&(r.current?r.current=!1:a>=o?(u(),s(!1)):a<n?s(!1):a+window.innerHeight<document.documentElement.scrollHeight&&s(!0))})),(0,l.$)((function(e){e.location.hash&&(r.current=!0,s(!1))})),{shown:o,scrollToTop:function(){return d(0)}}}({threshold:300}),n=e.shown,t=e.scrollToTop;return(0,d.jsx)("button",{"aria-label":(0,s.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.A)("clean-btn",r.G.common.backToTopButton,c.backToTopButton,n&&c.backToTopButtonShow),type:"button",onClick:t})}},84934:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var a=t(23230),o=t(63753),s=t(74848);function r(e){var n=e.metadata,t=n.previousPage,r=n.nextPage;return(0,s.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[t&&(0,s.jsx)(o.A,{permalink:t,title:(0,s.jsx)(a.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,s.jsx)(o.A,{permalink:r,title:(0,s.jsx)(a.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},36057:(e,n,t)=>{t.d(n,{A:()=>m});t(96540);var a=t(34164),o=t(23230),s=t(21141),r=t(74848);function i(){return(0,r.jsx)(o.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,r.jsx)(o.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(s.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(18630),u=t(54182);function g(e){var n=e.className;return(0,r.jsx)(u.A,{type:"caution",title:(0,r.jsx)(i,{}),className:(0,a.A)(n,d.G.common.unlistedBanner),children:(0,r.jsx)(l,{})})}function m(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(g,Object.assign({},e))]})}},38322:(e,n,t)=>{t.d(n,{e:()=>l,i:()=>i});var a=t(96540),o=t(42439),s=t(74848),r=a.createContext(null);function i(e){var n=e.children,t=e.content,o=e.isBlogPostPage,i=function(e){var n=e.content,t=e.isBlogPostPage;return(0,a.useMemo)((function(){return{metadata:n.metadata,frontMatter:n.frontMatter,assets:n.assets,toc:n.toc,isBlogPostPage:t}}),[n,t])}({content:t,isBlogPostPage:void 0!==o&&o});return(0,s.jsx)(r.Provider,{value:i,children:n})}function l(){var e=(0,a.useContext)(r);if(null===e)throw new o.dV("BlogPostProvider");return e}},49191:(e,n,t)=>{t.d(n,{i:()=>o});var a=t(97639);function o(e){void 0===e&&(e={});var n=(0,a.A)().i18n.currentLocale,t=function(){var e=(0,a.A)().i18n,n=e.currentLocale;return e.localeConfigs[n].calendar}();return new Intl.DateTimeFormat(n,Object.assign({calendar:t},e))}},57824:(e,n,t)=>{t.d(n,{W:()=>c});var a=t(96540),o=t(97639),s=["zero","one","two","few","many","other"];function r(e){return s.filter((function(n){return e.includes(n)}))}var i={locale:"en",pluralForms:r(["one","other"]),select:function(e){return 1===e?"one":"other"}};function l(){var e=(0,o.A)().i18n.currentLocale;return(0,a.useMemo)((function(){try{return n=e,t=new Intl.PluralRules(n),{locale:n,pluralForms:r(t.resolvedOptions().pluralCategories),select:function(e){return t.select(e)}}}catch(a){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+a.message+"\n"),i}var n,t}),[e])}function c(){var e=l();return{selectMessage:function(n,t){return function(e,n,t){var a=e.split("|");if(1===a.length)return a[0];a.length>t.pluralForms.length&&console.error("For locale="+t.locale+", a maximum of "+t.pluralForms.length+" plural forms are expected ("+t.pluralForms.join(",")+"), but the message contains "+a.length+": "+e);var o=t.select(n),s=t.pluralForms.indexOf(o);return a[Math.min(s,a.length-1)]}(t,n,e)}}}},74105:(e,n,t)=>{t.d(n,{A:()=>_});var a=t(38322),o=t(20583),s=t(98180),r=t(74848);function i(e){var n,t=e.children,i=e.className,l=(0,a.e)(),c=l.frontMatter,d=l.assets,u=(0,s.hH)().withBaseUrl,g=null!=(n=d.image)?n:c.image;return(0,r.jsxs)("article",{className:(0,o.cn)("relative px-4 pt-4 pb-3 lg:px-4",i),itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting",children:[g&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{itemProp:"image",content:u(g,{absolute:!0})}),(0,r.jsx)("div",{className:"absolute inset-0 z-1 h-[224px]",children:(0,r.jsx)("div",{className:"size-full rounded-[var(--ifm-pagination-nav-border-radius)] bg-center bg-cover bg-no-repeat",style:{WebkitMaskImage:"linear-gradient(180deg, #fff -17.19%, #00000000 92.43%)",maskImage:"linear-gradient(180deg, #fff -17.19%, #00000000 92.43%)",backgroundImage:'url("'+g+'")'}})}),(0,r.jsx)("div",{style:{height:"120px"}})]}),t]})}var l=t(64609),c=t(9093);function d(e){var n=e.children,t=e.className,s=(0,a.e)().isBlogPostPage;return(0,r.jsx)("div",{id:s?l.blogPostContainerID:void 0,className:(0,o.cn)("markdown",t),itemProp:"articleBody",style:{position:"relative"},children:(0,r.jsx)(c.A,{children:n})})}var u=t(49191),g=t(37399),m=t(98587),p=t(14783),h=t(23230),x=(t(96540),["blogPostTitle"]);function b(){return(0,r.jsx)("b",{children:(0,r.jsx)(h.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function f(e){var n=e.blogPostTitle,t=(0,m.A)(e,x);return(0,r.jsxs)(p.A,Object.assign({"aria-label":(0,h.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:n}),style:{display:"flex",alignItems:"center",gap:"0.25rem"}},t,{children:[(0,r.jsx)(b,{}),(0,r.jsx)(g.In,{icon:"ri:arrow-right-line"})]}))}var j=t(75144),v=t(57824);function k(e){var n,t=e.readingTime,a=(n=(0,v.W)().selectMessage,function(e){var t=Math.ceil(e);return n(t,(0,h.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))});return(0,r.jsx)("span",{className:"truncate",children:a(t)})}function T(e){var n=e.date,t=e.formattedDate;return(0,r.jsx)("time",{dateTime:n,itemProp:"datePublished",className:"truncate",children:t})}function N(e){var n,t=e.className,s=(0,a.e)().metadata,i=s.date,l=s.tags,c=s.readingTime,d=l.length>0,m=(0,u.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,o.cn)("inline-flex flex-wrap gap-1.5 text-base","margin-bottom--md",t),children:[(0,r.jsxs)("div",{className:"inline-flex items-center gap-1",children:[(0,r.jsx)(g.In,{icon:"ri:calendar-line"}),(0,r.jsx)(T,{date:i,formattedDate:(n=i,m.format(new Date(n)))})]}),d&&(0,r.jsxs)("div",{className:"inline-flex items-center gap-1",children:[(0,r.jsx)(g.In,{icon:"ri:price-tag-3-line"}),(0,r.jsx)("div",{className:(0,o.cn)("truncate","inline-flex text-center"),children:l.slice(0,3).map((function(e,n){var t=e.label,a=e.permalink;return(0,r.jsxs)("div",{children:[0!==n&&"/",(0,r.jsx)(j.A,{label:t,permalink:a,className:"tag !border-0 px-0.5 py-0.5 text-text hover:text-link"})]},a)}))})]}),void 0!==c&&(0,r.jsxs)("div",{className:"inline-flex items-center gap-1",children:[(0,r.jsx)(g.In,{icon:"ri:time-line"}),(0,r.jsx)(k,{readingTime:c})]})]})}const A={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_Wr5y",blogPostInfo:"blogPostInfo_k7sy",blogPostInfoTags:"blogPostInfoTags_W9UY",blogPostAuthor:"blogPostAuthor_OLeU",blogPostDetailsFull:"blogPostDetailsFull_rPUK",divider:"divider_nSib"};function P(){var e,n=(0,a.e)(),t=n.metadata,s=n.isBlogPostPage,i=t.tags,l=t.title,c=(t.editUrl,t.hasTruncateMarker),d=t.date,m=t.readingTime,p=t.authors,h=(0,u.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}),x=!s&&c,b=i.length>0;p.length;return s?(0,r.jsx)("footer",{className:(0,o.cn)("row docusaurus-mt-lg",s&&A.blogPostFooterDetailsFull),children:x&&(0,r.jsx)("div",{className:(0,o.cn)("col text--right",{"col--3":b}),children:(0,r.jsx)(f,{blogPostTitle:l,to:t.permalink})})}):(0,r.jsx)("div",{style:{position:"relative",zIndex:2},children:(0,r.jsxs)("div",{className:A.blogPostInfo,children:[d&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.In,{icon:"ri:calendar-line"}),(0,r.jsx)("time",{dateTime:d,itemProp:"datePublished",children:(e=d,h.format(new Date(e)))})]}),b&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.In,{icon:"ri:price-tag-3-line"}),(0,r.jsx)("span",{className:A.blogPostInfoTags,children:i.map((function(e){var n=e.label,t=e.permalink;return(0,r.jsx)(j.A,{label:n,permalink:t},t)}))})]}),m&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.In,{icon:"ri:time-line"}),(0,r.jsx)("span",{className:(0,o.cn)(A.blogPostReadTime,"blog__readingTime"),children:(0,r.jsx)(k,{readingTime:m})})]}),x&&(0,r.jsx)("div",{className:(0,o.cn)("flex flex-1 items-center justify-end gap-0.5 font-medium text-[var(--ifm-link-color)] opacity-0 transition-opacity duration-200 group-hover/blog:opacity-100",{"col--3":b}),children:(0,r.jsx)(f,{blogPostTitle:l,to:t.permalink,className:"hover:no-underline"})})]})})}const B={titleLink:"titleLink_BX2g"};function y(e){var n=e.className,t=(0,a.e)(),s=t.metadata,i=t.isBlogPostPage,l=s.permalink,c=s.title,d=i?"h1":"h2";return(0,r.jsx)(d,{className:(0,o.cn)(B.title,n),itemProp:"headline",children:i?c:(0,r.jsx)(p.A,{itemProp:"url",to:l,className:B.titleLink,children:c})})}function w(){var e=(0,a.e)().isBlogPostPage;return(0,r.jsxs)("header",{style:{position:"relative",zIndex:2},children:[(0,r.jsx)(y,{}),e&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(N,{})})]})}function _(e){var n=e.children,t=e.className,s=(0,a.e)().isBlogPostPage?"":"group/blog rounded-md mt-0 bg-blog mb-8 shadow-blog";return(0,r.jsxs)(i,{className:(0,o.cn)(s,t),children:[(0,r.jsx)(w,{}),(0,r.jsx)(d,{children:n}),(0,r.jsx)(P,{})]})}},50181:(e,n,t)=>{t.d(n,{A:()=>l});var a=t(38322),o=t(74105),s=t(82863),r=t(74848),i={from:{opacity:.001,y:100},to:function(e){return{opacity:1,y:0,transition:{type:"spring",damping:25,stiffness:100,bounce:.2,duration:.3,delay:.2*e}}}};function l(e){var n=e.items,t=e.component,l=void 0===t?o.A:t;return(0,r.jsx)(r.Fragment,{children:n.map((function(e,n){var t=e.content;return(0,r.jsx)(a.i,{content:t,children:(0,r.jsx)(s.P.div,{initial:"from",animate:"to",custom:n,viewport:{once:!0,amount:.8},variants:i,children:(0,r.jsx)(l,{children:(0,r.jsx)(t,{})})})},t.metadata.permalink)}))})}},32982:(e,n,t)=>{t.r(n),t.d(n,{default:()=>v});var a=t(14783),o=t(23230),s=t(57824),r=t(94239),i=t(18630),l=t(20583),c=t(62283),d=t(84934),u=t(50181),g=t(85225),m=t(51210),p=t(36057),h=t(54465),x=t(74848);function b(e){var n,t=(n=(0,s.W)().selectMessage,function(e){return n(e,(0,o.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))});return(0,o.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function f(e){var n=b(e.tag);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(r.be,{title:n}),(0,x.jsx)(m.A,{tag:"blog_tags_posts"})]})}function j(e){var n=e.tag,t=e.items,s=(e.sidebar,e.listMetadata),r=b(n);return(0,x.jsxs)(h.A,{children:[n.unlisted&&(0,x.jsx)(p.A,{}),(0,x.jsxs)("header",{className:(0,l.cn)("mb-4"),children:[(0,x.jsx)(g.A,{as:"h1",children:r}),(0,x.jsx)(a.A,{href:n.allTagsPath,children:(0,x.jsx)(o.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,x.jsx)(u.A,{items:t}),(0,x.jsx)(d.A,{metadata:s}),(0,x.jsx)(c.A,{})]})}function v(e){return(0,x.jsxs)(r.e3,{className:(0,l.cn)(i.G.wrapper.blogPages,i.G.page.blogTagPostListPage),children:[(0,x.jsx)(f,Object.assign({},e)),(0,x.jsx)(j,Object.assign({},e))]})}},5311:(e,n,t)=>{t.d(n,{A:()=>O});var a=t(98587),o=t(11062),s=t(20583),r=t(84631),i=t(18630),l=t(49292),c=t(96540);const d={codeBlockContainer:"codeBlockContainer_APcc"};var u=t(74848),g=["as"];function m(e){var n=e.as,t=(0,a.A)(e,g),o=(0,r.A)(),c=(0,l.M$)(o);return(0,u.jsx)(n,Object.assign({},t,{style:c,className:(0,s.cn)(t.className,d.codeBlockContainer,i.G.common.codeBlock)}))}const p={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"};function h(e){var n=e.children,t=e.className;return(0,u.jsx)(m,{as:"pre",tabIndex:0,className:(0,s.cn)(p.codeBlockStandalone,"thin-scrollbar",t),children:(0,u.jsx)("code",{className:p.codeBlockLines,children:n})})}var x=t(3909),b=t(86957),f=t(16419),j=t(37399),v=t(23230),k=t(62578),T=t(52030),N=t(76316);const A={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function P(e){var n=e.code,t=e.className,a=(0,c.useState)(!1),o=a[0],r=a[1],i=(0,c.useRef)(void 0),l=(0,c.useCallback)((function(){(0,N.A)(n),r(!0),i.current=window.setTimeout((function(){r(!1)}),1e3)}),[n]);return(0,c.useEffect)((function(){return function(){return window.clearTimeout(i.current)}}),[]),(0,u.jsx)("button",{type:"button","aria-label":o?(0,v.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,v.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,v.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.cn)("clean-btn",t,A.copyButton,o&&A.copyButtonCopied),onClick:l,children:(0,u.jsxs)("span",{className:A.copyButtonIcons,"aria-hidden":"true",children:[(0,u.jsx)(k.A,{className:A.copyButtonIcon}),(0,u.jsx)(T.A,{className:A.copyButtonSuccessIcon})]})})}const B={codeLine:"codeLine_iPqp",codeLineNumber:"codeLineNumber_F4P7",codeLineContent:"codeLineContent_pOih"};function y(e){var n,t=e.line,a=e.classNames,o=e.showLineNumbers,r=e.getLineProps,i=e.getTokenProps;1===t.length&&"\n"===(null==(n=t[0])?void 0:n.content)&&(t[0].content="");var l=r({line:t,className:(0,s.cn)(a,o&&B.codeLine)}),c=t.map((function(e,n){return(0,u.jsx)("span",Object.assign({},i({token:e,key:n})),n)}));return(0,u.jsxs)("span",Object.assign({},l,{children:[o?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("span",{className:B.codeLineNumber}),(0,u.jsx)("span",{className:B.codeLineContent,children:c})]}):c,(0,u.jsx)("br",{})]}))}var w=t(58119);const _={wordWrapButtonIcon:"wordWrapButtonIcon_iowe",wordWrapButtonEnabled:"wordWrapButtonEnabled_gY8A"};function C(e){var n=e.className,t=e.onClick,a=e.isEnabled,o=(0,v.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,u.jsx)("button",{type:"button",onClick:t,className:(0,s.cn)("clean-btn",n,a&&_.wordWrapButtonEnabled),"aria-label":o,title:o,children:(0,u.jsx)(w.A,{className:_.wordWrapButtonIcon,"aria-hidden":"true"})})}var I=t(71765);function L(e){var n,t=e.children,a=e.className,o=void 0===a?"":a,i=e.metastring,c=e.title,d=e.showLineNumbers,g=e.language,h=(0,b.p)().prism,v=h.defaultLanguage,k=h.magicComments,T=function(e){return null==e?void 0:e.toLowerCase()}(null!=(n=null!=g?g:(0,l.Op)(o))?n:v),N=(0,r.A)(),A=(0,f.f)(),B=(0,l.wt)(i)||c,w=function(e){var n,t,a=(0,x.A)(/icon=(["'])(.*?)\1/,{quote:1,icon:2}),o=null!=(n=null==e||null==(t=e.match(a))||null==(t=t.groups)?void 0:t.icon)?n:"";return o?(0,u.jsx)(j.In,{icon:o,width:"16"}):null}(i),_=(0,l.Li)(t,{metastring:i,language:T,magicComments:k}),L=_.lineClassNames,F=_.code,O=null!=d?d:(0,l._u)(i);return(0,u.jsxs)(m,{as:"div",className:(0,s.cn)(o,T&&!o.includes("language-"+T)&&"language-"+T),children:[B&&(0,u.jsxs)("div",{className:p.codeBlockTitle,children:[w,B,(0,u.jsx)("span",{style:{flex:1,textAlign:"right"},children:T})]}),(0,u.jsxs)("div",{className:p.codeBlockContent,children:[(0,u.jsx)(I.f4,{theme:N,code:F,language:null!=T?T:"text",children:function(e){var n=e.className,t=e.style,a=e.tokens,o=e.getLineProps,r=e.getTokenProps;return(0,u.jsx)("pre",{ref:A.codeBlockRef,className:(0,s.cn)(n,p.codeBlock,"thin-scrollbar"),style:t,children:(0,u.jsx)("code",{className:(0,s.cn)(p.codeBlockLines,O&&p.codeBlockLinesWithNumbering),children:a.map((function(e,n){return(0,u.jsx)(y,{line:e,getLineProps:o,getTokenProps:r,classNames:L[n],showLineNumbers:O},n)}))})})}}),(0,u.jsxs)("div",{className:p.buttonGroup,children:[(A.isEnabled||A.isCodeScrollable)&&(0,u.jsx)(C,{className:p.codeButton,onClick:function(){return A.toggle()},isEnabled:A.isEnabled}),(0,u.jsx)(P,{className:p.codeButton,code:F})]})]})]})}var F=["children"];function O(e){var n=e.children,t=(0,a.A)(e,F),s=(0,o.A)(),r=function(e){return c.Children.toArray(e).some((function(e){return(0,c.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(n),i="string"==typeof r?L:h;return(0,u.jsx)(i,Object.assign({},t,{children:r}),String(s))}},99315:(e,n,t)=>{t.d(n,{A:()=>r});var a=t(14783),o=(t(96540),t(37399)),s=t(74848);function r(e){var n=e.href;if(!n)return(0,s.jsx)(a.A,Object.assign({},e));var t={"github.com":"simple-icons:github","twitter.com":"logos:twitter"},r=Object.keys(t).find((function(e){return new RegExp("^https?://"+e).test(n)})),i=r?t[r]:null;return i?(0,s.jsxs)("span",{style:{display:"inline-flex",gap:"0.25rem"},children:[i&&(0,s.jsx)(o.In,{className:"a-icon",style:{alignSelf:"center"},icon:i,width:16,height:16}),(0,s.jsx)(a.A,Object.assign({},e))]}):(0,s.jsx)(a.A,Object.assign({},e))}},54465:(e,n,t)=>{t.d(n,{A:()=>c});var a=t(98587),o=t(94239),s=t(20583),r=t(42114),i=t(74848),l=["children","maxWidth"];function c(e){var n=e.children,t=e.maxWidth,c=(0,a.A)(e,l);return(0,i.jsxs)(r.A,Object.assign({},c,{children:[(0,i.jsx)(o.be,{title:c.title,description:c.description}),(0,i.jsx)("div",{className:"bg-background",children:(0,i.jsx)("div",{className:(0,s.cn)("mx-auto max-w-6xl px-4","margin-vert--lg"),style:t?{maxWidth:t+"px"}:{},children:(0,i.jsx)("main",{children:n})})})]}))}},63753:(e,n,t)=>{t.d(n,{A:()=>r});var a=t(14783),o=t(20583),s=t(74848);function r(e){var n=e.permalink,t=e.title,r=e.subLabel,i=e.isNext;return(0,s.jsxs)(a.A,{className:(0,o.cn)("pagination-nav__link border-2 border-link hover:bg-[#a1d8f71b]",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n,children:[r&&(0,s.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,s.jsx)("div",{className:"pagination-nav__label",children:t})]})}},75144:(e,n,t)=>{t.d(n,{A:()=>i});var a=t(14783),o=t(20583);t(96540);const s={tag:"tag_d0Lz",tagRegular:"tagRegular_bmnp",tagWithCount:"tagWithCount_vddX"};var r=t(74848);function i(e){var n=e.permalink,t=e.label,i=e.count,l=e.className;return(0,r.jsxs)(a.A,{href:n,className:(0,o.cn)(s.tag,i?s.tagWithCount:s.tagRegular,l),children:[t,i&&(0,r.jsx)("span",{children:i})]})}}}]);