
const getPosition = (cb)=>{
	let posinfo =  checkPositionTime()
	if(posinfo){//如果存储里有有效的地址信息，直接使用
		cb(posinfo.data)
		return ;
	}
	
	
	
	var map, geolocation;
    //加载地图，调用浏览器定位服务
    map = new AMap.Map('container', {
        resizeEnable: true
    });
    map.plugin('AMap.Geolocation', function() {
        geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 20000,          //超过10秒后停止定位，默认：无穷大
            buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            buttonPosition:'RB'
        });
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, 'complete', function onComplete(data) {
	       console.log(data.position.getLat(),data.position.getLng())
	        regeocoder([data.position.getLng(),data.position.getLat()])
	    });//返回定位信息
    });

    function regeocoder(pos) {  //逆地理编码
        var geocoder = new AMap.Geocoder({
            radius: 1000,
            extensions: "all"
        });        
        geocoder.getAddress(pos, function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
                let position_info = {
                	address:result.regeocode.aois["0"].name,
                	latitude:pos[1],
                	longitude:pos[0]
                }
                cb(position_info)
                sessionStorage.setItem("position_info",JSON.stringify({
                	time:Date.now(),
                	life:1,
                	data:position_info
                }))
            }
        });
    }
}


function checkPositionTime(){//检测是否定位
	var position_info = sessionStorage.getItem('position_info')?JSON.parse(sessionStorage.getItem('position_info')):{}
	if(!position_info.time){//r如果没有time属性说明存储里没有定位信息
		return false
	}else{
		var now = Date.now()
		if((now-position_info.time)>position_info.life*24*3600*1000){
			//如果存储信息时间已经过期，删除掉
			sessionStorage.removeItem('position_info')
			return false
		}else{
			return position_info
		}
	}
}

export default getPosition