<template>
	<div>
		<div class="head">
	        <div class="fans headmsg">
	          <div>粉丝人数</div>
	          <div>{{ usermsg.fansnum }}</div>
	          <div>活动号</div>
	          <div>HDH00001</div>
	        </div>
	        <div class="myHeadName headmsg">
	          <img :src='myHead' alt="" >
	          <div>{{ usermsg.username }}</div>
	        </div>
	        <div class="myZCoint headmsg">
	          <div>我的Z币</div>
	          <div>{{ mycoins }}</div>
	          <div>当前排名</div>
	          <div>{{ usermsg.rank }}</div>
	        </div>
      	</div>
      	<div class="tab">
          <router-link class="tab-item" active-class="on" :to="{name:item.pageName}" v-for='(item,key,index) in listData' :key="item.id">
            <img :src="item.img1" alt="" class="offcheck">
            <img :src="item.img2" alt="" class="oncheck">
            <div>
              {{ item.text }}
            </div>
          </router-link>
      	</div>
      	<keep-alive>
        	<router-view :usermsg='usermsg' :markList="markList" @addcoins="addcoins" @addmarklist="addmarklist" @getnewtotal='getnewtotal'></router-view>
      	</keep-alive>
	</div>
</template>
<script>
	export default {
		props:['usermsg','markList'],
		data (){
			return {
				on:'on',
				tab:'tab',
				selectNo:0,
				email:'',
				myHead:require('./head.jpg'),
				listData:[
					{
						'img1':require('./tu1.png'),
						'img2':require('./tu11.png'),
						'text':'兑换商品',
						'pageName':'page1'
					},
					{
						'img1':require('./tu2.png'),
						'img2':require('./tu22.png'),
						'text':'Z币兑换',
						'pageName':'page2'
					},
					{
						'img1':require('./tu3.png'),
						'img2':require('./tu33.png'),
						'text':'Z币排名',
						'pageName':'page3'
					},
					{
						'img1':require('./tu4.png'),
						'img2':require('./tu44.png'),
						'text':'兑换记录',
						'pageName':'page4'
					},
					{
						'img1':require('./tu5.png'),
						'img2':require('./tu55.png'),
						'text':'充值Z币',
						'pageName':'page5'
					}
				]
			}
		},
		methods:{
			selectItem (index){
				this.selectNo = index;
				//alert(this.selectNo);
			},
			addcoins(total){
				this.$emit('addcoins',total);
			},
			addmarklist(list){
				this.$emit('addmarklist',list)
			},
			getnewtotal(total){
				this.$emit('getnewtotal',total)
			}
		},
		computed:{
			mycoins (){
		      return this.$store.getters.getTotal
		    }
		}
	}
</script>