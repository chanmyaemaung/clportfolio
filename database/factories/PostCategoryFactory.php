<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PostCategory>
 */
class PostCategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        static $id = 1000;
        $title = $this->faker->unique()->words(2, true);
        return [
            'id' => $id++,
            'title' => ucwords($title),
            'slug' => Str::slug($title),
            'description' => $this->faker->sentence(),
        ];
    }
}
