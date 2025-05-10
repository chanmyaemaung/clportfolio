<?php

namespace App\Filament\Resources\JourneyResource\Pages;

use App\Filament\Resources\JourneyResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateJourney extends CreateRecord
{
    protected static string $resource = JourneyResource::class;

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
        return "Journey '{$this->record->title}' was created successfully.";
    }
}
