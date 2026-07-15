
package br.com.beatriz.school.controllers;

import java.util.List;

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

import br.com.beatriz.school.dtos.request.TeacherRequestDTO;
import br.com.beatriz.school.dtos.request.TeacherUpdateRequestDTO;
import br.com.beatriz.school.dtos.response.TeacherResponseDTO;
import br.com.beatriz.school.services.TeacherService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/teachers")
public class TeacherController {

	@Autowired
	private TeacherService teacherService;

	@GetMapping
	public ResponseEntity<List<TeacherResponseDTO>> getAll() {
		List<TeacherResponseDTO> teacherResponseDTO = teacherService.findAll();
		return new ResponseEntity<>(teacherResponseDTO, HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<TeacherResponseDTO> findById(@PathVariable Long id) {
		return new ResponseEntity<>(teacherService.findById(id), HttpStatus.OK);
	}

	@PostMapping
	public ResponseEntity<Void> create(@RequestBody TeacherRequestDTO teacherRequestDTO) {
		teacherService.create(teacherRequestDTO);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Void> update(@PathVariable Long id,
			@RequestBody TeacherUpdateRequestDTO teacherUpdateRequestDTO) {
		teacherService.update(id, teacherUpdateRequestDTO);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		teacherService.deleteById(id);

		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

}