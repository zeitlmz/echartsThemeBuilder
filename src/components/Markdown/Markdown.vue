<template>
  <div class="detail" :style="{maxWidth:maxWidth||'100%',width:width||'auto',height:height||'100%'}">
    <div class="markdown-body">
      <div class="article_message hljs renderNav" v-html="getContent"></div>
    </div>
  </div>
</template>

<script>
import marked from "marked"; // 引入marked
import hljs from "highlight.js"; // 引入 highlight.js
import "highlight.js/styles/github.css"; // 引入高亮样式

export default {
  name: "Markdown",
  props: {
    width: String,
    height: String,
    maxWidth: String,
    content: String
  },
  data() {
    return {}
  },
  computed: {
    getContent() {
      var rendererMD = new marked.Renderer();
      marked.setOptions({
        renderer: rendererMD,
        highlight: function (code) {
          return hljs.highlightAuto(code).value;
        },
        pedantic: false,
        gfm: true,
        tables: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false
      });
      return marked(this.content);// 将markdown内容解析
    }
  }
}
</script>

<style>
.markdown-body blockquote, .markdown-body details, .markdown-body dl, .markdown-body ol, .markdown-body p, .markdown-body pre, .markdown-body table, .markdown-body ul {
  margin-bottom: 0;
  background-color: white;
}
</style>
