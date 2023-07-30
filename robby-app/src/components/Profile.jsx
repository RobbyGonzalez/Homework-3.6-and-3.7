import React from 'react'
import { useContext } from 'react'
import { NameContext } from '../App'

const Profile = ({ result }) => {
    let name = useContext(NameContext)
    return (
        <div>
            <p>{name}, {result}</p>
        </div>
    )
}

export default Profile