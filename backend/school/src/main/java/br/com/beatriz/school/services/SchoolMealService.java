
package br.com.beatriz.school.services;

import java.util.List;
import java.util.stream.Collectors;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.beatriz.school.dtos.request.SchoolMealRequestDTO;
import br.com.beatriz.school.dtos.request.SchoolMealUpdateRequestDTO;
import br.com.beatriz.school.dtos.response.SchoolMealResponseDTO;
import br.com.beatriz.school.entities.SchoolMealEntity;
import br.com.beatriz.school.exceptions.SchoolMealNotFoundException;
import br.com.beatriz.school.repositories.SchoolMealRepository;

@Service
public class SchoolMealService {

	@Autowired
	private SchoolMealRepository schoolMealRepository;

	public List<SchoolMealResponseDTO> findAll() {
		return schoolMealRepository.findAll().stream().map(SchoolMealResponseDTO::of).collect(Collectors.toList());
	}

	public SchoolMealResponseDTO findById(Long id) {
		return SchoolMealResponseDTO.of(findByIdOrThrowException(id));
	}

	public SchoolMealEntity findByIdOrThrowException(Long id) {
		return schoolMealRepository.findById(id).orElseThrow(SchoolMealNotFoundException::new);
	}

	public void create(SchoolMealRequestDTO schoolMealRequestDTO) {

		schoolMealRepository.save(schoolMealRequestDTO.createEntity());
	}

	public void update(Long id, SchoolMealUpdateRequestDTO schoolMealUpdateRequestDTO) {

		SchoolMealEntity schoolMealEntity = findByIdOrThrowException(id);

		schoolMealEntity.updateValuesFrom(schoolMealUpdateRequestDTO);
		schoolMealRepository.save(schoolMealEntity);
	}

	public void deleteById(Long id) {
		schoolMealRepository.delete(findByIdOrThrowException(id));
	}

}