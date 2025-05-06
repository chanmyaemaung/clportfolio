<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class ProjectTechnology extends Model
{
    protected $fillable = ['name'];

    public function projects(): BelongsToMany
    {
        return $this->belongsToMany(Project::class, 'project_technologies_pivot')->withTimestamps();
    }

    protected $casts = [
        'created_at' => 'datetime:M d, Y H:i:s',
        'updated_at' => 'datetime:M d, Y H:i:s',
    ];
}
