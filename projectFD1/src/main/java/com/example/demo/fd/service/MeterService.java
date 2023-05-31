package com.example.demo.fd.service;

import java.util.HashMap;
import java.util.List;

public interface MeterService {
	List<HashMap<String, Object>> meterDaily(HashMap<String, Object> params);
	List<HashMap<String, Object>> meterMonthly(HashMap<String, Object> params);

	List<HashMap<String, Object>> meterType(HashMap<String, Object> params);

	List<HashMap<String, Object>> meterError(HashMap<String, Object> params);
	List<HashMap<String, Object>> meterErrorT(HashMap<String, Object> params);
	List<HashMap<String, Object>> meterErrorM(HashMap<String, Object> params);
}
