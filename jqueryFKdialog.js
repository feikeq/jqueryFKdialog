(function($){
	var __INFO__ = {
		plug:'jqueryFKdialog',
		version:'1.0.1',
		author:'Feikeq'
	};
	var defaults = {
		title:"",
		tips:"",
		txt:null,
	    ok: '确定',
	    cancel: "",
	    callback:function() {},
	    htmls:`<div id="jquery_fk_dialog_mask" style="background:rgba(0,0,0,0.3);width:100%;height:100%;position:fixed;top:0;left:0;z-index:2147483647">
				<div id="jqurey_fk_dialog_main" style="background:#dedede;left:50%;top:50%;position:absolute;transform:translate(-50%,-50%);border-radius:10px;overflow:hidden;min-width:270px">
				  	<h1 id="jqfkdialog_title" style="text-align:center;font-size:22px;padding:10px 0 0 0;magring:10px 5px">弹窗标题</h1>
				  	<div id="jqfkdialog_tips" style="font-size:18px;margin:0 17px;padding:0 0 20px 0">弹窗内容</div>
					<p style="margin:5px 20px">
						<input id="jqfkdialog_txt" type="text" style="border-radius:5px;width:100%;line-height:30px;font-size:20px;border:0px">
					</p>
					<div id="jqfkdialog_button" style="border-top:1px solid #b8b8b8;display:flex;justify-content:space-around;">
						<a href="javascript:;" style="color:#007aff;font-weight:bold;display:inline-block;height:44px;line-height:44px;text-align:center;text-decoration:none;width:100%">按钮</a>
						<a href="javascript:;" style="color:#007aff;font-weight:bold;display:inline-block;height:44px;line-height:44px;text-align:center;text-decoration:none;width:100%;border-left: 1px solid #b8b8b8" >按钮</a>
					</div>
				</div>
			</div>`
	};

	$.fn[__INFO__.plug] = $[__INFO__.plug] = function (options) {
        var settings = $.extend({}, defaults, options); 
        var $el = this;

        //初始化
		var initDOM = function(conf){
			if(conf) settings = $.extend({},settings,conf);
			//获取元素
			var $mask = $(settings.htmls).appendTo(document.body);

			var $main = $mask.children("#jqurey_fk_dialog_main");
			var $title = $main.children("#jqfkdialog_title");
			var $tips = $main.children("#jqfkdialog_tips");
			var $txt = $main.find("#jqfkdialog_txt");
			var $ok = $main.find("#jqfkdialog_button a:first");
			var $cancel = $main.find("#jqfkdialog_button a:last");

			// console.log($ok);

			//赋值
			$title.html(settings.title);
			$tips.html(settings.tips);
			if(settings.txt === null){
				$txt.hide();
			}else{
				$txt.val(settings.txt).focus();
			}
			
			$ok.html(settings.ok);
			if(settings.cancel){
				$cancel.html(settings.cancel);
			}else{
				$cancel.hide();
			}

			$main.find("#jqfkdialog_button a").bind("touchstart click",function(e){
				
				e.preventDefault();
				e.stopPropagation();
				var res = {result:$(this).text(),type:e.type};
				if(settings.txt !== null) res.texts = $txt.val();

				if(settings.callback) settings.callback(res);
				$mask.remove();

			}).hover(function(){
				$(this).css("background","#d2d2d2");
			}, function(){
				$(this).css("background","transparent");
			});
			


		    
			
		};


		
        if($.isFunction($el)) initDOM(); 

		// 绑定元素的点击事件呼出弹出窗
		$el.bind("touchstart click",function(e){
			//如果用 $el.on 报错 是因为 $el 不是个JQuery对象是个方法
			// 可以用 $el.bind 或在 if($.isFunction($el)) 里加上 $el=$('<i/>'); 把它为成一个jQuery对象
			e.preventDefault();
			e.stopPropagation();
			initDOM();
		}); 

		 


		$el.showFKDialog = function(options){
			
			initDOM(options);
		};


		
        return $el;

	};

  

})(jQuery);
