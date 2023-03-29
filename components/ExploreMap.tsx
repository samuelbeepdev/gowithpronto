import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import ExploreDestination from './ExploreDestination'

export default function ExploreMap() {
    return <>
        <div className='mapLegend'>
            <div>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAWBAMAAAAlTTH8AAAABlBMVEUAAAD/AAAb/40iAAAAAnRSTlMAZtJCCVUAAAATSURBVBiVY2AY5EAQFWDwBzkAAGAPAf9q2Z7+AAAAAElFTkSuQmCC" alt="OSM indicator for bus" className='mapLegendImg mapLegendImgBuiltin' />
                Bus, Rapid, Rural Service, and BREEZE
                <br />
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAWBAMAAAAlTTH8AAAABlBMVEUAAAAA/gAvWHX8AAAAAnRSTlMAmf9A5tgAAAATSURBVBiVY2AYZEAQFZDMH2QAAL6+A/0CkDWJAAAAAElFTkSuQmCC" alt="OSM indicator for Light Rail" className='mapLegendImg mapLegendImgBuiltin' />
                Trolley and SPRINTER
                <br />
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAWBAMAAAAlTTH8AAAADFBMVEUAAADLkjrmlxvxoiaw1HLjAAAAAnRSTlMAsyT7Lw4AAAAdSURBVBiVY2AYZEAQFTAYg4ESGAAZGHx09YMMAADxDgctczZrQgAAAABJRU5ErkJggg==" alt="OSM indicator for Railway" className='mapLegendImg mapLegendImgBuiltin' />
                COASTER, Amtrak, other regional rail
                <br />
                <img src="/place.png" className='mapLegendImg' />
                Popular on PRONTO
                <br />
                <br />
                Powered by Leaflet and OpenStreetMap.
                <br />
                Some services shown may require added payment.
            </div>
        </div>
        <MapContainer attributionControl={false} zoomControl={false} minZoom={11} maxBounds={[[33.412508,-117.7895363], [32.4920082,-116.8017899]]} center={[32.7123906, -117.157768]} zoom={13} style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0 }}>
            <TileLayer
                className='mapTileLayer'
                url="https://tile.memomaps.de/tilegen/{z}/{x}/{y}.png"
            />
            <ExploreDestination name={"Balboa Park"} position={[32.731455, -117.150468]} busRoutes={[7, 215, 3, 120]} isBikeFriendly={true}>
                Steps (or a quick bus ride) from San Diego High School, this massive park has something for everyone.
            </ExploreDestination>
        </MapContainer>
    </>
}