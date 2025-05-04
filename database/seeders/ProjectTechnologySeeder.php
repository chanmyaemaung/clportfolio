<?php

namespace Database\Seeders;

use App\Models\ProjectTechnology;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class ProjectTechnologySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $json = File::get(database_path('json/technologies.json'));
        $technologies = collect(json_decode($json));

        $technologies->each(function ($technology) {
            ProjectTechnology::create([
                'id' => $technology->id,
                'name' => $technology->name,
            ]);
        });
    }
}
