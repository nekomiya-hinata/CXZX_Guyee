"use strict";
var DemoList = function () {

    var initPage = function (that) {
        
        $("#files").change(function(){
		    $("#dispimg").attr("src",URL.createObjectURL($(this)[0].files[0]));
		});
        
        $("#btn_reset").on('click',reset);
        $("#btn_submit").on('click',quickSearchByBytes);
        
     	function reset() {
    		$('#searchForm')[0].reset();
    		$("#dispimg").attr("src",ctx+"/static/image/noimg.jpg");
    		$("#placeid").empty();
		};
		
		function formatRepo(object) {
            var markup = "<div class='select2-result-repository clearfix'>" +
            "<div class='select2-result-repository'>" +
            "<div class='select2-result-repository__title'>" + object.text + "</div>";
            	markup += "<div class='select2-result-repository__statistics'>" +
            "<div class='select2-result-repository__forks'>地址: </span> " + object.desc + " </div>" +
            "</div>" +
            "</div></div>";
            return markup;
        };
        
        function formatRepoSelection(repo) {
        	return repo.name;
        };
        
        $('#placeid').select2({
			placeholder : "最近出现场所",
			language:'zh-CN',
			allowClear : true,
			templateResult: formatRepo,
			escapeMarkup: function(markup) {
	                return markup;
	        },
			ajax : {
				url : ctx + "/gov/place/list",
				dataType : 'json',
				method : 'GET',
				delay: 250,
				data : function(params){
                    return {
                    	search_LIKE_name : params.term,
                    }
                },
				cache : true,
				processResults : function(data, page) {
					var result = [];
					$.each(data.data, function(index, val) {
						var parsedWordArray = CryptoJS.enc.Base64.parse(this);
	                	var msg = parsedWordArray.toString(CryptoJS.enc.Utf8);
	                	var st=JSON.parse(msg);
						result.push({
							'id' : st.id,
							'text' : st.name,
							'desc' : st.address==null?"场所地址信息":st.address
						});
					});
					return {
						results : result
					};
				}
			}
		});
        
        $('.form_datetime').datepicker({
			language : 'zh-CN',
			autoclose : false,
			todayBtn : true,
			format : 'yyyy-mm-dd',
		});

        $.extend($.fn.dataTable.defaults, {
			"searching" : false,
			"ordering" : false,
			"filter" : false,
			"info" : true,
			"paging" : true,
			"lengthChange" : false,
			"processing" : true,
			"lengthMenu" : [ 10 ],
			"pageLength": 24
		});
        
        /*注册handlebars模板*/
        var template = Handlebars.compile($("#template-stranger").html());
		this.datatable = $('#table').DataTable({
				"serverSide" : true,
				responsive: true,
	            searchDelay: 500,
	            /*"language": Lang.datatable,*/
	            "language" : {"url" : ctx+ "/static/resource/dataTables.zh_CN.txt"},
				"ajax" : {
					"url": ctx + "/gov/stranger/searchSimilarityList",
					"type" : "GET",
					"data": function (params) {
						if($("#msryid").val()!=null && $("#msryid").val()!=""){
	                    	 var words = CryptoJS.enc.Utf8.parse($("#msryid").val());
	                     	 var msryid = CryptoJS.enc.Base64.stringify(words);
	                     	 params.msryid = msryid;
	                    };
	                    if($("#placeid").val()!=null && $("#placeid").val()!=""){
	                    	 var words = CryptoJS.enc.Utf8.parse($("#placeid").val());
	                     	 var placeid = CryptoJS.enc.Base64.stringify(words);
	                     	 params.placeid = placeid;
	                    };
	                    if($("#msryids").val()!=null && $("#msryids").val()!=""){
	                    	 var words = CryptoJS.enc.Utf8.parse($("#placeid").val());
	                     	 var msryids = CryptoJS.enc.Base64.stringify(words);
	                     	 params.msryids = msryids;
	                    };
	                    params.sdate = $("#sdate").val();
	                	params.edate = $("#edate").val();
	                	
						/*params.msryid = $("#msryid").val();
	                	params.placeid = $("#placeid").val();
	                	params.sdate = $("#sdate").val();
	                	params.edate = $("#edate").val();
	                	params.msryids = $("#msryids").val()==null?"":$("#msryids").val();*/
	                    return params;
	                }
				},
	           "fnDrawCallback" : function() {
					this.api().column(0).nodes().each(
							function(cell, i) {
								cell.innerHTML = i + 1;
					});
					
					/*将数据封装成json对象*/
					 var array=[];
					 this.api().data().each( function (d) {
						 var parsedWordArray = CryptoJS.enc.Base64.parse(d);
		                 var msg = parsedWordArray.toString(CryptoJS.enc.Utf8);
		                 var result=JSON.parse(msg);
				  		 array.push(result);
				  	  });
					 /*将json对象用刚刚注册的Handlebars模板封装，得到最终的html，插入到table中。*/
				    $('#strangerlist').html(template(array));
					$('#table').parent().hide();
					$('#table').parent().prev().hide();
				},
				"columns" : [{"data" : null,"title" : "序号","width" : "30px","className" : "text-center dt-nowrap","visible": false}]
		});
		
        function quickSearchByBytes() {
        	$("#msryids").val("");
        	if($("#files")[0].files[0]==null){
				query();
			}else{
				form_helpers.parsley($('#searchForm'));
	            $('#searchForm').ajaxSubmit({
	         		url :ctx + "/gov/stranger/quickSearchByBytes",
	    			dataType : 'text',
	    			type : 'POST',
	    			beforeSubmit : function(formData, form, options) {
	    				form_helpers.blockUI($('#searchForm'));
	    			},
	    			error : function(data, textStatus, errorThrown) {
	    				form_helpers.unblockUI($('#searchForm'));
	    			},
	    			success : function(data) {
	    				form_helpers.unblockUI($('#searchForm'));
	    				$("#msryids").val(data.length==0?"0":data);
	    				query();
	    			}
	         	 });
			}
        }
        
        function query(){
        	DemoList.refresh();
        }
        
    };

    var initData = function () {

    }


    return {
        init: function () {
            initPage.apply(this);
            initData.apply(this);
        },
        refresh: function () {
        	$("#table").dataTable().api().ajax.reload();
        },
        view: function (arg) {
            window.open(ctx + "/gov/librarystaff/info?id=" + arg);
        }
    };

}();
jQuery(document).ready(function () {
    DemoList.init();
});