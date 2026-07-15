
package br.com.beatriz.school.dtos.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class GradeUpdateRequestDTO {
	private Long id;

	private String year;
	private String section;
	private String room;

	private Long teacherId;

}