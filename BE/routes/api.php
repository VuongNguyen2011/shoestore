<?php

use App\Http\Controllers\API\ProductsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// ==========================================
Route::get('/products',[ProductsController::class,'index']);
Route::get('/edit-product/{id}',[ProductsController::class,'edit']);
Route::delete('/delete-product/{id}',[ProductsController::class,'delete']);
Route::put('/update-product/{id}',[ProductsController::class,'update']);
Route::post('/add-product',[ProductsController::class,'store']);
//===========================================
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
