<template>
    <transition name="dialog" @after-leave="afterLeave">
        <div v-show="isShow">
            <div class="overlay">
            </div>
            <div class="dialog">
                <div class="dialog__inner">
                    <h2 class="dialog__header">{{subject}}</h2>
                    <div class="dialog__body">
                        {{message}}
                    </div>
                    <div class="dialog__footer button-set">
                        <button
                            v-if="onSecondary"
                            type="button"
                            class="button button--base button--base-secondary"
                            @click.prevent="onSecondary">キャンセル</button>
                        <button
                            type="submit"
                            class="button button--base button--base-primary"
                            @click.prevent="onPrimary">OK</button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        subject: String,
        message: String,
        onPrimary: Function,
        onSecondary: {
            type: Function,
            default: null
        }
    },    
    data () {
        return {
            isShow: false
        }
    },
    methods: {
        attach () {
            if (!this.$parent) {
                this.$mount();
                document.body.appendChild(this.$el);
            } else {
                this.$mount();
                this.$parent.$el.appendChild(this.$el);
            }
        },
        remove () {
            if (!this.$parent) {
                document.body.removeChild(this.$el);
                this.$destroy();
            } else {
                this.$parent.$el.removeChild(this.$el);
                this.$destroy();
            }
        },
        close () {
            this.isShow = false;
        },
        show () {
            this.attach();
            this.isShow = true;
        },
        afterLeave () {
            this.remove();
        }
    }
}
</script>

<style lang="css" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;                
  height: 100vh;
  background-color: #000;
  filter:alpha(opacity=50);
  -moz-opacity: 0.5;
  opacity: 0.5; 
}
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dialog__inner {
  z-index: 11;
  width: 70vw;
  padding: 20px;
  background-color: #fff;
}
.button-set {
    display: flex;
}
.button--base {
    flex: 1;
    margin: 10px 10px 0;
    border: 1px solid #808080;
    border-radius: 8px;
}
.dialog-enter-active, .dialog-leave-active {
  transition: opacity .3s;
}
.dialog-leave, .dialog-enter-to {
  filter:alpha(opacity=100);
  -moz-opacity: 1;
  opacity: 1;
}
.dialog-enter, .dialog-leave-to {
  filter:alpha(opacity=0);
  -moz-opacity: .0;
  opacity: .0;
}

</style>
