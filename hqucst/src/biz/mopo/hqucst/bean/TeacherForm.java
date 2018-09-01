package biz.mopo.hqucst.bean;

import java.util.List;

import com.xxdw.platform.controller.FilterForm;

public class TeacherForm extends FilterForm {

	private String id                        = "";
	private String name                      = "";  
    private String sex                       = "";
    private String education                 = "";
    private String job                       = "";
    private String photoUrl                  = "";
	private String individualResume          = "";
    private String researchProject           = "";
    private String papers                    = "";
	
    

	public String getId() {
		return id;
	}







	public void setId(String id) {
		this.id = id;
	}







	public String getName() {
		return name;
	}







	public void setName(String name) {
		this.name = name;
	}







	public String getSex() {
		return sex;
	}







	public void setSex(String sex) {
		this.sex = sex;
	}







	public String getEducation() {
		return education;
	}







	public void setEducation(String education) {
		this.education = education;
	}







	public String getJob() {
		return job;
	}







	public void setJob(String job) {
		this.job = job;
	}







	public String getPhotoUrl() {
		return photoUrl;
	}







	public void setPhotoUrl(String photoUrl) {
		this.photoUrl = photoUrl;
	}







	public String getIndividualResume() {
		return individualResume;
	}







	public void setIndividualResume(String individualResume) {
		this.individualResume = individualResume;
	}







	public String getResearchProject() {
		return researchProject;
	}







	public void setResearchProject(String researchProject) {
		this.researchProject = researchProject;
	}







	public String getPapers() {
		return papers;
	}







	public void setPapers(String papers) {
		this.papers = papers;
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
//		if(!this.name.matches(".{2,25}")){
//			flag = false ;
//			this.errors.put("errName", "名称应为2-25字符。") ;
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
