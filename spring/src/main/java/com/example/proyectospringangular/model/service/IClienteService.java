package com.example.proyectospringangular.model.service;

import com.example.proyectospringangular.model.entity.ClientEntity;

import java.util.List;

public interface IClienteService {

    public List<ClientEntity> findAll();

    public ClientEntity findById(Long id);

    public ClientEntity save(ClientEntity cliente);

    public void delete(Long id);
}
