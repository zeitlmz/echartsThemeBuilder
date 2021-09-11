// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from "echarts/core";

// import essos from '../views/autoEcharts/components/theme/essos.json'
// import infographic from '../views/autoEcharts/components/theme/infographic.json'
// import macarons from '../views/autoEcharts/components/theme/macarons.json'
// import roma from '../views/autoEcharts/components/theme/roma.json'
// import shine from '../views/autoEcharts/components/theme/shine.json'
// import walden from '../views/autoEcharts/components/theme/walden.json'
// import westeros from '../views/autoEcharts/components/theme/westeros.json'
// import wonderland from '../views/autoEcharts/components/theme/wonderland.json'
// import mybule from '../views/autoEcharts/components/theme/myBule.json'
//注册主题
// echarts.registerTheme('essos', essos)
// echarts.registerTheme('infographic', infographic)
// echarts.registerTheme('macarons', macarons)
// echarts.registerTheme('roma', roma)
// echarts.registerTheme('shine', shine)
// echarts.registerTheme('walden', walden)
// echarts.registerTheme('westeros', westeros)
// echarts.registerTheme('wonderland', wonderland)
// echarts.registerTheme('mybule', mybule)
// 引入各种图表，图表后缀都为 Chart
import {
  BarChart,
  EffectScatterChart,
  GaugeChart,
  LineChart,
  MapChart,
  PictorialBarChart,
  PieChart,
  RadarChart,
  ScatterChart,
  SunburstChart,
  ParallelChart,
  CandlestickChart,
  HeatmapChart,
  TreemapChart,
  GraphChart
} from "echarts/charts"; //这里我引用两个类型的图表
// 引入提示框，标题，直角坐标系等组件，组件后缀都为 Component
import {
  DataZoomComponent,
  GeoComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  VisualMapComponent,
  ParallelComponent,
  ToolboxComponent,
  TimelineComponent,
  MarkPointComponent
} from "echarts/components";
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import {CanvasRenderer} from "echarts/renderers";
// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  PieChart,
  LineChart,
  GaugeChart,
  RadarChart,
  CanvasRenderer,
  ScatterChart,
  CandlestickChart,
  HeatmapChart,
  EffectScatterChart,
  ParallelChart,
  GeoComponent,
  TreemapChart,
  GraphChart,
  DataZoomComponent,
  VisualMapComponent,
  ParallelComponent,
  ToolboxComponent,
  TimelineComponent,
  MarkPointComponent,
  MapChart,
  SunburstChart,
  PictorialBarChart
]);

export default echarts;


