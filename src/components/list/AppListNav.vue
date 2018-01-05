<template>
	<div class="app-list-nav">
    	<ul>
    		<li :key='nav.id' v-for="nav in navs">{{nav.content}}</li>
    	</ul>
	    
	</div>
	
</template>

<script>
	
	export default {
		name : 'app-list-box',
		
		data(){
			return {
				navs:[
		    		{id:1,content:'热销新品',name:'re'},
		    		{id:2,content:'优选水果',name:'you'},
		    		{id:3,content:'卤味熟食',name:'lu'},
		    		{id:4,content:'牛奶面包',name:'niu'},
		    		{id:5,content:'热饮',name:'yin'},
		    		{id:6,content:'进口食品',name:'jin'},
		    		{id:7,content:'冰激凌',name:'bing'},
		    		{id:8,content:'饮料酒水',name:'jiu'},
		    		{id:9,content:'休闲食品',name:'xiu'},
		    		{id:10,content:'方便速食',name:'fang'},
		    		{id:11,content:'粮油调味',name:'liang'},
		    		{id:12,content:'肉蛋时蔬',name:'rou'},
		    		{id:13,content:'生活用品',name:'sheng'},
		    		{id:14,content:'宠物用品',name:'chong'},
		    		{id:15,content:'跑腿代购',name:'pao'},
		    	]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.app-list-nav{
	    width:0.88rem;
	    ul{
	    	width:100%;
	    	height:100%;
	    	overflow: auto;
	        li{
	            width:100%;
	            height:0.46rem;
	            background: #f8f8f8;
	            border-bottom: 0.01rem solid #e0e0e0;
	            line-height: 0.46rem;
	            text-align: center;
	            color: #6d6d6d;
	            font-size: 0.14rem;
	            
	        }
	    }
    }
</style>