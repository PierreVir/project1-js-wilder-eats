

function filterRestaurant(type) {
    const restaurants = document.querySelectorAll('.restaurants');

    restaurants.forEach((restaurants) => {
        restaurants.style.display = 'none'; // Masque tous les restaurants par défaut

        if (type === 'all' || restaurant.classList.contains(type)) {
            restaurants.style.display = 'block'; // Affiche les restaurants correspondants au filtre sélectionné
        }
    });
}


