export class Constants {
  // ----------------- Communication with API -----------//
  public static readonly CONTENT_TYPE_HEADER_KEY = 'Content-Type';
  public static readonly CONTENT_TYPE_JSON_VALUE = 'application/json';
  public static readonly BASE_URI = 'http://fenw.etsisi.upm.es:10000';
  public static readonly USER_URI = '/users';
  public static readonly USER_LOGIN_URI = '/login';
  public static readonly USER_LOGIN_URI_PARAM = 'username=';
  public static readonly PASSWORD_LOGIN_URI_PARAM = 'password=';
  public static readonly CONCAT_PARAM_URI_CHARACTER = '&';
  public static readonly INIT_PARAMS_URI_CHARACTER = '?';
  public static readonly BACKSLASH_URI_CHARACTER = '/';
  public static readonly AUTORIZATION_HEADER_KEY = 'authorization';
  // ----------------- Request error codes --------- //
  public static readonly HTTP_UNAUTHORIZED_CODE = 401;
  // ----------------- Error Messages ------------- //
  public static readonly MESSAGE_ERROR_UNAUTHORIZED = 'Usuario o contraseña no válida';
  public static readonly MESSAGE_ERROR_USER_PASSWORD_REQUIRED = 'Usuario / Contraseña requerido(s)';
  public static readonly MESSAGE_ERROR_SERVICE_DOWN = 'Ha sucedio un error de comunicación con el servidor, ' +
    'intentar mas tarde.';
  // ----------------- Other settings --------------//
  public static readonly EMPTY_STRING = '';


}
