document.addEventListener('DOMContentLoaded', () => {
    // Get the score from the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const score = parseInt(urlParams.get("score")) || 0;

    // Display the score
    document.getElementById("score").innerText = score;

    // Interpretation and tips based on score
    let scoreInterpretation = '';
    let tips = [];

    if (score >= 0 && score <= 4) {
        scoreInterpretation = 'Minimal depression';
        tips = [
            'Engage in daily activities that bring you joy.',
            'Maintain a positive routine and self-care habits.',
            'Stay connected with friends and family.'
        ];
    } else if (score >= 5 && score <= 9) {
        scoreInterpretation = 'Mild depression';
        tips = [
            'Incorporate physical exercise into your routine, like walking or yoga.',
            'Practice mindfulness or meditation to help clear your mind.',
            'Ensure you get quality sleep by keeping a regular sleep schedule.'
        ];
    } else if (score >= 10 && score <= 14) {
        scoreInterpretation = 'Moderate depression';
        tips = [
            'Consider keeping a journal to express and process your thoughts.',
            'Set small, manageable goals each day to build momentum.',
            'Stay connected with your support network.'
        ];
    } else if (score >= 15 && score <= 19) {
        scoreInterpretation = 'Moderately severe depression';
        tips = [
            'Seek guidance from a counselor or therapist.',
            'Focus on breaking large tasks into smaller steps to reduce stress.',
            'Consider stress management techniques like deep breathing exercises.'
        ];
    } else if (score >= 20) {
        scoreInterpretation = 'Severe depression';
        tips = [
            'Reach out to a mental health professional for support.',
            'Explore therapy or counseling options.',
            'Prioritize self-care and take steps to address your mental health.'
        ];
    }

    // Display the interpretation and tips in the card
    document.getElementById("score-interpretation").innerText = scoreInterpretation;

    const tipsList = document.getElementById("tips-list");
    tips.forEach(tip => {
        const listItem = document.createElement("li");
        listItem.innerText = tip;
        tipsList.appendChild(listItem);
    });

    // Mental health quotes
    const quotes = [
        "You don't have to control your thoughts. You just have to stop letting them control you.",
        "It's okay to feel what you're feeling. Remember, this too shall pass.",
        "You are allowed to feel messed up and inside out. It doesn't mean you're defective—it just means you're human.",
        "Taking time to rest is a sign of strength, not weakness.",
        "One small step at a time is still progress.",
        "Self-compassion is a powerful tool for healing.",
        "Healing takes time. Be patient with yourself.",
        "Remember, you’re not alone in this journey. There’s help and hope."
    ];

    // Select a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("mental-health-quote").innerText = randomQuote;
});
