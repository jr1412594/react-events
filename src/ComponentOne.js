import { Component } from 'react'
import ComponentTwo from "./ComponentTwo";

export default class ComponentOne extends Component {
    state = {
        isLightOn: false,
    }

    toggleLight = () => {
        this.setState({
            isLightOn: !this.state.isLightOn
        })
    }
    render () {
    
        return (
            <div className='component-1'>
                <p>one</p>
                <ComponentTwo toggleLight={this.toggleLight} isLightOn={this.state.isLightOn}/>
            </div>
        )
    }
}


