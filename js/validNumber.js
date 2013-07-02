/**
 * Numbers validation
 * How to use: <input type="text" onkeyup="validNumber(this)" />
 */

function validNumber(e){
    var rgx = /\D/gi;
    if(!rgx.exec(e.value))     
        return true;
    else 
        e.value = e.value.replace(rgx,'');
    return false;
}