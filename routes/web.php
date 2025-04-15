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

Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');

Route::get('/contact', function () {
    return Inertia::render('contact');
})->name('contact');