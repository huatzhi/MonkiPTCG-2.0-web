document.addEventListener('DOMContentLoaded', function() {
    // Get all member cards
    const memberCards = document.querySelectorAll('.member-card');
    
    // Add click event listener to each card
    memberCards.forEach(card => {
        card.addEventListener('click', function(event) {
            // Check if the click was on a social media link
            const socialLink = event.target.closest('[data-social-link]');
            
            if (socialLink) {
                // If it's a social media link, prevent the card from flipping
                event.stopPropagation();
                // The link will handle navigation naturally
            } else {
                // If it's not a social media link, toggle the card flip
                this.classList.toggle('flipped');
            }
        });
    });
}); 