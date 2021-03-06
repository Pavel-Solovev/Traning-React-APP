import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {AppRatingPropsType, Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";


function App() {
    const [acc, setAcc] = useState(false)
    console.log('App rendering')

    const [ratingValue, setRatingValue] = useState<AppRatingPropsType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    const [OnOffData, setOnOff] = useState(false)

    return (
        <div>
            <OnOff value={OnOffData} onClick={setOnOff}/>
            <OnOff value={OnOffData} onClick={setOnOff}/>
            <OnOff value={OnOffData} onClick={setOnOff}/>


            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            Article 1
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion value={accordionCollapsed}
                       onChange={()=>(setAcc(!acc))}
                       titleValue={'Menu'}
                       onClick={setAcc}
                       items={[{title: '1', value: 1}, {title: '2', value: 2}, {title: '3', value: 3}, {title: '4', value: 4}]}/>
            {/*<Accordion value={accordionCollapsed} onChange={setAccordionCollapsed} titleValue={'Users'}/>*/}
            Article 2
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}
function PageTitle(props:PageTitlePropsType) {
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>
}


export default App;
