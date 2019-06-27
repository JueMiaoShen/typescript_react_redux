
let BMap = window.BMap;
const baiduLocation=function (ak:string,th:Function) {
    let src= 'https://api.map.baidu.com/api?v=2.0&ak='+ak+'&callback=loadBaidu';
    if (BMap) {
          window.initBaiduMap(th);
    } else {
        window.loadBaidu = () => {
             window.initBaiduMap(th);
        };
        loadBaiduScript(src)
    }
}

function loadBaiduScript(src:string) {
    const script = document.createElement('script'); //创建script标签
    script.src = src; //异步加载的关键
    script.id = 'baiduMap';
    document.body.appendChild(script); //添加到页面
}

window.initBaiduMap =function (th:any) {
    const BMap = window.BMap;
    //获取用户地理位置信息
    let AD = BMap.Geolocation;
    const getLocation = new AD();
    getLocation.getCurrentPosition((result: any,) => {
        th(result)
    });
    /*  //根据经纬度获取用户具体位置信息
        const myGeo = new BMap.Geocoder();
        myGeo.getLocation(new BMap.Point(this.longitude, this.latitude), (result: any) => {  if ( result ) {     this.city =  result.address;  }});*/

};
export default baiduLocation
