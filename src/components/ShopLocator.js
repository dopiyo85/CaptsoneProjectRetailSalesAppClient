import React, { useState, useEffect } from "react"; 
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const ShopLocator = () => {
  const [shops, setShops] = useState([]);
  const [position, setPosition] = useState([-1.286389, 36.817223]);

  useEffect(() => {
    // Fetch shop data from the backend API
    fetch("/api/shopLocator")
      .then((response) => response.json())
      .then((data) => {
        // Set the fetched shop data to the state
        setShops(data);
      })
      .catch((error) => {
        console.error("Error fetching shop data:", error);
      });
  }, []);

  const handleMapClick = (e) => {
    setPosition([e.latlng.lat, e.latlng.lng]);
  };

  return (
    <div>
      <h1>Shop Locator</h1>
      <MapContainer center={position} zoom={13} onClick={handleMapClick}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {shops.map((shop) => (
          <Marker
            key={shop._id}
            position={[shop.latitude, shop.longitude]}
          >
            <Popup>{shop.shopName}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default ShopLocator;
