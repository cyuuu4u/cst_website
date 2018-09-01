package biz.mopo.hqucst.service;

import java.sql.SQLException;
import java.util.List;

import biz.mopo.hqucst.dao.DocumentDao;
import biz.mopo.hqucst.po.Document;
import biz.mopo.hqucst.po.DocumentKind;
import biz.mopo.hqucst.po.Image;

import com.xxdw.platform.controller.ServiceBase;

public class DocumentService extends ServiceBase {
	private DocumentDao 	documentDao;
	public void setDocumentDao(DocumentDao projectDao) {
		this.documentDao = projectDao;
	}
	
	//---------------------------------------------------------
	
	public List<Document> findByParentCode(Integer parentcode) throws SQLException {
		return this.documentDao.findByParentCode(parentcode);
	}
	public List<Document> findByDate(Integer documentKindId,Integer year,Integer month) throws SQLException {
		return this.documentDao.findByDate(documentKindId,year,month);
	}
	
	public List<Document> findByDocumentKindId(Integer documentKindId) throws SQLException {
		return this.documentDao.findByDocumentKindId(documentKindId);
	}
	
	public List<Document> findById(Integer id) throws SQLException {
		return this.documentDao.findById(id);
	}
	
	public List<Document> findNewsByDocumentKindId(Integer documentKindId) throws SQLException {
		return this.documentDao.findNewsByDocumentKindId(documentKindId);
	}
	
	public void add1(Document po) throws SQLException {
		this.documentDao.add1(po);
	}
	
	public void addImage(Image po) throws SQLException {
		this.documentDao.addImage(po);
	}
	
	public void edit(Document po) throws SQLException {
		this.documentDao.edit(po);
	}
	
	public void deleteById(String id) throws SQLException {
        this.documentDao.deleteById(id);
    }
	
	public List<DocumentKind> findDocumentKindByParentCode(Integer parentcode) throws SQLException {
		return this.documentDao.findDocumentKindByParentCode(parentcode);
	}
	/*
	public void update(Project po) throws SQLException {
		this.projectDao.update(po);
	}*/
}
