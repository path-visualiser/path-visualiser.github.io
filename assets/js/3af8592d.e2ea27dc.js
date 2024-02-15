"use strict";(self.webpackChunkdocs_2=self.webpackChunkdocs_2||[]).push([[4763],{8625:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var r=t(5893),i=t(1151);const s={sidebar_position:1},o="Search Trace",d={id:"getting started/concepts/search-trace",title:"Search Trace",description:"Version 1.0.5",source:"@site/docs/3-getting started/concepts/search-trace.md",sourceDirName:"3-getting started/concepts",slug:"/getting started/concepts/search-trace",permalink:"/docs/getting started/concepts/search-trace",draft:!1,unlisted:!1,editUrl:"https://github.com/path-visualiser/docs/tree/master/docs/3-getting started/concepts/search-trace.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Concepts",permalink:"/docs/category/concepts"},next:{title:"Component",permalink:"/docs/getting started/concepts/components"}},c={},a=[{value:"Render Definition",id:"render-definition",level:2},{value:"<code>context</code> property",id:"context-property",level:3},{value:"components property",id:"components-property",level:3},{value:"views property",id:"views-property",level:3},{value:"Example Search Trace",id:"example-search-trace",level:3},{value:"Event Record (Event List)",id:"event-record-event-list",level:2},{value:"Event",id:"event",level:3}];function h(e){const n={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"search-trace",children:"Search Trace"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Version 1.0.5"})}),"\n",(0,r.jsxs)(n.p,{children:["The Search Trace is the input provided to the path finding visualizer in the form of a JSON file. It is a description file containing two parts the ",(0,r.jsx)(n.a,{href:"#render-definition",children:"render"})," and the ",(0,r.jsx)(n.code,{children:"events"}),". The events is the results for each step of execution for the path finding algorithm. While the ",(0,r.jsx)(n.em,{children:"render"})," details how these events should be displayed."]}),"\n",(0,r.jsx)(n.p,{children:"The structure of the Search Trace is defined as below,"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type Trace = {\n  version: string;\n  render: RenderDefinition;\n  events: Event[];\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When renderering an ",(0,r.jsx)(n.em,{children:"event"}),", the variables of that event will be combined with the ",(0,r.jsx)(n.em,{children:"context definition"})," and then be provided to the views defined in ",(0,r.jsx)(n.em,{children:"render definition"})," to be rendered. These terms will be explained in detailed later."]}),"\n",(0,r.jsx)(n.h2,{id:"render-definition",children:"Render Definition"}),"\n",(0,r.jsx)(n.p,{children:"The Render Definition is a template syntax that offers a minimalistic way to detail the visualization of the events."}),"\n",(0,r.jsx)(n.p,{children:"It comprises three properties."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"views"})," is a required property which contains information on the rendering processes of the individual views."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"context"})," is an optional property which can be used to provide additional information for the components."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"components"})," is optional property which can contain user defined visualization elements."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The structure for the ",(0,r.jsx)(n.code,{children:"RenderDefinition"})," is defined below,"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type View = {\n  renderer: string;\n  component: Component;\n};\n\ntype RenderDefinition = {\n  context?: ContextDefinition;\n  components?: { [K: string]: Component[] };\n  views: { main: View; secondary: View };\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"context-property",children:[(0,r.jsx)(n.code,{children:"context"})," property"]}),"\n",(0,r.jsx)(n.p,{children:"The context property provides an additional variable environment for components. It can be used to provide new general values and override the default context variables (eg. Changing the colours for the different types of Events.)"}),"\n",(0,r.jsxs)(n.p,{children:["Refer to ",(0,r.jsx)(n.a,{href:"./context.md",children:"context.md"})," for more ",(0,r.jsx)(n.code,{children:"ContextDefinition"})," detail."]}),"\n",(0,r.jsx)(n.h3,{id:"components-property",children:"components property"}),"\n",(0,r.jsxs)(n.p,{children:["The components property is a object of ",(0,r.jsx)(n.a,{href:"#components",children:"Component"})," definitions. The key is the name of the component and the value is list of ",(0,r.jsx)(n.a,{href:"#components",children:"Component"})," which are compose together. This is where the user can create custom element to render each of events. Custom components must be recurse back to inbuilts primitive components."]}),"\n",(0,r.jsxs)(n.p,{children:["Refer to ",(0,r.jsx)(n.a,{href:"../../4-user-guide/renderer/standard-renderers.md",children:"standard-renderers.md"})," for more detail."]}),"\n",(0,r.jsx)(n.h3,{id:"views-property",children:"views property"}),"\n",(0,r.jsx)(n.p,{children:"The views property which is a object of view definitions. The key is the view name and the value is the view information object. Each view defines what component will be displayed in individual window which can be resized."}),"\n",(0,r.jsxs)(n.p,{children:["A view consist a component (which can be comprise of many components) and the name of the renderer it will utilize to draw this component. This component can either be user defined component from the ",(0,r.jsx)(n.a,{href:"#components-property",children:"components property"})," or a prefined component from ",(0,r.jsx)(n.a,{href:"#",children:"renderer"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Below is an example for the usage of a prefined component."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'type RendererDefinition = {\n  views: { main: { renderer: "2d-pixi"; component: { $: "tree" } } };\n};\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Refer to ",(0,r.jsx)(n.a,{href:"../../4-user-guide/renderer/standard-renderers.md",children:"standard-renderers.md"})," for more detail on the usage of prefined components."]}),"\n",(0,r.jsx)(n.p,{children:"\xa0"}),"\n",(0,r.jsx)(n.h3,{id:"example-search-trace",children:"Example Search Trace"}),"\n",(0,r.jsx)(n.p,{children:"Below is an example renderer definition that specifies that each step in the search trace should be rendered as boxes with their IDs inside."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'const myTrace = {\n  "version": "1.0.5",\n  "render": {\n    "components": {},\n    "views": {\n      "main": {\n        "components": [\n          {\n            "$": "rect",\n            "fill": "{{$.color[$.event.type]}}",\n            "width": 1,\n            "height": 1,\n            "x": "{{\'x\' in $.event ? $.event.x : 0}}",\n            "y": "{{\'y\' in $.event ? $.event.y : 0}}"\n          }\n        ]\n      }\n    }\n  },\n  "events": [\n    ...\n    {\n      "type": "generating",\n      "id": 1640,\n      "g": 0.00001,\n      "f": 0.000320711,\n      "pId": 1736,\n      "x": 8,\n      "y": 14\n    },\n    ...\n    ]\n};\n'})}),"\n",(0,r.jsx)(n.p,{children:"\xa0"}),"\n",(0,r.jsx)(n.h2,{id:"event-record-event-list",children:"Event Record (Event List)"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"events"})," is an array of objects each of which describes the state of a node at a particular stage in a search. Each object in this array is an ",(0,r.jsx)(n.code,{children:"Event"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Each of the events in the ",(0,r.jsx)(n.code,{children:"events"})," can be rendered/animated to show the process of the search, this is done by providing the variables of the event to the respectives components. The rendering process will be follow linear progression through the ",(0,r.jsx)(n.code,{children:"events"})]}),"\n",(0,r.jsx)(n.h3,{id:"event",children:"Event"}),"\n",(0,r.jsxs)(n.p,{children:["An ",(0,r.jsx)(n.code,{children:"Event"})," is an object describing a node at a particular state in search.\n",(0,r.jsx)(n.code,{children:"Events"})," have a couple standard properties including"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"id"})," an unique identifier for the node"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pId"})," the id for the parent of the current node"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"f"})," bound on total cost from start to target from current node"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"g"})," associated cost (g-value)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"h"})," estimated cost (h-valye)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"type"})," which signifies state of the node"]}),"\n"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Events Types"}),(0,r.jsx)(n.th,{children:"Definition"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"source"}),(0,r.jsx)(n.td,{children:"A Beginning Node of the Search Trace"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"destination"}),(0,r.jsx)(n.td,{children:"A Ending Node of the Search Trace"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"generating"}),(0,r.jsx)(n.td,{children:"A Node that has just been discovered"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"updating"}),(0,r.jsx)(n.td,{children:"A Node thats information is being updated"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"expanding"}),(0,r.jsx)(n.td,{children:"Current Node which is simulating all actions avaiable to it"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"closing"}),(0,r.jsx)(n.td,{children:"Node is done expanding"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"end"}),(0,r.jsx)(n.td,{children:"End node of the search process"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["These standard properties will be displayed in visualiser's Info Panel and node's popups for easy inspection.",(0,r.jsx)(n.br,{}),"\n","Events will generally contain more information such as x and y positions that are required for the rendering of the Search Trace. Those custom/additional properties will be provided to the component when rendering."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'export type TraceEventType =\n  | "source"\n  | "destination"\n  | "generating"\n  | "updating"\n  | "closing"\n  | "expanding"\n  | "end";\n\nexport type TraceEvent = {\n  type: TraceEventType;\n  id: number | string;\n  pId?: number | string | null;\n  f?: number;\n  g?: number;\n  h?: number;\n  [key: string]: any;\n};\n'})})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>o});var r=t(7294);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);