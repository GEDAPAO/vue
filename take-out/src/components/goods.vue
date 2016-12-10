<template>
  <div class="goods">
  	<div class="left" ref="meunWrapper">
	  	<ul>
	  		<li @click="go(index)" v-for="list,index in datas" :class="{active:index == getIndex}"><p><span v-if="list.type>0" v-bind:class="classN[list.type]"></span>{{list['name']}}</p></li>
	  	</ul>
	</div>
	<div ref="foodWrapper" class="right">  	
	  	<div>
	  		<div class="foods-list" v-for="lists in datas">
	  			<p class="title">{{lists['name']}}</p>
	  			<div class="ul">
	  				<div class="li" v-for="food in lists['foods']">
	  					<img class="img" v-bind:src="food['image']" alt="">
						<div class="details">
							<p>{{food['name']}}</p>
							<p class="description" v-if="food['description']!='' " >{{food['description']}}</p>
							<p class="sell">月售{{food['sellCount']}}<span>好评率{{food['rating']}}%</span></p>
							<p class="price"><span><span class="spanOne">￥{{food['price']}}</span><span class="spanTwo" v-if="food['oldPrice']!=''">￥{{food['oldPrice']}}</span></span><img src="../assets/add.png" alt=""></p>
						</div>
	  				</div>
	  			</div>
	  		</div>
	  	</div>
	</div>
  	<div class="shopping-cart">
  		<div class="car_img"><div><img src="../assets/gouwuche.png" alt=""></div></div>
  		<div class="box">
  			<span class="total_price">￥0</span>
  			<span class="border"></span>
  			<span class="instructions">另需配送费￥4元</span>
  		</div>
  		<div class="buy_btn">￥20起送</div>
  	</div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
 export default{
    methods:{
		go:function(index){
	      console.log(this.listHeight)
	    },
      change(){
      	this.isShow = !this.state;
        this.$emit('changeShow',this.isShow);
      },
      initScroll:function(){
        this.menuScroll = new BScroll(this.$refs.meunWrapper,{
          click:true
        });
        this.foodScroll = new BScroll(this.$refs.foodWrapper,{
          probeType:3
        });
    	},
    	cheight:function(){
	      let height = 0;
	      this.listHeight.push(height);
	      let list = this.$refs.foodWrapper.querySelectorAll('.foods-list');
	      for(let i = 0;i<list.length;i++){
	        let liHeight = list[i].clientHeight;
	        height += liHeight;
	        this.listHeight.push(height);
	      }
	    }
 	 },
    created(){
      this.$http.get("http://10.80.16.136:8080/api/goods")
        .then(function(response){
          return response.json()
        }).then(function(response){
          if(response.success === 1){
            this.datas = response.data;
            this.$nextTick(()=>{
            	this.initScroll();
            	this.foodScroll.on('scroll',(pos)=>{
	            this.scrollY = Math.abs(Math.round(pos.y))
	          })
	          this.cheight();
	          
        	})
          }
        })
    },
    computed:{
	    getIndex:function(){
	      let index = 0;
	      for(let i = 0;i<this.listHeight.length;i++){
	        let height1 = this.listHeight[i];
	        let height2 = this.listHeight[i+1];
	        if(this.scrollY >= height1 && this.scrollY <= height2){
	          return i;
	        }
	      }
	      return index;
	    }
  	},
    data(){
      return {
        datas:"",
        isShow: false,
        classN:['','type1','type2'],
        scrollY: 0,
      	listHeight: []
      }
    }
  }
</script>

