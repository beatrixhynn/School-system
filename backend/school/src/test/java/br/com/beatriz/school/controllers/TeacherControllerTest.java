
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

import br.com.beatriz.school.dtos.request.TeacherRequestDTO;
import br.com.beatriz.school.dtos.request.TeacherUpdateRequestDTO;
import br.com.beatriz.school.dtos.response.TeacherResponseDTO;
import br.com.beatriz.school.services.TeacherService;

public class TeacherControllerTest {

	private TeacherController teacherController;

	@Mock
	private TeacherService teacherService;

	@BeforeEach
	public void beforeEach() {
		MockitoAnnotations.openMocks(this);
		teacherController = new TeacherController();
		ReflectionTestUtils.setField(teacherController, "teacherService", teacherService);

	}

	@Test
	public void testGetAll() {
		List<TeacherResponseDTO> teacherResponseDTOsList = List.of(new TeacherResponseDTO(), new TeacherResponseDTO());
		when(teacherService.findAll()).thenReturn(teacherResponseDTOsList);

		ResponseEntity<List<TeacherResponseDTO>> response = teacherController.getAll();

		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals(teacherResponseDTOsList, response.getBody());
	}

	@Test
	public void testFindById() {
		long id = 1L;
		TeacherResponseDTO expectedResponse = new TeacherResponseDTO();

		when(teacherService.findById(id)).thenReturn(expectedResponse);

		ResponseEntity<TeacherResponseDTO> response = teacherController.findById(id);

		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals(expectedResponse, response.getBody());
	}

	@Test
	public void testCreate() {
		TeacherRequestDTO requestDTO = new TeacherRequestDTO();

		ResponseEntity<Void> response = teacherController.create(requestDTO);

		assertEquals(HttpStatus.CREATED, response.getStatusCode());
		verify(teacherService, times(1)).create(requestDTO);
	}

	@Test
	public void testUpdate() {
		long id = 1L;
		TeacherUpdateRequestDTO updateRequestDTO = new TeacherUpdateRequestDTO();

		ResponseEntity<Void> response = teacherController.update(id, updateRequestDTO);

		assertEquals(HttpStatus.OK, response.getStatusCode());
		verify(teacherService, times(1)).update(id, updateRequestDTO);
	}

	@Test
	public void testDelete() {
		long id = 1L;

		ResponseEntity<Void> response = teacherController.delete(id);

		assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
		verify(teacherService, times(1)).deleteById(id);
	}

}