
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var comp_id = urlParams.get('comp_id');
	
$(document).ready(function() {
	$('#datepicker').datepicker({
	    format: 'yy-mm-dd', // 선택한 날짜 형식
	    language: 'ko', // 한국어 설정
	    autoclose: true, // 선택 후 자동으로 닫힘
	    todayHighlight: true, // 현재 날짜 강조 표시
	    endDate: new Date() // 오늘 날짜까지 선택 가능
	});
	
	// 초기에 현재 날짜 선택
	var today = new Date();
	var year = today.getFullYear().toString().slice(-2); // 마지막 두 자리만 가져오기
	var month = (today.getMonth() + 1).toString().padStart(2, '0'); // 두 자리로 만들기
	var day = today.getDate().toString().padStart(2, '0'); // 두 자리로 만들기
	
	var formattedDate = year + '-' + month + '-' + day;

	
	// input 요소에 초기값 설정
	var datepickerInput = document.getElementById('datepicker');
	datepickerInput.value = formattedDate;
	datepickerInput.setAttribute('readonly', true);

	
	// 버튼 클릭 시 데이트피커 표시
	$('#datepickerBtn').click(function() {
	    $('#datepicker').datepicker('show');
	});
	
	// 날짜 선택 시 input에 표시
	$('#datepicker').datepicker().on('changeDate', function(e) {
		var year = e.date.getFullYear().toString().slice(-2); // 마지막 두 자리만 가져오기
		var month = (e.date.getMonth() + 1).toString().padStart(2, '0'); // 두 자리로 만들기
		var day = e.date.getDate().toString().padStart(2, '0'); // 두 자리로 만들기
		
		var selectedDate = year + '-' + month + '-' + day;
    	$(this).val(selectedDate);
    	
    	console.log(selectedDate);
	    
		$.ajax({
	        type: 'POST',
	        url: '/tankStockText',
	        data: {
	            comp_id: new URLSearchParams(window.location.search).get('comp_id'),
	            selectedDate: selectedDate
	        },
	        dataType: 'json',
	        success: function(response) {
				$('#tankText').empty();
				
	            var data = response;
	            var tankText = document.getElementById('tankText')
	            
	            var tankAllLabel = document.createElement('label');
	            var tankWeightLabel = document.createElement('label');
	            
	            var tankAllInput = document.createElement('input');
	            var tankWeightInput = document.createElement('input');
	            
	            tankAllLabel.textContent = '전체 탱크수' || '';
	            tankWeightLabel.textContent = '전체 내용적' || '';
	            
	            tankAllInput.value = parseInt(data.tnkAll).toLocaleString() + '대 (미운영 ' + (parseInt(data.tnkAll) - parseInt(data.tnkDrv)).toLocaleString() + ')' || '';
	            tankWeightInput.value = parseInt(data.total).toLocaleString() + 'kg' || '';
	            
	            tankAllInput.setAttribute('readonly', true);
				tankWeightInput.setAttribute('readonly', true);
	
	            
	            tankAllLabel.appendChild(tankAllInput);
	            tankWeightLabel.appendChild(tankWeightInput);
	            
	            tankText.appendChild(tankAllLabel);
	            tankText.appendChild(tankWeightLabel);
	                
	            console.log(data);
	            console.log(tankText);
	            
	            return tankText;
	        },
	        error: function(error) {
	            console.log("Error fetching data: ", error);
	        }
	    });
	});
	
	
	$.ajax({
        type: 'POST',
        url: '/tankStockText',
        data: {
            comp_id: comp_id,
	        selectedDate: formattedDate
        },
        dataType: 'json',
        success: function(response) {
            var data = response;
            var tankText = document.getElementById('tankText')
            
            var tankAllLabel = document.createElement('label');
            var tankWeightLabel = document.createElement('label');
            
            var tankAllInput = document.createElement('input');
            var tankWeightInput = document.createElement('input');
            
            tankAllLabel.textContent = '전체 탱크수' || '';
            tankWeightLabel.textContent = '전체 내용적' || '';
            
            tankAllInput.value = parseInt(data.tnkAll).toLocaleString() + '대 (미운영 ' + (parseInt(data.tnkAll) - parseInt(data.tnkDrv)).toLocaleString() + ')' || '';
            tankWeightInput.value = parseInt(data.total).toLocaleString() + 'kg' || '';
            
            tankAllInput.setAttribute('readonly', true);
			tankWeightInput.setAttribute('readonly', true);

            
            tankAllLabel.appendChild(tankAllInput);
            tankWeightLabel.appendChild(tankWeightInput);
            
            tankText.appendChild(tankAllLabel);
            tankText.appendChild(tankWeightLabel);
                
            console.log(data);
            console.log(tankText);
            
            return tankText;
        },
        error: function(error) {
            console.log("Error fetching data: ", error);
        }
    });
	
    $.ajax({
        type: 'POST',
        url: '/tankWeight',
        data: {
            comp_id: comp_id
        },
        dataType: 'json',
        success: function(response) {
            var data = response;
            var tableBody = document.getElementById('tankWeight').getElementsByTagName('tbody')[0];
            
            // 데이터 처리
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                var row = document.createElement('tr');
                var volumeCell = document.createElement('td');
                var cntCell = document.createElement('td');
                
                volumeCell.textContent = item.volume || '';
                cntCell.textContent = parseInt(item.cnt).toLocaleString() || '';
                
                row.appendChild(volumeCell);
                row.appendChild(cntCell);
                
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
        url: '/tankRemain',
        data: {
            comp_id: comp_id
        },
        dataType: 'json',
        success: function(response) {
            var data = response;
            var tableBody = document.getElementById('tankRemain').getElementsByTagName('tbody')[0];
            var weight1 = document.getElementById('weight1');
            var weight2 = document.getElementById('weight2');
            var weight3 = document.getElementById('weight3');
            var weight4 = document.getElementById('weight4');
            var weight5 = document.getElementById('weight5');
            var weight6 = document.getElementById('weight6');
            var weight7 = document.getElementById('weight7');
            var weight8 = document.getElementById('weight8');
            var weight9 = document.getElementById('weight9');
            var weight10 = document.getElementById('weight10');
            
            // 데이터 처리
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                var row = document.createElement('tr');
                var remainCell = document.createElement('td');
                var cntCell = document.createElement('td');
                
                remainCell.textContent = item.remain || '';
                cntCell.textContent = parseInt(item.cnt).toLocaleString() || '';
                
                row.appendChild(remainCell);
                row.appendChild(cntCell);
                
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
        url: '/tankManu',
        data: {
            comp_id: comp_id
        },
        dataType: 'json',
        success: function(response) {
            var data = response;
            var tableBody = document.getElementById('tankManu').getElementsByTagName('tbody')[0];
            
            // 데이터 처리
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                var row = document.createElement('tr');
                var manufacturerCell = document.createElement('td');
                var cntCell = document.createElement('td');
                
                manufacturerCell.textContent = item.manufacturer || '';
                cntCell.textContent = parseInt(item.cnt).toLocaleString() || '';
                
                row.appendChild(manufacturerCell);
                row.appendChild(cntCell);
                
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
        url: '/tankDailyTable',
        data: {
            comp_id: comp_id
        },
        dataType: 'json',
        success: function(response) {
            var data = response;
            var tableBody = document.getElementById('tankDailyTable').getElementsByTagName('tbody')[0];
            
            // 데이터 처리
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                var row = document.createElement('tr');
                var chargedCntCell = document.createElement('td');
                var chargedCell = document.createElement('td');
                var usedCell = document.createElement('td');
                
                chargedCntCell.textContent = parseInt(item.chargedCnt).toLocaleString() || '';
                chargedCell.textContent = parseInt(item.charged).toLocaleString() || '';
                usedCell.textContent = parseInt(item.used).toLocaleString() || '';
                
                row.appendChild(chargedCntCell);
                row.appendChild(chargedCell);
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
        url: '/tankMonthlyTable',
        data: {
            comp_id: comp_id
        },
        dataType: 'json',
        success: function(response) {
            var data = response;
            var tableBody = document.getElementById('tankMonthlyTable').getElementsByTagName('tbody')[0];
            
            // 데이터 처리
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                var row = document.createElement('tr');
                var chargedCntCell = document.createElement('td');
                var chargedCell = document.createElement('td');
                var usedCell = document.createElement('td');
                
                chargedCntCell.textContent = parseInt(item.chargedCnt).toLocaleString() || '';
                chargedCell.textContent = parseInt(item.charged).toLocaleString() || '';
                usedCell.textContent = parseInt(item.used).toLocaleString() || '';
                
                row.appendChild(chargedCntCell);
                row.appendChild(chargedCell);
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
        url: '/tankError',
        data: {
            comp_id: comp_id
        },
        dataType: 'json',
        success: function(response) {
            var data = response;
            var tableBody = document.getElementById('tankError').getElementsByTagName('tbody')[0];
            
            // 데이터 처리
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                var row = document.createElement('tr');
                var ttypeCell = document.createElement('td');
                var cntCell = document.createElement('td');
                
                ttypeCell.textContent = item.ttype || '';
                cntCell.textContent = item.cnt || '';
                
                row.appendChild(ttypeCell);
                row.appendChild(cntCell);
                
                tableBody.appendChild(row);
                console.log(item.ttype);
                
            	row.setAttribute("onclick", "tankDrop('"+item.ttype+"');");
            }
            console.log(tableBody);
                
            var tankErrorData = document.getElementById('tankErrorData');
            var trElements = tankErrorData.querySelectorAll('tr');
                
            for(var  i = 0; i < trElements.length; i++) {
				trElements[i].addEventListener('click', tankBg);
			}

			function tankBg(event) {
				var tr = event.target.parentElement;
				
				for(var  i = 0; i < trElements.length; i++) {
					trElements[i].style.backgroundColor = 'white';
				}
				
				tr.style.backgroundColor = 'skyblue';
			}
            
            // 첫 번째 row를 선택
	        if (trElements.length > 0) {
	            trElements[0].click();
	            trElements[0].style.backgroundColor = 'skyblue'
	            
	            var dataCnt = 0;
	            for (var i = 0; i < data.length; i++) {
					dataCnt += data[i].cnt;
				}
	            
	            var tankErrorBtn = document.getElementById('tankErrorBtn');
			    tankErrorBtn.textContent = '장애 ' + (dataCnt);
			    tankErrorBtn.classList.remove('btn-outline-primary');
			    tankErrorBtn.classList.add('btn-outline-danger');
	        } else {
                var row = document.createElement('tr');
                var noneCell = document.createElement('td');
				noneCell.textContent = '장애 탱크가 없습니다.';
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

    
function tankDrop(flag) {
	if (flag == '통신점검') {
		$.ajax({
	        type: 'POST',
	        url: '/tankErrorT',
	        data: {
	            comp_id: comp_id
	        },
	        dataType: 'json',
	        success: function(response) {
	            var data = response;
	            var tableBody = document.getElementById('tankErrorDetail').getElementsByTagName('tbody')[0];
	            
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
	                var remainCell = document.createElement('td');
	                var batteryCell = document.createElement('td');
	                
	                snCell.textContent = item.sn || '';
	                compCell.textContent = item.comp || '';
	                custCell.textContent = item.cust || '';
	                tranDtCell.textContent = item.tranDt || '';
	                remainCell.textContent = item.remain || '';
	                batteryCell.textContent = item.battery || '';
	                
	                row.appendChild(snCell);
	                row.appendChild(compCell);
	                row.appendChild(custCell);
	                row.appendChild(tranDtCell);
	                row.appendChild(remainCell);
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
	        url: '/tankErrorB',
	        data: {
	            comp_id: comp_id
	        },
	        dataType: 'json',
	        success: function(response) {
	            var data = response;
	            var tableBody = document.getElementById('tankErrorDetail').getElementsByTagName('tbody')[0];
	            
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
	                var remainCell = document.createElement('td');
	                var batteryCell = document.createElement('td');
	                
	                snCell.textContent = item.sn || '';
	                compCell.textContent = item.comp || '';
	                custCell.textContent = item.cust || '';
	                tranDtCell.textContent = item.tranDt || '';
	                remainCell.textContent = item.remain || '';
	                batteryCell.textContent = item.battery || '';
	                
	                row.appendChild(snCell);
	                row.appendChild(compCell);
	                row.appendChild(custCell);
	                row.appendChild(tranDtCell);
	                row.appendChild(remainCell);
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
	else if (flag == '게이지점검') {
		$.ajax({
	        type: 'POST',
	        url: '/tankErrorG',
	        data: {
	            comp_id: comp_id
	        },
	        dataType: 'json',
	        success: function(response) {
	            var data = response;
	            var tableBody = document.getElementById('tankErrorDetail').getElementsByTagName('tbody')[0];
	            
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
	                var remainCell = document.createElement('td');
	                var batteryCell = document.createElement('td');
	                
	                snCell.textContent = item.sn || '';
	                compCell.textContent = item.comp || '';
	                custCell.textContent = item.cust || '';
	                tranDtCell.textContent = item.tranDt || '';
	                remainCell.textContent = item.remain || '';
	                batteryCell.textContent = item.battery || '';
	                
	                row.appendChild(snCell);
	                row.appendChild(compCell);
	                row.appendChild(custCell);
	                row.appendChild(tranDtCell);
	                row.appendChild(remainCell);
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
	
document.getElementById("printBtn").addEventListener("click", function() {
	console.log("click printBtn");

    var url = "/printTank?comp_id=" + comp_id;
    window.open(url, "_blank");
});

