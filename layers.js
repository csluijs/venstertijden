var wms_layers = [];


        var lyr_topozwartwit_0 = new ol.layer.Tile({
            'title': 'topo zwart wit',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://t1.data.amsterdam.nl/topo_wm_zw/{z}/{x}/{y}.png'
            })
        });
var format_venstertijdgebieden_1 = new ol.format.GeoJSON();
var features_venstertijdgebieden_1 = format_venstertijdgebieden_1.readFeatures(json_venstertijdgebieden_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_venstertijdgebieden_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_venstertijdgebieden_1.addFeatures(features_venstertijdgebieden_1);
var lyr_venstertijdgebieden_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_venstertijdgebieden_1, 
                style: style_venstertijdgebieden_1,
                interactive: true,
    title: 'venstertijdgebieden<br />\
    <img src="styles/legend/venstertijdgebieden_1_0.png" /> eenrichtingsverkeer muv laden en lossen<br />\
    <img src="styles/legend/venstertijdgebieden_1_1.png" /> eenrichtingsverkeer muv laden en lossen tijdens venstertijd<br />\
    <img src="styles/legend/venstertijdgebieden_1_2.png" /> gesloten voor mvt muv laden en lossen<br />\
    <img src="styles/legend/venstertijdgebieden_1_3.png" /> gesloten voor mvt muv laden en lossen tijdens venstertijd<br />\
    <img src="styles/legend/venstertijdgebieden_1_4.png" /> in een richting verbod stil te staan muv laden en lossen tijdens venstertijd<br />\
    <img src="styles/legend/venstertijdgebieden_1_5.png" /> verbod stil te staan<br />\
    <img src="styles/legend/venstertijdgebieden_1_6.png" /> verbod stil te staan muv laden en lossen tijdens venstertijd<br />\
    <img src="styles/legend/venstertijdgebieden_1_7.png" /> <br />'
        });
var format_parkeervakken_E7_2 = new ol.format.GeoJSON();
var features_parkeervakken_E7_2 = format_parkeervakken_E7_2.readFeatures(json_parkeervakken_E7_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parkeervakken_E7_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parkeervakken_E7_2.addFeatures(features_parkeervakken_E7_2);
var lyr_parkeervakken_E7_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parkeervakken_E7_2, 
                style: style_parkeervakken_E7_2,
                interactive: true,
                title: '<img src="styles/legend/parkeervakken_E7_2.png" /> parkeervakken_E7'
            });
var format_varen_venstertijden2_3 = new ol.format.GeoJSON();
var features_varen_venstertijden2_3 = format_varen_venstertijden2_3.readFeatures(json_varen_venstertijden2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_varen_venstertijden2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_varen_venstertijden2_3.addFeatures(features_varen_venstertijden2_3);
var lyr_varen_venstertijden2_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_varen_venstertijden2_3, 
                style: style_varen_venstertijden2_3,
                interactive: true,
                title: '<img src="styles/legend/varen_venstertijden2_3.png" /> varen_venstertijden2'
            });
var format_op_en_afstapplaatsen_water_4 = new ol.format.GeoJSON();
var features_op_en_afstapplaatsen_water_4 = format_op_en_afstapplaatsen_water_4.readFeatures(json_op_en_afstapplaatsen_water_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_op_en_afstapplaatsen_water_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_op_en_afstapplaatsen_water_4.addFeatures(features_op_en_afstapplaatsen_water_4);
var lyr_op_en_afstapplaatsen_water_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_op_en_afstapplaatsen_water_4, 
                style: style_op_en_afstapplaatsen_water_4,
                interactive: false,
                title: '<img src="styles/legend/op_en_afstapplaatsen_water_4.png" /> op_en_afstapplaatsen_water'
            });
