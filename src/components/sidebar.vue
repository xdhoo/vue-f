<template>
  <el-aside>
    <el-menu v-for="(menu,index) in menus" :key="index" :index="index">
      <router-link :to="menu.url" tag="span" v-if="!menu.children">
        <el-menu-item :index="index+''">
          {{menu.title}}
        </el-menu-item>
      </router-link>
      <el-submenu v-if="menu.children" :index="menu.title">
        <template slot="title">{{menu.title}}</template>
        <router-link :to="menu.url" tag="span" v-for="(smenu,index) in menu.children" :key="index">
          <el-menu-item index="1-1">
            {{smenu.title}}
          </el-menu-item>
        </router-link>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
	name: 'sidebar',
	props: ['menus'],
	data () {
		return {
		}
	}
}
</script>
