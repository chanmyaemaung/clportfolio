<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        static $id = 1000;
        $title = $this->faker->sentence(6);
        $isVisible = $this->faker->boolean(80); // 80% chance of being visible

        return [
            'id' => $id++,
            'title' => $title,
            'slug' => Str::slug($title),
            'excerpt' => $this->faker->paragraph(2),
            'content' => $this->faker->paragraphs(6, true),
            'img' => $this->faker->boolean(70) ? 'images/posts/post-' . $this->faker->numberBetween(1, 10) . '.jpg' : null,
            'img_source' => $this->faker->boolean(30) ? 'https://picsum.photos/1200/800' : null,
            'is_visible' => $isVisible,
            'is_featured' => $isVisible ? $this->faker->boolean(20) : false, // 20% chance of featured if visible
            'min_read' => $this->faker->numberBetween(2, 15),
            'published_at' => $this->faker->dateTimeBetween('-1 year', 'now'),
        ];
    }

    public function featured(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'is_visible' => true,
                'is_featured' => true,
            ];
        });
    }

    public function draft(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'is_visible' => false,
                'is_featured' => false,
            ];
        });
    }
}
