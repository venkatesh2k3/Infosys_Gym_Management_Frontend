package com.intern.gym;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GymManagementServ {
	@Autowired
	GymManagementRepo gmr;

	public GymManagement register(GymManagement gm) {
		return gmr.save(gm);
	}

}
