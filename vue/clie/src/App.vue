<template>
  <div id="app" class="w-100 row d-flex justify-content-center align-items-center">
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    
    <div class="header w-100 row d-flex justify-content-center align-items-center">
      <div class="w-100 row d-flex justify-content-center align-items-center">
        <div class="container row">
          <MainMenu @showmodal1="showCitiesModal()" @showmodal2="showCallModal()" :cityName="this.city == null ? '' : this.city.name" :phone="this.city == null ? '' :this.city.phone"></MainMenu>
        </div>
      </div>
      
    </div>

    <div class="cons w-100 row d-flex justify-content-center align-items-center">
      <div class="w-100 flex-column d-flex justify-content-center align-items-center">
        <div class="container row">
          <div class="col-md-4 flex-column d-flex justify-content-left p-5">
            <div class="row font-weight-bold h3">КРАБ-СИСТЕМА</div>
            <div class="row"><p>Для быстровозводимых<br/>каркасных конструкций</p></div>
            <btn :title="'Получить консультацию'" @action="showConsultationModal"/>
          </div>
        </div>
      </div>
    </div>

    <div class="advantages w-100 flex-column d-flex justify-content-center align-items-center">
      <!-- <div class="w-75 flex-column d-flex justify-content-center align-items-center"> -->
        <div class="text-center font-weight-bold h3">ПРЕИМУЩЕСТВА СИСТЕМЫ</div>
        <div class="column">
            <div class="container row">
              <AdvItem className="col-md" srcLink="bodybuilding.svg">
                <template v-slot:text>
                  <p class="h6 font-weight-bold">Высокая прочность, жёсткость и надёжность</p>
                  <p>По прочности  соединение с помощью краб-системы ничем не уступает сварке</p>
                </template>
              </AdvItem>
              <AdvItem className="col-md" srcLink="piggy.svg">
                <template v-slot:text>
                  <p class="h6 font-weight-bold">Низкая стоимость</p>
                  <p>Цена конструкции относительна низка, так как:<br/>
                      -Вам не нужно использовать сварочный аппарат<br/>
                      -Работу Вы можете сделать своими руками
                  </p>
                </template>
              </AdvItem>
            </div>
          <div class="container row">
            <AdvItem className="col-md" srcLink="cycle.svg">
              <template v-slot:text>
                <p class="h6 font-weight-bold">Возможность многоразового использования</p>
                <p>Система соединения позволяет перестроить конструкцию - уменьшить, увеличить размеры</p>
              </template>
            </AdvItem>
            <AdvItem className="col-md" srcLink="montage.svg">
              <template v-slot:text>
                <p class="h6 font-weight-bold">Простота монтажа</p>
                <p>Для выполнения работ Вам не требуется специальных знаний, Краб-система закрепляется при помощи болтов и гаек</p>
              </template>
            </AdvItem>
          </div>
        </div>
      <!-- </div> -->
      
    </div>

    <div  ref="catalog" class="catalog w-100 d-flex justify-content-center align-items-center flex-column">
      <div class="text-center font-weight-bold h3">ВСЕГДА В НАЛИЧИИ</div>
      <div class="d-flex justify-content-center align-items-center flex-row">
        <div class="container row">
          <Card class="col-md" v-for="good in this.goods.slice(0, 4)" @imgClick="imgClick" :srcLink="good.photo" :name="good.name" :price="good.price" :measure="'комп.'" :btnText="'Заказать'" v-bind:key="good.id">
          </Card>
        </div>
      </div>
    </div>

    <div class="why w-100 d-flex justify-content-center align-items-center flex-column">
      <div class="text-center h3">ПОЧЕМУ МЫ?</div>
      <div class="">
        <div class="container row">
          <WhyItem className="col-md" srcLink="factory.svg">
            <template v-slot:text>
              <p class="h6 font-weight-bold">Собственное производство</p>
              <p>Мы изготавливаем элементы краб-системы на собственном производстве в Вологде, уделяя особое внимание качеству.</p>
            </template>
          </WhyItem>
          <WhyItem className="col-md" srcLink="truck.svg">
            <template v-slot:text>
              <p class="h6 font-weight-bold">Доставка по всей России</p>
              <p>Мы осуществляем доставку нашей продукции по всей России. 
              </p>
            </template>
          </WhyItem>
          <WhyItem className="col-md" srcLink="rub.svg">
            <template v-slot:text>
              <p class="h6 font-weight-bold">Доступные цены</p>
              <p>Так как мы являемся производителем, мы предлагаем нашу продукцию без лишних наценок.</p>
            </template>
          </WhyItem>
          <WhyItem className="col-md" srcLink="like.svg">
            <template v-slot:text>
              <p class="h6 font-weight-bold">Гарантия качества</p>
              <p>Мы уделяем особое внимание качеству нашей продукции и дорожим нашими клиентами.</p>
            </template>
          </WhyItem>
        </div>
      </div>
    </div>

    <div class="factory w-100 flex-column d-flex justify-content-center align-items-center">
      <div class="container column">
        <div class="text-center font-weight-bold h3 col-md">НАШЕ ПРОИЗВОДСТВО</div>
        <video class="col-md" :src="require('@/assets/vid.mp4')" poster='@/assets/rectangle-1.png' controls loop>
          Извините, Ваш браузер не поддерживает просмотр встроенного видео,
          но вы можете скачать его по <a :href="require('@/assets/vid.mp4')">ссылке</a>
          и посмотреть в Вашем плейере!
        </video>
        <!-- <div class="col-md swiper-slide swiper-webkit pswp-slider-child sp-slide sp-slide--youtube not-pswp swiper-slide-active" data-animation="false" data-src="//www.youtube.com/embed/Kemo3dxMUOk" data-code="Kemo3dxMUOk" style="margin-right: 10px;" role="group" aria-label="1 / 10">
          <div class="video-item"> 
            <video muted="" loop="" width="100%" height="auto" data-src-desktop="/static/video/Kemo3dxMUOk.mp4?v=1632225019" data-src-mobile="/static/video-mini/Kemo3dxMUOk.mp4?v=1681996243" playsinline="" type="video/mp4" preload="none" class="sp-video-instructions sp-video swiper-lazy swiper-lazy-img swiper-lazy-loaded" src="/static/video/Kemo3dxMUOk.mp4?v=1632225019" style="display: none;"> 
            </video> 
            <iframe id="player" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Установка теплицы &quot;Рублёвская Про&quot;: Инструкция. (Сборка, Монтаж). ЗАВОД ГОТОВЫХ ТЕПЛИЦ" width="100%" height="100%" src="https://www.youtube.com/embed/Kemo3dxMUOk?enablejsapi=1&amp;origin=https%3A%2F%2Fzavodteplic.ru&amp;widgetid=1">

            </iframe>
          </div>  
        </div> -->
      </div>
    </div>

    <div ref="request" class="request w-100 flex-column d-flex justify-content-center align-items-center">
      <div class="container row flex-row-reverse">
        <Request class="col-md-4 p-2" @action="showRequestModal"></Request>
      </div>
    </div>

    <div ref="partners" class="partners w-100 flex-column d-flex justify-content-center align-items-center">
      <div class="text-center font-weight-bold h3">НАШИ ПАРТНЁРЫ</div>
      <div class="container align-items-center">
        <div class="row">
          <img class="col-md-4" src='@/assets/15efa96f4377a473c718553f02721b59 1.png' 
                @error="$event.target.src = '@/assets/not-found.jpg'"/>
          <img class="col-md-4" src='@/assets/Лого_старый шрифт 1.png' 
                @error="$event.target.src = '@/assets/not-found.jpg'"/>
          <img class="col-md-4" src='@/assets/logo_gf1 1.png' 
                @error="$event.target.src = '@/assets/not-found.jpg'"/>
        </div>
      </div>
    </div>

    <div ref="reviews" class="reviews w-100 flex-column d-flex justify-content-center align-items-center">
      <div class="text-center font-weight-bold h3">ОТЗЫВЫ КЛИЕНТОВ</div>
      <div class="container row">
        <div class="col-md-2 d-none d-md-flex"></div>
        <ReviewCard class="col-md" v-for="review in this.reviews.slice(0, 3)" :srcLink="review.photo" :text="review.text" :name="review.Author_name" v-bind:key="review.id">
        </ReviewCard>
        <div class="col-md-2 d-none d-md-flex"></div>
      </div>
    </div>

    <div class="map w-100 row d-flex justify-content-center align-items-center">
      <div class="container-fluid column">
        <div class="col-md text-center font-weight-bold h3">МЫ НА КАРТЕ</div>
        <YaMap className="col-md yaa" cssStyle="" :city="city"></YaMap>
      </div>
    </div>

    <div class="footer w-100 row d-flex justify-content-center align-items-center">
      <div class="container row flex-nowrap">
        <div id="brand" class="col-md-2"><img src="@/assets/Logo 1.svg"/></div>
        <div class="col-md-4 d-none d-md-block"></div>
        <div class="col-md-3 d-none d-md-flex h6 font-weight-bold justify-content-center container row ">
          <img class="img" :src="require('@/assets/map-marker.svg')"/>
          <div class="align-self-center">{{ this.city == null ? '' : this.city.name }}</div>
        </div>
        <div class="col-md-3 h6 font-weight-bold justify-content-center container row">
          <img class="img" :src="require('@/assets/phone.svg')"/>
          <div class="align-self-center">{{ this.city == null ? '' :this.city.phone }}</div>
        </div>
      </div>
    </div>

    <ModalWindow
      v-show="isCitiesModalVisible"
      @close="closeCitiesModal">
      <template v-slot:body>
        <select v-model="cityid">
          <option v-for="city in cities" v-bind:key="city.name" v-bind:value="city.id">
            {{ city.name }}
          </option>
        </select>
      </template>
    </ModalWindow>

    <ModalWindow
      v-show="isConsultationModalVisible"
      @close="closeConsultationModal">
      <template v-slot:body>
        <div>
          ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ
        </div>
      </template>
    </ModalWindow>

    <ModalWindow
      v-show="isCallModalVisible"
      @close="closeCallModal">
      <template v-slot:body>
        <div>
          ЗАКАЗАТЬ ЗВОНОК
        </div>
      </template>
    </ModalWindow>

    <ModalWindow
      v-show="isRequestModalVisible"
      @close="closeRequestModal">
      <template v-slot:body>
        <div>
          ЗАКАЗАТЬ РАСЧЕТ ЦЕНЫ
        </div>
      </template>
    </ModalWindow>

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
const host = 'localhost:8000';
//const host = 'api:5000';
import Vue from 'vue'
import axios from 'axios';
import VueCookies from 'vue-cookies';

