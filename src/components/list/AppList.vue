<template>
  <div class="app-list">
    <app-header></app-header>
    <div class="container">
    	<AppListNav :navs='navs' :id="id" ></AppListNav>
    	
	    <AppListBox :infos="lists" :id="id.value"></AppListBox>
    </div>
<app-footer></app-footer>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui';
import AppHeader from "../App-Header/AppHeader"
import AppFooter from "../App-Footer/AppFooter"
import axios from 'axios'
import AppListNav from './AppListNav'
import AppListBox from './AppListBox'
export default {
  name: 'app-list',
  components:{AppListBox,AppListNav,AppHeader,AppFooter},
  
  data () {
    return {
    	navs:[],
    	lists:'',
    	id:{value:'104749'}
    }
	},
	methods:{
		getData(){
				let that = this
				let url = '/axf/data/getCategoryProduct?asid=5a431dc2ab51d9165&_r=0.7133663006016342&reflogid=5a4dda31cd79a4889&location_hash=5971adAoynJP1PTHy7VOMO8cNY4GNxqqpeDBbWCCOW9%2B2jQ8TwwCS%2Fry37i0wvktulL7RbXB8VeeMjxWdztJFnAyPuFqURa92ru9f4CdZWRg&zchtid=14449&bigids=2%2C0'
		   		let params = {}
		   		Indicator.open({
					  text: '加载中...',
					  spinnerType: 'fading-circle'
					});
		   	axios.get(url,{params}).then((response)=>{
		   		Indicator.close();
		   		let res = eval('('+ response.data +')')
		 
		   		that.navs = res.data.categories;
		   		that.lists = res.data.products
		   		console.log(that.navs)
		   		console.log(that.lists)
		  	
			  })
		}
//		getId(id){
//			
//			console.log(this.id.value,id)
//			if(this.id.value != id){
//				this.isShows =! this.isShows
//				console.log(this.isShows)
//				this.id.value = id
//			}
//			
//		
//		}
	},
	
	created(){
		this.getData()
	}

}
</script>
<style lang="scss" scoped>
.app-list{
	.container{
    display: flex;
    background: #fff;
    flex: 1;
    padding-top: 0.55rem;
    padding-bottom: 0.57rem;
  }
}
	.mint-indicator-mask{
		z-index: 999;
	}
</style>
