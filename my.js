
	$(document).on('click', '#toLocal', function () {

		chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
			const tab = tabs[0];
			if (tab) {
				const url = tab.url;
				if (url.indexOf("/hsy/") > -1) {
					const reg = /(.*)(\/hsy\/)(.*)/.exec(url);
					chrome.tabs.create({ url: 'http://localhost:8080' + reg[2] + reg[3] });
				}
				else if (url.indexOf("/cc/") > -1) {
					const reg = /(.*)(\/cc\/)(.*)/.exec(url);
					chrome.tabs.create({ url: 'http://localhost:8080' + reg[2] + reg[3] });
				}
			}
		});

	})

	$(document).on('click', '#grahiql', function () {
		chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
			const tab = tabs[0];
			if (tab) {
				const url = tab.url;
				if (url.indexOf("localhost:8080") > -1) {
					const reg = /(.*)(index\.html.*)/.exec(url);
					chrome.tabs.create({ url: reg[1] + 'graphiql' });
				}
				else {
					alert("not localhost, i dare NOT jump to grahqiql");
				}
			}
		});
	})

	$(document).on('click', '#clear', function () {
		chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
			const tab = tabs[0];
			if (tab) {
				const url = tab.url;
				chrome.tabs.update(tab.id, { url: url.split('#')[0] });
			}
		});
	})