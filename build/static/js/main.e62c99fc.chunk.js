(this["webpackJsonpfinancial-dashboard"]=this["webpackJsonpfinancial-dashboard"]||[]).push([[0],{37:function(e,t,n){!function(e){"use strict";var t=function(){return(t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function n(e,r){var o=t({},e);for(var i in r)"object"!=typeof e[i]||null===e[i]||Array.isArray(e[i])?void 0!==r[i]&&(o[i]=r[i]):o[i]=n(e[i],r[i]);return o}var r={mobile:{disabled_features:["left_toolbar","header_widget","timeframes_toolbar","edit_buttons_in_legend","context_menus","control_bar","border_around_the_chart"],enabled_features:[]}},o={width:800,height:500,interval:"1D",timezone:"Etc/UTC",container_id:"",library_path:"",locale:"en",widgetbar:{details:!1,watchlist:!1,watchlist_settings:{default_symbols:[]}},overrides:{"mainSeriesProperties.showCountdown":!1,"mainSeriesProperties.style":2},studies_overrides:{},trading_customization:{position:{},order:{}},brokerConfig:{configFlags:{}},fullscreen:!1,autosize:!1,disabled_features:[],enabled_features:[],debug:!1,logo:{},time_frames:[{text:"5y",resolution:"1W"},{text:"1y",resolution:"1W"},{text:"6m",resolution:"120"},{text:"3m",resolution:"60"},{text:"1m",resolution:"30"},{text:"5d",resolution:"5"},{text:"1d",resolution:"1"}],client_id:"0",user_id:"0",charts_storage_api_version:"1.0",favorites:{intervals:[],chartTypes:[]}};function i(){return"16.000 (internal id df1e6a68 @ 2020-07-17 13:51:54.948951)"}var a=function(){function e(e){if(this._id="tradingview_"+(1048576*(1+Math.random())|0).toString(16).substring(1),this._ready=!1,this._readyHandlers=[],this._onWindowResize=this._autoResizeChart.bind(this),!e.datafeed)throw new Error("Datafeed is not defined");if(this._options=n(o,e),e.preset){var t=r[e.preset];t?(void 0!==this._options.disabled_features?this._options.disabled_features=this._options.disabled_features.concat(t.disabled_features):this._options.disabled_features=t.disabled_features,void 0!==this._options.enabled_features?this._options.enabled_features=this._options.enabled_features.concat(t.enabled_features):this._options.enabled_features=t.enabled_features):console.warn("Unknown preset: `"+e.preset+"`")}"Dark"===this._options.theme&&void 0===this._options.loading_screen&&(this._options.loading_screen={backgroundColor:"#131722"}),this._create()}return e.prototype.onChartReady=function(e){this._ready?e.call(this):this._readyHandlers.push(e)},e.prototype.headerReady=function(){var e=this;return this._innerWindowLoaded.then((function(){return e._innerWindow().headerReady()}))},e.prototype.onGrayedObjectClicked=function(e){this._innerAPI().onGrayedObjectClicked(e)},e.prototype.onShortcut=function(e,t){this._innerWindow().createShortcutAction(e,t)},e.prototype.subscribe=function(e,t){this._innerAPI().subscribe(e,t)},e.prototype.unsubscribe=function(e,t){this._innerAPI().unsubscribe(e,t)},e.prototype.chart=function(e){return this._innerAPI().chart(e)},e.prototype.setLanguage=function(e){this.remove(),this._options.locale=e,this._create()},e.prototype.setSymbol=function(e,t,n){this._innerAPI().changeSymbol(e,t,n)},e.prototype.remove=function(){window.removeEventListener("resize",this._onWindowResize),this._readyHandlers.splice(0,this._readyHandlers.length),delete window[this._id],this._iFrame.parentNode&&this._iFrame.parentNode.removeChild(this._iFrame)},e.prototype.closePopupsAndDialogs=function(){this._innerAPI().closePopupsAndDialogs()},e.prototype.selectLineTool=function(e){this._innerAPI().selectLineTool(e)},e.prototype.selectedLineTool=function(){return this._innerAPI().selectedLineTool()},e.prototype.save=function(e){this._innerAPI().saveChart(e)},e.prototype.load=function(e,t){this._innerAPI().loadChart({json:e,extendedData:t})},e.prototype.getSavedCharts=function(e){this._innerAPI().getSavedCharts(e)},e.prototype.loadChartFromServer=function(e){this._innerAPI().loadChartFromServer(e)},e.prototype.saveChartToServer=function(e,t,n){this._innerAPI().saveChartToServer(e,t,n)},e.prototype.removeChartFromServer=function(e,t){this._innerAPI().removeChartFromServer(e,t)},e.prototype.onContextMenu=function(e){this._innerAPI().onContextMenu(e)},e.prototype.createButton=function(e){return this._innerWindow().createButton(e)},e.prototype.showNoticeDialog=function(e){this._innerAPI().showNoticeDialog(e)},e.prototype.showConfirmDialog=function(e){this._innerAPI().showConfirmDialog(e)},e.prototype.showLoadChartDialog=function(){this._innerAPI().showLoadChartDialog()},e.prototype.showSaveAsChartDialog=function(){this._innerAPI().showSaveAsChartDialog()},e.prototype.symbolInterval=function(){return this._innerAPI().getSymbolInterval()},e.prototype.mainSeriesPriceFormatter=function(){return this._innerAPI().mainSeriesPriceFormatter()},e.prototype.getIntervals=function(){return this._innerAPI().getIntervals()},e.prototype.getStudiesList=function(){return this._innerAPI().getStudiesList()},e.prototype.addCustomCSSFile=function(e){this._innerWindow().addCustomCSSFile(e)},e.prototype.applyOverrides=function(e){this._options=n(this._options,{overrides:e}),this._innerWindow().applyOverrides(e)},e.prototype.applyStudiesOverrides=function(e){this._innerWindow().applyStudiesOverrides(e)},e.prototype.watchList=function(){return this._innerAPI().watchlist()},e.prototype.activeChart=function(){return this._innerAPI().activeChart()},e.prototype.chartsCount=function(){return this._innerAPI().chartsCount()},e.prototype.layout=function(){return this._innerAPI().layout()},e.prototype.setLayout=function(e){this._innerAPI().setLayout(e)},e.prototype.layoutName=function(){return this._innerAPI().layoutName()},e.prototype.changeTheme=function(e,t){this._innerWindow().changeTheme(e,t)},e.prototype.getTheme=function(){return this._innerWindow().getTheme()},e.prototype.takeScreenshot=function(){this._innerAPI().takeScreenshot()},e.prototype.lockAllDrawingTools=function(){return this._innerAPI().lockAllDrawingTools()},e.prototype.hideAllDrawingTools=function(){return this._innerAPI().hideAllDrawingTools()},e.prototype.drawOnAllCharts=function(e){this._innerAPI().drawOnAllCharts(e)},e.prototype.magnetEnabled=function(){return this._innerAPI().magnetEnabled()},e.prototype.magnetMode=function(){return this._innerAPI().magnetMode()},e.prototype.undoRedoState=function(){return this._innerAPI().undoRedoState()},e.prototype.setIntervalLinkingEnabled=function(e){this._innerAPI().setIntervalLinkingEnabled(e)},e.prototype.setTimeFrame=function(e){this._innerAPI().setTimeFrame(e)},e.prototype.symbolSync=function(){return this._innerAPI().symbolSync()},e.prototype.intervalSync=function(){return this._innerAPI().intervalSync()},e.prototype.crosshairSync=function(){return this._innerAPI().crosshairSync()},e.prototype.timeSync=function(){return this._innerAPI().timeSync()},e.prototype._innerAPI=function(){return this._innerWindow().tradingViewApi},e.prototype._innerWindow=function(){return this._iFrame.contentWindow},e.prototype._autoResizeChart=function(){this._options.fullscreen&&(this._iFrame.style.height=window.innerHeight+"px")},e.prototype._create=function(){var e=this,t=this._render(),n=document.getElementById(this._options.container_id);if(null===n)throw new Error("There is no such element - #"+this._options.container_id);n.innerHTML=t,this._iFrame=n.querySelector("#"+this._id);var r=this._iFrame;(this._options.autosize||this._options.fullscreen)&&(r.style.width="100%",this._options.fullscreen||(r.style.height="100%")),window.addEventListener("resize",this._onWindowResize),this._onWindowResize(),this._innerWindowLoaded=new Promise((function(e){r.addEventListener("load",(function t(){r.removeEventListener("load",t,!1),e()}),!1)})),this._innerWindowLoaded.then((function(){e._innerWindow().widgetReady((function(){e._ready=!0;for(var t=0,n=e._readyHandlers;t<n.length;t++){var r=n[t];try{r.call(e)}catch(e){console.error(e)}}e._innerWindow().initializationFinished()}))}))},e.prototype._render=function(){var e=window;if(e[this._id]={datafeed:this._options.datafeed,customFormatters:this._options.custom_formatters||this._options.customFormatters,brokerFactory:this._options.broker_factory||this._options.brokerFactory,overrides:this._options.overrides,studiesOverrides:this._options.studies_overrides,tradingCustomization:this._options.trading_customization,disabledFeatures:this._options.disabled_features,enabledFeatures:this._options.enabled_features,brokerConfig:this._options.broker_config||this._options.brokerConfig,restConfig:this._options.restConfig,favorites:this._options.favorites,logo:this._options.logo,numeric_formatting:this._options.numeric_formatting,rss_news_feed:this._options.rss_news_feed,newsProvider:this._options.news_provider,loadLastChart:this._options.load_last_chart,saveLoadAdapter:this._options.save_load_adapter,loading_screen:this._options.loading_screen,settingsAdapter:this._options.settings_adapter,getCustomIndicators:this._options.custom_indicators_getter},this._options.saved_data)e[this._id].chartContent={json:this._options.saved_data};else if(!Boolean(this._options.symbol))throw new Error("Symbol is not defined");var t=(this._options.library_path||"")+"static/"+encodeURIComponent(this._options.locale)+"-tv-chart.df1e6a6876536645d8cf.html#symbol="+encodeURIComponent(this._options.symbol||"")+"&interval="+encodeURIComponent(this._options.interval)+(this._options.timeframe?"&timeframe="+encodeURIComponent(this._options.timeframe):"")+(this._options.toolbar_bg?"&toolbarbg="+encodeURIComponent(this._options.toolbar_bg.replace("#","")):"")+(this._options.studies_access?"&studiesAccess="+encodeURIComponent(JSON.stringify(this._options.studies_access)):"")+"&widgetbar="+encodeURIComponent(JSON.stringify(this._options.widgetbar))+(this._options.drawings_access?"&drawingsAccess="+encodeURIComponent(JSON.stringify(this._options.drawings_access)):"")+"&timeFrames="+encodeURIComponent(JSON.stringify(this._options.time_frames))+"&locale="+encodeURIComponent(this._options.locale)+"&uid="+encodeURIComponent(this._id)+"&clientId="+encodeURIComponent(String(this._options.client_id))+"&userId="+encodeURIComponent(String(this._options.user_id))+(this._options.charts_storage_url?"&chartsStorageUrl="+encodeURIComponent(this._options.charts_storage_url):"")+(this._options.charts_storage_api_version?"&chartsStorageVer="+encodeURIComponent(this._options.charts_storage_api_version):"")+(this._options.custom_css_url?"&customCSS="+encodeURIComponent(this._options.custom_css_url):"")+(this._options.auto_save_delay?"&autoSaveDelay="+encodeURIComponent(String(this._options.auto_save_delay)):"")+"&debug="+encodeURIComponent(String(this._options.debug))+(this._options.snapshot_url?"&snapshotUrl="+encodeURIComponent(this._options.snapshot_url):"")+(this._options.timezone?"&timezone="+encodeURIComponent(this._options.timezone):"")+(this._options.study_count_limit?"&studyCountLimit="+encodeURIComponent(String(this._options.study_count_limit)):"")+(this._options.symbol_search_request_delay?"&ssreqdelay="+encodeURIComponent(String(this._options.symbol_search_request_delay)):"")+(this._options.theme?"&theme="+encodeURIComponent(String(this._options.theme)):"");return'<iframe id="'+this._id+'" name="'+this._id+'"  src="'+t+'"'+(this._options.autosize||this._options.fullscreen?"":' width="'+this._options.width+'" height="'+this._options.height+'"')+' frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen style="display:block;"></iframe>'},e}();window.TradingView=window.TradingView||{},window.TradingView.version=i,e.version=i,e.widget=a,Object.defineProperty(e,"__esModule",{value:!0})}(t)},39:function(e,t,n){e.exports=n(70)},67:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(13),a=n.n(i),s=(n(44),n(28)),l=n(8),c=n(9),u=n(11),d=n(10),p=n(3),h=n(27),m=n(38),f="Dyvol",_="http://dynamicvol.com/wp-content/uploads/2020/07/FullColor_TransparentBg_1280x1024_72dpi-5-1-768x696.png",g=[{text:"Signals",icon:"k-i-inbox",children:null,route:"/"},{text:"Contract History",icon:"k-i-bell",children:null,route:"/contract_history"},{text:"Price Delta",icon:"k-i-calendar",children:null,route:"/price_delta"},{text:"Term Structure",icon:"k-i-hyperlink-email",children:null,route:"/term_structure"},{text:"Risk Spreads",icon:"k-i-star-outline",children:null,route:"/risk_spreads"},{text:"Fair Value",icon:"k-i-globe",children:null,route:"/fair_value"}],b=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={expanded:!0,selectedId:g.findIndex((function(e){return!0===e.selected}))},e.handleClick=function(){e.setState((function(e){return{expanded:!e.expanded}}))},e.onSelect=function(t){e.setState({selectedId:t.itemIndex,expanded:!0}),e.props.history.push(t.itemTarget.props.route)},e.setSelectedItem=function(e){var t=g.find((function(t){return t.route===e}));if(t.text)return t.text},e.drawerProps={position:"start",mode:"push",mini:!0},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.setSelectedItem(this.props.location.pathname);return o.a.createElement("div",null,o.a.createElement("div",{className:"header"},o.a.createElement("h1",null,o.a.createElement("span",null,o.a.createElement(m.a,{icon:"menu",look:"flat",onClick:this.handleClick}),o.a.createElement("span",{className:"title"},"DynamicVol",o.a.createElement("span",{className:"divider"},"| Market GPS"),o.a.createElement("span",{className:"fund"}))),o.a.createElement("img",{alt:f,src:_}))),o.a.createElement(h.a,Object.assign({expanded:this.state.expanded,items:g.map((function(t){return Object(s.a)(Object(s.a)({},t),{},{selected:t.text===e})}))},this.drawerProps,{onSelect:this.onSelect}),o.a.createElement(h.b,null,this.props.children)))}}]),n}(o.a.Component),y=Object(p.f)(b),v=n(19),C=n(15);n(64),n(65),n(66);var x=JSON.parse(function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.responseText}("http://18.216.242.3/dyvolmaster"));Object.keys(x[0]).filter((function(e){return"index"!==e})).forEach((function(e){x.forEach((function(t){t.index=new Date(t.index),t[e]=Number(Number(t[e]).toFixed(3)),t.time=t.index.getTime()/1e3}))}));var A=n(16);function w(e,t){var n=[{headerName:"Date",field:"index",type:["dateColumn","nonEditableColumn"],valueFormatter:G,enablePivot:!0}];return Object.keys(x[0]).filter((function(e){return"index"!==e})).slice(e,t).forEach((function(e){n=[].concat(Object(v.a)(n),[{headerName:e,field:e,aggFunc:"sum",enablePivot:!0}])})),n}var S=w(0,6),O=w(7,17),D=w(18,35),I=w(36,57),E=w(58,80),R=w(81,101),P=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).onGridReady=function(e){r.gridApi=e.api,r.gridColumnApi=e.columnApi},r.processChartOptions=function(e){var t=e.options,n=function(e){return e.value.value&&e.value.value.toLocaleDateString?e.value.value.toLocaleDateString():e.value};return t.seriesDefaults.tooltip.renderer=function(e){var t=e.datum[e.xKey];return t&&t.toLocaleDateString?t.toLocaleDateString():null},["line"].indexOf(e.type)<0?t.xAxis&&t.yAxis&&(t.xAxis.label.formatter=n,t.yAxis.label.formatter=n):(t.xAxis.type="time",t.xAxis.label.format="%d %B"),t},r.state={gridOptions:{enableCharts:!0,enableRangeSelection:!0,rowGroup:!0,navigator:{enabled:!0},columnDefs:O,rowData:x,defaultColDef:{sortable:!0,editable:!1,filter:"agTextColumnFilter",floatingFilter:!0,resizable:!0},defaultColGroupDef:{marryChildren:!0},autoGroupColumnDef:{minWidth:250},sideBar:"columns",columnTypes:{numberColumn:{filter:"agNumberColumnFilter"},nonEditableColumn:{editable:!1},dateColumn:{filter:"agDateColumnFilter",filterParams:{}}}}},r}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"ag-theme-balham",style:{height:"400px"}},o.a.createElement(C.AgGridReact,{gridOptions:this.state.gridOptions,onGridReady:this.onGridReady,modules:A.AllModules,sideBar:!0,processChartOptions:this.processChartOptions}))}}]),n}(r.Component),k=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).onGridReady=function(e){r.gridApi=e.api,r.gridColumnApi=e.columnApi},r.processChartOptions=function(e){var t=e.options,n=function(e){return e.value.value&&e.value.value.toLocaleDateString?e.value.value.toLocaleDateString():e.value};return t.seriesDefaults.tooltip.renderer=function(e){var t=e.datum[e.xKey];return t&&t.toLocaleDateString?t.toLocaleDateString():null},["line"].indexOf(e.type)<0?t.xAxis&&t.yAxis&&(t.xAxis.label.formatter=n,t.yAxis.label.formatter=n):(t.xAxis.type="time",t.xAxis.label.format="%d %B"),t},r.state={gridOptions:{enableCharts:!0,enableRangeSelection:!0,rowGroup:!0,navigator:{enabled:!0},columnDefs:D,rowData:x,defaultColDef:{sortable:!0,editable:!1,filter:"agTextColumnFilter",floatingFilter:!0,resizable:!0},defaultColGroupDef:{marryChildren:!0},autoGroupColumnDef:{minWidth:250},sideBar:"columns",columnTypes:{numberColumn:{filter:"agNumberColumnFilter"},nonEditableColumn:{editable:!1},dateColumn:{filter:"agDateColumnFilter",filterParams:{}}}}},r}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"ag-theme-balham",style:{height:"400px"}},o.a.createElement(C.AgGridReact,{gridOptions:this.state.gridOptions,onGridReady:this.onGridReady,modules:A.AllModules,sideBar:!0,processChartOptions:this.processChartOptions}))}}]),n}(r.Component),F=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).onGridReady=function(e){r.gridApi=e.api,r.gridColumnApi=e.columnApi},r.processChartOptions=function(e){var t=e.options,n=function(e){return e.value.value&&e.value.value.toLocaleDateString?e.value.value.toLocaleDateString():e.value};return t.seriesDefaults.tooltip.renderer=function(e){var t=e.datum[e.xKey];return t&&t.toLocaleDateString?t.toLocaleDateString():null},["line"].indexOf(e.type)<0?t.xAxis&&t.yAxis&&(t.xAxis.label.formatter=n,t.yAxis.label.formatter=n):(t.xAxis.type="time",t.xAxis.label.format="%d %B"),t},r.state={gridOptions:{enableCharts:!0,enableRangeSelection:!0,rowGroup:!0,navigator:{enabled:!0},columnDefs:R,rowData:x,defaultColDef:{sortable:!0,editable:!1,filter:"agTextColumnFilter",floatingFilter:!0,resizable:!0},defaultColGroupDef:{marryChildren:!0},autoGroupColumnDef:{minWidth:250},sideBar:"columns",columnTypes:{numberColumn:{filter:"agNumberColumnFilter"},nonEditableColumn:{editable:!1},dateColumn:{filter:"agDateColumnFilter",filterParams:{}}}}},r}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"ag-theme-balham",style:{height:"400px"}},o.a.createElement(C.AgGridReact,{gridOptions:this.state.gridOptions,onGridReady:this.onGridReady,modules:A.AllModules,sideBar:!0,processChartOptions:this.processChartOptions}))}}]),n}(r.Component),L=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).onGridReady=function(e){r.gridApi=e.api,r.gridColumnApi=e.columnApi},r.processChartOptions=function(e){var t=e.options,n=function(e){return e.value.value&&e.value.value.toLocaleDateString?e.value.value.toLocaleDateString():e.value};return t.seriesDefaults.tooltip.renderer=function(e){var t=e.datum[e.xKey];return t&&t.toLocaleDateString?t.toLocaleDateString():null},["line"].indexOf(e.type)<0?t.xAxis&&t.yAxis&&(t.xAxis.label.formatter=n,t.yAxis.label.formatter=n):(t.xAxis.type="time",t.xAxis.label.format="%d %B"),t},r.state={gridOptions:{enableCharts:!0,enableRangeSelection:!0,rowGroup:!0,navigator:{enabled:!0},columnDefs:I,rowData:x,defaultColDef:{sortable:!0,editable:!1,filter:"agTextColumnFilter",floatingFilter:!0,resizable:!0},defaultColGroupDef:{marryChildren:!0},autoGroupColumnDef:{minWidth:250},sideBar:"columns",columnTypes:{numberColumn:{filter:"agNumberColumnFilter"},nonEditableColumn:{editable:!1},dateColumn:{filter:"agDateColumnFilter",filterParams:{}}}}},r}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"ag-theme-balham",style:{height:"400px"}},o.a.createElement(C.AgGridReact,{gridOptions:this.state.gridOptions,onGridReady:this.onGridReady,modules:A.AllModules,sideBar:!0,processChartOptions:this.processChartOptions}))}}]),n}(r.Component),j=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).onGridReady=function(e){r.gridApi=e.api,r.gridColumnApi=e.columnApi},r.processChartOptions=function(e){var t=e.options,n=function(e){return e.value.value&&e.value.value.toLocaleDateString?e.value.value.toLocaleDateString():e.value};return t.seriesDefaults.tooltip.renderer=function(e){var t=e.datum[e.xKey];return t&&t.toLocaleDateString?t.toLocaleDateString():null},["line"].indexOf(e.type)<0?t.xAxis&&t.yAxis&&(t.xAxis.label.formatter=n,t.yAxis.label.formatter=n):(t.xAxis.type="time",t.xAxis.label.format="%d %B"),t},r.state={gridOptions:{enableCharts:!0,enableRangeSelection:!0,rowGroup:!0,navigator:{enabled:!0},columnDefs:E,rowData:x,defaultColDef:{sortable:!0,editable:!1,filter:"agTextColumnFilter",floatingFilter:!0,resizable:!0},defaultColGroupDef:{marryChildren:!0},autoGroupColumnDef:{minWidth:250},sideBar:"columns",columnTypes:{numberColumn:{filter:"agNumberColumnFilter"},nonEditableColumn:{editable:!1},dateColumn:{filter:"agDateColumnFilter",filterParams:{}}}}},r}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"ag-theme-balham",style:{height:"400px"}},o.a.createElement(C.AgGridReact,{gridOptions:this.state.gridOptions,onGridReady:this.onGridReady,modules:A.AllModules,sideBar:!0,processChartOptions:this.processChartOptions}))}}]),n}(r.Component),T=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).onGridReady=function(e){r.gridApi=e.api,r.gridColumnApi=e.columnApi},r.onFirstDataRendered=function(e){e.api.sizeColumnsToFit()},r.processChartOptions=function(e){var t=e.options,n=function(e){return e.value.value&&e.value.value.toLocaleDateString?e.value.value.toLocaleDateString():e.value};return t.seriesDefaults.tooltip.renderer=function(e){var t=e.datum[e.xKey];return t&&t.toLocaleDateString?t.toLocaleDateString():null},["line"].indexOf(e.type)<0?t.xAxis&&t.yAxis&&(t.xAxis.label.formatter=n,t.yAxis.label.formatter=n):(t.xAxis.type="time",t.xAxis.label.format="%d %B"),t},r.state={gridOptions:{enableCharts:!0,enableRangeSelection:!0,rowGroup:!0,navigator:{enabled:!0},columnDefs:S,rowData:x,defaultColDef:{sortable:!0,editable:!1,filter:"agTextColumnFilter",floatingFilter:!0,resizable:!0},defaultColGroupDef:{marryChildren:!0},autoGroupColumnDef:{minWidth:250},sideBar:"columns",columnTypes:{numberColumn:{filter:"agNumberColumnFilter"},nonEditableColumn:{editable:!1},dateColumn:{filter:"agDateColumnFilter",filterParams:{}}}}},r}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"ag-theme-balham",style:{height:"400px"}},o.a.createElement(C.AgGridReact,{gridOptions:this.state.gridOptions,onGridReady:this.onGridReady,onFirstDataRendered:this.onFirstDataRendered.bind(this),modules:A.AllModules,sideBar:!0,processChartOptions:this.processChartOptions}))}}]),n}(r.Component);function G(e){var t=e.value.toISOString().split("T")[0].split("-");return t[1]+"/"+t[2]+"/"+t[0]}n(67);var N=n(37),W=n(12),B=n.n(W),U=n(18),z=x,M={supported_resolutions:["1D"]};function V(){return H.apply(this,arguments)}function H(){return(H=Object(U.a)(B.a.mark((function e(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",z);case 4:throw e.prev=4,e.t0=e.catch(0),new Error("request error: ".concat(e.t0.status));case 7:case"end":return e.stop()}}),e,null,[[0,4]])})))).apply(this,arguments)}function J(){return q.apply(this,arguments)}function q(){return(q=Object(U.a)(B.a.mark((function e(){var t;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],Object.keys(z[0]).forEach((function(e){t=[].concat(Object(v.a)(t),[{description:e.replace("_","").replaceAll("_"," "),exchange:"",full_name:e.replace("_","").replaceAll("_"," "),full_name2:e,symbol:e.replace("_","").replaceAll("_"," "),type:"ALT"}])})),e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var K={onReady:function(e){console.log("[onReady]: Method call"),setTimeout((function(){return e(M)}))},searchSymbols:function(){var e=Object(U.a)(B.a.mark((function e(t,n,r,o){var i,a;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("[searchSymbols]: Method call"),e.next=3,J();case 3:i=e.sent,a=i.filter((function(e){var r=""===n||e.exchange===n,o=-1!==e.full_name.toLowerCase().indexOf(t.toLowerCase());return r&&o})),o(a);case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,o){return e.apply(this,arguments)}}(),resolveSymbol:function(){var e=Object(U.a)(B.a.mark((function e(t,n,r){var o,i,a;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("[resolveSymbol]: Method call",t),e.next=3,J();case 3:if(o=e.sent,i=o.find((function(e){return e.full_name===t.replace("_","").replaceAll("_"," ")}))){e.next=9;break}return console.log("[resolveSymbol]: Cannot resolve symbol",t.replace("_","").replaceAll("_"," ")),r("cannot resolve symbol"),e.abrupt("return");case 9:a={name:i.symbol,name2:i.full_name2,description:i.description,type:i.type,exchange:i.exchange,supported_resolutions:M.supported_resolutions},console.log("[resolveSymbol]: Symbol resolved",a),n(a);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),getBars:function(){var e=Object(U.a)(B.a.mark((function e(t,n,r,o,i,a,s){var l,c,u;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("[getBars]: Method call",t,n,r,o),e.prev=1,e.next=4,V();case 4:if(!(l=e.sent).Response||"Error"!==l.Response){e.next=8;break}return i([],{noData:!0}),e.abrupt("return");case 8:c=[],u=t.name2,l.forEach((function(e){e.time>=r&&e.time<o&&(c=[].concat(Object(v.a)(c),[{time:e.index,low:e[u],high:e[u],open:e[u],close:e[u]}]))})),console.log("[getBars]: returned ".concat(c.length," bar(s)")),i(c,{noData:!1}),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(1),console.log("[getBars]: Get error",e.t0),a(e.t0);case 19:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t,n,r,o,i,a,s){return e.apply(this,arguments)}}(),subscribeBars:function(e,t,n,r,o){console.log("[subscribeBars]: Method call with subscribeUID:",r)},unsubscribeBars:function(e){console.log("[unsubscribeBars]: Method call with subscriberUID:",e)}};function X(){var e=new RegExp("[\\?&]lang=([^&#]*)").exec(window.location.search);return null===e?null:decodeURIComponent(e[1].replace(/\+/g," "))}var Q=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).tvWidget=null,e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e={symbol:this.props.symbol,datafeed:this.props.datafeed,interval:this.props.interval,container_id:this.props.containerId,library_path:this.props.libraryPath,locale:X()||"en",disabled_features:["use_localstorage_for_settings"],enabled_features:["study_templates"],charts_storage_url:this.props.chartsStorageUrl,charts_storage_api_version:this.props.chartsStorageApiVersion,client_id:this.props.clientId,user_id:this.props.userId,fullscreen:this.props.fullscreen,autosize:this.props.autosize,load_last_chart:this.props.load_last_chart},t=new N.widget(e);this.tvWidget=t,t.onChartReady((function(){t.subscribe("onAutoSaveNeeded",(function(){t.saveChartToServer((function(e){console.log("Got chart save")}))})),t.headerReady().then((function(){var e=t.createButton();e.setAttribute("title","Click to show a notification popup"),e.classList.add("apply-common-tooltip"),e.addEventListener("click",(function(){return t.showNoticeDialog({title:"Notification",body:"TradingView Charting Library API works correctly",callback:function(){console.log("Noticed!")}})})),e.innerHTML="Check API"}))}))}},{key:"componentWillUnmount",value:function(){null!==this.tvWidget&&(this.tvWidget.remove(),this.tvWidget=null)}},{key:"render",value:function(){return r.createElement("div",{id:this.props.containerId,className:"TVChartContainer"})}}]),n}(r.PureComponent);function Y(){return o.a.createElement("div",{className:"panels"},o.a.createElement("div",null,o.a.createElement(Q,null)),o.a.createElement("div",null,o.a.createElement(T,null)))}function Z(){return o.a.createElement("div",{className:"panels"},o.a.createElement("div",null,o.a.createElement(Q,null)),o.a.createElement("div",null,o.a.createElement(P,null)))}function $(){return o.a.createElement("div",{className:"panels"},o.a.createElement("div",null,o.a.createElement(Q,null)),o.a.createElement("div",null,o.a.createElement(k,null)))}function ee(){return o.a.createElement("div",{className:"panels"},o.a.createElement("div",null,o.a.createElement(Q,null)),o.a.createElement("div",null,o.a.createElement(j,null)))}function te(){return o.a.createElement("div",{className:"panels"},o.a.createElement("div",null,o.a.createElement(Q,null)),o.a.createElement("div",null,o.a.createElement(L,null)))}function ne(){return o.a.createElement("div",{className:"panels"},o.a.createElement("div",null,o.a.createElement(Q,null)),o.a.createElement("div",null,o.a.createElement(F,null)))}Q.defaultProps={symbol:"_VIX/VXV",interval:"D",containerId:"tv_chart_container",datafeed:K,libraryPath:"/charting_library/",chartsStorageUrl:"http://ec2-18-222-179-255.us-east-2.compute.amazonaws.com",chartsStorageApiVersion:"1.1",clientId:"Option-i",userId:"RylandCapital",fullscreen:!1,autosize:!0,studiesOverrides:{},load_last_chart:!0};var re=n(24);n(69);var oe=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(re.a,null,o.a.createElement(y,null,o.a.createElement(p.c,null,o.a.createElement(p.a,{exact:!0,path:"/",component:Y}),o.a.createElement(p.a,{exact:!0,path:"/contract_history",component:Z}),o.a.createElement(p.a,{exact:!0,path:"/price_delta",component:$}),o.a.createElement(p.a,{exact:!0,path:"/term_structure",component:te}),o.a.createElement(p.a,{exact:!0,path:"/risk_spreads",component:ee}),o.a.createElement(p.a,{exact:!0,path:"/fair_value",component:ne})))))};a.a.render(o.a.createElement(oe,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.e62c99fc.chunk.js.map