const mapping: Record<string, string> = {
  companies: 'company',
  employees: 'employee',
  guests: 'guest',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
