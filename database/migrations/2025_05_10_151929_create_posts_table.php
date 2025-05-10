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
        Schema::create('posts', function (Blueprint $table) {
            $table->id()->startingValue(1000);
            $table->string('title')->unique();
            $table->string('slug')->unique();
            $table->text('excerpt')->nullable()->comment('A summary of the post');
            $table->longText('content')->nullable();
            $table->string('img')->nullable();
            $table->string('img_source')->nullable()->comment("If you don't upload the image locally, you can provide a third-party image URL.");
            $table->boolean('is_visible')->default(false);
            $table->boolean('is_featured')->default(false);
            $table->integer('min_read')->default(0);
            $table->date('published_at')->default(now());
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
