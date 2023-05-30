<template>
  <div class="container">
    <div id="hdiv" class="row flex-nowrap overflow-auto" @scroll="scrollHandler"
        :class="className">
        <Card class="col-md" v-for="good in goods" @imgClick="imgClick" :srcLink="good.photo" :name="good.name" :price="good.price" :measure="'комп.'" :btnText="'Заказать'" v-bind:key="good.id">
        </Card>
    </div>
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
  </div>
</template>
  
<script>

import axios from 'axios';
import Card from '@/components/Card';
import ModalWindow from '@/components/ModalWindow.vue';

var start = 0;
var count = 5;
export default {
  name: "HScrollDiv",
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
    isPreviewModalVisible: false,
    currentPreviewSrc: "",
  };
},
  created() {
    axios
    .get(`http://${this.$apihost}:8000/goods?offset=${start}&limit=${count}`)
    .then(response => {
      this.goods = response.data;
    })
    .catch(error => {
      console.log(error);
      this.goodsErrored = true;
    })
    .finally(() => (this.goodsLoading = false));
  },
  mounted() {
    document.querySelector('#hdiv').addEventListener('wheel', (event) => {
      event.preventDefault();
      //console.log(event.target);
      document.querySelector('#hdiv').scrollBy({
        left: event.deltaY < 0 ? -50 : 50,
      });
    })
  },
  methods: {
    replaceByDefault(e) {
      e.target.src = require('../assets/not-found.jpg');
    },
    loadGoods(start, count) {
      return axios.get(`http://${this.$apihost}:8000/goods?offset=${start}&limit=${count}`)
    },
    showPreviewModal(event) {
      this.isPreviewModalVisible = true;
      console.log(880);
    },
    closePreviewModal(event) {
      this.isPreviewModalVisible = false;
    },


    imgClick(src) {
      this.currentPreviewSrc = `/static/${src.replace('T-crab','T-crab@2x')}`; // ;-(
      this.isPreviewModalVisible = true;
    },
    async scrollHandler(event) {
      var el = document.querySelector('#hdiv');
      if (event.target.scrollLeft < 30){
          console.log('start');
      }
      if (event.target.scrollWidth - event.target.offsetWidth - event.target.scrollLeft < 30){
          console.log('end');
          start += count;
          var g = (await this.loadGoods(start, count)).data;
          console.log(start, count, g)
          this.goods.push(...g);
      }
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
@media only screen and (max-width : 576px)
{
  .container > .row {
    overflow-x: none;
    -webkit-overflow-scrolling: touch;
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

</style>