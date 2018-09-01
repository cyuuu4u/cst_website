package biz.mopo.hqucst.dao;

import java.sql.SQLException;
import java.util.List;

import biz.mopo.hqucst.po.Log;

import com.xxdw.platform.common.SearchVo;
import com.xxdw.platform.db.DbUtil;

public class LogDao {

	private static LogDao logDao = null;
	private LogDao() {}

	public static LogDao getInstance() {
		if(logDao == null) {
			logDao = new LogDao();
		}
		return logDao;
	}

	public List<Log> findAll() throws SQLException {

		String strSql = "SELECT * FROM v_log ORDER BY f_creationTime DESC";
		return DbUtil.executeQuery(strSql, Log.class);
	}

	public List<Log> query(List<SearchVo> listSearchVo) throws SQLException {

		String filter = SearchVo.parseCondition(listSearchVo);
		String strSql = "SELECT * FROM v_log WHERE 1=1 " + filter + " ORDER BY f_creationTime DESC";
		return DbUtil.executeQuery(strSql, Log.class);
	}

	public void del(List<Log> listLogs) throws SQLException {

		for(Log l : listLogs)
		{
			String strSql = "DELETE FROM t_log WHERE f_id=" + l.getId();
			DbUtil.executeUpdate(strSql);
		}
	}
}