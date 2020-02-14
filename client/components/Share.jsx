import React from 'react'
import { Link } from 'react-router-dom'
import { saveBeach } from '../actions/index'

import { connect } from 'react-redux'


class Share extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            beach: {
                name: '',
                image: '',
                swell: '',
                difficulty: '',
                region: '',
                location_id: 1, //dropdown starts on north so if no change it will always be 1(north)
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
 
    // keep as is
    handleChange = (evt) => {
        
        this.setState({
            beach: {
                ...this.state.beach,
                [evt.target.name]: evt.target.value // sets state of the beach to the form input(evt)
            }, 
        }) 
    }


    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.dispatch(saveBeach(this.state.beach))
        .then(() => {
            this.props.history.push('/') // different way to redirect after the form posts back to database
        }) // doesn't like this!!! the .then is undefined?
    }


    render() {
        return (
            <div className='compBody'>
                <div>
                    <h1 className='pageTitle'>Share your wave</h1>
                    <Link to={'/'}><button className='btn btn-warning'>Home</button></Link>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <label>Wave name: </label>
                    <input
                        type='text'
                        name='name'
                        value={this.state.beach.name}
                        onChange={this.handleChange}
                    />
                    <label>Picture: </label>
                    <input
                        type='text'
                        name='image'
                        value={this.state.beach.image}
                        onChange={this.handleChange}
                    />
                    <label>Average swell (ft): </label>
                    <input
                        type='text'
                        name='swell'
                        value={this.state.beach.swell}
                        onChange={this.handleChange}
                    />
                    <label>Difficulty level: </label>
                    <input
                        type='text'
                        name='difficulty'
                        value={this.state.beach.difficulty}
                        onChange={this.handleChange}
                    />
                    <label>Region: </label>
                    <input
                        type='text'
                        name='region'
                        value={this.state.beach.region}
                        onChange={this.handleChange}
                    />

                    <label>Location: </label>
                    <select className="dropDownLocationId"
                        name="location_id"
                        value={this.state.beach.location_id}
                        onChange={this.handleChange}>
                        <option value="1">North</option>
                        <option value="2">South</option>
                    </select>

                    <input className="btn btn-warning" type="submit"></input>

                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        beach: state.beach
    }
}

export default connect(mapStateToProps)(Share)