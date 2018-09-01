package biz.mopo.hqucst.interceptor;

import com.xxdw.platform.common.JsonResultVo;
import com.xxdw.platform.controller.Action2;
import com.xxdw.platform.controller.ActionInvocation;
import com.xxdw.platform.interceptor.AbstractInterceptor;

public class UsbkeyCheckInterceptor extends AbstractInterceptor {

	@Override
	public String intercept(ActionInvocation invocation) {
		Action2 action = invocation.getAction();
		JsonResultVo jsonVo = action.getJsonVo();
		
//		CommonService serv = CommonService.getInstance();
//		try {
//			if (! serv.isUsbkeyOk()) {
//				jsonVo.setMsg("尚未连接有效的加密狗,请联系管理员!");
//				action.printJSON();
//				return null;
//			}
//		} catch (SQLException e) {
//			CommonUtils.TRACE("添加系统日志失败");
//		}
		
		return invocation.invoke();
	}
}
