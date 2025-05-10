<?php

namespace App\Filament\Resources;

use App\Filament\Resources\JourneyResource\Pages;
use App\Filament\Resources\JourneyResource\RelationManagers;
use App\Models\Journey;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class JourneyResource extends Resource
{
    protected static ?string $model = Journey::class;

    protected static ?string $navigationIcon = 'heroicon-o-map';

    protected static ?string $navigationGroup = 'About';

    protected static ?int $navigationSort = 2;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Group::make([
                    Forms\Components\Section::make()
                        ->schema([
                            Forms\Components\TextInput::make('title')
                                ->label(__('Title'))
                                ->required(),
                            Forms\Components\TextInput::make('company')
                                ->label(__('Company'))
                                ->required(),
                            Forms\Components\DatePicker::make('from')
                                ->label(__('Start Date'))
                                ->required(),
                            Forms\Components\DatePicker::make('to')
                                ->label(__('End Date')),
                            Forms\Components\Textarea::make('excerpt')
                                ->label(__('Excerpt'))
                                ->placeholder(__('Concise overview of the role, key responsibilities, and significant achievements.'))
                                ->rows(3)
                                ->columnSpanFull(),
                            Forms\Components\RichEditor::make('description')
                                ->label(__('Description'))
                                ->columnSpanFull(),
                        ])->columns(2),
                ])->columnSpan(2),

                Forms\Components\Group::make([
                    Forms\Components\Section::make(__('Status'))
                        ->schema([
                            Forms\Components\Toggle::make('is_visible')
                                ->label(__('Is Visible?'))
                                ->required(),
                        ]),
                    Forms\Components\Section::make(__('Technologies / Skills Used'))
                        ->schema([
                            Forms\Components\Repeater::make('technologies_used')
                                ->label(__('Technologies'))
                                ->simple(
                                    Forms\Components\TextInput::make('technology')
                                        ->label(__('Technology/Skill'))
                                        ->placeholder(__('E.g. React, Shopify, NodeJs'))
                                        ->required()
                                )
                                ->addActionLabel(__('Add Technology/Skill'))
                                ->defaultItems(1)
                        ]),
                ]),
            ])->columns(3);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->searchable(),
                Tables\Columns\TextColumn::make('company')
                    ->searchable(),
                Tables\Columns\TextColumn::make('from')
                    ->date()
                    ->sortable(),
                Tables\Columns\TextColumn::make('to')
                    ->date()
                    ->sortable()
                    ->placeholder(__(strtoupper('Present'))),
                Tables\Columns\TextColumn::make('technologies_used')
                    ->label(__('Technologies'))
                    ->badge()
                    ->color('primary')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\ToggleColumn::make('is_visible')
                    ->label(__('Visible'))
                    ->afterStateUpdated(function (Journey $record, bool $state): void {
                        if ($state) {
                            Notification::make()
                                ->title(__("Project Visible"))
                                ->body(__("'{$record->title}' is now visible to visitors."))
                                ->success()
                                ->send();
                        } else {
                            Notification::make()
                                ->title(__("Project Hidden"))
                                ->body(__("'{$record->title}' has been hidden from view."))
                                ->info()
                                ->send();
                        }
                    }),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\ActionGroup::make([
                    Tables\Actions\EditAction::make(),
                    Tables\Actions\DeleteAction::make()
                        ->successNotificationTitle(fn(Journey $record): string => 'Journey ' . $record->title . ' was deleted successfully.')
                ]),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListJourneys::route('/'),
            'create' => Pages\CreateJourney::route('/create'),
            'edit' => Pages\EditJourney::route('/{record}/edit'),
        ];
    }
}
