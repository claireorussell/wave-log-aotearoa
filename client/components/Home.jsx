import React from 'react'
import { Link } from 'react-router-dom'


class Home extends React.Component {

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                    <Link to={'/'}><button className='btn on'>Home</button></Link>
                        <Link to={'/north'}><button className='btn'>North island</button></Link>
                        <Link to={'/south'}><button className='btn'>South island</button></Link>
                        <Link to={'/share'}><button className='btn'>Log your wave</button></Link>
                    </div>
                    <div className='col-9'>
                        <h2 className='aotearoaTitle'>Aotearoa</h2>
                        <h1 className='mainTitle'>Wave log</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home