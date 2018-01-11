<template>
    <div class="app-gather">
        <header>
            <router-link to="/shop" class="yo-ico">&#xf07d;</router-link>
            <div class="gather">凑单专区</div>
      </header> 
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:"app-gather",
    data () {
        return {
            gatherLists:[],
            gatherItems:[],
        }
    },
    methods: {
        gatGathsr(){
            axios.post("/axf/data/getAddOnGoods"
            
            ).then((response)=>{
		   		console.log(response)
		  	
			  })
        }
    },
    mounted () {
        this.gatGathsr()
    }
}
</script>
<style lang="scss" scoped>
.app-gather{
    header {
        position: fixed;
        width: 100%;
        height: 0.55rem;
        background: #f9fafd;
        border: 0 0 1px 0 solid #e0e0e0;
        display: flex;
        a {
            height: 0.55rem;
            width: .72rem;
            font-size: .28rem;
            color: #999;
            padding-left: .1rem;
            line-height: .55rem;
        }
        .gather {
            width: 2.3rem;
            height: 100%;
            text-align: center;
            line-height: 0.5rem;
            color: #333;
            font-size: 16px;
            font-weight: 900;
        }
    }
}
</style>
