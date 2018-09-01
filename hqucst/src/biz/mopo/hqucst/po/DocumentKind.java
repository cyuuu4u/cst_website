package biz.mopo.hqucst.po;

import com.xxdw.platform.common.Pojo;

public class DocumentKind extends Pojo {

	/**
	 * 
	 */
	private static final long serialVersionUID = -6351021480088631270L;
	private Integer code;
	private Integer parentCode;
	private String  name;
	public Integer getCode() {
		return code;
	}
	public void setCode(Integer code) {
		this.code = code;
	}
	public Integer getParentCode() {
		return parentCode;
	}
	public void setParentCode(Integer parentCode) {
		this.parentCode = parentCode;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
}
