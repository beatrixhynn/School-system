
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

import br.com.beatriz.school.dtos.request.GradeRequestDTO;
import br.com.beatriz.school.dtos.request.GradeUpdateRequestDTO;
import br.com.beatriz.school.dtos.response.GradeResponseDTO;
import br.com.beatriz.school.services.GradeService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/grades")
public class GradeController {

	@Autowired
	private GradeService gradeService;

	@GetMapping
	public ResponseEntity<List<GradeResponseDTO>> getAll() {
		List<GradeResponseDTO> gradeResponseDTO = gradeService.findAll();
		return new ResponseEntity<>(gradeResponseDTO, HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<GradeResponseDTO> findById(@PathVariable Long id) {
		return new ResponseEntity<>(gradeService.findById(id), HttpStatus.OK);
	}

	@PostMapping
	public ResponseEntity<Void> create( @Valid @RequestBody GradeRequestDTO gradeRequestDTO) {
		gradeService.create(gradeRequestDTO);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Void> update(@PathVariable Long id,
									   @Valid 	@RequestBody GradeUpdateRequestDTO gradeUpdateRequestDTO) {
		gradeService.update(id, gradeUpdateRequestDTO);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		gradeService.deleteById(id);

		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

}