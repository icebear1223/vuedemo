<template>
	<div class="getnum">
		<div @click="minuscount">-</div>
		<div>{{ paydata.count }}</div>
		<div @click="addcount">+</div>
	</div>
</template>
<script>
	export default{
		props:['prodata'],
		data(){
			return {
				paydata:{
					count:0,
					total:0,
					pid:this.prodata.pid,
					name:this.prodata.shopname
				},
			}
		},
		methods:{
			addcount(){
				this.paydata.count++;
				//console.log(this.prodata)
			},
			minuscount(){
				if(this.paydata.count > 0){
					this.paydata.count--;
				}
			}
		},
		computed:{
			newcount (){
				return this.paydata.count;
			}
		},
		watch:{
			newcount(val,oldval){
				this.paydata.total = val * this.prodata.money - oldval * this.prodata.money;
				this.$emit('changeTotal',this.paydata) ;
			}
		}
	}
</script>
<style scoped>
	.getnum{
		float:right;
		margin-top: 6px;
		margin-right: 6px;
		font-size: 1.2rem;
	}
	.getnum > div{
		display:inline-block;
		margin: 0 5px;
	}
</style>