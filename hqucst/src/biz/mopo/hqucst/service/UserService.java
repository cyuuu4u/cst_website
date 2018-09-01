package biz.mopo.hqucst.service;

import java.sql.SQLException;
import java.util.List;

import biz.mopo.hqucst.dao.UserDao;
import biz.mopo.hqucst.po.User;

import com.xxdw.platform.common.SearchVo;
import com.xxdw.platform.controller.PageSupport;

public class UserService {
	private UserDao 	userDao;

	private static UserService softwareService = null;
	private UserService() {
		this.userDao = UserDao.getInstance();
	}
	
	public static UserService getInstance() {
		if(softwareService == null) {
			softwareService = new UserService();
		}
		return softwareService;
	}
	
	//---------------------------------------------------------
	public boolean hasWithUsername(String username, Integer exceptId) throws SQLException {
		return this.userDao.hasWithUsername(username, exceptId);
	}
	
	public boolean isPasswordMatch(String username, String password) throws SQLException {
		return this.userDao.isPasswordMatch(username, password);
	}
	
	public User findById(Integer id) throws SQLException {
		return this.userDao.findById(id);
	}
	
	public User findByUsername(String username) throws SQLException {
        return this.userDao.findByUsername(username);
    }
	
	public List<User> findAll() throws SQLException {
		return this.userDao.findAll();
	}
	
	public PageSupport<User> findAllByPage(PageSupport<User> ps) throws SQLException {
		return this.userDao.findAllByPage(ps);
	}
	
	/*public void add(User po) throws SQLException {
		this.userDao.add(po);
	}*/
	
	public void deleteById(int id) throws SQLException {
        this.userDao.deleteById(id);
    }
	
	/*public void update(User po) throws SQLException {
		this.userDao.update(po);
	}
	
	
	
	public User addAmount(User po) throws SQLException {
		return this.userDao.addAmount(po);
	}*/
	
	public void changePassword(User po) throws SQLException {
        this.userDao.changePassword(po);
    }
	
	public List<User> query(List<SearchVo> listSearchVo) throws SQLException {
		return this.userDao.query(listSearchVo);
	}
	
}