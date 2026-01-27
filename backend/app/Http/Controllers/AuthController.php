<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\RegisterRequest;
use Illuminate\Http\Response;

class AuthController extends AppBaseController
{
    //
    public function register(RegisterRequest $request)
    {
        $data = $request->validated();

        $user = User::create([
            'firstname' => $data['firstname'],
            'lastname'  => $data['lastname'],
            'username'  => $data['username'],
            'email'     => $data['email'],
            'password'  => Hash::make($data['password']),
        ]);

        return $this->sendResponse($user, __('auth.register_success'));
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->only('username', 'password');

        if (!Auth::attempt($credentials)) {
            return $this->sendError(__('auth.failed'), Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $request->session()->regenerate();

        return $this->sendResponse(Auth::user(), __('auth.login_success'));
    }

    public function logout(Request $request)
    {
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return $this->sendSuccess(__('auth.logout_success'));
    }

    public function user(Request $request)
    {
        return $this->sendResponse($request->user(), __('auth.info_success'));
    }
}
