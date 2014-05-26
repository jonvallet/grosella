package com.jonvallet.grosella;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

/**
 * Created by jvalletw on 26/05/14.
 */
@Path("grosella")
public class GrosellaMenu {

    @GET
    public String getMenus(){
        return "Hello Grosella!!";

    }
}
