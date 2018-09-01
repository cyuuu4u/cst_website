<%@ page language="java" pageEncoding="utf-8"%>
<%@ include file="header.inc.jsp"%>

<body>
	<input type="hidden" id="idKindId" value="${id}" />
	<div id="idLayoutPage" class="easyui-layout">
		<form id="idFileForm" enctype="multipart/form-data" method="post">
			<!-- 页面左部 -->
			<span>请输入文章名：    </span><input class="textbox" name="name" type="text" style="width: 50%;"/><p>
				请选择文章分类：
				<select class="easyui-combobox" id="comboBoxAdd" name="comboBoxAdd" style="width: 100px;"></select>
			</p>
	            <div style="margin:20px 20px"></div>
	            <span>请输入文章简介：</span><textarea wrap="virtual" name="brief" style="width: 95%; height: 150px"></textarea>
	            <div style="margin:20px 20px"></div>
			<div class="editorArea">
				<textarea id="editor" class="ckeditor" name="article"></textarea>
				<script type="text/javascript">
				window.onload=function(){
					CKEDITOR.replace('editor');
				}
				</script>
			</div>
		</form>
		<p style="text-align:center;">
			<a id="idBtnSubmit" href="#" class="easyui-linkbutton"  style="margin:0 auto;" data-options="iconCls:'icon-right'">提交</a>
		</p>
	</div>
</body>
</html>
