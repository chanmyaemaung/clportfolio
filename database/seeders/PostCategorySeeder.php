<?php

namespace Database\Seeders;

use App\Models\PostCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create common blog categories
        $categories = [
            'Technology' => 'Articles about programming, software, and tech trends',
            'Design' => 'UI/UX design principles and inspiration',
            'Business' => 'Entrepreneurship and business insights',
            'Development' => 'Web and software development topics',
            'Personal' => 'Personal thoughts and experiences',
        ];

        foreach ($categories as $title => $description) {
            PostCategory::factory()->create([
                'title' => $title,
                'slug' => \Illuminate\Support\Str::slug($title),
                'description' => $description,
            ]);
        }

        // Create additional random categories
        PostCategory::factory()->count(3)->create();
    }
}
