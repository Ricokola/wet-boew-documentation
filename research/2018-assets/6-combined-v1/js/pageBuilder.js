/*
*	Fetch page structure & data, then build page
*	@param {string} url - URL of JSON source
*	@param {boolean} firstLoad - Whether this is the first request
*/
function ajax(url, firstLoad){
	url = url.replace(".html",".json")
	fetch(url).then(
		function(response){
			response.json().then(function(data) {
				var d = [data.data];
				var body = json2html.transform(d,data.html);
				var dmt =   {"<>":"div","class":"row pagedetails","html":[{"<>":"details","class":"brdr-0 col-sm-6 col-lg-4 mrgn-tp-sm","html":[{"<>":"summary","class":"btn btn-default text-center","html":"Report a problem or mistake on this page"}, {"<>":"div","class":"clearfix","html":""}, {"<>":"div","class":"well row","html":[{"<>":"div","html":[{"<>":"div","class":"gc-rprt-prblm","html":[{"<>":"div","class":"gc-rprt-prblm-frm gc-rprt-prblm-tggl","html":[[{"<>":"input","name":"pageTitle","value":"Clerk of the Privy Council","type":"hidden","html":""}, {"<>":"input","name":"submissionPage","value":"/content/canadasite/en/privy-council/corporate/clerk.html","type":"hidden","html":""}, {"<>":"input","name":"lang","value":"eng","type":"hidden","html":""}, {"<>":"input","name":"pageOwner","value":"gc:institutions/privy-council","type":"hidden","html":""}, {"<>":"input","id":"emailTemplate","name":"emailTemplate","value":"reportaproblem/rap","type":"hidden","html":""}, {"<>":"input","name":"subject","value":"Report a problem or mistake on this page","type":"hidden","html":""}, {"<>":"fieldset","html":[{"<>":"legend","html":[{"<>":"span","class":"field-name","html":"Please select all that apply:"} ]}, {"<>":"div","class":"checkbox","html":[{"<>":"label","for":"problem1","html":[{"<>":"input","name":"problem1","id":"problem1","value":"Yes","data-reveal":"#broken","data-gc-analytics-rap":"A link, button or video is not working-Un lien, un bouton ou une vidéo ne fonctionne pas","type":"checkbox","html":""} ]}, {"<>":"input","name":"problem1","value":"No","type":"hidden","html":""} ]}, {"<>":"div","class":"checkbox","html":[{"<>":"label","for":"problem2","html":[{"<>":"input","name":"problem2","id":"problem2","value":"Yes","data-reveal":"#spelling","data-gc-analytics-rap":"It has a spelling mistake-Il y a une erreur d'orthographe ou de grammaire","type":"checkbox","html":""} ]}, {"<>":"input","name":"problem2","value":"No","type":"hidden","html":""} ]}, {"<>":"div","class":"checkbox","html":[{"<>":"label","for":"problem3","html":[{"<>":"input","name":"problem3","id":"problem3","value":"Yes","data-reveal":"#wrong","data-gc-analytics-rap":"Information is missing-Les renseignements sont incomplets","type":"checkbox","html":""} ]}, {"<>":"input","name":"problem3","value":"No","type":"hidden","html":""} ]}, {"<>":"div","class":"checkbox","html":[{"<>":"label","for":"problem4","html":[{"<>":"input","name":"problem4","id":"problem4","value":"Yes","data-reveal":"#outdated","data-gc-analytics-rap":" Information is outdated or wrong-L'information n'est plus à jour ou est erronée","type":"checkbox","html":""} ]}, {"<>":"input","name":"problem4","value":"No","type":"hidden","html":""} ]}, {"<>":"div","class":"checkbox","html":[{"<>":"label","for":"problem5","html":[{"<>":"input","name":"problem5","id":"problem5","value":"Yes","data-reveal":"#find","data-gc-analytics-rap":" Login error when trying to access an account (e.g. My Service Canada Account)-Message d'erreur à l'ouverture de la session lorsque je tente d'accéder à un compte (ex. Mon dossier Service Canada)","type":"checkbox","html":""} ]}, {"<>":"input","name":"problem5","value":"No","type":"hidden","html":""} ]}, {"<>":"ul","html":[{"<>":"li","class":"checkbox","html":[{"<>":"label","for":"problem6","html":[{"<>":"input","name":"problem6","id":"problem6a","value":"Yes","data-reveal":"#find","data-gc-analytics-rap":"GC Key access-Accès CléGC","type":"checkbox","html":""} ]}, {"<>":"input","name":"problem6","value":"No","type":"hidden","html":""} ]}, {"<>":"li","class":"checkbox","html":[{"<>":"label","for":"problem7","html":[{"<>":"input","name":"problem7","id":"problem7","value":"Yes","data-reveal":"#find","data-gc-analytics-rap":"SecureKey Concierge (Banking Credential) access-Accès SecureKey Service de Concierge (justificatifs d'identité bancaires)","type":"checkbox","html":""} ]}, {"<>":"input","name":"problem7","value":"No","type":"hidden","html":""} ]}, {"<>":"li","class":"checkbox","html":[{"<>":"label","for":"problem8","html":[{"<>":"input","name":"problem8","id":"problem8","value":"Yes","data-reveal":"#find","data-gc-analytics-rap":"Personal Access Code (PAC) problems or EI Access Code (AC) problems-Problème avec le Code d'accès personnel (CAP) ou avec le Code d'accès (CA) de l'assurance emploi","type":"checkbox","html":""} ]}, {"<>":"input","name":"problem8","value":"No","type":"hidden","html":""} ]}, {"<>":"li","class":"checkbox","html":[{"<>":"label","for":"problem9","html":[{"<>":"input","name":"problem9","id":"problem9","value":"Yes","data-reveal":"#find","data-gc-analytics-rap":"Social Insurance Number (SIN) validation problems-Problème lié à la validation du numéro d'assurance sociale (NAS)","type":"checkbox","html":""} ]}, {"<>":"input","name":"problem9","value":"No","type":"hidden","html":""} ]}, {"<>":"li","class":"checkbox","html":[{"<>":"label","for":"problem10","html":[{"<>":"input","name":"problem10","id":"problem10","value":"Yes","data-reveal":"#find","data-gc-analytics-rap":"Other login error not in this list-Autre erreur lors de l'ouverture de session qui ne figure pas sur cette liste","type":"checkbox","html":""} ]}, {"<>":"input","name":"problem10","value":"No","type":"hidden","html":""} ]} ]}, {"<>":"div","class":"checkbox","html":[{"<>":"label","for":"problem11","html":[{"<>":"input","name":"problem11","id":"problem11","value":"Yes","data-reveal":"#find","data-gc-analytics-rap":"I can't find what I'm looking for-Je n'arrive pas à trouver ce que je cherche","type":"checkbox","html":""} ]}, {"<>":"input","name":"problem11","value":"No","type":"hidden","html":""} ]}, {"<>":"div","class":"checkbox","html":[{"<>":"label","for":"problem12","html":[{"<>":"input","name":"problem12","id":"problem12","value":"Yes","data-reveal":"#find","data-gc-analytics-rap":"Other issue not in this list-Autre problème qui ne figure pas sur cette liste","type":"checkbox","html":""} ]}, {"<>":"input","name":"problem12","value":"No","type":"hidden","html":""} ]} ]} ] ]}, {"<>":"div","class":"gc-rprt-prblm-thnk gc-rprt-prblm-tggl hide","html":[{"<>":"h3","html":"Thank you for your help!"}, {"<>":"p","html":[{"<>":"a","href":"https://www.canada.ca/en/contact/index.html","html":"contact us"} ]} ]} ]} ]} ]} ]}, {"<>":"div","class":"col-sm-3 mrgn-tp-sm pull-right","html":[{"<>":"div","class":"wb-share","data-wb-share":"{\"lnkClass\": \"btn btn-default btn-block\"}","html":""} ]}, {"<>":"div","class":"datemod col-xs-12 mrgn-tp-lg","html":[{"<>":"dl","id":"wb-dtmd","html":[{"<>":"dt","html":"Date modified:"}, {"<>":"dd","html":[{"<>":"time","property":"dateModified","html":" ${date}"} ]} ]} ]} ]};
				var dmd = [{"date":data.date}]
				var dm = json2html.transform(dmd,dmt);
				document.title = data.title;
				if (firstLoad){
					document.body.innerHTML =addHeaderAndFooter("<main class=\"container\">" + body +dm + "</main>");
				}
				else{
					$("body").children(":not(header,main,body,#wb-rsz)").remove();
					$("main").replaceWith("<main class=\"container\">" + body +dm + "</main>");
					wb.add(".wb-generic-ph");	//reload templates
				}
			});
}

).catch(function(err) {
	console.log('Error Fetching Data', err);
});
};

