<template>
    <div>
      <tab-bar>
        <tab-bar-item path='/home' activeColor = "blue">
          <i slot="item-icon" class="iconfont icon-zhuye"></i>
          <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path='/cart' activeColor = "blue">
          <i slot="item-icon" class="iconfont icon-fenlei-copy"></i>
          <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path='category' activeColor = "blue">
          <i slot="item-icon" class="iconfont icon-gouwuche"></i>
          <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path='profile' activeColor = "blue">
          <i slot="item-icon" class="iconfont icon-wode"></i>
          <div slot="item-text">我的</div>
        </tab-bar-item>
      </tab-bar>
    </div>
</template>

<script>

import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
    name: 'MainTabBar',
    components: {
        TabBar,
        TabBarItem
    }
}
</script>

<style scoped>
    
</style>
