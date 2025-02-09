var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KotaCimahiRBI25K_SUNGAI_LN_25Kshp_1 = new ol.format.GeoJSON();
var features_KotaCimahiRBI25K_SUNGAI_LN_25Kshp_1 = format_KotaCimahiRBI25K_SUNGAI_LN_25Kshp_1.readFeatures(json_KotaCimahiRBI25K_SUNGAI_LN_25Kshp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaCimahiRBI25K_SUNGAI_LN_25Kshp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaCimahiRBI25K_SUNGAI_LN_25Kshp_1.addFeatures(features_KotaCimahiRBI25K_SUNGAI_LN_25Kshp_1);
var lyr_KotaCimahiRBI25K_SUNGAI_LN_25Kshp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaCimahiRBI25K_SUNGAI_LN_25Kshp_1, 
                style: style_KotaCimahiRBI25K_SUNGAI_LN_25Kshp_1,
                popuplayertitle: 'KotaCimahi/RBI25K_SUNGAI_LN_25K.shp',
                interactive: true,
                title: '<img src="styles/legend/KotaCimahiRBI25K_SUNGAI_LN_25Kshp_1.png" /> KotaCimahi/RBI25K_SUNGAI_LN_25K.shp'
            });
var format_KotaCimahiRBI25K_AGRISAWAH_ARshp_2 = new ol.format.GeoJSON();
var features_KotaCimahiRBI25K_AGRISAWAH_ARshp_2 = format_KotaCimahiRBI25K_AGRISAWAH_ARshp_2.readFeatures(json_KotaCimahiRBI25K_AGRISAWAH_ARshp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaCimahiRBI25K_AGRISAWAH_ARshp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaCimahiRBI25K_AGRISAWAH_ARshp_2.addFeatures(features_KotaCimahiRBI25K_AGRISAWAH_ARshp_2);
var lyr_KotaCimahiRBI25K_AGRISAWAH_ARshp_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaCimahiRBI25K_AGRISAWAH_ARshp_2, 
                style: style_KotaCimahiRBI25K_AGRISAWAH_ARshp_2,
                popuplayertitle: 'KotaCimahi/RBI25K_AGRISAWAH_AR.shp',
                interactive: true,
                title: '<img src="styles/legend/KotaCimahiRBI25K_AGRISAWAH_ARshp_2.png" /> KotaCimahi/RBI25K_AGRISAWAH_AR.shp'
            });
var format_KotaCimahiRBI25K_AGRIKEBUN_ARshp_3 = new ol.format.GeoJSON();
var features_KotaCimahiRBI25K_AGRIKEBUN_ARshp_3 = format_KotaCimahiRBI25K_AGRIKEBUN_ARshp_3.readFeatures(json_KotaCimahiRBI25K_AGRIKEBUN_ARshp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaCimahiRBI25K_AGRIKEBUN_ARshp_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaCimahiRBI25K_AGRIKEBUN_ARshp_3.addFeatures(features_KotaCimahiRBI25K_AGRIKEBUN_ARshp_3);
var lyr_KotaCimahiRBI25K_AGRIKEBUN_ARshp_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaCimahiRBI25K_AGRIKEBUN_ARshp_3, 
                style: style_KotaCimahiRBI25K_AGRIKEBUN_ARshp_3,
                popuplayertitle: 'KotaCimahi/RBI25K_AGRIKEBUN_AR.shp',
                interactive: true,
                title: '<img src="styles/legend/KotaCimahiRBI25K_AGRIKEBUN_ARshp_3.png" /> KotaCimahi/RBI25K_AGRIKEBUN_AR.shp'
            });
var format_KotaCimahiRBI25K_CAGARBUDAYA_PTshp_4 = new ol.format.GeoJSON();
var features_KotaCimahiRBI25K_CAGARBUDAYA_PTshp_4 = format_KotaCimahiRBI25K_CAGARBUDAYA_PTshp_4.readFeatures(json_KotaCimahiRBI25K_CAGARBUDAYA_PTshp_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaCimahiRBI25K_CAGARBUDAYA_PTshp_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaCimahiRBI25K_CAGARBUDAYA_PTshp_4.addFeatures(features_KotaCimahiRBI25K_CAGARBUDAYA_PTshp_4);
var lyr_KotaCimahiRBI25K_CAGARBUDAYA_PTshp_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaCimahiRBI25K_CAGARBUDAYA_PTshp_4, 
                style: style_KotaCimahiRBI25K_CAGARBUDAYA_PTshp_4,
                popuplayertitle: 'KotaCimahi/RBI25K_CAGARBUDAYA_PT.shp',
                interactive: true,
                title: '<img src="styles/legend/KotaCimahiRBI25K_CAGARBUDAYA_PTshp_4.png" /> KotaCimahi/RBI25K_CAGARBUDAYA_PT.shp'
            });
