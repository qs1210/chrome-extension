// chrome.runtime.onInstalled.addListener(function(){
// 	chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
// 		chrome.declarativeContent.onPageChanged.addRules([
// 			{
// 				conditions: [
// 					// 只有打开百度才显示pageAction
// 					new chrome.declarativeContent.PageStateMatcher({pageUrl: {urlContains: 'baidu.com'}})
// 				],
// 				actions: [new chrome.declarativeContent.ShowPageAction()]
// 			}
// 		]);
// 	});
// });

chrome.commands.onCommand.addListener(function(command) {

	// chrome.tabs.create({url: 'https://www.baidu.com'});
	// alert(chrome.tabs.location);

	// chrome.tabs.getCurrent(function(tab){
	// 	chrome.tabs.update({url: "https://www.baidu.com"});
	// });
	// console.log(command);
	// for(var i in command) {
	// 	alert(i + ":" +command[i]);
	// }
	if (command === 'clean-url-hash') {

		chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
			const tab = tabs[0];
			if (tab) {
				const url = tab.url;
				chrome.tabs.update(tab.id, {url: url.split('#')[0]});
			}
	  });
	}
	else if (command === 'open-gql'){
		chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
			const tab = tabs[0];
			if (tab) {
				const url = tab.url;
				if(url.indexOf("localhost:8080") > -1) {
					const reg = /(.*)(index\.html.*)/.exec(url);
					chrome.tabs.create({url: reg[1] + 'graphiql'});
				}
				else {
					alert("not localhost, i dare NOT jump to grahqiql");
				}
			}
	  });
	}
	else if (command === 'jump-to-local'){
		chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
			const tab = tabs[0];
			if (tab) {
				const url = tab.url;
				if(url.indexOf("/hsy/") > -1) {
					const reg = /(.*)(\/hsy\/)(.*)/.exec(url);
					chrome.tabs.create({url: 'http://localhost:8080' + reg[2] + reg[3]});
				}
				else if(url.indexOf("/cc/") > -1) {
					const reg = /(.*)(\/cc\/)(.*)/.exec(url);
					chrome.tabs.create({url: 'http://localhost:8080' + reg[2] + reg[3]});
				}
			}
	  });
	}
  });
