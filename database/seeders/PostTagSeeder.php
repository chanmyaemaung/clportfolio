<?php

namespace Database\Seeders;

use App\Models\PostTag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostTagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create common blog tags
        $tags = [
            'Laravel',
            'PHP',
            'JavaScript',
            'Vue.js',
            'React',
            'CSS',
            'HTML',
            'UI/UX',
            'Database',
            'API',
            'Performance',
            'Security',
            'Testing',
            'DevOps',
            'Career'
        ];

        foreach ($tags as $tag) {
            PostTag::factory()->create([
                'name' => $tag,
                'slug' => \Illuminate\Support\Str::slug($tag),
                'description' => "Articles related to $tag",
            ]);
        }

        // Create additional random tags
        PostTag::factory()->count(10)->create();
    }
}
