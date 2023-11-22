package com.example.proyectospringangular.model.service;

import com.example.proyectospringangular.model.entity.ClientEntity;
import com.example.proyectospringangular.model.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ClienteService implements IClienteService{

    @Autowired
    private ClientRepository repository;

    @Override
    @Transactional(readOnly = true)
    public List<ClientEntity> findAll() {

        return repository.findAll();
    }

    @Override
    public ClientEntity findById(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public ClientEntity save(ClientEntity cliente) {
        return repository.save(cliente);
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
