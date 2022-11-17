<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\OderDetails;
use Illuminate\Http\Request;

class OderDetailsController extends Controller
{
    //
    public function index(Request $request) {
        $oderdetails = OderDetails::all();
        return response() -> json([
            'status' => 200,
            'orderdetails' => $oderdetails
        ]);
    }

    // public function orderdetailbyID(Request $request, $id) {
    //     $orderID = OderDetails::find($id);
    //     return response()->json([
    //         'status' => 200,
    //         'orderdetails' => $orderID,
    //     ]);

    // }


}
