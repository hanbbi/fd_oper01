package com.example.demo.fd.service;

import java.util.HashMap;
import java.util.List;

public interface CompService {
	CompVO selectOne(String compId);
	List<CompVO> compList();
	List<HashMap<String, Object>> compMap();
}
