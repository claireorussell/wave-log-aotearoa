import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
//import data from getBeaches api file
import { getNorthBeaches } from '../actions/index'



class North extends React.Component {
    
    state = {
        beachImg: true
    }

    componentDidMount() {
        this.props.dispatch(getNorthBeaches())
       
    }

    handleChange(e) {
        e.preventDefault()
        if (this.state.beachImg == true) {
            this.setState({
                beachImg: false,
            })
        } else {
            this.setState({
                beachImg: true,
            })
        }
    }


    render() {
        return (
            <section className='compBody'>
                <div>
                    <h1 className='pageTitle'>North island</h1>
                    <Link to={'/'}><button className='btn btn-warning'>Home</button></Link>
                </div>
                <div className='info'>
                {this.props.beaches.map(beach => {
                    return (
                        <section className='section' onClick={this.handleChange}>
                            <h3 className='waveTitle'>{beach.name}</h3>
                            {this.props.beachImg == true ? <img className='beachInfo' src={beach.image} /> : <div>
                                <p>Find me in {beach.region} region</p>
                                <p>My average swell size is {beach.swell}</p>
                                <p>The level of difficulty is {beach.difficulty}</p>
                            </div>
                            }
                        </section>
                    )
                })}
            </div>
            </section>
        )
    }
}


function mapStateToProps(state){
    return {
    beaches: state.beaches
    }
}

export default connect(mapStateToProps)(North)



/*
create route file to use new server route /

*/