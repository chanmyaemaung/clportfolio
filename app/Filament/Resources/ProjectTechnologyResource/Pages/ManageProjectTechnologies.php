<?php

namespace App\Filament\Resources\ProjectTechnologyResource\Pages;

use App\Filament\Resources\ProjectTechnologyResource;
use Filament\Actions;
use Filament\Resources\Pages\ManageRecords;

class ManageProjectTechnologies extends ManageRecords
{
    protected static string $resource = ProjectTechnologyResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
