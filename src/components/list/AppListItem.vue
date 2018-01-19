<template>
	<div class="app-list-item">
		<div class="title">
			<slot name="p-img"></slot>
			<div class="section">
				<slot name="p-name"></slot>
				<slot name="jing" ></slot>
				<slot name="p-intro"></slot>
				<slot name="p-price"></slot>
				<div  class="group-item-ope">
					<slot name="p-reduce"></slot>
					<slot name="p-num" ></slot>
					<slot name="p-add"></slot>
				</div>
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
	
	.title{
		height:1.1rem;
		display: flex;
		border-bottom: 1px solid #ccc;
		.img-box{
			position: relative;
			img{
				position: absolute;
				width:0.96rem;
				height:0.96rem;		
			}
		}
		.section{
			padding-left: 0.96rem;
			display: flex;
			flex-direction: column;
			flex: 1;
			justify-content: space-around;
			color: #999;
			position: relative;
			overflow: hidden;
			h4{
				font-size: 14px;
				color: #232b33;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}
			.jing{
				font-size: 12px;
				color: red;
				border: 1px solid red;
				width:0.3rem;
				border-radius: 5px;
				text-align: center;
			}
			.p-price{
				color: red;
				span{
					color: #999;
					text-decoration: line-through;
				}
			}
			.group-item-ope {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 1.2rem;
		.group-item-change {
			position: absolute;
			height: 0.6rem;
			width: 0.6rem;
			bottom: 0;
			b {
				display: inline-block;
				height: 0.34rem;
				width: 0.34rem;
				border: 1px solid red;
				border-radius: 50%;
				color: red;
				font-size: 30px;
				text-align: center;
				font-weight: 100;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
		}
		.group-item-reduce {
			left: 0;
			b {
				font-size: 40px;
				line-height: 0.26rem;
				background: #fff;
			}
		}
		.group-item-number {
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%);
			height: 0.6rem;
			line-height: 0.6rem;
			b {
				font-weight: 100;
				background: #fff;
			}
		}
		.group-item-add {
			right: 0;
			line-height: 0.34rem;
		}
	}
		}
	}

	



	/*.app-list-item{
		height:100%;
		
		display: flex;
		flex: 1;
		.app-list-item{
			height:1.1rem;
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
	}*/
	
</style>