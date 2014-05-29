package com.jonvallet.grosella;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Request;
import javax.ws.rs.core.SecurityContext;

/**
 * Created by jvalletw on 26/05/14.
 */
@Path("grosella")
public class GrosellaMenu {

    @GET
    public String getMenus(@Context SecurityContext req){

        //String user = req.getUserPrincipal().getName();

        return "Hello Grosella user! ";

    }
}
