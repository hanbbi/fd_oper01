<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>프린트</title>
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<meta content="" name="keywords">
<meta content="" name="description">

<!-- Favicon -->
<link href="dashman/img/favicon.ico" rel="icon">

<!-- Google Web Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700&display=swap" rel="stylesheet">

<!-- Icon Font Stylesheet -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

<!-- Libraries Stylesheet -->
<link href="dashman/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
<link href="dashman/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />

<!-- Customized Bootstrap Stylesheet -->
<link href="dashman/css/bootstrap.min.css" rel="stylesheet">

<!-- Template Stylesheet -->
<link href="dashman/css/style.css" rel="stylesheet">

<script src="https://cdn.jsdelivr.net/npm/chart.js@3.6.0"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.0.0/dist/chartjs-plugin-datalabels.min.js"></script>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

</head>
<body>

	<div class="container-fluid position-relative bg-light d-flex p-0">
		
		<!-- Content Start -->
		<div id="content" style="background: white; width: 850px;">

			<!-- Chart Start -->
			<div class="container-fluid m-0" style="padding: 40px;">
				<h2 style="align-content: center; text-align: center; margin-bottom: 30px;">소형저장탱크 운영 현황 보고서  
					
					<button id="printBtn2" class="btn btn-sm btn-outline-info" style="margin-left: 2px;">프린트</button>
				</h2>
				
				<div class="row row2">
					<div class="box box-a">LPG 재고 현황</div>
					<div class="box box-b"><input type="text" id="datepicker2" readonly>
					<button id="datepickerBtn2" type="button" class="btn btn-sm btn-outline-dark rounded-pill">날짜</button></div>
					<div class="box box-c" style="text-align:right;">보고자: (주)파이어독스</div>
				</div>
				
				<div style="margin-top: 20px;">
					<h6>LPG 재고 현황</h6>
					<div class="left-box" id="tankText2"></div>
					<div class="right-box">
						<div class="clear:both" id="piechart" style="width:500px; height:350px; margin-top:-230px"></div>
					</div>
				</div>
				
				
				<div style="clear: both;" id="tankText3">
					<h6 style="margin-top: 20px;">LPG 재고현황 분석</h6>
					<div>운영 중인 총 탱크 수는 <span style="color: red;" id="stockSpan1"></span>대이며 전체 탱크의 총 내용적은 <span style="color: red;" id="stockSpan2"></span>kg입니다.
					이중 <span style="color: red;" id="stockSpan3"></span>kg의 LPG가 소형저장탱크에 저장되어 있으며 최대 저장 용량을 85% 계산했을 때 <span style="color: red;" id="stockSpan4"></span>kg을 추가로 더 저장할 수 있습니다.</div>
				</div>
				
				
				<div class="row row2" style="padding-top: 60px;">
					<div class="box box-a" style="padding-top: 8px;">보유탱크 현황</div>
					<div class="box box-b" id="todayDate"></div>
					<div class="box box-c"></div>
				</div>
				
				<div style="clear:both">
					<h6 class="subText">잔량별 탱크 보유 현황</h6>
					<div>
						<table class="table" id="printRemainTable">
							<thead>
								<tr>
									<th>잔량(%)</th>
									<th>수량(대)</th>
								</tr>
							</thead>
							<tbody id="printRemainData" style="display: table;">
							</tbody>
						</table>
					</div>
					
					<h6 class="subText">용량별 탱크 보유 현황</h6>
					<div>
						<table class="table" id="printWeightTable">
							<colgroup>
								<col style="width: 20%;">
								<col style="width: 80%;">
							</colgroup>
							<thead>
								<tr>
									<th>용량(kg)</th>
									<th>수량(대)</th>
								</tr>
							</thead>
							<tbody id="printWeightData">
							</tbody>
						</table>
					</div>
					
					<h6 class="subText">제조사별 탱크 보유 현황</h6>
					<div>
						<table class="table" id="printManuTable">
							<thead>
							</thead>
							<tbody id="printManuData">
							</tbody>
						</table>
					</div>
				</div>
				
			</div>
		</div>
	</div>
	

	<!-- JavaScript Libraries -->
	<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
	<script src="dashman/lib/chart/chart.min.js"></script>
	<script src="dashman/lib/easing/easing.min.js"></script>
	<script src="dashman/lib/waypoints/waypoints.min.js"></script>
	<script src="dashman/lib/owlcarousel/owl.carousel.min.js"></script>
	<script src="dashman/lib/tempusdominus/js/moment.min.js"></script>
	<script src="dashman/lib/tempusdominus/js/moment-timezone.min.js"></script>
	<script src="dashman/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>
	
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>

	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.10.0/js/bootstrap-datepicker.min.js"></script>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.10.0/css/bootstrap-datepicker.min.css">
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.10.0/locales/bootstrap-datepicker.ko.min.js"></script>

	<!-- Print Data Script -->
	<script src="dashman/js/printData.js"></script>
</body>
</html>