<style>
.goods .left .active{
	background: white;
}
.goods .left .active p{
	border:none;
}
.goods{
	position: absolute;
	top: 175px;
	bottom: 48px;
	width: 100%;
	left: 0px;
	display: flex;
	overflow: hidden;
}
.left{
	width: 80px;
	height: 100%;
	/*float: left;*/
}
.left li{
	padding: 0 12px;
	font-size: 12px;
	background: #f3f5f7;
	display: table;
}
.left li .type1{
	display: inline-block;
	width: 12px;
	height:12px;
	vertical-align: middle;
	margin-right: 2px;
	background: url('../assets/discount_3@2x2.png') no-repeat;
	background-size: cover;
}
.left li .type2{
	display: inline-block;
	width: 12px;
	height:12px;
	vertical-align: middle;
	margin-right: 2px;
	background: url('../assets/special_3@2x1.png') no-repeat;
	background-size: cover;
}
.left li p{
	display: table-cell;
	vertical-align: middle;
	width: 56px;
	height: 54px;
	line-height: 14px;
	border-bottom: 1px solid rgba(7,17,27,0.1);
}
.goods .right{
	flex: 1;
	height: 100%;
}
.goods .right div .title{
	height: 26px;
	color: rgb(147,153,159);
	line-height: 26px;
	padding-left: 14px;
	border-left: 2px solid #d9dde1;
	background: #f3f5f7;
}
.goods .right .ul{
	box-sizing: border-box;
	padding:0 18px 18px;
}
.goods .right .ul .li{
	padding: 18px 0;
	overflow: hidden;
	border-bottom: 1px solid rgba(7,17,27,0.1);
	display: flex;
}
.goods .right .ul .li .details {
	/*float: left;*/
	flex: 1;
}
.goods .right .ul .li .details p:nth-child(1){
	margin-top: 2px;
	font-size: 14px;
	color: rgb(7,17,27);
	line-height: 14px;
}
.goods .right .ul .li .details .description,.goods .right .ul .li .details .sell{
	font-size: 10px;
	color: rgb(147,153,159);
	line-height: 12px;
	margin-top: 8px;
	width: 150px;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}
.goods .right .ul .li .details .sell span{
	margin-left: 12px;
}
.goods .right .ul .li .details .price{
	margin-top: 8px;
	font-size: 14px;
	color: #f01414;
	font-weight: 700; 
	display: flex;
	justify-content: space-between;
}
.goods .right .ul .li .details .price img{
	width: 20px;
	height: 20px;
	vertical-align: middle;
}
.goods .right .ul .li .details .price .spanTwo{
	font-size: 10px;
	text-decoration: line-through;
	font-weight: 700;
	color: rgb(147,153,159);
	margin-left: 8px;
	line-height: 14px;
}
.goods .right div .ul .img{
	width: 57px;
	height: 57px;
	float: left;
	margin-right: 10px;
}
.shopping-cart{
	height: 48px;
	background: rgb(20,29,39);
	position:fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	line-height: 48px;
}
.shopping-cart .box{
	display: flex;
	align-items: center;
}
.shopping-cart .car_img{
	width: 56px;
	height:56px;
	border-radius: 50%;
	background: rgb(20,29,39);
	position: absolute;
	left: 12px;
	top: -10px;
}
.shopping-cart .car_img div{
	width: 44px;
	height: 44px;
	background: rgb(43,51,59);
	border-radius: 50%;
	margin: 6px 0 0 6px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.shopping-cart .car_img div img{
	width: 20px;
	height: 20px;
}
.buy_btn {
	position: absolute;
	right: 0;
	top: 0;
	width: 105px;
	height: 48px;
	text-align: center;
	line-height: 48px;
	color: rgba(255,255,255,0.4);
	background: rgb(43,51,59);
	font-size: 12px;
}
.shopping-cart .total_price{
	font-size: 16px;
	color: rgba(255,255,255,0.4);
	font-weight: 700;
	margin-left: 80px;
}
.shopping-cart .border{
	padding:24px 0 0 1px;
	background: rgba(255,255,255,0.1);
	margin: 0 12px;

}
.shopping-cart .instructions{
	font-size: 10px;
	color: rgba(255,255,255,0.4);
	/*font-weight: 700;*/
}
</style>