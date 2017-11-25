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
    const layoutCfg = {
      direction: 'TB'
    }

    const tree = new G6.Tree({
      id: 'mountNode',
      fitView: 'autoZoom',
      layoutFn: G6.Layouts.CompactBoxTree,
      layoutCfg: layoutCfg
    })

    tree.source(data)
    tree
      .node()
      .label(function (obj) {
        return obj.name
      })
      .style({
        fillOpacity: 1
      })
    tree.edge().shape('smooth')
    tree.render()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
