<template>
  <div class="div d-flex justify-content-center align-items-center flex-column"
    :class="className">
    <!-- <div class="container column div"> -->
      <img class="c-img" :src="require(`../assets/${srcLink}`)" @error="replaceByDefault">
      <div class="d-flex flex-column p-2">
        <div class="container row justify-content-start">
          <div class="col p-1">{{ name }}</div>
        </div>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-5 p-0 m-0 text-nowrap font-weight-bold price ">{{ price }} руб/комп</div>

            <div class="col-2"></div>
            <div class="col-4 cnt row">
              <form action="/" class="form p-0 m-0">
                <input class="inp p-0 m-0" type="text" value="0">
              </form>
              
            </div>
            
            <div class="col-1 p-0 m-0 cnt">{{ measure }}</div>
          </div>
        </div> 
        <div class="container m-1">
          <div class="row justify-content-end">
            <button class="col-6 btn">{{ btnText }}</button>
          </div>
        </div> 
      </div>
    </div>   
  <!-- </div>  -->
</template>

<script>
export default {
  props: {
    className: {
      required: false,
      type: String
    },
    name: {
      required: false,
      type: String
    },
    price: {
      required: false,
      type: Number
    },
    measure: {
      required: false,
      type: String
    },
    btnText: {
      required: false,
      type: String
    },
    srcLink: {
      required: false,
      type: String
    },
  },
  methods: {
    replaceByDefault(e) {
      // e.target.src = img;
      console.log(e);
      //e.target.src = require('@/assets/not-found.jpg');
    },
    replaceByDefault() {
      // e.target.src = img;
      console.log(e);
      //e.target.src = require('@/assets/not-found.jpg');
    }
  },
}
</script>
<style scoped>
.div {
  background-color: white;
  border-radius: 3px;
  margin: 15px;
  padding: 0;
  box-shadow: 0px 5.10782px 11.4926px rgba(0, 0, 0, 0.15);
}
.c-img {
  width: 100%;
  height: auto;
  border-radius: 3px 3px 0 0;
}
.btn {
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3px 24px;
  gap: 10px;
  width: 60%;
  border: 1px solid #000000;
  border-radius: 3px;
}
.inp, .form {
  /* box-sizing: border-box;
   */
  width: 100%;
  border: 0.5px solid #C9C9C9;
  border-radius: 3px;
  padding: 0;
  margin: 0;
  text-align: center;
}

.price {
  font-size: small;
}
.cnt {
  font-size: x-small;
}
</style>