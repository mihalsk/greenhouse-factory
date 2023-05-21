import React, { useEffect, useState } from 'react';
import "./YaMap.css";
export default function YaMap(props) {
    const { className, city } = props;
    const [myMap, setMyMap] = useState(null);
    const [myPlacemark, setMyPlacemark] = useState(null);
    const [ymaps, setYmaps] = useState(window.ymaps);

    const handler = () => { 
        if (city !== null && city !==undefined && myMap !== null){
            console.log(city);
            var coords = city.coords.match(/(\d{1,2}\.\d{1,4})/g);
            myMap.setCenter(coords, 7, {
                checkZoomRange: true
            });
            var myPlacemark = new ymaps.Placemark(coords, {
                balloonContentHeader: "Офис",
                balloonContentBody: `${city.name}`,
                balloonContentFooter: `${city.phone}`,
                hintContent: `Офис ${city.name}`
            })
            myMap.geoObjects.add(myPlacemark)
        }
    }
    useEffect(() => {
        ymaps.ready(() => {
            var coords = city === null || city === undefined ? [55.7558, 37.6173] : city.coords.match(/(\d{1,2}\.\d{1,4})/g);
            console.log(city)
            setMyMap(new ymaps.Map("ym-map", {
                center: coords,
                zoom: 7
            }));
            if (city !== null && city !==undefined && myMap !== null) {
                setMyPlacemark(new ymaps.Placemark(coords, {
                    balloonContentHeader: "Офис",
                    balloonContentBody: `${city.name}`,
                    balloonContentFooter: `${city.phone}`,
                    hintContent: `Офис ${city.name}`
                }))
                myMap.geoObjects.add(myPlacemark);
            }
        })
        return () => {
        }
    }, [])
    useEffect(() => {
        if (city !== null && city !==undefined && myMap !== null)
            handler()
    }, [city, myMap])
    return (
        <div id="ym-map" className={className}>
        </div>
    );
}