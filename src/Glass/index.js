import React, { Component } from 'react'
import GlassList from './GlassList'
import TryGlass from './TryGlass'
export default class Glass extends Component {
    render() {
        return (
            <div
                className="body"
                style={{ backgroundImage: "url('./image/glassesImage/background-replace.jpg')" }}>
                <h1 className="logo-header text-center">TRY GLASSES APP ONLINE</h1>
                <TryGlass />
                <GlassList />
            </div>
        )
    }
}
