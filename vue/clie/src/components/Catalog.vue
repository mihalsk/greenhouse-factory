<template>
  <div id="slider" class="container position-relative">
    <div class="hdiv row gx-5 p-0 m-0" @scroll="scrollHandler"
        :class="className">
        <!-- <transition-group name="list" tag="p"> -->
          <Card class="col-md p-0" v-for="good in goods" @imgClick="imgClick" :srcLink="good.photo" :name="good.name" :price="good.price" :measure="'комп.'" :btnText="'Заказать'" v-bind:key="good.id">
          </Card>
        <!-- </transition-group> -->
    </div>
    <!--:style="{ height: fixHeight > 0 ? fixHeight + 'px' : 'auto' }" <button class="slider-btn slider-btn-next p-0"><i class="slider-arrow slider-right"></i></button>
    <button class="slider-btn slider-btn-prev p-0"><i class="slider-arrow slider-left"></i></button> -->
    <button class="arrow-buttons arrow-btn-next" @click="moveSlider(1)">
      <div class="d-flex flex-wrap justify-content-center">
        <div class="arrow-button arrow-button--r"></div>
      </div>
    </button>
    <button class="arrow-buttons arrow-btn-prev" @click="moveSlider(-1)">
      <div class="d-flex flex-wrap justify-content-center">
        <div class="arrow-button arrow-button--l"></div>
      </div>
    </button>
    <ModalWindow
      v-show="isPreviewModalVisible"
      @close="closePreviewModal">
      <template v-slot:body>
        <div class="w-75 container">
          <div class="row justify-content-center">
            <img class="col-md align-self-center" :src='`${currentPreviewSrc !== "" ? currentPreviewSrc : "/static/not-found.jpg"}`'>
          </div>
        </div>
      </template>
    </ModalWindow> 
    <div class="overlap" v-show="goodsLoading">
      <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  </div>
</template>
  
<script>

import axios from 'axios';
import Card from '@/components/Card';
import ModalWindow from '@/components/ModalWindow.vue';

