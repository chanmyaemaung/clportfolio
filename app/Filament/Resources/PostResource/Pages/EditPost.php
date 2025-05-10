<?php

namespace App\Filament\Resources\PostResource\Pages;

use App\Filament\Resources\PostResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditPost extends EditRecord
{
    protected static string $resource = PostResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make()
                ->successNotificationTitle(fn(): string => 'Post ' . $this->record->title . ' was deleted successfully.'),
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
        return "Post '{$this->record->title}' was updated successfully.";
    }
}
