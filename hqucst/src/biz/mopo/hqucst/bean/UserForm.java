package biz.mopo.hqucst.bean;

import com.xxdw.platform.controller.FilterForm;

public class UserForm extends FilterForm {

    private String id          	= "";
    private String deptId      	= "";
    private String hostName    	= "";
    private String enabled     	= "";
    private String monitored   	= "";
    private String auditStepNum	= "";
    private String isAuditor   	= "";
    private String watermark   	= "";
    private String username    	= "";
	private String myname      	= "";
	private String oldPassword  = "";
	private String password    	= "";
	private String authKind    	= "";
	private String amount     	= "";
	private String email       	= "";
	private String desc        	= "";
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getDeptId() {
		return deptId;
	}

	public void setDeptId(String deptId) {
		this.deptId = deptId;
	}

	public String getHostName() {
		return hostName;
	}

	public void setHostName(String hostName) {
		this.hostName = hostName;
	}

	public String getEnabled() {
		return enabled;
	}

	public void setEnabled(String enabled) {
		this.enabled = enabled;
	}

	public String getMonitored() {
		return monitored;
	}

	public void setMonitored(String monitored) {
		this.monitored = monitored;
	}

	public String getAuditStepNum() {
		return auditStepNum;
	}

	public void setAuditStepNum(String auditStepNum) {
		this.auditStepNum = auditStepNum;
	}

	public String getIsAuditor() {
		return isAuditor;
	}

	public void setIsAuditor(String isAuditor) {
		this.isAuditor = isAuditor;
	}

	public String getWatermark() {
		return watermark;
	}

	public void setWatermark(String watermark) {
		this.watermark = watermark;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getMyname() {
		return myname;
	}

	public void setMyname(String myname) {
		this.myname = myname;
	}

	public String getOldPassword() {
		return oldPassword;
	}

	public void setOldPassword(String oldPassword) {
		this.oldPassword = oldPassword;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAuthKind() {
		return authKind;
	}

	public void setAuthKind(String authKind) {
		this.authKind = authKind;
	}

	public String getAmount() {
		return amount;
	}

	public void setAmount(String amount) {
		this.amount = amount;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	@Override
	public boolean validate() {
		boolean flag = true ;
		
//		if(!this.username.matches("\\w[\\w\\d_]{4,24}")){
//			flag = false ;
//			this.errors.put("errUsername", "用户名应由字母、数字或下划线组成。") ;
//		}
//		if(!this.password.matches(".{5,25}")){
//			flag = false ;
//			this.errors.put("errPassword", "密码应为5-25字符。") ;
//		}
//		if(!this.myname.matches(".{2,25}")){
//			flag = false ;
//			this.errors.put("errMyname", "名称应为2-25字符。") ;
//		}
//		if(!this.phone.matches("[\\d, ]{11,30}")){
//            flag = false ;
//            this.errors.put("errPhone", "电话应仅含11-30个数字、逗号或空格字符。") ;
//        }
//		if(!this.email.matches(".{0,255}")){
//			flag = false ;
//			this.errors.put("errEmail", "Email格式不正确。");
//		}
		return flag ;
	}
}
