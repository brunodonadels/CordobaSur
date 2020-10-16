var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Departamentos_2 = new ol.format.GeoJSON();
var features_Departamentos_2 = format_Departamentos_2.readFeatures(json_Departamentos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_2.addFeatures(features_Departamentos_2);
var lyr_Departamentos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_2, 
                style: style_Departamentos_2,
                interactive: true,
                title: '<img src="styles/legend/Departamentos_2.png" /> Departamentos'
            });
var format_HectreasdehortalizasINDEC_3 = new ol.format.GeoJSON();
var features_HectreasdehortalizasINDEC_3 = format_HectreasdehortalizasINDEC_3.readFeatures(json_HectreasdehortalizasINDEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdehortalizasINDEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdehortalizasINDEC_3.addFeatures(features_HectreasdehortalizasINDEC_3);
var lyr_HectreasdehortalizasINDEC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdehortalizasINDEC_3, 
                style: style_HectreasdehortalizasINDEC_3,
                interactive: true,
    title: 'Hectáreas de hortalizas (INDEC)<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_3_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_3_1.png" /> 1 - 15<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_3_2.png" /> 260<br />'
        });
var format_HectreasdelegumbresINDEC_4 = new ol.format.GeoJSON();
var features_HectreasdelegumbresINDEC_4 = format_HectreasdelegumbresINDEC_4.readFeatures(json_HectreasdelegumbresINDEC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdelegumbresINDEC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdelegumbresINDEC_4.addFeatures(features_HectreasdelegumbresINDEC_4);
var lyr_HectreasdelegumbresINDEC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdelegumbresINDEC_4, 
                style: style_HectreasdelegumbresINDEC_4,
                interactive: true,
    title: 'Hectáreas de legumbres (INDEC)<br />\
    <img src="styles/legend/HectreasdelegumbresINDEC_4_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdelegumbresINDEC_4_1.png" /> 1 - 115<br />\
    <img src="styles/legend/HectreasdelegumbresINDEC_4_2.png" /> Más de 116<br />'
        });
var format_HectreasdemanMAGyP_5 = new ol.format.GeoJSON();
var features_HectreasdemanMAGyP_5 = format_HectreasdemanMAGyP_5.readFeatures(json_HectreasdemanMAGyP_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdemanMAGyP_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdemanMAGyP_5.addFeatures(features_HectreasdemanMAGyP_5);
var lyr_HectreasdemanMAGyP_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdemanMAGyP_5, 
                style: style_HectreasdemanMAGyP_5,
                interactive: true,
    title: 'Hectáreas de maní (MAGyP)<br />\
    <img src="styles/legend/HectreasdemanMAGyP_5_0.png" /> Menos de 11.000<br />\
    <img src="styles/legend/HectreasdemanMAGyP_5_1.png" /> 11.001 - 35.500<br />\
    <img src="styles/legend/HectreasdemanMAGyP_5_2.png" /> Más de 35.501<br />'
        });
var format_HectreasdemazMAGyP_6 = new ol.format.GeoJSON();
var features_HectreasdemazMAGyP_6 = format_HectreasdemazMAGyP_6.readFeatures(json_HectreasdemazMAGyP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdemazMAGyP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdemazMAGyP_6.addFeatures(features_HectreasdemazMAGyP_6);
var lyr_HectreasdemazMAGyP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdemazMAGyP_6, 
                style: style_HectreasdemazMAGyP_6,
                interactive: true,
    title: 'Hectáreas de maíz (MAGyP)<br />\
    <img src="styles/legend/HectreasdemazMAGyP_6_0.png" /> Menos de 130.000<br />\
    <img src="styles/legend/HectreasdemazMAGyP_6_1.png" /> 130.001 - 300.000<br />\
    <img src="styles/legend/HectreasdemazMAGyP_6_2.png" /> 300.001 o más<br />'
        });
