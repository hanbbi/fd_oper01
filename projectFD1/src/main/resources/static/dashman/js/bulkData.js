var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var comp_id = urlParams.get('comp_id');

$(document).ready(function() {
	
	$.ajax({
        type: 'POST',
        url: '/bulkDailyTableKg',
        data: {
            comp_id: comp_id
        },
        dataType: 'json',
        success: function(response) {
            var data = response;
            var tableBody = document.getElementById('bulkDailyTableKg').getElementsByTagName('tbody')[0];
            
            if (tableBody) {
		        tableBody.innerHTML = '';
		    }
            
            // 데이터 처리
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                var row = document.createElement('tr');
                var cntCell = document.createElement('td');
                var totalCell = document.createElement('td');
                
                cntCell.textContent = parseInt(item.cnt).toLocaleString() || '';
                totalCell.textContent = parseInt(item.total).toLocaleString() || '';
                
                row.appendChild(cntCell);
                row.appendChild(totalCell);
                
                tableBody.appendChild(row);
            }
            
            console.log(tableBody);
            
            return tableBody;
        },
        error: function(error) {
            console.log("Error fetching data: ", error);
        }
    });
    
	$.ajax({
        type: 'POST',
        url: '/bulkMonthlyTableKg',
        data: {
            comp_id: comp_id
        },
        dataType: 'json',
        success: function(response) {
            var data = response;
            var tableBody = document.getElementById('bulkMonthlyTableKg').getElementsByTagName('tbody')[0];
            
            if (tableBody) {
		        tableBody.innerHTML = '';
		    }
            
            // 데이터 처리
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                var row = document.createElement('tr');
                var cntCell = document.createElement('td');
                var totalCell = document.createElement('td');
                
                cntCell.textContent = parseInt(item.cnt).toLocaleString() || '';
                totalCell.textContent = parseInt(item.total).toLocaleString() || '';
                
                row.appendChild(cntCell);
                row.appendChild(totalCell);
                
                tableBody.appendChild(row);
            }
            
            console.log(tableBody);
            
            return tableBody;
        },
        error: function(error) {
            console.log("Error fetching data: ", error);
        }
    });
    
    function displayKgData() {
		$.ajax({
	        type: 'POST',
	        url: '/bulkDailyTableKg',
	        data: {
	            comp_id: comp_id
	        },
	        dataType: 'json',
	        success: function(response) {
	            var data = response;
	            var tableBody = document.getElementById('bulkDailyTableKg').getElementsByTagName('tbody')[0];
	            
	            if (tableBody) {
			        tableBody.innerHTML = '';
			    }
	            
	            // 데이터 처리
	            for (var i = 0; i < data.length; i++) {
	                var item = data[i];
	                var row = document.createElement('tr');
	                var cntCell = document.createElement('td');
	                var totalCell = document.createElement('td');
                
	                cntCell.textContent = parseInt(item.cnt).toLocaleString() || '';
	                totalCell.textContent = parseInt(item.total).toLocaleString() || '';
	                
	                row.appendChild(cntCell);
	                row.appendChild(totalCell);
	                
	                tableBody.appendChild(row);
	            }
	            
	            console.log(tableBody);
	            
	            return tableBody;
	        },
	        error: function(error) {
	            console.log("Error fetching data: ", error);
	        }
	    });
	    
		$.ajax({
	        type: 'POST',
	        url: '/bulkMonthlyTableKg',
	        data: {
	            comp_id: comp_id
	        },
	        dataType: 'json',
	        success: function(response) {
	            var data = response;
	            var tableBody = document.getElementById('bulkMonthlyTableKg').getElementsByTagName('tbody')[0];
	            
	            if (tableBody) {
			        tableBody.innerHTML = '';
			    }
	            
	            // 데이터 처리
	            for (var i = 0; i < data.length; i++) {
	                var item = data[i];
	                var row = document.createElement('tr');
	                var cntCell = document.createElement('td');
	                var totalCell = document.createElement('td');
                
	                cntCell.textContent = parseInt(item.cnt).toLocaleString() || '';
	                totalCell.textContent = parseInt(item.total).toLocaleString() || '';
	                
	                row.appendChild(cntCell);
	                row.appendChild(totalCell);
	                
	                tableBody.appendChild(row);
	            }
	            
	            console.log(tableBody);
	            
	            return tableBody;
	        },
	        error: function(error) {
	            console.log("Error fetching data: ", error);
	        }
	    });
	}
    
    function displayLiterData() {
		$.ajax({
	        type: 'POST',
	        url: '/bulkDailyTableLiter',
	        data: {
	            comp_id: comp_id
	        },
	        dataType: 'json',
	        success: function(response) {
	            var data = response;
	            var tableBody = document.getElementById('bulkDailyTableKg').getElementsByTagName('tbody')[0];
	            
	            if (tableBody) {
			        tableBody.innerHTML = '';
			    }
	            
	            // 데이터 처리
	            for (var i = 0; i < data.length; i++) {
	                var item = data[i];
	                var row = document.createElement('tr');
	                var cntCell = document.createElement('td');
	                var totalCell = document.createElement('td');
                
	                cntCell.textContent = parseInt(item.cnt).toLocaleString() || '';
	                totalCell.textContent = parseInt(item.total).toLocaleString() || '';
	                
	                row.appendChild(cntCell);
	                row.appendChild(totalCell);
	                
	                tableBody.appendChild(row);
	            }
	            
	            console.log(tableBody);
	            
	            return tableBody;
	        },
	        error: function(error) {
	            console.log("Error fetching data: ", error);
	        }
	    });
	    
		$.ajax({
	        type: 'POST',
	        url: '/bulkMonthlyTableLiter',
	        data: {
	            comp_id: comp_id
	        },
	        dataType: 'json',
	        success: function(response) {
	            var data = response;
	            var tableBody = document.getElementById('bulkMonthlyTableKg').getElementsByTagName('tbody')[0];
	            
	            if (tableBody) {
			        tableBody.innerHTML = '';
			    }
	            
	            // 데이터 처리
	            for (var i = 0; i < data.length; i++) {
	                var item = data[i];
	                var row = document.createElement('tr');
	                var cntCell = document.createElement('td');
	                var totalCell = document.createElement('td');
                
	                cntCell.textContent = parseInt(item.cnt).toLocaleString() || '';
	                totalCell.textContent = parseInt(item.total).toLocaleString() || '';
	                
	                row.appendChild(cntCell);
	                row.appendChild(totalCell);
	                
	                tableBody.appendChild(row);
	            }
	            
	            console.log(tableBody);
	            
	            return tableBody;
	        },
	        error: function(error) {
	            console.log("Error fetching data: ", error);
	        }
	    });
	}
    
    document.getElementById("kgBtn").addEventListener("click", function() {
    	displayKgData();
    	document.getElementById("kgBtn").classList.add("active");
    	document.getElementById("literBtn").classList.remove("active");
    });
    
    document.getElementById("literBtn").addEventListener("click", function() {
    	displayLiterData();
    	document.getElementById("literBtn").classList.add("active");
    	document.getElementById("kgBtn").classList.remove("active");
    });
	
    function bulkGpsTable() {
	    $.ajax({
	        type: 'POST',
	        url: '/bulkGpsTable',
	        data: {
	            comp_id: comp_id
	        },
	        dataType: 'json',
	        success: function(response) {
				
	            var data = response;
	            var tableBody = document.getElementById('bulkGpsTable').getElementsByTagName('tbody')[0];
	
	            if (tableBody) {
	                tableBody.innerHTML = '';
	            }
	            
	            var container = document.getElementById('bulkGps');
	            
	            if (data.length > 0) {
					var options = {
		                center: new kakao.maps.LatLng(data[0].latitude, data[0].longitude),
		                level: 3
		            };
				} else {
					var options = {
		                center: new kakao.maps.LatLng('37.474093775174715', '126.88122626068565'),
		                level: 3
		            };
		            
                	var row = document.createElement('tr');
	                var bulkNameCell = document.createElement('td');
	                
	                bulkNameCell.textContent = '차량이 존재하지 않습니다.';
	                bulkNameCell.setAttribute('colspan', '2');
	                
	                row.appendChild(bulkNameCell);
	                tableBody.appendChild(row);
				}
	
	            var map1 = new kakao.maps.Map(container, options);
	
	            // 데이터 처리
	            for (var i = 0; i < data.length; i++) {
	                var item = data[i];
                	var row = document.createElement('tr');
	                var bulkNameCell = document.createElement('td');
	                var addressCell = document.createElement('td');
	
	                bulkNameCell.textContent = item.bulkName || '';
	
                    var latitude = item.latitude;
                    var longitude = item.longitude;
                    
                    console.log(latitude);
                    
                    if (latitude == '0' || longitude == '0') {
						addressCell.textContent = '위치를 찾을 수 없습니다.';
					} else {
		                (function(item, addressCell) {  // 주소 변환
		                    var geocoder = new kakao.maps.services.Geocoder();
		
		                    geocoder.coord2Address(longitude, latitude, function(result, status) {
		                        if (status === kakao.maps.services.Status.OK) {
		                            var address1 = result[0].address.address_name;
		                            addressCell.textContent = address1 || '';
		                            
		                            console.log(address1);
		                        }
		                    });
		                })(item, addressCell);
					}
	
	                row.appendChild(bulkNameCell);
        			row.appendChild(addressCell);
        			
	                tableBody.appendChild(row);
	                
	                row.setAttribute("onclick", "bulkGps('"+item.bulkId+"');");
	                
	                console.log(item.bulkId);
	            }
	            console.log(tableBody);
	                
				var bulkGpsData = document.getElementById('bulkGpsData');
            	var trElements = bulkGpsData.querySelectorAll('tr');
                
	            for(var  i = 0; i < trElements.length; i++) {
					trElements[i].addEventListener('click', bulkBg);
				}

				function bulkBg(event) {
					var tr = event.target.parentElement;
					
					for(var i = 0; i < trElements.length; i++) {
						trElements[i].style.backgroundColor = '#f3f6f9';
					}
					
					tr.style.backgroundColor = '#e4eef8';
				}
	            
	            if (trElements.length > 0) {
	            	trElements[0].click();
	            	trElements[0].style.backgroundColor = '#e4eef8';
				}
	
	            return tableBody;
	        },
	        error: function(error) {
	            console.log("Error fetching data: ", error);
	        }
	    });
	}
	
	bulkGpsTable();
});


