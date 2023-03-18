<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ejemplos', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("image");
            $table->string("description");
            $table->double("price", 5, 2); //total_digits, decimals
            $table->integer("max_num_users");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ejemplos');
    }
};
