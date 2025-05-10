<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PostTagResource\Pages;
use App\Filament\Resources\PostTagResource\RelationManagers;
use App\Models\PostTag;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class PostTagResource extends Resource
{
    protected static ?string $model = PostTag::class;

    protected static ?string $navigationIcon = 'heroicon-o-tag';

    protected static ?string $label = 'Tags';

    protected static ?string $navigationGroup = 'Blog';

    protected static ?int $navigationSort = 5;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label(__('Name')),
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
            'index' => Pages\ManagePostTags::route('/'),
        ];
    }
}
