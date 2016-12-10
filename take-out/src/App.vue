<template>
  <div id="app">
    <v-header v-bind:state="isShow" v-on:changeShow="Accord"></v-header>
    <div class="tab">
      <div><router-link to="/a">商品</router-link></div>
      <div><router-link to="/b">评价</router-link></div>
      <div><router-link to="/c">商家</router-link></div>
    </div>
    <router-view></router-view>
    <!-- 蒙版 -->
    <div class="mask" v-show="isShow">
      <!-- 模糊层 -->
      <div class="fuzzy"></div>


      <!-- 内容层 -->
      <div class="main">
        <p class="name">粥品香坊(回龙观)</p>
        <!-- 评分 -->
        <div class="star">
          <img src="./assets/star48_on@2x.png" alt="">
          <img src="./assets/star48_on@2x.png" alt="">
          <img src="./assets/star48_on@2x.png" alt="">
          <img src="./assets/star48_on@2x.png" alt="">
          <img src="./assets/star48_off@2x.png" alt="">
        </div>

        <div class="preferential">
          <div></div>
          <p>优惠信息</p>
          <div></div>
        </div>
        <div class="information">
          <div><img src="./assets/decrease_2@2x.png" alt="">在线支付满28减5</div>
          <div><img src="./assets/discount_2@2x.png" alt="">单人精彩套餐</div>
          <div><img src="./assets/discount_2@2x.png" alt="">VC无限橙果汁全场8折</div>
          <div><img src="./assets/special_2@2x.png" alt="">单人特色套餐</div>
          <div><img src="./assets/special_2@2x.png" alt="">特价饮品八折抢购</div>
        </div>

        <div class="preferential">
          <div></div>
          <p>商家公告</p>
          <div></div>
        </div>

        <div class="announcement">
          <p>粥品香坊其烹饪料的秘方源自于中国千年古法，在融合现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发张至今成为粥类引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</p>
        </div>



        <!-- 关闭按钮 -->
        <span class="close" v-on:click="change">+</span>
      </div>
    </div>
  </div>
</template>

<script>
import header from './components/header'

export default {
  data(){
    return{
      isShow: false
    }
  },
  components: {
    "v-header":header
  },
  methods:{
    Accord:function(isShow){
      this.isShow = isShow;
    },
    change:function(){
      this.isShow = !this.isShow;
    }
  }
}
</script>

<style>
.tab{
  height: 40px;
  display: flex;
  border-bottom:1px solid rgba(7,17,27,0.1);
}
.tab div{
  flex: 1;
  text-align: center;
  line-height: 40px;
}
.tab div a{
  text-decoration: none;
  font-size: 14px;
  color: rgb(77,88,93);
}
.tab .router-link-active{
  color: rgb(240,20,20);
  line-height: 14px;
}
.fuzzy{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(7,17,27,0.8);
  /*-webkit-filter: blur(10px);
  -moz-filter: blur(10px);
  -ms-filter: blur(10px);*/   
  /*filter: blur(10px);*/
}
.mask{
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  z-index: 60;
}
.mask .close{
  display: block;
  width: 32px;
  height: 32px;
  position: fixed;
  bottom: 32px;
  left: 50%;
  margin-left: -16px;
  text-align: center;
  line-height: 32px;
  font-size: 32px;
  color: rgba(255,255,255,0.5);
  transform: rotate(45deg);
}
.mask .main{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: scroll;
}
.main .name{
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  color: white;
  line-height: 16px;
  margin: 64px 0 16px 0;
}
.main .star {
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 28px;
}
.main .star img{
  width: 20px;
  height: 19px;
  margin-right: 20px;
}
.main .star img:nth-child(5){
  margin-right: 0;
}
.preferential{
  height: 14px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}
.preferential p{
  margin: 0 12px;
  color: white;
  font-weight: 700;
}
.preferential div{
  width: 112px;
  height: 1px;
  background: rgba(255,255,255,0.2);
}
.information {
  margin: 0 36px 28px 36px;
  padding-left: 12px;
  font-size: 12px;
  font-weight: 200;
  color: white;
  line-height: 12px;
}
.information div{
  height: 16px;
  margin-bottom: 12px;
}
.information img{
  width: 16px;
  height: 16px;
  margin-right: 6px;
  vertical-align: middle;
}
.announcement{
  margin: 0 36px 28px 36px;
  padding-left: 12px;
  font-size: 12px;
  color: white;
  line-height: 24px;
  font-weight: 200;
}
</style>
