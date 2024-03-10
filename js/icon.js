function changeAllIcons() {
    var icons = document.querySelectorAll('.icon'); // Отримати всі елементи з класом 'icon'
    icons.forEach(function(icon) { // Пройтися по кожній іконці
        icon.classList.toggle('active'); // Додати/видалити клас 'active'
    });
}