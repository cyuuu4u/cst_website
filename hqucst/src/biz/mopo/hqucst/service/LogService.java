package biz.mopo.hqucst.service;

import java.sql.SQLException;
import java.util.List;

import biz.mopo.hqucst.dao.LogDao;
import biz.mopo.hqucst.po.Log;

import com.xxdw.platform.common.SearchVo;

public class LogService {
	private LogDao logDao;

	private static LogService softwareService = null;
	private LogService() {
		this.logDao = LogDao.getInstance();
	}
	
	public static LogService getInstance() {
		if(softwareService == null) {
			softwareService = new LogService();
		}
		return softwareService;
	}
	
	//------------------------------------------------------
	public List<Log> findAll() throws SQLException {
		return this.logDao.findAll();
	}
	
	public List<Log> query(List<SearchVo> listSearchVo) throws SQLException {
		return this.logDao.query(listSearchVo);
	}
	
	public void del(List<Log> listLogs) throws SQLException {
		this.logDao.del(listLogs);
	}
}