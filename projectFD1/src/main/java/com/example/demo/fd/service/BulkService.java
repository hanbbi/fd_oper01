package com.example.demo.fd.service;

import java.util.HashMap;
import java.util.List;

public interface BulkService {
	List<HashMap<String, Object>>bulkDailyKg(HashMap<String, Object> params);
	List<HashMap<String, Object>>bulkMonthlyKg(HashMap<String, Object> params);

	List<HashMap<String, Object>>bulkDailyLiter(HashMap<String, Object> params);
	List<HashMap<String, Object>>bulkMonthlyLiter(HashMap<String, Object> params);

	List<HashMap<String, Object>>bulkGps(HashMap<String, Object> params);
	List<HashMap<String, Object>>bulkGpsTable(HashMap<String, Object> params);
}
