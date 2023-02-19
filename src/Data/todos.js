const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export const todos = [
    {
        id: 1,
        name: 'Read Android',
        date_added: months[new Date().getMonth()] + " " + new Date().getDate() + ", " + new Date().getFullYear(),
        isCompleted: true,
    },
    {
        id: 2,
        name: 'Read React',
        date_added: months[new Date().getMonth()] + " " + new Date().getDate() + ", " + new Date().getFullYear(),
        isCompleted: false,
    },
    {
        id: 3,
        name: 'Read Javascript',
        date_added: months[new Date().getMonth()] + " " + new Date().getDate() + ", " + new Date().getFullYear(),
        isCompleted: false,
    },
    {
        id: 4,
        name: 'Read Java',
        date_added: months[new Date().getMonth()] + " " + new Date().getDate() + ", " + new Date().getFullYear(),
        isCompleted: false,
    },
    {
        id: 5,
        name: 'Read Android',
        date_added: months[new Date().getMonth()] + " " + new Date().getDate() + ", " + new Date().getFullYear(),
        isCompleted: false,
    }
]