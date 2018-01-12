<template>
	<div class="app-list-box">
    	<div class="top">
    		<p>全部分类<i class="yo-ico">&#xf031;</i></p>
    		<p>综合分类<i class="yo-ico">&#xf031;</i></p>
    	</div>
    	
    	<div class="list-box">
    		<AppListItem  :key="info.id" v-for="info in infos[id.value]">
	    		<div @click="toDateil(info.id,info.pre_imgs,info.name,info.market_price,info.img)" slot='p-img'><img :src="info.app_mimg"></div>

	    		<h4 slot="p-name" class="p-name">{{info.name}}</h4>
				<p v-show="info.is_xf==1" slot="jing" class="jing">精选</p>
	    		<p slot="p-intro" class="p-intro">{{info.specifics}}</p>
	    		<p slot="p-price" class="p-price">￥{{info.price}}<span>￥{{info.market_price}}</span></p>
	    	</AppListItem>
    	</div>
    	
    </div>
</template>

<script>
	import axios from 'axios'
	import AppListItem from './AppListItem'
	
	export default {
        name:'app-list-box',
        components:{AppListItem},
        props:['infos','id'],
        data(){
        	return {
				//.data.products[103532]["0"].pre_imgs
				asd:0,
        	}
        },
		methods:{
			toDateil(id,img,name,price,image){
				this.$router.push({ name: 'detail',params: { id:id,img:img,name:name,price:price,image:image}})
			}
//			getData(){
//				let that = this
//				let url = 'http://localhost:3000/axf/data/getCategoryProduct?asid=5a431dc2ab51d9165&_r=0.7133663006016342&reflogid=5a4dda31cd79a4889&location_hash=5971adAoynJP1PTHy7VOMO8cNY4GNxqqpeDBbWCCOW9%2B2jQ8TwwCS%2Fry37i0wvktulL7RbXB8VeeMjxWdztJFnAyPuFqURa92ru9f4CdZWRg&zchtid=14449&bigids=2%2C0'
//		   		let params = {}
//		   	axios.get(url,{params}).then((response)=>{
//		   		
//		   		let res = eval('('+ response.data +')')
//		   		console.log(res.data.products)
//		   		that.lists = res.data.products
////			  	console.log(that.lists)
//			  	
//			  })
//			}
	}	
}
	
</script>

<style lang="scss" scoped>
	
	.app-list-box{
		display: flex;
		flex-direction: column;
		flex: 1;
		margin-left: 0.1rem;
		overflow: scroll;
		.top{
			width: 2.77rem;
			height:0.48rem;
			position: fixed;
			top:0.55rem;
			right: 0;
			background: rgba(256,256,256,0.9);
			border-bottom: 1px solid #ccc;
			line-height: 0.48rem;
		    text-align: center;
		    p{
		    	float: left;
		    	width: 50%;
		    	height: 100%;
		    	font-size: 14px;
		    }
		}
		.list-box{
			display: flex;
			flex-direction: column;
			flex: 1;
			padding-top: 0.48rem;
		}
	}
</style>