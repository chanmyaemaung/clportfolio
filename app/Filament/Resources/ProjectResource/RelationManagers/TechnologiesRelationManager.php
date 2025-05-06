<?php

namespace App\Filament\Resources\ProjectResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Components\Group;
use Filament\Forms\Components\Section;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class TechnologiesRelationManager extends RelationManager
{
    protected static string $relationship = 'technologies';

    public function form(Form $form): Form
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

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('name')
            ->columns([
                Tables\Columns\TextColumn::make('name'),
                Tables\Columns\TextColumn::make('created_at')
                    ->label(__('Created At'))
                    ->sortable()
                    ->dateTime(),
            ])
            ->filters([
                //
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
                Tables\Actions\AttachAction::make()
                    ->preloadRecordSelect()
                    ->label(__('Attach Existing Technology')),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DetachAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DetachBulkAction::make(),
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }
}
