var wms_layers = [];

var format_1234_0 = new ol.format.GeoJSON();
var features_1234_0 = format_1234_0.readFeatures(json_1234_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1234_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1234_0.addFeatures(features_1234_0);
var lyr_1234_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1234_0, 
                style: style_1234_0,
                popuplayertitle: '1234',
                interactive: true,
    title: '1234<br />\
    <img src="styles/legend/1234_0_0.png" /> 465 - 785<br />\
    <img src="styles/legend/1234_0_1.png" /> 785 - 969<br />\
    <img src="styles/legend/1234_0_2.png" /> 969 - 1131<br />\
    <img src="styles/legend/1234_0_3.png" /> 1131 - 1390<br />\
    <img src="styles/legend/1234_0_4.png" /> 1390 - 1909<br />' });

lyr_1234_0.setVisible(true);
var layersList = [lyr_1234_0];
lyr_1234_0.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', 'COD_GR': 'COD_GR', 'COD_UF': 'COD_UF', 'NOME_GR': 'NOME_GR', 'Município': 'Município', 'DADOS GOIAS 2010 (1) — Dados_IVS': 'DADOS GOIAS 2010 (1) — Dados_IVS', 'DADOS GOIAS 2010 (1) — Dados_RENDA': 'DADOS GOIAS 2010 (1) — Dados_RENDA', });
lyr_1234_0.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', 'COD_GR': 'TextEdit', 'COD_UF': 'TextEdit', 'NOME_GR': 'TextEdit', 'Município': '', 'DADOS GOIAS 2010 (1) — Dados_IVS': 'TextEdit', 'DADOS GOIAS 2010 (1) — Dados_RENDA': 'TextEdit', });
lyr_1234_0.set('fieldLabels', {'CD_MUN': 'hidden field', 'NM_MUN': 'hidden field', 'SIGLA_UF': 'hidden field', 'AREA_KM2': 'hidden field', 'COD_GR': 'hidden field', 'COD_UF': 'hidden field', 'NOME_GR': 'hidden field', 'Município': 'inline label - always visible', 'DADOS GOIAS 2010 (1) — Dados_IVS': 'hidden field', 'DADOS GOIAS 2010 (1) — Dados_RENDA': 'hidden field', });
lyr_1234_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});