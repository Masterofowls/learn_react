// lesson4.jsx
// Lesson 4 — props

// TODO 1: function Greeting({ name })
// returns: <p className="greeting">Hello, {name}!</p>
function Greeting({name}){
    return (
        <p className="greeting">Hello, {name}!</p>
    )
}

// TODO 2: function ScoreBadge({ score })
// returns a <span>:
//   if score >= 10 → "Pass"
//   else → "Keep practicing"
// (ternary inside — same idea as Lesson 2)

function ScoreBadge({score}){
    return (
        <span>
            {score >= 10 ? 'Pass' : 'Keep practicing'}
        </span>
    )
}
// TODO 3: function TopicList({ topics })
// topics is an array of strings
// return <ul> with .map → <li key={...}>{topic}</li>

function TopicList({topics}){
    return (
        <ul>
            {topics.map((text)=>
            <li key ={text}>{text}</li>
            )}
        </ul>
    )
}
// TODO 4: function Panel({ title, children })
// return:
//   <section className="panel">
//     <h2>{title}</h2>
//     {children}
//   </section>
function Panel({title, children}){
    return (
        <section className="panel">
            <h2>{title}</h2>
            {children}
        </section>
    )
}

// TODO 5: function LessonPage()
// Inside it, define:
//   const learnerName = 'froggy';
//   const score = 12;
//   const topics = ['props object', 'destructuring', 'children'];
//
// Return ONE root <div className="lesson"> that includes:
//   - <Greeting name={learnerName} />
//   - <ScoreBadge score={score} />
//   - <Panel title="Topics">
//       <TopicList topics={topics} />
//     </Panel>

function LessonPage(){
    const learnerName = 'froggy';
    const score = 12;
    const topics = ['props object', 'destructuring', 'children'];
    return (
        <div className="lesson">
            <Greeting name={learnerName} />
           <ScoreBadge score={score} />
          <Panel title="Topics">
            <TopicList topics={topics} />
         </Panel>
        </div>
    )
} 
// TODO 6:
//   const page = <LessonPage />;
const page = (
    <LessonPage />
)

export {
    Greeting,
    ScoreBadge,
    TopicList,
    Panel,
    LessonPage,
    page,
  };