var format_HectreasdetrigoMAGyP_7 = new ol.format.GeoJSON();
var features_HectreasdetrigoMAGyP_7 = format_HectreasdetrigoMAGyP_7.readFeatures(json_HectreasdetrigoMAGyP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdetrigoMAGyP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdetrigoMAGyP_7.addFeatures(features_HectreasdetrigoMAGyP_7);
var lyr_HectreasdetrigoMAGyP_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdetrigoMAGyP_7, 
                style: style_HectreasdetrigoMAGyP_7,
                interactive: true,
    title: 'Hectáreas de trigo (MAGyP)<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_7_0.png" /> 50.000 - 80.000<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_7_1.png" /> 80.001 - 200.000<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_7_2.png" /> 200.001 o más<br />'
        });
var format_HectreasdegirasolMAGyP_8 = new ol.format.GeoJSON();
var features_HectreasdegirasolMAGyP_8 = format_HectreasdegirasolMAGyP_8.readFeatures(json_HectreasdegirasolMAGyP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdegirasolMAGyP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdegirasolMAGyP_8.addFeatures(features_HectreasdegirasolMAGyP_8);
var lyr_HectreasdegirasolMAGyP_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdegirasolMAGyP_8, 
                style: style_HectreasdegirasolMAGyP_8,
                interactive: true,
    title: 'Hectáreas de girasol (MAGyP)<br />\
    <img src="styles/legend/HectreasdegirasolMAGyP_8_0.png" /> 185 - 500<br />\
    <img src="styles/legend/HectreasdegirasolMAGyP_8_1.png" /> 501 - 3.500<br />\
    <img src="styles/legend/HectreasdegirasolMAGyP_8_2.png" /> 3.501 - 7.500<br />\
    <img src="styles/legend/HectreasdegirasolMAGyP_8_3.png" /> 7.501 - 12.000<br />'
        });
var format_HectreasdesojaMAGyP_9 = new ol.format.GeoJSON();
var features_HectreasdesojaMAGyP_9 = format_HectreasdesojaMAGyP_9.readFeatures(json_HectreasdesojaMAGyP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdesojaMAGyP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdesojaMAGyP_9.addFeatures(features_HectreasdesojaMAGyP_9);
var lyr_HectreasdesojaMAGyP_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdesojaMAGyP_9, 
                style: style_HectreasdesojaMAGyP_9,
                interactive: true,
    title: 'Hectáreas de soja (MAGyP)<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_9_0.png" /> 100.000 - 315.000<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_9_1.png" /> 315.001 - 450.000<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_9_2.png" /> 450.001 - 675.000<br />'
        });
var format_CabezasdeporcinosMAGyP_10 = new ol.format.GeoJSON();
var features_CabezasdeporcinosMAGyP_10 = format_CabezasdeporcinosMAGyP_10.readFeatures(json_CabezasdeporcinosMAGyP_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeporcinosMAGyP_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeporcinosMAGyP_10.addFeatures(features_CabezasdeporcinosMAGyP_10);
var lyr_CabezasdeporcinosMAGyP_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeporcinosMAGyP_10, 
                style: style_CabezasdeporcinosMAGyP_10,
                interactive: true,
    title: 'Cabezas de porcinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_10_0.png" /> 22.500 - 27.500<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_10_1.png" /> 27.501 - 62.500<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_10_2.png" /> 62.501 - 165.000<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_10_3.png" /> 165.001 - 210.000<br />'
        });
var format_CabezasdeovinosMAGyP_11 = new ol.format.GeoJSON();
var features_CabezasdeovinosMAGyP_11 = format_CabezasdeovinosMAGyP_11.readFeatures(json_CabezasdeovinosMAGyP_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeovinosMAGyP_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeovinosMAGyP_11.addFeatures(features_CabezasdeovinosMAGyP_11);
var lyr_CabezasdeovinosMAGyP_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeovinosMAGyP_11, 
                style: style_CabezasdeovinosMAGyP_11,
                interactive: true,
    title: 'Cabezas de ovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_11_0.png" /> 12.500 - 16.000<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_11_1.png" /> 16.001 - 28.000<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_11_2.png" /> 28.001 - 50.000<br />'
        });
