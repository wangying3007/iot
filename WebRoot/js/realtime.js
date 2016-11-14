// 原common js
//通用 解析URL参数，返回参数关联数组
function urlArgs() {
    var args = {};
    var query = location.search.substring(1); // 过滤掉'?'
    var pairs = query.split("&");//以&符号拆分
    for(var i = 0; i < pairs.length; i++)
    {
        var pos = pairs[i].indexOf('=');
        if (pos == -1)
             continue;
        var name = pairs[i].substring(0,pos);
        var value = pairs[i].substring(pos+1);
        value = decodeURIComponent(value);
        args[name] = value; 
    }
    return args;
}


// 实时页面 选择节点号，刷新页面
function clickNode(){
	$('.nodelist li').removeClass('active');
	$(this).addClass('active');
	var nodeId = $(this).children().text();
	$('#node_id').val(nodeId);
	refreshByNodeclick(nodeId);
	
}
//实时页面 选择折线图数据源 类型
function clickType(){
	$('.typelist li').removeClass('active');
	$(this).addClass('active');
}
//实时页面 根据URL参数更新页面节点号
function updatePara(){
	var paras = urlArgs();
	var nodeId = paras["node_id"];
	if(nodeId){
		$('.nodelist li span:contains("'+nodeId+'")').parent().addClass('active');
		$('#node_id').val(nodeId);
	}else{//若没有则初始化为第一个

		$('.nodelist').children().eq(0).addClass('active');
	}
	var type = paras["type"];
	if(type){
		$('.typelist li.active').addClass('active');
	}else{//若没有则初始化为第一个
		$('.typelist').children().eq(0).addClass('active');
	}
}
//添加或修改参数，刷新页面
function refreshByNodeclick(nodeId){
	var cursearch = location.search;
	var pattern = /node_id=\d+/;
	if(cursearch.length==0){//添加或修改参数，刷新页面
		//参数列表为空
		location.search = "?node_id="+nodeId;
	}else if(pattern.test(cursearch)){
		//已有参数 替代
		location.search = cursearch.replace(pattern,"node_id="+nodeId);
	}else{
		//有参数但没有page参数
		location.search = cursearch+"&node_id="+nodeId;
	}
}


// pageCenter.js
// 修改网站名
function webName(){
    var ologo = document.getElementsByClassName("logo");
    var oname = ologo[0].getElementsByTagName('a');
   
    if(document.body.clientWidth >= 600)
    {
        oname[0].innerHTML = " 农业物联云平台——HaiCloud物联云用户终端系统 ";
    }
    else
    {
        oname[0].innerHTML = " 农业物联云平台——<br>HaiCloud物联云用户终端系统 ";
    }
}

function getNowFormatDate() {
	
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    // document.getElementById('datetime1').innerHTML = currentdate;
    return currentdate;
   
}

//实时数据及历史数据页面sidebar高度调整
function AdjustColumnsHeight() {
    var sideCol = window.document.getElementById('sidebar');
    var mainCol = window.document.getElementsByClassName('content')[0];
 
    var hsideCol = sideCol.offsetHeight;
    var hmainCol = mainCol.offsetHeight;
 
    // var maxHeight = Math.max( hsideCol , hmainCol)-40;
    var maxHeight = hmainCol-40;
    // console.log(document.body.clientWidth);
    if(document.body.clientWidth >= 800)
        sideCol.style.height = maxHeight + 'px';
    // else
    //     {sideCol.style.height =  55+ 'px';}
    // console.log(sideCol.style.height);
    // else if(document.body.clientWidth < 800)
    else
    {
        // var header = document.getElementsByClassName('header')[0];
        var logo = document.getElementsByClassName('logo')[0];
        // header.style.marginLeft = (document.body.clientWidth/2 - 150)+"px";
        logo.style.marginLeft = (document.body.clientWidth/2 - 170)+"px";
        // logo.style.marginLeft = 0+"px";
        // console.log(document.body.clientWidth/2);
        // console.log(logo.style.marginLeft);
        // console.log(logo.style.marginLeft);

    }
}

function CheckboxAll(){
    // console.log("check");
    var AcheckboxContainer = document.getElementsByClassName('checkboxContainer')[0];
    var Ainput = new Array(); 
    Ainput = AcheckboxContainer.getElementsByTagName('input');
    // console.log(Ainput);
    if(Ainput[0].checked==true)
    {
        for(i=0;i<Ainput.length;i++)
        {
            Ainput[i].checked=true;
        }

    }
    else
    {
        for(i=0;i<Ainput.length;i++)
        {
            Ainput[i].checked=false;
        } 
    }

}

function CheckboxSub(){
    var AcheckboxContainer = document.getElementsByClassName('checkboxContainer')[0];
    var Ainput = new Array(); 
    Ainput = AcheckboxContainer.getElementsByTagName('input'); 
    for(i=1;i<Ainput.length;i++)  
    {
        if(Ainput[i].checked==false)
        {
            Ainput[0].checked=false;
            break;
        }
    } 
}
window.onresize=function(){ 
    if(document.body.clientWidth<=800 && document.body.clientWidth>750)
        location=location;
        // console.log(111);
};