import MainMenu from '@/components/MainMenu';
import ActionItem from '@/components/ActionItem';
import YaMap from '@/components/YaMap';
import ModalWindow from './components/ModalWindow.vue';

import AdvItem from '@/components/AdvItem';
import WhyItem from '@/components/WhyItem';

import Btn from '@/components/Btn';
import Card from '@/components/Card';
import ReviewCard from '@/components/ReviewCard';
import Request from '@/components/Request';

Vue.use(VueCookies);

export default {
  name: 'App',
  components: {
    Btn,
    Card,
    MainMenu,
    ActionItem,
    AdvItem,
    YaMap,
    WhyItem,
    ModalWindow,
    ReviewCard,
    Request
  },
  created() {
    axios
      .get(`http://${host}/cities`)
      .then(response => {
        this.cities = response.data;
        this.city = this.cities.filter(obj => { return obj.id === this.cityid })[0];
      })
      .catch(error => {
        console.log(error);
        this.citiesErrored = true;
      })
      .finally(() => (this.citiesLoading = false));

    axios
      .get(`http://${host}/goods`)
      .then(response => {
        this.goods = response.data;
      })
      .catch(error => {
        console.log(error);
        this.goodsErrored = true;
      })
      .finally(() => (this.goodsLoading = false));

      axios
      .get(`http://${host}/reviews`)
      .then(response => {
        this.reviews = response.data;
      })
      .catch(error => {
        console.log(error);
        this.reviewsErrored = true;
      })
      .finally(() => (this.reviewsLoading = false));
      if (this.$cookies.isKey("cityid"))
        this.cityid = Number(this.$cookies.get("cityid"));
  },
  mounted() {
  },
  data () {
    return { 
      isCitiesModalVisible: false, 
      isConsultationModalVisible: false, 
      isCallModalVisible: false, 
      isRequestModalVisible: false,
      isPreviewModalVisible: false,
      coords: [55.8304, 49.0661], 
      city: null,
      cityid: 2, 
      cities: [],
      goods: [],
      reviews: [],
      currentPreviewSrc: "",
    };
  },
  watch: {
    cityid(newId, oldId) {
      if (this.cities && newId) {
        this.city = this.cities.filter(obj => {
                                return obj.id === newId
                              })[0];
        this.$cookies.set("cityid", newId);
      }
    },
    cities(newCities, oldCities) {
      this.city = newCities.filter(obj => { return obj.id === this.cityid })[0];
    },
  },
  methods: {
    showCitiesModal(event) {
      this.isCitiesModalVisible = true;
    },
    closeCitiesModal() {
      this.isCitiesModalVisible = false;
    },

    showConsultationModal(event) {
      this.isConsultationModalVisible = true;
    },
    closeConsultationModal() {
      this.isConsultationModalVisible = false;
    },

    showCallModal(event) {
      this.isCallModalVisible = true;
    },
    closeCallModal() {
      this.isCallModalVisible = false;
    },

    showRequestModal(event) {
      this.isRequestModalVisible = true;
    },
    closeRequestModal() {
      this.isRequestModalVisible = false;
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
  }
};
</script>
<style>
#app {
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  font-family: "Open Sans";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  margin-top: 30px;
  font-smooth: always;
}
/* div.w-75 {height:auto;} */
.cons{ 
  background-image: url('./assets/banner.jpg');
  background-size: cover;
}
.catalog{ 
  background: #F2EFED;
}
.factory{ 
  background-image: url('./assets/background-crab-1.png');
  background-size: cover;
  width: 75%;
}
.request{ 
  background-image: url('./assets/background-.jpg');
  background-size: cover;
}
.reviews{ 
  background-image: url('./assets/background_review.png');
  background-size: cover;
  }
.why .advantages {
  background: #E5E5E5;
}
/* .map{
  display: block;
  max-width: 75%;
   height: 500px;
} */
.plogo {
  width: fit-content;
  height: fit-content;
}
#player {
  max-width: 100%;
  height: 500px;
}
.base {
  max-width: 75%;
  width: 75%;
}
.base2 {
  max-width: 55%;
  width: 55%;
}
@media only screen and (max-width: 768px) {
  #player {
    max-width: 100%;
    height: auto;
  }
  .base {
    /* width: 85%; */
    max-width: 85%;
  }
}
</style>