var format_CabezasdecaprinosMAGyP_12 = new ol.format.GeoJSON();
var features_CabezasdecaprinosMAGyP_12 = format_CabezasdecaprinosMAGyP_12.readFeatures(json_CabezasdecaprinosMAGyP_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdecaprinosMAGyP_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdecaprinosMAGyP_12.addFeatures(features_CabezasdecaprinosMAGyP_12);
var lyr_CabezasdecaprinosMAGyP_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdecaprinosMAGyP_12, 
                style: style_CabezasdecaprinosMAGyP_12,
                interactive: true,
    title: 'Cabezas de caprinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_12_0.png" /> 1.250 - 2.000<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_12_1.png" /> 2.001 - 4.500<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_12_2.png" /> 4.501 - 6.000<br />'
        });
var format_CabezasdebovinosMAGyP_13 = new ol.format.GeoJSON();
var features_CabezasdebovinosMAGyP_13 = format_CabezasdebovinosMAGyP_13.readFeatures(json_CabezasdebovinosMAGyP_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdebovinosMAGyP_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdebovinosMAGyP_13.addFeatures(features_CabezasdebovinosMAGyP_13);
var lyr_CabezasdebovinosMAGyP_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdebovinosMAGyP_13, 
                style: style_CabezasdebovinosMAGyP_13,
                interactive: true,
    title: 'Cabezas de bovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_13_0.png" /> 200.000 - 300.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_13_1.png" /> 300.001 - 575.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_13_2.png" /> 575.001 - 680.000<br />'
        });
var format_ViviendasruralesINDEC_14 = new ol.format.GeoJSON();
var features_ViviendasruralesINDEC_14 = format_ViviendasruralesINDEC_14.readFeatures(json_ViviendasruralesINDEC_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViviendasruralesINDEC_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViviendasruralesINDEC_14.addFeatures(features_ViviendasruralesINDEC_14);
var lyr_ViviendasruralesINDEC_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViviendasruralesINDEC_14, 
                style: style_ViviendasruralesINDEC_14,
                interactive: true,
    title: 'Viviendas rurales (INDEC)<br />\
    <img src="styles/legend/ViviendasruralesINDEC_14_0.png" /> 2.500 - 4.500<br />\
    <img src="styles/legend/ViviendasruralesINDEC_14_1.png" /> 4.501 - 6.500<br />\
    <img src="styles/legend/ViviendasruralesINDEC_14_2.png" /> 6.501 - 9.500<br />\
    <img src="styles/legend/ViviendasruralesINDEC_14_3.png" /> 9.501 o más<br />'
        });
var format_PEAINDEC_15 = new ol.format.GeoJSON();
var features_PEAINDEC_15 = format_PEAINDEC_15.readFeatures(json_PEAINDEC_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEAINDEC_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEAINDEC_15.addFeatures(features_PEAINDEC_15);
var lyr_PEAINDEC_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEAINDEC_15, 
                style: style_PEAINDEC_15,
                interactive: true,
    title: 'PEA (INDEC)<br />\
    <img src="styles/legend/PEAINDEC_15_0.png" /> 12.001 - 35.000<br />\
    <img src="styles/legend/PEAINDEC_15_1.png" /> 35.001 - 70.000<br />\
    <img src="styles/legend/PEAINDEC_15_2.png" /> 70.001 - 150.000<br />\
    <img src="styles/legend/PEAINDEC_15_3.png" /> 150.001 o más<br />'
        });
var format_Localidades_16 = new ol.format.GeoJSON();
var features_Localidades_16 = format_Localidades_16.readFeatures(json_Localidades_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidades_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidades_16.addFeatures(features_Localidades_16);
var lyr_Localidades_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Localidades_16, 
                style: style_Localidades_16,
                interactive: true,
                title: '<img src="styles/legend/Localidades_16.png" /> Localidades'
            });
