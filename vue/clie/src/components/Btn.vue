<template>
  <div class="btn" @click="action"
    :class="className">
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    className: {
      required: false,
      type: String
    },
    title: {
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
.btn {

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  width: 100%;
  background: #319F01;
  border-radius: 3px;

  /* btn/green */

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 1em;
  line-height: 1em;

  /* white marshmallow */

  color: #FFFFFF;


  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
}
</style>
