document.getElementById("menu-btn").addEventListener("click", function() {
    let menu = document.getElementById("menu");
    let overlay = document.getElementById("overlay");

    // Alternar el estado del menú y el fondo oscuro
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block"; // Muestra el menú
        overlay.style.display = "block"; // Activa el fondo oscuro
    } else {
        menu.style.display = "none"; // Oculta el menú
        overlay.style.display = "none"; // Oculta el fondo oscuro
    }
});



