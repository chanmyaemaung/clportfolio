<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Journey extends Model
{
    protected $fillable = [
        'title',
        'company',
        'from',
        'to',
        'excerpt',
        'description',
        'technologies_used',
        'is_visible',
    ];

    protected $casts = [
        'to' => 'date',
        'from' => 'date',
        'technologies_used' => 'array',
        'is_visible' => 'boolean',
    ];
}
