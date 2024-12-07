chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "companyData") {
    console.log("Extracted Company Data:", message.data);
    alert(JSON.stringify(message.data, null, 2));
  }
});
