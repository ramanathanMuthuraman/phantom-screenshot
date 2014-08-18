/**
 * Screen Difference 
 * 
*/
var ScreenDiff =  new function(){
    var that=this;
    this.init = function(){
        // Register event listeners
			$("#inputFormSubmit").click(this.getURL);
    };
    this.getURL = function(){
        var url = $.trim($("#inputFormGetURL").val());
        var options={
            method:"GET",
            data: {"url":url},
            url:"screenshot"
        };
        var promise = that.synch(options);
        promise.then(function(){
            console.log("new")
        });
    };
    this.synch = function(options)
    {
        return $.ajax({
            url:options.url,
            method:options.method,
             data:options.data
        });
    };
};

$(document).ready(function(){

    ScreenDiff.init();
});

