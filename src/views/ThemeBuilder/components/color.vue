<template>
  <div class="myColorPick">
    <el-row>
      <el-col :span="20">
        <el-input v-model="chooseColor"/>
      </el-col>
      <el-col :span="4">
        <el-color-picker v-model="chooseColor"></el-color-picker>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: "color",
  props: {color: {twoWay: !0}},
  watch: {
    color: {
      handler(newVal) {
        this.chooseColor = newVal
        this.setColor()
      }
    }
  },
  data() {
    return {
      chooseColor: ''
    }
  },
  mounted() {
    this.chooseColor = this.color
  },
  methods: {
    setColor() {
      this.$emit('update:color', this.chooseColor)
      this.$echarts.color.parse(this.chooseColor)
    }
  },
}
</script>

<style scoped>

</style>
