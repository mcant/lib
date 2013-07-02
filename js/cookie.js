/*
 * E.g. readCookie("name")
 */

function readCookie(name){
	var valueCookie = '';
	var search = name + '=';
	if(document.cookie.length > 0) {
		offset = document.cookie.indexOf(search);
		if (offset != -1){
			offset += search.length;
			end = document.cookie.indexOf(';', offset);
		if (end == -1) end = document.cookie.length;
			valueCookie = unescape(document.cookie.substring(offset, end))
		}
	} 
	return valueCookie;
}

/*
 * E.g. newCookie("name", "value", 24)
 */

function newCookie(name, value, hours){
	if(readCookie(name) == '') {
		var expire = '';
		if(hours != null){
			expire = new Date((new Date()).getTime() + hours * 3600000);
			expire = '; expires=' + expire.toGMTString();
		}
		document.cookie = name + '=' + escape(value) + expire;
	}
}