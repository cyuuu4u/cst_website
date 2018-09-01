package biz.mopo.hqucst.service;

import java.sql.SQLException;
import java.util.List;

import biz.mopo.hqucst.dao.TeacherDao;
import biz.mopo.hqucst.po.Teacher;

import com.xxdw.platform.common.SearchVo;
import com.xxdw.platform.controller.PageSupport;
import com.xxdw.platform.controller.ServiceBase;

public class TeacherService extends ServiceBase {
	private  TeacherDao  	teacherDao;
	
	public void setTeacherDao(TeacherDao teacherDao) {
		this.teacherDao = teacherDao;
	}

	public List<Teacher> findTeacherIndex(Integer userId) throws SQLException {
		return this.teacherDao.findTeacherIndex(userId);
	}
	public boolean ifEdited(Integer userId) throws SQLException{
		return this.teacherDao.ifEdited(userId);
	}
	
	/*
	public void update(Project po) throws SQLException {
		this.projectDao.update(po);
	}*/
}
