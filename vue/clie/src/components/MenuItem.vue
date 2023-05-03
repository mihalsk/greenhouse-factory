<template>
    <div class="mi-border" :class="className" 
        :width="width ? width : height ? false : 149"
        :height="height ? height : false"
        viewBox="0 0 149 28">
        <a>{{ text }}</a>
    </div>
  </template>
  <style scoped>
    .mi-border { 
      margin: 20px; 
      display: inline-block;
    }
  </style>
  <script>
  export default {
    props: {
      className: {
        required: false,
        type: String
      },
      text: {
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
    }
  }
  </script>
  