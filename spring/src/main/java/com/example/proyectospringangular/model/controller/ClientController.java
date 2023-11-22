package com.example.proyectospringangular.model.controller;

import com.example.proyectospringangular.model.entity.ClientEntity;
import com.example.proyectospringangular.model.service.ClienteService;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class ClientController {

    @Autowired
    private ClienteService service;

    @GetMapping("/clientes")
    @JsonFormat
    public List<ClientEntity>index(){

      return service.findAll();

    }

    @GetMapping("/clientes/{id}")
    public ClientEntity show (@PathVariable Long id){

        return service.findById(id);
    }

    @PostMapping("/clientes")
    @ResponseStatus(HttpStatus.CREATED)
    public ClientEntity save (@RequestBody ClientEntity cliente){
        return service.save(cliente);
    }
    @PutMapping("/clientes/{id}")
    @ResponseStatus(HttpStatus.CREATED)

    public ClientEntity update (@RequestBody ClientEntity cliente, @PathVariable Long id){

       ClientEntity clienteActual =  service.findById(id);

       clienteActual.setName(cliente.getName());
       clienteActual.setSurname(cliente.getSurname());
       clienteActual.setEmail(cliente.getEmail());

        return service.save(clienteActual);
    }

    @DeleteMapping("/clientes/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id){

        service.delete(id);
    }


}
