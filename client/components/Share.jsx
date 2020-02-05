import React from 'react'

import { shareBeach } from '../api/index'

class Share extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            beach: {
                name: '',
                image: '',
                swell: 0,
                difficulty: 0,
                region: '',
                location_id: 0,
            }
        }
    }

    handleChange = (evt) => {
        this.setState({
            beach: {
                ...this.state.beach,
                [evt.target.name]: evt.target.value
            }
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        shareBeach(this.state.beach)
    }
   

    render() {
        return (
            <div>
                <h1>Share your wave</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Wave name: </label>
                    <input
                        type='text'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <label>Picture: </label>
                    <input
                        type='text'
                        name='image'
                        value={this.state.image}
                        onChange={this.handleChange}
                    />
                    <label>Average swell (ft): </label>
                    <input
                        type='text'
                        name='swell'
                        value={this.state.swell}
                        onChange={this.handleChange}
                    />
                    <label>Difficulty level: </label>
                    <input
                        type='text'
                        name='difficulty'
                        value={this.state.difficulty}
                        onChange={this.handleChange}
                    />
                    <label>Region: </label>
                    <input
                        type='text'
                        name='region'
                        value={this.state.region}
                        onChange={this.handleChange}
                    />
                    
                    <label>Location: </label>
                    <select 
                        name="location_id"
                        value={this.state.location_id}
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

export default Share