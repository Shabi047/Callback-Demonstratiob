const clickMe = document.getElementById("clickMe");
const contentBox = document.getElementById("content");
const url = "https://dummyjson.com/c/3029-d29f-4014-9fb4";

clickMe.addEventListener("click", function () {
    fetchData(url, handleData);
});

function fetchData(url, handleData) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            handleData(data);
        })
        .catch(err => console.log("Failed to retrieve data", err));
}

function handleData(data) {
    const para = document.createElement("p");
    para.textContent = JSON.stringify(data, null, 2);  // Properly stringify the data
    contentBox.appendChild(para);
}