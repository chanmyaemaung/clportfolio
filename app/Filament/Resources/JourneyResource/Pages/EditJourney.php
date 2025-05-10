<?php

namespace App\Filament\Resources\JourneyResource\Pages;

use App\Filament\Resources\JourneyResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditJourney extends EditRecord
{
    protected static string $resource = JourneyResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make()
                ->successNotificationTitle(fn(): string => 'Journey ' . $this->record->title . ' was deleted successfully.'),
        ];
    }


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
     * Customize the notification shown when a project is updated.
     *
     * @return string|null The notification title
     */
    protected function getSavedNotificationTitle(): ?string
    {
        return "Journey '{$this->record->title}' was updated successfully.";
    }
}
