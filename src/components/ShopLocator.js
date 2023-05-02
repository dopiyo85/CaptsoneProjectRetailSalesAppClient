// import React, { useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// const ShopLocator = () => {
//   const [position, setPosition] = useState([51.505, -0.09]);

//   const icon = L.icon({
//     iconUrl: 'marker-icon.png',
//     iconRetinaUrl: 'marker-icon-2x.png',
//     iconSize: [25, 41],
//     iconAnchor: [12, 41],
//     popupAnchor: [0, -41],
//   });

//   return (
//     <div>
//       <h1>Shop Locator</h1>
//       <MapContainer center={position} zoom={13} style={{ height: '500px' }}>
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//         <Marker position={position} icon={icon}>
//           <Popup>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//   );
// };

// export default ShopLocator;
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const ShopLocator = () => {
  const [position, setPosition] = useState([51.505, -0.09]);

  const handleMapClick = (e) => {
    setPosition([e.latlng.lat, e.latlng.lng]);
  };

  return (
    <div>
      <h1>Shop Locator</h1>
      <MapContainer center={position} zoom={13} onClick={handleMapClick}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>Your location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ShopLocator;
