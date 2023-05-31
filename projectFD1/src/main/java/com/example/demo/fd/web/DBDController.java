package com.example.demo.fd.web;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttribute;

import com.example.demo.fd.service.CompService;
import com.example.demo.fd.service.CompVO;

@Controller
@RequestMapping("/")
public class DBDController {
	CompService compService;
	
	public DBDController(CompService compService) {
		this.compService = compService;
	}
	
	@GetMapping("/detail.do")
	public String detail(Model model, HttpSession session, @SessionAttribute(required = false) String msg, @RequestParam String comp_id) {
		try {
			System.out.println(comp_id);
			CompVO comp = compService.selectOne(comp_id);
			System.out.println(comp);
			model.addAttribute("compId", comp_id);
			model.addAttribute("comp", comp);
			System.out.println("/detail.do");
			return "/detail";
		} catch (Exception e) {
			e.printStackTrace();
			session.setAttribute("msg", "에러");
			return "redirect:/";
		}
	}
}
