import React from 'react'
import User from './User'

const ListUser = ({users}) =>
(
    <div>
        {users.map((listUser) => (
            <User key={listUser._id} user = {listUser}/>
        ))}
    </div>
)

export default ListUser