<?php

namespace App\Filament\Resources;

use App\Enums\Enums\ProjectTypeEnum;
use App\Filament\Resources\ProjectResource\Pages;
use App\Filament\Resources\ProjectResource\RelationManagers;
use App\Filament\Resources\ProjectResource\RelationManagers\TechnologiesRelationManager;
use App\Models\Project;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Livewire\Features\SupportFileUploads\TemporaryUploadedFile;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ProjectResource extends Resource
{
    protected static ?string $model = Project::class;

    protected static ?string $navigationIcon = 'heroicon-o-code-bracket-square';

    protected static ?string $navigationGroup = 'Project';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Group::make([
                    // Left Section
                    Forms\Components\Section::make()
                        ->schema([
                            Forms\Components\TextInput::make('title')
                                ->label(__('Title'))
                                ->required()
                                ->live(onBlur: true)
                                ->unique()
                                ->afterStateUpdated(function (string $operation, $state, Forms\Set $set) {
                                    if ($operation != 'create') {
                                        return;
                                    }
                                    $set('slug', Str::slug($state));
                                }),
                            Forms\Components\TextInput::make('slug')
                                ->label(__('Slug'))
                                ->disabled()
                                ->dehydrated()
                                ->required()
                                ->unique(Project::class, 'slug', ignoreRecord: true),
                            Forms\Components\TextInput::make('link')
                                ->label(__('Project Link'))
                                ->url(),
                            Forms\Components\Select::make('type')
                                ->label(__('Project Type'))
                                ->required()
                                ->options([
                                    'web' => strtoupper(ProjectTypeEnum::WEB->value),
                                    'mobile' => strtoupper(ProjectTypeEnum::MOBILE->value),
                                    'desktop' => strtoupper(ProjectTypeEnum::DESKTOP->value),
                                ]),
                            Forms\Components\Textarea::make('excerpt')
                                ->label(__('Excerpt'))
                                ->placeholder(__('Show the summary of the project'))
                                ->required()
                                ->rows(3)
                                ->columnSpanFull(),
                            Forms\Components\RichEditor::make('description')
                                ->label(__('Description'))
                                ->columnSpanFull(),

                        ])->columns(2),
                ])->columnSpan(2),

                // Right Section
                Forms\Components\Group::make([
                    // Status
                    Forms\Components\Section::make('Status')
                        ->schema([
                            Forms\Components\Toggle::make('is_visible')
                                ->label(__('Is Visible?')),
                            Forms\Components\Toggle::make('is_featured')
                                ->label(__('Is Featured?')),
                            Forms\Components\DateTimePicker::make('published_at')
                                ->label(__('Published At?'))
                                ->native(true)
                                ->displayFormat('M d, Y H:i:s')
                                ->default(now()),
                        ]),

                    // Associations
                    Forms\Components\Section::make('Associations')
                        ->collapsible()
                        ->schema([
                            Forms\Components\FileUpload::make('image')
                                ->label(__('Project Image'))
                                ->image()
                                ->imageEditor()
                                ->maxSize(102400) // 100MB = 100 * 1024 = 102400KB
                                ->disk('public')
                                ->directory(fn(): string => 'images/projects/' . now()->format('Y/m'))
                                ->getUploadedFileNameForStorageUsing(
                                    fn(TemporaryUploadedFile $file): string => (string) str($file->getClientOriginalName())
                                        ->prepend('project-')
                                ),

                        ]),

                    // Technologies
                    /* Forms\Components\Section::make('Technologies')
                        ->schema([
                            Forms\Components\Select::make('technologies')
                                ->relationship('technologies', 'name')
                                ->multiple()
                                ->preload()
                                ->searchable()
                                ->createOptionForm([
                                    Forms\Components\TextInput::make('title')
                                        ->label(__('Technology Title'))
                                        ->placeholder(__('E.g., Angular, React, etc.'))
                                        ->autofocus()
                                        ->required()
                                        ->maxLength(255),
                                ])
                        ]), */
                ]),
            ])->columns(3);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->label(__('Title'))
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('slug')
                    ->label(__('Slug'))
                    ->hidden()
                    ->searchable(),
                Tables\Columns\ImageColumn::make('image')
                    ->label(__('Image')),
                Tables\Columns\TextColumn::make('link')
                    ->label(__('Project Link'))
                    ->hidden()
                    ->searchable(),
                Tables\Columns\TextColumn::make('type')
                    ->label(__('Project Type'))
                    ->sortable()
                    ->searchable()
                    ->formatStateUsing(fn(string $state): string => strtoupper($state)),
                Tables\Columns\TextColumn::make('technologies_list')
                    ->label(__('Technologies'))
                    ->badge()
                    ->color('primary')
                    ->getStateUsing(fn($record) => $record->technologies->pluck('name')->toArray()),
                Tables\Columns\ToggleColumn::make('is_featured')
                    ->label(__('Featured'))
                    ->afterStateUpdated(function (Project $record, bool $state) {
                        // Run custom logic after the toggle is updated
                        if ($state) {
                            // For example, if a project is featured, you might want to unfeatured others
                            Project::where('id', '!=', $record->id)->update(['is_featured' => false]);
                        }
                    }),
                Tables\Columns\ToggleColumn::make('is_visible')
                    ->label(__('Visible'))
                    ->afterStateUpdated(function (Project $record, bool $state) {
                        if ($state) {
                            Project::where('id', '!=', $record->id)->update(['is_visible' => false]);
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
                Tables\Columns\TextColumn::make('published_at')
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
                    Tables\Actions\DeleteAction::make(),
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
            TechnologiesRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProjects::route('/'),
            'create' => Pages\CreateProject::route('/create'),
            'edit' => Pages\EditProject::route('/{record}/edit'),
        ];
    }
}
