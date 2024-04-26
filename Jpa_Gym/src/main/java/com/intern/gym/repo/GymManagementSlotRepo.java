package com.intern.gym.repo;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intern.gym.pojo.GymManagementSlotPojo;

public interface GymManagementSlotRepo extends JpaRepository<GymManagementSlotPojo, Long> {
	List<GymManagementSlotPojo> findAllByStartTimeBetweenAndEndTimeBetween(LocalDateTime startTime1, LocalDateTime endTime1, LocalDateTime startTime2, LocalDateTime endTime2);
	}