var format_BERCrdobaSurcopiar_17 = new ol.format.GeoJSON();
var features_BERCrdobaSurcopiar_17 = format_BERCrdobaSurcopiar_17.readFeatures(json_BERCrdobaSurcopiar_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BERCrdobaSurcopiar_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BERCrdobaSurcopiar_17.addFeatures(features_BERCrdobaSurcopiar_17);
var lyr_BERCrdobaSurcopiar_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BERCrdobaSurcopiar_17, 
                style: style_BERCrdobaSurcopiar_17,
                interactive: true,
                title: '<img src="styles/legend/BERCrdobaSurcopiar_17.png" /> BER Córdoba Sur copiar'
            });
var format_BERCrdobaSur_18 = new ol.format.GeoJSON();
var features_BERCrdobaSur_18 = format_BERCrdobaSur_18.readFeatures(json_BERCrdobaSur_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BERCrdobaSur_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BERCrdobaSur_18.addFeatures(features_BERCrdobaSur_18);
var lyr_BERCrdobaSur_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BERCrdobaSur_18, 
                style: style_BERCrdobaSur_18,
                interactive: true,
                title: '<img src="styles/legend/BERCrdobaSur_18.png" /> BER Córdoba Sur'
            });
var format_AgenciaVillaMara_19 = new ol.format.GeoJSON();
var features_AgenciaVillaMara_19 = format_AgenciaVillaMara_19.readFeatures(json_AgenciaVillaMara_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AgenciaVillaMara_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AgenciaVillaMara_19.addFeatures(features_AgenciaVillaMara_19);
var lyr_AgenciaVillaMara_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AgenciaVillaMara_19, 
                style: style_AgenciaVillaMara_19,
                interactive: true,
                title: '<img src="styles/legend/AgenciaVillaMara_19.png" /> Agencia Villa María'
            });
var format_DelegacinRoCuarto_20 = new ol.format.GeoJSON();
var features_DelegacinRoCuarto_20 = format_DelegacinRoCuarto_20.readFeatures(json_DelegacinRoCuarto_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DelegacinRoCuarto_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelegacinRoCuarto_20.addFeatures(features_DelegacinRoCuarto_20);
var lyr_DelegacinRoCuarto_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DelegacinRoCuarto_20, 
                style: style_DelegacinRoCuarto_20,
                interactive: true,
                title: '<img src="styles/legend/DelegacinRoCuarto_20.png" /> Delegación Río Cuarto'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Departamentos_2.setVisible(true);lyr_HectreasdehortalizasINDEC_3.setVisible(true);lyr_HectreasdelegumbresINDEC_4.setVisible(true);lyr_HectreasdemanMAGyP_5.setVisible(true);lyr_HectreasdemazMAGyP_6.setVisible(true);lyr_HectreasdetrigoMAGyP_7.setVisible(true);lyr_HectreasdegirasolMAGyP_8.setVisible(true);lyr_HectreasdesojaMAGyP_9.setVisible(true);lyr_CabezasdeporcinosMAGyP_10.setVisible(true);lyr_CabezasdeovinosMAGyP_11.setVisible(true);lyr_CabezasdecaprinosMAGyP_12.setVisible(true);lyr_CabezasdebovinosMAGyP_13.setVisible(true);lyr_ViviendasruralesINDEC_14.setVisible(true);lyr_PEAINDEC_15.setVisible(true);lyr_Localidades_16.setVisible(true);lyr_BERCrdobaSurcopiar_17.setVisible(true);lyr_BERCrdobaSur_18.setVisible(true);lyr_AgenciaVillaMara_19.setVisible(true);lyr_DelegacinRoCuarto_20.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleHybrid_1,lyr_Departamentos_2,lyr_HectreasdehortalizasINDEC_3,lyr_HectreasdelegumbresINDEC_4,lyr_HectreasdemanMAGyP_5,lyr_HectreasdemazMAGyP_6,lyr_HectreasdetrigoMAGyP_7,lyr_HectreasdegirasolMAGyP_8,lyr_HectreasdesojaMAGyP_9,lyr_CabezasdeporcinosMAGyP_10,lyr_CabezasdeovinosMAGyP_11,lyr_CabezasdecaprinosMAGyP_12,lyr_CabezasdebovinosMAGyP_13,lyr_ViviendasruralesINDEC_14,lyr_PEAINDEC_15,lyr_Localidades_16,lyr_BERCrdobaSurcopiar_17,lyr_BERCrdobaSur_18,lyr_AgenciaVillaMara_19,lyr_DelegacinRoCuarto_20];
