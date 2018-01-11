<template>
  <div class="position-addres">
        <ul>
            <li :key="item.id" v-for="item in BuyAddress">
                <div class="person-info">
                    <p class="person-name">{{item.person}}    {{item.phone}}</p>
                    <p  class="person-addres">{{item.meryaddress}}&nbsp;&nbsp;&nbsp;{{item.detailaddress}}</p>
                </div>
                <div class="exit">
                    <span class="yo-ico">&#xf04a;</span>
                </div>
            </li>
        </ul>
    
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name:'position-addres',
    data(){
        return{
            BuyAddress:{}
        }
    },
    computed:{
        ...mapState(["address","info",'infoAddress'])
    },
    methods:{
        getMath(){
             this.BuyAddress = JSON.parse(localStorage.Item) 
        }
    },
    created(){
            this.getMath()
    }
}
</script>