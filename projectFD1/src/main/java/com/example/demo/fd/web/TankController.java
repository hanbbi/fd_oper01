package com.example.demo.fd.web;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import com.example.demo.fd.service.CompService;
import com.example.demo.fd.service.TankService;

@Controller
@RequestMapping("/")
public class TankController {
	CompService compService;
	TankService tankService;
	
	public TankController(CompService compService, TankService tankService) {
		this.compService = compService;
		this.tankService = tankService;
	}
	
	@PostMapping("/tankStockText")
	public ResponseEntity<HashMap<String, Object>> tankStockText(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/tankStockText)params: " + params);
		HashMap<String, Object> tankStockText = new HashMap<>();
		tankStockText = tankService.tankStock(params);
		System.out.println("/tankStockText"); 
		return new ResponseEntity<>(tankStockText, HttpStatus.OK);
	}
	
	@PostMapping("/tankStock")
	public ResponseEntity<HashMap<String, Object>> tankStock(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/tankStock)params: " + params);
		HashMap<String, Object> tankStock = new HashMap<>();
		tankStock = tankService.tankStock(params);
		System.out.println("/tankStock"); 
		return new ResponseEntity<>(tankStock, HttpStatus.OK);
	}
	
	@PostMapping("/tankWeight")
	public ResponseEntity<List<HashMap<String, Object>>> tankWeight(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/tankWeight)params: " + params);
		List<HashMap<String, Object>> tankWeight = new ArrayList<>();
		tankWeight = tankService.tankWeight(params);
		System.out.println("/tankWeight");
		return new ResponseEntity<>(tankWeight, HttpStatus.OK);
	}
	
	@PostMapping("/tankRemain")
	public ResponseEntity<List<HashMap<String, Object>>> tankRemain(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/tankRemain)params: " + params);
		List<HashMap<String, Object>> tankRemain = new ArrayList<>();
		tankRemain = tankService.tankRemain(params);
		System.out.println("/tankRemain");
		return new ResponseEntity<>(tankRemain, HttpStatus.OK);
	}
	
	@PostMapping("/tankManu")
	public ResponseEntity<List<HashMap<String, Object>>> tankManu(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/tankManu)params: " + params);
		List<HashMap<String, Object>> tankManu = new ArrayList<>();
		tankManu = tankService.tankManu(params);
		System.out.println("/tankManu");
		return new ResponseEntity<>(tankManu, HttpStatus.OK);
	}
	
	@PostMapping("/tankDaily")
	public ResponseEntity<List<HashMap<String, Object>>> tankDaily(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/tankDaily)params: " + params);
		List<HashMap<String, Object>> tankDaily = new ArrayList<>();
		tankDaily = tankService.tankDaily(params);
		System.out.println("/tankDaily");
		return new ResponseEntity<>(tankDaily, HttpStatus.OK);
	}
	
	@PostMapping("/tankDailyTable")
	public ResponseEntity<List<HashMap<String, Object>>> tankDailyTable(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/tankDailyTable)params: " + params);
		List<HashMap<String, Object>> tankDaily = new ArrayList<>();
		tankDaily = tankService.tankDaily(params);
		System.out.println("/tankDailyTable");
		return new ResponseEntity<>(tankDaily, HttpStatus.OK);
	}
	
	@PostMapping("/tankMonthly")
	public ResponseEntity<List<HashMap<String, Object>>> tankMonthly(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/tankMonthly)params: " + params);
		List<HashMap<String, Object>> tankMonthly = new ArrayList<>();
		tankMonthly = tankService.tankMonthly(params);
		System.out.println("/tankMonthly");
		return new ResponseEntity<>(tankMonthly, HttpStatus.OK);
	}
	
	@PostMapping("/tankMonthlyTable")
	public ResponseEntity<List<HashMap<String, Object>>> tankMonthlyTable(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/tankMonthlyTable)params: " + params);
		List<HashMap<String, Object>> tankMonthly = new ArrayList<>();
		tankMonthly = tankService.tankMonthly(params);
		System.out.println("/tankMonthlyTable");
		return new ResponseEntity<>(tankMonthly, HttpStatus.OK);
	}
	
	@PostMapping("/tankError")
	public ResponseEntity<List<HashMap<String, Object>>> tankError(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/tankError)params: " + params);
		List<HashMap<String, Object>> tankError = new ArrayList<>();
		tankError = tankService.tankError(params);
		System.out.println("/tankError");
		return new ResponseEntity<>(tankError, HttpStatus.OK);
	}
	
	@PostMapping("/tankErrorT")
	public ResponseEntity<List<HashMap<String, Object>>> tankErrorT(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/tankErrorT)params: " + params);
		List<HashMap<String, Object>> tankErrorT = new ArrayList<>();
		tankErrorT = tankService.tankErrorT(params);
		System.out.println("/tankErrorT");
		return new ResponseEntity<>(tankErrorT, HttpStatus.OK);
	}
	
	@PostMapping("/tankErrorB")
	public ResponseEntity<List<HashMap<String, Object>>> tankErrorB(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/tankErrorB)params: " + params);
		List<HashMap<String, Object>> tankErrorB = new ArrayList<>();
		tankErrorB = tankService.tankErrorB(params);
		System.out.println("/tankErrorB");
		return new ResponseEntity<>(tankErrorB, HttpStatus.OK);
	}
	
	@PostMapping("/tankErrorG")
	public ResponseEntity<List<HashMap<String, Object>>> tankErrorG(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/tankErrorG)params: " + params);
		List<HashMap<String, Object>> tankErrorG = new ArrayList<>();
		tankErrorG = tankService.tankErrorG(params);
		System.out.println("/tankErrorG");
		return new ResponseEntity<>(tankErrorG, HttpStatus.OK);
	}
	
}
