import {useState} from 'react'


const Header = ({text}) => (
    <h1>{text}</h1>
);
const Button = ({text, event}) => (
    <button onClick={event}>{text}</button>
)

const StatisticLine = ({text, value}) => (
    <tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>

)
const Statistics = (props) => {
    const [c1, c2, c3] = props.counters;
    const all = c1 + c2 + c3
    const avg = (c1 - c3) / all;

    const positive = c1 / (all) *100;
    if (c1 === 0 && c2 === 0 & c3 === 0) {
        return (<div>No feedback given</div>);
    } else {
        return (
            <table>
                <tbody>
                <StatisticLine text="good" value={c1}/>
                <StatisticLine text="neutral" value={c2}/>
                <StatisticLine text="bad" value={c3}/>
                <StatisticLine text="all" value={all}/>
                <StatisticLine text="average" value={avg}/>
                <StatisticLine text="positive" value={positive.toString() +"%"}/>
                </tbody>
            </table>
        )
    }


}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const addGood = () => {
        setGood(good + 1)
    }
    const addNeutral = () => {
        setNeutral(neutral + 1)
    }
    const addBad = () => {
        setBad(bad + 1)
    }
    const feedback = {
        title: "give feedback",
        subTitle: "statistics",
        stats: ["good", "neutral", "bad"]

    }
    return (
        <div>
            <Header text={feedback.title}/>
            <Button event={addGood} text="good"/>
            <Button event={addNeutral} text="neutral"/>
            <Button event={addBad} text="bad"/>
            <Header text={feedback.subTitle}/>
            <Statistics counters={[good, neutral, bad]}/>
        </div>
    )
}

export default App