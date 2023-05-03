<template>
  <div class="ai-border" :class="className" 
      :width="width"
      :height="height">
      <img class="ai-img" :src="require(`../assets/${srcLink}`)"/>
      <!-- <div class="ai-headText"><slot name="headText"></slot></div> -->
      <div class="ai-text"><slot name="text"></slot></div>
  </div>
</template>
<style scoped>
  .ai-border { 
    margin: 15px; 
    display: grid;
    gap: 5px;
    grid-template-columns: 4em 1fr;
    grid-template-rows: 100%;
    width: 1fr;
  }
  .ai-img { 
    margin: 0;
    padding: 0;
    grid-column: 1;
    grid-row: 1;
    vertical-align: top;
    line-height: 1em;
    max-width: 4em;
    max-height: fit-content;
  }
  .ai-text { 
    font-size: small;
    margin: 0;
    padding: 0;
    line-height: 1em;
    grid-column: 2;
    grid-row: 1;
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
    headText: {
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
  }
}
</script>
