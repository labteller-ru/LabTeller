document.getElementById('toggle-dropdown').addEventListener('click', function() {
    const dropdownList = document.getElementById('dropdown-list');
    const button = this;

    // Переключение видимости списка
    if (dropdownList.style.display === 'none' || dropdownList.style.display === '') {
        dropdownList.style.display = 'flex';
        button.classList.add('dropdown-open'); // Добавляем класс для поворота
    } else {
        dropdownList.style.display = 'none';
        button.classList.remove('dropdown-open'); // Убираем класс для поворота
    }
});

// Скрыть список при клике вне его
document.addEventListener('click', function(event) {
    const dropdownList = document.getElementById('dropdown-list');
    const button = document.getElementById('toggle-dropdown');
    if (!button.contains(event.target) && !dropdownList.contains(event.target)) {
        dropdownList.style.display = 'none';
        button.classList.remove('dropdown-open'); // Убираем класс при закрытии
    }
});
