package biz.mopo.hqucst.action;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import biz.mopo.hqucst.bean.LogFilterForm;
import biz.mopo.hqucst.bean.LogForm;
import biz.mopo.hqucst.bean.LogsForm;
import biz.mopo.hqucst.po.Log;
import biz.mopo.hqucst.service.LogService;

import com.xxdw.platform.common.JsonResultVo;
import com.xxdw.platform.controller.Action2;

public class LogAction extends Action2 {
	private LogForm 	formBean;
	private LogsForm 	logsFormBean;
	private LogFilterForm filterForm;

	public void setFormBean(LogForm formBean) {
		this.formBean = formBean;
	}
	public LogForm getFormBean() {
		return formBean;
	}

	public LogsForm getLogsFormBean() {
		return logsFormBean;
	}
	
	public void setLogsFormBean(LogsForm logsFormBean) {
		this.logsFormBean = logsFormBean;
	}
	
	public LogFilterForm getFilterForm() {
		return filterForm;
	}

	public void setFilterForm(LogFilterForm filterForm) {
		this.filterForm = filterForm;
	}

	public String list() {
		LogService ls = LogService.getInstance();
		try {
			List<Log> listLog = ls.findAll();

			jsonVo.setSuccess(true);
			jsonVo.setData(listLog);
		} catch (SQLException e) {
			jsonVo.setMessage("获取系统日志出错。");
		}

		this.print(jsonVo);        
		return null;
	}

	public String query() {
		LogService ls = LogService.getInstance();
		try {
			List<Log> listLog = ls.query(filterForm.toSearchVoList());
			jsonVo.setSuccess(true);
			jsonVo.setData(listLog);
		} catch (SQLException e) {
			jsonVo.setMessage("获取系统日志出错。");
		}
		
		this.print(jsonVo);
		return null;
	}
	
	public String del() {		
		LogService ls = LogService.getInstance();
		if(logsFormBean.validate()) {
			List<Log> listLogs = new ArrayList<Log>();

			for (LogForm tf: this.logsFormBean.getJsonLogs()) {
				Log l = (Log)tf.toPojo(Log.class);
				listLogs.add(l);
			}
			try {
				ls.del(listLogs);
				jsonVo.setMessage("删除系统日志成功");
				jsonVo.setSuccess(true);
			}catch(SQLException e){
				jsonVo.setMessage("删除系统日志失败");
			}
		}
		else{
			jsonVo.setMessage("您提交的数据中部分格式不正确");
		}                
		this.print(jsonVo);
		return null;
	}
}