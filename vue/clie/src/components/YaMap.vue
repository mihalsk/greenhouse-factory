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
                    var tcoords = newVal.coords.match(/(\d{1,2}\.\d{1,4})/g);
                    console.log(tcoords);
                    myMap.setCenter(tcoords, 7, {
                        checkZoomRange: true
                    });
                    myPlacemark = new ymaps.Placemark(tcoords, {
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
    created() {
        var ycoords = this.city === null ? [37.64, 55.761] : this.city.coords;
        ymaps.ready(init);
        function init(){
            myMap = new ymaps.Map("ym-map", {
                center: ycoords,
                zoom: 7
            });
        }
    },
}
</script>
