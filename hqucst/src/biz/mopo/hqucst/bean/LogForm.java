package biz.mopo.hqucst.bean;

import com.xxdw.platform.controller.FilterForm;

public class LogForm extends FilterForm {
	
	private String id = "";
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
	@Override
	public boolean validate() {
		// TODO Auto-generated method stub
		return true;
	}
}