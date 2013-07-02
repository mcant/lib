/**
 * Email validation
 * How to use: <input type="text" onblur="validNumber(this)" />
 */

function validEmail(e){
    var rgx = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2}/;
    if(rgx.exec(e.value))        
        return true;
    else
        e.value = '';
    return false;
};