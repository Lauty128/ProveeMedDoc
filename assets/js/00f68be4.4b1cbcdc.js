"use strict";(self.webpackChunkprovee_med_docs=self.webpackChunkprovee_med_docs||[]).push([[960],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=o,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:1,description:"Obtener datos sobre los equipos"},l=void 0,i={unversionedId:"API/Equipos",id:"API/Equipos",title:"Equipos",description:"Obtener datos sobre los equipos",source:"@site/docs/API/Equipos.md",sourceDirName:"API",slug:"/API/Equipos",permalink:"/ProveeMedDoc/docs/API/Equipos",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/API/Equipos.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Obtener datos sobre los equipos"},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/ProveeMedDoc/docs/category/api"},next:{title:"Proveedores",permalink:"/ProveeMedDoc/docs/API/Proveedores"}},s={},p=[{value:"/equipments",id:"equipments",level:2},{value:"Ejemplo de Uso",id:"ejemplo-de-uso",level:3},{value:"Respuesta",id:"respuesta",level:3},{value:"Notas",id:"notas",level:3},{value:"## /equipments/id",id:"-equipmentsid",level:2},{value:"Detalles de la Consulta",id:"detalles-de-la-consulta",level:3},{value:"Ejemplo de Uso",id:"ejemplo-de-uso-1",level:3},{value:"Respuesta",id:"respuesta-1",level:3},{value:"Notas",id:"notas-1",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"equipments"},"/equipments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Endpoint:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"/equipments")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"M\xe9todo:")," GET"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Par\xe1metros Opcionales:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"word")," (string, opcional): Filtra la lista de equipos para incluir solo aquellos que contengan la palabra o letras especificadas por el usuario (no distingue entre may\xfasculas, min\xfasculas y acentos)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"category")," (string, opcional): Filtra la lista de equipos para incluir solo aquellos que pertenezcan a una categor\xeda espec\xedfica. Se debe pasar el id de la categoria"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Descripci\xf3n:")," Obtiene una lista ascendente de todos los equipos m\xe9dicos disponibles junto con detalles sobre el nombre del equipo, su ID \xfanico, la categor\xeda a la que pertenece y el ID de esa categor\xeda.")),(0,o.kt)("h3",{id:"ejemplo-de-uso"},"Ejemplo de Uso"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},"GET https://domain/equipments\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "page":1,\n  "limit":20,\n  "total":152,\n  "hasPrevPage":false,\n  "hasNextPage":true,\n  "data":[\n    {\n        "equipmentID": 1,\n        "name": "Equipo 1",\n        "categoria_id": 8,\n        "category": "Categoria 8",\n        \n    },\n    {\n        "equipmentID": 2,\n        "name": "Equipo 2",\n        "categoria_id": 4,\n        "category": "Categoria 4"\n    },\n    {\n        "equipmentID": 3,\n        "name": "Equipo 3",\n        "categoria_id": 2,\n        "category": "Categoria 2"\n    },\n    ...\n  ]\n}\n')),(0,o.kt)("h3",{id:"respuesta"},"Respuesta"),(0,o.kt)("p",null,"La respuesta de este endpoint contendr\xe1 una lista de todos los equipos m\xe9dicos disponibles, ordenados en base a la categor\xeda correspondiente. Cada entrada en la lista proporcionar\xe1 detalles sobre un equipo en particular, incluyendo su nombre, ID \xfanico, la categor\xeda a la que pertenece y el ID de esa categor\xeda."),(0,o.kt)("h3",{id:"notas"},"Notas"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Los equipos se presentan en orden ascendente seg\xfan la categor\xeda a la que pertenecen."),(0,o.kt)("li",{parentName:"ul"},"La respuesta incluye informaci\xf3n sobre el nombre y el ID del equipo, as\xed como la categor\xeda a la que pertenece y el ID de esa categor\xeda.")),(0,o.kt)("h2",{id:"-equipmentsid"},"## /equipments/","[id]"),(0,o.kt)("h3",{id:"detalles-de-la-consulta"},"Detalles de la Consulta"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Endpoint:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"/equipments/[id]")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"M\xe9todo:")," GET"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Par\xe1metros:")," No recibe parametros"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Descripci\xf3n:")," Obtiene detalles espec\xedficos sobre un equipo m\xe9dico en particular, identificado por su ID \xfanico. La respuesta incluir\xe1 informaci\xf3n como el nombre del equipo, su ID, la categor\xeda a la que pertenece, el ID de la categor\xeda correspondiente y un codigo UMDNS que lo identifica mundialmente.")),(0,o.kt)("h3",{id:"ejemplo-de-uso-1"},"Ejemplo de Uso"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},"GET https://domain/equipments/34\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "equipmentID": 34,\n  "name": "Analizador de Catecolaminas",\n  "categoryID": 3,\n  "category": "Categoria 3",\n  "umdns": "17-173"\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Suponiendo que el equipo con id 5 es un ",(0,o.kt)("strong",{parentName:"p"},"Analizador de Catecolaminas"))),(0,o.kt)("h3",{id:"respuesta-1"},"Respuesta"),(0,o.kt)("p",null,"La respuesta de este endpoint contendr\xe1 detalles espec\xedficos sobre el equipo m\xe9dico identificado por el ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),". Estos detalles incluir\xe1n el nombre del equipo, su ID, la categor\xeda a la que pertenece y el ID de la categor\xeda correspondiente."),(0,o.kt)("h3",{id:"notas-1"},"Notas"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Aseg\xfarate de proporcionar el ID \xfanico del equipo en la URL para obtener detalles espec\xedficos sobre ese equipo."),(0,o.kt)("li",{parentName:"ul"},"Esta consulta proporciona informaci\xf3n detallada sobre un equipo m\xe9dico en particular.")))}d.isMDXComponent=!0}}]);