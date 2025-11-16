# Скрипт для создания структуры папок проекта-шаблона
# Выполнить: .\create-template-structure.ps1

$basePath = "app"

# Создание основной структуры
$folders = @(
    # Assets
    "$basePath/assets/css",
    "$basePath/assets/images",
    "$basePath/assets/icons",
    "$basePath/assets/fonts",
    
    # Components - Feature-based структура
    "$basePath/components/layout/Header",
    "$basePath/components/layout/Sidebar",
    "$basePath/components/layout/Footer",
    "$basePath/components/layout/ContentArea",
    
    "$basePath/components/features/Dashboard",
    "$basePath/components/features/Profile",
    "$basePath/components/features/Settings",
    
    # UI Components
    "$basePath/components/features/UI/Buttons",
    "$basePath/components/features/UI/Inputs",
    "$basePath/components/features/UI/Cards",
    "$basePath/components/features/UI/Modals",
    "$basePath/components/features/UI/Notifications",
    "$basePath/components/features/UI/Forms",
    "$basePath/components/features/UI/Tables",
    "$basePath/components/features/UI/Loaders",
    "$basePath/components/features/UI/Dropdowns",
    "$basePath/components/features/UI/Tabs",
    
    # Composables
    "$basePath/composables",
    
    # Layouts
    "$basePath/layouts",
    
    # Pages
    "$basePath/pages/dashboard",
    "$basePath/pages/profile",
    "$basePath/pages/settings",
    
    # Types
    "$basePath/types",
    
    # Models/Data
    "$basePath/models",
    
    # Utils
    "$basePath/utils",
    
    # Constants
    "$basePath/constants",
    
    # Middleware
    "$basePath/middleware",
    
    # Stores (если используется Pinia)
    "$basePath/stores",
    
    # API
    "$basePath/api",
    "$basePath/api/controllers",
    "$basePath/api/services",
    "$basePath/api/types",
    
    # Hooks
    "$basePath/hooks",
    
    # Config
    "$basePath/config",
    
    # Public
    "public/images",
    "public/icons"
)

Write-Host "Создание структуры папок..." -ForegroundColor Green

foreach ($folder in $folders) {
    if (-not (Test-Path $folder)) {
        New-Item -ItemType Directory -Path $folder -Force | Out-Null
        Write-Host "✓ Создана папка: $folder" -ForegroundColor Cyan
    } else {
        Write-Host "⊘ Папка уже существует: $folder" -ForegroundColor Yellow
    }
}

Write-Host "`nСтруктура папок успешно создана!" -ForegroundColor Green

