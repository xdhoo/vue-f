<template>
	<el-container>
		<el-header>VUE-F</el-header>
		<el-container class="main">
			<sidebar :menus="menus"></sidebar>
			<el-main>
				<router-view/>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
import sidebar from '@/components/sidebar'
export default {
	name: 'home',
	components: {
		sidebar
	},
	data () {
		return {
			menus: [
				{
					title: 'MENU ONE',
					url: '/home',
					children: [
						{
							title: 'MENU 1-1',
							url: '/home'
						}, {
							title: 'MENU 1-2',
							url: '/home'
						}
					]
				}, {
					title: 'MENU TWO',
					url: '/home'
				}, {
					title: 'MENU THREE',
					url: '/home'
				}, {
					title: 'MENU FOUR',
					url: '/home'
				}, {
					title: 'MENU FIVE',
					url: '/home'
				}
			]
		}
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
