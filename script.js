document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("nav-links");
    const tweetButton = document.querySelector(".tweet-compose button");
    const tweetTextarea = document.querySelector(".tweet-compose textarea");
    const tweetsContainer = document.querySelector(".tweets");
    const searchInput = document.getElementById("search-input");

    // Al cargar la página, recuperar los tweets del Local Storage (si existen)
    const savedTweets = JSON.parse(localStorage.getItem("tweets")) || [];

    // Función para guardar los tweets en el Local Storage
    function saveTweetsToLocalStorage() {
        localStorage.setItem("tweets", JSON.stringify(savedTweets));
    }

    // Cargar los tweets guardados en el Local Storage al inicio
    savedTweets.forEach(function (tweetText) {
        createNewTweet(tweetText);
    });

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    tweetButton.addEventListener("click", function () {
        const tweetText = tweetTextarea.value;
        if (tweetText.trim() !== "") {
            createNewTweet(tweetText);
            savedTweets.push(tweetText);
            saveTweetsToLocalStorage();
            tweetTextarea.value = ""; // Limpiar el cuadro de texto después de tuitear
        }
    });

    // Función para crear un nuevo tweet
    function createNewTweet(tweetText) {
        const newTweet = document.createElement("article");
        newTweet.classList.add("tweet");

        // Contenido del nuevo tweet
        newTweet.innerHTML = `
            <div class="tweet-header">
                <img src="profile-pic.png" alt="Foto de Perfil de Usuario">
                <h2>Usuario</h2>
            </div>
            <p>${tweetText}</p>
            <div class="tweet-actions">
                <button class="button like-button">Me gusta</button>
                <button class="button comment-button">Comentar</button>
                <button class="button share-button">Compartir</button>
            </div>
        `;

        // Agregar el nuevo tweet a la lista de tweets
        tweetsContainer.prepend(newTweet);
    }

    // Evento de búsqueda
    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();
        const allTweets = tweetsContainer.querySelectorAll(".tweet");

        allTweets.forEach(function (tweet) {
            const tweetText = tweet.querySelector("p").textContent.toLowerCase();
            if (tweetText.includes(searchTerm)) {
                tweet.style.display = "block";
            } else {
                tweet.style.display = "none";
            }
        });
    });
});
