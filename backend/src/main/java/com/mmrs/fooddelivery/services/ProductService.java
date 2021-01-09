package com.mmrs.fooddelivery.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mmrs.fooddelivery.dto.ProductDTO;
import com.mmrs.fooddelivery.entities.Product;
import com.mmrs.fooddelivery.repositories.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository repository;
	
	// garante que fecha conexão com o banco.
	// readonly = true -> operação de somente leitura, evitar lock.
	@Transactional(readOnly = true) 
	public List<ProductDTO> findAll() {
		List<Product> list = repository.findAllByOrderByNameAsc();
		return list.stream().map(x -> new ProductDTO(x)) // converte list para stream
				.collect(Collectors.toList()); // converte stream para list.
	}

}
