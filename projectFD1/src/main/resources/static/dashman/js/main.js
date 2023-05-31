(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 0, 'easeOutQuad');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Calender
    $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : false
    });
    
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
    
    var queryString = window.location.search;
	var urlParams = new URLSearchParams(queryString);
	var comp_id = urlParams.get('comp_id');
    
    function updateChart6(data) {
		google.charts.load('current', {'packages':['corechart']});
	    google.charts.setOnLoadCallback(drawChart);
	
	    function drawChart() {
	
	        var data2 = new google.visualization.DataTable();
	        data2.addColumn('string', 'stock');
	        data2.addColumn('number', 'percent');
	        data2.addRows([
	        	['충전 가능량' + parseInt(data.charge).toLocaleString() + ' kg', parseInt(data.charge)],
	        	['현재 재고량' + parseInt(data.stock).toLocaleString() + ' kg', parseInt(data.stock)]
        	]);
	
	        var options = {
			    title: '',
			    sliceVisibilityThreshold: 0,
			    pieSliceTextStyle: { fontSize: 16 },
			    colors: ['#aadbfb', '#48b6fd'],
			    backgroundColor: '#f3f6f9',
			    pieSliceText: 'percentage',
			    startAngle: 90,
			    showTextEvery: 1,
			    tooltip: {
					trigger: 'none'
				}
	        };
	
	        var chart = new google.visualization.PieChart(document.getElementById('chart1Div'));
	        chart.draw(data2, options);
	      }
	      
	}
	
	function fetchData6() {
		$.ajax({
			type: 'POST',
			url: '/tankStock',
			data: {
				comp_id: comp_id,
	        	selectedDate: formattedDate
			},
			dataType: 'json',
			
			success: function (response) {
				var data = {
					stock: response.stock,
					charge: response.charge,
					tranDt: response.tranDt,
					tnkAll: response.tnkAll,
					tnkDrv: response.tnkDrv,
					total: response.total
				};
				console.log(data);
				updateChart6(data);
			},
			error: function (error) {
				console.log("Error fetching data6: ", error);
			},
		});
	}
	
	fetchData6();
	
	$('#datepicker').datepicker().on('changeDate', function(e) {
		var year = e.date.getFullYear().toString().slice(-2); // 마지막 두 자리만 가져오기
		var month = (e.date.getMonth() + 1).toString().padStart(2, '0'); // 두 자리로 만들기
		var day = e.date.getDate().toString().padStart(2, '0'); // 두 자리로 만들기
		
		var selectedDate = year + '-' + month + '-' + day;
    	$(this).val(selectedDate);
    	
    	console.log(selectedDate);
    	
    	$.ajax({
			type: 'POST',
			url: '/tankStock',
			data: {
				comp_id: comp_id,
	        	selectedDate: selectedDate
			},
			dataType: 'json',
			
			success: function (response) {
				var data = {
					stock: response.stock,
					charge: response.charge,
					tranDt: response.tranDt,
					tnkAll: response.tnkAll,
					tnkDrv: response.tnkDrv,
					total: response.total
				};
				console.log(data);
				
				updateChart6(data);
			},
			error: function (error) {
				console.log("Error fetching data6: ", error);
			},
		});
    });

    // Worldwide Sales Chart
    var ctx1 = $("#tank-chart2").get(0).getContext("2d");
    var myChart1;
    
    function updateChart1(data) {
		var labels = data.map(obj => obj.tranDt);
	    var chargedData = data.map(obj => obj.charged);
	    var usedData = data.map(obj => obj.used);
		
		myChart1 = new Chart(ctx1, {
	        type: "bar",
	        data: {
	            labels: labels,
	            datasets: [{
	                    label: "충전량(kg)",
	                    data: chargedData,
	                    backgroundColor: "rgba(0, 156, 255, .7)"
	                },
	                {
	                    label: "소비량(kg)",
	                    data: usedData,
	                    backgroundColor: "rgba(0, 156, 255, .3)"
	                }]
	            },
	        options: {
		        maintainAspectRatio: false, // 종횡비를 유지하지 않음
		        width: 600,
		        height: 220,
	            responsive: false,
	            scales: {
	                y: {
	                    ticks: {
	                        font: {
	                            size: 14
	                        }
	                    }
	                },
	                x: {
	                    ticks: {
	                        font: {
	                            size: 15
	                        }
	                    }
	                }
	            }
	        }
	    });
	}
	
	function fetchData1() {
		$.ajax({
			type: 'POST',
			url: '/tankDaily',
			data: {
				comp_id: comp_id
			},
			dataType: 'json',
			
			success: function (response) {
				console.log(response);
				
				if (Array.isArray(response)) {
                updateChart1(response);
	            } else {
	                console.log("Invalid data format");
	            }
			},
			error: function (error) {
				console.log("Error fetching data1: ", error);
			}
		})
	}
    
	fetchData1();
	
	var ctx11 = $("#tank-chart22").get(0).getContext("2d");
    var myChart11;
	
	function updateChart11(data) {
		var labels = data.map(obj => obj.tranDt);
	    var chargedData = data.map(obj => obj.charged);
	    var usedData = data.map(obj => obj.used);
		
		myChart11 = new Chart(ctx11, {
	        type: "bar",
	        data: {
	            labels: labels,
	            datasets: [{
	                    label: "충전량(kg)",
	                    data: chargedData,
	                    backgroundColor: "rgba(0, 156, 255, .7)"
	                },
	                {
	                    label: "소비량(kg)",
	                    data: usedData,
	                    backgroundColor: "rgba(0, 156, 255, .3)"
	                }]
	            },
	        options: {
		        maintainAspectRatio: false, // 종횡비를 유지하지 않음
		        width: 600,
		        height: 220,
	            responsive: false,
	            scales: {
	                y: {
	                    ticks: {
	                        font: {
	                            size: 14
	                        }
	                    }
	                },
	                x: {
	                    ticks: {
	                        font: {
	                            size: 15
	                        }
	                    }
	                }
	            }
	        }
	    });
	}
	
	function fetchData11() {
		$.ajax({
			type: 'POST',
			url: '/tankMonthly',
			data: {
				comp_id: comp_id
			},
			dataType: 'json',
			
			success: function (response) {
				console.log(response);
				
				if (Array.isArray(response)) {
                updateChart11(response);
	            } else {
	                console.log("Invalid data format");
	            }
			},
			error: function (error) {
				console.log("Error fetching data1: ", error);
			}
		})
	}
    
	fetchData11();


    // Single Bar Chart
    var ctx4 = $("#switcher-bar-chart").get(0).getContext("2d");
    var myChart4;
    
    function updateChart4(data) {
		var labels = data.map(obj => obj.volume+"kg");
		var switcherO = data.map(obj => obj.fillCnt);
		var switcherX = data.map(obj => obj.zeroCnt);
		
	    myChart4 = new Chart(ctx4, {
	        type: "bar",
	        data: {
	            labels: labels,
	            datasets: [{
					label: "정상",
					data: switcherO,
					backgroundColor: 'rgba(0, 156, 255, .7)'
				},
				{
					label: "절체",
					data: switcherX,
					backgroundColor: 'rgba(0, 156, 255, .3)'
				}]
	        },
	        options: {
	            responsive: false,
	            maintainAspectRatio: false,
                plugins: {
                    datalabels: {
                        anchor: 'end',
                        align: 'end',
                        font: {
                            weight: 'bold'
                        }
                    }
                },
	            indexAxis: 'y',
	            scales:{
	                x:{ //x축값 누적
	                    stacked:true,
	                    ticks: {
							font: {
								size: 16
							}
						}
	                },
	                y:{ //y축값 누적
	                    stacked:true,
	                    ticks: {
							font: {
								size: 17
							}
						}
	                },
	            }
	        }
	    });
	}
	
	function fetchData4() {
		$.ajax({
			type: 'POST',
			url: '/switcherStock',
			data: {
				comp_id: comp_id
			},
			dataType: 'json',
			
			success: function (response) {
				console.log(response);
				
				if (Array.isArray(response)) {
					updateChart4(response);
				} else {
					console.log("Invalid data format");
				}
			},
			error: function (error) {
				console.log("Error fetching data4: ", error);
			}
		});
	}
	
	fetchData4();
    


    // Single Line Chart
    var ctx3 = $("#switcher-line-chart").get(0).getContext("2d");
    var myChart3;
    
    function updateChart3(data) {
		var labels = data.map(obj => obj.tranDt);
		var chgCnt = data.map(obj => obj.chgCnt);
		
	    myChart3 = new Chart(ctx3, {
	        type: "line",
	        data: {
	            labels: labels,
	            datasets: [{
	                label: "교체수량",
	                fill: true,
	                backgroundColor: "rgba(0, 156, 255, .3)",
	                data: chgCnt
	            }]
	        },
	        options: {
		        maintainAspectRatio: false, // 종횡비를 유지하지 않음
		        width: 600,
		        height: 220,
	            responsive: false,
	            scales: {
	                y: {
	                    ticks: {
	                        font: {
	                            size: 14
	                        }
	                    }
	                },
	                x: {
	                    ticks: {
	                        font: {
	                            size: 15
	                        }
	                    }
	                }
	            }
	        }
	    });
	}
	
	function fetchData3() {
		$.ajax({
			type: 'POST',
			url: '/switcherDaily',
			data: {
				comp_id: comp_id
			},
			dataType: 'json',
			
			success: function (response) {
				console.log(response);
				
				if (Array.isArray(response)) {
					updateChart3(response);
				} else {
					console.log("Invalid data format");
				}
			},
			error: function (error) {
				console.log("Error fetching data3: ", error);
			}
		});
	}
	
	fetchData3();
	
	
	var ctx33 = $("#switcher-line-chart2").get(0).getContext("2d");
    var myChart33;
    
    function updateChart33(data) {
		var labels = data.map(obj => obj.tranDt);
		var chgCnt = data.map(obj => obj.chgCnt);
		
	    myChart33 = new Chart(ctx33, {
	        type: "line",
	        data: {
	            labels: labels,
	            datasets: [{
	                label: "교체수량",
	                fill: true,
	                backgroundColor: "rgba(0, 156, 255, .3)",
	                data: chgCnt
	            }]
	        },
	        options: {
		        maintainAspectRatio: false, // 종횡비를 유지하지 않음
		        width: 600,
		        height: 220,
	            responsive: false,
	            scales: {
	                y: {
	                    ticks: {
	                        font: {
	                            size: 14
	                        }
	                    }
	                },
	                x: {
	                    ticks: {
	                        font: {
	                            size: 15
	                        }
	                    }
	                }
	            }
	        }
	    });
	}
	
	function fetchData33() {
		$.ajax({
			type: 'POST',
			url: '/switcherMonthly',
			data: {
				comp_id: comp_id
			},
			dataType: 'json',
			
			success: function (response) {
				console.log(response);
				
				if (Array.isArray(response)) {
					updateChart33(response);
				} else {
					console.log("Invalid data format");
				}
			},
			error: function (error) {
				console.log("Error fetching data3: ", error);
			}
		});
	}
	
	fetchData33();


    // Single Line Chart2
    var ctx5 = $("#meter-line-chart").get(0).getContext("2d");
    var myChart5;
    
    function updateChart5(data) {
		var labels = data.map(obj => obj.tranDt);
		var used = data.map(obj => obj.used);
		
	    myChart5 = new Chart(ctx5, {
	        type: "line",
	        data: {
	            labels: labels,
	            datasets: [{
	                label: "사용량",
	                fill: true,
	                backgroundColor: "rgba(0, 156, 255, .3)",
	                data: used
	            }]
	        },
	        options: {
	            responsive: false,
	            scales: {
	                y: {
	                    ticks: {
	                        font: {
	                            size: 14
	                        }
	                    }
	                },
	                x: {
	                    ticks: {
	                        font: {
	                            size: 14
	                        }
	                    }
	                }
	            }
	        }
	    });
	}
	
	function fetchData5() {
		$.ajax({
			type: 'POST',
			url: '/meterDaily',
			data: {
				comp_id: comp_id
			},
			dataType: 'json',
			
			success: function (response) {
				console.log(response);
				
				if (Array.isArray(response)) {
					updateChart5(response);
				} else {
					console.log("Invalid data format");
				}
			},
			error: function (error) {
				console.log("Error fetching data5: ", error);
			}
		});
	}
	
	fetchData5();
	
	
    var ctx55 = $("#meter-line-chart2").get(0).getContext("2d");
    var myChart55;
    
    function updateChart55(data) {
		var labels = data.map(obj => obj.tranDt);
		var used = data.map(obj => obj.used);
		
	    myChart55 = new Chart(ctx55, {
	        type: "line",
	        data: {
	            labels: labels,
	            datasets: [{
	                label: "사용량",
	                fill: true,
	                backgroundColor: "rgba(0, 156, 255, .3)",
	                data: used
	            }]
	        },
	        options: {
	            responsive: false,
	            scales: {
	                y: {
	                    ticks: {
	                        font: {
	                            size: 14
	                        }
	                    }
	                },
	                x: {
	                    ticks: {
	                        font: {
	                            size: 14
	                        }
	                    }
	                }
	            }
	        }
	    });
	}
	
	function fetchData55() {
		$.ajax({
			type: 'POST',
			url: '/meterMonthly',
			data: {
				comp_id: comp_id
			},
			dataType: 'json',
			
			success: function (response) {
				console.log(response);
				
				if (Array.isArray(response)) {
					updateChart55(response);
				} else {
					console.log("Invalid data format");
				}
			},
			error: function (error) {
				console.log("Error fetching data5: ", error);
			}
		});
	}
	
	fetchData55();


    // Single Line Chart3
    var ctx2 = $("#bulk-line-chart").get(0).getContext("2d");
    var myChart2;
    
    function updateChart2(data) {
		if (myChart2) {
	        myChart2.destroy();
	    }
	    
		var labels = data.map(obj => obj.tranDt);
		var cnt = data.map(obj => obj.cnt);
		var total = data.map(obj => obj.total);
		
	    myChart2 = new Chart(ctx2, {
	        type: "line",
	        data: {
	            labels: labels,
	            datasets: [{
	                label: "공급량",
	                fill: true,
	                backgroundColor: "rgba(0, 156, 255, .3)",
	                data: total
	            }]
	        },
	        options: {
	            scales: {
	                y: {
	                    ticks: {
	                        font: {
	                            size: 14
	                        }
	                    }
	                },
	                x: {
	                    ticks: {
	                        font: {
	                            size: 14
	                        }
	                    }
	                }
	            }
	        }
	    });
	}
	
	function fetchData2() {
		$.ajax({
			type: 'POST',
			url: '/bulkDailyKg',
			data: {
				comp_id: comp_id
			},
			dataType: 'json',
			
			success: function (response) {
				console.log(response);
				
				if (Array.isArray(response)) {
					updateChart2(response);
				} else {
					console.log("Invalid data format");
				}
			},
			error: function (error) {
				console.log("Error fetching data2: ", error);
			}
		});
	}
	
	fetchData2();

    
    var ctx22 = $("#bulk-line-chart2").get(0).getContext("2d");
    var myChart22;
    
    function updateChart22(data) {
		if (myChart22) {
	        myChart22.destroy();
	    }
		
		var labels = data.map(obj => obj.tranDt);
		var cnt = data.map(obj => obj.cnt);
		var total = data.map(obj => obj.total);
		
	    myChart22 = new Chart(ctx22, {
	        type: "line",
	        data: {
	            labels: labels,
	            datasets: [{
	                label: "공급량",
	                fill: true,
	                backgroundColor: "rgba(0, 156, 255, .3)",
	                data: total
	            }]
	        },
	        options: {
	            scales: {
	                y: {
	                    ticks: {
	                        font: {
	                            size: 14
	                        }
	                    }
	                },
	                x: {
	                    ticks: {
	                        font: {
	                            size: 14
	                        }
	                    }
	                }
	            }
	        }
	    });
	}
	
	function fetchData22() {
		$.ajax({
			type: 'POST',
			url: '/bulkMonthlyKg',
			data: {
				comp_id: comp_id
			},
			dataType: 'json',
			
			success: function (response) {
				console.log(response);
				
				if (Array.isArray(response)) {
					updateChart22(response);
				} else {
					console.log("Invalid data format");
				}
			},
			error: function (error) {
				console.log("Error fetching data22: ", error);
			}
		});
	}
	
	fetchData22();
	
	document.getElementById("kgBtn").addEventListener("click", function() {
	    
		$.ajax({
			type: 'POST',
			url: '/bulkDailyKg',
			data: {
				comp_id: comp_id
			},
			dataType: 'json',
			
			success: function (response) {
				console.log(response);
				
				if (Array.isArray(response)) {
					updateChart2(response);
				} else {
					console.log("Invalid data format");
				}
			},
			error: function (error) {
				console.log("Error fetching data2: ", error);
			}
		});
		
		$.ajax({
			type: 'POST',
			url: '/bulkMonthlyKg',
			data: {
				comp_id: comp_id
			},
			dataType: 'json',
			
			success: function (response) {
				console.log(response);
				
				if (Array.isArray(response)) {
					updateChart22(response);
				} else {
					console.log("Invalid data format");
				}
			},
			error: function (error) {
				console.log("Error fetching data22: ", error);
			}
		});
	});
	
	document.getElementById("literBtn").addEventListener("click", function() {
	    
		$.ajax({
			type: 'POST',
			url: '/bulkMonthlyLiter',
			data: {
				comp_id: comp_id
			},
			dataType: 'json',
			
			success: function (response) {
				console.log(response);
				
				if (Array.isArray(response)) {
					updateChart22(response);
				} else {
					console.log("Invalid data format");
				}
			},
			error: function (error) {
				console.log("Error fetching data22: ", error);
			}
		});
		
		$.ajax({
			type: 'POST',
			url: '/bulkDailyLiter',
			data: {
				comp_id: comp_id
			},
			dataType: 'json',
			
			success: function (response) {
				console.log(response);
				
				if (Array.isArray(response)) {
					updateChart2(response);
				} else {
					console.log("Invalid data format");
				}
			},
			error: function (error) {
				console.log("Error fetching data2: ", error);
			}
		});
	});
	
})(jQuery);

