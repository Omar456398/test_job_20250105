<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tasks')->insert([
            [
                'title' => 'Do Task',
                'description' => 'You know the one you\'ve be putting off for days!',
                'status' => 'in progress',
            ],
            [
                'title' => 'Mower Power',
                'description' => 'Mow the grass!',
                'status' => 'added',
            ],
            [
                'title' => 'Make coffee',
                'description' => 'Goes without saying!',
                'status' => 'completed',
            ],
        ]);
    }
}
