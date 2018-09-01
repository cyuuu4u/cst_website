package biz.mopo.hqucst.action;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.fileupload.FileUploadBase.InvalidContentTypeException;
import org.apache.commons.fileupload.FileUploadBase.SizeLimitExceededException;


import com.xxdw.platform.controller.Action2;
import com.xxdw.platform.util.CommonUtils;

import biz.mopo.hqucst.bean.DocumentForm;
import biz.mopo.hqucst.common.Constants;
import biz.mopo.hqucst.po.Document;
import biz.mopo.hqucst.po.Image;
import biz.mopo.hqucst.service.DocumentService;

public class FrontDocumentAction extends Action2 {
	private DocumentForm			documentForm;
	private DocumentService	        documentService;
	
	public void setDocumentForm(DocumentForm projectForm) {
		this.documentForm = projectForm;
	}
	
	public void setDocumentService(DocumentService projectService) {
		this.documentService = projectService;
	}
	
	//====================================================
	
	/*public String execute() {
		try {
			int parentCode = CommonUtils.str2int(this.documentForm.getParentCode(), -1);
			List<Document> listDocument = this.documentService.findByParentCode(parentCode);
			jsonVo.setSuccess(true);
			jsonVo.setRows(listDocument);
			jsonVo.setTotal(listDocument.size());
		} catch (SQLException e) {
			jsonVo.setMessage("获取文章列表出错。");
		}

		return JSON;
	}

	public String del(){
		if(this.getIds().isEmpty()) {
			jsonVo.setMessage(this.getMessage());
		}
		else {
			try {
				this.documentService.deleteById(this.getIds());
				jsonVo.setSuccess(true);
				jsonVo.setMessage("已成功删除文章");
			}catch (SQLException e) {
				jsonVo.setMessage("删除文章出错!");
				logger.debug("删除文章出错。", e);
			}
		}

		return JSON;
	}
	public String edit() {
		System.out.println("test1");
		if (this.documentForm.validate()) {
			Document po = (Document)this.documentForm.toPojo(Document.class);
			try {
					this.documentService.edit(po);
					jsonVo.setSuccess(true);
					jsonVo.setMessage("更改用户成功。");
				} catch (SQLException e) {
				jsonVo.setMessage("更改用户出错。");
			}
		} 
		return JSON;
	}
	
	//上传文章
	public String upload() {
		int documentKindId = CommonUtils.str2int(this.documentForm.getDocumentKindId(), -1);// 确认客户端参数是否为id
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

		//this.print(jsonVo);
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
	}
	public String update(){
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
    }
	public String showDocmentKind(){
		try {
			int parentCode = CommonUtils.str2int(this.documentForm.getParentCode(), -1);
			List<DocumentKind> listDocumentKind = this.documentService.findDocumentKindByParentCode(parentCode);
			jsonVo.setSuccess(true);
			jsonVo.setRows(listDocumentKind);
			jsonVo.setOnlyRows(true);
		} catch (SQLException e) {
			jsonVo.setMessage("获取类型列表出错。");
		}
		return JSON;
	}
	public String showDocmentKindIncludeAll(){
		try {
			int parentCode = CommonUtils.str2int(this.documentForm.getParentCode(), -1);
			List<DocumentKind> listDocumentKind = this.documentService.findDocumentKindByParentCode(parentCode);
			DocumentKind All=new DocumentKind();
			All.setCode(99);
			All.setName("选择全部");
			listDocumentKind.add(All);
			jsonVo.setSuccess(true);
			jsonVo.setRows(listDocumentKind);
			jsonVo.setOnlyRows(true);
		} catch (SQLException e) {
			jsonVo.setMessage("获取类型列表出错。");
		}
		return JSON;
	}*/
	public String showDocumentByKindId(){
		try {
			int documentKindId = CommonUtils.str2int(this.documentForm.getDocumentKindId(), -1);
			List<Document> listDocument=new ArrayList<Document>();
			if(documentKindId==99)
			{
				 int parentCode = CommonUtils.str2int(this.documentForm.getParentCode(), -1);
			     listDocument = this.documentService.findByParentCode(parentCode);
			}
			else
			{
			     listDocument = this.documentService.findNewsByDocumentKindId(documentKindId);
			}
			Document po=listDocument.get(0);
			jsonVo.setSuccess(true);
			jsonVo.setData(po);
		} catch (SQLException e) {
			jsonVo.setMessage("获取文章列表出错。");
		}

		return JSON;
	}
	
	public String showDocumentByKindId1(){
		try {
			int documentKindId = CommonUtils.str2int(this.documentForm.getDocumentKindId(), -1);
			List<Document> listDocument=new ArrayList<Document>();
			listDocument = this.documentService.findNewsByDocumentKindId(documentKindId);
			if(listDocument.size()>0)
			{
				Document po=listDocument.get(0);
				jsonVo.setData(po);
				System.out.println(po.getName()+"66666666666666");
			}
			jsonVo.setSuccess(true);
		} catch (SQLException e) {
			jsonVo.setMessage("获取文章列表出错。");
		}

		return JSON;
	}
	
