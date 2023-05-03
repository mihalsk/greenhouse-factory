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
        
    },
    watch: { 
        coords: function(newVal, oldVal) { // watch it
            myMap.setCenter(newVal, 7, {
                checkZoomRange: true
            });
        }
    },
    mounted() {
        console.log(this.coords);
        var tc = this.coords;
        ymaps.ready(init);
        function init(){
            myMap = new ymaps.Map("ym-map", {
                center: tc,
                zoom: 7
            });
        }
    },
}
</script>
