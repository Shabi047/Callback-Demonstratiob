const clickMe = document.getElementById("clickMe");
const contentBox = document.getElementById("content");
const url = "https://dummyjson.com/products/1"; // Example valid URL

clickMe.addEventListener("click", async function () {
    try {
        const data = await fetchData(url);
        handleData(data);
    } catch (err) {
        console.log("Failed to retrieve data", err);
    }
});

async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}

function handleData(data) {
    const para = document.createElement("p");
    para.textContent = JSON.stringify(data, null, 2);  // Properly stringify the data
    contentBox.appendChild(para);
}