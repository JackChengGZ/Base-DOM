
//手机端响应式设计rem
(function(doc,win){
    var docEl = doc.documentElement,
            resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
            recalc = function() {
                var clientWidth = docEl.clientWidth;//视口可视区域的宽度
                if(!clientWidth)return;
                if( clientWidth >= 640 ){
                    var clientWidth = 640;
                }
                docEl.style.fontSize = clientWidth/32 + "px";
                //alert(docEl.style.fontSize);
                console.log(docEl.style.fontSize);
            };
    if(!doc.addEventListener)return;
	
    win.addEventListener(resizeEvt,recalc,false);
    doc.addEventListener("DOMContentLoaded",recalc,false);
})(document,window);