var format_KotaCimahiRBI25K_SARANAIBADAH_PTshp_5 = new ol.format.GeoJSON();
var features_KotaCimahiRBI25K_SARANAIBADAH_PTshp_5 = format_KotaCimahiRBI25K_SARANAIBADAH_PTshp_5.readFeatures(json_KotaCimahiRBI25K_SARANAIBADAH_PTshp_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaCimahiRBI25K_SARANAIBADAH_PTshp_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaCimahiRBI25K_SARANAIBADAH_PTshp_5.addFeatures(features_KotaCimahiRBI25K_SARANAIBADAH_PTshp_5);
var lyr_KotaCimahiRBI25K_SARANAIBADAH_PTshp_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaCimahiRBI25K_SARANAIBADAH_PTshp_5, 
                style: style_KotaCimahiRBI25K_SARANAIBADAH_PTshp_5,
                popuplayertitle: 'KotaCimahi/RBI25K_SARANAIBADAH_PT.shp',
                interactive: true,
                title: '<img src="styles/legend/KotaCimahiRBI25K_SARANAIBADAH_PTshp_5.png" /> KotaCimahi/RBI25K_SARANAIBADAH_PT.shp'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_KotaCimahiRBI25K_SUNGAI_LN_25Kshp_1.setVisible(true);lyr_KotaCimahiRBI25K_AGRISAWAH_ARshp_2.setVisible(true);lyr_KotaCimahiRBI25K_AGRIKEBUN_ARshp_3.setVisible(true);lyr_KotaCimahiRBI25K_CAGARBUDAYA_PTshp_4.setVisible(true);lyr_KotaCimahiRBI25K_SARANAIBADAH_PTshp_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_KotaCimahiRBI25K_SUNGAI_LN_25Kshp_1,lyr_KotaCimahiRBI25K_AGRISAWAH_ARshp_2,lyr_KotaCimahiRBI25K_AGRIKEBUN_ARshp_3,lyr_KotaCimahiRBI25K_CAGARBUDAYA_PTshp_4,lyr_KotaCimahiRBI25K_SARANAIBADAH_PTshp_5];
lyr_KotaCimahiRBI25K_SUNGAI_LN_25Kshp_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_KotaCimahiRBI25K_AGRISAWAH_ARshp_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSWH': 'JNSSWH', 'FCODE': 'FCODE', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TNMSWH': 'TNMSWH', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_KotaCimahiRBI25K_AGRIKEBUN_ARshp_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSKBN': 'JNSKBN', 'FCODE': 'FCODE', 'PUDATE': 'PUDATE', 'AQDATE': 'AQDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_KotaCimahiRBI25K_CAGARBUDAYA_PTshp_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KotaCimahiRBI25K_SARANAIBADAH_PTshp_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FGSIBD': 'FGSIBD', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KotaCimahiRBI25K_SUNGAI_LN_25Kshp_1.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_LEN': '', });
lyr_KotaCimahiRBI25K_AGRISAWAH_ARshp_2.set('fieldImages', {'NAMOBJ': '', 'JNSSWH': '', 'FCODE': '', 'AQDATE': '', 'PUDATE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'TNMSWH': '', 'SHAPE_AREA': '', 'SHAPE_LEN': '', });
lyr_KotaCimahiRBI25K_AGRIKEBUN_ARshp_3.set('fieldImages', {'NAMOBJ': '', 'JNSKBN': '', 'FCODE': '', 'PUDATE': '', 'AQDATE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_AREA': '', 'SHAPE_LEN': '', });
lyr_KotaCimahiRBI25K_CAGARBUDAYA_PTshp_4.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_KotaCimahiRBI25K_SARANAIBADAH_PTshp_5.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'FGSIBD': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_KotaCimahiRBI25K_SUNGAI_LN_25Kshp_1.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_LEN': 'no label', });
lyr_KotaCimahiRBI25K_AGRISAWAH_ARshp_2.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSWH': 'no label', 'FCODE': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TNMSWH': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_KotaCimahiRBI25K_AGRIKEBUN_ARshp_3.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSKBN': 'no label', 'FCODE': 'no label', 'PUDATE': 'no label', 'AQDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_KotaCimahiRBI25K_CAGARBUDAYA_PTshp_4.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KotaCimahiRBI25K_SARANAIBADAH_PTshp_5.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'FGSIBD': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KotaCimahiRBI25K_SARANAIBADAH_PTshp_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});