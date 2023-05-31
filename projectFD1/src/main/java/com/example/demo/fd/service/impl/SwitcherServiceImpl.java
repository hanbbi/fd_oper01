package com.example.demo.fd.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.fd.mapper.CompMapper;
import com.example.demo.fd.mapper.SwitcherMapper;
import com.example.demo.fd.service.SwitcherService;

@Service
public class SwitcherServiceImpl implements SwitcherService {
	private CompMapper compMapper;
	private SwitcherMapper switcherMapper;
	
	public SwitcherServiceImpl(CompMapper compMapper, SwitcherMapper switcherMapper) {
		this.compMapper = compMapper;
		this.switcherMapper = switcherMapper;
	}

	@Override
	public List<HashMap<String, Object>> switcherStock(HashMap<String, Object> params) {
		params.put("gcomp_id", compMapper.fnCompany(params));
		System.out.println("switcherStock: " + switcherMapper.switcherStock(params));
		return switcherMapper.switcherStock(params);
	}

	@Override
	public List<HashMap<String, Object>> switcherDaily(HashMap<String, Object> params) {
		params.put("gcomp_id", compMapper.fnCompany(params));
		System.out.println("switcherDaily: " + switcherMapper.switcherDaily(params));
		return switcherMapper.switcherDaily(params);
	}

	@Override
	public List<HashMap<String, Object>> switcherMonthly(HashMap<String, Object> params) {
		params.put("gcomp_id", compMapper.fnCompany(params));
		System.out.println("switcherMonthly: " + switcherMapper.switcherMonthly(params));
		return switcherMapper.switcherMonthly(params);
	}

	@Override
	public List<HashMap<String, Object>> switcherError(HashMap<String, Object> params) {
		params.put("gcomp_id", compMapper.fnCompany(params));
		System.out.println("switcherError: " + switcherMapper.switcherError(params));
		return switcherMapper.switcherError(params);
	}

	@Override
	public List<HashMap<String, Object>> switcherErrorB(HashMap<String, Object> params) {
		params.put("gcomp_id", compMapper.fnCompany(params));
		System.out.println("switcherErrorB: " + switcherMapper.switcherErrorB(params));
		return switcherMapper.switcherErrorB(params);
	}

	@Override
	public List<HashMap<String, Object>> switcherErrorT(HashMap<String, Object> params) {
		params.put("gcomp_id", compMapper.fnCompany(params));
		System.out.println("switcherErrorT: " + switcherMapper.switcherErrorT(params));
		return switcherMapper.switcherErrorT(params);
	}

}
