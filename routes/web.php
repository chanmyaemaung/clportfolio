<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('homepage');
})->name('homepage');

Route::get('/projects', function () {
    return Inertia::render('project');
})->name('project');

Route::get('/blog', function () {
    return Inertia::render('blog');
})->name('blog');

Route::get('/blog/{slug}', function ($slug) {
    // Here we would typically fetch the blog by slug from database
    // For now, returning a sample blog object with the slug
    return Inertia::render('blog-detail', [
        'blog' => [
            'slug' => $slug,
            'title' => 'Blog Post Title',
            'content' => 'This is the blog content',
            'date' => 'May 15, 2023',
            'category' => 'Technology',
        ]
    ]);
})->name('blog.show');

Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');

Route::get('/contact', function () {
    return Inertia::render('contact');
})->name('contact');
