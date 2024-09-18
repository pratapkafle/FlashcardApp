function convertMarkdownToFlashcards(markdown) {
    const converter = new showdown.Converter();
    const htmlContent = converter.makeHtml(markdown);
    const flashcardsContainer = document.getElementById("flashcardsContainer");
    flashcardsContainer.innerHTML = ''; // Clear existing cards
    
    const sections = markdown.split(/(?:^|\n)# /); // Split on markdown headings "# "
    
    sections.forEach(section => {
      const lines = section.split("\n");
      const question = lines[0]?.trim(); // First line as question
      const answer = lines[1]?.trim();   // Second line as answer
      
      if (question && answer) {
        const flashcard = document.createElement("div");
        flashcard.classList.add("flashcard");
        flashcard.innerHTML = `<strong>Q: ${question}</strong><br/>A: ${answer}`;
        flashcards.push(flashcard);
        flashcardsContainer.appendChild(flashcard);
      }
    });
    
    if (flashcards.length > 0) {
      currentIndex = 0;
      showNextCard(); // Show the first card
    }
  }
  