function bulkGps(bulkId) {
    $.ajax({
        type: 'POST',
        url: '/bulkGps',
        data: {
            comp_id: comp_id,
            bulk_id: bulkId
        },
        dataType: 'json',
        success: function(response) {
			$('#bulkGps').empty();
			
            var data = response;
			
			console.log(data[0]);
			
            var container = document.getElementById('bulkGps');
            
            if (data.length < 1) {
				var options = {
	                center: new kakao.maps.LatLng('37.474093775174715', '126.88122626068565'),
	                level: 3
	            };
			} else {
				var options = {
	                center: new kakao.maps.LatLng(data[data.length - 1].latitude, data[data.length - 1].longitude),
	                level: 3
	            };
			}
            

            var map1 = new kakao.maps.Map(container, options);

            var polylinePath = [];
            
			for (var i = 0; i < data.length; i++) {
                var marker = null;

                // Add marker at the first and last position
                if (i === 0) {
                    marker = new kakao.maps.Marker({
                        position: new kakao.maps.LatLng(data[i].latitude, data[i].longitude),
                        map: map1,
				        image: new kakao.maps.MarkerImage(
				            '/dashman/img/start.png',
				            new kakao.maps.Size(30, 30) // 아이콘 크기 설정
				        )
                    });
                }
                
                if (i === data.length - 1) {
                    marker = new kakao.maps.Marker({
                        position: new kakao.maps.LatLng(data[i].latitude, data[i].longitude),
                        map: map1,
				        image: new kakao.maps.MarkerImage(
				            '/dashman/img/end.png',
				            new kakao.maps.Size(30, 30) // 아이콘 크기 설정
				        )
                    });
                }

                polylinePath.push(marker ? marker.getPosition() : new kakao.maps.LatLng(data[i].latitude, data[i].longitude));
            }
			

            var polyline = new kakao.maps.Polyline({
                path: polylinePath,
                strokeWeight: 3,
                strokeColor: '#db4040',
                strokeOpacity: 0.7,
                strokeStyle: 'solid'
            });

            polyline.setMap(map1);
        },
        error: function(error) {
            console.log("Error fetching data: ", error);
        }
    });
}

