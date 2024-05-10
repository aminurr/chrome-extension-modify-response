# Modify Chrome Response

A sample and simple template to start writing Chrome extension to modify response on the fly.

1. Clone the git repo.
2. Adapt modifyresponse.ts for url you want to intercept and adapt the response.
3. Can adapt the ts file to adapt and override `XMLHttpRequest` calls too
4. commans to build
		npm install
		npm run build #or npm run zip to package

## Steps to install to chrome
1. Go to chrome://extension
2. Enable developer mode. (top right corner)
3. Install extension using Load unpacked (select folder from build) and click select

