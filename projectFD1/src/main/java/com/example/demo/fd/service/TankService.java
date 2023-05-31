package com.example.demo.fd.service;

import java.util.HashMap;
import java.util.List;

public interface TankService {

	HashMap<String, Object> tankStock(HashMap<String, Object> params); // 소형저장탱크 재고
	
	List<HashMap<String, Object>> tankWeight(HashMap<String, Object> params); // 탱크 용량별 수량
	List<HashMap<String, Object>> tankRemain(HashMap<String, Object> params); // 탱크 잔량별 수량
	List<HashMap<String, Object>> tankManu(HashMap<String, Object> params); // 탱크 제조사별 수량

	List<HashMap<String, Object>> tankDaily(HashMap<String, Object> params); // 탱크 충전량 및 소비량 일별
	List<HashMap<String, Object>> tankMonthly(HashMap<String, Object> params); // 탱크 충전량 및 소비량 일별

	List<HashMap<String, Object>> tankError(HashMap<String, Object> params); // 탱크 장애 리스트
	List<HashMap<String, Object>> tankErrorT(HashMap<String, Object> params); // 탱크 장애 리스트
	List<HashMap<String, Object>> tankErrorB(HashMap<String, Object> params); // 탱크 장애 리스트
	List<HashMap<String, Object>> tankErrorG(HashMap<String, Object> params); // 탱크 장애 리스트
}
