/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portfolio.ma.Interface;

import com.portfolio.ma.Entity.Persona;
import java.util.List;



public interface iPersonaService {
        //traer una lista persona
    public List<Persona> getPersona();
    
    //Guardar un objeto de tipo persona
    public void savePersona(Persona persona);
    
    //Eliminar un objeto y buscamos por id
    public void deletePersona(Long id);
    
    //Buscar objeto por id
    public Persona findPersona(Long id);
    
}
