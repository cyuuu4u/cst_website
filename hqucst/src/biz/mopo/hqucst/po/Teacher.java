package biz.mopo.hqucst.po;

import com.xxdw.platform.common.Pojo;

public class Teacher extends Pojo {
	/**
	 * 
	 */
	private static final long serialVersionUID = -6351021480088631270L;
	private Integer  id;
	private String   name;
	private String   sex;
	private String   job;
	private String   education;
	private String   photoUrl;
	private String   individualResume;
	private String   researchProject;
	private String   papers;

	public String getJob() {
		return job;
	}
	public void setJob(String job) {
		this.job = job;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
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
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	
}
