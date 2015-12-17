$(function(){
	var gotolink;
	$("#alertBox").hide();
	$("#loadingBox").hide();
	$("#result").hide();
	$("#btn-search").on("click",function(){
		$("#loadingBox").show();
	var search = $("#searchbar").val();
//ganti key dengan key milikmu sendiri, mau keymu sendiri contact me line,twitter,ig : @bill_xcode 
	var data = search.split(" ");
	var query="";
	gotolink="";
	for(var k=0;k<data.length;k++){
		query += data[k]+"%20";
	}
	var $link = "http://api.lyricsnmusic.com/songs?api_key=66a64a0f23b81549f5ba07c87058cf&q="+query;
		$.post("server/getLyrics.php",{'url':$link},function(data,success){		
			try{
			var obj = JSON.parse('{"lyrics":'+data+'}');
				
				//var Myresult = obj.lyrics[1].artist.name+" - "+obj.lyrics[1].title+"<br>"+obj.lyrics[1].snippet+"<br>"+obj.lyrics[1].url;
				$("#title-artist").html(obj.lyrics[1].artist.name+" - "+obj.lyrics[1].title);
				$("#snippet-lirik").html(obj.lyrics[1].snippet);
				gotolink=obj.lyrics[1].url;
				$("#result-box").html("Serching Done");
			}catch(err){
				$("#loadingBox").hide();
				$("#result-box").html("Error Server");
				$("#alertBox").show();
			}
			$("#loadingBox").hide();
			$("#alertBox").show();
			$("#result").show();
		});
	});
	$("#confirm-button").on("click",function(){
		$("#alertBox").hide();
	});
	$("#goto-link").on("click",function(){
		window.location=gotolink;
	});
	$("#btn-exit").on("click",function(){
		navigator.app.exitApp();
	});
});	