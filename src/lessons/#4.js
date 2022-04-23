const todoListId1 = 'yt23'
const todoListId2 = '23tr'

const todoLists = [
    {
        id: todoListId1,
        title: 'What to buy',
        filter: 'all'
    },
    { 
        id: todoListId2,
        title: 'What to learn',
        filter: 'all'
    }
]

const tasks = {

    [todoListId1]: [
        { title: 'milk', id: 1, isDone: true },
        { title: 'bread', id: 2, isDone: true }
    ],
    [todoListId2]: [
        { title: 'HTML', id: 3, isDone: false },
        { title: 'JS', id: 4, isDone: false }
    ]

}