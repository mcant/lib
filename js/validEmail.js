/*
* E.g. <input type="text" onchange="mail_validade(this.value)" name="email" />
*/

function mail_validade(email){
    var er = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2}/;
    if(er.exec(email))    	
    	return true;
    else
        return false
};