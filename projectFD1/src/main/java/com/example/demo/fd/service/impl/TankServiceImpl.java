package com.example.demo.fd.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.fd.mapper.CompMapper;
import com.example.demo.fd.mapper.TankMapper;
import com.example.demo.fd.service.TankService;

@Service
public class TankServiceImpl implements TankService {
	private TankMapper tankMapper;
	private CompMapper compMapper;
	
	public TankServiceImpl(TankMapper tankMapper, CompMapper compMapper) {
		this.tankMapper = tankMapper;
		this.compMapper = compMapper;
	}

	@Override
	public HashMap<String, Object> tankStock(HashMap<String, Object> params) {
		params.put("gcomp_id", compMapper.fnCompany(params));
		System.out.println("tankStock: " + tankMapper.tankStock(params));
		return tankMapper.tankStock(params);
	}

	@Override
	public List<HashMap<String, Object>> tankWeight(HashMap<String, Object> params) {
		params.put("gcomp_id", compMapper.fnCompany(params));
		System.out.println("tankWeight: " + tankMapper.tankWeight(params));
		return tankMapper.tankWeight(params);
	}

	@Override
	public List<HashMap<String, Object>> tankRemain(HashMap<String, Object> params) {
		params.put("gcomp_id", compMapper.fnCompany(params));
		System.out.println("tankRemain: " + tankMapper.tankRemain(params));
		return tankMapper.tankRemain(params);
	}

	@Override
	public List<HashMap<String, Object>> tankManu(HashMap<String, Object> params) {
		params.put("gcomp_id", compMapper.fnCompany(params));
		System.out.println("tankManu: " + tankMapper.tankManu(params));
		return tankMapper.tankManu(params);
	}

	@Override
	public List<HashMap<String, Object>> tankDaily(HashMap<String, Object> params) {
		params.put("gcomp_id", compMapper.fnCompany(params));
		System.out.println("tankDaily: " + tankMapper.tankDaily(params));
		return tankMapper.tankDaily(params);
	}

	@Override
	public List<HashMap<String, Object>> tankMonthly(HashMap<String, Object> params) {
		params.put("gcomp_id", compMapper.fnCompany(params));
		System.out.println("tankMonthly: " + tankMapper.tankMonthly(params));
		return tankMapper.tankMonthly(params);
	}

	@Override
	public List<HashMap<String, Object>> tankError(HashMap<String, Object> params) {
		params.put("gcomp_id", compMapper.fnCompany(params));
		System.out.println("tankError: " + tankMapper.tankError(params));
		return tankMapper.tankError(params);
	}

	@Override
	public List<HashMap<String, Object>> tankErrorT(HashMap<String, Object> params) {
		params.put("gcomp_id", compMapper.fnCompany(params));
		System.out.println("tankErrorT: " + tankMapper.tankErrorT(params));
		return tankMapper.tankErrorT(params);
	}

	@Override
	public List<HashMap<String, Object>> tankErrorB(HashMap<String, Object> params) {
		params.put("gcomp_id", compMapper.fnCompany(params));
		System.out.println("tankErrorB: " + tankMapper.tankErrorB(params));
		return tankMapper.tankErrorB(params);
	}

	@Override
	public List<HashMap<String, Object>> tankErrorG(HashMap<String, Object> params) {
		params.put("gcomp_id", compMapper.fnCompany(params));
		System.out.println("tankErrorG: " + tankMapper.tankErrorG(params));
		return tankMapper.tankErrorG(params);
	}
}
