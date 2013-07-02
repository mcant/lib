/*
 * E.g. read_cookie("name")
 */

function read_cookie(name){
	var cookie_value = '';
	var search = name + '=';
	if(document.cookie.length > 0) {
		offset = document.cookie.indexOf(search);
		if (offset != -1){
			offset += search.length;
			end = document.cookie.indexOf(';', offset);
		if (end == -1) end = document.cookie.length;
			cookie_value = unescape(document.cookie.substring(offset, end))
		}
	} 
	return cookie_value;
}

/*
 * E.g. new_cookie("name", "value", 24)
 */

function new_cookie(name, value, hours){
	if(readCookie(name) == '') {
		var expire = '';
		if(hours != null){
			expire = new Date((new Date()).getTime() + hours * 3600000);
			expire = '; expires=' + expire.toGMTString();
		}
		document.cookie = name + '=' + escape(value) + expire;
	}
}