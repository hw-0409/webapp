<template>
	<div class="app-list-box">
    	<div class="top">
    		<p>全部分类<i class="yo-ico">&#xf031;</i></p>
    		<p>综合分类<i class="yo-ico">&#xf031;</i></p>
    	</div>
    	
    	<div class="list-box">
    		<AppListItem  :key="i" v-for="(info,i) in infos[id.value]">
	    		<div class="img-box" @click="toDateil(info.id,info.pre_imgs,info.name,info.market_price,info.img)" slot='p-img'><img :src="info.app_mimg"><img class="yi-img" :src="info.app_mimg">	</div>
	    		<h4 slot="p-name" class="p-name">{{info.name}}</h4>
				<p v-show="info.is_xf==1" slot="jing" class="jing">精选</p>
	    		<p slot="p-intro" class="p-intro">{{info.specifics}}</p>
	    		<p slot="p-price" class="p-price">￥{{info.price}}<span>￥{{info.market_price}}</span></p>

				<span slot="p-reduce" v-if="getNowNum(info.id)" class="group-item-reduce group-item-change" @click="reduceCar({id:info.id})"><b>-</b></span>
				<span slot="p-num" v-if="getNowNum(info.id)"  class="group-item-number"><b>{{getNowNum(info.id)}}</b></span>
				<span slot="p-add" class="group-item-add group-item-change" @click="animetionAddCar({id:info.id,name:info.name,price:info.price,img:info.img},i)"><b>+</b></span>
	    	</AppListItem>
    	</div>
    	
    </div>	
</template>

<script>
	import axios from 'axios'
	import AppListItem from './AppListItem'
	import {mapState,mapActions} from 'vuex'
	
	export default {
        name:'app-list-box',
        components:{AppListItem},
        props:['infos','id'],
        data(){
        	return {
        	}
        },
		methods:{
    		...mapActions(["initCar","reduceCar","addCar"]),
			toDateil(id,img,name,price,image){
				this.$router.push({ name: 'detail',params: { id:id,img:img,name:name,price:price,image:image}})
			},
			getNowNum(id){
				let nowNum=0;
				this.car.forEach(item=>{
					if(item.id==id){
						nowNum = item.num
					}
				})
				return nowNum
			},
			animetionAddCar(type,id){
				this.addCar(type,id)
				var Img = document.getElementsByClassName("yi-img");
				Img[id].className = "yi-img"
				for(var i = 0; i < Img.length; i++){
					Img[id].className="yi-img ani zoom-out-down"
					
					
				}
				setTimeout(function(){
					Img[id].className = "yi-img"
				},1000)
			}
		},
		computed:{
     		...mapState(["car",]),
			
		},
		updated () {
    		this.initCar()
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
			z-index: 9999;
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