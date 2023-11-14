export enum TARGET_ROUTES {
  BaseClientStats = '/client-stats',
  ClientStats = '/client-stats/:id',
  SenlerStats = '/senler-stats',
  Expenses = '/expenses',
  BaseClientSettings = '/client-settings',
  ClientSettings = '/client-settings/:id',
  GuestStats = '/guest-stats/:clientId/:token',
  CampaignsSettings = '/campaigns-settings',

  Companies = '/target/company',
  Invoice = '/target/invoice',
  Settings = '/target/settings',
  SettingsClients = '/target/settings/*',
  SettingsClient = '/target/settings/client/:clientId',
  SettingsCompanies = '/target/settings/company',
}