//var start = 0;
// var oldStart = start;
// const count = isMobile ? 1 : 4;
var delta = 0;
export default {
  name: "Catalog",
  props: {
    className: {
      required: false,
      type: String
    },
    srcLink: {
      required: false,
      type: String
    },
  },
  components: {
    Card,
    ModalWindow,
  },
  data () {
    return { 
      goods: [],
      prevGood: null,
      nextGood: null,
      isPreviewModalVisible: false,
      currentPreviewSrc: "",
      goodsLoading: false,
      start: 0,
      isMobile: window.innerWidth <= 768,
      fixHeight: 0,
      touchstartX: 0,
      touchstartY: 0,
      touchendX: 0,
      touchendY: 0,
      deltaTouchX: 0,
      deltaTouchY: 0,
      maxOffset: 0,
      oldStart: 0,
    };
  },
  created() {
    window.addEventListener("resize", this.resizeHandler);
    
  },
  mounted() {
    this.resizeHandler();
    var el = document.querySelector('.hdiv');
    el.addEventListener('touchstart', async (event) => {
      event.preventDefault();
      this.touchstartX = event.changedTouches[0].screenX;
      this.touchstartY = event.changedTouches[0].screenY;
    }, false);

    el.addEventListener('touchend', async (event) => {
      event.preventDefault();
      this.touchendX = event.changedTouches[0].screenX;
      this.touchendY = event.changedTouches[0].screenY;
      this.deltaTouchX = event.changedTouches[0].screenX - this.touchstartX;
      this.deltaTouchY = event.changedTouches[0].screenY - this.touchstartY;
      this.gestureHandler();
    }, false); 
    // el.addEventListener('touchcancel', async (event) => {
    //   //if(event.touches.length == 0) return;
    //   this.touchendX = this.TargetTouch.screenX;
    //   this.touchendY = this.TargetTouch.screenY;
    //   console.log(event.type, this.touchendX, this.touchendY)
    //   this.gestureHandler();
    // }, false);
    el.addEventListener('wheel', async (event) => {
      event.preventDefault();
      // document.querySelector('.hdiv').scrollBy({
      //   left: event.deltaY < 0 ? -50 : 50,
      // });

      // oldStart = start;
      // start += event.deltaY < 0 
      // ? start == 0 ? 0 : -1 
      // : start + count < maxCount + deltaCount ? 1 : 0;
      // //     start += count;
      // if (oldStart !== start){
      //   var g = (await this.loadGoods(start, count)).data;
      //   console.log(start, maxCount);
      //   if (g.length < count) deltaCount = 0;
      //   else maxCount = start + g.length > maxCount ? start + g.length: maxCount;
      //   this.goods = g;
      // }

      
      delta = event.deltaY < 0 ? -1 : 1;
      this.moveSlider(delta);
    })
  },
  updated: function () {
    this.$nextTick(function () {
      this.fixHeight = document.getElementById('slider').offsetHeight;
    })
  },
  computed: {
    count: function() {
      console.log('count ', this.isMobile ? 1 : 4) 
      return this.isMobile ? 1 : 4
    },
  },
  methods: {
    gestureHandler() {
      // if (this.touchendX < this.touchstartX) { // left
      //   this.moveSlider(1);
      // };
      // if (this.touchendX > this.touchstartX) { // right
      //   this.moveSlider(-1);
      // };
      // if (this.touchendY < this.touchstartY) { // up
      //   console.log('up', this.touchendY - this.touchstartY);
      //   window.scrollBy(0, this.touchstartY - this.touchendY);
      // };
      // if (this.touchendY > this.touchstartY) { // down
      //   console.log('down', this.touchendY - this.touchstartY);
      //   window.scrollBy(0, this.touchstartY - this.touchendY);
      // };
      // if (this.touchendY == this.touchstartY) { // tap
      // };
      if (Math.abs(this.deltaTouchX) > Math.abs(this.deltaTouchY))
        if (this.deltaTouchX < 0) { // left
          this.moveSlider(1);
        }
        else {
          this.moveSlider(-1);
        }
      else
        window.scrollBy({
          top: -3*this.deltaTouchY,
          left: 0,
          behavior: "smooth",
        });
        // if (this.deltaTouchY > 0) { // left
        //   this.moveSlider(1);
        // }
        // else {
        //   this.moveSlider(-1);
        // };
    },
    async moveSlider(delta) {
      this.oldStart = this.start;
      this.start += delta;
      if (this.start < 0) this.start = 0;
      var offset = delta < 0 ? this.start: this.start + this.count - 1;
      offset = this.maxOffset > 0 && offset > this.maxOffset ? this.maxOffset: offset;
      var el = (await this.loadGoods(offset, 1)).data;
      if (offset > 0 && el.length == 0) {
        this.maxOffset = offset;
        this.start = this.oldStart
      };
      console.log(this.start, offset);
      if (el.length > 0 && !this.goods.some(obj => obj.id === el[0].id))
      {
        if (delta < 0) {
          this.goods.pop();
          this.goods.unshift(...el);
        }
        else {
          this.goods.shift();
          this.goods.push(...el);       
        }
      }
    },
    async sliderInit() {
      console.log(window.innerWidth, this.isMobile, this.count, `http://${this.$apihost}:8000/goods?offset=${this.start}&limit=${this.count}`);
      // axios
      // .get(`http://${this.$apihost}:8000/goods?offset=${this.start}&limit=${this.count}`)
      // .then(response => {
      //   this.goods = response.data;
      // })
      // .then(() => this.fixHeight = document.getElementById('slider').offsetHeight)
      // .catch(error => {
      //   console.log(error);
      //   this.goodsErrored = true;
      // })
      // .finally(() => (this.goodsLoading = false));
      this.goods = (await this.loadGoods(this.start, this.count)).data;
      
    },
    resizeHandler() {
      this.isMobile = window.innerWidth <= 768;
      console.log('isMobile ', this.isMobile)
      this.sliderInit();
      //this.fixHeight = document.getElementById('slider').offsetHeight;
      //console.log('this.fixHeight ', this.fixHeight);
    },
    replaceByDefault(e) {
      e.target.src = require('../assets/not-found.jpg');
    },
    async loadGoods(start, count) {
      this.goodsLoading = true;
      return axios.get(`http://${this.$apihost}:8000/goods?offset=${start}&limit=${count}`).finally(() => (this.goodsLoading = false))
    },
    showPreviewModal(event) {
      this.isPreviewModalVisible = true;
    },
    closePreviewModal(event) {
      this.isPreviewModalVisible = false;
    },


    imgClick(src) {
      this.currentPreviewSrc = `/static/${src.replace('T-crab','T-crab@2x')}`; // ;-(
      this.isPreviewModalVisible = true;
    },
    async scrollHandler(event) {
      var el = document.querySelector('.hdiv');
      // if (event.target.scrollLeft < 30){
      //     console.log('start');
      // }
      // if (event.target.scrollWidth - event.target.offsetWidth - event.target.scrollLeft < 30){
      //     console.log('end');
      //     start += count;
      //     var g = (await this.loadGoods(start, count)).data;
      //     console.log(start, count, g)
      //     this.goods.push(...g);
      // }
    },
  },
}
</script>
<style scoped>
  /* .div {
    background-color: white;
    border-radius: 3px;
    margin: 15px;
    padding: 0;
    box-shadow: 0px 5.10782px 11.4926px rgba(0, 0, 0, 0.15);
    width: 30em;
    overflow-x: auto;
    white-space: nowrap;
  } */
.container > .row { 
  -webkit-overflow-scrolling: touch; 
}
.arrow-buttons {
    position: absolute;
    width: 40px;
    height: 40px;
    padding: 10px;
    border: none;
    border-radius: 50%;
    z-index: 10px;
    cursor: pointer;
    background-color: #fff;
    font-size: 18px;
    border: #868686;
    border-width: 1px;
    /* align-content: center; */
}
.arrow-buttons:active {
  transform: scale(1.1);
}
.arrow-button {
    /* Transparent background */
    background-color: transparent;

    /* Size */
    height: 12px;
    width: 12px;
    top: 50%;
    left: 50%;
}
.arrow-btn-prev {
  top: 45%;
  left: 2%;
  align-content: start;
}
.arrow-btn-next {
  top: 45%;
  right: 2%;
  align-content: end;
} 
.arrow-button--r {
    /* Edges */
    border-right: 1px solid #00930f;
    border-top: 1px solid #00930f;
    transform: translateX(-25%) rotate(45deg);
}

.arrow-button--l {
    /* Edges */
    border-bottom: 1px solid #00930f;
    border-left: 1px solid #00930f;
    transform: translateX(25%) rotate(45deg);
}

@media only screen and (max-width : 576px)
{
  .container > .row {
    overflow-x: none;
    -webkit-overflow-scrolling: touch;
  }
  .arrow-btn-prev {
    top: 45%;
    left: 5%;
  }
  .arrow-btn-next {
    top: 45%;
    right: 5%;
  } 
}
  ::-webkit-scrollbar {
  width: 20px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 3px grey;
  border-radius: 3px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(237, 226, 226);
  box-shadow: inset 0 0 3px rgb(127, 104, 104);
  border-radius: 3px;
}

/* spinner */

.overlap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    align-content: center;
    display: flex;
}
.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  margin: auto;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #fff;
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


</style>