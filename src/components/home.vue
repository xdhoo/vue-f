<template>
	<el-container>
		<el-header>VUE-F</el-header>
		<el-container class="main">
			<el-aside width="200px">
				<el-menu>
					<el-submenu index="1">
						<template slot="title">ABC</template>
						<router-link to="/page" tag="span">
							<el-menu-item index="1-1">
								Go to Page
							</el-menu-item>
						</router-link>
						<router-link to="/" tag="span">
							<el-menu-item index="1-2">
								Default
							</el-menu-item>
						</router-link>

					</el-submenu>
					<el-submenu index="2">
						<template slot="title">DEF</template>
						<el-menu-item index="2-1">D</el-menu-item>
						<el-menu-item index="2-2">F</el-menu-item>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title">GHI</template>
						<el-menu-item index="3-1">G</el-menu-item>
						<el-menu-item index="3-2">H</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-aside>
			<el-main>
				<router-view/>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
export default {
	name: 'home',
	data () {
		return {}
	}
}
</script>

<style lang="less">
	.el-header{
		background-color: #ccc5c5;
		font-size:36px;
		line-height: 60px
	}
	.main{
		height: 100%
	}
</style>
