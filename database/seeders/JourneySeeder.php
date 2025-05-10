<?php

namespace Database\Seeders;

use App\Models\Journey;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class JourneySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $json = File::get(database_path('json/journeys.json'));
        $journeys = collect(json_decode($json));

        $journeys->each(function ($journey) {
            Journey::create([
                'id' => $journey->id,
                'title' => $journey->title,
                'company' => $journey->company,
                'from' => $journey->from,
                'to' => $journey->to,
                'excerpt' => $journey->excerpt,
                'description' => $journey->description,
                'technologies_used' => $journey->technologies_used,
                'is_visible' => $journey->is_visible,
            ]);
        });
    }
}
