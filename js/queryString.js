/*
 * E.g. in http://www.domain.com?q=0 use 
 * query_string('q')
 * will	return: 0
 */

function queryString(p){
	p = p.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var rgx = "[\\?&]" + param + "=([^&#]*)";
	var re = new RegExp(rgx);
	var results = re.exec(window.location.search);
	if(results == null)
		return "";
	else
		return decodeURIComponent(results[1].replace(/\+/g, " "));
}
