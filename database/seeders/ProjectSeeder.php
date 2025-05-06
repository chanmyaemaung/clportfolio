<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $json = File::get(database_path('json/projects.json'));
        $projects = collect(json_decode($json, true));

        $projects->each(function ($project) {
            // Create the project
            $newProject = Project::create([
                'id' => $project['id'],
                'slug' => $project['slug'],
                'title' => $project['title'],
                'excerpt' => $project['excerpt'],
                'description' => $project['description'],
                'image' => $project['image'],
                'type' => $project['type'],
                'link' => $project['link'],
                'is_featured' => $project['is_featured'],
                'is_visible' => $project['is_visible'],
                'published_at' => $project['published_at'],
            ]);

            // Attach technologies to the project
            $newProject->technologies()->attach($project['technologies']);
        });
    }
}
