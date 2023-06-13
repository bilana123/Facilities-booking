<?php

namespace App\Models\registration;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RoleModel extends Model
{
    use HasFactory;
    //public $timesstamps=false;
    protected $table = 't_role_master';
    protected $fillable = [
        'name',
        'status',
        'created_at',
        'created_by',
        'updated_by',
        'updated_at'
    ];
}
