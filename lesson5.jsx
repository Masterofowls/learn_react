// lesson5.jsx
// Lesson 5 — useState

import { useState } from 'react';

// TODO 1: function Counter()
// - state: count, starting at 0
// - show <p>Count: {count}</p>
// - button "Increment" → increases count by 1
// - button "Reset" → sets count back to 0
// One root <div className="counter">
function Counter(){
    const [count, setCount] = useState(0);
    return (
        <div className='counter'>
            <p> Count: {count}</p>
            <button className='Increment' onClick={()=> setCount(count+1)}>increase count by 1</button>
            <button className='Reset' onClick={()=> setCount(0)}>sets count back to 0</button>
        </div>
    )
}

// TODO 2: function NameTag()
// - state: name, starting at 'froggy'
// - show <p>Hello, {name}!</p>
// - <input> controlled by state:
//     value={name}
//     onChange={(e) => setName(e.target.value)}
// - One root <div className="name-tag">
function NameTag(){
    const [name, setName]= useState('froggy');
    return (
        <div className="name-tag">
            <p>Hello, {name}!</p>
            <input value = {name} onChange={(e)=> setName(e.target.value)}></input>
        </div>
    )
}

// TODO 3: function ToggleTip()
// - state: showTip, starting at false
// - button that toggles showTip (true ↔ false)
//   label: showTip ? 'Hide tip' : 'Show tip'
// - {showTip && <p>State updates trigger a re-render.</p>}
// - One root <div className="toggle-tip">

function ToggleTip(){
    const [showTip, setTip] = useState(false);
    return (
        <div className="toggle-tip">
            <button className='show' onClick={()=> setTip(!showTip)}>
            {showTip ? 'Hide tip' : 'Show tip'}
            </button>
            {showTip && <p>State updates trigger a re-render.</p>}
        </div>
    )
}
// TODO 4: function LessonPage()
// returns <div className="lesson"> with:
//   <h1>Lesson 5: useState</h1>
//   <Counter />
//   <NameTag />
//   <ToggleTip />
function LessonPage(){
    return (
        <div className="lesson">
            <h1>Lesson 5: useState</h1>
        <Counter />
        <NameTag />
        <ToggleTip />
        </div>
    )
}

// TODO 5:
//   const page = <LessonPage />;
const page = (
    <LessonPage />
)

export { Counter, NameTag, ToggleTip, LessonPage, page };