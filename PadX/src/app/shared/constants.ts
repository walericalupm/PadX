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
  public static readonly HTTP_API_RESERVATION_DATA_NO_VALID_CODE = 400;
  public static readonly HTTP_UNAUTHORIZED_CODE = 401;
  public static readonly HTTP_NOT_FOUND_CODE = 404;
  public static readonly HTTP_API_COURT_NOT_AVAILABLE_CODE = 409;
  public static readonly HTTP_ERROR_SERVER_CODE = 500;
  // ----------------- Token Settings ------------- //
  public static readonly TOKEN_DURATION_MILLISECONDS = 600000; // 10 Minutes
  public static readonly TOKEN_KEY = 'token';
  public static readonly TOKEN_TIME_KEY = 'token_time';
  public static readonly TOKEN_FIRST_VALIDATION_KEY = 'token_first_validation';
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
  public static readonly MESSAGE_ERROR_PASSWORD_DOES_NOT_MATCH = 'Las contraseñas no coinciden';
  public static readonly MESSAGE_ERROR_RESERVATION_DATA_NO_VALID = 'Datos de pista o fecha de reserva ' +
    'no válidas';
  public static readonly MESSAGE_ERROR_SESSION_EXPIRED =  'Su sesion ha caducado';
  public static readonly MESSAGE_ERROR_RESERVATION_NOT_REALIZED =  'Reserva no realizada';
  public static readonly MESSAGE_ERROR_COURT_NOT_AVAILABLE =  'Pista no disponible en fecha y hora seleccionada ' +
    'o ha superado el número máximo de reservas (Max 3)';
  // ----------------- Info Messages --------------- //
  public static MESSAGE_INFORMATION_USER_DO_NOT_HAVE_RESERVATIONS = 'Usuario no tiene reservas activas';
  // ----------------- Date Time Constants --------- //
  public static ISO_TIME_INITIAL_CHARACTER = 'T';
  public static UTC_TIME_CHARACTER = 'Z';
  public static DATE_DEFAULT_FORMAT = 'yyyy-MM-dd';
  public static DATE_DEFAULT_LOCATION = 'en';
  // ------------------URL Routes ------------------ //
  public static ROUTE_INDEX = '';
  public static ROUTE_LOGIN = 'login';
  public static ROUTE_RESERVATION = 'reservation';
  public static ROUTE_SERVICES = 'service';
  public static ROUTE_COURTS = 'court';
  public static ROUTE_INSTRUCTORS = 'instructor';
  public static ROUTE_CONTACT_US = 'contact';
  // ----------------- Other settings -------------- //
  public static readonly EMPTY_STRING = '';
  public static readonly WHITE_SPACE = ' ';
  public static readonly HIDE_EVENT = 'hide';
  public static readonly SHOW_EVENT = 'show';
  public static readonly DEFAULT_HOUR = '10:00:00';
  public static readonly DEFAULT_COURT = '1';




}
