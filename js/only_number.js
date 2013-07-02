/*
* Eg. <input type="text" onkeypress="return only_number(event)" maxlength="12" name="tel" id="tel" />
*/

function only_number(e){
    var key=(window.event)?event.keyCode:e.which;   
    if((key>47 && key<58)) 
    	return true;
    else {
    	if(key==8 || key==0) 
    		return true;
		else  
			return false;
	}
}