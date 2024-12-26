const books = {
    History: {
      "Ancient Civilizations": [
        "The Rise and Fall of Ancient Egypt - by Toby Wilkinson", 
        "Babylon: Mesopotamia and the Birth of Civilization - by Paul Kriwaczek",
        "Carthage Must Be Destroyed - by Richard Miles",
        "The Babylonians - by Gwendolyn Leick",
        "The Assyrians - by Eckart Frahm"
    ],
      "Medieval History": [
        "The Middle Ages: A History by Morris P. Weiss", 
        "The Oxford Illustrated History of Medieval England by Nigel Saul",
        "The Viking World by James Graham-Campbell",
        "The Medieval World: An Illustrated Atlas by John M. Thompson",
        "The Crusades: The Authoritative History of the War for the Holy Land by Thomas Asbridge"
    ],
      "Modern History": [
        "The Rise and Fall of the Third Reich by William L. Shirer", 
        "The Age of Extremes by Eric Hobsbawm",
        "The History of the Twentieth Century by Martin Gilbert",
        "The Vietnam War by Geoffrey C. Ward and Ken Burns",
        "Postwar by Tony Judt"
    ],
      "Asian History": [
        "China: A History by John Keay", 
        "India: A History by John Keay",
        "The History of Japan by George Sansom",
        "A History of Korea: From Antiquity to the Present by Michael J. Seth",
        "The History of Tibet by Alex McKay"
    ],
      "African History": [
        "The History of Africa by Kevin Shillington", 
        "Africa: A Biography of the Continent by John Reader",
        "The African Experience: An Introduction by Vincent B. Khapoya",
        "Africa in World History by J. A. Atkinson",
        "A History of African Societies to 1870 by Elizabeth Isichei"
    ],
      "European History": [
        "The History of the Decline and Fall of the Roman Empire by Edward Gibbon", 
        "A History of Europe by J.M. Roberts",
        "Europe: A History by Norman Davies",
        "The History of Europe: From the Fall of Rome to the Rise of Napoleon by M. T. Clancy",
        "The Vikings: A History by Robert Ferguson"
    ],
      "American History": [
        "A People's History of the United States by Howard Zinn", 
        "Slavery by Another Name by Douglas A. Blackmon",
        "The Color of Law: A Forgotten History of How Our Government Segregated America by Richard Rothstein",
        "An Indigenous Peoples' History of the United States by Roxanne Dunbar-Ortiz",
        "The Half Has Never Been Told: Slavery and the Making of American Capitalism by Edward E. Baptist"
    ]
    },
    Philosophy: {
      "Introduction to Philosophy": [
        "The Problems of Philosophy by Bertrand Russell", 
        "Philosophy: The Basics by Nigel Warburton",
        "Thinking Philosophically: An Introduction to the Central Questions of Philosophy by Todd May",
        "Introduction to Philosophy: Classical and Contemporary Readings edited by John Perry, Michael Bratman, and John Martin",
        "How to Think Like a Philosopher by Peter Cave"
    ],
      "Ancient Philosophy":  [
        "The Philosophy of Ancient Greece by John Burnet", 
        "The Presocratic Philosophers by G.S. Kirk, J.E. Raven, and M. Schofield",
        "The Republic by Plato",
        "Nicomachean Ethics by Aristotle",
        "Meditations by Marcus Aurelius",
        "The Symposium by Plato",
        "The Consolation of Philosophy by Boethius",
        "The Enneads by Plotinus",
        "The Apology of Socrates by Plato",
        "On the Heavens by Aristotle",
        "The Discourses by Epictetus",
        "Phaedo by Plato",
        "Stoic Philosophy by Epictetus",
        "The Stoic Way of Life by Seneca"
    ],
      "Medieval Philosophy":  [
        "A History of Medieval Philosophy by Frederick Copleston", 
        "The Confessions by St. Augustine",
        "The City of God by St. Augustine",
        "Summa Theologica by Thomas Aquinas",
        "The Guide for the Perplexed by Maimonides",
        "The Book of Healing by Avicenna",
        "On the Eternity of the World by Albertus Magnus",
        "Commentary on Aristotle's Metaphysics by Thomas Aquinas"
  ],
      "Modern Philosophy":  [
        "Meditations by René Descartes", 
        "Discourse on the Method by René Descartes",
        "An Essay Concerning Human Understanding by John Locke",
        "A Treatise of Human Nature by David Hume",
        "The Critique of Pure Reason by Immanuel Kant",
        "The Social Contract by Jean-Jacques Rousseau",
        "The Second Sex by Simone de Beauvoir",
        "The Prince by Niccolò Machiavelli",
        "Groundwork of the Metaphysics of Morals by Immanuel Kant",
        "A Theory of Justice by John Rawls",
        "The World as Will and Representation by Arthur Schopenhauer",
        "The Phenomenology of Spirit by Georg Wilhelm Friedrich Hegel",
        "Tractatus Logico-Philosophicus by Ludwig Wittgenstein"
],
      "Ethics":  [
        "Groundwork for the Metaphysics of Morals by Immanuel Kant", 
        "Nicomachean Ethics by Aristotle",
        "A Theory of Justice by John Rawls",
        "The Utilitarianism by John Stuart Mill",
        "The Ethical Life by Russ Shafer-Landau",
        "The Elements of Moral Philosophy by James Rachels",
        "On Liberty by John Stuart Mill",
        "An Enquiry Concerning the Principles of Morals by David Hume",
        "The Moral Landscape by Sam Harris",
        "Ethics: Inventing Right and Wrong by J.L. Mackie"
],
     "Metaphysics":  [
        "Metaphysics by Aristotle", 
        "Being and Time by Martin Heidegger",
        "The Metaphysics of Morals by Immanuel Kant",
        "An Enquiry Concerning Human Understanding by David Hume",
        "Process and Reality by Alfred North Whitehead",
        "The Structure of Scientific Revolutions by Thomas S. Kuhn",
        "Metaphysics: A Very Short Introduction by Stephen Mumford",
        "Naming and Necessity by Saul Kripke"
],
     "Epistemology":  [
        "An Inquiry into the Good by Nishida Kitaro", 
        "The Nature of Knowledge by J.O. Urmson",
        "Knowledge and Its Limits by Timothy Williamson",
        "A Treatise of Human Nature by David Hume",
        "Meditations on First Philosophy by René Descartes",
        "Epistemology: A Contemporary Introduction to the Theory of Knowledge by Robert Audi",
        "The Structure of Empirical Knowledge by Laurence BonJour",
        "Philosophy and the Mirror of Nature by Richard Rorty",
        "Knowledge, Reality, and Value by Wilfrid Sellars",
        "The Problem of Knowledge by A.J. Ayer",
        "On Truth by Harry G. Frankfurt",
        "The Blackwell Guide to Epistemology edited by John Greco and Ernest Sosa",
        "Epistemology: The Classic Readings edited by David E. Cooper"
],
     "Philosophy of Mind":  [
        "Consciousness Explained by Daniel Dennett", 
        "The Conscious Mind by David J. Chalmers",
        "The Mind's I by Douglas Hofstadter and Daniel Dennett",
        "Philosophy of Mind by David J. Chalmers",
        "The Feeling of Life Itself by Christof Koch",
        "An Introduction to the Philosophy of Mind by E.J. Lowe",
        "Brainstorms by Daniel Dennett",
        "The Age of Em by Robin Hanson",
        "How to Think About the Mind by David Papineau",
        "Mind and World by John McDowell"
],
     "Existentialism":  [
        "Being and Nothingness by Jean-Paul Sartre", 
        "The Myth of Sisyphus by Albert Camus",
        "Fear and Trembling by Søren Kierkegaard",
        "Existentialism is a Humanism by Jean-Paul Sartre",
        "The Fall by Albert Camus",
        "The Stranger by Albert Camus",
        "No Exit by Jean-Paul Sartre",
        "The Philosophy of Anxiety by Søren Kierkegaard",
        "Nausea by Jean-Paul Sartre",
        "The Ethics of Ambiguity by Simone de Beauvoir"
]},
Psychology: {
    "Cognitive Psychology": [
    "Thinking, Fast and Slow by Daniel Kahneman",
    "The Man Who Mistook His Wife for a Hat by Oliver Sacks",
    "The Invisible Gorilla: And Other Ways Our Intuitions Deceive Us by Christopher Chabris and Daniel Simons",
    "How the Mind Works by Steven Pinker",
    "The Psychology of Human Thought by John Kihlstrom"
  ],
  "Behavioral Psychology": [
    "Influence: The Psychology of Persuasion by Robert B. Cialdini",
    "The Power of Habit by Charles Duhigg",
    "Drive: The Surprising Truth About What Motivates Us by Daniel H. Pink",
    "Atomic Habits by James Clear",
    "The Behavior of Organisms by B.F. Skinner"
  ],
  "Developmental Psychology": [
    "The Developing Person Through the Life Span by Kathleen Stassen Berger",
    "The Whole-Brain Child by Daniel J. Siegel and Tina Payne Bryson",
    "Child Development by John W. Santrock",
    "The Emotional Life of the Toddler by Alicia F. Lieberman",
    "The Social Animal by Elliot Aronson"
  ],
  "Social Psychology": [
    "The Social Animal by Elliot Aronson",
    "Influence: The Psychology of Persuasion by Robert B. Cialdini",
    "Quiet: The Power of Introverts in a World That Can't Stop Talking by Susan Cain",
    "The Lucifer Effect: Understanding How Good People Turn Evil by Philip Zimbardo",
    "The Psychology of Prejudice by Diane M. Quinn"
  ],
  "Clinical Psychology": [
    "The Man Who Mistook His Wife for a Hat by Oliver Sacks",
    "An Unquiet Mind: A Memoir of Moods and Madness by Kay Redfield Jamison",
    "Psychological Testing and Assessment by Ronald Jay Cohen",
    "The Noonday Demon: An Atlas of Depression by Andrew Solomon",
    "On Becoming a Person: A Therapist's View of Psychotherapy by Carl Rogers"
  ],
  "Neuropsychology": [
    "The Brain that Changes Itself by Norman Doidge",
    "Neuropsychology: From Theory to Practice by David Andrewes",
    "The Tell-Tale Brain: Unlocking the Mystery of Human Nature by V.S. Ramachandran",
    "The Man Who Lost His Body by Jonathan Cole",
    "Phantoms in the Brain: Probing the Mysteries of the Human Mind by V.S. Ramachandran"
  ],
  "Personality Psychology": [
    "Quiet: The Power of Introverts in a World That Can't Stop Talking by Susan Cain",
    "The Road to Character by David Brooks",
    "The Personality Puzzle by David C. Funder",
    "The Psychopath Test: A Journey Through the Madness Industry by Jon Ronson",
    "Personality Theories: Development, Growth, and Diversity by Bem P. Allen"
  ],
  "Psychopathology": [
    "The Diagnostic and Statistical Manual of Mental Disorders (DSM-5)",
    "Crazy: A Father's Search Through America's Mental Health Madness by Pete Earley",
    "The Bell Jar by Sylvia Plath",
    "Darkness Visible: A Memoir of Madness by William Styron",
    "The Psychopathology of Everyday Life by Sigmund Freud"
  ],
  "Psychological Theories": [
    "Theories of Personality by Duane P. Schultz and Sydney Ellen Schultz",
    "Man and His Symbols by Carl Jung",
    "The Interpretation of Dreams by Sigmund Freud",
    "The Psychology of Human Behavior by John B. Watson",
    "The Hero with a Thousand Faces by Joseph Campbell"
  ],
  "Psychology of Emotions": [
    "Emotional Intelligence by Daniel Goleman",
    "The Emotional Life of Your Brain by Richard J. Davidson",
    "The Art of Happiness by Dalai Lama and Howard Cutler",
    "The Language of Emotions by Karla McLaren",
    "Emotion Regulation: Conceptual and Practical Issues by Adrian Wells"
  ],
  "Health Psychology": [
    "The Relaxation and Stress Reduction Workbook by Martha Davis",
    "The Mindful Way Through Depression by Mark Williams",
    "The Stress of Life by Hans Selye",
    "The Healing Power of Emotion by Diana Fosha",
    "Health Psychology: A Biopsychosocial Approach by Richard O. Straub"
  ],
  "Forensic Psychology": [
    "The Psychology of Criminal Investigation by David Canter",
    "The Forensic Psychology Handbook by Thomas M. A. Gannon",
    "Psychology and Crime by Dennis Howitt",
    "Inside the Criminal Mind by Stanton E. Samenow",
    "Criminal Behavior: A Psychosocial Approach by Curt R. Bartol and Anne M. Bartol"
  ],
  "Educational Psychology": [
    "Psychology and Education by Anita Woolfolk",
    "The Psychology of Learning and Motivation by Brian H. Ross",
    "Theories of Human Learning: What the Old Man Said by Guy R. Lefrançois",
    "Mindset: The New Psychology of Success by Carol S. Dweck",
    "The Learning Brain: Lessons for Education by Sarah-Jayne Blakemore and Uta Frith"
  ],
  "Industrial-Organizational Psychology": [
    "Work and Motivation by Victor H. Vroom",
    "The Psychology of Work and Organizations by Steve M. Jex",
    "Drive: The Surprising Truth About What Motivates Us by Daniel H. Pink",
    "The Talent Code: Greatness Isn't Born. It's Grown. Here's How. by Daniel Coyle",
    "The 5 Dysfunctions of a Team by Patrick Lencioni"
  ],
  "Psychology of Language": [
    "The Language Instinct by Steven Pinker",
    "The Power of Babel: A Natural History of the Human Language by Ralph Keyes",
    "Words and Rules: The Ingredients of Language by Steven Pinker",
    "The Oxford Handbook of Language and Social Psychology by Thomas Holtgraves",
    "The Psychology of Language by David W. Carroll"
  ]}
};
const genresDiv = document.getElementById("genres");
const themesDiv = document.getElementById("themes");
const themeSection = document.getElementById("theme-section");
const recommendBtn = document.getElementById("recommend-btn");
const recommendation = document.getElementById("recommendation");

let selectedGenre = "";
let selectedTheme = "";

// Generate Genre Buttons
Object.keys(books).forEach((genre) => {
  const button = document.createElement("button");
  button.textContent = genre;
  button.addEventListener("click", () => {
    selectedGenre = genre;
    generateThemes(genre);
  });
  genresDiv.appendChild(button);
});

// Generate Theme Buttons
function generateThemes(genre) {
  themesDiv.innerHTML = ""; // Clear previous themes
  themeSection.style.display = "block";

  Object.keys(books[genre]).forEach((theme) => {
    const button = document.createElement("button");
    button.textContent = theme;
    button.addEventListener("click", () => {
      selectedTheme = theme;
      recommendBtn.style.display = "block";
    });
    themesDiv.appendChild(button);
  });
}

// Show Recommendation
recommendBtn.addEventListener("click", () => {
  const bookList = books[selectedGenre][selectedTheme];
  const randomBook = bookList[Math.floor(Math.random() * bookList.length)];
  recommendation.textContent = `We recommend: "${randomBook}" from ${selectedGenre} (${selectedTheme})`;
});
