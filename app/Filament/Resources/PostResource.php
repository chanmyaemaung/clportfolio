<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PostResource\Pages;
use App\Filament\Resources\PostResource\RelationManagers;
use App\Models\Post;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Livewire\Features\SupportFileUploads\TemporaryUploadedFile;

class PostResource extends Resource
{
    protected static ?string $model = Post::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-text';

    protected static ?string $navigationGroup = 'Blog';

    protected static ?int $navigationSort = 3;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make()
                            ->schema([
                                Forms\Components\TextInput::make('title')
                                    ->required(),
                                Forms\Components\TextInput::make('slug')
                                    ->required(),
                                Forms\Components\Textarea::make('excerpt')
                                    ->rows(3)
                                    ->columnSpanFull(),
                                Forms\Components\RichEditor::make('content')
                                    ->columnSpanFull(),
                            ])->columns(2),
                    ])->columnSpan(2),

                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make(__('Status'))
                            ->schema([
                                Forms\Components\Toggle::make('is_visible')
                                    ->label(__('Is Visible?'))
                                    ->required(),
                                Forms\Components\Toggle::make('is_featured')
                                    ->label(__('Is Featured?'))
                                    ->required(),
                                Forms\Components\TextInput::make('min_read')
                                    ->required()
                                    ->numeric()
                                    ->default(0),
                                Forms\Components\DatePicker::make('published_at')
                                    ->label(__('Published At'))
                                    ->required()
                                    ->native(false)
                                    ->displayFormat('M d, Y')
                                    ->default(now()),
                            ]),

                        Forms\Components\Section::make(__('Image Uploads'))
                            ->collapsible()
                            ->schema([
                                Forms\Components\FileUpload::make('img')
                                    ->label(__('Local Image'))
                                    ->image()
                                    ->maxSize(102400)
                                    ->imageEditor()
                                    ->directory(fn(): string => 'images/posts/' . now()->format('Y/m'))
                                    ->getUploadedFileNameForStorageUsing(
                                        fn(TemporaryUploadedFile $file): string => (string) str($file->getClientOriginalName())
                                            ->prepend('posts-')
                                    ),
                                Forms\Components\TextInput::make('img_source')
                                    ->label(__('Outside Image'))
                                    ->url(),
                            ]),
                    ]),


            ])->columns(3);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->label(__('Title'))
                    ->searchable(),
                Tables\Columns\TextColumn::make('slug')
                    ->label(__('Slug'))
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\ImageColumn::make('img')
                    ->label(__('Local Image'))
                    ->searchable(),
                Tables\Columns\TextColumn::make('img_source')
                    ->label(__('Outside Image'))
                    ->searchable(),
                Tables\Columns\ToggleColumn::make('is_visible')
                    ->label(__('Visible'))
                    ->afterStateUpdated(function (Post $record, bool $state): void {
                        if ($state) {
                            Notification::make()
                                ->title(__("Post Visible"))
                                ->body(__("'{$record->title}' is now visible to visitors."))
                                ->success()
                                ->send();
                        } else {
                            Notification::make()
                                ->title(__("Post Hidden"))
                                ->body(__("'{$record->title}' has been hidden from view."))
                                ->info()
                                ->send();
                        }
                    }),
                Tables\Columns\ToggleColumn::make('is_featured')
                    ->label(__('Featured'))
                    ->afterStateUpdated(function (Post $record, bool $state): void {
                        if ($state) {
                            Notification::make()
                                ->title(__("Post Highlighted"))
                                ->body(__("'{$record->title}' is now featured and will be showcased prominently."))
                                ->success()
                                ->send();
                        } else {
                            Notification::make()
                                ->title(__("Post Unfeatured"))
                                ->body(__("'{$record->title}' is no longer featured."))
                                ->info()
                                ->send();
                        }
                    }),
                Tables\Columns\TextColumn::make('min_read')
                    ->numeric()
                    ->sortable()
                    ->formatStateUsing(function (string $state): string {
                        $counts = $state > 1 ? $state . ' Minutes' : $state . ' Minutes';
                        return $counts;
                    }),
                Tables\Columns\TextColumn::make('published_at')
                    ->date()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
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
                        ->successNotificationTitle(fn(Post $record): string => 'Post ' . $record->title . ' was deleted successfully.')
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
            'index' => Pages\ListPosts::route('/'),
            'create' => Pages\CreatePost::route('/create'),
            'edit' => Pages\EditPost::route('/{record}/edit'),
        ];
    }
}
