import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component {


    render() {
        return (


            
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className='navo'>
                <h2 className="navTitle">Wave log</h2>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item">
                            <Link to={'/'}><a className="nav-link">Home</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/north'}><a className="nav-link">North island</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/south'}><a className="nav-link">South island</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/magic'}><a className="nav-link">Our Favourites</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/share'}><a className="nav-link">Log your wave</a></Link>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        )
    }
}

export default Nav

