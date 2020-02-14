import React from 'react'
import { Link } from 'react-router-dom'


class Home extends React.Component {

    render() {
        return (
            <div className='homeBody'>
                <h2 className='aotearoaTitle'>Aotearoa</h2>
                <h1 className='mainTitle'>Wave log</h1>
                <section>
                    <button className='btn btn-warning'><Link to={'/north'}>North</Link></button>
                    <button className='btn btn-warning'><Link to={'/south'}>South</Link></button>
                    <button className='btn btn-warning'><Link to={'/share'}>Share</Link></button>
                </section>
            </div>
        )
    }
}

export default Home