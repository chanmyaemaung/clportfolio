<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\PostCategory;
use App\Models\PostTag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create 5 featured posts
        Post::factory()
            ->count(5)
            ->featured()
            ->create()
            ->each(function ($post) {
                // Attach 2-4 random categories
                $post->categories()->attach(
                    PostCategory::inRandomOrder()->take(rand(1, 3))->pluck('id')->toArray()
                );

                // Attach 3-6 random tags
                $post->tags()->attach(
                    PostTag::inRandomOrder()->take(rand(3, 6))->pluck('id')->toArray()
                );
            });

        // Create 15 regular posts
        Post::factory()
            ->count(15)
            ->create()
            ->each(function ($post) {
                // Attach 1-3 random categories
                $post->categories()->attach(
                    PostCategory::inRandomOrder()->take(rand(1, 3))->pluck('id')->toArray()
                );

                // Attach 2-5 random tags
                $post->tags()->attach(
                    PostTag::inRandomOrder()->take(rand(2, 5))->pluck('id')->toArray()
                );
            });

        // Create 5 draft posts
        Post::factory()
            ->count(5)
            ->draft()
            ->create()
            ->each(function ($post) {
                // Attach 1-2 random categories
                $post->categories()->attach(
                    PostCategory::inRandomOrder()->take(rand(1, 2))->pluck('id')->toArray()
                );

                // Attach 1-3 random tags
                $post->tags()->attach(
                    PostTag::inRandomOrder()->take(rand(1, 3))->pluck('id')->toArray()
                );
            });
    }
}
