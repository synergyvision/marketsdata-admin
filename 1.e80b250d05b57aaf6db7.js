(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{BHnd:function(t,e,n){"use strict";n.d(e,"m",function(){return D}),n.d(e,"b",function(){return p}),n.d(e,"f",function(){return y}),n.d(e,"c",function(){return _}),n.d(e,"e",function(){return m}),n.d(e,"a",function(){return w}),n.d(e,"k",function(){return d}),n.d(e,"h",function(){return g}),n.d(e,"j",function(){return R}),n.d(e,"g",function(){return b}),n.d(e,"d",function(){return v}),n.d(e,"i",function(){return S}),n.d(e,"l",function(){return k});var r=n("mrSG"),i=n("y4qS"),o=n("YlbQ"),a=n("n6gG"),s=n("26FU"),c=n("pugT"),l=n("p0ib"),u=n("F/XL"),f=n("dzgT"),h=n("67Y/"),d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.stickyCssClass="mat-table-sticky",e}return Object(r.c)(e,t),e}(i.o),p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(r.c)(e,t),e}(i.b),y=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(r.c)(e,t),e}(i.j),_=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(r.c)(e,t),e}(i.d),m=function(t){function e(e,n){var r=t.call(this,e,n)||this;return n.nativeElement.classList.add("mat-column-"+e.cssClassFriendlyName),r}return Object(r.c)(e,t),e}(i.i),w=function(t){function e(e,n){var r=t.call(this,e,n)||this;return n.nativeElement.classList.add("mat-column-"+e.cssClassFriendlyName),r}return Object(r.c)(e,t),e}(i.a),g=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(r.c)(e,t),e}(i.l),R=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(r.c)(e,t),e}(i.n),b=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(r.c)(e,t),e}(i.k),v=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(r.c)(e,t),e}(i.g),S=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(r.c)(e,t),e}(i.m),D=function(){},C=9007199254740991,k=function(t){function e(e){void 0===e&&(e=[]);var n=t.call(this)||this;return n._renderData=new s.a([]),n._filter=new s.a(""),n._renderChangesSubscription=c.a.EMPTY,n.sortingDataAccessor=function(t,e){var n=t[e];if(Object(a.a)(n)){var r=Number(n);return r<C?r:n}return n},n.sortData=function(t,e){var r=e.active,i=e.direction;return r&&""!=i?t.sort(function(t,e){var o=n.sortingDataAccessor(t,r),a=n.sortingDataAccessor(e,r),s=0;return null!=o&&null!=a?o>a?s=1:o<a&&(s=-1):null!=o?s=1:null!=a&&(s=-1),s*("asc"==i?1:-1)}):t},n.filterPredicate=function(t,e){var n=Object.keys(t).reduce(function(e,n){return e+t[n]+"\u25ec"},"").toLowerCase(),r=e.trim().toLowerCase();return-1!=n.indexOf(r)},n._data=new s.a(e),n._updateChangeSubscription(),n}return Object(r.c)(e,t),Object.defineProperty(e.prototype,"data",{get:function(){return this._data.value},set:function(t){this._data.next(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"filter",{get:function(){return this._filter.value},set:function(t){this._filter.next(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sort",{get:function(){return this._sort},set:function(t){this._sort=t,this._updateChangeSubscription()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"paginator",{get:function(){return this._paginator},set:function(t){this._paginator=t,this._updateChangeSubscription()},enumerable:!0,configurable:!0}),e.prototype._updateChangeSubscription=function(){var t=this,e=this._sort?Object(l.a)(this._sort.sortChange,this._sort.initialized):Object(u.a)(null),n=this._paginator?Object(l.a)(this._paginator.page,this._paginator.initialized):Object(u.a)(null),r=this._data,i=Object(f.a)(r,this._filter).pipe(Object(h.a)(function(e){return t._filterData(e[0])})),o=Object(f.a)(i,e).pipe(Object(h.a)(function(e){return t._orderData(e[0])})),a=Object(f.a)(o,n).pipe(Object(h.a)(function(e){return t._pageData(e[0])}));this._renderChangesSubscription.unsubscribe(),this._renderChangesSubscription=a.subscribe(function(e){return t._renderData.next(e)})},e.prototype._filterData=function(t){var e=this;return this.filteredData=this.filter?t.filter(function(t){return e.filterPredicate(t,e.filter)}):t,this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData},e.prototype._orderData=function(t){return this.sort?this.sortData(t.slice(),this.sort):t},e.prototype._pageData=function(t){if(!this.paginator)return t;var e=this.paginator.pageIndex*this.paginator.pageSize;return t.slice().splice(e,this.paginator.pageSize)},e.prototype._updatePaginator=function(t){var e=this;Promise.resolve().then(function(){if(e.paginator&&(e.paginator.length=t,e.paginator.pageIndex>0)){var n=Math.ceil(e.paginator.length/e.paginator.pageSize)-1||0;e.paginator.pageIndex=Math.min(e.paginator.pageIndex,n)}})},e.prototype.connect=function(){return this._renderData},e.prototype.disconnect=function(){},e}(o.b)},pIm3:function(t,e,n){"use strict";n.d(e,"c",function(){return o}),n.d(e,"f",function(){return a}),n.d(e,"a",function(){return s}),n.d(e,"d",function(){return c}),n.d(e,"b",function(){return l}),n.d(e,"e",function(){return u});var r=n("CcnG"),i=(n("BHnd"),n("Ip0R"),n("y4qS")),o=(n("Fzqc"),n("Wf4p"),n("ZYjt"),n("dWZg"),r.Sa({encapsulation:2,styles:["mat-table{display:block}mat-header-row{min-height:56px}mat-footer-row,mat-row{min-height:48px}mat-footer-row,mat-header-row,mat-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-footer-row::after,mat-header-row::after,mat-row::after{display:inline-block;min-height:inherit;content:''}mat-cell:first-of-type,mat-footer-cell:first-of-type,mat-header-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type,[dir=rtl] mat-footer-cell:first-of-type,[dir=rtl] mat-header-cell:first-of-type{padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-footer-cell:last-of-type,mat-header-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type,[dir=rtl] mat-footer-cell:last-of-type,[dir=rtl] mat-header-cell:last-of-type{padding-right:0;padding-left:24px}mat-cell,mat-footer-cell,mat-header-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-footer-row,tr.mat-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}td.mat-cell,td.mat-footer-cell,th.mat-header-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type,th.mat-header-cell:first-of-type{padding-left:24px}[dir=rtl] td.mat-cell:first-of-type,[dir=rtl] td.mat-footer-cell:first-of-type,[dir=rtl] th.mat-header-cell:first-of-type{padding-left:0;padding-right:24px}td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type,th.mat-header-cell:last-of-type{padding-right:24px}[dir=rtl] td.mat-cell:last-of-type,[dir=rtl] td.mat-footer-cell:last-of-type,[dir=rtl] th.mat-header-cell:last-of-type{padding-right:0;padding-left:24px}"],data:{}}));function a(t){return r.ob(2,[r.kb(402653184,1,{_rowOutlet:0}),r.kb(402653184,2,{_headerRowOutlet:0}),r.kb(402653184,3,{_footerRowOutlet:0}),(t()(),r.Ua(3,16777216,null,null,1,null,null,null,null,null,null,null)),r.Ta(4,16384,[[2,4]],0,i.s,[r.U,r.l],null,null),(t()(),r.Ua(5,16777216,null,null,1,null,null,null,null,null,null,null)),r.Ta(6,16384,[[1,4]],0,i.q,[r.U,r.l],null,null),(t()(),r.Ua(7,16777216,null,null,1,null,null,null,null,null,null,null)),r.Ta(8,16384,[[3,4]],0,i.r,[r.U,r.l],null,null)],null,null)}var s=r.Sa({encapsulation:2,styles:[],data:{}});function c(t){return r.ob(2,[(t()(),r.Ua(0,16777216,null,null,1,null,null,null,null,null,null,null)),r.Ta(1,147456,null,0,i.c,[r.U],null,null)],null,null)}var l=r.Sa({encapsulation:2,styles:[],data:{}});function u(t){return r.ob(2,[(t()(),r.Ua(0,16777216,null,null,1,null,null,null,null,null,null,null)),r.Ta(1,147456,null,0,i.c,[r.U],null,null)],null,null)}},y4qS:function(t,e,n){"use strict";n.d(e,"q",function(){return F}),n.d(e,"s",function(){return T}),n.d(e,"r",function(){return N}),n.d(e,"o",function(){return I}),n.d(e,"b",function(){return d}),n.d(e,"j",function(){return p}),n.d(e,"f",function(){return y}),n.d(e,"d",function(){return _}),n.d(e,"i",function(){return w}),n.d(e,"e",function(){return g}),n.d(e,"a",function(){return R}),n.d(e,"l",function(){return v}),n.d(e,"h",function(){return S}),n.d(e,"n",function(){return D}),n.d(e,"c",function(){return C}),n.d(e,"k",function(){return k}),n.d(e,"g",function(){return O}),n.d(e,"m",function(){return j}),n.d(e,"p",function(){return B});var r=n("mrSG"),i=n("n6gG"),o=n("CcnG"),a=n("YlbQ"),s=n("K9Ia"),c=n("26FU"),l=n("6blF"),u=n("F/XL"),f=n("ny24");function h(t){return function(t){function e(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var r=t.apply(this,e)||this;return r._sticky=!1,r._hasStickyChanged=!1,r}return Object(r.c)(e,t),Object.defineProperty(e.prototype,"sticky",{get:function(){return this._sticky},set:function(t){var e=this._sticky;this._sticky=Object(i.c)(t),this._hasStickyChanged=e!==this._sticky},enumerable:!0,configurable:!0}),e.prototype.hasStickyChanged=function(){var t=this._hasStickyChanged;return this._hasStickyChanged=!1,t},e.prototype.resetStickyChanged=function(){this._hasStickyChanged=!1},e}(t)}var d=function(t){this.template=t},p=function(t){this.template=t},y=function(t){this.template=t},_=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._stickyEnd=!1,e}return Object(r.c)(e,t),Object.defineProperty(e.prototype,"name",{get:function(){return this._name},set:function(t){t&&(this._name=t,this.cssClassFriendlyName=t.replace(/[^a-z0-9_-]/gi,"-"))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"stickyEnd",{get:function(){return this._stickyEnd},set:function(t){var e=this._stickyEnd;this._stickyEnd=Object(i.c)(t),this._hasStickyChanged=e!==this._stickyEnd},enumerable:!0,configurable:!0}),e}(h(function(){})),m=function(t,e){e.nativeElement.classList.add("cdk-column-"+t.cssClassFriendlyName)},w=function(t){function e(e,n){return t.call(this,e,n)||this}return Object(r.c)(e,t),e}(m),g=function(t){function e(e,n){return t.call(this,e,n)||this}return Object(r.c)(e,t),e}(m),R=function(t){function e(e,n){return t.call(this,e,n)||this}return Object(r.c)(e,t),e}(m),b=function(){function t(t,e){this.template=t,this._differs=e}return t.prototype.ngOnChanges=function(t){if(!this._columnsDiffer){var e=t.columns&&t.columns.currentValue||[];this._columnsDiffer=this._differs.find(e).create(),this._columnsDiffer.diff(e)}},t.prototype.getColumnsDiff=function(){return this._columnsDiffer.diff(this.columns)},t.prototype.extractCellTemplate=function(t){return this instanceof v?t.headerCell.template:this instanceof S?t.footerCell.template:t.cell.template},t}(),v=function(t){function e(e,n){return t.call(this,e,n)||this}return Object(r.c)(e,t),e.prototype.ngOnChanges=function(e){t.prototype.ngOnChanges.call(this,e)},e}(h(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(r.c)(e,t),e}(b))),S=function(t){function e(e,n){return t.call(this,e,n)||this}return Object(r.c)(e,t),e.prototype.ngOnChanges=function(e){t.prototype.ngOnChanges.call(this,e)},e}(h(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(r.c)(e,t),e}(b))),D=function(t){function e(e,n){return t.call(this,e,n)||this}return Object(r.c)(e,t),e}(b),C=function(){function t(e){this._viewContainer=e,t.mostRecentCellOutlet=this}return t.prototype.ngOnDestroy=function(){t.mostRecentCellOutlet===this&&(t.mostRecentCellOutlet=null)},t.mostRecentCellOutlet=null,t}(),k=function(){},O=function(){},j=function(){},x=["top","bottom","left","right"],E=function(){function t(t,e,n,r){void 0===r&&(r=!0),this.isNativeHtmlTable=t,this.stickCellCss=e,this.direction=n,this._isBrowser=r}return t.prototype.clearStickyPositioning=function(t,e){for(var n=0,r=t;n<r.length;n++){var i=r[n];if(i.nodeType===i.ELEMENT_NODE){this._removeStickyStyle(i,e);for(var o=0;o<i.children.length;o++)this._removeStickyStyle(i.children[o],e)}}},t.prototype.updateStickyColumns=function(t,e,n){var r=e.some(function(t){return t})||n.some(function(t){return t});if(t.length&&r&&this._isBrowser)for(var i=t[0],o=i.children.length,a=this._getCellWidths(i),s=this._getStickyStartColumnPositions(a,e),c=this._getStickyEndColumnPositions(a,n),l="rtl"===this.direction,u=0,f=t;u<f.length;u++)for(var h=f[u],d=0;d<o;d++){var p=h.children[d];e[d]&&this._addStickyStyle(p,l?"right":"left",s[d]),n[d]&&this._addStickyStyle(p,l?"left":"right",c[d])}},t.prototype.stickRows=function(t,e,n){if(this._isBrowser)for(var r="bottom"===n?t.reverse():t,i=0,o=0;o<r.length;o++)if(e[o]){var a=r[o];if(this.isNativeHtmlTable)for(var s=0;s<a.children.length;s++)this._addStickyStyle(a.children[s],n,i);else this._addStickyStyle(a,n,i);if(o===r.length-1)return;i+=a.getBoundingClientRect().height}},t.prototype.updateStickyFooterContainer=function(t,e){if(this.isNativeHtmlTable){var n=t.querySelector("tfoot");e.some(function(t){return!t})?this._removeStickyStyle(n,["bottom"]):this._addStickyStyle(n,"bottom",0)}},t.prototype._removeStickyStyle=function(t,e){for(var n=0,r=e;n<r.length;n++)t.style[r[n]]="";t.style.zIndex=this._getCalculatedZIndex(t),x.some(function(e){return!!t.style[e]})||(t.style.position="",t.classList.remove(this.stickCellCss))},t.prototype._addStickyStyle=function(t,e,n){t.classList.add(this.stickCellCss),t.style[e]=n+"px",t.style.cssText+="position: -webkit-sticky; position: sticky; ",t.style.zIndex=this._getCalculatedZIndex(t)},t.prototype._getCalculatedZIndex=function(t){for(var e={top:100,bottom:10,left:1,right:1},n=0,r=0,i=x;r<i.length;r++){var o=i[r];t.style[o]&&(n+=e[o])}return n?""+n:""},t.prototype._getCellWidths=function(t){for(var e=[],n=t.children,r=0;r<n.length;r++)e.push(n[r].getBoundingClientRect().width);return e},t.prototype._getStickyStartColumnPositions=function(t,e){for(var n=[],r=0,i=0;i<t.length;i++)e[i]&&(n[i]=r,r+=t[i]);return n},t.prototype._getStickyEndColumnPositions=function(t,e){for(var n=[],r=0,i=t.length;i>0;i--)e[i]&&(n[i]=r,r+=t[i]);return n},t}(),F=function(t,e){this.viewContainer=t,this.elementRef=e},T=function(t,e){this.viewContainer=t,this.elementRef=e},N=function(t,e){this.viewContainer=t,this.elementRef=e},I=function(){function t(t,e,n,r,i,o,a){this._differs=t,this._changeDetectorRef=e,this._elementRef=n,this._dir=i,this._platform=a,this._onDestroy=new s.a,this._columnDefsByName=new Map,this._customColumnDefs=new Set,this._customRowDefs=new Set,this._customHeaderRowDefs=new Set,this._customFooterRowDefs=new Set,this._headerRowDefChanged=!0,this._footerRowDefChanged=!0,this._cachedRenderRowsMap=new Map,this.stickyCssClass="cdk-table-sticky",this._multiTemplateDataRows=!1,this.viewChange=new c.a({start:0,end:Number.MAX_VALUE}),r||this._elementRef.nativeElement.setAttribute("role","grid"),this._document=o,this._isNativeHtmlTable="TABLE"===this._elementRef.nativeElement.nodeName}return Object.defineProperty(t.prototype,"trackBy",{get:function(){return this._trackByFn},set:function(t){Object(o.Da)()&&null!=t&&"function"!=typeof t&&console&&console.warn&&console.warn("trackBy must be a function, but received "+JSON.stringify(t)+"."),this._trackByFn=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"dataSource",{get:function(){return this._dataSource},set:function(t){this._dataSource!==t&&this._switchDataSource(t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"multiTemplateDataRows",{get:function(){return this._multiTemplateDataRows},set:function(t){this._multiTemplateDataRows=Object(i.c)(t),this._rowOutlet.viewContainer.length&&this._forceRenderDataRows()},enumerable:!0,configurable:!0}),t.prototype.ngOnInit=function(){var t=this;this._setupStickyStyler(),this._isNativeHtmlTable&&this._applyNativeTableSections(),this._dataDiffer=this._differs.find([]).create(function(e,n){return t.trackBy?t.trackBy(n.dataIndex,n.data):n})},t.prototype.ngAfterContentChecked=function(){if(this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&!this._rowDefs.length)throw Error("Missing definitions for header, footer, and row; cannot determine which columns should be rendered.");this._renderUpdatedColumns(),this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription&&this._observeRenderChanges(),this._checkStickyStates()},t.prototype.ngOnDestroy=function(){this._rowOutlet.viewContainer.clear(),this._headerRowOutlet.viewContainer.clear(),this._footerRowOutlet.viewContainer.clear(),this._cachedRenderRowsMap.clear(),this._onDestroy.next(),this._onDestroy.complete(),this.dataSource instanceof a.b&&this.dataSource.disconnect(this)},t.prototype.renderRows=function(){var t=this;this._renderRows=this._getAllRenderRows();var e=this._dataDiffer.diff(this._renderRows);if(e){var n=this._rowOutlet.viewContainer;e.forEachOperation(function(e,r,i){if(null==e.previousIndex)t._insertRow(e.item,i);else if(null==i)n.remove(r);else{var o=n.get(r);n.move(o,i)}}),this._updateRowIndexContext(),e.forEachIdentityChange(function(t){n.get(t.currentIndex).context.$implicit=t.item.data}),this.updateStickyColumnStyles()}},t.prototype.setHeaderRowDef=function(t){this._customHeaderRowDefs=new Set([t]),this._headerRowDefChanged=!0},t.prototype.setFooterRowDef=function(t){this._customFooterRowDefs=new Set([t]),this._footerRowDefChanged=!0},t.prototype.addColumnDef=function(t){this._customColumnDefs.add(t)},t.prototype.removeColumnDef=function(t){this._customColumnDefs.delete(t)},t.prototype.addRowDef=function(t){this._customRowDefs.add(t)},t.prototype.removeRowDef=function(t){this._customRowDefs.delete(t)},t.prototype.addHeaderRowDef=function(t){this._customHeaderRowDefs.add(t),this._headerRowDefChanged=!0},t.prototype.removeHeaderRowDef=function(t){this._customHeaderRowDefs.delete(t),this._headerRowDefChanged=!0},t.prototype.addFooterRowDef=function(t){this._customFooterRowDefs.add(t),this._footerRowDefChanged=!0},t.prototype.removeFooterRowDef=function(t){this._customFooterRowDefs.delete(t),this._footerRowDefChanged=!0},t.prototype.updateStickyHeaderRowStyles=function(){var t=this._getRenderedRows(this._headerRowOutlet);this._stickyStyler.clearStickyPositioning(t,["top"]);var e=this._headerRowDefs.map(function(t){return t.sticky});this._stickyStyler.stickRows(t,e,"top"),this._headerRowDefs.forEach(function(t){return t.resetStickyChanged()})},t.prototype.updateStickyFooterRowStyles=function(){var t=this._getRenderedRows(this._footerRowOutlet);this._stickyStyler.clearStickyPositioning(t,["bottom"]);var e=this._footerRowDefs.map(function(t){return t.sticky});this._stickyStyler.stickRows(t,e,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,e),this._footerRowDefs.forEach(function(t){return t.resetStickyChanged()})},t.prototype.updateStickyColumnStyles=function(){var t=this,e=this._getRenderedRows(this._headerRowOutlet),n=this._getRenderedRows(this._rowOutlet),r=this._getRenderedRows(this._footerRowOutlet);this._stickyStyler.clearStickyPositioning(e.concat(n,r),["left","right"]),e.forEach(function(e,n){t._addStickyColumnStyles([e],t._headerRowDefs[n])}),this._rowDefs.forEach(function(e){for(var r=[],i=0;i<n.length;i++)t._renderRows[i].rowDef===e&&r.push(n[i]);t._addStickyColumnStyles(r,e)}),r.forEach(function(e,n){t._addStickyColumnStyles([e],t._footerRowDefs[n])}),Array.from(this._columnDefsByName.values()).forEach(function(t){return t.resetStickyChanged()})},t.prototype._getAllRenderRows=function(){var t=[],e=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(var n=0;n<this._data.length;n++){var r=this._data[n],i=this._getRenderRowsForData(r,n,e.get(r));this._cachedRenderRowsMap.has(r)||this._cachedRenderRowsMap.set(r,new WeakMap);for(var o=0;o<i.length;o++){var a=i[o],s=this._cachedRenderRowsMap.get(a.data);s.has(a.rowDef)?s.get(a.rowDef).push(a):s.set(a.rowDef,[a]),t.push(a)}}return t},t.prototype._getRenderRowsForData=function(t,e,n){return this._getRowDefs(t,e).map(function(r){var i=n&&n.has(r)?n.get(r):[];if(i.length){var o=i.shift();return o.dataIndex=e,o}return{data:t,rowDef:r,dataIndex:e}})},t.prototype._cacheColumnDefs=function(){var t=this;this._columnDefsByName.clear(),P(this._contentColumnDefs,this._customColumnDefs).forEach(function(e){if(t._columnDefsByName.has(e.name))throw Error('Duplicate column definition name provided: "'+e.name+'".');t._columnDefsByName.set(e.name,e)})},t.prototype._cacheRowDefs=function(){this._headerRowDefs=P(this._contentHeaderRowDefs,this._customHeaderRowDefs),this._footerRowDefs=P(this._contentFooterRowDefs,this._customFooterRowDefs),this._rowDefs=P(this._contentRowDefs,this._customRowDefs);var t=this._rowDefs.filter(function(t){return!t.when});if(!this.multiTemplateDataRows&&t.length>1)throw Error("There can only be one default row without a when predicate function.");this._defaultRowDef=t[0]},t.prototype._renderUpdatedColumns=function(){var t=function(t,e){return t||!!e.getColumnsDiff()};this._rowDefs.reduce(t,!1)&&this._forceRenderDataRows(),this._headerRowDefs.reduce(t,!1)&&this._forceRenderHeaderRows(),this._footerRowDefs.reduce(t,!1)&&this._forceRenderFooterRows()},t.prototype._switchDataSource=function(t){this._data=[],this.dataSource instanceof a.b&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),t||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear()),this._dataSource=t},t.prototype._observeRenderChanges=function(){var t=this;if(this.dataSource){var e;if(this.dataSource.connect instanceof Function?e=this.dataSource.connect(this):this.dataSource instanceof l.a?e=this.dataSource:Array.isArray(this.dataSource)&&(e=Object(u.a)(this.dataSource)),void 0===e)throw Error("Provided data source did not match an array, Observable, or DataSource");this._renderChangeSubscription=e.pipe(Object(f.a)(this._onDestroy)).subscribe(function(e){t._data=e||[],t.renderRows()})}},t.prototype._forceRenderHeaderRows=function(){var t=this;this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach(function(e,n){return t._renderRow(t._headerRowOutlet,e,n)}),this.updateStickyHeaderRowStyles(),this.updateStickyColumnStyles()},t.prototype._forceRenderFooterRows=function(){var t=this;this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach(function(e,n){return t._renderRow(t._footerRowOutlet,e,n)}),this.updateStickyFooterRowStyles(),this.updateStickyColumnStyles()},t.prototype._addStickyColumnStyles=function(t,e){var n=this,r=Array.from(e.columns||[]).map(function(t){return n._columnDefsByName.get(t)}),i=r.map(function(t){return t.sticky}),o=r.map(function(t){return t.stickyEnd});this._stickyStyler.updateStickyColumns(t,i,o)},t.prototype._getRenderedRows=function(t){for(var e=[],n=0;n<t.viewContainer.length;n++){var r=t.viewContainer.get(n);e.push(r.rootNodes[0])}return e},t.prototype._getRowDefs=function(t,e){if(1==this._rowDefs.length)return[this._rowDefs[0]];var n=[];if(this.multiTemplateDataRows)n=this._rowDefs.filter(function(n){return!n.when||n.when(e,t)});else{var r=this._rowDefs.find(function(n){return n.when&&n.when(e,t)})||this._defaultRowDef;r&&n.push(r)}if(!n.length)throw function(t){return Error("Could not find a matching row definition for theprovided row data: "+JSON.stringify(t))}(t);return n},t.prototype._insertRow=function(t,e){this._renderRow(this._rowOutlet,t.rowDef,e,{$implicit:t.data})},t.prototype._renderRow=function(t,e,n,r){void 0===r&&(r={}),t.viewContainer.createEmbeddedView(e.template,r,n);for(var i=0,o=this._getCellTemplates(e);i<o.length;i++)C.mostRecentCellOutlet&&C.mostRecentCellOutlet._viewContainer.createEmbeddedView(o[i],r);this._changeDetectorRef.markForCheck()},t.prototype._updateRowIndexContext=function(){for(var t=this._rowOutlet.viewContainer,e=0,n=t.length;e<n;e++){var r=t.get(e).context;r.count=n,r.first=0===e,r.last=e===n-1,r.even=e%2==0,r.odd=!r.even,this.multiTemplateDataRows?(r.dataIndex=this._renderRows[e].dataIndex,r.renderIndex=e):r.index=this._renderRows[e].dataIndex}},t.prototype._getCellTemplates=function(t){var e=this;return t&&t.columns?Array.from(t.columns,function(n){var r=e._columnDefsByName.get(n);if(!r)throw Error('Could not find column with id "'+n+'".');return t.extractCellTemplate(r)}):[]},t.prototype._applyNativeTableSections=function(){for(var t=0,e=[{tag:"thead",outlet:this._headerRowOutlet},{tag:"tbody",outlet:this._rowOutlet},{tag:"tfoot",outlet:this._footerRowOutlet}];t<e.length;t++){var n=e[t],r=(this._document||document).createElement(n.tag);r.appendChild(n.outlet.elementRef.nativeElement),this._elementRef.nativeElement.appendChild(r)}},t.prototype._forceRenderDataRows=function(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows(),this.updateStickyColumnStyles()},t.prototype._checkStickyStates=function(){var t=function(t,e){return t||e.hasStickyChanged()};this._headerRowDefs.reduce(t,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(t,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(t,!1)&&this.updateStickyColumnStyles()},t.prototype._setupStickyStyler=function(){var t=this;this._stickyStyler=new E(this._isNativeHtmlTable,this.stickyCssClass,this._dir?this._dir.value:"ltr",!this._platform||this._platform.isBrowser),(this._dir?this._dir.change:Object(u.a)()).pipe(Object(f.a)(this._onDestroy)).subscribe(function(e){t._stickyStyler.direction=e,t.updateStickyColumnStyles()})},t}();function P(t,e){return t.toArray().concat(Array.from(e))}var B=function(){}}}]);