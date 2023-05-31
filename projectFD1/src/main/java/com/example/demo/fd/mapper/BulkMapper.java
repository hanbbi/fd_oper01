package com.example.demo.fd.mapper;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface BulkMapper {
	public List<HashMap<String, Object>> bulkDailyKg(HashMap<String, Object> params);
	public List<HashMap<String, Object>> bulkMonthlyKg(HashMap<String, Object> params);

	public List<HashMap<String, Object>> bulkDailyLiter(HashMap<String, Object> params);
	public List<HashMap<String, Object>> bulkMonthlyLiter(HashMap<String, Object> params);

	public List<HashMap<String, Object>> bulkGps(HashMap<String, Object> params);
	public List<HashMap<String, Object>> bulkGpsTable(HashMap<String, Object> params);
}
