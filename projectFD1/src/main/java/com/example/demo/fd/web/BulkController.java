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

import com.example.demo.fd.service.BulkService;
import com.example.demo.fd.service.CompService;

@Controller
@RequestMapping("/")
public class BulkController {
	CompService compService;
	BulkService bulkService;
	
	public BulkController(CompService compService, BulkService bulkService) {
		this.compService = compService;
		this.bulkService = bulkService;
	}
	
	@PostMapping("/bulkDailyKg")
	public ResponseEntity<List<HashMap<String, Object>>> bulkDailyKg(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/bulkDailyKg)params: " + params);
		List<HashMap<String, Object>> bulkDailyKg = new ArrayList<>();
		bulkDailyKg = bulkService.bulkDailyKg(params);
		System.out.println("/bulkDailyKg");
		return new ResponseEntity<>(bulkDailyKg, HttpStatus.OK);
	}
	
	@PostMapping("/bulkDailyTableKg")
	public ResponseEntity<List<HashMap<String, Object>>> bulkDailyTableKg(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/bulkDailyTableKg)params: " + params);
		List<HashMap<String, Object>> bulkDailyTableKg = new ArrayList<>();
		bulkDailyTableKg = bulkService.bulkDailyKg(params);
		System.out.println("/bulkDailyTableKg");
		return new ResponseEntity<>(bulkDailyTableKg, HttpStatus.OK);
	}
	
	@PostMapping("/bulkMonthlyKg")
	public ResponseEntity<List<HashMap<String, Object>>> bulkMonthlyKg(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/bulkMonthlyKg)params: " + params);
		List<HashMap<String, Object>> bulkMonthlyKg = new ArrayList<>();
		bulkMonthlyKg = bulkService.bulkMonthlyKg(params);
		System.out.println("/bulkMonthlyKg");
		return new ResponseEntity<>(bulkMonthlyKg, HttpStatus.OK);
	}
	
	@PostMapping("/bulkMonthlyTableKg")
	public ResponseEntity<List<HashMap<String, Object>>> bulkMonthlyTableKg(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/bulkMonthlyTableKg)params: " + params);
		List<HashMap<String, Object>> bulkMonthlyTableKg = new ArrayList<>();
		bulkMonthlyTableKg = bulkService.bulkMonthlyKg(params);
		System.out.println("/bulkMonthlyTableKg");
		return new ResponseEntity<>(bulkMonthlyTableKg, HttpStatus.OK);
	}
	
	@PostMapping("/bulkDailyLiter")
	public ResponseEntity<List<HashMap<String, Object>>> bulkDailyLiter(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/bulkDailyLiter)params: " + params);
		List<HashMap<String, Object>> bulkDailyLiter = new ArrayList<>();
		bulkDailyLiter = bulkService.bulkDailyLiter(params);
		System.out.println("/bulkDailyLiter");
		return new ResponseEntity<>(bulkDailyLiter, HttpStatus.OK);
	}
	
	@PostMapping("/bulkDailyTableLiter")
	public ResponseEntity<List<HashMap<String, Object>>> bulkDailyTableLiter(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/bulkDailyTableLiter)params: " + params);
		List<HashMap<String, Object>> bulkDailyTableLiter = new ArrayList<>();
		bulkDailyTableLiter = bulkService.bulkDailyLiter(params);
		System.out.println("/bulkDailyTableLiter");
		return new ResponseEntity<>(bulkDailyTableLiter, HttpStatus.OK);
	}
	
	@PostMapping("/bulkMonthlyLiter")
	public ResponseEntity<List<HashMap<String, Object>>> bulkMonthlyLiter(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/bulkMonthlyLiter)params: " + params);
		List<HashMap<String, Object>> bulkMonthlyLiter = new ArrayList<>();
		bulkMonthlyLiter = bulkService.bulkMonthlyLiter(params);
		System.out.println("/bulkMonthlyLiter");
		return new ResponseEntity<>(bulkMonthlyLiter, HttpStatus.OK);
	}
	
	@PostMapping("/bulkMonthlyTableLiter")
	public ResponseEntity<List<HashMap<String, Object>>> bulkMonthlyTableLiter(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/bulkMonthlyTableLiter)params: " + params);
		List<HashMap<String, Object>> bulkMonthlyTableLiter = new ArrayList<>();
		bulkMonthlyTableLiter = bulkService.bulkMonthlyLiter(params);
		System.out.println("/bulkMonthlyTableLiter");
		return new ResponseEntity<>(bulkMonthlyTableLiter, HttpStatus.OK);
	}
	
	@PostMapping("/bulkGps")
	public ResponseEntity<List<HashMap<String, Object>>> bulkGps(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/bulkGps)params: " + params);
		List<HashMap<String, Object>> bulkGps = new ArrayList<>();
		bulkGps = bulkService.bulkGps(params);
		System.out.println("/bulkGps");
		return new ResponseEntity<>(bulkGps, HttpStatus.OK);
	}
	
	@PostMapping("/bulkGpsTable")
	public ResponseEntity<List<HashMap<String, Object>>> bulkGpsTable(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/bulkGpsTable)params: " + params);
		List<HashMap<String, Object>> bulkGpsTable = new ArrayList<>();
		bulkGpsTable = bulkService.bulkGpsTable(params);
		System.out.println("/bulkGpsTable");
		return new ResponseEntity<>(bulkGpsTable, HttpStatus.OK);
	}
}
