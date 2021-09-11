<template>
  <div>
    <div v-for="color in colors" track-by="$index">
      <color :color.sync="color"></color>
    </div>
    <div class="theme-color-control"><a v-on:click="addColor()">增加</a>
      <a v-on:click="removeColor()" v-show="colors.length > 1">减少</a>
    </div>
  </div>
</template>

<script>
import color from './color'

export default {
  name: "ColorList",
  components: {color},
  props: {colors: {twoWay: !0}},
  methods: {
    addColor: function () {
      this.colors.push("#333333")
    }, removeColor: function () {
      this.colors.pop()
    }
  }
}
</script>

<style scoped>

</style>
