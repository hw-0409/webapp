<template>
	<div class="app-list-box">
    	<ul class="top">
    		<li>全部分类<i class="yo-ico">&#xf031;</i></li>
    		<li>综合分类<i class="yo-ico">&#xf031;</i></li>
    	</ul>
    	
    	<AppListItem v-for="list in lists" :info='list' :key='list.id'></AppListItem>
    	
    </div>
</template>

<script>
	import axios from 'axios'
	import AppListItem from './AppListItem'
	
	export default {
        name:'app-list-box',
        components:{AppListItem},
        
        data(){
        	return {
        		lists:[]
        	}
        },
		methods:{
			getData(){
				let that = this
				let url = 'http://localhost:3000/axf/data/getCategoryProduct?asid=5a431dc2ab51d9165&_r=0.7133663006016342&reflogid=5a4dda31cd79a4889&location_hash=5971adAoynJP1PTHy7VOMO8cNY4GNxqqpeDBbWCCOW9%2B2jQ8TwwCS%2Fry37i0wvktulL7RbXB8VeeMjxWdztJFnAyPuFqURa92ru9f4CdZWRg&zchtid=14449&bigids=2%2C0'
		   		let params = {}
		   	axios.get(url,{params}).then((response)=>{
		   		
		   		let res = eval('('+ response.data +')')
		   		console.log(res.data.products)
		   		that.lists = res.data.products
//			  	console.log(that.lists)
			  	
			  })
			}
		},
		created(){
			this.getData()
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