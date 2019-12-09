export class Constants {
  // ----------------- App Settings ---------------------//
  public static readonly APP_NAME = 'PadX'
  // ----------------- Communication with API --------- //
  public static readonly CONTENT_TYPE_HEADER_KEY = 'Content-Type';
  public static readonly CONTENT_TYPE_JSON_VALUE = 'application/json';
  public static readonly BASE_URI = 'http://fenw.etsisi.upm.es:10000';
  public static readonly CONCAT_PARAM_URI_CHARACTER = '&';
  public static readonly INIT_PARAMS_URI_CHARACTER = '?';
  public static readonly BACKSLASH_URI_CHARACTER = '/';
  public static readonly AUTORIZATION_HEADER_KEY = 'authorization';
  // ----------------- User Service ------------------- //
  public static readonly USER_URI = '/users';
  public static readonly USER_LOGIN_URI = '/login';
  public static readonly USER_LOGIN_URI_PARAM = 'username=';
  public static readonly PASSWORD_LOGIN_URI_PARAM = 'password=';
  // ----------------- Reservation Service ----------- //
  public static readonly RESERVATION_URI = '/reservations';
  // ------------------------------------------------ //
  // ----------------- Request error codes --------- //
  public static readonly HTTP_UNAUTHORIZED_CODE = 401;
  public static readonly HTTP_NOT_FOUND_CODE = 404;
  public static readonly HTTP_ERROR_SERVER_CODE = 500;
  // ----------------- Token Settings ------------- //
  public static readonly TOKEN_DURATION_MILLISECONDS = 600000; // 10 Minutes
  public static readonly TOKEN_KEY = 'token';
  public static readonly TOKEN_TIME_KEY = 'token_time';
  public static readonly TOKEN_FIRST_VALIDATION_KEY = 'token_first_validation';
  public static readonly TOKEN_FIRST_VALIDATION_TRUE_KEY = '1';
  public static readonly TOKEN_FIRST_VALIDATION_FALSE_KEY = '0';
  // ----------------- User in Session Settings ------------- //
  public static readonly USER_USERNAME_KEY = 'user';
  // ----------------- Error Messages ------------- //
  public static readonly MESSAGE_ERROR_UNAUTHORIZED = 'Usuario o contraseña no válida';
  public static readonly MESSAGE_ERROR_USER_PASSWORD_REQUIRED = 'Usuario / Contraseña requerido(s)';
  public static readonly MESSAGE_ERROR_SERVICE_DOWN = 'Ha sucedido un error de comunicación con el servidor, ' +
    'intentar mas tarde.';
  public static readonly MESSAGE_ERROR_USERNAME_DUPLICATED = 'Usuario ya registrado';
  public static readonly MESSAGE_ERROR_REGISTER_REQUIRED = 'Usuario / contraseña / correo requeridos. ' +
    'Puede que el nombre de Usuario este ya registrado previamente';
  static MESSAGE_ERROR_PASSWORD_DOES_NOT_MATCH = 'Las contraseñas no coinciden';
  // ----------------- Other settings --------------//
  public static readonly EMPTY_STRING = '';
  public static readonly HIDE_EVENT = 'hide';
  public static readonly SHOW_EVENT = 'show';



}
