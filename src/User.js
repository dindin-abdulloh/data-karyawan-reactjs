import React from 'react'
import './App.css'

const User = ({user}) => 
(
    <div className="user">
        Nama : {user.name} <br/>
        Usia : {user.age} <br/>
        Jenis Kelamin : {user.gender} <br/>
        Alamat : {user.address} <br/>
        Nama Perusahaan : {user.company}
    </div>
)

export default User