import React from 'react';
import s from './MapButton.module.css';

const MapButton = ({ desktop }) => {
  const handleOpenMaps = () => {
    const destination =
      'Мічуріна вул. 5, Слобожанський, Дніпропетровська область, Україна';
    const travelMode = 'driving';

    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      destination
    )}&travelmode=${travelMode}`;

    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleOpenMaps}
      className={`${s.btn} ${desktop ? s.desktop : s.mobile}`}
    >
      Маршрут
    </button>
  );
};

export default MapButton;
