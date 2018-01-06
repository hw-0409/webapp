<template>
  <div class="app-list">
    <app-header></app-header>
    <div class="container">
    	<AppListNav></AppListNav>
    	
	    <AppListBox></AppListBox>
    </div>
<app-footer></app-footer>
  </div>
</template>

<script>
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
    	
    }
<<<<<<< HEAD
=======
  },
  methods:{
      getData(){
        axios.get('/axf/data/getCategoryProduct?asid=5a431dc2ab51d9165&_r=0.7133663006016342&reflogid=5a4dda31cd79a4889&location_hash=5971adAoynJP1PTHy7VOMO8cNY4GNxqqpeDBbWCCOW9%2B2jQ8TwwCS%2Fry37i0wvktulL7RbXB8VeeMjxWdztJFnAyPuFqURa92ru9f4CdZWRg&zchtid=14449&bigids=2%2C0',{
          params:{}
        }).then((response)=>{
        console.log(response.data.products)
      })
    }
  },
  created(){
    this.getData()
>>>>>>> master
  }
//methods:{
//		getData(){
//	   	axios.get('http://localhost:3000/axf/data/getCategoryProduct?asid=5a431dc2ab51d9165&_r=0.7133663006016342&reflogid=5a4dda31cd79a4889&location_hash=5971adAoynJP1PTHy7VOMO8cNY4GNxqqpeDBbWCCOW9%2B2jQ8TwwCS%2Fry37i0wvktulL7RbXB8VeeMjxWdztJFnAyPuFqURa92ru9f4CdZWRg&zchtid=14449&bigids=2%2C0',{
//	   		params:{}
//	   	}).then((response)=>{
//	   		var res = eval('('+ response.data +')')
//		  	console.log(res.data.products)
//		  })
//		}
//	},
//	created(){
//		this.getData()
//}
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
