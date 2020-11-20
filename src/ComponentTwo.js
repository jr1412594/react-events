import ComponentThree from './ComponentThree'

export default function ComponentTwo(props) {
    return (
        <div className="component-2">
            <p>Component two the light is {props.isLightOn ? "On!" : "Off!"}</p>
            <ComponentThree toggleLight={props.toggleLight}/>
        </div>
    )
}
