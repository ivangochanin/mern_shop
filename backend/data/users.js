import bcrypt from "bcryptjs"

//users have only the fields that we have in user model or mongoose isn't going to let us inserted into the database

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        // use bcryptjs - NOT bcrypt - password is hashed
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'user1',
        email: 'user1@example.com',
        password: bcrypt.hashSync('123456', 10)
        // isAdmin: false by default
    },
    {
        name: 'user2',
        email: 'user2@example.com',
        password: bcrypt.hashSync('123456', 10)
    }
]

export default users