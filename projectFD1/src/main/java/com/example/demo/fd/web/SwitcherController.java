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
import com.example.demo.fd.service.SwitcherService;

@Controller
@RequestMapping("/")
public class SwitcherController {
	CompService compService;
	SwitcherService switcherService;
	
	public SwitcherController(CompService compService, SwitcherService switcherService) {
		this.compService = compService;
		this.switcherService = switcherService;
	}
	
	@PostMapping("/switcherStock")
	public ResponseEntity<List<HashMap<String, Object>>> switcherStock(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/switcherStock)params: " + params);
		List<HashMap<String, Object>> switcherStock = new ArrayList<>();
		switcherStock = switcherService.switcherStock(params);
		System.out.println("/switcherStock");
		return new ResponseEntity<>(switcherStock, HttpStatus.OK);
	}
	
	@PostMapping("/switcherVolume")
	public ResponseEntity<List<HashMap<String, Object>>> switcherVolume(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/switcherVolume)params: " + params);
		List<HashMap<String, Object>> switcherVolume = new ArrayList<>();
		switcherVolume = switcherService.switcherStock(params);
		System.out.println("/switcherVolume");
		return new ResponseEntity<>(switcherVolume, HttpStatus.OK);
	}
	
	@PostMapping("/switcherDaily")
	public ResponseEntity<List<HashMap<String, Object>>> switcherDaily(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/switcherDaily)params: " + params);
		List<HashMap<String, Object>> switcherDaily = new ArrayList<>();
		switcherDaily = switcherService.switcherDaily(params);
		System.out.println("/switcherDaily");
		return new ResponseEntity<>(switcherDaily, HttpStatus.OK);
	}
	
	@PostMapping("/switcherDailyTable")
	public ResponseEntity<List<HashMap<String, Object>>> switcherDailyTable(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/switcherDailyTable)params: " + params);
		List<HashMap<String, Object>> switcherDailyTable = new ArrayList<>();
		switcherDailyTable = switcherService.switcherDaily(params);
		System.out.println("/switcherDailyTable");
		return new ResponseEntity<>(switcherDailyTable, HttpStatus.OK);
	}
	
	@PostMapping("/switcherMonthly")
	public ResponseEntity<List<HashMap<String, Object>>> switcherMonthly(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/switcherMonthly)params: " + params);
		List<HashMap<String, Object>> switcherMonthly = new ArrayList<>();
		switcherMonthly = switcherService.switcherMonthly(params);
		System.out.println("/switcherMonthly");
		return new ResponseEntity<>(switcherMonthly, HttpStatus.OK);
	}
	
	@PostMapping("/switcherMonthlyTable")
	public ResponseEntity<List<HashMap<String, Object>>> switcherMonthlyTable(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/switcherMonthlyTable)params: " + params);
		List<HashMap<String, Object>> switcherMonthlyTable = new ArrayList<>();
		switcherMonthlyTable = switcherService.switcherMonthly(params);
		System.out.println("/switcherMonthlyTable");
		return new ResponseEntity<>(switcherMonthlyTable, HttpStatus.OK);
	}
	
	@PostMapping("/switcherError")
	public ResponseEntity<List<HashMap<String, Object>>> switcherError(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/switcherError)params: " + params);
		List<HashMap<String, Object>> switcherError = new ArrayList<>();
		switcherError = switcherService.switcherError(params);
		System.out.println("/switcherError");
		return new ResponseEntity<>(switcherError, HttpStatus.OK);
	}
	
	@PostMapping("/switcherErrorB")
	public ResponseEntity<List<HashMap<String, Object>>> switcherErrorB(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/switcherErrorB)params: " + params);
		List<HashMap<String, Object>> switcherErrorB = new ArrayList<>();
		switcherErrorB = switcherService.switcherErrorB(params);
		System.out.println("/switcherErrorB");
		return new ResponseEntity<>(switcherErrorB, HttpStatus.OK);
	}
	
	@PostMapping("/switcherErrorT")
	public ResponseEntity<List<HashMap<String, Object>>> switcherErrorT(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/switcherErrorT)params: " + params);
		List<HashMap<String, Object>> switcherErrorT = new ArrayList<>();
		switcherErrorT = switcherService.switcherErrorT(params);
		System.out.println("/switcherErrorT");
		return new ResponseEntity<>(switcherErrorT, HttpStatus.OK);
	}
}
