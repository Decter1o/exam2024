$(document).ready(function(){

	let publicName = getURLParam('public');

	let pageContent = GetDefaultContent();
	
	if(publicName != null && typeof publicName == 'string' && publicName.length>0){
		
		switch(publicName){
			case 'web':
				pageContent = GetWebDewContent();
			break;
			case 'gamedev':
				pageContent = GetGameDewContent();
			break;
			case 'mobile':
				pageContent = GetMobDevContent();
			break;
			default:
				pageContent = GetDefaultContent();
			break;
		}
	} 

	$('.left-switch-container').prepend(pageContent);

});

function getURLParam(name){
	let result = null;
	if(name != null && typeof name == 'string' && name.length>0){
		let pageURL = document.location.href;
		let url = new URL(pageURL);
		if(url.searchParams.has(name)){
			result = url.searchParams.get(name);
		}		
	}	
	return result;
}

