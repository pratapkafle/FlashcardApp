// Add a function to update the progress tracker
function updateProgressTracker() {
  const progressTracker = document.getElementById('progress-tracker');
  progressTracker.textContent = `Card ${currentIndex + 1} of ${flashcards.length}`;
}

// Modify the showCard function to include progress tracking
function showCard() {
  if (flashcards.length === 0) {
      flashcard.textContent = 'No flashcards available';
      return;
  }

  const card = flashcards[currentIndex];
  let content = '';
  if (showingQuestion) {
      content = `<div class="question">${card.question}</div>`;
      content += '<div class="options">';
      card.options.forEach(option => {
          content += `<p class="option">${option}</p>`;
      });
      content += '</div>';
  } else {
      content = `<div class="answer">${card.answer}</div>`;
  }
  flashcard.innerHTML = content;

  // Update progress tracker
  updateProgressTracker();

  // Add rating buttons with feedback
  ratingButtons.forEach(button => {
      button.onclick = () => {
          ratings[card.question] = button.getAttribute('data-value');
          button.style.backgroundColor = '#4CAF50'; // Change color to indicate rating
          alert(`Rated "${card.question}" as ${button.getAttribute('data-value')}`);
      };
  });

  const options = flashcard.querySelectorAll('.option');
  options.forEach(option => {
      option.addEventListener('click', () => {
          const selectedOption = option.textContent;
          if (selectedOption === card.answer) {
              option.classList.add('correct');
          } else {
              option.classList.add('incorrect');
          }
      });
  });
}

// Add a reset button functionality
document.getElementById('reset-ratings').addEventListener('click', () => {
  ratings = {}; // Reset ratings
  alert('All ratings have been reset.');
  // Optionally, refresh the view or show a message
});