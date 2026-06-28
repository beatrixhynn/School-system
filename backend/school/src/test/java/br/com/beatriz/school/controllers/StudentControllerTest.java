
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

import br.com.beatriz.school.dtos.request.StudentRequestDTO;
import br.com.beatriz.school.dtos.request.StudentUpdateRequestDTO;
import br.com.beatriz.school.dtos.response.StudentResponseDTO;
import br.com.beatriz.school.services.StudentService;

public class StudentControllerTest {

	private StudentController studentController;

	@Mock
	private StudentService studentService;

	@BeforeEach
	public void beforeEach() {
		MockitoAnnotations.openMocks(this);
		studentController = new StudentController();
		ReflectionTestUtils.setField(studentController, "studentService", studentService);

	}

	@Test
	public void testGetAll() {
		List<StudentResponseDTO> studentResponseDTOsList = List.of(new StudentResponseDTO(), new StudentResponseDTO());
		when(studentService.findAll()).thenReturn(studentResponseDTOsList);

		ResponseEntity<List<StudentResponseDTO>> response = studentController.getAll();

		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals(studentResponseDTOsList, response.getBody());
	}

	@Test
	public void testFindById() {
		long id = 1L;
		StudentResponseDTO expectedResponse = new StudentResponseDTO();

		when(studentService.findById(id)).thenReturn(expectedResponse);

		ResponseEntity<StudentResponseDTO> response = studentController.findById(id);

		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals(expectedResponse, response.getBody());
	}

	@Test
	public void testCreate() {
		StudentRequestDTO requestDTO = new StudentRequestDTO();

		ResponseEntity<Void> response = studentController.create(requestDTO);

		assertEquals(HttpStatus.CREATED, response.getStatusCode());
		verify(studentService, times(1)).create(requestDTO);
	}

	@Test
	public void testUpdate() {
		long id = 1L;
		StudentUpdateRequestDTO updateRequestDTO = new StudentUpdateRequestDTO();

		ResponseEntity<Void> response = studentController.update(id, updateRequestDTO);

		assertEquals(HttpStatus.OK, response.getStatusCode());
		verify(studentService, times(1)).update(id, updateRequestDTO);
	}

	@Test
	public void testDelete() {
		long id = 1L;

		ResponseEntity<Void> response = studentController.delete(id);

		assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
		verify(studentService, times(1)).deleteById(id);
	}

}