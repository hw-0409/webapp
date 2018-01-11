<template>
  <div class="app-list">
    <app-header></app-header>
    <div class="container" v-show="navs.length">
    	<AppListNav :navs='navs' :id="id" ></AppListNav>
    	
	    <AppListBox :infos="lists" :id="id"></AppListBox>
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
    	id:{value:104747}
    }
	},
	methods:{
		getData(){
				let that = this
				let url = '/axf/data/getCategoryProduct?asid=5a375a83d6ec83054&_r=0.624797450645018&reflogid=5a5621787cbaf8090&location_hash=5c4af0%2BgoGfoivAETudi9sjQMP9OU2t2YyXZQxerdxHuQ4KD5pNi2SbDWCKIBSa%2FHu0WCs0fQRbUrGEDpGvP4W&zchtid=15204&bigids=2%2C0'
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
			  })
		}
	},
	created(){
		this.getData()
	},

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

</style>
