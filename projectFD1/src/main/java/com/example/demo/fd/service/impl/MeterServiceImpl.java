package com.example.demo.fd.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.fd.mapper.CompMapper;
import com.example.demo.fd.mapper.MeterMapper;
import com.example.demo.fd.service.MeterService;

@Service
public class MeterServiceImpl implements MeterService {
	private CompMapper compMapper;
	private MeterMapper meterMapper;
	
	public MeterServiceImpl(CompMapper compMapper, MeterMapper meterMapper) {
		this.compMapper = compMapper;
		this.meterMapper = meterMapper;
	}

	@Override
	public List<HashMap<String, Object>> meterDaily(HashMap<String, Object> params) {
		params.put("gcomp_id", compMapper.fnCompany(params));
		System.out.println("meterDaily: " + meterMapper.meterDaily(params));
		return meterMapper.meterDaily(params);
	}

	@Override
	public List<HashMap<String, Object>> meterMonthly(HashMap<String, Object> params) {
		params.put("gcomp_id", compMapper.fnCompany(params));
		System.out.println("meterMonthly: " + meterMapper.meterMonthly(params));
		return meterMapper.meterMonthly(params);
	}

	@Override
	public List<HashMap<String, Object>> meterType(HashMap<String, Object> params) {
		params.put("gcomp_id", compMapper.fnCompany(params));
		System.out.println("meterType: " + meterMapper.meterType(params));
		return meterMapper.meterType(params);
	}

	@Override
	public List<HashMap<String, Object>> meterError(HashMap<String, Object> params) {
		params.put("gcomp_id", compMapper.fnCompany(params));
		System.out.println("meterError: " + meterMapper.meterError(params));
		return meterMapper.meterError(params);
	}

	@Override
	public List<HashMap<String, Object>> meterErrorT(HashMap<String, Object> params) {
		params.put("gcomp_id", compMapper.fnCompany(params));
		System.out.println("meterErrorT: " + meterMapper.meterErrorT(params));
		return meterMapper.meterErrorT(params);
	}

	@Override
	public List<HashMap<String, Object>> meterErrorM(HashMap<String, Object> params) {
		params.put("gcomp_id", compMapper.fnCompany(params));
		System.out.println("meterErrorM: " + meterMapper.meterErrorM(params));
		return meterMapper.meterErrorM(params);
	}

}
