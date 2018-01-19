<template>
	<div class="app-list-nav">
    	<ul>
    		<li :style="{background:`url(${nav.flag})`}":key='nav.id' v-for="nav in navs" @click="changeID(nav.id)"><span v-show="id.value==nav.id"></span>{{nav.name}}</li>
    	</ul>
	    
	</div>
	
</template>

<script>
	
	export default {
		name : 'app-list-box',
		props:['navs','id'],
		methods: {			
			changeID(id){
				this.id.value=id
			}
		}
	}	
</script>

<style lang="scss" scoped>
	.app-list-nav{
	    width:0.89rem;
	    ul{
	    	width:100%;
	    	height:100%;
	    	overflow: auto;
			background: #f8f8f8;
	        li{
	            width:100%;
	            height:0.49rem;
	            background: #f8f8f8;
	            border-bottom: 0.01rem solid #e0e0e0;
	            line-height: 0.46rem;
	            text-align: center;
	            color: #6d6d6d;
	            font-size: 0.14rem;
				position: relative;
				background-repeat: no-repeat !important;
				background-position: top right !important;
				background-size: auto 70% !important;
	            span{
	            	display:block;
	            	position: absolute;
	            	top: 10%;
	            	left: 0;
	            	width:5px;
	            	height:80%;
					border-radius: 0 5px 5px 0;
	            	background: #ffd600;
	            	//display: none;
	            }
	        }
	    }
    }
</style>