package biz.mopo.hqucst.interceptor;

import com.xxdw.platform.common.JsonResultVo;
import com.xxdw.platform.controller.Action2;
import com.xxdw.platform.controller.ActionInvocation;
import com.xxdw.platform.interceptor.AbstractInterceptor;

public class SystemLogFinalizer extends AbstractInterceptor {
	@Override
	public String intercept(ActionInvocation invocation) {
		String m = invocation.getNameOfActionMethod().toLowerCase();
		Action2 action = invocation.getAction();
		JsonResultVo jsonVo = action.getJsonVo();
		if(jsonVo.getMessage().equals("")) return null;			// 不记录空的日志
		
		if(jsonVo.getOp().equals(JsonResultVo.OP_NULL))
		{
			if (m.indexOf("add") >= 0)
				jsonVo.setOp(JsonResultVo.OP_ADD);
			else if (m.indexOf("del") >= 0)
				jsonVo.setOp(JsonResultVo.OP_DEL);
			else if (m.indexOf("mod") >= 0 || m.indexOf("change") >= 0 || m.indexOf("audit") >= 0)
				jsonVo.setOp(JsonResultVo.OP_MOD);
			else
				jsonVo.setOp(JsonResultVo.OP_VIEW);
		}
		
//		CommonService serv = CommonService.getInstance();
//		try {
//			Log log = new Log();
//			log.setUserId(action.getUserId());
//			log.setOp(jsonVo.getOp());
//			log.setDesc(jsonVo.getMsg());
//			serv.addSystemLog(log);
//		} catch (SQLException e) {
//			CommonUtils.TRACE("添加系统日志失败");
//		}
		
		return null;
	}

}
