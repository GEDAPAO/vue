<template>
  <div class="seller">
  	<div class="selle_top">
  		<div class="name">
  			<p>粥品香坊（回龙观）</p>
  			<div><img src="../assets/star36_on@2x.png" alt=""><img src="../assets/star36_on@2x.png" alt=""><img src="../assets/star36_on@2x.png" alt=""><img src="../assets/star36_on@2x.png" alt=""><img src="../assets/star36_off@2x.png" alt=""><span>(24)</span>月售90单</div>
  		</div>
  		<div class="data">
  			<div>
  				<p>起送价</p>
  				<p>20<span>元</span></p>
  			</div>
  			<div>
  				<p>商家配送</p>
  				<p>4<span>元</span></p>
  			</div>
  			<div>
  				<p>平均配送时间</p>
  				<p>39<span>分钟</span></p>
  			</div>
  		</div>
  	</div>

  	<div class="layer"></div>


  	<div class="selle_bottom">
  		<p class="title">公告与活动</p>
  		<p class="content">粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</p>

  		<div class="box" v-for="list in datas['supports']">
  			<img src="../assets/decrease_3@2x.png" alt="">
  			<span>{{list['description']}}</span>
  		</div>
  	</div>


  	<div class="layer2"></div>

  	<div class="live">
  		<p class="title">商家实景</p>
  		<div class="uldiv">
	  		<ul>
	  			<li v-for="img in datas['pics']"><img v-bind:src="img" alt=""></li>
	  		</ul>
  		</div>
  	</div>

  	<div class="layer2"></div>

  	<div class="xinxi">
  		<p class="title">商家信息</p>
  		<div v-for="infos in datas['infos']">{{infos}}</div>
  	</div>
  </div>
</template>

<script>
 export default{
    methods:{
      
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


  // var ul = document.querySelector('.live ul');
  // // ul.style.width = th
  // alert(this.datas);
</script>

<style>
.seller{
	position: absolute;
	top:175px;
	width: 100%;
	left: 0;
	bottom: 0;
	overflow: scroll;
}
.seller .selle_top{
	height: 150px;
	border-bottom: 1px solid rgba(7,17,27,0.1);
	padding: 0 18px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
}
.seller .selle_top > div{
	flex: 1;
}
.seller .selle_top .name{
	border-bottom: 1px solid rgba(7,17,27,0.1);
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.seller .selle_top .name > p{
	font-size: 14px;
	color: rgb(7,17,27);
	/*line-height: 14px;*/
	margin-bottom: 8px;
}
.seller .selle_top .name > div{
	font-size: 10px;
	color: rgb(77,85,93);
}
.seller .selle_top .name > div img{
	width: 12px;
	height: 12px;
	margin-right: 6px;
}
.seller .selle_top .name > div span{
	margin: 0 12px 0 2px;
}
.seller .selle_top .data{
	display: flex;
	justify-content: center;
	align-items: center;
}
.seller .selle_top .data > div{
	flex: 1;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border-right: 1px solid rgba(7,17,27,0.1);
}
.seller .selle_top .data > div:nth-child(3){
	border-right: none;
}
.seller .selle_top .data > div p:nth-child(1){
	font-size: 10px;
	color: rgb(147,153,159);
	margin-bottom: 4px;
}
.seller .selle_top .data > div p:nth-child(2){
	font-size: 24px;
	font-weight: 200;
	color: rgb(7,17,27);
}
.seller .selle_top .data > div p:nth-child(2) span{
	font-size: 10px;
}
.seller .layer{
  height: 16px;
  background: #f3f5f7;
  border-bottom: 1px solid #e6e7e8;
}
.seller .layer2{
	height: 16px;
 	background: #f3f5f7;
  	border-bottom: 1px solid #e6e7e8;
  	border-top: 1px solid #e6e7e8;
}
.seller .selle_bottom{
	padding: 18px;
}
.seller .selle_bottom .title{
	font-size: 14px;
	color: rgb(7,17,27);
	margin-bottom: 8px;
}
.seller .selle_bottom .content{
	margin: 0 12px 16px;
	font-size: 12px;
	font-weight: 200;
	color: rgb(240,20,20);
	line-height: 24px; 
}
.seller .selle_bottom .box{
	height: 48px;
	display: flex;
	align-items: center;
	border-top: 1px solid #e6e7e8;
	padding-left: 12px;
}
.seller .selle_bottom .box img{
	width: 16px;
	height: 16px;
	margin-right: 6px;
}
.seller .selle_bottom .box span{
	font-size: 12px;
	font-weight: 200;
	color: rgb(7,17,27);
}
.seller .live{
	padding: 18px;
}
.seller .live .title{
	font-size: 14px;
	color: rgb(7,17,27);
	margin-bottom: 12px;
}
.seller .live ul{
	/*overflow-x:auto;*/
	height: 90px;
	width: 504px;
}
.seller .live ul li{
	margin-right: 6px;
	width: 120px;
	height: 90px;
	float: left;
}
.seller .live ul li img{
	width: 120px;
	height: 90px;
}
.seller .xinxi{
	padding: 18px;
}
.seller .xinxi .title{
	font-size: 14px;
	color: rgb(7,17,27);
	margin-bottom: 12px;
}
.uldiv {
	overflow-x: scroll;
}
.seller .xinxi div {
	height: 48px;
	line-height: 16px;
	display: flex;
	align-items: center;
	padding-left: 12px;
	border-top: 1px solid rgba(7,17,27,0.1);
	font-size: 12px;
	font-weight: 200;
	color: rgb(7,17,27);
}
</style>