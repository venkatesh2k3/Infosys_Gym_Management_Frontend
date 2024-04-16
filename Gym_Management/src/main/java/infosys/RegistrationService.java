package infosys;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
public class RegistrationService {
	@Autowired
	JdbcTemplate jt;

public int register(RegistrationPojo rp) {
	String firstName=rp.getFirstName();
	String lastName =rp.getLastName();
	String email=rp.getEmail();
	String feedback =rp.getFeedback();
	long phNum=rp.getPhNum();
	String sql ="insert into registration values(?,?,?,?,?)";
	int i = jt.update(sql,firstName,lastName,email,phNum,feedback);
	return i;
}
}
