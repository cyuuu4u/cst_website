package biz.mopo.hqucst.bean;

import java.util.List;

import com.xxdw.platform.controller.FilterForm;

public class LogsForm extends FilterForm {

    private List<LogForm> jsonLogs;
    private List<TaskForm> jsonTasks;

	public List<LogForm> getJsonLogs() {
		return jsonLogs;
	}


	public void setJsonLogs(List<LogForm> jsonLogs) {
		this.jsonLogs = jsonLogs;
	}


	public List<TaskForm> getJsonTasks() {
		return jsonTasks;
	}


	public void setJsonTasks(List<TaskForm> jsonTasks) {
		this.jsonTasks = jsonTasks;
	}

	@Override
    public boolean validate() {
        boolean flag = true ;
        return flag ;
    }

}
