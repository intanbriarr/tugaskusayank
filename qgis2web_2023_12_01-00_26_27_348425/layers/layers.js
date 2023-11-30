var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_LapakGIScomKAB_LABUHANBATU_UTARAKAB_LABUHANBATU_UTARAADMINISTRASIKECAMATAN_AR_50Kshp_1 = new ol.format.GeoJSON();
var features_LapakGIScomKAB_LABUHANBATU_UTARAKAB_LABUHANBATU_UTARAADMINISTRASIKECAMATAN_AR_50Kshp_1 = format_LapakGIScomKAB_LABUHANBATU_UTARAKAB_LABUHANBATU_UTARAADMINISTRASIKECAMATAN_AR_50Kshp_1.readFeatures(json_LapakGIScomKAB_LABUHANBATU_UTARAKAB_LABUHANBATU_UTARAADMINISTRASIKECAMATAN_AR_50Kshp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapakGIScomKAB_LABUHANBATU_UTARAKAB_LABUHANBATU_UTARAADMINISTRASIKECAMATAN_AR_50Kshp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LapakGIScomKAB_LABUHANBATU_UTARAKAB_LABUHANBATU_UTARAADMINISTRASIKECAMATAN_AR_50Kshp_1.addFeatures(features_LapakGIScomKAB_LABUHANBATU_UTARAKAB_LABUHANBATU_UTARAADMINISTRASIKECAMATAN_AR_50Kshp_1);
var lyr_LapakGIScomKAB_LABUHANBATU_UTARAKAB_LABUHANBATU_UTARAADMINISTRASIKECAMATAN_AR_50Kshp_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LapakGIScomKAB_LABUHANBATU_UTARAKAB_LABUHANBATU_UTARAADMINISTRASIKECAMATAN_AR_50Kshp_1, 
                style: style_LapakGIScomKAB_LABUHANBATU_UTARAKAB_LABUHANBATU_UTARAADMINISTRASIKECAMATAN_AR_50Kshp_1,
                interactive: true,
    title: '[LapakGIS.com] KAB_LABUHANBATU_UTARA — KAB_LABUHANBATU_UTARA/ADMINISTRASIKECAMATAN_AR_50K.shp<br />\
    <img src="styles/legend/LapakGIScomKAB_LABUHANBATU_UTARAKAB_LABUHANBATU_UTARAADMINISTRASIKECAMATAN_AR_50Kshp_1_0.png" /> AEKKUO<br />\
    <img src="styles/legend/LapakGIScomKAB_LABUHANBATU_UTARAKAB_LABUHANBATU_UTARAADMINISTRASIKECAMATAN_AR_50Kshp_1_1.png" /> AEKNATAS<br />\
    <img src="styles/legend/LapakGIScomKAB_LABUHANBATU_UTARAKAB_LABUHANBATU_UTARAADMINISTRASIKECAMATAN_AR_50Kshp_1_2.png" /> KUALUH HILIR<br />\
    <img src="styles/legend/LapakGIScomKAB_LABUHANBATU_UTARAKAB_LABUHANBATU_UTARAADMINISTRASIKECAMATAN_AR_50Kshp_1_3.png" /> KUALUH HULU<br />\
    <img src="styles/legend/LapakGIScomKAB_LABUHANBATU_UTARAKAB_LABUHANBATU_UTARAADMINISTRASIKECAMATAN_AR_50Kshp_1_4.png" /> KUALUH SELATAN<br />\
    <img src="styles/legend/LapakGIScomKAB_LABUHANBATU_UTARAKAB_LABUHANBATU_UTARAADMINISTRASIKECAMATAN_AR_50Kshp_1_5.png" /> KUALUHLEIDONG<br />\
    <img src="styles/legend/LapakGIScomKAB_LABUHANBATU_UTARAKAB_LABUHANBATU_UTARAADMINISTRASIKECAMATAN_AR_50Kshp_1_6.png" /> MARBAU<br />\
    <img src="styles/legend/LapakGIScomKAB_LABUHANBATU_UTARAKAB_LABUHANBATU_UTARAADMINISTRASIKECAMATAN_AR_50Kshp_1_7.png" /> NA SEMBILAN SEPULUH<br />\
    <img src="styles/legend/LapakGIScomKAB_LABUHANBATU_UTARAKAB_LABUHANBATU_UTARAADMINISTRASIKECAMATAN_AR_50Kshp_1_8.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_LapakGIScomKAB_LABUHANBATU_UTARAKAB_LABUHANBATU_UTARAADMINISTRASIKECAMATAN_AR_50Kshp_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_LapakGIScomKAB_LABUHANBATU_UTARAKAB_LABUHANBATU_UTARAADMINISTRASIKECAMATAN_AR_50Kshp_1];
lyr_LapakGIScomKAB_LABUHANBATU_UTARAKAB_LABUHANBATU_UTARAADMINISTRASIKECAMATAN_AR_50Kshp_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_LapakGIScomKAB_LABUHANBATU_UTARAKAB_LABUHANBATU_UTARAADMINISTRASIKECAMATAN_AR_50Kshp_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_LapakGIScomKAB_LABUHANBATU_UTARAKAB_LABUHANBATU_UTARAADMINISTRASIKECAMATAN_AR_50Kshp_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'inline label', 'WIADKC': 'no label', 'WADMKK': 'inline label', 'WIADKK': 'no label', 'WADMPR': 'inline label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_LapakGIScomKAB_LABUHANBATU_UTARAKAB_LABUHANBATU_UTARAADMINISTRASIKECAMATAN_AR_50Kshp_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});