lyr_Departamentos_2.set('fieldAliases', {'Depto': 'Depto', });
lyr_HectreasdehortalizasINDEC_3.set('fieldAliases', {'Hortalizas': 'Hortalizas', });
lyr_HectreasdelegumbresINDEC_4.set('fieldAliases', {'Legumbres': 'Legumbres', });
lyr_HectreasdemanMAGyP_5.set('fieldAliases', {'Mani': 'Mani', });
lyr_HectreasdemazMAGyP_6.set('fieldAliases', {'Maiz': 'Maiz', });
lyr_HectreasdetrigoMAGyP_7.set('fieldAliases', {'Trigo': 'Trigo', });
lyr_HectreasdegirasolMAGyP_8.set('fieldAliases', {'Girasol': 'Girasol', });
lyr_HectreasdesojaMAGyP_9.set('fieldAliases', {'Soja': 'Soja', });
lyr_CabezasdeporcinosMAGyP_10.set('fieldAliases', {'porcinos': 'porcinos', });
lyr_CabezasdeovinosMAGyP_11.set('fieldAliases', {'ovinos': 'ovinos', });
lyr_CabezasdecaprinosMAGyP_12.set('fieldAliases', {'caprinos': 'caprinos', });
lyr_CabezasdebovinosMAGyP_13.set('fieldAliases', {'bovinos': 'bovinos', });
lyr_ViviendasruralesINDEC_14.set('fieldAliases', {'Viv.Rur': 'Viv.Rur', });
lyr_PEAINDEC_15.set('fieldAliases', {'PEA': 'PEA', });
lyr_Localidades_16.set('fieldAliases', {'localidad': 'localidad', 'poblacion': 'poblacion', });
lyr_BERCrdobaSurcopiar_17.set('fieldAliases', {'Num.': 'Num.', 'Delegacion': 'Delegacion', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Admin?': 'Admin?', });
lyr_BERCrdobaSur_18.set('fieldAliases', {'Num.': 'Num.', 'Delegacion': 'Delegacion', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Admin?': 'Admin?', });
lyr_AgenciaVillaMara_19.set('fieldAliases', {'Num.': 'Num.', 'Delegacion': 'Delegacion', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', });
lyr_DelegacinRoCuarto_20.set('fieldAliases', {'localidad': 'localidad', });
lyr_Departamentos_2.set('fieldImages', {'Depto': '', });
lyr_HectreasdehortalizasINDEC_3.set('fieldImages', {'Hortalizas': 'TextEdit', });
lyr_HectreasdelegumbresINDEC_4.set('fieldImages', {'Legumbres': 'TextEdit', });
lyr_HectreasdemanMAGyP_5.set('fieldImages', {'Mani': 'TextEdit', });
lyr_HectreasdemazMAGyP_6.set('fieldImages', {'Maiz': 'TextEdit', });
lyr_HectreasdetrigoMAGyP_7.set('fieldImages', {'Trigo': 'TextEdit', });
lyr_HectreasdegirasolMAGyP_8.set('fieldImages', {'Girasol': 'TextEdit', });
lyr_HectreasdesojaMAGyP_9.set('fieldImages', {'Soja': 'TextEdit', });
lyr_CabezasdeporcinosMAGyP_10.set('fieldImages', {'porcinos': 'TextEdit', });
lyr_CabezasdeovinosMAGyP_11.set('fieldImages', {'ovinos': 'TextEdit', });
lyr_CabezasdecaprinosMAGyP_12.set('fieldImages', {'caprinos': 'TextEdit', });
lyr_CabezasdebovinosMAGyP_13.set('fieldImages', {'bovinos': 'TextEdit', });
lyr_ViviendasruralesINDEC_14.set('fieldImages', {'Viv.Rur': 'TextEdit', });
lyr_PEAINDEC_15.set('fieldImages', {'PEA': 'TextEdit', });
lyr_Localidades_16.set('fieldImages', {'localidad': 'TextEdit', 'poblacion': 'TextEdit', });
lyr_BERCrdobaSurcopiar_17.set('fieldImages', {'Num.': 'TextEdit', 'Delegacion': 'TextEdit', 'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Admin?': 'TextEdit', });
lyr_BERCrdobaSur_18.set('fieldImages', {'Num.': 'TextEdit', 'Delegacion': 'TextEdit', 'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Admin?': 'TextEdit', });
lyr_AgenciaVillaMara_19.set('fieldImages', {'Num.': 'TextEdit', 'Delegacion': 'TextEdit', 'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', });
lyr_DelegacinRoCuarto_20.set('fieldImages', {'localidad': 'TextEdit', });
lyr_Departamentos_2.set('fieldLabels', {'Depto': 'inline label', });
lyr_HectreasdehortalizasINDEC_3.set('fieldLabels', {'Hortalizas': 'inline label', });
lyr_HectreasdelegumbresINDEC_4.set('fieldLabels', {'Legumbres': 'inline label', });
lyr_HectreasdemanMAGyP_5.set('fieldLabels', {'Mani': 'inline label', });
lyr_HectreasdemazMAGyP_6.set('fieldLabels', {'Maiz': 'inline label', });
lyr_HectreasdetrigoMAGyP_7.set('fieldLabels', {'Trigo': 'inline label', });
lyr_HectreasdegirasolMAGyP_8.set('fieldLabels', {'Girasol': 'inline label', });
lyr_HectreasdesojaMAGyP_9.set('fieldLabels', {'Soja': 'inline label', });
lyr_CabezasdeporcinosMAGyP_10.set('fieldLabels', {'porcinos': 'inline label', });
lyr_CabezasdeovinosMAGyP_11.set('fieldLabels', {'ovinos': 'inline label', });
lyr_CabezasdecaprinosMAGyP_12.set('fieldLabels', {'caprinos': 'inline label', });
lyr_CabezasdebovinosMAGyP_13.set('fieldLabels', {'bovinos': 'inline label', });
lyr_ViviendasruralesINDEC_14.set('fieldLabels', {'Viv.Rur': 'inline label', });
lyr_PEAINDEC_15.set('fieldLabels', {'PEA': 'inline label', });
lyr_Localidades_16.set('fieldLabels', {'localidad': 'inline label', 'poblacion': 'inline label', });
lyr_BERCrdobaSurcopiar_17.set('fieldLabels', {'Num.': 'inline label', 'Delegacion': 'inline label', 'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Admin?': 'inline label', });
lyr_BERCrdobaSur_18.set('fieldLabels', {'Num.': 'inline label', 'Delegacion': 'inline label', 'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Admin?': 'inline label', });
lyr_AgenciaVillaMara_19.set('fieldLabels', {'Num.': 'inline label', 'Delegacion': 'inline label', 'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', });
lyr_DelegacinRoCuarto_20.set('fieldLabels', {'localidad': 'inline label', });
lyr_DelegacinRoCuarto_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});