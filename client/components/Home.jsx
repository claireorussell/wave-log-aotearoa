import React from 'react'
import { Link } from 'react-router-dom'


class Home extends React.Component {

    render() {
        return (
            <div className='homeBody'>
                <h2 className='aotearoaTitle'>Aotearoa</h2>
                <h1 className='mainTitle'>Wave log</h1>
                <section>
                    <Link to={'/north'}><button className='btn btn-warning'>North</button></Link>
                    <Link to={'/south'}><button className='btn btn-warning'>South</button></Link>
                    <Link to={'/share'}><button className='btn btn-warning'>Log your wave</button></Link>
                </section>
            </div>
        )
    }
}

export default Home