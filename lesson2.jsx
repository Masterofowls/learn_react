// lesson2.jsx
// Lesson 2 — expressions, conditionals, lists

const learnerName = 'froggy';
const score = 12; // keep 12 for the check; you may try other numbers later
const showTip = true;

const topics = ['expressions', 'ternary', 'map + key'];

// TODO 1: `badge` — a <span>
// If score >= 10, text "Pass", otherwise "Keep practicing"
// Use a ternary inside { }

const badge = <span>{score >=10 ? 'Pass' : 'Keep practicing'}</span>;
// TODO 2: `tip` — a <div> that shows a <p>Only when showTip is true</p>
// Use &&  (message text can be: "Tip: {} holds expressions")
const tip = <div>{showTip && <p>Tip: {'{}'} holds expressions</p>}</div>;

// TODO 3: `topicList` — a <ul> built from `topics` with .map
// Each <li> needs a key and shows the topic string
const topicList =(
    <ul>
        {topics.map((topic) => (
            <li key={topic}>{topic}</li>
        ))}
    </ul>
);

// TODO 4: `card` — ONE root <div className="card"> containing:
//   - <h2>Lesson 2 — {learnerName}</h2>   (embed the name)
//   - <p>Score: {score}</p>
//   - badge
//   - tip
//   - topicList
const card = (
    <div className="card">
        <h2>Lesson 2 — {learnerName}</h2>
        <p>Score: {score}</p>
        {badge}
        {tip}
        {topicList}
    </div>
);

export { card, badge, tip, topicList, score, showTip, topics };