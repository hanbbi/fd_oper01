package com.example.demo.fd.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.fd.mapper.CompMapper;
import com.example.demo.fd.service.CompService;
import com.example.demo.fd.service.CompVO;

@Service
public class CompServiceImpl implements CompService {
	private CompMapper compMapper;
	
	public CompServiceImpl(CompMapper compMapper) {
		this.compMapper = compMapper;
	}

	@Override
	public CompVO selectOne(String compId) {
		return compMapper.selectByCompId(compId);
	}

	@Override
	public List<CompVO> compList() {
		System.out.println("CompService");
		return compMapper.listAll();
	}

	@Override
	public List<HashMap<String, Object>> compMap() {
		return compMapper.compMap();
	}
}
