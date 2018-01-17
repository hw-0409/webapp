<template>
        <div class="app-header">
                <div @click="getPositions()" class="header-left">
                    {{address}}
                    </div>
                <div @click="seach" class="header-right">
                <span class="seach yo-ico">&#xf067;</span>
                <i>搜&nbsp;索</i>

                </div>
        </div>

</template>

<script>
import { mapState, mapActions } from 'vuex'
import { Indicator } from 'mint-ui';
export default {
        name:"app-header",
        methods:{
                getPositions(){
                        this.$router.push({name:'position'})
 
                },
                ...mapActions(['getPosition']),
                seach(){
                        this.$router.push({name:'seach'})
                }
        },
        computed:{
                ...mapState(["address"])
        },
        created(){
                this.getPosition()
        }
}
</script>
