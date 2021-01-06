package com.leandroalbanez.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.leandroalbanez.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{
	
}
