import { Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'

interface ExploreDestinationProps {
    name: string,
    position: [number, number],
    children: React.ReactNode,
    busRoutes: number[],
    isBlueLine?: boolean,
    isOrangeLine?: boolean,
    isGreenLine?: boolean,
    isCOASTER?: boolean,
    isAmtrak?: boolean,
    isSPRINTER?: boolean,
    isBikeFriendly?: boolean,
}

export default function ExploreDestination(props: ExploreDestinationProps) {
    return <Marker icon={new Icon({ iconUrl: '/place.png', iconSize: [50, 50] })} position={props.position}>
        <Popup className='mapDestinationBox'>
            <h1>{props.name}</h1>
            <h2>{props.children}</h2>

            {props.isBlueLine && <><span style={{ color: '#0070BF' }}>UC San Diego Blue Line</span>
            <br /></>}
            {props.isOrangeLine && <><span style={{ color: '#FF8F00' }}>Orange Line</span>
            <br /></>}
            {props.isGreenLine && <><span style={{ color: '#00AB46' }}>Green Line</span>
            <br /></>}
            {props.isCOASTER && <><span style={{ color: '#01606A' }}>COASTER</span>
            <br /></>}
            {props.isAmtrak && <><span style={{ color: '#01606A' }}>Amtrak Pacific Surfliner</span>
            <br /></>}
            {props.isSPRINTER && <><span style={{ color: '#01606A' }}>SPRINTER</span>
            <br /></>}

            <span style={{ color: '#000099' }}><>Bus routes {props.busRoutes.join(', ')}</></span>
            <br />
            {props.isBikeFriendly && <span style={{ color: 'darkgreen' }}>Bike Friendly</span>}

            <p><a href=""></a></p>
        </Popup>
    </Marker>
}