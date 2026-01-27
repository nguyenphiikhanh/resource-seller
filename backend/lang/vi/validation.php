<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    */

    'accepted' => ':attribute phải được chấp nhận.',
    'active_url' => ':attribute không phải là một URL hợp lệ.',
    'after' => ':attribute phải là một ngày sau ngày :date.',
    'alpha' => ':attribute chỉ có thể chứa các chữ cái.',
    'alpha_dash' => ':attribute chỉ có thể chứa chữ cái, số, dấu gạch ngang và gạch dưới.',
    'alpha_num' => ':attribute chỉ có thể chứa chữ cái và số.',
    'array' => ':attribute phải là một mảng.',
    'before' => ':attribute phải là một ngày trước ngày :date.',
    'between' => [
        'numeric' => ':attribute phải nằm trong khoảng :min đến :max.',
        'file' => ':attribute phải nằm trong khoảng :min đến :max kilobytes.',
        'string' => ':attribute phải nằm trong khoảng :min đến :max ký tự.',
        'array' => ':attribute phải có từ :min đến :max phần tử.',
    ],
    'boolean' => 'Trường :attribute phải là true hoặc false.',
    'confirmed' => 'Giá trị xác nhận trong trường :attribute không khớp.',
    'date' => ':attribute không phải là định dạng của ngày-tháng.',
    'date_format' => ':attribute không giống với định dạng :format.',
    'different' => ':attribute và :other phải khác nhau.',
    'digits' => ':attribute phải gồm :digits chữ số.',
    'digits_between' => ':attribute phải nằm trong khoảng :min đến :max chữ số.',
    'dimensions' => ':attribute có kích thước không hợp lệ.',
    'distinct' => ':attribute có giá trị trùng lặp.',
    'email' => ':attribute phải là một địa chỉ email hợp lệ.',
    'exists' => ':attribute đã chọn không hợp lệ.',
    'file' => ':attribute phải là một tệp tin.',
    'filled' => ':attribute không được bỏ trống.',
    'image' => ':attribute phải là định dạng hình ảnh.',
    'in' => ':attribute đã chọn không hợp lệ.',
    'in_array' => ':attribute phải thuộc tập cho phép: :other.',
    'integer' => ':attribute phải là một số nguyên.',
    'ip' => ':attribute phải là một địa chỉ IP.',
    'json' => ':attribute phải là một chuỗi JSON.',
    'max' => [
        'numeric' => ':attribute không được lớn hơn :max.',
        'file' => ':attribute không được lớn hơn :max kilobytes.',
        'string' => ':attribute không được lớn hơn :max ký tự.',
        'array' => ':attribute không được lớn hơn :max phần tử.',
    ],
    'mimes' => ':attribute phải là một tập tin có định dạng: :values.',
    'mimetypes' => ':attribute phải là một tập tin có định dạng: :values.',
    'min' => [
        'numeric' => ':attribute phải tối thiểu là :min.',
        'file' => ':attribute phải tối thiểu là :min kilobytes.',
        'string' => ':attribute phải có ít nhất :min ký tự.',
        'array' => ':attribute phải có ít nhất :min phần tử.',
    ],
    'not_in' => ':attribute đã chọn không hợp lệ.',
    'numeric' => ':attribute phải là một số.',
    'present' => ':attribute phải được cung cấp.',
    'regex' => ':attribute có định dạng không hợp lệ.',
    'required' => ':attribute không được để trống.',
    'required_if' => ':attribute không được để trống khi :other là :value.',
    'required_unless' => ':attribute không được để trống trừ khi :other là :values.',
    'required_with' => ':attribute không được để trống khi một trong :values có giá trị.',
    'required_with_all' => ':attribute không được để trống khi tất cả :values có giá trị.',
    'required_without' => ':attribute không được để trống khi một trong :values không có giá trị.',
    'required_without_all' => ':attribute không được để trống khi tất cả :values không có giá trị.',
    'same' => ':attribute và :other phải giống nhau.',
    'size' => [
        'numeric' => ':attribute phải bằng :size.',
        'file' => ':attribute phải bằng :size kilobytes.',
        'string' => ':attribute phải chứa :size ký tự.',
        'array' => ':attribute phải chứa :size phần tử.',
    ],
    'string' => ':attribute phải là một chuỗi ký tự.',
    'timezone' => ':attribute phải là một múi giờ hợp lệ.',
    'unique' => ':attribute đã tồn tại trong hệ thống.',
    'uploaded' => ':attribute tải lên thất bại.',
    'url' => ':attribute không phải là một URL hợp lệ.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | Đặt tên đẹp cho các trường dữ liệu ở đây
    |
    */

    'attributes' => [
        'username'  => 'Tên đăng nhập',
        'email'     => 'Địa chỉ email',
        'password'  => 'Mật khẩu',
        'firstname' => 'Họ',
        'lastname'  => 'Tên',
        'phone'     => 'Số điện thoại',
    ],

];
