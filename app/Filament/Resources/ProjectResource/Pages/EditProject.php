<?php

namespace App\Filament\Resources\ProjectResource\Pages;

use App\Filament\Resources\ProjectResource;
use Filament\Actions;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\EditRecord;

class EditProject extends EditRecord
{
    protected static string $resource = ProjectResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make()
                ->successNotificationTitle(fn(): string => 'Project ' . $this->record->title . ' was deleted successfully.'),
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
        return "Project '{$this->record->title}' was updated successfully.";
    }
}
