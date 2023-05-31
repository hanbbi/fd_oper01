<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">

<title>업체 리스트</title>

<!-- Custom fonts for this template -->
<link href="sb-admin/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

<!-- Custom styles for this template -->
<link href="sb-admin/css/sb-admin-2.min.css" rel="stylesheet">

<!-- Custom styles for this page -->
<link href="sb-admin/vendor/datatables/dataTables.bootstrap4.min.css" rel="stylesheet">

</head>

<body id="page-top">

	<!-- Page Wrapper -->
	<div id="wrapper">

		<!-- Content Wrapper -->
		<div id="content-wrapper" class="d-flex flex-column">

			<!-- Main Content -->
			<div id="content">

				<!-- Begin Page Content -->
				<div class="container-fluid m-0 p-0">

					<!-- DataTales Example -->
					<div class="card shadow m-0">
						<div class="card-header py-3">
							<h6 class="m-0 font-weight-bold text-primary">업체 리스트</h6>
						</div>
						<div class="card-body">
							<div class="table-responsive">
								<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
											<th>순번</th>
											<th>판매점</th>
											<th>회사 대표자</th>
											<th>판매점코드</th>
											<th>회사대표번호</th>
											<th>회사주소</th>
										</tr>
									</thead>
									<tbody id="compTable">
									</tbody>
								</table>
							</div>
						</div>
					</div>

				</div>
				<!-- /.container-fluid -->

			</div>
			<!-- End of Main Content -->

		</div>
		<!-- End of Content Wrapper -->

	</div>
	<!-- End of Page Wrapper -->

	<!-- Scroll to Top Button-->
	<a class="scroll-to-top rounded" href="#page-top"> <i class="fas fa-angle-up"></i>
	</a>

	<!-- Bootstrap core JavaScript-->
	<script src="sb-admin/vendor/jquery/jquery.min.js"></script>
	<script src="sb-admin/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

	<!-- Core plugin JavaScript-->
	<script src="sb-admin/vendor/jquery-easing/jquery.easing.min.js"></script>

	<!-- Custom scripts for all pages-->
	<script src="sb-admin/js/sb-admin-2.min.js"></script>

	<!-- Page level plugins -->
	<script src="sb-admin/vendor/datatables/jquery.dataTables.min.js"></script>
	<script src="sb-admin/vendor/datatables/dataTables.bootstrap4.min.js"></script>

	<!-- Page level custom scripts -->
	<script src="sb-admin/js/demo/datatables-demo.js"></script>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</body>

</html>