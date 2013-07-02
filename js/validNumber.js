/**
 * Numbers validation
 * How to use: <input type="text" onkeyup="validNumber(this)" />
 */

function validNumber(e){
    var er = /\D/gi;
    if(!er.exec(e.value))     
        return true;
    else 
        e.value = e.value.replace(er,'')
    return false;
}