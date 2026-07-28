package br.com.beatriz.school.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.beatriz.school.entities.ContactEntity;

public interface ContactRepository extends JpaRepository<ContactEntity, Long> {

}
