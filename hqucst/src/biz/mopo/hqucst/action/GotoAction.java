package biz.mopo.hqucst.action;

import com.xxdw.platform.controller.Action2;

public class GotoAction extends Action2 {
	
	private String module;
	private String url;
	private String id;
	public String getUrl() {
		return this.url;
	}
	public String getModule() {
		return this.module;
	}
	public String getId() {
		return this.id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
	@Override
	public String execute() {
		this.module = request.getParameter("a");
		this.url = this.module + ".jsp";
		return SUCCESS;
	}
}