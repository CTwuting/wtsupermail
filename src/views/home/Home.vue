<template>
    <div id="home">
        <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
        <home-swiper :banners ='banners'></home-swiper>
        <recommend-view :recommends = 'recommends'></recommend-view>
        <feature-view></feature-view>
        <tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>
        <goods-list :goods='goods[pop].list'></goods-list>
        <ul>
            <li>12342423</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import { getHomeMultidata, getHomeGoods} from 'network/home'


export default {
    name: 'Home',
    components: {
        HomeSwiper,
        RecommendView,
        FeatureView,
        NavBar,
        TabControl,
        GoodsList
    },
    data() {
        return {
            banners: [],
            recommends: [],
            goods: {
                'pop': {page: 0, list: []}, 
                'new': {page: 0, list: []}, 
                'sell': {page: 0, list: []} 
            }
        }
    },
    created() {
        // 请求轮播图数据
        this.getHomeMultidata()
        // 请求商品数据 
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
    },
    methods: {
        getHomeMultidata() {
            getHomeMultidata().then(res => {
                this.banners = res.data.banner.list;
                this.recommends = res.data.recommend.list;
            })
        },
        getHomeGoods(type) {
            // 获取当前type的页码
            const page = this.goods[type].page + 1;
            getHomeGoods(type, page).then(res => {
                // 把请求到的数据存放到data中
                this.goods[type].list.push(...res.data.list);
                // 当前type的page加一
                this.goods[type].page += 1;
            })
        }
    }
}
</script>

<style scoped>
    #home {
        padding-top: 44px;
    }

    .home-nav {
        background-color: var(--color-tint);
        color: #fff;

        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;
    }

    .tab-control {
        position: sticky;
        top: 44px;
    }
</style>