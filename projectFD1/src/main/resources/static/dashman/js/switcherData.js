
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var comp_id = urlParams.get('comp_id');

$(document).ready(function() {
	
    $.ajax({
        type: 'POST',
        url: '/switcherVolume',
        data: {
            comp_id: comp_id
        },
        dataType: 'json',
        success: function(response) {
            var data = response;
            var tableBody = document.getElementById('switcherVolumeTable').getElementsByTagName('tbody')[0];
            
            var a = 0;
            var b = 0;
            
            // 데이터 처리
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                var row = document.createElement('tr');
                var volumeCell = document.createElement('td');
                var fillCntCell = document.createElement('td');
                var zeroCntCell = document.createElement('td');
                var allCntCell = document.createElement('td');
                
                if (item.volume == '미등록') {
					volumeCell.textContent = item.volume || '';
				} else {
                	volumeCell.textContent = parseInt(item.volume).toLocaleString() || '';
				}
                fillCntCell.textContent = parseInt(item.fillCnt).toLocaleString() || '';
                zeroCntCell.textContent = parseInt(item.zeroCnt).toLocaleString() || '';
                allCntCell.textContent = parseInt(item.allCnt).toLocaleString() || '';
                
                row.appendChild(volumeCell);
                row.appendChild(fillCntCell);
                row.appendChild(zeroCntCell);
                row.appendChild(allCntCell);
                
                a += parseInt(item.fillCnt);
                b += parseInt(item.zeroCnt);
                
            	tableBody.appendChild(row);
            }
            
            console.log(a);
            
            var row2 = document.createElement('tr');
            var cell1 = document.createElement('td');
            var cell2 = document.createElement('td');
            var cell3 = document.createElement('td');
            var cell4 = document.createElement('td');
            
            cell1.textContent = '전체';
            cell2.textContent = a.toLocaleString();
            cell3.textContent = b.toLocaleString();
            cell4.textContent = (a+b).toLocaleString();
            
            row2.appendChild(cell1)
            row2.appendChild(cell2)
            row2.appendChild(cell3)
            row2.appendChild(cell4)
            
            tableBody.appendChild(row2);
            
            console.log(tableBody);
            
            return tableBody;
        },
        error: function(error) {
            console.log("Error fetching data: ", error);
        }
    });
    
    $.ajax({
        type: 'POST',
        url: '/switcherDailyTable',
        data: {
            comp_id: comp_id
        },
        dataType: 'json',
        success: function(response) {
            var data = response;
            var tableBody = document.getElementById('switcherDailyTable').getElementsByTagName('tbody')[0];
            
            // 데이터 처리
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                var row = document.createElement('tr');
                var chgCntCell = document.createElement('td');
                
                chgCntCell.textContent = parseInt(item.chgCnt).toLocaleString() || '';
                
                row.appendChild(chgCntCell);
                
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
        url: '/switcherMonthlyTable',
        data: {
            comp_id: comp_id
        },
        dataType: 'json',
        success: function(response) {
            var data = response;
            var tableBody = document.getElementById('switcherMonthlyTable').getElementsByTagName('tbody')[0];
            
            // 데이터 처리
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                var row = document.createElement('tr');
                var chgCntCell = document.createElement('td');
                
                chgCntCell.textContent = parseInt(item.chgCnt).toLocaleString() || '';
                
                row.appendChild(chgCntCell);
                
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
        url: '/switcherError',
        data: {
            comp_id: comp_id
        },
        dataType: 'json',
        success: function(response) {
            var data = response;
            var tableBody = document.getElementById('switcherError').getElementsByTagName('tbody')[0];
            
            // 데이터 처리
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                var row = document.createElement('tr');
                var stypeCell = document.createElement('td');
                var cntCell = document.createElement('td');
                
                stypeCell.textContent = item.stype || '';
                cntCell.textContent = item.cnt || '';
                
                row.appendChild(stypeCell);
                row.appendChild(cntCell);
                
                tableBody.appendChild(row);
                console.log(item.stype);
                
            	row.setAttribute("onclick", "switcherDrop('"+item.stype+"');");
            }
                
            var switcherErrorData = document.getElementById('switcherErrorData');
            var trElements = switcherErrorData.querySelectorAll('tr');
            
            for(var i=0; i<trElements.length; i++) {
				trElements[i].addEventListener('click', switcherBg);
			}


			function switcherBg(event) {
				var tr = event.target.parentElement;
				
				for(var i = 0; i < trElements.length; i++) {
					trElements[i].style.backgroundColor = 'white';
				}
				
				tr.style.backgroundColor = 'skyblue';
			}
            
            console.log(tableBody);
            
            // 첫 번째 row를 선택
	        if (trElements.length > 0) {
	            trElements[0].click();
	            trElements[0].style.backgroundColor = 'skyblue';
	            
	            var dataCnt = 0;
	            for (var i = 0; i < data.length; i++) {
					dataCnt += data[i].cnt;
				}
	            
	            var switcherErrorBtn = document.getElementById('switcherErrorBtn');
			    switcherErrorBtn.textContent = '장애 ' + (dataCnt);
			    switcherErrorBtn.classList.remove('btn-outline-primary');
			    switcherErrorBtn.classList.add('btn-outline-danger');
	        } else {
                var row = document.createElement('tr');
                var noneCell = document.createElement('td');
				noneCell.textContent = '장애 용기가 없습니다.';
				noneCell.setAttribute('colspan', '2');
                row.appendChild(noneCell);
                
                tableBody.appendChild(row);
			}
            
            return tableBody;
        },
        error: function(error) {
            console.log("Error fetching data: ", error);
        }
    });
});


