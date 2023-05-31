package com.example.demo.fd.service;

import lombok.Data;

@Data
public class CompVO {
	
	String compId;
	String prevId;
	String rootId;
	String compNm;
	String ceoNm;  // null
	String compPhone;
	String address;
	String isUse;
}
