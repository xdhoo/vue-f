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
					title: '首页',
					icon: 'dashboard',
					children: [
						{
							title: '首页',
							icon: 'send',
							url: '/dashboard'
						}, {
							title: '统计',
							icon: 'send',
							url: '/analysis'
						}, {
							title: '监测',
							icon: 'send',
							url: '/dashboard'
						}, {
							title: '工作台',
							icon: 'send',
							url: '/workplace'
						}
					]
				}, {
					title: 'MENU TWO',
					icon: 'send',
					url: '/home'
				}, {
					title: 'MENU THREE',
					icon: 'send',
					url: '/home'
				}, {
					title: 'MENU FOUR',
					icon: 'send',
					url: '/home'
				}, {
					title: 'MENU FIVE',
					icon: 'send',
					url: '/home'
				}
			]
		}
	}
}
</script>

<style lang="less">
	.el-header{
		background-color: #0199f1;
		font-size:36px;
		line-height: 60px
	}
	.main{
		height: 100%
	}
</style>
