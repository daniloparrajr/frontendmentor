import { useState, useEffect, useMemo } from "react"
import { MapContainer } from "react-leaflet/MapContainer"
import { TileLayer } from "react-leaflet/TileLayer"
import { Marker } from "react-leaflet/Marker"
import L from "leaflet"

const Map = ({ position }) => {
    const [map, setMap] = useState(null)
    const [marker, setMarker] = useState(null)

    useEffect(() => {
        if (map && marker) {
            map.setView(position)
            marker.setLatLng(position)
        }
    }, [position, map, marker])

    const getMapIcon = () => {
        return new L.Icon({
            iconUrl: require("../icons/icon-location.png"),
            iconSize: [46, 56],
        })
    }

    const displayMap = useMemo(() => {
        return (
            <MapContainer id="map" ref={setMap} className="relative z-10" center={[0, 0]} zoom={13} maxZoom={13}
                          zoomControl={false} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker ref={setMarker} position={[0, 0]} icon={getMapIcon()}></Marker>
            </MapContainer>
        )
    }, [])

    return (
        <>
            {displayMap}
        </>
    )
}

Map.defaultProps = {
    position: [0, 0],
}

export default Map