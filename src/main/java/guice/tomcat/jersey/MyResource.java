package guice.tomcat.jersey;

import guice.tomcat.MyService;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("myresource")
public class MyResource {

    @Inject
    private MyService myService;

    @GET
    @Produces(MediaType.TEXT_HTML)
    public Response getIt() {
        return Response.ok("It worked").build();
    }
}