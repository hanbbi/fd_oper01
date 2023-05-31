package com.example.demo.fd.mapper;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.fd.service.CompVO;

@Mapper
public interface CompMapper {
	CompVO selectByCompId(String compId);
	
	List<CompVO> listAll();
	
	List<HashMap<String, Object>> compMap();
	
	List<HashMap<String, Object>> testMap(HashMap<String, Object> params);
	
	String fnCompany(HashMap<String, Object> params);
}
