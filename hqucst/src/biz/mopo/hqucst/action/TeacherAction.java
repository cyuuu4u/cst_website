package biz.mopo.hqucst.action;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.fileupload.FileUploadBase.InvalidContentTypeException;
import org.apache.commons.fileupload.FileUploadBase.SizeLimitExceededException;

import com.mysql.jdbc.exceptions.jdbc4.MySQLIntegrityConstraintViolationException;
import com.xxdw.platform.common.JsonResultVo;
import com.xxdw.platform.common.KeyValueNode;
import com.xxdw.platform.controller.Action2;
import com.xxdw.platform.util.CommonUtils;

import biz.mopo.hqucst.bean.TeacherForm;
import biz.mopo.hqucst.common.Constants;
import biz.mopo.hqucst.po.Teacher;
import biz.mopo.hqucst.po.User;
import biz.mopo.hqucst.service.TeacherService;

public class TeacherAction extends Action2 {
	private TeacherForm			    teacherForm;
	private TeacherService	        teacherService;
	
	public void setTeacherForm(TeacherForm teacherForm) {
		this.teacherForm = teacherForm;
	}

	public void setTeacherService(TeacherService teacherService) {
		this.teacherService = teacherService;
	}

	//====================================================
	@Override
	public String execute() {
		try {
			User me = (User)this.getLoginedUser();
			System.out.println(me.getUsername());
			System.out.println(this.teacherForm.getPapers());
			boolean ifEdited =this.teacherService.ifEdited(me.getId());
			List<Teacher> listTeacher=new ArrayList<Teacher>();
			if(ifEdited)
			{
				 listTeacher = this.teacherService.findTeacherIndex(me.getId());
			}
			else
			{
				Teacher nothing =new Teacher();
				nothing.setId(me.getId());
				nothing.setIndividualResume("");
				nothing.setEducation("");
				nothing.setName("");
				nothing.setPapers("");
				nothing.setPhotoUrl("");
				nothing.setResearchProject("");
				nothing.setSex("");
				listTeacher.add(nothing);
			}
			jsonVo.setSuccess(true);
			jsonVo.setData(listTeacher.get(0));
		} catch (SQLException e) {
			jsonVo.setMessage("获取教师信息出错。");
		}

		return JSON;
	}
	/*public String upload() {
		int documentKindId = CommonUtils.str2int(this.teacherForm.getDocumentKindId(), -1);// 确认客户端参数是否为id
		if (documentKindId == -1) {
			jsonVo.setMessage("错误的分类编号");
		}
 		 if(uploadtry()) {
			try {
				String url = getUpload().getUrl("filedata");// 设置上传后图片的URL, "Filedata"为表单项的name
				CommonUtils.TRACE(url);
				Document po=new Document();
				po.setName(this.documentForm.getName());
				po.setDocumentKindId(documentKindId);
				po.setCreatorId(3);
				po.setUrl(url);
				String kind=getUpload().getExtensionName("filedata");
				System.out.println(kind);
				if(!(kind.equals("docx")&&kind.equals("pdf")))
				{
					jsonVo.setErrors("请选择docx或pdf文件");
					this.print(jsonVo);
					return null;
				}
				this.documentService.add1(po);
				jsonVo.setSuccess(true);
				jsonVo.setMessage("上传文件成功。");
			} catch (SQLException e) {
				jsonVo.setMessage("上传文件失败。");
			}
		}

		this.print(jsonVo);
		return null;
	}
	
	private boolean uploadtry() {
		if(getUpload() == null) {
			System.out.println("上传表单必须是\"multipart/form-data\".");
			return false;
		}
		try {
			getUpload().setParentPath(getUpload().getParentPath() + Constants.SOFTWARE_UPLOAD_PATH);             
			getUpload().upload();
			if(getUpload().getUrl("filedata").equals("")) {
				jsonVo.setMessage("请选择文件！");
			}
			else {
				return true;
			}
		} catch(SizeLimitExceededException e){            
			jsonVo.setMessage("上传文件太大！");
		} catch(InvalidContentTypeException e) {
			jsonVo.setMessage("上传文件类型不被支持！");
		} catch(java.io.FileNotFoundException e) {
			jsonVo.setMessage("文件或目录不存在！");
		} catch (Exception e) {
			e.printStackTrace();
			jsonVo.setMessage("上传过程发生未知错误！");
		}

		return false;
	}*/
	/*public String update(){
		try {
			String Desc=this.projectForm.getDesc();	
			System.out.println(Desc+" ? ? ?"+this.projectForm.getId());
			Project po = (Project)this.projectForm.toPojo(Project.class);
			this.projectService.update(po);
			jsonVo.setSuccess(true);
		} catch (SQLException e) {
			jsonVo.setMessage("更改文件出错！");
		}		
	return JSON;
    }*/
}	
