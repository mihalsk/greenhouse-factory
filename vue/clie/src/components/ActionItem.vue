<template>
  <div class="cs-border" :class="className" 
      :width="width ? width : height ? false : 149"
      :height="height ? height : false">
    <img class="cs-img" :src="require(`../assets/${srcLink}`)"/>
    <div class="cs-textblock">
        <div class="cs-text">{{ text }}</div>
        <div class="cs-link"><a @click="getModal">{{ linkText }}</a></div>
    </div>
  </div>
</template>

<style scoped>
  .cs-border { 
    margin: 15px;
    display: flex;
    width: 100%;
  }
  .cs-img { 
    margin: 0 0 1em 0;
    display: block;
  }
  .cs-link { 
    font-size: smaller;
    margin: 0;
    padding: 0;
    line-height: 1em;
    display: flex;
    color:green;
    cursor: pointer;
  }
  .cs-text { 
    margin: 0;
    padding: 0;
    font-weight:bold;
    line-height: 1em;
    display: flex;
  }
  .cs-textblock { 
    margin: 0 0 0 0;
    /* display: flex; */
  }
</style>
<script>
import axios from 'axios'
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
    linkText: {
      required: false,
      type: String
    },
    srcLink: {
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
  },
  methods: {
    getModal() {
      this.$emit('showmodal');
    }    
  }
}
</script>
  