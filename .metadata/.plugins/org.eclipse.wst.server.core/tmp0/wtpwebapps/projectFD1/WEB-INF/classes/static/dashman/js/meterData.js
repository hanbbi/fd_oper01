
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var comp_id = urlParams.get('comp_id');

$(document).ready(function() {
	$.ajax({
        type: 'POST',
        url: '/meterDailyTable',
        data: {
            comp_id: comp_id
        },
        dataType: 'json',
        success: function(response) {
            var data = response;
            var tableBody = document.getElementById('meterDailyTable').getElementsByTagName('tbody')[0];
            
            // 데이터 처리
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                var row = document.createElement('tr');
                var usedCell = document.createElement('td');
                
                usedCell.textContent = parseInt(item.used).toLocaleString() || '';
                
                row.appendChild(usedCell);
                
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
        url: '/meterMonthlyTable',
        data: {
            comp_id: comp_id
        },
        dataType: 'json',
        success: function(response) {
            var data = response;
            var tableBody = document.getElementById('meterMonthlyTable').getElementsByTagName('tbody')[0];
            
            // 데이터 처리
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                var row = document.createElement('tr');
                var usedCell = document.createElement('td');
                
                usedCell.textContent = parseInt(item.used).toLocaleString() || '';
                
                row.appendChild(usedCell);
                
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
        url: '/meterType',
        data: {
            comp_id: comp_id
        },
        dataType: 'json',
        success: function(response) {
            var data = response;
            var tableBody = document.getElementById('meterType').getElementsByTagName('tbody')[0];
            
            var a = 0;
            
            // 데이터 처리
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                var row = document.createElement('tr');
                var meterTypeCell = document.createElement('td');
                var cntCell = document.createElement('td');
                
                meterTypeCell.textContent = item.meterType || '';
                cntCell.textContent = parseInt(item.cnt).toLocaleString() || '';
                
                row.appendChild(meterTypeCell);
                row.appendChild(cntCell);
                
                a += parseInt(item.cnt);
                
                tableBody.appendChild(row);
            }
            
            var row2 = document.createElement('tr');
            var cell1 = document.createElement('td');
            var cell2 = document.createElement('td');
            
            cell1.textContent = '전체';
            cell2.textContent = a.toLocaleString();
            
            row2.appendChild(cell1);
            row2.appendChild(cell2);
            
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
        url: '/meterError',
        data: {
            comp_id: comp_id
        },
        dataType: 'json',
        success: function(response) {
            var data = response;
            var tableBody = document.getElementById('meterError').getElementsByTagName('tbody')[0];
            
            // 데이터 처리
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                var row = document.createElement('tr');
                var mtypeCell = document.createElement('td');
                var cntCell = document.createElement('td');
                
                mtypeCell.textContent = item.mtype || '';
                cntCell.textContent = item.cnt || '';
                
                row.appendChild(mtypeCell);
                row.appendChild(cntCell);
                
                tableBody.appendChild(row);
                console.log(item.mtype);
                
            	row.setAttribute("onclick", "meterDrop('"+item.mtype+"');");
            }
                
            var switcherErrorData = document.getElementById('meterErrorData');
            var trElements = switcherErrorData.querySelectorAll('tr');
            
            for(var i = 0; i < trElements.length; i++) {
				trElements[i].addEventListener('click', meterBg);
			}


			function meterBg(event) {
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
	            
	            var meterErrorBtn = document.getElementById('meterErrorBtn');
			    meterErrorBtn.textContent = '장애 ' + (dataCnt);
			    meterErrorBtn.classList.remove('btn-outline-primary');
			    meterErrorBtn.classList.add('btn-outline-danger');
	        } else {
                var row = document.createElement('tr');
                var noneCell = document.createElement('td');
				noneCell.textContent = '장애 계량기가 없습니다.';
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


function meterDrop(flag) {
	if (flag == '통신점검') {
		$.ajax({
	        type: 'POST',
	        url: '/meterErrorT',
	        data: {
	            comp_id: comp_id
	        },
	        dataType: 'json',
	        success: function(response) {
	            var data = response;
	            var tableBody = document.getElementById('meterErrorDetail').getElementsByTagName('tbody')[0];
	            
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
	                var cValueCell = document.createElement('td');
	                
	                snCell.textContent = item.sn || '';
	                compCell.textContent = item.comp || '';
	                custCell.textContent = item.cust || '';
	                tranDtCell.textContent = item.tranDt || '';
	                cValueCell.textContent = item.cValue || '';
	                
	                row.appendChild(snCell);
	                row.appendChild(compCell);
	                row.appendChild(custCell);
	                row.appendChild(tranDtCell);
	                row.appendChild(cValueCell);
	                
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
	else if (flag == '미변동') {
		$.ajax({
	        type: 'POST',
	        url: '/meterErrorM',
	        data: {
	            comp_id: comp_id
	        },
	        dataType: 'json',
	        success: function(response) {
	            var data = response;
	            var tableBody = document.getElementById('meterErrorDetail').getElementsByTagName('tbody')[0];
	            
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
	                var cValueCell = document.createElement('td');
	                
	                snCell.textContent = item.sn || '';
	                compCell.textContent = item.comp || '';
	                custCell.textContent = item.cust || '';
	                tranDtCell.textContent = item.tranDt || '';
	                cValueCell.textContent = item.cValue || '';
	                
	                row.appendChild(snCell);
	                row.appendChild(compCell);
	                row.appendChild(custCell);
	                row.appendChild(tranDtCell);
	                row.appendChild(cValueCell);
	                
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
