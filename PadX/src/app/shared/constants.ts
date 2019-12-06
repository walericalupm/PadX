export class Constants {
  static readonly CONTENT_TYPE_HEADER_KEY = 'Content-Type';
  static readonly CONTENT_TYPE_JSON_VALUE = 'application/json';
  static readonly BASE_URI = 'http://fenw.etsisi.upm.es:10000';
  static readonly USER_URI = '/users';
  static readonly USER_LOGIN_URI = '/login';
  static readonly USER_LOGIN_URI_PARAM = 'username=';
  static readonly PASSWORD_LOGIN_URI_PARAM = 'password=';
  static readonly CONCAT_PARAM_URI_CHARACTER = '&';
  static readonly INIT_PARAMS_URI_CHARACTER = '?';
  static readonly BACKSLASH_URI_CHARACTER = '/';
  // ----------------- Mensajes de Error ------------- //
  static readonly MESSAGE_ERROR_LOGIN = 'Usuario o contraseña no válida';
  static readonly MESSAGE_ERROR_USER_REQUIRED = 'Usuario requerido';
  static readonly MESSAGE_ERROR_PASSWORD_REQUIRED = 'Contraseña requerida';

}
