<template>
  <transition name="modal-fade">
    <div class="xmodal-backdrop">
      <div class="xmodal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription">
        <header
          class="xmodal-header"
          id="modalTitle">
          <slot name="header">
          </slot>
        </header>
        <section
          class="xmodal-body"
          id="modalDescription">
          <slot name="body">
          </slot>
        </section>
        <footer class="xmodal-footer">
          <slot name="footer">

            <!-- <button
              type="button"
              class="btn-green"
              @click="close"
              aria-label="Close modal">
              Закрыть
            </button> -->
            <btn
              @action="close"         
              :title="'Закрыть'">
            </btn>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>
<style>
  .xmodal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .xmodal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
  }

  .xmodal-header,
  .xmodal-footer {
    padding: 10px;
    display: flex;
  }

  .xmodal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .xmodal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: center;
  }

  .xmodal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #319F01;
    background: transparent;
    position: relative;
  }

  .btn-green {
    color: white;
    background: #319F01;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
    padding: 20px;
  }
</style>
<script>
import Btn from '@/components/Btn';


  export default {
    name: 'modal',
    props: {
        cities: {
            required: false,
            type: Array
        },
    },
    components: {
      Btn,
    },
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>