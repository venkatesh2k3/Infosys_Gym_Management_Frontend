package com.intern.gym.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.intern.gym.pojo.GymManagement;
import com.intern.gym.service.GymManagementServ;

@RestController
public class GymManagementCont {
	@Autowired
	GymManagementServ gms;

	@PostMapping("/gym-reg")
	public String register(@RequestBody GymManagement gm) {
		gms.register(gm);
		return "Data inserted";
	}
	@GetMapping("/gym-list")
    public List<GymManagement> getAllGymManagement() {
        return gms.getAllGymManagement();
    }

}
