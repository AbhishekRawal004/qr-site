const quotes = [
  "You're awesome for supporting me!",
  "Every penny counts – thank you!",
  "You're making a difference 🫶",
  "Gratitude is a powerful force, and you just triggered it!",
  "Thank you for fueling my passion 💡",
  "Little acts of kindness mean everything 💖",
  "Keep shining, you beautiful soul 🌟",
  "The world needs more people like you 💯",
  "This moment is brighter because of you 🌈",
  "A single coin, a huge smile 😄",
  "Believe you can and you're halfway there.",
  "The best way to get started is to quit talking and begin doing.",
  "Your limitation—it’s only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Sometimes later becomes never. Do it now."
  // Add up to 200 here...
];

function showRandomQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quote-box').innerText = quote;
}
document.getElementById("pay-button").addEventListener("click", () => {
  // Your existing logic here like showing donations...

  showRandomQuote(); // Show new quote each click
});
