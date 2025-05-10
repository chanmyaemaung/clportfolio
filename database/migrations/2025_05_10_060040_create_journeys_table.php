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
        Schema::create('journeys', function (Blueprint $table) {
            $table->id()->from(1000);
            $table->string("title");
            $table->string("company");
            $table->date('from');
            $table->date('to')->nullable();
            $table->text('excerpt')->nullable()->comment('Concise overview of the role, key responsibilities, and significant achievements.');
            $table->longText('description')->nullable();
            $table->json('technologies_used')->nullable()->comment('Array of technologies or skills used during this journey/project.');
            $table->boolean('is_visible')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('journeys');
    }
};
