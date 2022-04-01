import React, {useMemo, useState} from 'react';

export default {
    title: 'useMemo',
};

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResaltA = 1;
        for  (let i = 1; i<=a; i++)  {
            let fake = 0
            while(fake  < 100000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResaltA *= i

        }
        return tempResaltA
    }, [a])


    for  (let i = 1; i<=b; i++)  {
        resultB *= i
    }



    return <>
        <input value={a} onChange={(e)=>setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e)=>setB(+e.currentTarget.value)}/>
        <hr />
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>


        </>
}


export const UsersSecret = (props: { users: Array<string> }) => {
    console.log('USERS')
    return <div>
        {
            props.users.map((u, i) => <div key={i}>{u}</div>)
        }
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo');
    const [counter, setCounter] = useState(0)
    const [users, setUsers]  = useState(['Name1', 'Name2', 'Name3', 'Name4'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
        },
        [users])

    const  addUser = () => {
        const newUsers = [...users, 'Sveta ' + new Date().getTime()];
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter  + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users users={newArray}/>

    </>
}

export const BooksSecret = (props: { books: Array<string> }) => {
    console.log('BOOKS')
    return <div>
        {
            props.books.map((b, i) => <div key={i}>{b}</div>)
        }
    </div>
}

const Books = React.memo(BooksSecret)


export const callBackMemo = () => {
    console.log('HelpsToReactMemo');
    const [counter, setCounter] = useState(0)
    const [books, setBooks]  = useState(['React', 'JS', 'CSS', 'HTML'])

    const newArray = useMemo(() => {
            return books.filter(b => b.toLowerCase().indexOf('a') > -1)
        },
        [books])

    const  addUser = () => {
        const newUsers = [...books, 'Sveta ' + new Date().getTime()];
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter  + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users users={newArray}/>

    </>
}