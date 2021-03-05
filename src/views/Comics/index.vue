<template>
  <div>
    <!-- 轮播图 -->
    <div class="swiper-container"
         ref="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./image/xiaomotou.jpg"
               alt="" />
        </div>
        <div class="swiper-slide active">
          <img src="./image/huola.jpg"
               alt="" />
        </div>
        <div class="swiper-slide">
          <img src="./image/xiaomotou.jpg"
               alt="" />
        </div>
        <div class="swiper-slide">
          <img src="./image/huola.jpg"
               alt="" />
        </div>
        <div class="swiper-slide">
          <img src="./image/xiaomotou.jpg"
               alt="" />
        </div>
        <div class="swiper-slide">
          <img src="./image/huola.jpg"
               alt="" />
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
    <!-- 导航条 -->
    <div class="title">
      <div class="title-total">
        <a class="title-item"
           v-for="title in titleList"
           :key="title.id">
          {{title.name}}
        </a>
      </div>
    </div>
    <!-- 推荐 -->
    <div class="recom">
      <div class="recom-title">
        <div class="recom-word">为你推荐</div>
        <div class="recom-change">换一批</div>
      </div>
      <div class="recom-imgList">
        <a v-for="imgitem in recomList"
           :key="imgitem.season_id">
          <div class="recom-ul">
            <div class="recom-item">
              <img :src="imgitem.imgUrl"
                   alt="">
            </div>
            <div>
              {{imgitem.title}}
            </div>
            <div>
              {{imgitem.styles[0]}}
            </div>
          </div>
        </a>

      </div>
      <div class="recom-imgList">
        <a v-for="imgitem in imgList"
           :key="imgitem.season_id">
          <div class="recom-ul">
            <div class="recom-item">
              <img :src="imgitem.imgUrl"
                   alt="">
            </div>
            <div>
              {{imgitem.title}}
            </div>
            <div>
              {{imgitem.styles[0]}}
            </div>
          </div>
        </a>
      </div>
    </div>
    <!-- 高能推荐 -->
    <div class="heinghtList">
      <div class="heinghtList-container">
        <div class="heinghtList-title">
          <div class="heinghtList-text">高能排行</div>
          <div class="heinghtList-riman">日漫榜</div>
          <div class="heinghtList-guoman">国漫榜</div>
          <div class="heinghtList-biaosheng">飙升榜</div>
        </div>
        <div class="smmileList">
          <div class="smmileList-left">
            <img :src="smmileList[0] ? smmileList[0].imgUrl : ''"
                 alt="">
          </div>
          <div>
            <div class="smmileList-text">
              <div class="smmileList-title">
                {{smmileList[0] ? smmileList[0].title:""}}
              </div>
              <div class="smmileList-author">
                {{smmileList[0] ? smmileList[0].author_name:""}}
              </div>
            </div>
            <div class="smmileList-qingjie">
              {{smmileList[0] ? smmileList[0].evaluate:""}}
            </div>
          </div>
        </div>
      </div>
      <div class="smmileimgUrl">
        <div v-for="smmile in smmileList"
             :key="smmile.season_id">
          <img :src="smmile.imgUrl"
               alt="">
          <div class="smmileimgUrl-title">
            {{smmile.title}}
          </div>
        </div>
      </div>
    </div>
    <!-- 重复性动作 -->
    <div class="recom">
      <div class="recom-title">
        <div class="recom-word">重复性动作</div>
        <div class="recom-change">换一批</div>
      </div>
      <div class="recom-imgList">
        <a v-for="imgitem in recomList"
           :key="imgitem.season_id">
          <div class="recom-ul">
            <div class="recom-item">
              <img :src="imgitem.imgUrl"
                   alt="">
            </div>
            <div>
              {{imgitem.title}}
            </div>
            <div>
              {{imgitem.styles[0]}}
            </div>
          </div>
        </a>

      </div>
      <div class="recom-imgList">
        <a v-for="imgitem in imgList"
           :key="imgitem.season_id">
          <div class="recom-ul">
            <div class="recom-item">
              <img :src="imgitem.imgUrl"
                   alt="">
            </div>
            <div>
              {{imgitem.title}}
            </div>
            <div>
              {{imgitem.styles[0]}}
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="footer">
      <div class="footer-conter">
        <div class="footer-left">
          <div class="footer-image">
            <img src="./image/dibu.png"
                 alt="">
            <span>哔哩哔哩漫画 </span>
          </div>
          <div class="footer-women">
            <div class="footer-a">
              <a>关于我们</a>
              <a>联系我们</a>
            </div>
            <div>
              <a>关于我们</a>
              <a>加入我们</a>
            </div>
          </div>
          <div class="iconfont">
            <i class="iconfont icon-qq"
               style="font-size:48px;color:#32aaff"></i>
            <i class="iconfont icon-weibo"
               style="font-size:48px;color:#32aaff"></i>
            <i class="iconfont icon-weixin"
               style="font-size:48px;color:#32aaff"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="fixposition"
         @click="handle">
      <div class="fixposition1 active">为你推荐</div>
      <div class="fixposition2">高能排行</div>
      <div class="fixposition3">重复动作</div>
      <div class="fixposition4">底部</div>
    </div>
  </div>
