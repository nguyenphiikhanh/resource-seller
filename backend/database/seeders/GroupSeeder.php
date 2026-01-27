<?php

namespace Database\Seeders;

use App\Models\Group;
use Illuminate\Database\Seeder;

class GroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $groups = [
            [
                'key' => 'super_admin',
                'name' => 'Super Admin',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'admin',
                'name' => 'Admin',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'buyer',
                'name' => 'Người mua(Buyer)',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'seller',
                'name' => 'Người bán(Seller)',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        Group::upsert($groups, ['key'], ['name', 'updated_at']);
    }
}
