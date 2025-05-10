<?php

namespace App\Filament\Resources\PostResource\Pages;

use App\Filament\Resources\PostResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreatePost extends CreateRecord
{
    protected static string $resource = PostResource::class;

    /**
     * Get the URL to redirect to after the form is saved.
     *
     * @return string The URL to the resource's index page
     */
    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }

    /**
     * Customize the notification shown when a project is created.
     *
     * @return string|null The notification title
     */
    protected function getCreatedNotificationTitle(): ?string
    {
        return "Post '{$this->record->title}' was created successfully.";
    }
}
