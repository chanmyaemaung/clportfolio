<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProjectTechnologyResource\Pages;
use App\Filament\Resources\ProjectTechnologyResource\RelationManagers;
use App\Models\ProjectTechnology;
use Filament\Forms;
use Filament\Forms\Components\Group;
use Filament\Forms\Components\Section;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\TextInputColumn;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ProjectTechnologyResource extends Resource
{
    protected static ?string $model = ProjectTechnology::class;

    protected static ?string $navigationIcon = 'heroicon-o-cpu-chip';

    protected static ?string $navigationGroup = 'Project';

    protected static ?string $navigationLabel = 'Technologies';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Group::make([
                    Section::make(__('Project Technology'))
                        ->description(__("Please make sure to descript the technology I used for the projects I've ever built."))
                        ->schema([
                            Forms\Components\TextInput::make('name')
                                ->label(__('Technology Title'))
                                ->placeholder(__('E.g., Angular, React, etc.'))
                                ->autofocus()
                                ->required(),
                        ]),
                ])->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name'),
                Tables\Columns\TextColumn::make('created_at')
                    ->label(__('Created At'))
                    ->sortable()
                    ->dateTime(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ManageProjectTechnologies::route('/'),
        ];
    }
}
