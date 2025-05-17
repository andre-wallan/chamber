// Filter business cards by search input
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('directorySearch');
  const businessCards = document.querySelectorAll('.business-card');

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      const query = this.value.toLowerCase();

      businessCards.forEach(card => {
        const cardText = card.textContent.toLowerCase();
        if (cardText.includes(query)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
});