package com.nextage.Nextage_BackEnd;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class NextageBackEndApplication {

	public static void main(String[] args) {
		SpringApplication.run(NextageBackEndApplication.class, args);
	}

}
