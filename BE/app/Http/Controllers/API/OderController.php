<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Oder;
use App\Models\OderDetails;
use Illuminate\Http\Request;

class OderController extends Controller
{
    //
    public function index(Request $request) {
        $oder = Oder::all();
        return response() -> json([
            'status' => 200,
            'order' => $oder
        ]);
    }

    public function oderdetails(Request $request, $id) {
        // $oderdetail = OderDetails::find($id);
        // $colors = DB::table('colors')
        //     ->select('colors.id', 'colors.name')
    }

    
}
