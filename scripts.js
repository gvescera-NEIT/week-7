var statusCodes = {
	100: "Continue",
	101: "Switching Protocols",
	102: "Processing",
	200: "OK",
	201: "Created",
	202: "Accepted",
	203: "Non-Authoritative Information",
	204: "No Content",
	205: "Reset Content",
	206: "Partial Content",
	207: "Multi-Status",
	208: "Already Reported",
	226: "IM Used",
	300: "Multiple Choices",
	301: "Moved Permanently",
	302: "Found",
	303: "See Other",
	304: "Not Modified",
	305: "Use Proxy",
	306: "Reserved",
	307: "Temporary Redirect",
	308: "Permanent Redirect",
	400: "Bad Request",
	401: "Unauthorized",
	402: "Payment Required",
	403: "Forbidden",
	404: "Not Found",
	405: "Method Not Allowed",
	406: "Not Acceptable",
	407: "Proxy Authentication Required",
	408: "Request Timeout",
	409: "Conflict",
	410: "Gone",
	411: "Length Required",
	412: "Precondition Failed",
	413: "Request Entity Too Large",
	414: "Request-URI Too Long",
	415: "Unsupported Media Type",
	416: "Requested Range Not Satisfiable",
	417: "Expectation Failed",
	422: "Unprocessable Entity",
	423: "Locked",
	424: "Failed Dependency",
	425: "Unassigned",
	426: "Upgrade Required",
	427: "Unassigned",
	428: "Precondition Required",
	429: "Too Many Requests",
	430: "Unassigned",
	431: "Request Header Fields Too Large",
	500: "Internal Server Error",
	501: "Not Implemented",
	502: "Bad Gateway",
	503: "Service Unavailable",
	504: "Gateway Timeout",
	505: "HTTP Version Not Supported",
	506: "Variant Also Negotiates (Experimental)",
	507: "Insufficient Storage",
	508: "Loop Detected",
	509: "Unassigned",
	510: "Not Extended",
	511: "Network Authentication Required"
};


// XML HTTP Request
var xhr = new XMLHttpRequest();
var content = document.getElementById('content');  
var url = "http://gregoryvescera.net76.net/demo.php?page=";
var nextpage = 1;

// Loads page 1 when the window loads
$(window).on("load", function()
		{
			changepage();
		}
);

// Grabs the text fromt he php file and adds it to the webpage
function callback() {
	var response = xhr.responseText;  
	
	
	content.innerHTML += response;


}

// Only displays a new page if ready state is 4 and status is 200
xhr.onreadystatechange = function() { 

   if (xhr.readyState==4 && xhr.status==200) {  
	callback();  
	}
};  

// Requests a new page
function changepage() {
		xhr.open('GET', url + nextpage, true);  
		xhr.send();
		nextpage++;	
}


// Button clicking
/*
var showresults = document.getElementById('showResults');

$(showresults).on("click", function ()
		{
			changepage();
		}


);		
*/

// Loads another page when the user scrolls to the bottom of the page
$(window).scroll(function() {
	if($(window).scrollTop() + $(window).height() == $(document).height()) 
	{
		changepage();
	}
});