function switcherDrop(flag) {
	if (flag == '통신점검') {
		$.ajax({
	        type: 'POST',
	        url: '/switcherErrorT',
	        data: {
	            comp_id: comp_id
	        },
	        dataType: 'json',
	        success: function(response) {
	            var data = response;
	            var tableBody = document.getElementById('switcherErrorDetail').getElementsByTagName('tbody')[0];
	            
	            if (tableBody) {
			        tableBody.innerHTML = '';
			    }
	            
	            // 데이터 처리
	            for (var i = 0; i < data.length; i++) {
	                var item = data[i];
	                var row = document.createElement('tr');
	                var snCell = document.createElement('td');
	                var compCell = document.createElement('td');
	                var custCell = document.createElement('td');
	                var tranDtCell = document.createElement('td');
	                var statusCell = document.createElement('td');
	                var batteryCell = document.createElement('td');
	                
	                snCell.textContent = item.sn || '';
	                compCell.textContent = item.comp || '';
	                custCell.textContent = item.cust || '';
	                tranDtCell.textContent = item.tranDt || '';
	                statusCell.textContent = item.status || '';
	                batteryCell.textContent = item.battery || '';
	                
	                row.appendChild(snCell);
	                row.appendChild(compCell);
	                row.appendChild(custCell);
	                row.appendChild(tranDtCell);
	                row.appendChild(statusCell);
	                row.appendChild(batteryCell);
	                
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
	else if (flag == '배터리점검') {
		$.ajax({
	        type: 'POST',
	        url: '/switcherErrorB',
	        data: {
	            comp_id: comp_id
	        },
	        dataType: 'json',
	        success: function(response) {
	            var data = response;
	            var tableBody = document.getElementById('switcherErrorDetail').getElementsByTagName('tbody')[0];
	            
	            if (tableBody) {
			        tableBody.innerHTML = '';
			    }
	            
	            // 데이터 처리
	            for (var i = 0; i < data.length; i++) {
	                var item = data[i];
	                var row = document.createElement('tr');
	                var snCell = document.createElement('td');
	                var compCell = document.createElement('td');
	                var custCell = document.createElement('td');
	                var tranDtCell = document.createElement('td');
	                var statusCell = document.createElement('td');
	                var batteryCell = document.createElement('td');
	                
	                snCell.textContent = item.sn || '';
	                compCell.textContent = item.comp || '';
	                custCell.textContent = item.cust || '';
	                tranDtCell.textContent = item.tranDt || '';
	                statusCell.textContent = item.status || '';
	                batteryCell.textContent = item.battery || '';
	                
	                row.appendChild(snCell);
	                row.appendChild(compCell);
	                row.appendChild(custCell);
	                row.appendChild(tranDtCell);
	                row.appendChild(statusCell);
	                row.appendChild(batteryCell);
	                
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
}