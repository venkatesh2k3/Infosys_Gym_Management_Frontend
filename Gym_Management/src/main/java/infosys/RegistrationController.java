package infosys;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegistrationController {
@Autowired 
RegistrationService rs;
@PostMapping("/reg")
public String Registrationinsert(@RequestBody RegistrationPojo rp) {
	int i =rs.register(rp);
	if (i>0)
		return "Data inserted";
	else 
		return "Data Not inserted";
}

}
