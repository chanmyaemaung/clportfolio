<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Log;

class DatabaseSeeder extends Seeder
{

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $adminUser = User::create([
            'name' => 'Chan Lay',
            'email' => env('FILAMENT_DASHBOARD_ADMIN_EMAIL'),
            'password' => bcrypt(env('FILAMENT_DASHBOARD_ADMIN_PASSWORD')),
        ]);

        Log::info('Admin User Created: ', ['name' => $adminUser->name, 'email' => $adminUser->email]);

        $this->call([
            ProjectTechnologySeeder::class,
            ProjectSeeder::class,
            JourneySeeder::class,
        ]);
    }
}
