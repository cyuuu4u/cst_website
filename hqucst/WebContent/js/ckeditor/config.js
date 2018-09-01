/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
    config.height = '400';
    
    config.language = 'zh-cn';//界面语言

    //config.uiColor = '#AADC6E';工具栏和边框颜色
    config.allowedContent = true; // 是否允许使用源码模式进行编辑

    config.enterMode = CKEDITOR.ENTER_BR;
    config.shiftEnterMode = CKEDITOR.ENTER_P;

    config.font_names = "新宋体/新宋体;黑体/黑体;仿宋/仿宋_GB2312;楷体/楷体_GB2312;隶书/隶书;幼圆/幼圆;微软雅黑/微软雅黑;" + config.font_names;

    config.templates_replaceContent = 0;
 
// 图片上传相关
    //config.filebrowserUploadUrl="action/document_uploadImg.action";//"action/document_uploadImg.action
    // ckeditorUpload"是请求的URL，也就是点击这个按钮就会post到ckeditorUpload地址进行处理，这里指向的是Struts 2的一个Action。
    config.filebrowserImageUploadUrl = 'action/document_uploadImg.action'; // 图片上传路径../uploads
    config.image_previewText = ' '; // 图片信息面板预览区内容的文字内容，默认显示CKEditor自带的内容
    config.removeDialogTabs = 'image:advanced;image:Link'; // 移除图片上传页面的'高级','链接'页签

    /*** 文件上传功能的配置----------------------- 
    config.filebrowserBrowseUrl = '../ckfinder/ckfinder.html';//点击上传服务器请求url actions/ckeditorUpload
    config.filebrowserImageBrowseUrl = '../ckfinder/ckfinder.html?Type=Images'; // 图片上传路径
    config.filebrowserFlashBrowseUrl = '../ckfinder/ckfinder.html?Type=Flash';
    config.filebrowserUploadUrl = '../ckfinder/core/connector/java/connector.java?command=QuickUpload&type=Files';
    config.filebrowserImageUploadUrl = '../ckfinder/core/connector/java/connector.java?command=QuickUpload&type=Images';
    config.filebrowserFlashUploadUrl = '../ckfinder/core/connector/java/connector.java?command=QuickUpload&type=Flash';
     */

};
