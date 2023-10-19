interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member'],
  tenantName: 'Company',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage own account information', 'Book a car', 'Write a review', 'Report an issue'],
  ownerAbilities: [
    'Manage user information',
    'Manage company details',
    'Manage cars in the company',
    'Manage bookings',
    'Review car services',
    'Manage reports',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/f9c501cb-e250-4d16-a7e8-0d328ce10c24',
};
