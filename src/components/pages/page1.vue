<template>
	<div class="container contentblock">
		<div class="shoplist">
			<div class="shopcell" v-for="(item,index) in shoplist" :key="item.id">
	    		<div class="promsg">
	    			<div>{{ item.shopname }}</div>
	    			<div>{{ item.money }}Z币</div>
	    		</div>
				<v-shopcard :prodata='item' @changeTotal="changeTotal"></v-shopcard>
	    	</div>
		</div>
    	<div class="totalmoney">
    		<div class="paymoney">总价：{{ moneysum }}Z币</div>
    		<div class="paybtn" @click="submitOrder">提交</div>
    	</div>
    </div>
</template>
<script>
    import shopcard from '../commoncomponents/shopcard'
	export default {
		props:['usermsg'],
		components:{
			'v-shopcard':shopcard
		},
		data(){
			return {
				shoplist:[
					{
						pid:1,
						money:28,
						shopname:'商品名称1'
					},
					{
						pid:2,
						money:16,
						shopname:'商品名称2'
					},
					{
						pid:3,
						money:88,
						shopname:'商品名称3'
					}
				],
				moneysum:0,
				ordername:[],
			}
		},
		methods:{
			btnclick(){
				console.log(this.usermsg)
			},
			changeTotal(paydata){
				this.moneysum = this.moneysum + paydata.total;
			},
			submitOrder(){
				if(this.moneysum <= this.$store.getters.getTotal){
					this.$Message.success(`您需要支付${this.moneysum}Z币`);
					//this.$router.go(0)
					this.$store.dispatch('updataTotal',this.$store.getters.getTotal-this.moneysum)
					this.$Message.success('支付成功！');
				}else{
					this.$Message.error('您的Z币不足')

				}
				
			}
		},
		mounted(){
			//console.log(this.usermsg)
		},
		computed:{
			mycoins(){
				return this.$store.getters.getTotal
			}
		}
	}
</script>
<style scoped>
	.promsg{
		float: left;
		padding-left: 15px;
	}
	.shopcell{
		height: 3rem;
		border:1px solid #eee;
		box-shadow: 0px 1px 2px #eee;
		margin-top: 15px;
		padding:3px;
	}
	.totalmoney{
		position: fixed;
		bottom:0;
		height: 3rem;
		width: 100%;
		background: #eee;
	}
	.totalmoney > div{
		display: inline-block;
		height: inherit;
		line-height: 3rem;
	}
	.paymoney{
		width: 70%;
		padding-left: 5px;
		font-size: 1rem;
	}
	.paybtn{
		width: 29%;
		text-align: center;
		background: rgb(249,145,87);
		color: #fff;
		font-size: 1.2rem;
	}
</style>