

function filterRestaurant(type) {
    const restaurants = document.querySelectorAll('.restaurant');

    restaurants.forEach((restaurant) => {
        restaurant.style.display = 'none'; // Masque tous les restaurants par défaut

        if (type === 'all' || restaurant.classList.contains(type)) {
            restaurant.style.display = 'block'; // Affiche les restaurants correspondants au filtre sélectionné
        }
    });
}
