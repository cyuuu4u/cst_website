<%@ page language="java" pageEncoding="utf-8"%>
<%@ include file="header.inc.jsp"%>
<body>
<div id="idLayoutPage" class="easyui-layout">
    <div id="idPageTeacher">
        <div id="idToolTeacher" style="text-align: right;top:0;">
            <div>
                <a href="#" class="easyui-linkbutton" iconCls="icon-upload" plain="true" onclick="toolArticle.upload();">提交</a>
                <!--<a href="#" class="easyui-linkbutton" iconCls="icon-edit" plain="true" onclick="toolArticle.edit();">编辑</a>-->
            </div>
        </div>
        <div>
            <!--头像预览-->
            <div class="img">
                <img id="preview" alt="预览图片" src="images/default.jpg" onclick="over(preview,divImage,imgbig);" style="height:150px; max-width:150px">
            </div>
            <div id="idTeacherInfo">
            <!--个人简介上传-->
            <form id="idTeacherForm" enctype="multipart/form-data"  method="post">
                <!--<input name="countryId" type="hidden">-->
                <div style="margin-bottom:20px">
                    <span>姓名：</span>
                    <input id="idTname" class="textbox" name="name" type="text" />
                    <span style="margin-left: 20px">性别：</span>
                    <input id="idTgender" class="textbox" name="sex" type="text" />
                </div>
                <div style="margin-bottom:20px">
                    <span>学历：</span>
                    <input id="idTedu" class="textbox" name="education" type="text" />
                    <span style="margin-left: 20px">职称：</span>
                    <input id="idTpost" class="textbox" name="job" type="text" />
                </div>
                <div>
                    <p>照片上传：</p>
                    <input class="textbox" type="file" name="img" data-options="prompt:'请选择照片...'"  style="width: 38%"/>
                </div>
                <div>
                    <p>个人简介：</p>
                    <input id="idTbrief" class="textbox" name="individualResume" type="text" style="width: 85%"/>
                </div>
                <div style="margin:20px 0">
                    <p>科研项目：</p>
                    <input id="idTbox" class="textbox" name="researchProject" type="text" />
                </div>
                <div style="margin:20px 0">
                    <p>论文列表：</p>
                    <input id="idTthesis" class="textbox" name="papers" type="text" />
                </div>
            </form>
            </div>
        </div>
    </div>

</div>
</body>
</html>
