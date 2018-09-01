package biz.mopo.hqucst.dao;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import biz.mopo.hqucst.po.DocumentKind;
import biz.mopo.hqucst.po.Teacher;
import biz.mopo.hqucst.po.User;
import biz.mopo.hqucst.po.UserTeacher;

import com.xxdw.platform.common.SearchVo;
import com.xxdw.platform.controller.PageSupport;
import com.xxdw.platform.db.DaoBase;
import com.xxdw.platform.db.DbUtil;

public class TeacherDao extends DaoBase {
		
	public boolean ifEdited(Integer userId) throws SQLException{
		String strSql = "SELECT * FROM t_user_teacher WHERE f_userId="+userId;
		return DbUtil.hasRecord(strSql);
	}
	
	public  List<Teacher> findTeacherIndex(Integer userId) throws SQLException{
		List<UserTeacher> userteacher=new ArrayList<UserTeacher>();
		String strSql1 = "SELECT * FROM t_user_teacher WHERE f_userId="+userId;
		userteacher = DbUtil.executeQuery(strSql1, UserTeacher.class);
		Integer  teacherId=userteacher.get(0).getTeacherId();
		String strSql2 = "SELECT * FROM t_teacher WHERE f_id="+teacherId;
		return DbUtil.executeQuery(strSql2, Teacher.class);		
	}
	
/*
	public List<Project> findAll() throws SQLException {
		String strSql = "SELECT * FROM t_document ORDER BY f_order";
		return DbUtil.executeQuery(strSql, Project.class);
	}*/
	
}
