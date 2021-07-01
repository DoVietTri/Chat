
const message = {
  no_token: 'Không tồn tại token',
  unauthorized: 'Bạn không có quyền truy cập',
  login_success: 'Đăng nhập thành công',
  login_failed: 'Đăng nhập thất bại, vui lòng kiểm tra lại thông tin email và mật khẩu'
};

const transValidation = {
  username_incorrect: 'Bắt buộc nhập tên tài khoản và phải từ 6 - 20 ký tự',
  email_incorrect: 'Bắt buộc nhập email và định dạng là abc@gmail.com',
  password_incorrect: 'Bắt buộc nhập mật khẩu và phải từ 6 - 20 ký tự',
  password_confirmation_incorrect: 'Mật khẩu xác nhận phải từ 6 - 20 ký tự và phải trùng khớp với nhau và bắt buộc'
}

const transError = {
  email_exists: 'Tài khoản đã tồn tại trong hệ thống',
  email_not_exists: 'Tài khoản không tồn tại trong hệ thống',
  password_wrong: 'Sai mật khẩu'
}

const transSuccess = {
  create_user_success: 'Tạo tài khoản thành công',
  login_success: 'Đăng nhập thành công'
}

module.exports = {
  message,
  transValidation,
  transError,
  transSuccess
}
