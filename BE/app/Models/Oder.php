<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Oder extends Model
{
    use HasFactory;
    protected $table ="oders";
    protected $filtable = [
        'memberID',
        'cost',
        'status'
    ];
}
