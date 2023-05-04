/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.ma.Controller;

import com.portfolio.ma.Dto.dtoExperiencia;
import com.portfolio.ma.Entity.Experiencia;
import com.portfolio.ma.Security.Controller.Mensaje;
import com.portfolio.ma.Service.SExperiencia;
import io.micrometer.common.util.StringUtils;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("explab")
@CrossOrigin(origins  = "http//localhost:4200")
public class CExperiencia {
    @Autowired
    SExperiencia sExperiencia;
    
    @GetMapping("/lista")
    public ResponseEntity<List<Experiencia>> list(){
    List<Experiencia> list = sExperiencia.list();
    return new ResponseEntity(list, HttpStatus.OK);
    }
    
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody dtoExperiencia dtoexp){
    if(StringUtils.isBlank(dtoexp.getNombreE()))
        return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
    if(sExperiencia.existsByNombreE(dtoexp.getNombreE()))
        return new ResponseEntity(new Mensaje("Experiencia Existente"),HttpStatus.BAD_REQUEST);
    
    Experiencia exp = new Experiencia(dtoexp.getNombreE(),dtoexp.getDescripcionE());
    sExperiencia.save(exp);
    
    return new ResponseEntity(new Mensaje("Experiencia guardada"),HttpStatus.OK);
    }
    
    
    @PutMapping("/update/(id)")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody dtoExperiencia dtoexp){
        if(!sExperiencia.existsById(id))
            return new ResponseEntity(new Mensaje("El ID no existe"),HttpStatus.BAD_REQUEST);
        if(sExperiencia.existsByNombreE(dtoexp.getNombreE()) && sExperiencia.getByNombreE(dtoexp.getNombreE()).get()
                .getId()!= id)
            return new ResponseEntity(new Mensaje("Experiencia ya existente"),HttpStatus.BAD_REQUEST);
        if(StringUtils.isBlank(dtoexp.getNombreE()))
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"),HttpStatus.BAD_REQUEST);
        
        Experiencia exp = sExperiencia.getOne(id).get();
        exp.setNombreE(dtoexp.getNombreE());
        exp.setDescripcionE((dtoexp.getDescripcionE()));
                
        
        sExperiencia.save(exp);
        return new ResponseEntity(new Mensaje("Experiencia actualizada"),HttpStatus.OK);
    }
    
    public ResponseEntity<?> delete(@PathVariable("id") int id){
    if(!sExperiencia.existsById(id))
            return new ResponseEntity(new Mensaje("El ID no existe"),HttpStatus.BAD_REQUEST);
    sExperiencia.delete(id);
    
    return new ResponseEntity(new Mensaje("Experiencia eliminada"), HttpStatus.OK);
    }
    
    @GetMapping("/detail/{id}")
    public ResponseEntity<Experiencia> getById(@PathVariable("id") int id){
        if(!sExperiencia.existsById(id))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        Experiencia exp = sExperiencia.getOne(id).get();
        return new ResponseEntity(exp, HttpStatus.OK);
    }
    
}
