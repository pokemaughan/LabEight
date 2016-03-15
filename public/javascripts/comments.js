$(document).ready(function(){
    $("#serialize").click(function(){
        var myobj = {Name:$("#Name").val(),Comment:$("#Comment").val()};
        jobj = JSON.stringify(myobj);
        $("#json").text(jobj);
	
	var url = "comment";
	$.ajax({
  	url:url,
  	type: "POST",
  	data: jobj,
  	contentType: "application/json; charset=utf-8",
  	success: function(data,textStatus) {
      	$("#done").html(textStatus);
  	}
	})
    });

    $("#getThem").click(function() {
        $.getJSON('comment', function(data) {
        console.log(data);
        var everything = "<ul>";
        for(var comment in data) {
          com = data[comment];
          everything += "<li>Name: " + com.Name + "   --Comment: " + com.Comment + "</li>";
        }
        everything += "</ul>";
        $("#comments").html(everything);
      	})
    })

  $("#searcher").click(function() {
	//console.log("clicked");
	$.getJSON('comment',function(data) {
	var retStr = "<ul>";
	//console.log("This is the data"+data);
	var findMe = $("#Search").val();
	//console.log("val: "+findMe);
	for(var compare in data) {
	  com = data[compare];
	  //console.log("com is "+com);
	  if(findMe==com.Name)
		retStr+="<li>Name: "+com.Name + "   --Comment: " + com.Comment + "</li>";
	}
	retStr +="</ul>";
	$("#searching").html(retStr);
	})
  })
	
});



