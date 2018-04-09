<template>
	<div class="container contentblock">
        <div class="phb">排行榜</div>
        <div class="phblist" v-for='(phb,index) in phblist' :key="phb.id">
          <div class="pm">
            <img :src="phb.src" :alt="phb.nickName" v-show='phb.src.length >=1'>
            <span v-show='phb.src.length < 1'>{{ index + 1 }}</span>
          </div>
          <div class="tx">
            <img :src="phb.head" alt="">
          </div>
          <div class="nc">{{phb.nickName}}</div>
          <div class="jf">{{phb.points}}</div>
        </div>
      </div>
</template>
<script>
	export default {
    data(){
      return {
        phblist:[
          {
            'src':require('./image/ry1.png'),
            'head':require('../layout/header/head.jpg'),
            'nickName':'名侦探柯南',
            'points':21351321
          },
          {
            'src':require('./image/ry2.png'),
            'head':require('../layout/header/head.jpg'),
            'nickName':'名侦探柯南',
            'points':21351321
          },
          {
            'src':require('./image/ry3.png'),
            'head':require('../layout/header/head.jpg'),
            'nickName':'名侦探柯南',
            'points':21351321
          },
          {
            'src':'',
            'head':require('../layout/header/head.jpg'),
            'nickName':'名侦探柯南',
            'points':21351321
          },
          {
            'src':'',
            'head':require('../layout/header/head.jpg'),
            'nickName':'名侦探柯南',
            'points':21351321
          },
          {
            'src':'',
            'head':require('../layout/header/head.jpg'),
            'nickName':'名侦探柯南',
            'points':21351321
          },
          {
            'src':'',
            'head':require('../layout/header/head.jpg'),
            'nickName':'名侦探柯南',
            'points':21351321
          },
          {
            'src':'',
            'head':require('../layout/header/head.jpg'),
            'nickName':'名侦探柯南',
            'points':21351321
          }
        ]
      }
    }
  }
</script>