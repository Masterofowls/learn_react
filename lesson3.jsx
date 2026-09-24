// lesson3.jsx
// Lesson 3 — components (no props yet)

const learnerName = 'froggy';

// TODO 1: function Heading
// returns: <h1 className="title">Lesson 3: Components</h1>
function Heading() {
    return (
        <h1 className="title">Lesson 3: Components</h1>
    )
}

// TODO 2: function Intro
// returns a <p> with: Hello, {learnerName}! Components return JSX.
// (use learnerName from above inside the function)

function Intro(){
    return (
        <p>Hello, {learnerName}! Components return JSX.</p>
    )
}

// TODO 3: function TopicList
// Inside the function, define:
//   const items = ['function', 'capital name', 'composition'];
// Return a <ul> that .map those items to <li key={...}>

function TopicList(){
    const items = ['function', 'capital name', 'composition'];
    return (
        <ul>
            {items.map((text)=>
            <li key ={text}>{text}</li>
            )}
        </ul>
    )
}

// TODO 4: function LessonPage
// returns ONE root <div className="lesson">
// containing: <Heading />, <Intro />, <hr />, <TopicList />

function LessonPage(){
    return(
        <div className='lesson'>
            <Heading />
            <Intro />
            <hr />
            <TopicList />
        </div>
    )
}
// TODO 5: create `page` by using the component (not calling it as LessonPage()):
//   const page = <LessonPage />;

const page = (
    <LessonPage />
)


export { LessonPage, Heading, Intro, TopicList, page, learnerName };