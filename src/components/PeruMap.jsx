// components/PeruMap.jsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Definición de íconos por región
const iconosPorRegion = {
  costa: new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png",
    shadowUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  }),
  sierra: new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
    shadowUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  }),
  selva: new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
    shadowUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  }),
};

// Lista de ciudades del Perú con región y coordenadas
const ciudades = [
  { nombre: "CHIMBOTE", coords: [-9.0745, -78.5936], region: "costa" },
  { nombre: "TRUJILLO", coords: [-8.115, -79.028], region: "costa" },
  { nombre: "CHICLAYO", coords: [-6.7714, -79.8409], region: "costa" },
  { nombre: "PIURA", coords: [-5.1945, -80.6328], region: "costa" },
  { nombre: "TUMBES", coords: [-3.5669, -80.4515], region: "costa" },
  { nombre: "CHINCHA", coords: [-13.4228, -76.1367], region: "costa" },
  { nombre: "PISCO", coords: [-13.7103, -76.2032], region: "costa" },
  { nombre: "ICA", coords: [-14.0678, -75.7286], region: "costa" },

  { nombre: "CAJAMARCA", coords: [-7.1617, -78.5127], region: "sierra" },
  { nombre: "AREQUIPA", coords: [-16.409, -71.537], region: "sierra" },
  { nombre: "CUSCO", coords: [-13.5319, -71.9675], region: "sierra" },
  { nombre: "JULIACA", coords: [-15.4997, -70.1333], region: "sierra" },
  { nombre: "PUNO", coords: [-15.8402, -70.0219], region: "sierra" },
  { nombre: "HUANCAYO", coords: [-12.0651, -75.2049], region: "sierra" },
  { nombre: "TARMA", coords: [-11.4193, -75.6906], region: "sierra" },
  { nombre: "HUANCAVELICA", coords: [-12.7856, -74.9767], region: "sierra" },
  { nombre: "HUARAZ", coords: [-9.5278, -77.5278], region: "sierra" },

  { nombre: "MADRE DE DIOS", coords: [-12.5933, -69.1893], region: "selva" },
  { nombre: "PUCALLPA", coords: [-8.3925, -74.5741], region: "selva" },
  { nombre: "TARAPOTO", coords: [-6.4836, -76.3728], region: "selva" },
];

export default function PeruMap() {
  return (
    <MapContainer
      center={[-9.19, -75.0152]} // Centro aproximado del Perú
      zoom={6}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
      />
      {ciudades.map((ciudad, index) => (
        <Marker
          key={index}
          position={ciudad.coords}
          icon={iconosPorRegion[ciudad.region]}
        >
          <Popup>{ciudad.nombre}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
