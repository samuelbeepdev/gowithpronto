import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function ExploreMap() {
    return <>
        <MapContainer zoomControl={false} minZoom={11} maxBounds={[[33.412508,-117.7895363], [32.4920082,-116.8017899]]} center={[32.7123906, -117.157768]} zoom={11} style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0 }}>
            <TileLayer
                attribution='<a href="https://openstreetmap.org">OpenStreetMap</a>'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[32.7123906, -117.157768]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    </>
}