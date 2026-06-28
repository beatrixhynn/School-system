
package br.com.beatriz.school.services;

import java.util.List;
import java.util.stream.Collectors;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.beatriz.school.dtos.request.GradeRequestDTO;
import br.com.beatriz.school.dtos.request.GradeUpdateRequestDTO;
import br.com.beatriz.school.dtos.response.GradeResponseDTO;
import br.com.beatriz.school.entities.GradeEntity;
import br.com.beatriz.school.entities.TeacherEntity;
import br.com.beatriz.school.exceptions.GradeNotFoundException;
import br.com.beatriz.school.repositories.GradeRepository;
import org.springframework.util.ObjectUtils;

@Service
public class GradeService {

	@Autowired
	private GradeRepository gradeRepository;

	@Autowired
	private TeacherService teacherService;

	public List<GradeResponseDTO> findAll() {
		return gradeRepository.findAll().stream().map(GradeResponseDTO::of).collect(Collectors.toList());
	}

	public GradeResponseDTO findById(Long id) {
		return GradeResponseDTO.of(findByIdOrThrowException(id));
	}

	public GradeEntity findByIdOrThrowException(Long id) {
		return gradeRepository.findById(id).orElseThrow(GradeNotFoundException::new);
	}

	public void create(GradeRequestDTO gradeRequestDTO) {
		TeacherEntity teacherEntity = teacherService.findByIdOrThrowException(gradeRequestDTO.getTeacherId());

		gradeRepository.save(gradeRequestDTO.createEntity(teacherEntity));
	}

	public void update(Long id, GradeUpdateRequestDTO gradeUpdateRequestDTO) {
		TeacherEntity teacherEntity = teacherService.findByIdOrThrowException(gradeUpdateRequestDTO.getTeacherId());

		GradeEntity gradeEntity = findByIdOrThrowException(id);

		gradeEntity.updateValuesFrom(gradeUpdateRequestDTO, teacherEntity);
		gradeRepository.save(gradeEntity);
	}

	public void deleteById(Long id) {
		gradeRepository.delete(findByIdOrThrowException(id));
	}


}
