<template>
  <div class="score_main">
    <div class="score">
      <div class="left">
        <p>3.9</p>
        <p>综合评分</p>
        <p>高于周边商家69.2%</p>
      </div>
      <div class="right">
        <div><span>服务态度</span><img src="../assets/star36_on@2x.png" alt=""><img src="../assets/star36_on@2x.png" alt=""><img src="../assets/star36_on@2x.png" alt=""><img src="../assets/star36_on@2x.png" alt=""><img src="../assets/star36_off@2x.png" alt=""><span>3.9</span></div>
        <div><span>服务态度</span><img src="../assets/star36_on@2x.png" alt=""><img src="../assets/star36_on@2x.png" alt=""><img src="../assets/star36_on@2x.png" alt=""><img src="../assets/star36_on@2x.png" alt=""><img src="../assets/star36_off@2x.png" alt=""><span>4.0</span></div>
        <div class="time"><span>送达时间</span><span>44分钟</span></div>
      </div>
    </div>
    <div class="layer"></div>

    <div class="comments">
      <div class="classification">
        <div class="all">全部<span>{{datas.length}}</span></div>
        <div class="satisfied">满意<span>14</span></div>
        <div class="not_satisfied">不满意<span>10</span></div>
      </div>

      <div class="content">
        <img src="../assets/choose.png" alt="">只看有内容的评价
      </div>
    </div>
    <div class="area">
      <div class="box" v-for="lists in datas">
        <div class="box_left">
          <img class="portrait" v-bind:src="lists['avatar']" alt="">
        </div>
        <div class="box_right">
          <p class="name"><span>{{lists['username']}}</span><span>{{new Date(lists['rateTime']).toLocaleString()}}</span></p>
          <div class="star">
            <img src="../assets/star36_on@2x.png" alt=""><img src="../assets/star36_on@2x.png" alt=""><img src="../assets/star36_on@2x.png" alt=""><img src="../assets/star36_on@2x.png" alt=""><img src="../assets/star36_off@2x.png" alt=""><span v-if="lists['deliveryTime']">{{lists['deliveryTime']}}分钟送达</span>
          </div>
          <p class="describe" v-if="lists['text']">{{lists['text']}}</p>
          <div class="recommended" v-if="lists['recommend'].length!=0">
            <img src="../assets/good.png" alt="">
            <span v-for="list in lists['recommend']">
              {{list}}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 export default{
    methods:{
      
    },
    created(){
      this.$http.get("http://10.80.16.136:8080/api/ratings")
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
      }
    }
  }
</script>

<style>
.score_main {
  position: absolute;
  top:175px;
  bottom: 0;
  left: 0;
  overflow: scroll;
}
.score_main .score{
  height: 106px;
  border-bottom: 1px solid #e6e7e8;
  display: flex;
  align-items: center;
}
.score_main .score .left{
  width: 138px;
  height: 72px;
  text-align: center;
  border-right: 1px solid #e6e7e8;
}
.score_main .score .left p:nth-child(1){
  font-size: 24px;
  color: rgb(255,153,0);
  margin-bottom: 6px;
}
.score_main .score .left p:nth-child(2){
  font-size: 12px;
  color: rgb(7,17,27);
  margin-bottom: 4px;
}
.score_main .score .left p:nth-child(3){
  font-size: 10px;
  color: rgb(147,153,159);
}
.score_main .score .right{
  flex: 1;
  padding-left: 24px;
}
.score_main .score .right div{
  margin-bottom: 8px;
}
.score_main .score .right div img{
  width: 15px;
  height: 15px;
  vertical-align: middle;
  margin-right: 6px;
}
.score_main .score .right div span:nth-child(1){
  font-size: 12px;
  color: rgb(7,17,27);
  margin-right: 12px;
}
.score_main .score .right div span:last-child{
  font-size: 12px;
  color: rgb(255,153,0);
  margin-left: 6px;
}
.score_main .score .right .time span:nth-child(2){
  font-size: 12px;
  color: rgb(147,153,159);
}
.score_main .layer{
  height: 16px;
  background: #f3f5f7;
  border-bottom: 1px solid #e6e7e8;
}
.score_main .comments {
  height: 116px;
  border-bottom: 2px solid #e6e7e8;
  padding-left: 18px;
  padding-right: 18px;
}
.score_main .comments .classification{
  height: 67px;
  border-bottom: 1px solid #e6e7e8;
  display: flex;
  align-items: center;
}
.score_main .comments .classification div{
  height: 32px;
  padding: 0 12px;
  margin-right: 8px;
  font-size: 12px;
  text-align: center;
  background: red;
  line-height: 32px;
}
.score_main .comments .classification div span{
  font-size: 8px;
  margin-left:4px;
  vertical-align: bottom;
}
.score_main .comments .classification .all{
  background: #00a0dc;
  color: white;
}
.score_main .comments .classification .satisfied{
  background: #ccecf8;
  color: #4d555d;
}
.score_main .comments .classification .not_satisfied{
  background: #e9ebec;
  color: #4d555d;
}
.score_main .comments .content{
  height: 49px;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #93999f;
}
.score_main .comments .content img{
  width: 20px;
  height: 20px;
  margin-right: 6px;
}
.score_main .area{
  padding: 0 18px;
}
.score_main .area .box{
  margin-top: 18px;
  display: flex;
  padding-bottom: 18px;
  border-bottom: 1px solid rgba(7,17,27,0.1);
}
.score_main .area .box .box_left{
  margin-right: 12px;
}
.score_main .area .box .portrait{
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 50%;
}
.score_main .area .box .box_right .name{
  font-size: 10px;
  color: rgb(7,17,27);
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
}
.score_main .area .box .box_right{
  flex: 1;
}
.score_main .area .box .box_right .star{
  font-size: 10px;
  font-weight: 100;
  color: rgb(147,153,159);
  margin-bottom: 6px;
}
.score_main .area .box .box_right .star img{
  width: 10px;
  height: 10px;
  margin-right: 6px;
}
.score_main .area .box .box_right .describe{
  font-size: 12px;
  color: rgb(7,17,27);
  line-height: 18px;
  margin-bottom: 8px;
}
.score_main .area .box .box_right .recommended img{
 width: 11px;
 height: 11px;
 margin-right: 8px;
}
.score_main .area .box .box_right .recommended span{
  display: inline-block;
  border: 1px solid rgba(7,17,27,0.1);
  border-radius: 2px;
  padding: 2px 6px;
  font-size: 9px;
  color: rgb(147,153,159);
  line-height: 16px;
  margin-bottom: 4px;
  margin-right: 5px
}
</style>