</template>

<script>
import Swiper, { Navigation, Autoplay } from 'swiper'
Swiper.use(Navigation, Autoplay)
import {
  reqGetBanners,
  reqGetTitle,
  reqGetImg,
  reqGetSmmile,
} from '../../api/mock-test'
export default {
  name: 'Comics',
  data() {
    return {
      imgList: [],
      titleList: [],
      recomList: [],
      smmileList: [],
    }
  },
  mounted() {
    this.getBanners()
    this.initSwiper()
    this.getTitle()
    this.getimgList()
    this.getSmmile()
  },
  methods: {
    handle(e) {
      console.log(e, e.target)
    },
    //获取导航数据
    async getTitle() {
      const res = await reqGetTitle()
      if (res.data.code === 200) {
        this.titleList = res.data.data.data
      }
    },
    //轮播图
    initSwiper() {
      new Swiper(this.$refs.swiper, {
        loop: true,
        /* slidesPerView: 3, */
        centeredSlides: true,
        autoplay: {
          // 自动轮播
          delay: 2000, // 轮播间隔时间
          disableOnInteraction: false, // 当用户点击下一页时，仍会开启自动轮播
        },
        slidesPerView: 3, // 每页显示轮播图的数量
        spaceBetween: 30, // 轮播图间距
        slidesPerGroup: 1, // 切换时切换轮播图的数量
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
    },
    //获取漫画数据
    async getBanners() {
      const res = await reqGetBanners()
      if (res.data.code === 200) {
        this.imgList = res.data.data.data
      }
    },
    async getimgList() {
      const res = await reqGetImg()
      if (res.data.code === 200) {
        this.recomList = res.data.data.data
      }
    },
    async getSmmile() {
      const res = await reqGetSmmile()
      if (res.data.code === 200) {
        this.smmileList = res.data.data.data
      }
      console.log(this.smmileList)
    },
  },
}
</script>

<style scope>
.swiper-container img {
  width: 760px;
  height: 380px;
}
.title {
  width: 100%;
  padding: 26px 0;
  font-size: 16px;
  text-align: center;
  color: #fff;
  background-color: #212121;
}
.title-total {
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}
.title-item {
  vertical-align: middle;
  color: #fff;
  width: 48px;
  height: 20px;
  text-decoration: none;
}
.recom {
  min-width: 1000px;
  min-height: 797px;
  max-width: 1160px;
  width: 80%;
  margin: auto;
  padding-bottom: 32px;
}
.recom-title {
  padding: 60px 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.87);
}
.recom-word {
  font-size: 32px;
  line-height: 45px;
  margin-left: 0;
}
.recom-change {
  height: 34px;
  width: 90px;
  background-color: rgba(50, 170, 255, 0.16);
  border-radius: 20px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  color: #32aaff;
}
.recom-imgList {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  margin: 0 -5px;
  margin-top: 10px;
}
a {
  color: #32aaff;
  text-decoration: none;
}
.recom-item img {
  width: 190px;
  height: 325px;
}
.recom-ul {
  background-color: transparent;
  border: 0;
  transform-origin: center center;
  cursor: pointer;
}
.heinghtList {
  width: 100%;
  background-image: url('./image/bg.png');
  background-position: 50%;
  background-size: cover;
}
.heinghtList-container {
  min-width: 1000px;
  max-width: 1160px;
  width: 80%;
  margin: auto;
}
.heinghtList-title {
  padding: 60px 0 16px;
  display: flex;
  align-items: center;
  color: #fff;
}
.heinghtList-text {
  font-size: 32px;
  line-height: 45px;
}
.heinghtList-riman {
  position: relative;
  margin: 8px 0 0 28px;
  font-size: 14px;
  line-height: 20px;
}
.heinghtList-guoman {
  position: relative;
  margin: 8px 0 0 28px;
  color: hsla(0, 0%, 100%, 0.6);
  font-size: 14px;
  line-height: 20px;
}
.heinghtList-biaosheng {
  position: relative;
  margin: 8px 0 0 28px;
  color: hsla(0, 0%, 100%, 0.6);
  font-size: 14px;
  line-height: 20px;
}
.smmileList {
  display: flex;
}
.smmileList-left img {
  margin-left: 0;
}
.smmileList-title {
  color: #fff;
  font-size: 26px;
  line-height: 37px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: 35px;
  margin-top: 20px;
}
.smmileList-author {
  color: hsla(0, 0%, 100%, 0.86);
  font-size: 14px;
  line-height: 22px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: 35px;
}
.smmileList-text {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.smmileList-qingjie {
  display: block;
  margin: 15px 0 5px;
  font-size: 13px;
  line-height: 22px;
  color: hsla(0, 0%, 100%, 0.66);
  overflow: hidden;
  max-height: 88px;
  position: relative;
  padding: 30px 40px;
}
.smmileimgUrl {
  margin-left: 170px;
  display: flex;
  margin-top: 10px;
}
.smmileimgUrl img {
  width: 116px;
  height: 116px;
  margin-right: 10px;
}
.smmileimgUrl-title {
  margin-bottom: 20px;
}
.footer {
  padding-top: 40px;
  padding-bottom: 26px;
  background-color: #212121;
}
.footer-conter {
  max-width: 1160px;
  margin: 0 auto;
}
.footer-left {
  width: 1200px;
  display: flex;
  margin-left: 0;
  align-items: center;
}
.footer-left img {
  width: 68px;
  height: 68px;
  margin-right: 24px;
}
.footer-left span {
  font-size: 25px;
  color: hsla(0, 0%, 100%, 0.7);
  vertical-align: middle;
  text-align: center;
  margin-top: -50px;
  display: inline-block;
}
.footer-women {
  width: 350px;
  margin-left: 36px;
}
.footer-women a {
  width: 56px;
  margin: 10px 36px;
  height: 19px;
  font-size: 14px;
  color: hsla(0, 0%, 100%, 0.7);
}
.footer-a {
  margin-bottom: 10px;
}
.footer-a a {
  margin-right: 30px;
  display: inline-block;
}
.iconfont {
  margin-left: 30px;
}
.iconfont i {
  margin-right: 30px;
}
.footer-image {
  width: 300px;
}
.fixposition {
  position: fixed;
  top: 100px;
  right: 50px;
  margin-top: 5px;
  width: 72px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 12px;
  background-color: #fff;
  text-align: center;
}
.fixposition1,
.fixposition2,
.fixposition3,
.fixposition4 {
  height: 36px;
  line-height: 36px;
  padding-top: 15px;
  text-align: center;
  color: rgba(0, 0, 0, 0.56);
  background-color: transparent;
  transform-origin: center center;
  cursor: pointer;
  font: 400 13.3333px Arial;
  margin: 15px 6px;
}
.active {
  background-color: #6fc3ff;
  color: #fff;
}
</style>