var format_plusnet_fiets_drukste_5pc_5 = new ol.format.GeoJSON();
var features_plusnet_fiets_drukste_5pc_5 = format_plusnet_fiets_drukste_5pc_5.readFeatures(json_plusnet_fiets_drukste_5pc_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_plusnet_fiets_drukste_5pc_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_plusnet_fiets_drukste_5pc_5.addFeatures(features_plusnet_fiets_drukste_5pc_5);
var lyr_plusnet_fiets_drukste_5pc_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_plusnet_fiets_drukste_5pc_5, 
                style: style_plusnet_fiets_drukste_5pc_5,
                interactive: true,
    title: 'plusnet_fiets_drukste_5pc<br />\
    <img src="styles/legend/plusnet_fiets_drukste_5pc_5_0.png" /> drukste 5% met geen of smal fietspad<br />\
    <img src="styles/legend/plusnet_fiets_drukste_5pc_5_1.png" /> overig plusnet<br />\
    <img src="styles/legend/plusnet_fiets_drukste_5pc_5_2.png" /> <br />'
        });

lyr_topozwartwit_0.setVisible(true);lyr_venstertijdgebieden_1.setVisible(true);lyr_parkeervakken_E7_2.setVisible(true);lyr_varen_venstertijden2_3.setVisible(true);lyr_op_en_afstapplaatsen_water_4.setVisible(true);lyr_plusnet_fiets_drukste_5pc_5.setVisible(true);
var layersList = [lyr_topozwartwit_0,lyr_venstertijdgebieden_1,lyr_parkeervakken_E7_2,lyr_varen_venstertijden2_3,lyr_op_en_afstapplaatsen_water_4,lyr_plusnet_fiets_drukste_5pc_5];
lyr_venstertijdgebieden_1.set('fieldAliases', {'_uid_': '_uid_', 'laden_lossen': 'laden_lossen', 'venstertijd': 'venstertijd', 'verbod_geldig': 'verbod_geldig', });
lyr_parkeervakken_E7_2.set('fieldAliases', {'id': 'id', 'buurtcode': 'buurtcode', 'straatnaam': 'straatnaam', 'type': 'type', 'soort': 'soort', 'eType': 'eType', 'aantal': 'aantal', 'regimes': 'regimes', 'hyperlink': 'hyperlink', });
lyr_varen_venstertijden2_3.set('fieldAliases', {'fid': 'fid', });
lyr_op_en_afstapplaatsen_water_4.set('fieldAliases', {'Code': 'Code', 'Breedtegra': 'Breedtegra', 'Lengtegraa': 'Lengtegraa', 'Kleur_op_k': 'Kleur_op_k', 'Adres': 'Adres', 'Op_en_afst': 'Op_en_afst', 'Laad_Los': 'Laad_Los', 'E_laadpunt': 'E_laadpunt', });
lyr_plusnet_fiets_drukste_5pc_5.set('fieldAliases', {'linknr': 'linknr', 'voet': 'voet', 'fiets': 'fiets', 'ov': 'ov', 'auto': 'auto', 'corridor': 'corridor', 'bus_tram': 'bus_tram', 'wvk_id': 'wvk_id', 'max_snelheid': 'max_snelheid', 'jte_id_beg': 'jte_id_beg', 'jte_id_end': 'jte_id_end', 'stt_naam': 'stt_naam', 'wpsnaamnen': 'wpsnaamnen', 'gme_naam': 'gme_naam', 'buiten_beheer_asd': 'buiten_beheer_asd', 'ov2005': 'ov2005', 'auto2005': 'auto2005', 'fiets2005': 'fiets2005', 'rijrichtingen': 'rijrichtingen', 'intensiteit_bp2015': 'intensiteit_bp2015', 'snelheid_bp2015': 'snelheid_bp2015', 'snelheid_r_bp2015': 'snelheid_r_bp2015', 'netwerk_snor': 'netwerk_snor', 'binnen_buffer_fietspad': 'binnen_buffer_fietspad', 'intensiteit_per_richting': 'intensiteit_per_richting', 'linknummer': 'linknummer', 'binnenringa10': 'binnenringa10', 'n_nsi_punten': 'n_nsi_punten', 'lengte': 'lengte', 'n_pad_l': 'n_pad_l', 'n_strook_l': 'n_strook_l', 'n_overig_l': 'n_overig_l', 'n_pad_r': 'n_pad_r', 'n_strook_r': 'n_strook_r', 'n_overig_r': 'n_overig_r', 'type_voorz_dominant': 'type_voorz_dominant', 'avg_breedte_l': 'avg_breedte_l', 'avg_breedte_r': 'avg_breedte_r', 'avg_breedte_totaal': 'avg_breedte_totaal', 'breedte_uit_bgt': 'breedte_uit_bgt', 'breedte_gemeten': 'breedte_gemeten', 'n_verh_open_l': 'n_verh_open_l', 'n_verh_gesl_l': 'n_verh_gesl_l', 'n_verh_open_r': 'n_verh_open_r', 'n_verh_gesl_r': 'n_verh_gesl_r', 'type_verh_dominant': 'type_verh_dominant', 'avg_dv_score': 'avg_dv_score', 'nsi_ja_nee': 'nsi_ja_nee', 'mapinfopenpattern': 'mapinfopenpattern', 't_breedte': 't_breedte', 't_intensiteit': 't_intensiteit', 't_snelheid': 't_snelheid', 't_br_int': 't_br_int', 't_br_int_sn': 't_br_int_sn', 'fietspad': 'fietspad', 'asfalt': 'asfalt', 'breed_fietspad_asfalt': 'breed_fietspad_asfalt', 'binnen_a10_breedte': 'binnen_a10_breedte', 'binnen_a10_verharding': 'binnen_a10_verharding', 'binnen_a10_type': 'binnen_a10_type', 'drukste_5pc': 'drukste_5pc', 'id': 'id', });
lyr_venstertijdgebieden_1.set('fieldImages', {'_uid_': 'TextEdit', 'laden_lossen': 'TextEdit', 'venstertijd': 'TextEdit', 'verbod_geldig': 'TextEdit', });
lyr_parkeervakken_E7_2.set('fieldImages', {'id': 'TextEdit', 'buurtcode': 'TextEdit', 'straatnaam': 'TextEdit', 'type': 'TextEdit', 'soort': 'TextEdit', 'eType': 'TextEdit', 'aantal': 'TextEdit', 'regimes': 'TextEdit', 'hyperlink': 'Range', });
lyr_varen_venstertijden2_3.set('fieldImages', {'fid': 'Range', });
lyr_op_en_afstapplaatsen_water_4.set('fieldImages', {'Code': '', 'Breedtegra': '', 'Lengtegraa': '', 'Kleur_op_k': '', 'Adres': '', 'Op_en_afst': '', 'Laad_Los': '', 'E_laadpunt': '', });
lyr_plusnet_fiets_drukste_5pc_5.set('fieldImages', {'linknr': 'Range', 'voet': 'Range', 'fiets': 'Range', 'ov': 'Range', 'auto': 'Range', 'corridor': 'Range', 'bus_tram': 'Range', 'wvk_id': 'TextEdit', 'max_snelheid': 'Range', 'jte_id_beg': 'TextEdit', 'jte_id_end': 'TextEdit', 'stt_naam': 'TextEdit', 'wpsnaamnen': 'TextEdit', 'gme_naam': 'TextEdit', 'buiten_beheer_asd': 'Range', 'ov2005': 'Range', 'auto2005': 'Range', 'fiets2005': 'Range', 'rijrichtingen': 'Range', 'intensiteit_bp2015': 'Range', 'snelheid_bp2015': 'TextEdit', 'snelheid_r_bp2015': 'TextEdit', 'netwerk_snor': 'Range', 'binnen_buffer_fietspad': 'Range', 'intensiteit_per_richting': 'TextEdit', 'linknummer': 'Range', 'binnenringa10': 'TextEdit', 'n_nsi_punten': 'TextEdit', 'lengte': 'TextEdit', 'n_pad_l': 'TextEdit', 'n_strook_l': 'TextEdit', 'n_overig_l': 'TextEdit', 'n_pad_r': 'TextEdit', 'n_strook_r': 'TextEdit', 'n_overig_r': 'TextEdit', 'type_voorz_dominant': 'TextEdit', 'avg_breedte_l': 'TextEdit', 'avg_breedte_r': 'TextEdit', 'avg_breedte_totaal': 'TextEdit', 'breedte_uit_bgt': 'TextEdit', 'breedte_gemeten': 'TextEdit', 'n_verh_open_l': 'TextEdit', 'n_verh_gesl_l': 'TextEdit', 'n_verh_open_r': 'TextEdit', 'n_verh_gesl_r': 'TextEdit', 'type_verh_dominant': 'TextEdit', 'avg_dv_score': 'TextEdit', 'nsi_ja_nee': 'TextEdit', 'mapinfopenpattern': 'TextEdit', 't_breedte': 'TextEdit', 't_intensiteit': 'TextEdit', 't_snelheid': 'TextEdit', 't_br_int': 'TextEdit', 't_br_int_sn': 'TextEdit', 'fietspad': 'TextEdit', 'asfalt': 'TextEdit', 'breed_fietspad_asfalt': 'TextEdit', 'binnen_a10_breedte': 'TextEdit', 'binnen_a10_verharding': 'TextEdit', 'binnen_a10_type': 'TextEdit', 'drukste_5pc': 'TextEdit', 'id': 'Range', });
lyr_venstertijdgebieden_1.set('fieldLabels', {'_uid_': 'no label', 'laden_lossen': 'inline label', 'venstertijd': 'inline label', 'verbod_geldig': 'no label', });
lyr_parkeervakken_E7_2.set('fieldLabels', {'id': 'inline label', 'buurtcode': 'inline label', 'straatnaam': 'inline label', 'type': 'inline label', 'soort': 'inline label', 'eType': 'inline label', 'aantal': 'inline label', 'regimes': 'inline label', 'hyperlink': 'inline label', });
lyr_varen_venstertijden2_3.set('fieldLabels', {'fid': 'no label', });
lyr_op_en_afstapplaatsen_water_4.set('fieldLabels', {'Code': 'no label', 'Breedtegra': 'no label', 'Lengtegraa': 'no label', 'Kleur_op_k': 'no label', 'Adres': 'no label', 'Op_en_afst': 'no label', 'Laad_Los': 'no label', 'E_laadpunt': 'no label', });
lyr_plusnet_fiets_drukste_5pc_5.set('fieldLabels', {'linknr': 'no label', 'voet': 'no label', 'fiets': 'no label', 'ov': 'no label', 'auto': 'no label', 'corridor': 'no label', 'bus_tram': 'no label', 'wvk_id': 'no label', 'max_snelheid': 'no label', 'jte_id_beg': 'no label', 'jte_id_end': 'no label', 'stt_naam': 'inline label', 'wpsnaamnen': 'no label', 'gme_naam': 'no label', 'buiten_beheer_asd': 'no label', 'ov2005': 'no label', 'auto2005': 'no label', 'fiets2005': 'no label', 'rijrichtingen': 'no label', 'intensiteit_bp2015': 'inline label', 'snelheid_bp2015': 'no label', 'snelheid_r_bp2015': 'no label', 'netwerk_snor': 'no label', 'binnen_buffer_fietspad': 'no label', 'intensiteit_per_richting': 'no label', 'linknummer': 'no label', 'binnenringa10': 'no label', 'n_nsi_punten': 'no label', 'lengte': 'no label', 'n_pad_l': 'no label', 'n_strook_l': 'no label', 'n_overig_l': 'no label', 'n_pad_r': 'no label', 'n_strook_r': 'no label', 'n_overig_r': 'no label', 'type_voorz_dominant': 'no label', 'avg_breedte_l': 'no label', 'avg_breedte_r': 'no label', 'avg_breedte_totaal': 'no label', 'breedte_uit_bgt': 'no label', 'breedte_gemeten': 'no label', 'n_verh_open_l': 'no label', 'n_verh_gesl_l': 'no label', 'n_verh_open_r': 'no label', 'n_verh_gesl_r': 'no label', 'type_verh_dominant': 'no label', 'avg_dv_score': 'no label', 'nsi_ja_nee': 'no label', 'mapinfopenpattern': 'no label', 't_breedte': 'no label', 't_intensiteit': 'no label', 't_snelheid': 'no label', 't_br_int': 'no label', 't_br_int_sn': 'no label', 'fietspad': 'no label', 'asfalt': 'no label', 'breed_fietspad_asfalt': 'no label', 'binnen_a10_breedte': 'no label', 'binnen_a10_verharding': 'no label', 'binnen_a10_type': 'no label', 'drukste_5pc': 'inline label', 'id': 'no label', });
lyr_plusnet_fiets_drukste_5pc_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});