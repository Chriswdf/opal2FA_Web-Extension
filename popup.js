document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("startButton");

    if (startButton) {
        startButton.addEventListener("click", () => {
            console.log("Button wurde geklickt");
            // Sende eine Nachricht an das Content Script oder Background Script
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                console.log("Tab gefunden:", tabs[0])
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    files: ["content.js"]
                });
            });
        });
    } else {
        console.error("Startbutton nicht gefunden!");
    }
});