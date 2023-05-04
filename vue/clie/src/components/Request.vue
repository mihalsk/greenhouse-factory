<template>
    <div class="div d-flex justify-content-center align-items-center flex-column border rounded"
      :class="className">
      <div class="text-center font-weight-bold h3">
        ОСТАВИТЬ ЗАЯВКУ
      </div>
      <div class="text-center font-weight-bold h6">
        НА РАСЧЕТ СТОИМОСТИ
      </div>
      
      <form action="/" class="container p-2 m-0">
        <div class="row m-2">
          <input class="col-md p-2 m-0" name="phone" type="text" value="" placeholder="Номер телефона">
        </div>
        <div class="row m-2">
          <input class="col-md p-2 m-0" name="e-mail" type="text" value="" placeholder="E-mail">
        </div>
        <div class="row m-2">
          <btn class="col-md p-2 m-0" :title="'Заказать расчет цены'" @action="action"/>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import Btn from '@/components/Btn';
  export default {
    components: {
        Btn, 
    },
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
        action() {
            this.$emit('action');
        },
    }
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
  </style>