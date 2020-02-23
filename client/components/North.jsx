import React from 'react'
import { connect } from 'react-redux'
import { getNorthBeaches } from '../actions/index'
import Beach from './Beach'



class North extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.dispatch(getNorthBeaches())

    }

    render() {

        return (
            <div>
                <h1 className='pageTitle'>North island</h1>

                {this.props.beaches.map((beach) => {
                    return (
                        <div>
                            <Beach beach={beach} />
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
