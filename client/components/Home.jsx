import React from 'react'

import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h2 className='aotearoaTitle'>Aotearoa</h2>
            <h1 className='mainTitle'>Wave log</h1>
            <section>
                <div>
                    <button class='btn btn-warning'><Link to={'/north'}>North</Link></button>
                    <button class='btn btn-warning'><Link to={'/south'}>South</Link></button>
                </div>
                <button class='btn btn-warning'><Link to={'/share'}>Share</Link></button>
            </section>
        </div>
    )
}

export default Home