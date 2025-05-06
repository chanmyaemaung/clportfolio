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
        Schema::create('projects', function (Blueprint $table) {
            $table->id()->from('1000');
            $table->string('title')->unique();
            $table->string('slug')->unique();
            $table->text('excerpt')->comment('Show the summary of the project');
            $table->longText('description')->nullable();
            $table->string('image')->nullable();
            $table->string('link')->nullable();
            $table->enum('type', ['web', 'mobile', 'desktop'])->default('web');
            $table->boolean('is_featured')->default(false);
            $table->boolean('is_visible')->default(false);
            $table->date('published_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
