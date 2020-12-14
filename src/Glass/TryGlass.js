import React, { Component } from 'react'
import { connect } from 'react-redux'
class TryGlass extends Component {
    render() {
        const { selectedGlass } = this.props
        return (
            <div className="try__glass">
                <div className="try__glass-after">
                    <img
                        style={{ width: '200px', height: '250px' }}
                        src="./image/glassesImage/model.jpg" alt="" />
                    <img className="glass-test" src={selectedGlass.url} alt="" />
                    <div className="glass-desc">
                        <p>{selectedGlass.name}</p>
                        <p>{selectedGlass.desc}</p>
                    </div>
                </div>
                <div>
                    <img
                        style={{ width: '200px', height: '250px' }}
                        src="./image/glassesImage/model.jpg" alt="" />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        selectedGlass: state.glassReducer.selectedGlass
    }
}
export default connect(mapStateToProps)(TryGlass)