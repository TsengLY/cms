!function(a,b,c,d){function e(c,d){this.w=a(b),this.el=a(c),this.options=a.extend({},k,d),this.init()}var f="ontouchstart"in b,g=function(){var a=c.createElement("div"),d=c.documentElement;if(!("pointerEvents"in a.style))return!1;a.style.pointerEvents="auto",a.style.pointerEvents="x",d.appendChild(a);var e=b.getComputedStyle&&"auto"===b.getComputedStyle(a,"").pointerEvents;return d.removeChild(a),!!e}(),h=f?"touchstart":"mousedown",i=f?"touchmove":"mousemove",j=f?"touchend":"mouseup";eCancel=f?"touchcancel":"mouseup";var k={listNodeName:"ol",itemNodeName:"li",rootClass:"dd",listClass:"dd-list",itemClass:"dd-item",dragClass:"dd-dragel",handleClass:"dd-handle",collapsedClass:"dd-collapsed",placeClass:"dd-placeholder",emptyClass:"dd-empty",expandBtnHTML:'<i data-action="expand" class="icon-plus-sign-alt"></i>',collapseBtnHTML:'<i data-action="collapse" class="icon-minus-sign-alt"></i>',group:0,maxDepth:5,threshold:20,dragReverse:!1,dropCallback:null};e.prototype={init:function(){var c=this;c.reset(),c.el.data("nestable-group",this.options.group),c.placeEl=a('<div class="'+c.options.placeClass+'"/>'),a.each(this.el.find(c.options.itemNodeName),function(b,d){c.setParent(a(d))}),c.el.on("click","i",function(b){if(!c.dragEl&&(f||0===b.button)){var d=a(b.currentTarget),e=d.data("action"),g=d.parent(c.options.itemNodeName);"collapse"===e&&c.collapseItem(g),"expand"===e&&c.expandItem(g)}});var d=function(b){var d=a(b.target);d.hasClass(c.options.handleClass)||(d=d.parents("."+c.options.handleClass).first()),!d.length||c.dragEl||!f&&0!==b.button||f&&1!==b.touches.length||(b.preventDefault(),c.dragStart(f?b.touches[0]:b))},e=function(a){c.dragEl&&(a.preventDefault(),c.dragMove(f?a.touches[0]:a))},g=function(a){c.dragEl&&(a.preventDefault(),c.dragStop(f?a.touches[0]:a))};f?(c.el[0].addEventListener(h,d,!1),b.addEventListener(i,e,!1),b.addEventListener(j,g,!1),b.addEventListener(eCancel,g,!1)):(c.el.on(h,d),c.w.on(i,e),c.w.on(j,g))},serialize:function(){var b,c=0,d=this;return step=function(b,c){var e=[],f=b.children(d.options.itemNodeName);return f.each(function(){var b=a(this),f=a.extend({},b.data()),g=b.children(d.options.listNodeName);g.length&&(f.children=step(g,c+1)),e.push(f)}),e},b=step(d.el.find(d.options.listNodeName).first(),c)},serialise:function(){return this.serialize()},reset:function(){this.mouse={offsetX:0,offsetY:0,startX:0,startY:0,lastX:0,lastY:0,nowX:0,nowY:0,distX:0,distY:0,dirAx:0,dirX:0,dirY:0,lastDirX:0,lastDirY:0,distAxX:0,distAxY:0},this.moving=!1,this.dragEl=null,this.dragRootEl=null,this.dragDepth=0,this.hasNewRoot=!1,this.pointEl=null},expandItem:function(a){a.removeClass(this.options.collapsedClass),a.children('[data-action="expand"]').hide(),a.children('[data-action="collapse"]').show(),a.children(this.options.listNodeName).show()},collapseItem:function(a){var b=a.children(this.options.listNodeName);b.length&&(a.addClass(this.options.collapsedClass),a.children('[data-action="collapse"]').hide(),a.children('[data-action="expand"]').show(),a.children(this.options.listNodeName).hide())},expandAll:function(){var b=this;b.el.find(b.options.itemNodeName).each(function(){b.expandItem(a(this))})},collapseAll:function(){var b=this;b.el.find(b.options.itemNodeName).each(function(){b.collapseItem(a(this))})},setParent:function(b){b.children(this.options.listNodeName).length&&0==b.has("button").length&&(b.prepend(a(this.options.expandBtnHTML)),b.prepend(a(this.options.collapseBtnHTML))),b.children('[data-action="expand"]').hide()},unsetParent:function(a){a.removeClass(this.options.collapsedClass),a.children("[data-action]").remove(),a.children(this.options.listNodeName).remove()},dragStart:function(b){var e=this.mouse,f=a(b.target),g=f.parents(this.options.itemNodeName).first();if(this.placeEl.css("height",g.height()),e.offsetX=b.offsetX!==d?b.offsetX:b.pageX-f.offset().left,e.offsetY=b.offsetY!==d?b.offsetY:b.pageY-f.offset().top,this.options.dragReverse){var h=g.width()-f.outerWidth();e.offsetX=b.pageX-f.offset().left+h}e.startX=e.lastX=b.pageX,e.startY=e.lastY=b.pageY,this.dragRootEl=this.el,this.dragEl=a(c.createElement(this.options.listNodeName)).addClass(this.options.listClass+" "+this.options.dragClass),this.dragEl.css("width",g.width()),g.after(this.placeEl),g[0].parentNode.removeChild(g[0]),g.appendTo(this.dragEl),a(c.body).append(this.dragEl),this.dragEl.css({left:b.pageX-e.offsetX,top:b.pageY-e.offsetY});var i,j,k=this.dragEl.find(this.options.itemNodeName);for(i=0;i<k.length;i++)j=a(k[i]).parents(this.options.listNodeName).length,j>this.dragDepth&&(this.dragDepth=j)},dragStop:function(){var b=this.dragEl.children(this.options.itemNodeName).first();b[0].parentNode.removeChild(b[0]),this.placeEl.replaceWith(b),this.dragEl.remove(),this.el.trigger("reorder");var c=b.parent().parent(),d=null;null===c||c.is("."+this.options.rootClass)||(d=c.data("id")),a.isFunction(this.options.dropCallback)&&this.options.dropCallback.call(this,b.data("id"),d),this.hasNewRoot&&this.dragRootEl.trigger("reorder"),this.reset()},dragMove:function(b){var d,e,f,h,i,j=this.options,k=this.mouse;this.dragEl.css({left:b.pageX-k.offsetX,top:b.pageY-k.offsetY}),k.lastX=k.nowX,k.lastY=k.nowY,k.nowX=b.pageX,k.nowY=b.pageY,k.distX=k.nowX-k.lastX,k.distY=k.nowY-k.lastY,k.lastDirX=k.dirX,k.lastDirY=k.dirY,k.dirX=0===k.distX?0:k.distX>0?1:-1,k.dirY=0===k.distY?0:k.distY>0?1:-1;var l=Math.abs(k.distX)>Math.abs(k.distY)?1:0;if(!k.moving)return k.dirAx=l,k.moving=!0,void 0;k.dirAx!==l?(k.distAxX=0,k.distAxY=0):(k.distAxX+=Math.abs(k.distX),0!==k.dirX&&k.dirX!==k.lastDirX&&(k.distAxX=0),k.distAxY+=Math.abs(k.distY),0!==k.dirY&&k.dirY!==k.lastDirY&&(k.distAxY=0)),k.dirAx=l,k.dirAx&&k.distAxX>=j.threshold&&(k.distAxX=0,f=this.placeEl.prev(j.itemNodeName),k.distX>0&&f.length&&!f.hasClass(j.collapsedClass)&&(d=f.find(j.listNodeName).last(),i=this.placeEl.parents(j.listNodeName).length,i+this.dragDepth<=j.maxDepth&&(d.length?(d=f.children(j.listNodeName).last(),d.append(this.placeEl)):(d=a("<"+j.listNodeName+"/>").addClass(j.listClass),d.append(this.placeEl),f.append(d),this.setParent(f)))),k.distX<0&&(h=this.placeEl.next(j.itemNodeName),h.length||(e=this.placeEl.parent(),this.placeEl.parents(j.itemNodeName).first().after(this.placeEl),e.children().length||this.unsetParent(e.parent()))));var m=!1;if(g||(this.dragEl[0].style.visibility="hidden"),this.pointEl=a(c.elementFromPoint(b.pageX-c.body.scrollLeft,b.pageY-c.body.scrollTop)),g||(this.dragEl[0].style.visibility="visible"),this.pointEl.hasClass(j.handleClass)&&(this.pointEl=this.pointEl.parent(j.itemNodeName)),this.pointEl.hasClass(j.emptyClass))m=!0;else if(!this.pointEl.length||!this.pointEl.hasClass(j.itemClass))return;var n=this.pointEl.parents("."+j.rootClass).first(),o=this.dragRootEl.data("nestable-id")!==n.data("nestable-id");if(!k.dirAx||o||m){if(o&&j.group!==n.data("nestable-group"))return;i=this.dragDepth-1+this.pointEl.parents(j.listNodeName).length;var p=b.pageY<this.pointEl.offset().top+this.pointEl.height()/2;e=this.placeEl.parent(),m?(d=a(c.createElement(j.listNodeName)).addClass(j.listClass),d.append(this.placeEl),this.pointEl.replaceWith(d)):p?this.pointEl.before(this.placeEl):this.pointEl.after(this.placeEl),e.children().length||this.unsetParent(e.parent()),this.dragRootEl.find(j.itemNodeName).length||this.dragRootEl.append('<div class="'+j.emptyClass+'"/>'),o&&(this.hasNewRoot=!0,this.dragRootEl=n)}}},a.fn.nestable=function(b){var c=this,d=this;return c.each(function(){var c=a(this).data("nestable");c?"string"==typeof b&&"function"==typeof c[b]&&(d=c[b]()):(a(this).data("nestable",new e(this,b)),a(this).data("nestable-id",(new Date).getTime()))}),d||c}}(window.jQuery||window.Zepto,window,document);