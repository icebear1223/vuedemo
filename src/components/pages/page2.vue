<template>
	<div class="container contentblock">
    <Row>
        <div>
          <span>兑换：</span><span style="font-size:1.2rem;">1Z币=1元  满10Z币即可兑换</span>
        </div>
        <Col class="voucher" span="8" v-for='(item,key,index) in cashList' :key="item.id">
          <div @click="getCash(item.cash)">
            <img :src="item.src" :alt="item.cash">
          </div>
        </Col>
    </Row>
  </div>
</template>
<script>
	export default {
    props:['usermsg'],
    data(){
      return {
        cashList:[
          {
            'cash':10,
            'src':require('./image/10.png')
          },
          {
            'cash':20,
            'src':require('./image/20.png')
          },
          {
            'cash':30,
            'src':require('./image/30.png')
          },
          {
            'cash':50,
            'src':require('./image/50.png')
          },
          {
            'cash':100,
            'src':require('./image/100.png')
          },
          {
            'cash':200,
            'src':require('./image/200.png')
          },
          {
            'cash':500,
            'src':require('./image/500.png')
          },
        ]
      }
    },
    methods:{
      getCash :function(cash) {
        if(this.$store.getters.getTotal >= cash){
          let total = this.$store.getters.getTotal - cash;
          this.$store.dispatch('updataTotal',total);
          this.$emit('addmarklist',{
            'productName':'Z币兑换'+cash+'元',
            'productPoints':cash,
            'productChange':0
          })
          this.$Message.success('兑换'+cash+'元成功')
        }else{
          this.$Message.error('您的Z币不足')
        }
        
      }
    },
    computed:{
      
    }
  }
</script>