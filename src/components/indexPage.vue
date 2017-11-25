<template>
  <div class="hello">
    <h1>Test</h1>
    <div id="mountNode"></div>
  </div>
</template>

<script>
import G6 from '@antv/g6'
import data from './data'

export default {
  name: 'IndexPage',
  data () {
    return {
    }
  },
  mounted () {
    const { Layouts, Tree } = G6
    const layoutCfg = {
      direction: 'TB'
    }

    const tree = new Tree({
      id: 'mountNode',
      fitView: 'autoZoom',
      layoutFn: Layouts.CompactBoxTree,
      layoutCfg: layoutCfg
    })

    tree
      .source(data)
    tree
      .node()
      .label(function (obj) {
        return obj.name
      })
      .style({
        fillOpacity: 1
      })
    tree
      .edge()
      .shape('smooth')
    tree
      .render()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
