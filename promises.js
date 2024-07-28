const clickMe = document.getElementById("clickMe");
const contentBox = document.getElementById("content");
const url = "https://dummyjson.com/products/1"; // Example valid URL

clickMe.addEventListener("click", function () {
    fetchData(url)
        .then(data => handleData(data))
        .catch(err => console.log("Failed to retrieve data", err));
});

function fetchData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });
}

function handleData(data) {
    const para = document.createElement("p");
    para.textContent = JSON.stringify(data, null, 2);  // Properly stringify the data
    contentBox.appendChild(para);
}