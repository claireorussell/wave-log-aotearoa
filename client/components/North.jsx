import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
//import data from getBeaches api file
import { getNorthBeaches } from '../actions/index'



class North extends React.Component {

    componentDidMount() {
        this.props.dispatch(getNorthBeaches())

    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                        <Link to={'/'}><button className='btn'>Home</button></Link>
                        <Link to={'/north'}><button className='btn on'>North island</button></Link>
                        <Link to={'/south'}><button className='btn'>South island</button></Link>
                        <Link to={'/share'}><button className='btn'>Log your wave</button></Link>
                    </div>


                    <div className='col-9'>
                        <h1 className='pageTitle'>North island</h1>

                        {this.props.beaches.map(beach => {
                            return (
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <h3 className='waveTitle'>{beach.name}</h3>
                                        <img className='img'src={beach.image} />
                                    </div>
                                    <div className='col-md-6'>
                                        <p>Find me in {beach.region} region</p>
                                        <p>My average swell size is {beach.swell}</p>
                                        <p>The level of difficulty is {beach.difficulty}</p>
                                    </div>
                                    </div>
                            )
                        })}
                
            </div>
            </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        beaches: state.beaches
    }
}

export default connect(mapStateToProps)(North)
