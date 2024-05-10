const script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
script.setAttribute('src', chrome.runtime.getURL('scripts/modifydigest.js'));
script.type = "module" 
script.onload = () => script.remove();
(document.head || document.documentElement).append(script);
