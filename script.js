// Score input - replace this with actual score logic
let userScore = 15;

// Display score
document.getElementById("score").innerText = userScore;

// Interpret score
let scoreInterpretation = '';
let tips = [];

if (userScore >= 0 && userScore <= 4) {
  scoreInterpretation = 'Minimal depression';
  tips = [
    'Engage in daily activities that make you happy.',
    'Maintain a positive routine.',
    'Stay connected with friends and family.'
  ];
} else if (userScore >= 5 && userScore <= 9) {
  scoreInterpretation = 'Mild depression';
  tips = [
    'Focus on regular exercise, such as walking or yoga.',
    'Practice mindfulness or meditation.',
    'Maintain good sleep hygiene by going to bed at the same time daily.'
  ];
} else if (userScore >= 10 && userScore <= 14) {
  scoreInterpretation = 'Moderate depression';
  tips = [
    'Consider journaling your thoughts daily.',
    'Set small, achievable goals.',
    'Reach out to friends or family regularly.'
  ];
} else if (userScore >= 15 && userScore <= 19) {
  scoreInterpretation = 'Moderately severe depression';
  tips = [
    'Speak with a counselor or therapist.',
    'Incorporate stress management techniques.',
    'Break down tasks into manageable steps.'
  ];
} else if (userScore >= 20) {
  scoreInterpretation = 'Severe depression';
  tips = [
    'Seek support from a mental health professional.',
    'Consider therapy or counseling.',
    'Prioritize self-care and mental wellness.'
  ];
}

// Update the interpretation and tips on the page
document.getElementById("score-interpretation").innerText = scoreInterpretation;

let tipsList = document.getElementById("tips-list");
tips.forEach(tip => {
  let listItem = document.createElement("li");
  listItem.innerText = tip;
  tipsList.appendChild(listItem);
});
