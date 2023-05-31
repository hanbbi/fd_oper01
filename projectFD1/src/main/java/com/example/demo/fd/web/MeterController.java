package com.example.demo.fd.web;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.fd.service.CompService;
import com.example.demo.fd.service.MeterService;

@Controller
@RequestMapping("/")
public class MeterController {
	CompService compService;
	MeterService meterService;
	
	public MeterController(CompService compService, MeterService meterService) {
		this.compService = compService;
		this.meterService = meterService;
	}
	
	@PostMapping("/meterDaily")
	public ResponseEntity<List<HashMap<String, Object>>> meterDaily(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/meterDaily)params: " + params);
		List<HashMap<String, Object>> meterDaily = new ArrayList<>();
		meterDaily = meterService.meterDaily(params);
		System.out.println("/meterDaily");
		return new ResponseEntity<>(meterDaily, HttpStatus.OK);
	}
	
	@PostMapping("/meterDailyTable")
	public ResponseEntity<List<HashMap<String, Object>>> meterDailyTable(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/meterDailyTable)params: " + params);
		List<HashMap<String, Object>> meterDailyTable = new ArrayList<>();
		meterDailyTable = meterService.meterDaily(params);
		System.out.println("/meterDailyTable");
		return new ResponseEntity<>(meterDailyTable, HttpStatus.OK);
	}
	
	@PostMapping("/meterMonthly")
	public ResponseEntity<List<HashMap<String, Object>>> meterMonthly(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/meterMonthly)params: " + params);
		List<HashMap<String, Object>> meterMonthly = new ArrayList<>();
		meterMonthly = meterService.meterMonthly(params);
		System.out.println("/meterMonthly");
		return new ResponseEntity<>(meterMonthly, HttpStatus.OK);
	}
	
	@PostMapping("/meterMonthlyTable")
	public ResponseEntity<List<HashMap<String, Object>>> meterMonthlyTable(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/meterMonthlyTable)params: " + params);
		List<HashMap<String, Object>> meterMonthlyTable = new ArrayList<>();
		meterMonthlyTable = meterService.meterMonthly(params);
		System.out.println("/meterMonthlyTable");
		return new ResponseEntity<>(meterMonthlyTable, HttpStatus.OK);
	}
	
	@PostMapping("/meterType")
	public ResponseEntity<List<HashMap<String, Object>>> meterType(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/meterType)params: " + params);
		List<HashMap<String, Object>> meterType = new ArrayList<>();
		meterType = meterService.meterType(params);
		System.out.println("/meterType");
		return new ResponseEntity<>(meterType, HttpStatus.OK);
	}
	
	@PostMapping("/meterError")
	public ResponseEntity<List<HashMap<String, Object>>> meterError(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/meterError)params: " + params);
		List<HashMap<String, Object>> meterError = new ArrayList<>();
		meterError = meterService.meterError(params);
		System.out.println("/meterError");
		return new ResponseEntity<>(meterError, HttpStatus.OK);
	}
	
	@PostMapping("/meterErrorT")
	public ResponseEntity<List<HashMap<String, Object>>> meterErrorT(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/meterErrorT)params: " + params);
		List<HashMap<String, Object>> meterErrorT = new ArrayList<>();
		meterErrorT = meterService.meterErrorT(params);
		System.out.println("/meterErrorT");
		return new ResponseEntity<>(meterErrorT, HttpStatus.OK);
	}
	
	@PostMapping("/meterErrorM")
	public ResponseEntity<List<HashMap<String, Object>>> meterErrorM(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/meterErrorM)params: " + params);
		List<HashMap<String, Object>> meterErrorM = new ArrayList<>();
		meterErrorM = meterService.meterErrorM(params);
		System.out.println("/meterErrorM");
		return new ResponseEntity<>(meterErrorM, HttpStatus.OK);
	}
}
