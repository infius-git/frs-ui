import { Injectable } from '@angular/core';
@Injectable()
export class GlobalConstant {
  BASE_URL: string = 'http://34.231.195.192:9090';
  BASE_URL_1: string = 'http://localhost:8080';
  DATA_SERVICE_CONTEXT: string = '/services/proximity';

  DATA_SERVICE_CONTEXT_LOCAL: string = '';
  MODULE_SERVICE_CONTEXT_LOCAL: string = '';
  
  QUERY_PARAM_IS_COMPLETE_RESPONSE: string = 'isSendCompleteResponseool';
  QUERY_PARAM_TIME_STAMP: string = 'asOfTimestamp';
 
  API_CONTEXT_DASHBOARD_ROOT: string = '/api/dashboard/root/v1';
  API_CONTEXT_DASHBOARD: string = '/api/dashboard';
  PATH_MAP_BY_VISIT_ID: string = '/map-by-visitIds?visitId=';

  API_CONTEXT_REGISTERED_USER_DATA: string  = '/api/account/user/registered/houselist';

}
