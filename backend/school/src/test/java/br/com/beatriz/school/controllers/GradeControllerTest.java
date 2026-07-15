
package br.com.beatriz.school.controllers;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.util.ReflectionTestUtils;

import br.com.beatriz.school.dtos.request.GradeRequestDTO;
import br.com.beatriz.school.dtos.request.GradeUpdateRequestDTO;
import br.com.beatriz.school.dtos.response.GradeResponseDTO;
import br.com.beatriz.school.services.GradeService;

public class GradeControllerTest {

	private GradeController gradeController;

	@Mock
	private GradeService gradeService;

	@BeforeEach
	public void beforeEach() {
		MockitoAnnotations.openMocks(this);
		gradeController = new GradeController();
		ReflectionTestUtils.setField(gradeController, "gradeService", gradeService);

	}

	@Test
	public void testGetAll() {
		List<GradeResponseDTO> gradeResponseDTOsList = List.of(new GradeResponseDTO(), new GradeResponseDTO());
		when(gradeService.findAll()).thenReturn(gradeResponseDTOsList);

		ResponseEntity<List<GradeResponseDTO>> response = gradeController.getAll();

		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals(gradeResponseDTOsList, response.getBody());
	}

	@Test
	public void testFindById() {
		long id = 1L;
		GradeResponseDTO expectedResponse = new GradeResponseDTO();

		when(gradeService.findById(id)).thenReturn(expectedResponse);

		ResponseEntity<GradeResponseDTO> response = gradeController.findById(id);

		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals(expectedResponse, response.getBody());
	}

	@Test
	public void testCreate() {
		GradeRequestDTO requestDTO = new GradeRequestDTO();

		ResponseEntity<Void> response = gradeController.create(requestDTO);

		assertEquals(HttpStatus.CREATED, response.getStatusCode());
		verify(gradeService, times(1)).create(requestDTO);
	}

	@Test
	public void testUpdate() {
		long id = 1L;
		GradeUpdateRequestDTO updateRequestDTO = new GradeUpdateRequestDTO();

		ResponseEntity<Void> response = gradeController.update(id, updateRequestDTO);

		assertEquals(HttpStatus.OK, response.getStatusCode());
		verify(gradeService, times(1)).update(id, updateRequestDTO);
	}

	@Test
	public void testDelete() {
		long id = 1L;

		ResponseEntity<Void> response = gradeController.delete(id);

		assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
		verify(gradeService, times(1)).deleteById(id);
	}

}