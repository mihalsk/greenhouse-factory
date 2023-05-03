<template>
    <div class="wi-border" :class="className" 
        :width="width"
        :height="height">
        <img class="wi-img" :src="require(`../assets/${srcLink}`)"/>
        <!-- <div class="ai-headText"><slot name="headText"></slot></div> -->
        <div class="wi-text"><slot name="text"></slot></div>
    </div>
</template>
<style scoped>
.wi-border { 
    margin: 15px; 
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, 0fr);
}
.wi-img { 
    margin: 0;
    padding: 0;
    vertical-align: top;
    line-height: 1em;
    max-width: 4em;
    max-height: fit-content;  
    grid-column: 1;
    grid-row: 1;
    justify-self: center;
}
.wi-text { 
    font-size: small;
    margin: 0;
    padding: 0;
    line-height: 1em;
    word-wrap: normal;
    overflow-wrap: normal;
    text-align: center;
    grid-column: 1;
    grid-row: 2;
    justify-self: center;
    overflow-wrap: normal;
}
@media only screen and (max-width: 768px) {
    .wi-border { 
        margin: 15px; 
        display: grid;
        gap: 5px;
        grid-template-columns: 4em 1fr;
        grid-template-rows: 100%;
        width: 1fr;
    }
    .wi-img { 
        margin: 0;
        padding: 0;
        grid-column: 1;
        grid-row: 1;
        vertical-align: top;
        line-height: 1em;
        max-width: 4em;
        max-height: auto;
    }
    .wi-text { 
        font-size: small;
        margin: 0;
        padding: 0;
        line-height: 1em;
        grid-column: 2;
        grid-row: 1;
        text-align: left;
        justify-self: start;
    }
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
  