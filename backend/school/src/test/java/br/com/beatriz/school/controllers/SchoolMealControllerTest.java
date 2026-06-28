
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

import br.com.beatriz.school.dtos.request.SchoolMealRequestDTO;
import br.com.beatriz.school.dtos.request.SchoolMealUpdateRequestDTO;
import br.com.beatriz.school.dtos.response.SchoolMealResponseDTO;
import br.com.beatriz.school.services.SchoolMealService;

public class SchoolMealControllerTest {

	private SchoolMealController schoolMealController;

	@Mock
	private SchoolMealService schoolMealService;

	@BeforeEach
	public void beforeEach() {
		MockitoAnnotations.openMocks(this);
		schoolMealController = new SchoolMealController();
		ReflectionTestUtils.setField(schoolMealController, "schoolMealService", schoolMealService);

	}

	@Test
	public void testGetAll() {
		List<SchoolMealResponseDTO> schoolMealResponseDTOsList = List.of(new SchoolMealResponseDTO(),
				new SchoolMealResponseDTO());
		when(schoolMealService.findAll()).thenReturn(schoolMealResponseDTOsList);

		ResponseEntity<List<SchoolMealResponseDTO>> response = schoolMealController.getAll();

		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals(schoolMealResponseDTOsList, response.getBody());
	}

	@Test
	public void testFindById() {
		long id = 1L;
		SchoolMealResponseDTO expectedResponse = new SchoolMealResponseDTO();

		when(schoolMealService.findById(id)).thenReturn(expectedResponse);

		ResponseEntity<SchoolMealResponseDTO> response = schoolMealController.findById(id);

		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals(expectedResponse, response.getBody());
	}

	@Test
	public void testCreate() {
		SchoolMealRequestDTO requestDTO = new SchoolMealRequestDTO();

		ResponseEntity<Void> response = schoolMealController.create(requestDTO);

		assertEquals(HttpStatus.CREATED, response.getStatusCode());
		verify(schoolMealService, times(1)).create(requestDTO);
	}

	@Test
	public void testUpdate() {
		long id = 1L;
		SchoolMealUpdateRequestDTO updateRequestDTO = new SchoolMealUpdateRequestDTO();

		ResponseEntity<Void> response = schoolMealController.update(id, updateRequestDTO);

		assertEquals(HttpStatus.OK, response.getStatusCode());
		verify(schoolMealService, times(1)).update(id, updateRequestDTO);
	}

	@Test
	public void testDelete() {
		long id = 1L;

		ResponseEntity<Void> response = schoolMealController.delete(id);

		assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
		verify(schoolMealService, times(1)).deleteById(id);
	}

}