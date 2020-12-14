import React, { Component } from 'react'
import {connect} from 'react-redux'
class GlassItem extends Component {
    render() {
        const { glass } = this.props
        return (
            <div>
                <img
                    style={{ width: '100%', marginRight: '10px' }}
                    src={glass.url} alt="" 
                    onClick={()=>this.props.selectGlass(glass)}/>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        selectGlass: (glass) =>{
            const action = {
                type: "SELECT_GLASS",
                value: glass
            }
            dispatch(action)
        }
    }
}
export default connect (null, mapDispatchToProps)(GlassItem)