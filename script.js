let currentCard = 1;

function showCard(cardNumber) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.style.display = 'none');
    document.getElementById(`card${cardNumber}`).style.display = 'block';
}

function nextCard() {
    currentCard = Math.min(currentCard + 1, document.querySelectorAll('.card').length);
    showCard(currentCard);
}

function prevCard() {
    currentCard = Math.max(currentCard - 1, 1);
    showCard(currentCard);
}

// Tampilkan kartu pertama saat halaman dimuat
showCard(currentCard);
