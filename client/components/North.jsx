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
                        <h1 className='pageTitle'>North island</h1>

                        {this.props.beaches.map(beach => {
                            return (
                                <div className='row'>
                                        <h3 className='waveTitle'>{beach.name}</h3>
                                        <div className='col-8'>
                                        <img className='img'src={beach.image} />
                                    </div>
                                    <div className='col-4 info'>
                                        <p>Find me in {beach.region} region</p>
                                        <p>My average swell size is {beach.swell}</p>
                                        <p>The level of difficulty is {beach.difficulty}</p>
                                    </div>
                                    </div>
                            )
                        })}
                
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