	public String showDocumentByKindId2(){
		try {
			int documentKindId = CommonUtils.str2int(this.documentForm.getDocumentKindId(), -1);
			List<Document> listDocument=new ArrayList<Document>();
			listDocument = this.documentService.findNewsByDocumentKindId(documentKindId);
			if(listDocument.size()>1)
			{
				Document po=listDocument.get(1);
				jsonVo.setData(po);
			}
			jsonVo.setSuccess(true);
		} catch (SQLException e) {
			jsonVo.setMessage("获取文章列表出错。");
		}
		return JSON;
	}
	
	public String showDocumentByKindId3(){
		try {
			int documentKindId = CommonUtils.str2int(this.documentForm.getDocumentKindId(), -1);
			List<Document> listDocument=new ArrayList<Document>();
			listDocument = this.documentService.findNewsByDocumentKindId(documentKindId);
			if(listDocument.size()>2)
			{
				Document po=listDocument.get(2);
				jsonVo.setData(po);
			}
			jsonVo.setSuccess(true);
		} catch (SQLException e) {
			jsonVo.setMessage("获取文章列表出错。");
		}
		return JSON;
	}
	
	public String showDocumentByKindId4(){
		try {
			int documentKindId = CommonUtils.str2int(this.documentForm.getDocumentKindId(), -1);
			List<Document> listDocument=new ArrayList<Document>();
			listDocument = this.documentService.findNewsByDocumentKindId(documentKindId);
			if(listDocument.size()>3)
			{
				Document po=listDocument.get(3);
				jsonVo.setData(po);
			}
			jsonVo.setSuccess(true);
		} catch (SQLException e) {
			jsonVo.setMessage("获取文章列表出错。");
		}
		return JSON;
	}
	
	public String showDocumentById(){
		try {
			int id = CommonUtils.str2int(this.documentForm.getId(), -1);
			List<Document> listDocument=new ArrayList<Document>();
			listDocument = this.documentService.findById(id);
			Document po=listDocument.get(0);
		    jsonVo.setData(po);
			jsonVo.setSuccess(true);
		} catch (SQLException e) {
			jsonVo.setMessage("获取文章列表出错。");
		}
		return JSON;
	}
	public String showDocumentByDate(){
		try {
			int documentKindId = CommonUtils.str2int(this.documentForm.getDocumentKindId(), -1);
			int year = CommonUtils.str2int(this.documentForm.getYear(), -1);
			int month = CommonUtils.str2int(this.documentForm.getMonth(), -1);
			List<Document> listDocument=new ArrayList<Document>();
			listDocument = this.documentService.findByDate(documentKindId,year,month);
			jsonVo.setSuccess(true);
			jsonVo.setRows(listDocument);
			jsonVo.setTotal(listDocument.size());
		} catch (SQLException e) {
			jsonVo.setMessage("获取文章列表出错。");
		}

		return JSON;
	}
	
	//上传图片
	public String uploadImg() {
		/*String countryId  = request.getParameter("id");//获得文章id
		int cid = CommonUtils.str2int(countryId, -1);//string和int转换，如果转换失败显示错误的ID
		if (cid == -1) {
			this.jsonVo.setMessage("错误的ID");
			return JSON;
		}*/
		if(uploadImgtry()) {
			try {
				String url = getUpload().getUrl("upload");// 设置上传后图片的URL, "Filedata"为表单项的name
				CommonUtils.TRACE(url);
				Image po=new Image();
				po.setUrl(url);
				this.documentService.addImage(po);
				String callback =getRequest().getParameter("CKEditorFuncNum");
				PrintWriter writer;
				try {
					writer = response.getWriter();
					writer.print("<script type=\"text/javascript\">");                 // 对应上面out.println
		            writer.print("window.parent.CKEDITOR.tools.callFunction("+ callback + ",'" + url + "','')");
		            writer.print("</script>");
					writer.flush();
					writer.close();
				} catch (IOException e) {
					logger.error("print", e);
				}//需要修改为上传图片的po
				jsonVo.setSuccess(true);
				jsonVo.setMessage("上传文件成功。");
			} catch (SQLException e) {
				jsonVo.setMessage("上传文件失败。");
			}
		}

		this.print(jsonVo);
		return null;
	}
	
	private boolean uploadImgtry() {
		if(getUpload() == null) {
			System.out.println("上传表单必须是\"multipart/form-data\".");
			return false;
		}
		
		try {
			getUpload().setParentPath(getUpload().getParentPath() + Constants.PICTURE_UPLOAD_PATH);             
			getUpload().upload();
			
			String url = getUpload().getUrl("upload");
			if (url == null) {
				return true;
			}
			else {
				if(!getUpload().isValidPictureFile()) {
					jsonVo.setMessage("您选择的不是一个有效的图片文件！");                  
				}
				else if(getUpload().getUrl("upload").equals("")) {
					jsonVo.setMessage("请选择图片文件！");
				}
				else {
					return true;
				}
			}			
		} catch(SizeLimitExceededException e){            
			jsonVo.setMessage("上传文件太大！");
			logger.debug("上传文件太大。", e);
		} catch(InvalidContentTypeException e) {
			jsonVo.setMessage("上传文件类型不被支持！");
			logger.debug("上传文件类型不被支持。", e);
		} catch(java.io.FileNotFoundException e) {
			jsonVo.setMessage("文件或目录不存在！");
			logger.debug("文件或目录不存在。", e);
		} catch (Exception e) {
			jsonVo.setMessage("上传过程发生未知错误！");
			logger.debug("上传过程发生未知错误。", e);
		}

		return false;
	}
}	
