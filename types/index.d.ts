
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'


interface Window {
    BMap: any;
    initBaiduMap:any;
    loadBaidu: (th:any) => void
}

interface RequestInit {
    qs:any;
}

