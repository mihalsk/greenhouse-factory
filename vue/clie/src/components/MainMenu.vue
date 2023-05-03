<template>
  <div class="w-100 flex-row d-flex justify-content-center align-items-center">
    <header class="w-100 container row">
      <div id="brand" class="col-md"><img src="@/assets/Logo 1.svg"/></div>
      <nav class="col-md-9 d-none d-md-flex row">
        <ul class="align-self-start">
          <li><a @click="goto('catalog')">Каталог</a></li>
          <li><a @click="goto('request')">Расчет стоимости</a></li>
          <li><a @click="goto('partners')">Партнеры</a></li>
          <li><a @click="goto('reviews')">Отзывы</a></li>
          <div class="align-self-end">
            <ActionItem :text="cityName" linkText="все города" srcLink="map-marker.svg" @showmodal="showModal1($event)"/>
          </div>
          <div class="align-self-end">
            <ActionItem :text="phone" linkText="заказать звонок" srcLink="phone.svg" @showmodal="showModal2($event)" />
          </div>
        </ul>
      </nav>
      <div id="hamburger-icon" :class="{open: isActive}" @click="isActive = !isActive" class="">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
        <ul class="mobile-menu">
          <li><a @click="goto('catalog')">Каталог</a></li>
          <li><a @click="goto('request')">Расчет стоимости</a></li>
          <li><a @click="goto('partners')">Партнеры</a></li>
          <li><a @click="goto('reviews')">Отзывы</a></li>
          <div class="d-flex w-100 row align-self-end">
            <ActionItem :text="cityName" linkText="все города" srcLink="map-marker.svg" @showmodal="showModal1($event)"/>
          </div>
          <div class="d-flex w-100 row align-self-end">
            <ActionItem :text="phone" linkText="заказать звонок" srcLink="phone.svg" @showmodal="showModal2($event)" />
          </div>
        </ul>
      </div>
    </header> 
  </div>   
</template>
<style>
/* @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"); */

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

/* body {
  background-color: #353836;
  color: white;
  font-family: "Poppins", sans-serif;
} */

header a {
  text-decoration: none;
}

header {
  padding: 0 20px;
  /* background-color: #1d1f1d; */
  height: auto;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

#brand {
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
}

#brand a {
  color: #09c372;
}

ul {
  list-style: none;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

ul a {
  color: rgb(0, 0, 0);

}

ul li {
  padding: 5px;
  margin-left: 10px;
}

nav ul li a {
  cursor: pointer;
}

ul li:hover {
  transform: scale(1.1);
  transition: 0.3s;
}

#login,
#signup {
  border-radius: 5px;
  padding: 5px 8px;
}

#login {
  border: 1px solid #498afb;
}

#signup {
  border: 1px solid #ff3860;
}

#signup a {
  color: #ff3860;
}

#login a {
  color: #498afb;
}

#hamburger-icon {
  margin: auto 0;
  display: none;
  cursor: pointer;
}

#hamburger-icon .bar1, .bar2, .bar3 {
  width: 35px;
  height: 3px;
  background-color: rgb(0, 0, 0);
  margin: 6px 0;
  transition: 0.4s;
}

.open .bar1 {
  -webkit-transform: rotate(-45deg) translate(-6px, 6px);
  transform: rotate(-45deg) translate(-6px, 6px);
}

.open .bar2 {
  opacity: 0;
}

.open .bar3 {
  -webkit-transform: rotate(45deg) translate(-6px, -8px);
  transform: rotate(45deg) translate(-6px, -8px);
}

.open .mobile-menu {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-end;
  background-image:  url('../assets/background_review.png');
  background-size: cover;
  background-color: grey;
  z-index: 1;
  height: fit-content;
}

.mobile-menu {
  display: none;
  position: absolute;
  top: 13%;
  right: 0;
  /* height: calc(100vh - 50px); */
  width: 70%;
  box-shadow: 0px 5.10782px 11.4926px rgba(0, 0, 0, 0.15);
}

.mobile-menu li {
  margin-bottom: 10px;
}
#brand {
    width: 20%;
  }
@media only screen and (max-width: 768px) {
  /* div header nav {
    display: none;
  } */

  #hamburger-icon {
    display: block;
    /* width: 7%; */
    height: 100%;
  }

  #brand {
    width: 70%;
  }
  #brand img {
    object-fit: contain;
  }
  
}
</style>
<script>
import ActionItem from '@/components/ActionItem';
export default {
    components: {
        ActionItem,
    },
    data: function() {
        return  {
            isActive: false
        }
    },
    props: {
        className: {
            required: false,
            type: String
        },
        desc: {
            required: false,
            type: String
        },
        cityName: {
            required: false,
            type: String
        },
        phone: {
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
        title: {
            required: false,
            type: String
        },
    },
    methods: {
        goto(refName) {
            var element = this.$parent.$refs[refName];
            var top = element.offsetTop;
            this.window.scrollTo(0, top);
        },
        showModal1(event) {
            this.$emit('showmodal1')
        },
        showModal2(event) {
            this.$emit('showmodal2')
        },
    },
    computed: {
        console: () => console,
        window: () => window,
    },
    }
</script>
  