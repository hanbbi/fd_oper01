<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org">

<head>
<meta charset="utf-8">
<title>운영 현황</title>
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

<!-- 카카오 지도 API -->
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=2183d5fe229d3e5035a321c5544b25c0" defer></script>
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=2183d5fe229d3e5035a321c5544b25c0&libraries=services,drawing"></script>

</head>

<body style="background: #f3f6f9;">
	<div class="container-fluid position-relative bg-light d-flex p-0" style="background: #f3f6f9;">
		<!-- Spinner Start -->
		<div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
			<div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
				<span class="sr-only">Loading...</span>
			</div>
		</div>
		<!-- Spinner End -->
		
		<!-- Content Start -->
		<div id="content">

			<!-- Chart Start -->
			<div class="container-fluid m-0 p-0">
				<p class="m-0 p-1 bg-dark" style="color: white; font-size: xx-large;"><a type="button" class="btn btn-square btn-info" href="/" style="margin-left: 20px;"><i class="fa fa-home"></i></a> 운영현황
					<strong style="align-content: flex-end;">${compId}</strong>
				</p>
			
				<div class="row g-4 pt-0">
					<div class="col-sm-12 col-xl-6 p-0 border-start border-3" style="height: 500px;" id="detailCol1">
						<div class="bg-light rounded h-100 p-4" style="margin-left: 20px">
							<h3 class="mb-4">소형저장탱크 현황
								<button data-bs-toggle="modal" data-bs-target="#tankModal" class="btn btn-outline-primary" id="tankErrorBtn">장애</button>
								<button id="printBtn" class="btn btn-outline-info">프린트</button>
								<div class="modal fade" id="tankModal" aria-labelledby="tankModalLabel" aria-hidden="true">
									<div class="modal-dialog modal-dialog-scrollable modal-lg">
										<div class="modal-content">
											<div class="modal-header">
												<h5>소형저장탱크 장애 리스트</h5>
											</div>
											<div class="modal-body">
												<div class="table-responsive">
													<table class="table table-bordered" id="tankError">
														<thead>
															<tr>
																<th>장애유형</th>
																<th>장애수량</th>
															</tr>
														</thead>
														<tbody id="tankErrorData">
														</tbody>
													</table>
												</div>
												<div class="table-responsive" style="max-height: 600px; overflow: auto;">
													<table class="table table-bordered" id="tankErrorDetail">
														<thead>
															<tr>
																<th>일련번호</th>
																<th>판매점</th>
																<th>거래처명</th>
																<th>최종검침시간</th>
																<th>잔량(%)</th>
																<th>배터리(%)</th>
															</tr>
														</thead>
														<tbody id="tankErrorDetailData">
														</tbody>
													</table>
												</div>
											</div>
											<div class="modal-footer">
											  	<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
											</div>
										</div>
									</div>
								</div>
							</h3>
							<div class="row">
								<div id="printContent detailCol1-1" class="col">
									<h6>소형저장탱크 재고  <input type="text" id="datepicker" readonly><button id="datepickerBtn" type="button" class="btn btn-sm btn-outline-dark rounded-pill">날짜</button></h6>
									<div class="tankCol">
										<div id="chartContainer">
											<div class="chart1Div" id="chart1Div" style="width:450px; height:350px;"></div>
										</div>
										<div id="tankText" style="font-size: 14px; color: black;">
										</div>
									</div>
								</div>
								<div class="col" id="detailCol1-2">
									<nav>
										<div class="nav nav-tabs" id="nav-tab" role="tablist">
		                                    <button class="nav-link active" id="nav-tankWeight-tab" data-bs-toggle="tab"
		                                        data-bs-target="#nav-tankWeight" type="button" role="tab" aria-controls="nav-tankWeight"
		                                        aria-selected="true">용량별</button>
		                                    <button class="nav-link" id="nav-tankRemain-tab" data-bs-toggle="tab"
		                                        data-bs-target="#nav-tankRemain" type="button" role="tab"
		                                        aria-controls="nav-tankRemain" aria-selected="false">잔량별</button>
		                                    <button class="nav-link" id="nav-tankManu-tab" data-bs-toggle="tab"
		                                        data-bs-target="#nav-tankManu" type="button" role="tab"
		                                        aria-controls="nav-tankManu" aria-selected="false">제조사별</button>
		                                </div>
									</nav>
									<div class="tab-content" id="nav-tabContent">
										<div id="nav-tankWeight" class="tab-pane fade show active" role="tabpanel" aria-labelledby="nav-tankWeight-tab">
											<div class="table-responsive" style="height: 350px;">
												<table class="table table-bordered" id="tankWeight">
													<thead>
														<tr>
															<th>용량(kg)</th>
															<th>운영수량(대)</th>
														</tr>
													</thead>
													<tbody id="tankWeightData">
													</tbody>
												</table>
											</div>
										</div>
										<div id="nav-tankRemain" class="tankTab-content tab-pane fade" role="tabpanel" aria-labelledby="nav-tankRemain-tab">
											<div class="table-responsive" style="height: 350px;">
												<table class="table table-bordered" id="tankRemain">
													<thead>
														<tr>
															<th>잔량(%)</th>
															<th>운영수량(대)</th>
														</tr>
													</thead>
													<tbody id="tankRemainData">
													</tbody>
												</table>
											</div>
										</div>
										<div id="nav-tankManu" class="tankTab-content tab-pane fade" role="tabpanel" aria-labelledby="nav-tankManu-tab">
											<div class="table-responsive" style="height: 350px;">
												<table class="table table-bordered" id="tankManu">
													<thead>
														<tr>
															<th>제조사</th>
															<th>운영수량(대)</th>
														</tr>
													</thead>
													<tbody id="tankManuData">
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-xl-6 p-0 border-end border-3" style="height: 500px;" id="detailCol2">
						<div class="bg-light rounded h-100 p-4">
							<h6>소형저장탱크 충전량 및 소비량</h6>
							<nav>
								<div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button class="nav-link active" id="nav-tankDaily-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-tankDaily" type="button" role="tab" aria-controls="nav-tankDaily"
                                        aria-selected="true">일별</button>
                                    <button class="nav-link" id="nav-tankMonthly-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-tankMonthly" type="button" role="tab"
                                        aria-controls="nav-tankMonthly" aria-selected="false">월별</button>
                                </div>
							</nav>
							<div class="tab-content" id="nav-tabContent">
								<div id="nav-tankDaily" class="tab-pane fade show active" role="tabpanel" aria-labelledby="nav-tankDaily-tab">
									<canvas id="tank-chart2" style="margin-left: 150px;"></canvas>
									<div class="table-responsive">
										<table class="table" id="tankDailyTable">
											<thead>
												<tr>
													<th>공급개소</th>
													<th><p id="tankChargeP"></p><span class="tank-text">충전량(kg)</span></th>
													<th><p id="tankUsedP"></p><span class="tank-text">소비량(kg)</span></th>
												</tr>
											</thead>
											<tbody id="tankDailyData">
											</tbody>
										</table>
									</div>
								</div>
								<div id="nav-tankMonthly" class="tab-pane fade" role="tabpanel" aria-labelledby="nav-tankMonthly-tab">
									<canvas id="tank-chart22" style="margin-left: 150px;"></canvas>
									<div class="table-responsive">
										<table class="table" id="tankMonthlyTable">
											<thead>
												<tr>
													<th>공급개소</th>
													<th><p id="tankChargeP"></p><span class="tank-text">충전량(kg)</span></th>
													<th><p id="tankUsedP"></p><span class="tank-text">소비량(kg)</span></th>
												</tr>
											</thead>
											<tbody id="tankMonthlyData">
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-xl-6 p-0 mt-0 border-top border-start border-3" style="height: 500px;" id="detailCol3">
						<div class="bg-light rounded h-100 p-4" style="margin-left: 20px">
							<h3 class="mb-4">용기 현황
								<button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#switcherModal" id="switcherErrorBtn">장애</button>
								<div class="modal fade" id="switcherModal" aria-labelledby="switcherModalLabel" aria-hidden="true">
									<div class="modal-dialog modal-dialog-scrollable modal-lg">
										<div class="modal-content">
											<div class="modal-header">
												<h5>용기 장애 리스트</h5>
											</div>
											<div class="modal-body">
												<div class="table-responsive">
													<table class="table table-bordered" id="switcherError">
														<thead>
															<tr>
																<th>장애유형</th>
																<th>장애수량</th>
															</tr>
														</thead>
														<tbody id="switcherErrorData">
														</tbody>
													</table>
												</div>
												<div class="table-responsive" style="max-height: 600px; overflow: auto;">
													<table class="table table-bordered" id="switcherErrorDetail">
														<thead>
															<tr>
																<th>일련번호</th>
																<th>판매점</th>
																<th>거래처명</th>
																<th>최종검침시간</th>
																<th>상태정보</th>
																<th>배터리(%)</th>
															</tr>
														</thead>
														<tbody id="switcherErrorDetailData">
														</tbody>
													</table>
												</div>
											</div>
											<div class="modal-footer">
											  	<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
											</div>
										</div>
									</div>
								</div>
							</h3>
							<div class="row">
								<div class="col" id="detailCol3-1">
									<h6 class="mb-4">용기 재고</h6>
									<canvas id="switcher-bar-chart" style="height: 300px;"></canvas>
								</div>
								<div class="col" id="detailCol3-2">
									<h6 class="mb-4">용량별 용기</h6>
									<div class="table-responsive" style="height: 350px; margin-top: 56px;">
										<table class="table table-bordered" id="switcherVolumeTable">
											<thead>
												<tr>
													<th>용량(kg)</th>
													<th>정상수량(대)</th>
													<th>절체수량(대)</th>
													<th>합계(대)</th>
												</tr>
											</thead>
											<tbody>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-xl-6 p-0 mt-0 border-top border-end border-3" style="height: 500px;" id="detailCol4">
						<div class="bg-light rounded h-100 p-4">
							<h6>용기 교체수량</h6>
							<nav>
								<div class="nav nav-tabs" id="nav-tab" role="tablist">
									<button class="nav-link active" id="nav-switcherDaily-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-switcherDaily" type="button" role="tab" aria-controls="nav-switcherDaily"
                                        aria-selected="true">일별</button>
                                    <button class="nav-link" id="nav-switcherMonthly-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-switcherMonthly" type="button" role="tab"
                                        aria-controls="nav-switcherMonthly" aria-selected="false">월별</button>
								</div>
							</nav>
							<div class="tab-content" id="nav-tabContent" style="margin-top: 20px;">
								<div id="nav-switcherDaily" class="tab-pane fade show active" role="tabpanel" aria-labelledby="nav-switcherDaily-tab">
									<canvas id="switcher-line-chart" style="margin-left: 150px;"></canvas>
									<div class="table-responsive" style="height: 120px;">
										<table class="table" id="switcherDailyTable">
											<thead>
												<tr>
													<th><p id="switcherCntP"></p><span class="switcher-text">교체수량</span></th>
												</tr>
											</thead>
											<tbody id="switcherDailyData">
											</tbody>
										</table>
									</div>
								</div>
								<div id="nav-switcherMonthly" class="tab-pane fade" role="tabpanel" aria-labelledby="nav-switcherMonthly-tab">
									<canvas id="switcher-line-chart2" style="margin-left: 150px;"></canvas>
									<div class="table-responsive" style="height: 120px;">
										<table class="table" id="switcherMonthlyTable">
											<thead>
												<tr>
													<th><p id="switcherCntP"></p><span class="switcher-text">교체수량</span></th>
												</tr>
											</thead>
											<tbody id="switcherMonthlyData">
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-xl-6 p-0 mt-0 border-top border-start border-3" style="height: 500px;" id="detailCol5">
						<div class="bg-light rounded h-100 p-4" style="margin-left: 20px">
							<h3 class="mb-4">계량기 현황
								<button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#meterModal" id="meterErrorBtn">장애</button>
								<div class="modal fade" id="meterModal" aria-labelledby="meterModalLabel" aria-hidden="true">
									<div class="modal-dialog modal-dialog-scrollable modal-lg">
										<div class="modal-content">
											<div class="modal-header">
												<h5>계량기 장애 리스트</h5>
											</div>
											<div class="modal-body">
												<div class="table-responsive">
													<table class="table table-bordered" id="meterError">
														<thead>
															<tr>
																<th>장애유형</th>
																<th>장애수량</th>
															</tr>
														</thead>
														<tbody id="meterErrorData">
														</tbody>
													</table>
												</div>
												<div class="table-responsive" style="max-height: 600px; overflow: auto;">
													<table class="table table-bordered" id="meterErrorDetail">
														<thead>
															<tr>
																<th>일련번호</th>
																<th>판매점</th>
																<th>거래처명</th>
																<th>최종수신시간</th>
																<th>현재값</th>
															</tr>
														</thead>
														<tbody id="meterErrorDetailData">
														</tbody>
													</table>
												</div>
											</div>
											<div class="modal-footer">
											  	<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
											</div>
										</div>
									</div>
								</div>
							</h3>
							
							<div class="row">
								<div class="col" id="detailCol5-1">
									<h6 class="mb-4">계량기 사용량</h6>
									<nav>
										<div class="nav nav-tabs" id="nav-tab" role="tablist">
											<button class="nav-link active" id="nav-meterDaily-tab" data-bs-toggle="tab"
		                                        data-bs-target="#nav-meterDaily" type="button" role="tab" aria-controls="nav-meterDaily"
		                                        aria-selected="true">일별</button>
		                                    <button class="nav-link" id="nav-meterMonthly-tab" data-bs-toggle="tab"
		                                        data-bs-target="#nav-meterMonthly" type="button" role="tab"
		                                        aria-controls="nav-meterMonthly" aria-selected="false">월별</button>
										</div>
									</nav>
									<div class="tab-content" id="nav-tabContent">
										<div id="nav-meterDaily" class="tab-pane fade show active" role="tabpanel" aria-labelledby="nav-meterDaily-tab">
											<canvas id="meter-line-chart" style="margin-left: 50px; height: 260px;"></canvas>
											<div class="table-responsive" >
												<table class="table" id="meterDailyTable">
													<thead>
														<tr>
															<th><p id="meterCntP"></p><span class="meter-text">사용량</span></th>
														</tr>
													</thead>
													<tbody id="meterDailyData">
													</tbody>
												</table>
											</div>
										</div>
										<div id="nav-meterMonthly" class="tab-pane fade" role="tabpanel" aria-labelledby="nav-meterMonthly-tab">
											<canvas id="meter-line-chart2" style="margin-left: 50px; height: 260px;"></canvas>
											<div class="table-responsive" style="height: 120px;">
												<table class="table" id="meterMonthlyTable">
													<thead>
														<tr>
															<th><p id="meterCntP"></p><span class="meter-text">사용량</span></th>
														</tr>
													</thead>
													<tbody id="meterMonthlyData">
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
								<div class="col" id="detailCol5-2">
									<h6 class="mb-4">타입별 계량기</h6>
									<div class="table-responsive" style="height: 350px; margin-top: 10px;">
										<table class="table table-bordered" id="meterType">
											<thead>
												<tr>
													<th>타입</th>
													<th>수량(대)</th>
												</tr>
											</thead>
											<tbody>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-xl-6 p-0 mt-0 border-top border-end border-3" style="height: 500px;" id="detailCol6">
						<div class="bg-light rounded h-100 p-4">
							<h3 class="mb-4">벌크로리 현황</h3>
							<div class="row">
								<div class="col" id="detailCol6-1">
									<h6 class="mb-4">벌크로리 차량 공급량 <button id="kgBtn" class="btn btn-sm btn-outline-primary active">KG</button> <button id="literBtn" class="btn btn-sm btn-outline-primary">Liter</button></h6>
									<nav>
										<div class="nav nav-tabs" id="nav-tab" role="tablist">
											<button class="nav-link active" id="nav-bulkKgDaily-tab" data-bs-toggle="tab"
		                                        data-bs-target="#nav-bulkKgDaily" type="button" role="tab" aria-controls="nav-bulkKgDaily"
		                                        aria-selected="true">일별</button>
		                                    <button class="nav-link" id="nav-bulkKgMonthly-tab" data-bs-toggle="tab"
		                                        data-bs-target="#nav-bulkKgMonthly" type="button" role="tab"
		                                        aria-controls="nav-bulkKgMonthly" aria-selected="false">월별</button>
										</div>
									</nav>
									<div class="tab-content" id="nav-tabContent" style="width: 470px;">
										<div id="nav-bulkKgDaily" class="tab-pane fade show active" role="tabpanel" aria-labelledby="nav-bulkKgDaily-tab">
											<canvas id="bulk-line-chart" style="margin-left: 50px;"></canvas>
											<div class="table-responsive">
												<table class="table" id="bulkDailyTableKg">
													<thead>
														<tr>
															<th>공급개소</th>
															<th><p id="bulkCntP"></p><span class="bulk-text">공급량</span></th>
														</tr>
													</thead>
													<tbody id="bulkDailyDataKg">
													</tbody>
												</table>
											</div>
										</div>
										<div id="nav-bulkKgMonthly" class="tab-pane fade" role="tabpanel" aria-labelledby="nav-bulkKgMonthly-tab">
											<canvas id="bulk-line-chart2" style="margin-left: 50px;"></canvas>
											<div class="table-responsive">
												<table class="table" id="bulkMonthlyTableKg">
													<thead>
														<tr>
															<th>공급개소</th>
															<th><p id="bulkCntP"></p><span class="bulk-text">공급량</span></th>
														</tr>
													</thead>
													<tbody id="bulkMonthlyDataKg">
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
								<div class="col" id="detailCol6-2">
									<h6 class="mb-4">벌크로리 GPS</h6>
									<div>
										<div id="bulkGps" style="width:400px; height:230px;"></div>
										<div class="table-responsive" style="margin-top: 10px; height: 120px; overflow-y: scroll;" id="bulkGpsDiv">
											<table class="table" id="bulkGpsTable">
												<thead>
													<tr>
														<th>차량명</th>
														<th>현재위치</th>
													</tr>
												</thead>
												<tbody id="bulkGpsData">
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- Chart End -->
		</div>
		<!-- Content End -->


		<!-- Back to Top -->
		<a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
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

	
	<!-- Template Javascript -->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>

	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.10.0/js/bootstrap-datepicker.min.js"></script>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.10.0/css/bootstrap-datepicker.min.css">
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.10.0/locales/bootstrap-datepicker.ko.min.js"></script>
	
	<script src="dashman/js/main.js"></script>
	<script src="dashman/js/tankData.js"></script>
	<script src="dashman/js/switcherData.js"></script>
	<script src="dashman/js/meterData.js"></script>
	<script src="dashman/js/bulkData.js"></script>

</body>

</html>