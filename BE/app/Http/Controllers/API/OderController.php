<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Oder;
use App\Models\OderDetails;
use App\Models\Product;
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
    public function add(Request $request){
        $oder = new Oder();
        $oder->memberID = $request->input('memberID');
        $oder->memberName = $request->input('memberName');
        $oder->phone = $request->input('phone');
        $oder->status = $request->input('status');
        $oder->address = $request->input('address');

        $carts = $request->input('cart');
        $cost = 0;
        
        foreach ($carts as $key => $value) {
            $cost += $carts[$key]['price'];
            // $pro = Product::where('id',$carts[$key]['id'])->get();
            // $pro->qty = $pro->qty - $carts[$key]['quantity'];
            // $pro->update();
        }

        $oder->cost = $cost;
        $oder->save();  

        $oder->oderDetails()->createMany($carts);
        // $oder->save();

        return response()->json([
            'status' => 200,
            'message' => $oder
        ]);
    }
    public function oderdetails(Request $request, $id) {
        // $oderdetail = OderDetails::find($id);
        // $colors = DB::table('colors')
        //     ->select('colors.id', 'colors.name')
    }


}
