/* 
* Eg. links: <a href="#ancor-name">ancor name</a>
* Eg. jQuery('a').click(scrollTo_id(jQuery(this).attr('href'),'-500'));
*/

function scrollTo_id(id,distance){
	var dist = distance != '' ? distance : 0;
	jQuery('html,body').animate({scrollTop: jQuery('#'+id.replace(/#/,'')).offset().top+parseInt(dist)},'slow');
}

/* 
* Eg. ancor: <a name"ancor-name">ancor name</a>
*/

function scrollTo_ancor(distance){
	var dist = distance != '' ? distance : 0;
    jQuery('html,body').animate({scrollTop: jQuery('a[name*="'+jQuery(this).attr('href').replace(/#/,'')+'"]').offset().top+parseInt(dist)},'slow');
}

/*
* How to use: scroll_onLoad();
*/

function scroll_onLoad(){
	var url = document.location.href;
    var str_hash = url.indexOf('#')+1;
    var hash = url.slice(str_hash,url.length);
    if(url.match(/#/)) {
        scrollTo_ancor(hash);
        return false;
    }
}