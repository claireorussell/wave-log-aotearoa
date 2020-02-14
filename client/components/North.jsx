import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
//import data from getBeaches api file
import { getNorthBeaches } from '../actions/index'



class North extends React.Component {
    
    componentDidMount() {
        this.props.dispatch(getNorthBeaches())
       
    }

    // handleChange(e) {
    //     e.preventDefault()
    //     // if (this.state.beachImg == true) {
    //     //     this.setState({
    //     //         beachImg: false,
    //     //     })
    //     // } else {
    //     //     this.setState({
    //     //         beachImg: true,
    //     //     })
    //     // }
    // }


    render() {
        return (
            <div className='compBody'>
                <div>
                    <h1 className='pageTitle'>North island</h1>
                    <button className='btn btn-warning'><Link to={'/'}>Wave home</Link></button>
                </div>

                {this.props.beaches.map(beach => {
                    console.log(beach)
                    return (
                        <section className='section' onClick={this.handleChange}>
                            <h3 className='waveTitle'>{beach.name}</h3>
                            {this.props.beachImg == true ? <img className='beachImage' src={beach.image} /> : <div className='info'>
                                <p>Find me in {beach.region} region</p>
                                <p>My average swell size is {beach.swell}</p>
                                <p>The level of difficulty is {beach.difficulty}</p>
                            </div>
                            }
                        </section>
                    )
                })}

            </div>
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