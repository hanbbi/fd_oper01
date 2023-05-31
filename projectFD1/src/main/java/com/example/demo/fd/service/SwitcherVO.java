package com.example.demo.fd.service;

import java.sql.Date;

import lombok.Data;

@Data
public class SwitcherVO {
	String compId;
	String deviceId;
	String adcPort;
	String custId;
	String volume;
	String isDel;
	Date regDate;
}
