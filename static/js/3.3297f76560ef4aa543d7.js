webpackJsonp([3],{"2PLE":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={data:function(){return{banner:[],goods:[]}},created:function(){this.getBanner(),this.getGoods()},methods:{getBanner:function(){var t=this;this.$api.getIndexBanner().then(function(e){t.banner=e.data.data}).catch(function(t){return console.log(t)})},getGoods:function(){var t=this;this.$api.getIndexGoods().then(function(e){t.goods=e.data.data.records}).catch(function(t){return console.log(t)})},getShopingCart:function(){}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-header"),t._v(" "),t.banner.length?a("Carousel",{staticClass:"index-banner",attrs:{autoplay:"",loop:"","autoplay-speed":5e3,height:680}},t._l(t.banner,function(t,e){return a("CarouselItem",{key:e},[a("img",{attrs:{src:t.indexUrl,alt:t.indexName}})])}),1):t._e(),t._v(" "),a("div",{staticClass:"index-product oh"},[a("div",{staticClass:"web oh"},[a("h2",{staticClass:"index-title"},[t._v("热门产品推荐")]),t._v(" "),a("ul",{staticClass:"product-list clearfix"},t._l(t.goods,function(e,s){return a("router-link",{key:s,attrs:{tag:"li",to:"/web/pro_details?goodSn="+e.goodsSn}},[a("div",{staticClass:"img-box"},[a("img",{attrs:{src:e.goodsImg,alt:""}})]),t._v(" "),a("h3",{staticClass:"name"},[t._v(t._s(e.goodsName))]),t._v(" "),a("div",{staticClass:"price-sales clearfix"},[a("div",{staticClass:"sales"},[a("span",[t._v("销售量：")]),t._v(" "),a("span",[t._v(t._s(e.goodsSalesCount))])]),t._v(" "),a("div",{staticClass:"price"},[a("small",[t._v("￥")]),t._v(" "),a("span",[t._v(t._s(e.shopPrice))])])])])}),1)])]),t._v(" "),a("v-footer")],1)},staticRenderFns:[]};var o=a("C7Lr")(s,n,!1,function(t){a("4Rnz")},"data-v-f8ed2bfc",null);e.default=o.exports},"4Rnz":function(t,e){}});
//# sourceMappingURL=3.3297f76560ef4aa543d7.js.map