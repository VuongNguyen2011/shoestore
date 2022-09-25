<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    public function store(Request $request){
        $product = new Product;
        $product->name = $request->input('name');
        $product->price = $request->input('price');
        $product->save();

        return response()->json([
            'status' => 200,
            'message' => 'Product added successfully'
        ]);
    }
    public function index(Request $request){
        $product = Product::all();

        return response()->json([
            'status' => 200,
            'products' => $product
        ]);
    }
    public function edit($id){
        $product = Product::find($id);

        return response()->json([
            'status' => 200,
            'products' => $product
        ]);
    }
    public function update(Request $request,$id){
        $product = Product::find($id);
        $product->name = $request->input('name');
        $product->price = $request->input('price');
        $product->update();

        return response()->json([
            'status' => 200,
            'message' => 'Product updated successfully'
        ]);
    }
    public function delete($id){
        $product = Product::find($id);
        $product->delete();
        return response()->json([
            'status' => 200,
            'message' => "Product Deleted Successfully "
        ]);
    }
}
