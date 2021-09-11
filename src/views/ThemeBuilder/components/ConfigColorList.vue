<template>
  <div class="form-group">
    <div class="col-sm-3"><input type="checkbox" v-model="enabled" v-if="canDisable"/>
      <label class="control-label">{{title}}</label></div>
    <div class="col-sm-9">
      <color-list :colors.sync="colors" v-show="enabled"></color-list>
    </div>
  </div>
</template>

<script>
import colorList from './ColorList'

export default {
  name: "ConfigColorList",
  components: {colorList},
  props: {
    title: String,
    canDisable: {type: Boolean, default: !1},
    colors: {twoWay: !0},
    enabled: {twoWay: !0, default: !0}
  }
}
</script>

<style scoped>

</style>
