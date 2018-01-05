<template>
	<div class="app-list-item">
		<div class="list-box">
			<div class="img"><img src="http://img01.bqstatic.com/upload/goods/201/712/2301/20171223010644_408158.jpg@200w_200h_90Q"/></div>
			
			<div class="detail">
				<h2>海南青柠檬</h2>
				<h3><span>精选</span><span>买一赠一</span></h3>
				<h4>140-180g 2粒/盒</h4>
				<h5>￥29.9<span>￥39.9</span></h5>
			</div>
			
			<div class="button">
				<div class="btn dele">-</div>
				<span>1</span>
				<div class="btn add">+</div>
			</div>	
		</div>
		
		<div class="list-box">
			<div class="img"><img src="http://img01.bqstatic.com/upload/goods/201/712/2301/20171223010644_408158.jpg@200w_200h_90Q"/></div>
			
			<div class="detail">
				<h2>海南青柠檬</h2>
				<h3><span>精选</span><span>买一赠一</span></h3>
				<h4>140-180g 2粒/盒</h4>
				<h5>￥29.9<span>￥39.9</span></h5>
			</div>
			
			<div class="button">
				<div class="btn dele">-</div>
				<span>1</span>
				<div class="btn add">+</div>
			</div>	
		</div>
		<div class="list-box">
			<div class="img"><img src="http://img01.bqstatic.com/upload/goods/201/712/2301/20171223010644_408158.jpg@200w_200h_90Q"/></div>
			
			<div class="detail">
				<h2>海南青柠檬</h2>
				<h3><span>精选</span><span>买一赠一</span></h3>
				<h4>140-180g 2粒/盒</h4>
				<h5>￥29.9<span>￥39.9</span></h5>
			</div>
			
			<div class="button">
				<div class="btn dele">-</div>
				<span>1</span>
				<div class="btn add">+</div>
			</div>	
		</div>
		<div class="list-box">
			<div class="img"><img src="http://img01.bqstatic.com/upload/goods/201/712/2301/20171223010644_408158.jpg@200w_200h_90Q"/></div>
			
			<div class="detail">
				<h2>海南青柠檬</h2>
				<h3><span>精选</span><span>买一赠一</span></h3>
				<h4>140-180g 2粒/盒</h4>
				<h5>￥29.9<span>￥39.9</span></h5>
			</div>
			
			<div class="button">
				<div class="btn dele">-</div>
				<span>1</span>
				<div class="btn add">+</div>
			</div>	
		</div>
		<div class="list-box">
			<div class="img"><img src="http://img01.bqstatic.com/upload/goods/201/712/2301/20171223010644_408158.jpg@200w_200h_90Q"/></div>
			
			<div class="detail">
				<h2>海南青柠檬</h2>
				<h3><span>精选</span><span>买一赠一</span></h3>
				<h4>140-180g 2粒/盒</h4>
				<h5>￥29.9<span>￥39.9</span></h5>
			</div>
			
			<div class="button">
				<div class="btn dele">-</div>
				<span>1</span>
				<div class="btn add">+</div>
			</div>	
		</div>
		<div class="list-box">
			<div class="img"><img src="http://img01.bqstatic.com/upload/goods/201/712/2301/20171223010644_408158.jpg@200w_200h_90Q"/></div>
			
			<div class="detail">
				<h2>海南青柠檬</h2>
				<h3><span>精选</span><span>买一赠一</span></h3>
				<h4>140-180g 2粒/盒</h4>
				<h5>￥29.9<span>￥39.9</span></h5>
			</div>
			
			<div class="button">
				<div class="btn dele">-</div>
				<span>1</span>
				<div class="btn add">+</div>
			</div>	
		</div>
	</div>
	
	
</template>

<script>
	export default {
		name: 'app-list-item',
		data(){
        	return {
        		
        	}
        }
	}
	
</script>

<style lang="scss" scoped>
	
	.app-list-item{
		/*height:100%;*/
		overflow: scroll;
		.list-box{
			display: flex;
			padding:0.1rem;
			font-size: 12px;
			border-bottom: 1px solid #ccc;
			position: relative;
			img{
				width:0.96rem;
				height:0.96rem;
			}
			.detail{
				display: flex;
				flex-direction: column;
				flex: 1;
				justify-content: space-between;
				h2{
					font-size: 14px;
				}
				h3{
					color: #FF0000;
	                            
	                span{
	                    &:first-child{
	                        border:1px solid #f00;
	                        border-radius: 5px;
	                    }
	                    &:last-child{
	                        background: #f00;
	                        color: #fff;
	                        border-radius: 5px;
	                        margin-left:0.1rem;
	                    }
	                }
				}
				h4{
	                color: #999;
	            }
	            h5{
	                color: #f00;
	                span{
	                    color: #999;
	                }
	            }
			}
			.button{
	            width:0.8rem;
	            height:0.6rem;
	            position: absolute;
	            right: 0.1rem;
	            bottom: 0;
				display: flex;
				justify-content: space-around;
				align-items: center;
	            .btn{
	                width:0.3rem;
	                height: 0.3rem;
	                border:0.01rem solid #f00;
	                border-radius: 50%;
	                color: red;
	                background: #fff;
	                font-size: 22px;
	                display: flex;
					justify-content: space-around;
					align-items: center;
	            }
	        }
	    }
	}
	
</style>