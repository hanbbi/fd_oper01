// Call the dataTables jQuery plugin
$.noConflict();

jQuery(document).ready(function($) {
	$('#dataTable').DataTable({
		ajax:
		{
			type: 'POST',
			url: '/compList',
			dataType: 'json',
			dataSrc: function(result) {
				var data = [];

				for (var i = 0; i < result.length; i++) {
					var item = result[i];
					var rowData = {};

					rowData.index = i + 1;
					rowData.comp_nm = item.comp_nm || '';
					rowData.ceo_nm = item.ceo_nm || '';
					rowData.comp_id = item.comp_id || '';
					rowData.comp_phone = item.comp_phone || '';
					rowData.address = item.address || '';

					data.push(rowData);
				}

				console.log(data);

				return data;
			}
		},
		columns:
			[
				{
					data: 'index',
					width: '5%'
				},
				{
					data: 'comp_nm'
				},
				{
					data: 'ceo_nm'
				},
				{
					data: 'comp_id',
					width: '10%'
				},
				{
					data: 'comp_phone',
					width: '10%'
				},
				{
					data: 'address'
				},
			],
		createdRow: function(row, data, dataIndex) {
			$(row).off().on({
				click: function() {
					console.log(data.comp_id);
					var url = '/detail.do';
					var query = data.comp_id;
					// window.location.href = query + url;
					window.location.href = url + '?comp_id=' + query;
				}
			});
		},
	});
});
