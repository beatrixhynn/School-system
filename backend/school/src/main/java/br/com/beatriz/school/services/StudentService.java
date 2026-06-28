
package br.com.beatriz.school.services;

import java.util.List;
import java.util.stream.Collectors;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.beatriz.school.dtos.request.StudentRequestDTO;
import br.com.beatriz.school.dtos.request.StudentUpdateRequestDTO;
import br.com.beatriz.school.dtos.response.StudentResponseDTO;
import br.com.beatriz.school.entities.GradeEntity;
import br.com.beatriz.school.entities.StudentEntity;
import br.com.beatriz.school.exceptions.StudentNotFoundException;
import br.com.beatriz.school.repositories.StudentRepository;

@Service
public class StudentService {

	private static final Logger logger = LoggerFactory.getLogger(StudentService.class);


	@Autowired
	private StudentRepository studentRepository;

	@Autowired
	private GradeService gradeService;

	public List<StudentResponseDTO> findAll() {
		logger.info("Fetching all students");
		return studentRepository.findAll().stream().map(StudentResponseDTO::of).collect(Collectors.toList());
	}

	public StudentResponseDTO findById(Long id) {
		logger.info("Fetching student by ID: {}", id);
		return StudentResponseDTO.of(findByIdOrThrowException(id));
	}

	public StudentEntity findByIdOrThrowException(Long id) {
		return studentRepository.findById(id).orElseThrow(() -> {
			logger.error("Student with ID {} not found", id);
			return new StudentNotFoundException();
		});
	}

	public void create(StudentRequestDTO studentRequestDTO) {
		try {
			logger.info("Creating new student: {}", studentRequestDTO.getName());
			GradeEntity gradeEntity = gradeService.findByIdOrThrowException(studentRequestDTO.getGradeId());

			studentRepository.save(studentRequestDTO.createEntity(gradeEntity));
		} catch (Exception e) {
			logger.error("Error creating student: {}", e.getMessage(), e);
			throw e;
		}
	}

	public void update(Long id, StudentUpdateRequestDTO studentUpdateRequestDTO) {
		try {
			logger.info("Updating student ID: {}", id);
			GradeEntity gradeEntity = gradeService.findByIdOrThrowException(studentUpdateRequestDTO.getGradeId());

			StudentEntity studentEntity = findByIdOrThrowException(id);

			studentEntity.updateValuesFrom(studentUpdateRequestDTO, gradeEntity);
			studentRepository.save(studentEntity);
		} catch (Exception e) {
			logger.error("Error updating student ID {}: {}", id, e.getMessage(), e);
			throw e;
		}
	}


	public void deleteById(Long id) {
		try {
			logger.info("Deleting student ID: {}", id);
			studentRepository.delete(findByIdOrThrowException(id));
		} catch (Exception e) {
			logger.error("Error deleting student ID {}: {}", id, e.getMessage(), e);
			throw e;
		}


	}
}