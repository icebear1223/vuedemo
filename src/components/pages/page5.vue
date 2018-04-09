<template>
	<div class="container contentblock" style="padding:10px;">
    <div style="margin-bottom:15px;">我的可用Z币：{{ mycoins }}</div>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="130">
      <FormItem label="充值账号" prop="orderId">
          <Input v-model="formValidate.orderId" placeholder="账号"></Input>
      </FormItem>
      <FormItem label="充值Z币数量" prop="zCoins">
          <Input v-model.number="formValidate.zCoins" placeholder="充值Z币数量"></Input>
      </FormItem>
      <div style="text-align:center;">
        <Button type="primary" shape="circle"  @click="handleSubmit('formValidate')">充值</Button>
      </div>
    </Form>
    <div style="margin:15px 0;">充值明细</div>
    <table class="table table-striped table-bordered zzTable" style="width:100%">
      <thead>
        <tr style="background:rgb(193,239,252);color:#444;">
          <th style="width:30%">账号号</th>
          <th style="width:40%">充值Z币</th>
          <th style="width:30%">充值时间</th>
        </tr>
      </thead> 
      <tr v-for="(item,index) in zzList" :key="item.id">
        <td>{{ item.orderId }}</td>
        <td>{{ item.zCoins }}</td>
        <td>{{ item.zzDate }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
	export default {
    props:['usermsg'],
    data(){
      return {
        formValidate:{
          'orderId':'',
          'zCoins':null
        },
        ruleValidate: {
          orderId:[
            { 
              required: true, 
              message: '请填写账号',
              trigger: 'blur' 
            }
          ],
          zCoins:[
            { 
              required: true, 
              type: 'number',
              message: '请填写充值Z币数量',
              trigger: 'blur' 
            },
            // {
               
            //   message: '必须输入数字'
            // }  
          ],
        },
        zzList:[
          {
            'orderId':'123123123',
            'zCoins':'123',
            'zzDate':'2018-12-12'
          },
          {
            'orderId':'123123123',
            'zCoins':'123',
            'zzDate':'2018-12-12'
          },
          {
            'orderId':'123123123',
            'zCoins':'123',
            'zzDate':'2018-12-12'
          },
        ]
      }
    },
    computed:{
      mycoins(){
        return this.$store.getters.getTotal
      }
    },
    methods:{
      handleSubmit (name) {
          this.$refs[name].validate((valid) => {
              if (valid) {
                  this.$Message.success('充值成功');
                  let zzdate = new Date();
                  let month = zzdate.getMonth() + 1;
                  let nowDate = zzdate.getFullYear() + '-' + month + '-' + zzdate.getDate();
                  this.zzList.push({
                    'orderId': this.formValidate.orderId,
                    'zCoins':this.formValidate.zCoins,
                    'zzDate':nowDate
                  })

                  if(this.formValidate.orderId == this.usermsg.username){
                    let totalCoins = parseInt(this.formValidate.zCoins) + this.$store.getters.getTotal;
                    //console.log(totalCoins)
                    this.$store.dispatch('updataTotal',totalCoins)
                  }
                  this.formValidate.orderId = '';
                  this.formValidate.zCoins = '';
              } else {
                  this.$Message.error('充值失败');
              }
          })
      }
    }
  }
</script>
<style scoped>
  .form-group{
    margin:10px 0;
  }
</style>