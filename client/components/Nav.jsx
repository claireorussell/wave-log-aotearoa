import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component {

    render() {
        return (
            <div className='row nav'>
                <h2 className='navTitle'>Wave Log</h2>
                <div className='buttons'></div>
                <Link to={'/'}><button className='btn'>Home</button></Link>
                <Link to={'/north'}><button className='btn'>North island</button></Link>
                <Link to={'/south'}><button className='btn'>South island</button></Link>
                <Link to={'/share'}><button className='btn'>Log your wave</button></Link>
            </div>
        )
    }
}

export default Nav

