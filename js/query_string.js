/*
 * E.g. in http://www.domain.com?q=0 use 
 * query_string('q')
 * will	return: 0
 */

function query_string(param){
	param = param.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var rgx_s = "[\\?&]" + param + "=([^&#]*)";
	var rgx = new RegExp(rgx_s);
	var results = rgx.exec(window.location.search);
	if(results == null)
		return "";
	else
		return decodeURIComponent(results[1].replace(/\+/g, " "));
}
