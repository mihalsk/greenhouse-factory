<template>
    <div id="ym-map" :class="className" :style="cssStyle"></div>
</template>
<style scoped>
#ym-map {
    display: block;
    max-width: 100%;
    height: 500px;
}
@media only screen and (max-width: 768px) {
    #ym-map {
    display: block;
    max-width: 95%;
    height: 200px;
}
}
</style>
<script>
var myMap = null;
var myPlacemark = null;
export default {
    props: {
        className: {
            required: false,
            type: String
        },
        width: {
            required: false,
            type: String
        },
        height: {
            required: false,
            type: String
        },
        cssStyle: {
            required: false,
            type: String
        },
        coords: {
            required: false,
            default() {
                return [37.64, 55.761]
            },
            type: Array
        },
        city: {
            required: false,
            default() {
                return null
            },
            type: Object
        },
        
    },
    watch: { 
        city: {
            immediate: true,
            deep: true,
            handler(newVal, oldVal) { // watch it
                console.log(111, newVal, myMap);
                if (newVal !== null && myMap !== null){
                    var coords = newVal.coords.match(/(\d{1,2}\.\d{1,4})/g);
                    myMap.setCenter(coords, 7, {
                        checkZoomRange: true
                    });
                    myPlacemark = new ymaps.Placemark(coords, {
                        balloonContentHeader: "Офис",
                        balloonContentBody: `${newVal.name}`,
                        balloonContentFooter: `${newVal.phone}`,
                        hintContent: `Офис ${newVal.name}`
                    });
                    myMap.geoObjects.add(myPlacemark);
                }
            }
        }
    },
    methods: {
        init() {
            console.log(777);
            var coords = this.city === null ? [55.7558, 37.6173] : this.city.coords.match(/(\d{1,2}\.\d{1,4})/g);
            myMap = new ymaps.Map("ym-map", {
                center: coords,
                zoom: 7
            });
            if (this.city !== null) {
                myPlacemark = new ymaps.Placemark(coords, {
                    balloonContentHeader: "Офис",
                    balloonContentBody: `${this.city.name}`,
                    balloonContentFooter: `${this.city.phone}`,
                    hintContent: `Офис ${this.city.name}`
                });
                myMap.geoObjects.add(myPlacemark);
            }
        },
    },
    created() {
        ymaps.ready(this.init);
    },
}
</script>
