<template>
  <div class="header">
  	<div class="top">
  		<div class="left">
  			
  		</div>
  		<div class="right">
  			<div class="one">
  				<span></span>
  				<span>{{datas.name}}</span>
  			</div>
  			<div class="two">
  				<span>{{datas.description}}</span>
  				<span>/</span>
  				<span>{{datas.deliveryTime}}<span>分钟送达</span></span>
  			</div>
  			<div class="three">
  				<span class="threeOne"></span>
  				<span class="threeTwo">在线支付满28减5,满50减10</span>
  			</div>
  			<div class="btn" v-on:click="change" >5个<span>&gt</span></div>
  		</div>
  	</div>
  	<div class="bottom">
  		<span></span>
  		<span>{{datas.bulletin}}</span>
  		<span>&gt</span>
  	</div>
  	<div class="bg"></div>
  </div>
</template>

<script>
 export default{
    methods:{
      change(){
      	this.isShow = !this.state;
        this.$emit('changeShow',this.isShow);
      },
    },
    computer:{

    },
    props: ['state'],
    beforeCreate(){
      //console.log("组件刚被创建")
    },
    created(){
      this.$http.get("http://10.80.16.136:8080/api/seller")
        .then(function(response){
          return response.json()
        }).then(function(response){
          if(response.success === 1){
            this.datas = response.data;

          }
        })
    },
    data(){
      return {
        datas:"",
        isShow: false
      }
    }
  }
</script>

<style>
/*头部*/
.header {
	height: 134px;
	position: relative;
	background-color:rgba(7,17,27,0.5);
}
/*头部上*/
.header .top{
	height: 106px;
	position: relative;
}
.header .top .left{
	display: inline-block;
	width: 64px;
	height: 64px;
	margin:24px 16px 0 24px;
	border-radius: 4px;
	background: url('http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg') no-repeat;
	background-size: cover;
	vertical-align: top;
}
.header .top .right{
	display: inline-block;
}
.right .one{
	font-size: 0;
	margin: 26px 0 4px 0;
}
.right .one span:nth-child(1){
	width: 30px;
	height: 18px;
	display: inline-block;
	background: url('../assets/brand@2x.png') no-repeat;
	background-size: cover;
	vertical-align: top;
	margin-right: 6px;
}
.right .one span:nth-child(2){
	font-size: 16px;
	font-weight: bold;
	color: rgb(255,255,255);
	line-height: 18px;
}
.right .two span{
	display: inline-block;
	font-size: 12px;
	color: white;
	font-weight: 200;
	line-height: 12px;
}
.right .three{
	margin-top: 6px;
	font-size: 0;
}
.right .three span{
	display: inline-block;
}
.right .three .threeOne{
	width: 16px;
	height: 16px;
	margin-right: 4px;
	background: url('../assets/decrease_2@2x.png') no-repeat;
	background-size: cover;
	vertical-align: top;
}
.right .three .threeTwo{
	font-size: 10px;
	color: white;
	font-weight: 200;
	line-height: 16px;
}
.btn {
	font-size: 10px;
	color: white;
	font-weight: 200;
	line-height: 24px;
	text-align: center;
	height: 24px;
	float: right;
	background: rgba(0,0,0,.2);
	border-radius: 30px;
	padding:0px 8px; 
	position: absolute;
	bottom: 16px;
	right: 12px;
}
.btn span{
	margin-left: 2px;
}
/*头部下*/
.header .bottom {
	padding: 0 12px;
	height: 28px;
	line-height: 28px;
	position: relative;
	background: rgba(0,0,0,0.5);
}
.header .bottom span:nth-child(1){
	float: left;
	width: 22px;
	height: 28px;
	background: url('../assets/bulletin@2x.png') no-repeat center;
	background-size: 22px 12px;
	margin-right: 4px;
	vertical-align: top;
}
.header .bottom span:nth-child(2){
	display: inline-block;
	float: left;
    font-size: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color:#fff;
    width: 87%;
    height: 28px;
}
.header .bottom span:nth-child(3){
	/*position: absolute;
	right: 12px;*/
	float: right;
	color: white;
	height: 28px;
	font-size: 10px;
}
.bg{
	position: absolute;
    width:100%;
    height:100%;
    left:0;
    top:0;
    background-image:url("http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg");
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-filter: blur(10px); /* Chrome, Opera */
    -moz-filter: blur(10px);
    -ms-filter: blur(10px);   
    filter: blur(10px);
    z-index: -1;
}
</style>