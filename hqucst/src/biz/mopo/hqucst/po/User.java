package biz.mopo.hqucst.po;

import java.util.Date;
import java.util.List;

import com.xxdw.platform.common.Pojo;

public class User extends Pojo {
	private static final long serialVersionUID = 4828252218341718631L;
	public static final int ADMIN 			= 1;
	public static final int PROP_ROOT 		= 0;
	public static final int PROP_MODERATOR 	= 1;
	public static final int PROP_COMMON 	= 2;
	
	private Integer id; 
    private String username;
    private String password;
    private String oldPassword;
	private String status;
    private String name;    
    private String phone;   
    private String email;    
    private Date lasttime;
    private String loginip;
    private Integer creatorId;
    private String creatorName;
    private Date creationTime;
    private Boolean sel;
    private Boolean Enabled;
    
    public Boolean getEnabled() {
		return Enabled;
	}
	public void setEnabled(boolean enabled) {
		Enabled = enabled;
	}
	public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getOldPassword() {
		return oldPassword;
	}
	public void setOldPassword(String oldPassword) {
		this.oldPassword = oldPassword;
	}
    public String getStatus() {
        return status;
    }
	public String getStatusStr() {
        return status.equals("Y") ? "启用" : "禁用";
    }
    public void setStatus(String status) {
        this.status = status;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public Date getLasttime() {
        return lasttime;
    }
    public void setLasttime(Date lasttime) {
        this.lasttime = lasttime;
    }
    public String getLoginip() {
        return loginip;
    }
    public void setLoginip(String loginip) {
        this.loginip = loginip;
    }
    public Integer getCreatorId() {
        return creatorId;
    }
    public void setCreatorId(Integer creatorId) {
        this.creatorId = creatorId;
    }
    public String getCreatorName() {
        return creatorName;
    }
    public void setCreatorName(String creatorName) {
        this.creatorName = creatorName;
    }
    public Date getCreationTime() {
        return creationTime;
    }
    public void setCreationTime(Date creationTime) {
        this.creationTime = creationTime;
    }
	public Boolean getSel() {
		return sel;
	}
	public void setSel(Boolean sel) {
		this.sel = sel;
	}
}
