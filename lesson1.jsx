// lesson1.jsx
// Lesson 1 task — JSX basics
// When done, paste this file (or the filled parts) in chat for review.

const learnerName = 'froggy'; // TODO 1: put your name
const lessonNumber = 1;

// TODO 2: Create a JSX element `heading` that is an <h1>
// with text: "Lesson 1: JSX"
// Use className="title" on it.

const heading = <h1 className="title">Lesson 1: JSX</h1>;
// TODO 3: Create a JSX element `intro` that is a <p>
const intro = <p>Hello, {learnerName}! You are on lesson {lessonNumber}.</p>;
// saying: Hello, {learnerName}! You are on lesson {lessonNumber}.
// (Use curly braces for the variables — do not hardcode the numbers/name in the string.)

const page = (
    <div>
      {heading}
      {intro}
      <hr />
      <ul>
        <li>one root</li>
        <li>className</li>
        <li>self-closing tags</li>
      </ul>
    </div>
  );
// TODO 4: Create `page` — ONE root element (div or Fragment) that contains:
//   - heading
//   - intro
//   - a self-closing <hr />
//   - a <ul> with exactly 3 <li> items naming three JSX rules you remember
//     (e.g. "one root", "className", "self-closing tags")


// TODO 5: Export page so it can be checked later
export { page, heading, intro, learnerName, lessonNumber };