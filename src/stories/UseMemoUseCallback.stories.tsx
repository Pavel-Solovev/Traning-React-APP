import React, {useCallback, useMemo, useState} from 'react';

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


const UsersSecret = (props: { users: Array<string> }) => {
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



export const callBackMemo = () => {
    console.log('callBackMemo');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [counter, setCounter] = useState(0)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [books, setBooks]  = useState(['React', 'JS', 'CSS', 'HTML'])

    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const memorizedAddBook = useMemo(() => {
    //     return  ()  => {
    //         const newBooks = [...books, 'Angular ' + new Date().getTime()];
    //         setBooks(newBooks)
    //     }}
    //     ,[books])

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const memorizedAddBook2 = useCallback(() => {
            const newBooks = [...books, 'Angular ' + new Date().getTime()];
            setBooks(newBooks)
        }
        ,[books])


    return <>
        <button onClick={() => setCounter(counter  + 1)}>+</button>
        {counter}
        <Books
            // books={newArray}
            addBook={memorizedAddBook2}/>
    </>
}

type BookSecretPropsType  = {
    // books: Array<string>
    addBook: () => void
}

const BooksSecret = (props: BookSecretPropsType) => {
    console.log('BOOKS')
    return <div>
        <button onClick={()=>props.addBook}>add book</button>
        {
            // props.books.map((b, i) => <div key={i}>{b}</div>)
        }
    </div>
}

const Books = React.memo(BooksSecret)