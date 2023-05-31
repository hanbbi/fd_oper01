package com.example.demo.fd.mapper;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MeterMapper {
	public List<HashMap<String, Object>> meterDaily(HashMap<String, Object> params);
	public List<HashMap<String, Object>> meterMonthly(HashMap<String, Object> params);

	public List<HashMap<String, Object>> meterType(HashMap<String, Object> params);

	public List<HashMap<String, Object>> meterError(HashMap<String, Object> params);
	public List<HashMap<String, Object>> meterErrorT(HashMap<String, Object> params);
	public List<HashMap<String, Object>> meterErrorM(HashMap<String, Object> params);
}
