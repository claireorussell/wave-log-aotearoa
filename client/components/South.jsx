import React from 'react'
import { connect } from 'react-redux'
import { getSouthBeaches } from '../actions/index'
import Beach from './Beach'



    class South extends React.Component {
        constructor(props) {
            super(props)
        }
    
        componentDidMount() {
            this.props.dispatch(getSouthBeaches())
    
        }
    
        render() {
            return (
                <div className='container'>
                    <h1 className='pageTitle'>South island</h1>
    
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

export default connect(mapStateToProps)(South)