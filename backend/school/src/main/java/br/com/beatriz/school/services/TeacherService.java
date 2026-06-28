
package br.com.beatriz.school.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import br.com.beatriz.school.dtos.request.TeacherRequestDTO;
import br.com.beatriz.school.dtos.request.TeacherUpdateRequestDTO;
import br.com.beatriz.school.dtos.response.TeacherResponseDTO;
import br.com.beatriz.school.entities.TeacherEntity;
import br.com.beatriz.school.exceptions.TeacherNotFoundException;
import br.com.beatriz.school.repositories.TeacherRepository;

@Service
public class TeacherService {

	@Autowired
	private TeacherRepository teacherRepository;

	public List<TeacherResponseDTO> findAll() {
		return teacherRepository.findAll().stream().map(TeacherResponseDTO::of).collect(Collectors.toList());
	}

	public TeacherResponseDTO findById(Long id) {
		return TeacherResponseDTO.of(findByIdOrThrowException(id));
	}

	public TeacherEntity findByIdOrThrowException(Long id) {
		return teacherRepository.findById(id).orElseThrow(TeacherNotFoundException::new);
	}

	public void create(TeacherRequestDTO teacherRequestDTO) {

		teacherRepository.save(teacherRequestDTO.createEntity());
	}

	public void update(Long id, TeacherUpdateRequestDTO teacherUpdateRequestDTO) {

		TeacherEntity teacherEntity = findByIdOrThrowException(id);

		teacherEntity.updateValuesFrom(teacherUpdateRequestDTO);
		teacherRepository.save(teacherEntity);
	}

	public void deleteById(Long id) {
		teacherRepository.delete(findByIdOrThrowException(id));
	}

}