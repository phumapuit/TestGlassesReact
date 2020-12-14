import React, { Component } from 'react'
import {connect} from 'react-redux'
import GlassItem from './GlassItem'
class GlassList extends Component {
    render() {
        const {glassList} = this.props

        return (
            <div className="glass__list">
                {glassList.map((glass) =>{
                    return(
                        <GlassItem key={glass.id} glass = {glass} />
                    )
                })}
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        glassList : state.glassReducer.glassList,

    }
}

export default connect(mapStateToProps)(GlassList)