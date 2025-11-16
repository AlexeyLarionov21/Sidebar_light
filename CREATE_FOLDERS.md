# Команды для создания структуры папок проекта

## PowerShell (одна строка)

```powershell
$f = @("app/assets/css", "app/assets/images", "app/assets/icons", "app/assets/fonts", "app/components/layout/Header", "app/components/layout/Sidebar", "app/components/layout/Footer", "app/components/layout/ContentArea", "app/components/features/Dashboard", "app/components/features/Profile", "app/components/features/Settings", "app/components/features/UI/Buttons", "app/components/features/UI/Inputs", "app/components/features/UI/Cards", "app/components/features/UI/Modals", "app/components/features/UI/Notifications", "app/components/features/UI/Forms", "app/components/features/UI/Tables", "app/components/features/UI/Loaders", "app/components/features/UI/Dropdowns", "app/components/features/UI/Tabs", "app/composables", "app/layouts", "app/pages/dashboard", "app/pages/profile", "app/pages/settings", "app/types", "app/models", "app/utils", "app/constants", "app/middleware", "app/stores", "app/api/controllers", "app/api/services", "app/api/types", "app/hooks", "app/config", "public/images", "public/icons"); $f | ForEach-Object { New-Item -ItemType Directory -Path $_ -Force | Out-Null; Write-Host "✓ $_" -ForegroundColor Cyan }; Write-Host "`nГотово!" -ForegroundColor Green
```

## PowerShell (скрипт)

```powershell
.\create-template-structure.ps1
```

## Bash / Git Bash / WSL

```bash
bash create-template-structure.sh
```

## Или вручную (одна команда mkdir для Unix-систем)

```bash
mkdir -p app/{assets/{css,images,icons,fonts},components/{layout/{Header,Sidebar,Footer,ContentArea},features/{Dashboard,Profile,Settings,UI/{Buttons,Inputs,Cards,Modals,Notifications,Forms,Tables,Loaders,Dropdowns,Tabs}}},composables,layouts,pages/{dashboard,profile,settings},types,models,utils,constants,middleware,stores,api/{controllers,services,types},hooks,config} public/{images,icons}
```

## Структура папок

```
app/
├── assets/
│   ├── css/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── components/
│   ├── layout/
│   │   ├── Header/
│   │   ├── Sidebar/
│   │   ├── Footer/
│   │   └── ContentArea/
│   └── features/
│       ├── Dashboard/
│       ├── Profile/
│       ├── Settings/
│       └── UI/
│           ├── Buttons/
│           ├── Inputs/
│           ├── Cards/
│           ├── Modals/
│           ├── Notifications/
│           ├── Forms/
│           ├── Tables/
│           ├── Loaders/
│           ├── Dropdowns/
│           └── Tabs/
├── composables/
├── layouts/
├── pages/
│   ├── dashboard/
│   ├── profile/
│   └── settings/
├── types/
├── models/
├── utils/
├── constants/
├── middleware/
├── stores/
├── api/
│   ├── controllers/
│   ├── services/
│   └── types/
├── hooks/
└── config/

public/
├── images/
└── icons/
```
