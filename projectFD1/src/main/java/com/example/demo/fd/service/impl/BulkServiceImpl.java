package com.example.demo.fd.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.fd.mapper.BulkMapper;
import com.example.demo.fd.mapper.CompMapper;
import com.example.demo.fd.service.BulkService;

@Service
public class BulkServiceImpl implements BulkService {
	private CompMapper compMapper;
	private BulkMapper bulkMapper;
	
	public BulkServiceImpl(CompMapper compMapper, BulkMapper bulkMapper) {
		this.compMapper = compMapper;
		this.bulkMapper = bulkMapper;
	}

	@Override
	public List<HashMap<String, Object>> bulkDailyKg(HashMap<String, Object> params) {
		params.put("gcomp_id", compMapper.fnCompany(params));
		System.out.println("bulkDailyKg: " + bulkMapper.bulkDailyKg(params));
		return bulkMapper.bulkDailyKg(params);
	}

	@Override
	public List<HashMap<String, Object>> bulkMonthlyKg(HashMap<String, Object> params) {
		params.put("gcomp_id", compMapper.fnCompany(params));
		System.out.println("bulkMonthlyKg: " + bulkMapper.bulkMonthlyKg(params));
		return bulkMapper.bulkMonthlyKg(params);
	}

	@Override
	public List<HashMap<String, Object>> bulkDailyLiter(HashMap<String, Object> params) {
		params.put("gcomp_id", compMapper.fnCompany(params));
		System.out.println("bulkDailyLiter: " + bulkMapper.bulkDailyLiter(params));
		return bulkMapper.bulkDailyLiter(params);
	}

	@Override
	public List<HashMap<String, Object>> bulkMonthlyLiter(HashMap<String, Object> params) {
		params.put("gcomp_id", compMapper.fnCompany(params));
		System.out.println("bulkMonthlyLiter: " + bulkMapper.bulkMonthlyLiter(params));
		return bulkMapper.bulkMonthlyLiter(params);
	}

	@Override
	public List<HashMap<String, Object>> bulkGps(HashMap<String, Object> params) {
		params.put("gcomp_id", compMapper.fnCompany(params));
		System.out.println("bulkGps: " + bulkMapper.bulkGps(params));
		return bulkMapper.bulkGps(params);
	}

	@Override
	public List<HashMap<String, Object>> bulkGpsTable(HashMap<String, Object> params) {
		params.put("gcomp_id", compMapper.fnCompany(params));
		System.out.println("bulkGpsTable: " + bulkMapper.bulkGpsTable(params));
		return bulkMapper.bulkGpsTable(params);
	}
}
