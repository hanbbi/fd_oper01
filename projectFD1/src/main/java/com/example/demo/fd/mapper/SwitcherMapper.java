package com.example.demo.fd.mapper;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SwitcherMapper {
	List<HashMap<String, Object>> switcherStock(HashMap<String, Object> params);
	
	List<HashMap<String, Object>> switcherDaily(HashMap<String, Object> params);
	List<HashMap<String, Object>> switcherMonthly(HashMap<String, Object> params);
	
	List<HashMap<String, Object>> switcherError(HashMap<String, Object> params);
	List<HashMap<String, Object>> switcherErrorB(HashMap<String, Object> params);
	List<HashMap<String, Object>> switcherErrorT(HashMap<String, Object> params);
}
