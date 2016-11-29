//实例化Map对象，用于加载地图
var map = new ol.Map({
    target: 'map',  //地图容器id
    layers:[  //地图图层
        new ol.layer.Tile({  //瓦片图层数据数据OSM
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({  //视图设置
        center: [12950000,48600000],  //初始中心点
        zoom: 2  //初始显示级别
    })
});

//实例化ZoomSlider控件并加载到地图容器中
var zoomslider = new ol.control.ZoomSlider();
map.addControl(zoomslider);

//实例化zoomToExtent控件并加载到地图容器中
var zoomToExtent = new ol.control.ZoomToExtent({
    extent:[
        13100000, 4290000,
        13200000, 5210000
    ]
});
map.addControl(zoomToExtent);
