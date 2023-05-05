<template>
    <div class="div d-flex justify-content-start align-items-center flex-md-column flex-row p-2"
      :class="className">
        <img class="c-img align-self-start align-self-md-center p-2" :src="require(`../assets/${srcLink}`)" 
                @error="$event.target.src = require('../assets/not-found.jpg')"/>
        <div class="d-flex justify-content-md-center flex-column">
          <div class="d-flex p-1 font-weight-bold h3 justify-content-md-center">{{ name }}</div>
          <div class="d-flex flex-column p-2">
              <div class="container row justify-content-start">
              <div class="col p-1">{{ text }}</div>
              </div>
          </div>
        </div>
    </div>
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
      text: {
        required: false,
        type: String
      },
      srcLink: {
        required: false,
        type: String
      },
    }
  }
  </script>
  <style scoped>
  .div {
    background-color: white;
    margin: 15px;
    padding: 0;
    border: 1px solid #CECECE;
    border-radius: 10px;
  }
  .c-img {
    width: 8em;
    height: auto;
    border-radius: 3px 3px 0 0;
  }

  @media only screen and (max-width: 768px) {
    .c-img {
      width: 5em;
      height: auto;
      border-radius: 3px 3px 0 0;
    }
  }
  </style>