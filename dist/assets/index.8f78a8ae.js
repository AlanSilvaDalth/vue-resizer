import{_ as v,u as C,o as D,c as y,a as l,r as w,n as u,C as V,b as _,d as h,w as c,e as L,f as p,t as f,g as X}from"./vendor.a6b1de5c.js";const M=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const e of i)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const e={};return i.integrity&&(e.integrity=i.integrity),i.referrerpolicy&&(e.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?e.credentials="include":i.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(i){if(i.ep)return;i.ep=!0;const e=s(i);fetch(i.href,e)}};M();const b={name:"DragCol",props:{leftPercent:{type:Number,default:50},sliderWidth:{type:Number,default:20},width:{type:String,default:"400px"},height:{type:String,default:"400px"},sliderColor:{type:String,default:"#6f808d"},sliderBgColor:{type:String,default:"#1f2e3a"},sliderHoverColor:{type:String,default:"#6f808d"},sliderBgHoverColor:{type:String,default:"#16222a"}},data(){return{left:this.leftPercent,isDragging:!1}},methods:{mobileDragCol(t){t=t||window.event,t.stopPropagation();let n=t.changedTouches[0].clientX,s=this.left,a=0,i=0;const e=this.$refs.container.offsetWidth,o=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.ontouchmove=d,document.ontouchend=r;function d(g){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),g=g||window.event,g.stopPropagation(),a=g.changedTouches[0].clientX;const m=parseFloat(((n-a)/e*100).toFixed(3));i=s-m,i<=0?o.left=0:i>=100?o.left=100:o.left=i,o.$emit("dragging",o.left)}function r(){o.isDragging=!1,o.$emit("isDragging",o.isDragging),document.ontouchmove=null,document.ontouchend=null}},dragCol(t){t=t||window.event,t.preventDefault(),t.stopPropagation();let n=t.clientX,s=this.left,a=0,i=0;const e=this.$refs.container.offsetWidth,o=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.onmousemove=d,document.onmouseup=r;function d(g){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),g=g||window.event,g.preventDefault(),g.stopPropagation(),a=g.clientX;const m=parseFloat(((n-a)/e*100).toFixed(3));i=s-m,i<=0?o.left=0:i>=100?o.left=100:o.left=i,o.$emit("dragging",o.left)}function r(){o.isDragging=!1,o.$emit("isDragging",o.isDragging),document.onmouseup=null,document.onmousemove=null}}}},W=()=>{C(t=>({"0203b1b2":t.sliderBgColor,"1afa9ff7":t.sliderColor,"706ea773":t.sliderHoverColor,"6efb1ad0":t.sliderBgHoverColor}))},S=b.setup;b.setup=S?(t,n)=>(W(),S(t,n)):W;const F=b;function E(t,n,s,a,i,e){return D(),y("div",{class:"drager_col",ref:"container",style:u({width:s.width,height:s.height})},[l("div",{class:"drager_left",style:u({width:i.left+"%"})},[l("div",null,[w(t.$slots,"left")])],4),l("div",{class:"slider_col",onTouchstartPassive:n[0]||(n[0]=(...o)=>e.mobileDragCol&&e.mobileDragCol(...o)),onMousedown:n[1]||(n[1]=(...o)=>e.dragCol&&e.dragCol(...o)),style:u({width:s.sliderWidth+"px",marginLeft:-s.sliderWidth/2+"px",marginRight:-s.sliderWidth/2+"px"})},null,36),l("div",{class:"drager_right",style:u({width:100-i.left+"%"})},[l("div",null,[w(t.$slots,"right")])],4)],4)}var J=v(F,[["render",E]]);const x={name:"DragRow",props:{topPercent:{type:Number,default:50},sliderWidth:{type:Number,default:20},width:{type:String,default:"400px"},height:{type:String,default:"400px"},sliderColor:{type:String,default:"#6f808d"},sliderBgColor:{type:String,default:"#1f2e3a"},sliderHoverColor:{type:String,default:"#6f808d"},sliderBgHoverColor:{type:String,default:"#16222a"}},data(){return{top:this.topPercent,isDragging:!1}},methods:{mobileDragRow(t){document.body.style.overflow="hidden",document.body.style.overscrollBehaviorY="contain",t=t||window.event,t.stopPropagation();let n=t.changedTouches[0].clientY,s=this.top,a=0,i=0;const e=this.$refs.container.offsetHeight,o=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.ontouchmove=d,document.ontouchend=r;function d(g){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),g=g||window.event,g.stopPropagation(),a=g.changedTouches[0].clientY;const m=parseFloat(((n-a)/e*100).toFixed(3));i=s-m,i<=0?o.top=0:i>=100?o.top=100:o.top=i,o.$emit("dragging",o.top)}function r(){o.isDragging=!1,o.$emit("isDragging",o.isDragging),document.body.style.overflow="",document.body.style.overscrollBehaviorY="",document.ontouchmove=null,document.ontouchend=null}},dragRow(t){t=t||window.event,t.preventDefault(),t.stopPropagation();let n=t.clientY,s=this.top,a=0,i=0;const e=this.$refs.container.offsetHeight,o=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.onmousemove=d,document.onmouseup=r;function d(g){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),g=g||window.event,g.stopPropagation(),a=g.clientY;const m=parseFloat(((n-a)/e*100).toFixed(3));i=s-m,i<=0?o.top=0:i>=100?o.top=100:o.top=i,o.$emit("dragging",o.top)}function r(){o.isDragging=!1,o.$emit("isDragging",o.isDragging),document.onmouseup=null,document.onmousemove=null}}}},N=()=>{C(t=>({"0dfab1de":t.sliderBgColor,"526889ba":t.sliderColor,"65a8b072":t.sliderHoverColor,"2bfea428":t.sliderBgHoverColor}))},B=x.setup;x.setup=B?(t,n)=>(N(),B(t,n)):N;const A=x;function O(t,n,s,a,i,e){return D(),y("div",{class:"drager_row",ref:"container",style:u({width:s.width,height:s.height})},[l("div",{class:"drager_top",style:u({height:i.top+"%"})},[l("div",null,[w(t.$slots,"top")])],4),l("div",{class:"slider_row",onTouchstartPassive:n[0]||(n[0]=(...o)=>e.mobileDragRow&&e.mobileDragRow(...o)),onMousedown:n[1]||(n[1]=(...o)=>e.dragRow&&e.dragRow(...o)),style:u({height:s.sliderWidth+"px",marginTop:-s.sliderWidth/2+"px",marginBottom:-s.sliderWidth/2+"px"})},null,36),l("div",{class:"drager_bottom",style:u({height:100-i.top+"%"})},[l("div",null,[w(t.$slots,"bottom")])],4)],4)}var G=v(A,[["render",O]]);const R={name:"ResizeCol",props:{sliderWidth:{type:Number,default:20},width:{type:Number,default:400},minWidth:{type:Number,default:20},maxWidth:{type:Number,default:-1},height:{type:String,default:"400px"},sliderColor:{type:String,default:"#6f808d"},sliderBgColor:{type:String,default:"#1f2e3a"},sliderHoverColor:{type:String,default:"#6f808d"},sliderBgHoverColor:{type:String,default:"#16222a"}},data(){return{reWidth:this.width,isDragging:!1}},methods:{mobileResizeCol(t){t=t||window.event,t.stopPropagation();let n=t.changedTouches[0].clientX,s=this.reWidth,a=0,i=0;const e=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.ontouchmove=o,document.ontouchend=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.stopPropagation(),a=r.changedTouches[0].clientX;const g=n-a;i=parseInt(s-g),i<=e.minWidth?e.reWidth=e.minWidth:i>=e.maxWidth&&e.maxWidth>=0?e.reWidth=e.maxWidth:e.reWidth=i,e.$emit("dragging",e.reWidth)}function d(){e.isDragging=!1,e.$emit("isDragging",e.isDragging),document.ontouchmove=null,document.ontouchend=null}},resizeCol(t){t=t||window.event,t.preventDefault(),t.stopPropagation();let n=t.clientX,s=this.reWidth,a=0,i=0;const e=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.onmousemove=o,document.onmouseup=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.preventDefault(),r.stopPropagation(),a=r.clientX;const g=n-a;i=parseInt(s-g),i<=e.minWidth?e.reWidth=e.minWidth:i>=e.maxWidth&&e.maxWidth>=0?e.reWidth=e.maxWidth:e.reWidth=i,e.$emit("dragging",e.reWidth)}function d(){e.isDragging=!1,e.$emit("isDragging",e.isDragging),document.onmouseup=null,document.onmousemove=null}}}},I=()=>{C(t=>({"1810dd66":t.sliderBgColor,"7bf1aeaa":t.sliderColor,d1c12182:t.sliderHoverColor,"06207764":t.sliderBgHoverColor}))},k=R.setup;R.setup=k?(t,n)=>(I(),k(t,n)):I;const Z=R,q={class:"resize_col_body"};function K(t,n,s,a,i,e){return D(),y("div",{class:"resize_col",style:u({width:i.reWidth+"px",height:s.height})},[l("div",q,[w(t.$slots,"default")]),l("div",{class:"slider_col",onTouchstartPassive:n[0]||(n[0]=(...o)=>e.mobileResizeCol&&e.mobileResizeCol(...o)),onMousedown:n[1]||(n[1]=(...o)=>e.resizeCol&&e.resizeCol(...o)),style:u({width:s.sliderWidth+"px"})},null,36)],4)}var U=v(Z,[["render",K]]);const H={name:"ResizeRow",props:{sliderWidth:{type:Number,default:20},height:{type:Number,default:400},minHeight:{type:Number,default:20},maxHeight:{type:Number,default:-1},width:{type:String,default:"400px"},sliderColor:{type:String,default:"#6f808d"},sliderBgColor:{type:String,default:"#1f2e3a"},sliderHoverColor:{type:String,default:"#6f808d"},sliderBgHoverColor:{type:String,default:"#16222a"}},data(){return{reHeight:this.height,isDragging:!1}},methods:{mobileResizeRow(t){document.body.style.overflow="hidden",document.body.style.overscrollBehaviorY="contain",t=t||window.event,t.stopPropagation();let n=t.changedTouches[0].clientY,s=this.reHeight,a=0,i=0;const e=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.ontouchmove=o,document.ontouchend=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.stopPropagation(),a=r.changedTouches[0].clientY;const g=n-a;i=parseInt(s-g),i<=e.minHeight?e.reHeight=e.minHeight:i>=e.maxHeight&&e.maxHeight>=0?e.reHeight=e.maxHeight:e.reHeight=i,e.$emit("dragging",e.reHeight)}function d(){e.isDragging=!1,e.$emit("isDragging",e.isDragging),document.body.style.overflow="",document.body.style.overscrollBehaviorY="",document.ontouchmove=null,document.ontouchend=null}},resizeRow(t){t=t||window.event,t.preventDefault(),t.stopPropagation();let n=t.clientY,s=this.reHeight,a=0,i=0;const e=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.onmousemove=o,document.onmouseup=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.preventDefault(),r.stopPropagation(),a=r.clientY;const g=n-a;i=parseInt(s-g),i<=e.minHeight?e.reHeight=e.minHeight:i>=e.maxHeight&&e.maxHeight>=0?e.reHeight=e.maxHeight:e.reHeight=i,e.$emit("dragging",e.reHeight)}function d(){e.isDragging=!1,e.$emit("isDragging",e.isDragging),document.onmouseup=null,document.onmousemove=null}}}},T=()=>{C(t=>({"64db8cc7":t.sliderBgColor,"3ac83c4c":t.sliderColor,"24630f84":t.sliderHoverColor,"6d313ca3":t.sliderBgHoverColor}))},Y=H.setup;H.setup=Y?(t,n)=>(T(),Y(t,n)):T;const Q=H,ee={class:"resize_row_body"};function te(t,n,s,a,i,e){return D(),y("div",{class:"resize_row",style:u({height:i.reHeight+"px",width:s.width})},[l("div",ee,[w(t.$slots,"default")]),l("div",{class:"slider_row",onTouchstartPassive:n[0]||(n[0]=(...o)=>e.mobileResizeRow&&e.mobileResizeRow(...o)),onMousedown:n[1]||(n[1]=(...o)=>e.resizeRow&&e.resizeRow(...o)),style:u({height:s.sliderWidth+"px"})},null,36)],4)}var ie=v(Q,[["render",te]]);const z={name:"Resize",props:{sliderWidth:{type:Number,default:20},height:{type:Number,default:400},width:{type:Number,default:400},minWidth:{type:Number,default:20},maxWidth:{type:Number,default:-1},minHeight:{type:Number,default:20},maxHeight:{type:Number,default:-1},sliderColor:{type:String,default:"#6f808d"},sliderBgColor:{type:String,default:"#1f2e3a"},sliderHoverColor:{type:String,default:"#6f808d"},sliderBgHoverColor:{type:String,default:"#16222a"}},data(){return{reWidth:this.width,reHeight:this.height,isDragging:!1}},methods:{mobileResizeRow(t){document.body.style.overflow="hidden",document.body.style.overscrollBehaviorY="contain",t=t||window.event,t.stopPropagation();let n=t.changedTouches[0].clientY,s=this.reHeight,a=0,i=0;const e=this;this.isDragging=!0,this.$emit("isDraggingRow",this.isDragging),document.ontouchmove=o,document.ontouchend=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.stopPropagation(),a=r.changedTouches[0].clientY;const g=n-a;i=parseInt(s-g),i<=e.minHeight?e.reHeight=e.minHeight:i>=e.maxHeight&&e.maxHeight>=0?e.reHeight=e.maxHeight:e.reHeight=i,e.$emit("draggingRow",e.reHeight)}function d(){e.isDragging=!1,e.$emit("isDraggingRow",e.isDragging),document.body.style.overflow="",document.body.style.overscrollBehaviorY="",document.ontouchmove=null,document.ontouchend=null}},resizeRow(t){t=t||window.event,t.preventDefault(),t.stopPropagation();let n=t.clientY,s=this.reHeight,a=0,i=0;const e=this;this.isDragging=!0,this.$emit("isDraggingRow",this.isDragging),document.onmousemove=o,document.onmouseup=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.preventDefault(),r.stopPropagation(),a=r.clientY;const g=n-a;i=parseInt(s-g),i<=e.minHeight?e.reHeight=e.minHeight:i>=e.maxHeight&&e.maxHeight>=0?e.reHeight=e.maxHeight:e.reHeight=i,e.$emit("draggingRow",e.reHeight)}function d(){e.isDragging=!1,e.$emit("isDraggingRow",e.isDragging),document.onmouseup=null,document.onmousemove=null}},mobileResizeCol(t){t=t||window.event,t.stopPropagation();let n=t.changedTouches[0].clientX,s=this.reWidth,a=0,i=0;const e=this;this.isDragging=!0,this.$emit("isDraggingCol",this.isDragging),document.ontouchmove=o,document.ontouchend=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.stopPropagation(),a=r.changedTouches[0].clientX;const g=n-a;i=parseInt(s-g),i<=e.minWidth?e.reWidth=e.minWidth:i>=e.maxWidth&&e.maxWidth>=0?e.reWidth=e.maxWidth:e.reWidth=i,e.$emit("draggingCol",e.reWidth)}function d(){e.isDragging=!1,e.$emit("isDraggingCol",e.isDragging),document.ontouchmove=null,document.ontouchend=null}},resizeCol(t){t=t||window.event,t.preventDefault(),t.stopPropagation();let n=t.clientX,s=this.reWidth,a=0,i=0;const e=this;this.isDragging=!0,this.$emit("isDraggingCol",this.isDragging),document.onmousemove=o,document.onmouseup=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.preventDefault(),r.stopPropagation(),a=r.clientX;const g=n-a;i=parseInt(s-g),i<=e.minWidth?e.reWidth=e.minWidth:i>=e.maxWidth&&e.maxWidth>=0?e.reWidth=e.maxWidth:e.reWidth=i,e.$emit("draggingCol",e.reWidth)}function d(){e.isDragging=!1,e.$emit("isDraggingCol",e.isDragging),document.onmouseup=null,document.onmousemove=null}}}},j=()=>{C(t=>({"0a5c8aa5":t.sliderBgColor,f4e9ccac:t.sliderColor,"689574c0":t.sliderHoverColor,"6c9a3985":t.sliderBgHoverColor}))},$=z.setup;z.setup=$?(t,n)=>(j(),$(t,n)):j;const oe=z,ne={class:"resize_body"};function re(t,n,s,a,i,e){return D(),y("div",{class:"resize",style:u({height:i.reHeight+"px",width:i.reWidth+"px"})},[l("div",ne,[w(t.$slots,"default")]),l("div",{class:"slider_row",onTouchstartPassive:n[0]||(n[0]=(...o)=>e.mobileResizeRow&&e.mobileResizeRow(...o)),onMousedown:n[1]||(n[1]=(...o)=>e.resizeRow&&e.resizeRow(...o)),style:u({height:s.sliderWidth+"px"})},null,36),l("div",{class:"slider_col",onTouchstartPassive:n[2]||(n[2]=(...o)=>e.mobileResizeCol&&e.mobileResizeCol(...o)),onMousedown:n[3]||(n[3]=(...o)=>e.resizeCol&&e.resizeCol(...o)),style:u({width:s.sliderWidth+"px"})},null,36)],4)}var le=v(oe,[["render",re]]);const se={components:{DragCol:J,DragRow:G,ResizeCol:U,ResizeRow:ie,Resize:le,CodeEditor:V},data(){return{example:`import {
  DragCol,
  DragRow,
  ResizeCol,
  ResizeRow,
  Resize,
} from "vue-resizer";`,example_1:`<!-- Usage -->
<DragCol>
  <template #left>
    <!-- your content -->
  </template>
  <template #right>
    <!-- your content -->
  </template>
</DragCol>`,example_1_1:`// Props
props: {
  // width percentage of the left part
  // units: %
  leftPercent: { 
    type: Number,
    default: 50,
  },
  // width of the slider
  // units: px
  sliderWidth: {
    type: Number,
    default: 20,
  },
  // width of the container
  // units: any
  width: {
    type: String,
    default: "400px",
  },
  // height of the container
  // units: any
  height: {
    type: String,
    default: "400px",
  },
  // color of the slider
  sliderColor: {
    type: String,
    default: "#6f808d",
  },
  // bg color of the slider
  sliderBgColor: {
    type: String,
    default: "#1f2e3a",
  },
  // color of the slider on hover
  sliderHoverColor: {
    type: String,
    default: "#6f808d",
  },
  // bg color of the slider on hover
  sliderBgHoverColor: {
    type: String,
    default: "#16222a",
  }
}
`,example_2:`<DragRow>
  <template #top>
    <!-- your content -->
  </template>
  <template #bottom>
    <!-- your content -->
  </template>
</DragRow>`,example_2_1:`props: {
  // height percentage of the top part
  // units: %
  topPercent: {
    type: Number,
    default: 50,
  },
  // width of the slider
  // units: px
  sliderWidth: {
    type: Number,
    default: 20,
  },
  // width of the container
  // units: any
  width: {
    type: String,
    default: "400px",
  },
  // height of the container
  // units: any
  height: {
    type: String,
    default: "400px",
  },
  // color of the slider
  sliderColor: {
    type: String,
    default: "#6f808d",
  },
  // bg color of the slider
  sliderBgColor: {
    type: String,
    default: "#1f2e3a",
  },
  // color of the slider on hover
  sliderHoverColor: {
    type: String,
    default: "#6f808d",
  },
  // bg color of the slider on hover
  sliderBgHoverColor: {
    type: String,
    default: "#16222a",
  }
}`,example_3:`<ResizeCol>
    <!-- your content -->
</ResizeCol>`,example_3_1:`props: {
  // width of the slider
  // units: px
  sliderWidth: {
    type: Number,
    default: 20,
  },
  // width of the container
  // units: px
  width: {
    type: Number,
    default: 400,
  },
  // min width of the container
  // units: px
  minWidth: {
      type: Number,
      default: 20,
    },
  // max width of the container
  // units: px
  maxWidth: {
    type: Number,
    default: -1,
  },
  // height of the container
  // units: any
  height: {
    type: String,
    default: "400px",
  },
  // color of the slider
  sliderColor: {
    type: String,
    default: "#6f808d",
  },
  // bg color of the slider
  sliderBgColor: {
    type: String,
    default: "#1f2e3a",
  },
  // color of the slider on hover
  sliderHoverColor: {
    type: String,
    default: "#6f808d",
  },
  // bg color of the slider on hover
  sliderBgHoverColor: {
    type: String,
    default: "#16222a",
  }
}`,example_4:`<ResizeRow>
    <!-- your content -->
</ResizeRow>`,example_4_1:`props: {
  // width of the slider
  // units: px
  sliderWidth: {
    type: Number,
    default: 20,
  },
  // height of the container
  // units: px
  height: {
    type: Number,
    default: 400,
  },
  // min height of the container
  // units: px
  minHeight: {
    type: Number,
    default: 20,
  },
  // max height of the container
  // units: px
  maxHeight: {
    type: Number,
    default: -1,
  },
  // width of the container
  // units: any
  width: {
    type: String,
    default: "400px",
  },
  // color of the slider
  sliderColor: {
    type: String,
    default: "#6f808d",
  },
  // bg color of the slider
  sliderBgColor: {
    type: String,
    default: "#1f2e3a",
  },
  // color of the slider on hover
  sliderHoverColor: {
    type: String,
    default: "#6f808d",
  },
  // bg color of the slider on hover
  sliderBgHoverColor: {
    type: String,
    default: "#16222a",
  }
}`,example_5:`<Resize>
    <!-- your content -->
</Resize>`,example_5_1:`props: {
  // width of the slider
  // units: px
  sliderWidth: {
    type: Number,
    default: 20,
  },
  // height of the container
  // units: px
  height: {
    type: Number,
    default: 400,
  },
  // min height of the container
  // units: px
  minHeight: {
    type: Number,
    default: 20,
  },
  // max height of the container
  // units: px
  maxHeight: {
    type: Number,
    default: -1,
  },
  // width of the container
  // units: px
  width: {
    type: Number,
    default: 400,
  },
  // min width of the container
  // units: px
  minWidth: {
    type: Number,
    default: 20,
  },
  // max width of the container
  // units: px
  maxWidth: {
    type: Number,
    default: -1,
  },
  // color of the slider
  sliderColor: {
    type: String,
    default: "#6f808d",
  },
  // bg color of the slider
  sliderBgColor: {
    type: String,
    default: "#1f2e3a",
  },
  // color of the slider on hover
  sliderHoverColor: {
    type: String,
    default: "#6f808d",
  },
  // bg color of the slider on hover
  sliderBgHoverColor: {
    type: String,
    default: "#16222a",
  }
},`,example_6:`<Resize>
  <DragRow height="100%" width="100%">
    <template #top>
      <DragCol height="100%" width="100%" :leftPercent="30">
        <template #left>
          <!-- your content -->
        </template>
        <template #right>
          <!-- your content -->
        </template>
      </DragCol>
    </template>
    <template #bottom>
      <DragCol height="100%" width="100%" :leftPercent="70">
        <template #left>
          <!-- your content -->
        </template>
        <template #right>
          <!-- your content -->
        </template>
      </DragCol>
    </template>
  </DragRow>
</Resize>`,install:"npm install vue-resizer",data_1:"50%",data_1_1:"50%",data_2:"50%",data_2_1:"50%",data_3:"320px",data_4:"400px",data_5_1:"320px",data_5_2:"400px",example_7:`<!-- Open the Console of the browser and drag any slider in the above examples, you will see the real-time states -->

<DragCol
  @isDragging="func"
  @dragging="func"
/>
<!--
@isDragging will be activated while you start or stop dragging, it will pass a boolean parameter which is the state of dragging

@dragging will be activated while you keep dragging, it will pass a number parameter which is the percentage of the left part 
-->
<DragRow
  @isDragging="func"
  @dragging="func"
/>
<!--
@isDragging will be activated while you start or stop dragging, it will pass a boolean parameter which is the state of dragging

@dragging will be activated while you keep dragging, it will pass a number parameter which is the percentage of the top part
-->
<ResizeCol
  @isDragging="func"
  @dragging="func"
/>
<!--
@isDragging will be activated while you start or stop dragging, it will pass a boolean parameter which is the state of dragging

@dragging will be activated while you keep dragging, it will pass a number parameter which is the width of the container
-->
<ResizeRow
  @isDragging="func"
  @dragging="func"
/>
<!--
@isDragging will be activated while you start or stop dragging, it will pass a boolean parameter which is the state of dragging

@dragging will be activated while you keep dragging, it will pass a number parameter which is the height of the container
-->
<Resize
  @isDraggingRow="func"
  @isDraggingCol="func"
  @draggingRow="func"
  @draggingCol="func"
/>
<!-- 
@isDraggingRow will be activated while you start or stop vertical dragging, it will pass a boolean parameter which is the state of vertical dragging

@isDraggingCol will be activated while you start or stop horizontal dragging, it will pass a boolean parameter which is the state of horizontal dragging

@draggingRow will be activated while you keep vertical dragging, it will pass a number parameter which is the height of the container

@draggingCol will be activated while you keep horizontal dragging, it will pass a number parameter which is the width of the container
-->`}},computed:{data_5(){return`${this.data_5_1} * ${this.data_5_2}`}},methods:{draggingCol(t){const n=parseInt(t);this.data_1=n+"%",this.data_1_1=100-n+"%"},draggingRow(t){const n=parseInt(t);this.data_2=n+"%",this.data_2_1=100-n+"%"},resizingCol(t){this.data_3=t+"px"},resizingRow(t){this.data_4=t+"px"},resizingC(t){this.data_5_1=t+"px"},resizingR(t){this.data_5_2=t+"px"},isDragging(t){console.log("Dragging: "+t)}}},ae=L('<a target="_blank" href="https://github.com/justcaliturner/vue-resizer"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#61aeee;color:#fff;position:absolute;top:0;border:0;right:0;"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin:130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a>',1),ge={class:"container"},de=l("h1",null,"Vue Resizer",-1),he=l("p",null,"A series of the resizer components for Vue.js",-1),ue=l("br",null,null,-1),ce=l("a",{href:"https://github.com/justcaliturner/vue-resizer",target:"_blank",class:"link"},[l("span",null,"View on Github"),l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},[l("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),l("polyline",{points:"12 5 19 12 12 19"})])],-1),me=l("h2",null,"Examples",-1),pe=l("br",null,null,-1),fe=l("br",null,null,-1),we=l("br",null,null,-1),_e=l("br",null,null,-1),ve=l("br",null,null,-1),De=l("br",null,null,-1),ye=l("br",null,null,-1),Ce=l("br",null,null,-1),be=l("br",null,null,-1),xe=l("br",null,null,-1),Re=l("br",null,null,-1),He=l("br",null,null,-1),ze=l("br",null,null,-1),Pe=l("br",null,null,-1),We=l("h2",null,"Nesting",-1),Se=l("br",null,null,-1),Ne=l("h3",null,"Real-time State and Data",-1),Be=l("a",{href:"https://github.com/justcaliturner/vue-resizer",target:"_blank",class:"link",style:{"margin-top":"40px"}},[l("span",null,"View on Github"),l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},[l("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),l("polyline",{points:"12 5 19 12 12 19"})])],-1);function Ie(t,n,s,a,i,e){const o=_("CodeEditor"),d=_("DragCol"),r=_("DragRow"),g=_("ResizeCol"),m=_("ResizeRow"),P=_("Resize");return D(),y("div",null,[ae,l("div",ge,[de,he,h(o,{width:"100%",value:i.install,read_only:!0,languages:[["shell","NPM"]]},null,8,["value"]),ue,h(o,{width:"100%",value:i.example,read_only:!0,font_size:"16px",languages:[["javascript","JS"]]},null,8,["value"]),ce,me,h(d,{class:"example_1",onIsDragging:e.isDragging,onDragging:e.draggingCol,width:"100%"},{left:c(()=>[p(f(i.data_1),1)]),right:c(()=>[p(f(i.data_1_1),1)]),_:1},8,["onIsDragging","onDragging"]),pe,h(o,{font_size:"16px",width:"100%",value:i.example_1,read_only:!0,languages:[["html","template"]]},null,8,["value"]),fe,h(o,{font_size:"16px",hide_header:!0,width:"100%",value:i.example_1_1,read_only:!0,languages:[["javascript","JS"]]},null,8,["value"]),we,h(r,{class:"example_2",onIsDragging:e.isDragging,onDragging:e.draggingRow,width:"100%"},{top:c(()=>[p(f(i.data_2),1)]),bottom:c(()=>[p(f(i.data_2_1),1)]),_:1},8,["onIsDragging","onDragging"]),_e,h(o,{font_size:"16px",width:"100%",value:i.example_2,read_only:!0,languages:[["html","template"]]},null,8,["value"]),ve,h(o,{font_size:"16px",hide_header:!0,width:"100%",value:i.example_2_1,read_only:!0,languages:[["javascript","JS"]]},null,8,["value"]),De,h(g,{width:320,minWidth:200,maxWidth:450,class:"example_3",onIsDragging:e.isDragging,onDragging:e.resizingCol},{default:c(()=>[p(f(i.data_3),1)]),_:1},8,["onIsDragging","onDragging"]),ye,h(o,{font_size:"16px",width:"100%",value:i.example_3,read_only:!0,languages:[["html","template"]]},null,8,["value"]),Ce,h(o,{font_size:"16px",hide_header:!0,width:"100%",value:i.example_3_1,read_only:!0,languages:[["javascript","JS"]]},null,8,["value"]),be,h(m,{width:"100%",class:"example_4",minHeight:200,maxHeight:450,onIsDragging:e.isDragging,onDragging:e.resizingRow},{default:c(()=>[p(f(i.data_4),1)]),_:1},8,["onIsDragging","onDragging"]),xe,h(o,{font_size:"16px",width:"100%",value:i.example_4,read_only:!0,languages:[["html","template"]]},null,8,["value"]),Re,h(o,{font_size:"16px",hide_header:!0,width:"100%",value:i.example_4_1,read_only:!0,languages:[["javascript","JS"]]},null,8,["value"]),He,h(P,{width:320,minWidth:200,maxWidth:600,minHeight:200,maxHeight:600,class:"example_5",onIsDraggingRow:e.isDragging,onIsDraggingCol:e.isDragging,onDraggingRow:e.resizingR,onDraggingCol:e.resizingC},{default:c(()=>[p(f(e.data_5),1)]),_:1},8,["onIsDraggingRow","onIsDraggingCol","onDraggingRow","onDraggingCol"]),ze,h(o,{font_size:"16px",width:"100%",value:i.example_5,read_only:!0,languages:[["html","template"]]},null,8,["value"]),Pe,h(o,{font_size:"16px",hide_header:!0,width:"100%",value:i.example_5_1,read_only:!0,languages:[["javascript","JS"]]},null,8,["value"]),We,h(P,{width:320},{default:c(()=>[h(r,{height:"100%",width:"100%"},{top:c(()=>[h(d,{height:"100%",width:"100%",leftPercent:30},{left:c(()=>[]),right:c(()=>[]),_:1})]),bottom:c(()=>[h(d,{height:"100%",width:"100%",leftPercent:70},{left:c(()=>[]),right:c(()=>[]),_:1})]),_:1})]),_:1}),Se,h(o,{font_size:"16px",width:"100%",value:i.example_6,read_only:!0,languages:[["html","template"]]},null,8,["value"]),Ne,h(o,{font_size:"16px",wrap_code:!0,width:"100%",value:i.example_7,read_only:!0,languages:[["html","template"]]},null,8,["value"]),Be])])}var ke=v(se,[["render",Ie]]);X(ke).mount("#app");
