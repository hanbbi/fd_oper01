package com.example.demo.fd.web;

import java.util.HashMap;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.fd.service.CompService;
import com.example.demo.fd.service.TankService;

@Controller
@RequestMapping("/")
public class PrintController {
	CompService compService;
	TankService tankService;
	
	public PrintController(CompService compService, TankService tankService) {
		this.compService = compService;
		this.tankService = tankService;
	}

	@GetMapping("/printTank")
	public String printTank(@RequestParam HashMap<String, Object> params) {
		System.out.println("(/printTank)params : " + params);
		
		System.out.println("/printTank");
		return "print";
	}
}
