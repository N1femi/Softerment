const softenBtn = document.querySelector("#soften-btn")

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

softenBtn.addEventListener("click", async () => {
    console.log("User wants to Soften!")

    const tab = await getCurrentTab()
    const tabId = tab["id"]
    
    chrome.scripting.insertCSS({
        target: { tabId },
        files: ["softener.css"],
    })
    .then(() => console.log("Injected softener.css"))
})
