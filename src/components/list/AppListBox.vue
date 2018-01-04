<template>
	<div class="app-list-box">
    	<ul class="top">
    		<li>全部分类<i class="yo-ico">&#xf031;</i></li>
    		<li>综合分类<i class="yo-ico">&#xf031;</i></li>
    	</ul>
    	
    	<AppListItem></AppListItem>
    	
    </div>
</template>

<script>
	import AppListItem from './AppListItem'
	
	export default {
        name:'app-list-box',
        components:{AppListItem},
        
        data(){
        	return {
        		
        	}
        }
    }
	
</script>

<style lang="scss" scoped>
	
	.app-list-box{
		display: flex;
		flex-direction: column;
		flex: 1;
		margin-left: 0.1rem;
		.top{
			display: flex;
			height:0.48rem;
			border-bottom: 1px solid #ccc;
			line-height: 0.48rem;
		    text-align: center;
		    li{
		    	width: 50%;
		    	font-size: 14px;
		    }
		}
		
	}
</style>