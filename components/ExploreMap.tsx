import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import ExploreDestination from './ExploreDestination'

export default function ExploreMap() {
    return <>
        <div className='mapLegend'>
            <div>
                These are the places students like you love to go with PRONTO!
                <br />
                Submit a place <a href="https://docs.google.com/forms/d/e/1FAIpQLSe_4YK053JHCKIQX0OIE3cRuzaF9jZ2Y78lwU8LqBo07CF2Gg/viewform">here</a>, and watch the map grow.
                <br />
                <br />
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
            <ExploreDestination name={"UTC"} position={[32.8691902,-117.2137712]} busRoutes={[30, 31, 41, 60, 105, 201, 202, 204, 921]} isBlueLine={true} isBikeFriendly={true}>
                Large shopping center in North County San Diego, near University City High School.
            </ExploreDestination>
            <ExploreDestination name={"Old Town"} position={[32.7541515,-117.1993774]} busRoutes={[8, 9, 10, 28, 30, 35, 44, 83, 88, 105]} isBlueLine={true} isGreenLine={true} isCOASTER={true} isAmtrak={true}>
                The &quot;birthplace of California&quot; is also a busy shopping area and houses one of the region&apos;s largest transit centers.
            </ExploreDestination>
            <ExploreDestination name={"Las Americas Premium Outlets"} position={[32.5439868,-117.0365636]} busRoutes={[906, 907]}>
                A 560,000 square feet outlet mall in San Ysidro, located directly on the US-Mexico border.
            </ExploreDestination>
        </MapContainer>
    </>
}