<template>
	<markdown-editor v-model="content" ref="markdownEditor"></markdown-editor>
</template>
<script>
	import { markdownEditor } from 'vue-simplemde'
	// 基础用法
export default {
  components: {
    markdownEditor
  },
  data () {
    return {
      content: '',
      configs: {
        spellChecker: false // 禁用拼写检查
      }
    }
  }
}
</script>