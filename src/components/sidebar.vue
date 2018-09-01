<template>
  <el-aside width="200px">
    <el-menu v-for="(menu,index) in menus" :key="index" :index="index">
      <router-link :to="menu.url" tag="span" v-if="!menu.children">
        <el-menu-item :index="index+''">
          <i :class="'fa fa-'+ menu.icon"> {{menu.title}}</i>
        </el-menu-item>
      </router-link>
      <el-submenu v-if="menu.children" :index="menu.title">
        <template slot="title">
					<i :class="'fa fa-'+ menu.icon"> {{menu.title}}</i>
				</template>
        <router-link :to="smenu.url" tag="span" v-for="(smenu,index) in menu.children" :key="index">
          <el-menu-item index="1-1">
            <i :class="'fa fa-'+ smenu.icon"> {{smenu.title}}</i>
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
