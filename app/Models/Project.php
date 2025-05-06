<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Facades\Storage;

class Project extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'excerpt',
        'description',
        'image',
        'link',
        'type',
        'is_featured',
        'is_visible',
        'published_at',
    ];

    protected $casts = [
        'is_featured' => 'boolean',
        'is_visible' => 'boolean',
        'published_at' => 'datetime:M d, Y H:i:s',
    ];

    public function technologies(): BelongsToMany
    {
        return $this->belongsToMany(ProjectTechnology::class, 'project_technologies_pivot')->withTimestamps();
    }


    protected static function boot()
    {
        parent::boot();

        /**
         * Delete the previous image from storage when a new image is uploaded.
         * This hook runs before updating the model and checks if the image field
         * has changed. If it has, and there was a previous image, the old image
         * file is removed from the public disk to prevent orphaned files and
         * conserve storage space.
         */
        static::updating(function (
            /** @var Model $model */
            $model
        ) {
            if ($model->isDirty('image') && ($model->getOriginal('image') !== null)) {
                Storage::disk('public')->delete($model->getOriginal('image'));
            }
        });
    }
}
