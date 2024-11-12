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
        scoreInterpretation = 'Minimal anxiety';
        tips = [
            'Practice deep breathing exercises regularly.',
            'Take time each day to relax and unwind.',
            'Stay connected with friends and family.'
        ];
    } else if (score >= 5 && score <= 9) {
        scoreInterpretation = 'Mild anxiety';
        tips = [
            'Incorporate a mindfulness routine into your day.',
            'Engage in physical activities like walking or yoga.',
            'Avoid caffeine and alcohol to reduce anxiety symptoms.'
        ];
    } else if (score >= 10 && score <= 14) {
        scoreInterpretation = 'Moderate anxiety';
        tips = [
            'Practice relaxation techniques, such as meditation.',
            'Maintain a balanced diet and sleep schedule.',
            'Reach out to someone for support when needed.'
        ];
    } else if (score >= 15 && score <= 19) {
        scoreInterpretation = 'Moderately severe anxiety';
        tips = [
            'Consider speaking with a mental health professional.',
            'Create a calming environment at home.',
            'Set small, manageable goals to reduce stress.'
        ];
    } else if (score >= 20) {
        scoreInterpretation = 'Severe anxiety';
        tips = [
            'Seek support from a counselor or therapist.',
            'Explore options for stress management techniques.',
            'Prioritize self-care and focus on mental wellness.'
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
        "Take time to do what makes your soul happy.",
        "Mental health is just as important as physical health.",
        "Your mind will always believe everything you tell it. Feed it hope. Feed it truth. Feed it with love.",
        "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
        "It's okay to not be okay. Just don't give up.",
        "Self-care is how you take your power back.",
        "Sometimes the people around you won't understand your journey. They don’t need to, it’s not for them."
    ];

    // Select a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("mental-health-quote").innerText = randomQuote;
});
