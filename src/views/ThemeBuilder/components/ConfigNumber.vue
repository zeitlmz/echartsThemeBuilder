<template>
  <div class="form-group">
    <div class="col-sm-3"><input type="checkbox" v-model="enabled" v-if="canDisable"/> <label>{{ title }}</label></div>
    <div>
      <div class="input-group" v-show="enabled">
        <el-input-number v-model="currentValue"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfigNumber",
  props: {
    title: String,
    canDisable: {type: Boolean, default: !1},
    value: {twoWay: !0},
    enabled: {twoWay: !0, default: !0}
  },
  watch: {
    currentValue(newValue) {
      this.setValue(newValue)
    }
  },
  data() {
    return {
      currentValue: this.value
    }
  },
  methods: {
    setValue(newValue) {
      this.$emit('update:value', newValue)
    }
  }
}
</script>

<style scoped>

</style>
