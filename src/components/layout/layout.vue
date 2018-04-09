<template>
  <div>
    <v-head :usermsg = 'person' :markList="markList" @addcoins='addcoins' @addmarklist="addmarklist" @getnewtotal='getnewtotal'></v-head>
  </div>
</template>
<script>
import Vue from 'vue'
import myHead from './header/head'
export default {
  data (){
  	return {
  		person:{
  			'username':'打完就跑',
  			'fansnum':606,
  			'rank':2,
  			//'mycoins':103
  		},
  		markList:[
          {
            'productName':'野山牛皮',
            'productPoints':23,
            'productChange':0
          },
          {
            'productName':'野山牛皮',
            'productPoints':23,
            'productChange':1
          },
          {
            'productName':'野山牛皮',
            'productPoints':23,
            'productChange':0
          },
          {
            'productName':'野山牛皮',
            'productPoints':23,
            'productChange':0
          },
        ]
  	}
  },
  components:{
  	'v-head':myHead,
  },
  mounted(){
        console.log(this.$store)
        console.log(this.$store.getters.getTotal)
      },
  computed:{
    mycoins (){
      return this.$store.getters.getTotal
    }
  },
  methods:{
  	addcoins(total){
  		if(total <= this.person.mycoins){
  			Vue.set(this.person,'mycoins',total)
  		}else{
  			this.$Message.error('您的Z币不足')
  		}
  	},
  	addmarklist(list){
  		this.markList.push(list);
  	},
  	getnewtotal(total){
  		Vue.set(this.person,'mycoins',total);
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
