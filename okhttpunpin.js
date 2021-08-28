Java.perform(function(){
	var client = Java.use("com.squareup.okhttp.OkHttpClient");
	
	client.setCertificatePinner.implementation = function(v){
		
		return this;
	};
	
});
