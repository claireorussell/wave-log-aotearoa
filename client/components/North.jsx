import React from 'react'
import { Link } from 'react-router-dom'


const North = (props) => {
    console.log(props)
    return (
        <div>
            <div>
                <h1>North island </h1>
                <button className='btn btn-warning'><Link to={'/'}>home</Link></button>
            </div>
            <section>
                <ul>
                    <li>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default North



/* 
create route file to use new server route / 
create db func to return all data
create api func holding res.body
turn into class
comdidmount 

*/