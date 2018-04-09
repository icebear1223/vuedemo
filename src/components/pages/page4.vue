<template>
	<div class="container contentblock">
    <table class="table changeTable" style="width:100%;">
      <thead>
        <tr style="background:rgb(193,239,252);color:#444;">
          <th style="width:25%">序号</th>
          <th style="width:25%">产品名称</th>
          <th style="width:25%">使用Z币</th>
          <th style="width:25%">是否已兑换</th>
        </tr>
      </thead> 
      <tr v-for="(item,index) in markList" >
        <td>{{ index + 1 }}</td>
        <td>{{ item.productName }}</td>
        <td> {{ item.productPoints }}</td>
        <td v-if = 'item.productChange == 0'>是</td>
        <td v-if = 'item.productChange == 1'>否</td>
      </tr>
    </table>
  </div>
</template>
<script>
	export default {
    props:['markList'],
    data(){
      return {
        
      }
    }
  }
</script>
<style scoped>
  .table{
    width:300px;
  }
</style>