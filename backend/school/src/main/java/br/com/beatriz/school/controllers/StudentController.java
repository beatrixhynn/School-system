
package br.com.beatriz.school.controllers;

import java.util.List;
import java.util.Map;

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

import br.com.beatriz.school.dtos.request.StudentRequestDTO;
import br.com.beatriz.school.dtos.request.StudentUpdateRequestDTO;
import br.com.beatriz.school.dtos.response.StudentResponseDTO;
import br.com.beatriz.school.services.StudentService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/students")
public class StudentController {

	@Autowired
	private StudentService studentService;

	@GetMapping
	public ResponseEntity<List<StudentResponseDTO>> getAll() {
		List<StudentResponseDTO> studentResponseDTO = studentService.findAll();
		return new ResponseEntity<>(studentResponseDTO, HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<StudentResponseDTO> findById(@PathVariable Long id) {
		return new ResponseEntity<>(studentService.findById(id), HttpStatus.OK);
	}


	@PostMapping
	public ResponseEntity<Void> create(@Valid @RequestBody StudentRequestDTO studentRequestDTO) {
		studentService.create(studentRequestDTO);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Void> update(@PathVariable Long id,
			@RequestBody StudentUpdateRequestDTO studentUpdateRequestDTO) {
		studentService.update(id, studentUpdateRequestDTO);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		studentService.deleteById(id);

		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

}