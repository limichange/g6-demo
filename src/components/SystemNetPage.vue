<template>
  <div id="mountNode"></div>
</template>

<script>
import G6 from '@antv/g6'
import G6Plugin from '@antv/g6-plugins'


const data = {
  nodes: [
    { id: '0', weight: 10, type: 'n0', x:5.5, y:20.5},
    { id: '1', weight: 20, type: 'n1', x:70.25, y:20.5},
    { id: '2', weight: 30, type: 'n2', x:142.5, y:20.5},
    { id: '3', weight: 50, type: 'n3', x:226, y:20.5},
  ],
  edges: [
    { id: '0-1', source: '0', target: '1', weight: 10, type: 'e1'},
    { id: '1-2', source: '1', target: '2', weight: 20, type: 'e2'},
    { id: '2-3', source: '2', target: '3', weight: 30, type: 'e3'},
  ]
}

export default {
  name: 'systemNetPage',
  mounted () {
    const Mapper = G6Plugin['enhance.d3.mapper']
    const nodeColorMapper = new Mapper('node', 'type', 'color', [ 'red', 'green', 'pink', 'blue' ])

    // const Template = G6Plugin['template.analysis.maxSpanningForest']

    // const nodeSizeMapper = new Mapper('node', 'weight', 'size', [ 3.5, 90 ], {
    //   legendCfg: {
    //     callback: legend => {
    //       legend.title('流量大小')
    //     },
    //     fill: '#919191',
    //     marginRight: -150,
    //     marginBottom: 6
    //   }
    // })

    // const colors = ['#3dbd7d', '#76d0a3', '#f78e3d', '#f56a00']
    // const nodeColorMapper = new Mapper('node', 'health', 'color', colors, {
    //   legendCfg: {
    //     callback: legend => {
    //       legend.title('系统健康度')
    //     },
    //     marginRight: -106,
    //     marginBottom: 190
    //   }
    // })

    // const edgeSizeMapper = new Mapper('edge', 'weight', 'size', [ 3.5, 10 ], {
    //   scaleCfg: {
    //     type: 'log'
    //   },
    //   legendCfg: null
    // })

    const net = new G6.Net({
      id: 'mountNode',
      grid: null,
      plugins: [
        nodeColorMapper
        // new Template(),
        // nodeSizeMapper,
        // edgeSizeMapper,
        // nodeColorMapper
      ]
    })

    net.node().label('id')
    net.edge().style({
      stroke: '#bfbfbf',
      strokeOpacity: 0.5
    })
    net.source(data)
    net.render()
  }
}
</script>

<style>
.node-tool {
  border-radius: 6px;
  padding: 6px;
  font-size: 14px;
  color: #666;
  list-style-type:none;
  background: #fff;
  box-shadow: 0 2px 5px #ccc;
}
.node-tool li {
  padding: 4px 2px;
}
.node-tool li:hover {
  color: #26A8FB;
  cursor: pointer;
}
#mountNode {
  padding-right: 130px;
}
</style>
