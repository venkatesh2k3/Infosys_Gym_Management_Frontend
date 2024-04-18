package com.intern.gym;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GymManagementCont {
	@Autowired
	GymManagementServ gms;

	@PostMapping("/gym-reg")
	public GymManagement register(@RequestBody GymManagement gm) {
		return gms.register(gm);
	}
}