/*
*	Load initial page, add handlers
*/
ajax("./" + location.pathname.split("/").pop(),true);

//PJAX links
$( "body" ).on("click", ".pjax", function(event){
	event.preventDefault();
	window.dispatchEvent(new Event("PJAX"));
	var url = this.attributes.href.value;
	ajax(url,false);
	history.pushState(null,null,url);
}
);

//Back button
window.addEventListener("popstate", function(){
	var url = "./" + location.pathname.split("/").pop();
	ajax(url,false);
});



/*
*	Adds header and footer to a string
*	@param {string} str
*/
function addHeaderAndFooter(str){
	var header = "<header role=\"banner\"> <div id=\"wb-bnr\" class=\"container\"> <section id=\"wb-lng\" class=\"visible-md visible-lg text-right\"> <h2 class=\"wb-inv\">Language selection</h2> <div class=\"row\"> <div class=\"col-md-12\"> <ul class=\"list-inline margin-bottom-none\"> <li><a lang=\"fr\" href=\"#\">Français</a></li> </ul> </div> </div> </section> <div class=\"row\"> <div class=\"brand col-xs-8 col-sm-9 col-md-6\"> <a href=\"https://www.canada.ca/en.html\"><img src=\"./assets/sig-blk-en.svg\" alt=\"\"><span class=\"wb-inv\"> Government of Canada / <span lang=\"fr\">Gouvernement du Canada</span></span></a> </div> <section class=\"wb-mb-links col-xs-4 col-sm-3 visible-sm visible-xs\" id=\"wb-glb-mn\"> <h2>Search and menus</h2> <ul class=\"list-inline text-right chvrn\"> <li><a href=\"#mb-pnl\" title=\"Search and menus\" aria-controls=\"mb-pnl\" class=\"overlay-lnk\" role=\"button\"><span class=\"glyphicon glyphicon-search\"><span class=\"glyphicon glyphicon-th-list\"><span class=\"wb-inv\">Search and menus</span></span></span></a></li> </ul> <div id=\"mb-pnl\"></div> </section> <section id=\"wb-srch\" class=\"col-xs-6 text-right visible-md visible-lg\"> <h2>Search</h2> <form action=\"#\" method=\"post\" name=\"cse-search-box\" role=\"search\" class=\"form-inline\"> <div class=\"form-group\"> <label for=\"wb-srch-q\" class=\"wb-inv\">Search website</label> <input id=\"wb-srch-q\" list=\"wb-srch-q-ac\" class=\"wb-srch-q form-control\" name=\"q\" type=\"search\" value=\"\" size=\"27\" maxlength=\"150\" placeholder=\"Search Canada.ca\"> <datalist id=\"wb-srch-q-ac\"> </datalist> </div> <div class=\"form-group submit\"> <button type=\"submit\" id=\"wb-srch-sub\" class=\"btn btn-primary btn-small\" name=\"wb-srch-sub\"><span class=\"glyphicon-search glyphicon\"></span><span class=\"wb-inv\">Search</span></button> </div> </form> </section> </div> </div> <nav role=\"navigation\" id=\"wb-sm\" data-ajax-replace=\"./ajax/sitemenu-en.html\" data-trgt=\"mb-pnl\" class=\"wb-menu visible-md visible-lg\" typeof=\"SiteNavigationElement\"> <div class=\"container nvbar\"> <h2>Topics menu</h2> <div class=\"row\"> <ul class=\"list-inline menu\"> <li><a href=\"https://www.canada.ca/en/services/jobs.html\">Jobs</a></li> <li><a href=\"https://www.canada.ca/en/services/immigration-citizenship.html\">Immigration</a></li> <li><a href=\"https://travel.gc.ca/\">Travel</a></li> <li><a href=\"https://www.canada.ca/en/services/business.html\">Business</a></li> <li><a href=\"https://www.canada.ca/en/services/benefits.html\">Benefits</a></li> <li><a href=\"https://www.canada.ca/en/services/health.html\">Health</a></li> <li><a href=\"https://www.canada.ca/en/services/taxes.html\">Taxes</a></li> <li><a href=\"https://www.canada.ca/en/services.html\">More services</a></li> </ul> </div> </div> </nav> <nav role=\"navigation\" id=\"wb-bc\" property=\"breadcrumb\"> <h2>You are here:</h2> <div class=\"container\"> <div class=\"row\"> <ol class=\"breadcrumb\"> <li><a href=\"https://www.canada.ca/en.html\">Home</a></li> </ol> </div> </div> </nav> </header>";
	var footer = "<footer role=\"contentinfo\" id=\"wb-info\"> <nav role=\"navigation\" class= \"container wb-navcurr\"> <h2 class=\"wb-inv\">About government</h2> <ul class=\"list-unstyled colcount-sm-2 colcount-md-3\"> <li><a href=\"https://www.canada.ca/en/contact.html\">Contact us</a></li> <li><a href=\"https://www.canada.ca/en/government/dept.html\">Departments and agencies</a></li> <li><a href=\"https://www.canada.ca/en/government/publicservice.html\">Public service and military</a></li> <li><a href=\"https://www.canada.ca/en/news.html\">News</a></li> <li><a href=\"https://www.canada.ca/en/government/system/laws.html\">Treaties, laws and regulations</a></li> <li><a href=\"https://www.canada.ca/en/transparency/reporting.html\">Government-wide reporting</a></li> <li><a href=\"http://pm.gc.ca/eng\">Prime Minister</a></li> <li><a href=\"https://www.canada.ca/en/government/system.html\">How government works</a></li> <li><a href=\"http://open.canada.ca/en/\">Open government</a></li> </ul> </nav> <div class=\"brand\"> <div class=\"container\"> <div class=\"row\"> <nav class=\"col-md-9 col-lg-10 ftr-urlt-lnk\"> <h2 class=\"wb-inv\">About this site</h2> <ul> <li><a href=\"https://www.canada.ca/en/social.html\">Social media</a></li> <li><a href=\"https://www.canada.ca/en/mobile.html\">Mobile applications</a></li> <li><a href=\"https://www1.canada.ca/en/newsite.html\">About Canada.ca</a></li> <li><a href=\"https://www.canada.ca/en/transparency/terms.html\">Terms and conditions</a></li> <li><a href=\"https://www.canada.ca/en/transparency/privacy.html\">Privacy</a></li> </ul> </nav> <div class=\"col-xs-6 visible-sm visible-xs tofpg\"> <a href=\"#wb-cont\">Top of Page <span class=\"glyphicon glyphicon-chevron-up\"></span></a> </div> <div class=\"col-xs-6 col-md-3 col-lg-2 text-right\"> <img src=\"./assets/wmms-blk.svg\" alt=\"Symbol of the Government of Canada\"> </div> </div> </div> </div> </footer>";
	return header + str + footer;
};