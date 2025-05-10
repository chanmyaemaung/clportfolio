<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Facades\Storage;

class Post extends Model
{
    /** @use HasFactory<\Database\Factories\PostFactory> */
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'excerpt',
        'content',
        'img',
        'img_source',
        'is_visible',
        'is_featured',
        'min_read',
        'published_at',
    ];

    protected $casts = [
        'is_visible' => 'boolean',
        'is_featured' => 'boolean',
        'min_read' => 'integer',
        'published_at' => 'datetime',
    ];

    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(PostTag::class, 'post_post_tag', 'post_id', 'post_tag_id');
    }

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(PostCategory::class, 'post_post_category', 'post_id', 'post_category_id');
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
            if ($model->isDirty('img') && ($model->getOriginal('img') !== null)) {
                Storage::disk('public')->delete($model->getOriginal('img'));
            }
        });
    }
}
