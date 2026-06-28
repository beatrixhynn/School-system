
package br.com.beatriz.school.controllers;

import java.util.List;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.beatriz.school.dtos.request.SchoolMealRequestDTO;
import br.com.beatriz.school.dtos.request.SchoolMealUpdateRequestDTO;
import br.com.beatriz.school.dtos.response.SchoolMealResponseDTO;
import br.com.beatriz.school.services.SchoolMealService;

import static javax.management.Query.times;
import static org.springframework.http.ResponseEntity.status;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/school-meals")
public class SchoolMealController {

	@Autowired
	private SchoolMealService schoolMealService;

	@GetMapping
	public ResponseEntity<List<SchoolMealResponseDTO>> getAll() {
		List<SchoolMealResponseDTO> schoolMealResponseDTO = schoolMealService.findAll();
		return new ResponseEntity<>(schoolMealResponseDTO, HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<SchoolMealResponseDTO> findById(@PathVariable Long id) {
		return new ResponseEntity<>(schoolMealService.findById(id), HttpStatus.OK);
	}

	@PostMapping
	public ResponseEntity<Void> create(@RequestBody @Valid SchoolMealRequestDTO schoolMealRequestDTO) {
		schoolMealService.create(schoolMealRequestDTO);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Void> update(@PathVariable Long id,
			@RequestBody @Valid SchoolMealUpdateRequestDTO schoolMealUpdateRequestDTO) {
		schoolMealService.update(id, schoolMealUpdateRequestDTO);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		schoolMealService.deleteById(id);

		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}


}