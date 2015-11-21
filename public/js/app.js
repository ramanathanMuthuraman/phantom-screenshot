/**
 * Screen Difference 
 * 
*/
var ScreenDiff =  new function(){
    var that=this;
    this.init = function(){
        // Register event listeners
			$("#inputFormSubmit").click(this.getURL);
			$("#inputFormGetURL").on('keydown',$.proxy( this.triggerOnKeydownEvent,this ));
			$("#clear").click(this.clearInput);
    };
    this.triggerOnKeydownEvent = function(e){
      if(e.keyCode === 13){
          this.getURL();
      }  
    };
    this.clearInput = function(){
      $("#inputFormGetURL").val('').focus();  
    };
    this.getURL = function(){
        var url = $.trim($("#inputFormGetURL").val());
        if(url){
        var options={
            method:"GET",
            data: {"url":url},
            url:"screenshot"
        };
         $("#htmlScreenshot")
         .addClass("drop-zone progress-zone").removeClass("complete-zone failed-zone invalid-zone").find("img").attr("src","");
        that.synch(options);
        }
        else{
            $("#htmlScreenshot").addClass("drop-zone invalid-zone").removeClass("complete-zone failed-zone progress-zone").find("img").attr("src","")
        }
      
    };
    this.synch = function(options)
    {
        return $.ajax({
            url:options.url,
            method:options.method,
             data:options.data,
            success:function(response){
                $("#htmlScreenshot")
                .removeClass("drop-zone progress-zone invalid-zone").addClass("complete-zone").find("img").attr("src","/result/"+response);
            },
            error:function(){
             $("#htmlScreenshot").addClass("drop-zone failed-zone").removeClass("progress-zone invalid-zone").find("img").attr("src","");
        }
        });
    };
};

$(document).ready(function(){

    ScreenDiff.init();
});

