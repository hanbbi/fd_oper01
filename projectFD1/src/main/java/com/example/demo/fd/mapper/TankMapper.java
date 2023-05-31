package com.example.demo.fd.mapper;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface TankMapper {

	HashMap<String, Object> tankStock(HashMap<String, Object> params);
	
	List<HashMap<String, Object>> tankWeight(HashMap<String, Object> params);
	List<HashMap<String, Object>> tankRemain(HashMap<String, Object> params);
	List<HashMap<String, Object>> tankManu(HashMap<String, Object> params);
	
	List<HashMap<String, Object>> tankDaily(HashMap<String, Object> params);
	List<HashMap<String, Object>> tankMonthly(HashMap<String, Object> params);
	
	List<HashMap<String, Object>> tankError(HashMap<String, Object> params);
	List<HashMap<String, Object>> tankErrorT(HashMap<String, Object> params);
	List<HashMap<String, Object>> tankErrorB(HashMap<String, Object> params);
	List<HashMap<String, Object>> tankErrorG(HashMap<String, Object> params);
}
