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
import com.example.demo.fd.service.CompService;
import com.example.demo.fd.service.CompVO;
import com.example.demo.fd.service.TankService;

@Controller
@RequestMapping("/")
public class MainController {
	CompService compService;
	TankService tankService;
	
	public MainController(CompService compService) {
		this.compService = compService;
	}
	
	@GetMapping("/")
	public String main(Model model) {
		try {
			List<CompVO> compList = compService.compList();
			System.out.println(compList.size());
			model.addAttribute("compList", compList);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		System.out.println("/");
		return "index";
	}
	
	@PostMapping("/compList")
	public ResponseEntity<List<HashMap<String, Object>>> list() {
		List<HashMap<String, Object>> compMap = new ArrayList<>();
		compMap = compService.compMap();
		System.out.println("/compList");
		return new ResponseEntity<>(compMap, HttpStatus.OK);
	}	
	
}
