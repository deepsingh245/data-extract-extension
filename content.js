// Function to extract data from the LinkedIn company page
function extractCompanyData() {
  const companyName = document
    .querySelector(".org-top-card-summary__title")
    ?.textContent.trim();
  const aboutText = document
    .querySelector(".org-top-card-summary__tagline")
    ?.textContent.trim();
  const website = document.querySelector(
    ".org-page-details__definition-text a"
  )?.href;
  const employees = document
    .querySelector(".org-top-card-summary__headcount")
    ?.textContent.trim();
  const industry = document
    .querySelector(".org-top-card-summary__industry")
    ?.textContent.trim();

  // Return extracted data
  return {
    companyName,
    aboutText,
    website,
    employees,
    industry,
  };
}

// Extract the data
const companyData = extractCompanyData();

// Send the data back to the extension
chrome.runtime.sendMessage({ type: "companyData", data: companyData });
console.log("contentData", companyData);
