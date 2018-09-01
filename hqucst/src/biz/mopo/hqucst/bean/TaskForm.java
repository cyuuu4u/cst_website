package biz.mopo.hqucst.bean;

import com.xxdw.platform.controller.FilterForm;

public class TaskForm extends FilterForm {
	
	private String id = "";
	private String dateType = "";
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getDateType() {
		return dateType;
	}

	public void setDateType(String dateType) {
		this.dateType = dateType;
	}

	@Override
	public boolean validate() {
		// TODO Auto-generated method stub
		return true;
	}
}