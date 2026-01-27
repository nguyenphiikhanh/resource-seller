<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;

class AppBaseController extends Controller
{
    /**
     * Trả về response thành công (Success)
     *
     * @param mixed $result  Dữ liệu trả về (Data)
     * @param string $message Thông báo kèm theo
     * @return \Illuminate\Http\JsonResponse
     */
    public function sendResponse($result, $message)
    {
        $response = [
            'success' => true,
            'data'    => $result,
            'message' => $message,
        ];

        return response()->json($response, Response::HTTP_OK);
    }

    /**
     * Trả về response lỗi (Error)
     *
     * @param string $error   Thông báo lỗi
     * @param int $code       Mã lỗi HTTP (mặc định 404)
     * @param array $errorMessages  Mảng chi tiết lỗi (nếu có)
     * @return \Illuminate\Http\JsonResponse
     */
    public function sendError($error, $code = Response::HTTP_NOT_FOUND, $errorMessages = [])
    {
        $response = [
            'success' => false,
            'message' => $error,
        ];

        if (!empty($errorMessages)) {
            $response['data'] = $errorMessages;
        }

        return response()->json($response, $code);
    }

    /**
     * Trả về Success Message mà không cần data
     * * @param string $message
     * @return \Illuminate\Http\JsonResponse
     */
    public function sendSuccess($message)
    {
        return response()->json([
            'success' => true,
            'message' => $message
        ], Response::HTTP_OK);
    }
}
