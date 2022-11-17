<?php

use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\ProductsController;
use App\Http\Controllers\API\SizesController;
use App\Http\Controllers\API\ColorsController;
use App\Http\Controllers\API\OderController;
use App\Http\Controllers\API\OderDetailsController;
use App\Models\colors;
use App\Models\OderDetails;
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
//               API PRODUCT
// ==========================================
Route::get('/products',[ProductsController::class,'index']);
Route::get('/edit-product/{id}',[ProductsController::class,'edit']);
Route::delete('/delete-product/{id}',[ProductsController::class,'delete']);
Route::post('/update-product/{id}',[ProductsController::class,'update']);
Route::post('/add-product',[ProductsController::class,'store']);
//===========================================
//               API COLORS
// ==========================================
Route::get('/colors',[ColorsController::class,'index']);
Route::get('/edit-color/{id}',[ColorsController::class,'edit']);
Route::get('/get-color/{id}',[ColorsController::class,'getByIDPro']);
Route::delete('/delete-color/{id}',[ColorsController::class,'delete']);
Route::put('/update-color/{id}',[ColorsController::class,'update']);
Route::post('/add-color',[ColorsController::class,'add']);
//===========================================
//               API SIZES
// ==========================================
Route::get('/sizes',[SizesController::class,'index']);
Route::get('/edit-size/{id}',[SizesController::class,'edit']);
Route::delete('/delete-size/{id}',[SizesController::class,'delete']);
Route::put('/update-size/{id}',[SizesController::class,'update']);
Route::post('/add-size',[SizesController::class,'add']);
//===========================================
//               API CATEGORIES
// ==========================================
Route::get('/categorys',[CategoryController::class,'index']);
Route::get('/edit-category/{id}',[CategoryController::class,'edit']);
Route::delete('/delete-category/{id}',[CategoryController::class,'delete']);
Route::put('/update-category/{id}',[CategoryController::class,'update']);
Route::post('/add-category',[CategoryController::class,'add']);
//===========================================
//               API ORDERS 
// ==========================================
Route::get('/oders', [OderController::class,'index']);

// ==========================================
//              API ORDERDETAIL
// ==========================================
Route::get('/oderdetails', [OderDetailsController::class,'index']);
Route::get('/orderdetailbyID/{id}', [OderDetailsController::class,'orderdetailbyID']);

// ==========================================

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
