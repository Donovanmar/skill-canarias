<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use App\Models\Ejemplo;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Storage::deleteDirectory('public/images');
        Storage::makeDirectory('public/images');

        User::factory(49)->create();
        // Friendship::factory(90)->create();

        $this->call(UserSeeder::class); // Creación de admin
        Ejemplo::factory(25)->create();
    }
}
