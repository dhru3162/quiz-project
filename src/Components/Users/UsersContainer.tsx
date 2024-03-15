import React from 'react'
import UsersPage from './UsersPage'

const UsersContainer = () => {
    type UserList = {
        name: string,
        email: string,
        rank:number,
        score:number
      
      }
      
      const userList: UserList[] = [
        {
            name:'Andy Tuker',
            email: "Andy@gmail.com",
            rank:2,
            score:30
        },
        {
            name:'Lorem jeny',
            email: "Lorem@gmail.com",
            rank:6,
            score:20
        },
        {
            name:'Jhon Sinha',
            email: "Jhon@gmail.com",
            rank:1,
            score:50
        },
        {
            name:'whaite family',
            email: "whaite@gmail.com",
            rank:4,
            score:29
        },
        {
            name:'Grrat khali',
            email: "Khali@gmail.com",
            rank:3,
            score:40
        },
        {
            name:'Abd villrs',
            email: "Abd@gmail.com",
            rank:5,
            score:33
        },
        {
            name:'faf-du plasi',
            email: "faf-du@gmail.com",
            rank:7,
            score:18
        },
        {
            name:'ms dhoni',
            email: "dhoni@gmail.com",
            rank:8,
            score:13
        },
        {
            name:'karls brithwhait',
            email: "karls@gmail.com",
            rank:9,
            score:10
        },
        {
            name:'charls quiny',
            email: "charls@gmail.com",
            rank:10,
            score:3
        },
        
      ]

  return (
    <>
    <UsersPage  
    {...{
userList
    }}
    />

    </>
  )
}

export default UsersContainer